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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Submit estimate error:', error)
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
