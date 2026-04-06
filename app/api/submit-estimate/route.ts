import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') as string
    const city = formData.get('city') as string
    const contactPreference = formData.get('contactPreference') as string
    const contactValue = formData.get('contactValue') as string
    const description = formData.get('description') as string
    const files = formData.getAll('photos') as File[]

    if (!name || !city || !contactPreference || !contactValue) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Upload images to Supabase Storage
    const photoUrls: string[] = []

    for (const file of files) {
      if (!file || file.size === 0) continue

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name}`

      const { error: uploadError } = await supabaseAdmin.storage
        .from('quote-images')
        .upload(fileName, buffer, { contentType: file.type })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        continue
      }

      const { data: urlData } = supabaseAdmin.storage
        .from('quote-images')
        .getPublicUrl(fileName)

      photoUrls.push(urlData.publicUrl)
    }

    // Build image formulas so photos render inline in the sheet
    const photoFormulas = photoUrls.map((url) => `=IMAGE("${url}")`)

    // Write to Google Sheets
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
      contactPreference,
      contactValue,
      description || '',
      ...photoFormulas,
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:J',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [row] },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Submit estimate error:', error)
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
