import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter: max 10 attempts per IP per 15 minutes
const attempts = new Map<string, { count: number; resetAt: number }>()
const MAX_ATTEMPTS = 10
const WINDOW_MS = 15 * 60 * 1000

function getIp(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = attempts.get(ip)

  if (!record || now > record.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (record.count >= MAX_ATTEMPTS) return true

  record.count += 1
  return false
}

function clearAttempts(ip: string) {
  attempts.delete(ip)
}

export async function POST(req: NextRequest) {
  const ip = getIp(req)

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many attempts. Try again later.' }, { status: 429 })
  }

  const { pin } = await req.json()

  if (!pin || pin !== process.env.ADMIN_PIN) {
    return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 })
  }

  clearAttempts(ip)

  const res = NextResponse.json({ success: true })
  res.cookies.set('admin_session', process.env.ADMIN_PIN!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return res
}

export async function DELETE() {
  const res = NextResponse.json({ success: true })
  res.cookies.set('admin_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  })

  return res
}
