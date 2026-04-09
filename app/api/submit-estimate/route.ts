import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

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
      const lines = [
        `*New estimate request*`,
        `*Name:* ${name}`,
        `*City:* ${city}`,
        `*Service:* ${serviceLabel}`,
        `*${contactLabel}:* ${contactValue}`,
      ]
      if (description) lines.push(`*Description:* ${description}`)
      if (preferredDate) lines.push(`*Preferred date:* ${preferredDate}${preferredTime ? ` (${preferredTime})` : ''}`)
      lines.push(`*Photos:* ${(photoUrls as string[]).length}`)
      lines.push(`_${timestamp}_`)

      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: lines.join('\n') }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Submit estimate error:', error)
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
