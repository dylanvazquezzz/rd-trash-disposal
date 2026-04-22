import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { buildReminderBlocks, postToSlack } from '@/lib/slack'

// Vercel invokes this with Authorization: Bearer CRON_SECRET
function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false
  const auth = req.headers.get('authorization')
  return auth === `Bearer ${secret}`
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const webhookUrl = process.env.SLACK_UPCOMING_WEBHOOK_URL
  if (!webhookUrl) {
    return NextResponse.json({ skipped: 'SLACK_UPCOMING_WEBHOOK_URL not set' })
  }

  // Find jobs whose local ET time is 23–25 hours from now, not yet reminded, not cancelled/complete
  const { data: jobs, error } = await supabaseAdmin.rpc('jobs_due_for_reminder')

  if (error) {
    console.error('Reminder query error:', error)
    return NextResponse.json({ error: 'Query failed' }, { status: 500 })
  }

  if (!jobs || jobs.length === 0) {
    return NextResponse.json({ sent: 0 })
  }

  let sent = 0
  for (const job of jobs) {
    await postToSlack(webhookUrl, buildReminderBlocks(job))

    await supabaseAdmin
      .from('jobs')
      .update({ reminder_sent: true })
      .eq('id', job.id)

    sent++
  }

  return NextResponse.json({ sent })
}
