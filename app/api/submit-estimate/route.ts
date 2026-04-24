import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { formatPhone } from '@/lib/slack'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, city, contactPreference, contactValue, serviceType, description, preferredDate, preferredTime, photoUrls } = body

    if (!name || !city || !contactPreference || !contactValue) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const photoFormulas = (photoUrls as string[]).map((url) => `=IMAGE("${url}")`)

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/^"|"$/g, ''),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })

    const row = [
      timestamp,
      name,
      city,
      serviceType,
      contactPreference,
      contactValue,
      description || '',
      preferredDate || '',
      preferredTime || '',
      ...photoFormulas,
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:L',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [row] },
    })

    // Slack notification
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      const serviceLabel = serviceType === 'demolition' ? 'Demolition' : 'Junk Removal'
      const contactLabel = contactPreference === 'text' ? 'Phone' : 'Email'
      const formattedContact = contactPreference === 'text' ? formatPhone(contactValue) : contactValue

      const detailLines = [
        `*Name:* ${name}`,
        `*City:* ${city}`,
        `*Service:* ${serviceLabel}`,
        `*${contactLabel}:* ${formattedContact}`,
      ]
      if (description) detailLines.push(`*Description:* ${description}`)
      if (preferredDate) detailLines.push(`*Preferred date:* ${preferredDate}${preferredTime ? ` (${preferredTime})` : ''}`)
      detailLines.push(`_${timestamp}_`)

      const blocks: object[] = [
        {
          type: 'header',
          text: { type: 'plain_text', text: 'New Estimate Request', emoji: false },
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
            alt_text: 'Estimate photo',
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
    console.error('Submit estimate error:', error)
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
