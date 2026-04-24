import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

const SHEET_ID = '1bZVfkSS9w1FU209_AzTG3xQ7kDqRY8_XiC6m36lK5ZM'
const TAB = 'Contractors'
const COL_TRACKING_ID = 13 // N (0-indexed)
const COL_OPENED_AT   = 17 // R (0-indexed)

// 1x1 transparent GIF
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
)

function getAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/^"|"$/g, ''),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

export async function GET(req: NextRequest) {
  const trackingId = req.nextUrl.searchParams.get('id')

  if (trackingId) {
    // Fire-and-forget — don't block the pixel response
    logOpen(trackingId).catch(() => {})
  }

  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
    },
  })
}

async function logOpen(trackingId: string) {
  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${TAB}!A2:S500`,
  })

  const rows = (res.data.values || []) as string[][]
  const rowIndex = rows.findIndex(r => (r[COL_TRACKING_ID] || '').trim() === trackingId)

  if (rowIndex === -1) return

  const sheetRow = rowIndex + 2 // +1 for 0-index, +1 for header

  // Only write first open (don't overwrite if already set)
  const existingOpen = (rows[rowIndex][COL_OPENED_AT] || '').trim()
  if (existingOpen) return

  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `${TAB}!R${sheetRow}`,
    valueInputOption: 'RAW',
    requestBody: { values: [[new Date().toISOString()]] },
  })
}
