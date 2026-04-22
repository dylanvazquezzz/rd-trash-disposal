import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { isAdminAuthenticated, unauthorizedResponse } from '@/lib/admin-auth'

type Job = {
  id: string
  created_at: string
  job_date: string
  job_time: string
  job_type: 'junk_removal' | 'demolition'
  address: string
  zip_code: string
  description: string | null
  status: 'scheduled' | 'in_progress' | 'complete' | 'cancelled'
  contact_name: string
  contact_phone: string | null
}

export async function GET() {
  if (!await isAdminAuthenticated()) return unauthorizedResponse()

  const { data, error } = await supabaseAdmin
    .from('jobs')
    .select('*')
    .order('job_date', { ascending: true })
    .order('job_time', { ascending: true })

  if (error) {
    console.error('Jobs GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }

  return NextResponse.json(data as Job[])
}

export async function POST(req: NextRequest) {
  if (!await isAdminAuthenticated()) return unauthorizedResponse()

  const body = await req.json()
  const { job_date, job_time, job_type, address, zip_code, contact_name, contact_phone, description } = body

  if (!job_date || !job_time || !job_type || !address || !zip_code || !contact_name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('jobs')
    .insert({ job_date, job_time, job_type, address, zip_code, contact_name, contact_phone: contact_phone ?? null, description: description ?? null })
    .select()
    .single()

  if (error) {
    console.error('Jobs POST error:', error)
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }

  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
  if (slackWebhookUrl) {
    const jobTypeLabel = job_type === 'demolition' ? 'Demolition' : 'Junk Removal'
    const detailLines = [
      `*Job Type:* ${jobTypeLabel}`,
      `*Date:* ${job_date}`,
      `*Time:* ${job_time}`,
      `*Address:* ${address}, ${zip_code}`,
      `*Contact:* ${contact_name}`,
    ]
    if (contact_phone) detailLines.push(`*Phone:* ${contact_phone}`)
    if (description) detailLines.push(`*Description:* ${description}`)

    const blocks: object[] = [
      { type: 'header', text: { type: 'plain_text', text: 'New Job Booked', emoji: false } },
      { type: 'section', text: { type: 'mrkdwn', text: detailLines.join('\n') } },
    ]

    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blocks }),
    })
  }

  return NextResponse.json(data as Job, { status: 201 })
}
