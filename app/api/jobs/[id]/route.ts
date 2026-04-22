import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { isAdminAuthenticated, unauthorizedResponse } from '@/lib/admin-auth'

type JobStatus = 'scheduled' | 'in_progress' | 'complete' | 'cancelled'
type JobType = 'junk_removal' | 'demolition'

const ALLOWED_FIELDS = new Set([
  'job_date', 'job_time', 'job_type', 'address', 'zip_code',
  'description', 'status', 'contact_name', 'contact_phone',
])

const VALID_STATUSES: JobStatus[] = ['scheduled', 'in_progress', 'complete', 'cancelled']
const VALID_JOB_TYPES: JobType[] = ['junk_removal', 'demolition']

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await isAdminAuthenticated()) return unauthorizedResponse()

  const { id } = await params
  const body = await req.json()

  const update: Record<string, unknown> = {}
  for (const key of Object.keys(body)) {
    if (ALLOWED_FIELDS.has(key)) update[key] = body[key]
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 })
  }

  if (update.status && !VALID_STATUSES.includes(update.status as JobStatus)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  if (update.job_type && !VALID_JOB_TYPES.includes(update.job_type as JobType)) {
    return NextResponse.json({ error: 'Invalid job_type' }, { status: 400 })
  }

  // If the schedule changes, reset the reminder so it fires again at the new time
  if (update.job_date || update.job_time) {
    update.reminder_sent = false
  }

  const { data, error } = await supabaseAdmin
    .from('jobs')
    .update(update)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Jobs PATCH error:', error)
    return NextResponse.json({ error: 'Failed to update job' }, { status: 500 })
  }

  return NextResponse.json(data)
}
