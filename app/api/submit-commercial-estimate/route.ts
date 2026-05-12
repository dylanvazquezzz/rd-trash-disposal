import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { formatPhone } from '@/lib/slack'

const propertyTypeLabels: Record<string, string> = {
  'office': 'Office',
  'retail': 'Retail / Storefront',
  'warehouse': 'Warehouse / Industrial',
  'property-management': 'Property Management / HOA',
  'restaurant-hospitality': 'Restaurant / Hospitality',
  'construction-site': 'Construction Site',
  'other': 'Other',
}

const volumeLabels: Record<string, string> = {
  'small': 'Small (1 truck)',
  'medium': 'Medium (2 trucks)',
  'large': 'Large (3+ / bulk)',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      companyName,
      contactName,
      city,
      contactPreference,
      contactValue,
      propertyType,
      estimatedVolume,
      invoiceNeeded,
      description,
      preferredDate,
      preferredTime,
      photoUrls,
    } = body

    if (!companyName || !contactName || !city || !contactPreference || !contactValue || !propertyType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })

    // Google Sheets
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/^"|"$/g, ''),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const photoFormulas = (photoUrls as string[]).map((url) => `=IMAGE("${url}")`)

    const row = [
      timestamp,
      'COMMERCIAL',
      companyName,
      contactName,
      city,
      propertyTypeLabels[propertyType] ?? propertyType,
      volumeLabels[estimatedVolume] ?? estimatedVolume ?? '',
      invoiceNeeded ? 'Yes' : 'No',
      contactPreference,
      contactValue,
      description || '',
      preferredDate || '',
      preferredTime || '',
      ...photoFormulas,
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:N',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [row] },
    })

    // Slack notification
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      const contactLabel = contactPreference === 'text' ? 'Phone' : 'Email'
      const formattedContact = contactPreference === 'text' ? formatPhone(contactValue) : contactValue
      const propertyLabel = propertyTypeLabels[propertyType] ?? propertyType
      const volumeLabel = estimatedVolume ? volumeLabels[estimatedVolume] ?? estimatedVolume : null

      const detailLines = [
        `*Company:* ${companyName}`,
        `*Contact:* ${contactName}`,
        `*City:* ${city}`,
        `*Property Type:* ${propertyLabel}`,
        `*${contactLabel}:* ${formattedContact}`,
        `*Invoice Needed:* ${invoiceNeeded ? 'Yes' : 'No'}`,
      ]
      if (volumeLabel) detailLines.push(`*Estimated Volume:* ${volumeLabel}`)
      if (description) detailLines.push(`*Description:* ${description}`)
      if (preferredDate) detailLines.push(`*Preferred Date:* ${preferredDate}${preferredTime ? ` (${preferredTime})` : ''}`)
      detailLines.push(`_${timestamp}_`)

      const blocks: object[] = [
        {
          type: 'header',
          text: { type: 'plain_text', text: 'New COMMERCIAL Estimate Request', emoji: false },
        },
        {
          type: 'section',
          text: { type: 'mrkdwn', text: detailLines.join('\n') },
        },
      ]

      const urls = photoUrls as string[]
      if (urls.length > 0) {
        blocks.push({ type: 'divider' })
        for (const url of urls) {
          blocks.push({
            type: 'image',
            image_url: url,
            alt_text: 'Job site photo',
          })
        }
      }

      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blocks }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Submit commercial estimate error:', error)
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
