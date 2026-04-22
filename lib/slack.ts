export function formatTime(time: string): string {
  const [hStr, mStr] = time.split(':')
  const h = parseInt(hStr, 10)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const display = h > 12 ? h - 12 : h === 0 ? 12 : h
  return `${display}:${mStr} ${suffix}`
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

export async function postToSlack(webhookUrl: string, blocks: object[]) {
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ blocks }),
  })
}

type JobFields = {
  job_type: string
  job_date: string
  job_time: string
  address: string
  zip_code: string
  contact_name: string
  contact_phone?: string | null
  description?: string | null
}

export function buildBookingBlocks(job: JobFields): object[] {
  const jobTypeLabel = job.job_type === 'demolition' ? 'Demolition' : 'Junk Removal'
  const lines = [
    `*Job Type:* ${jobTypeLabel}`,
    `*Date:* ${formatDate(job.job_date)}`,
    `*Time:* ${formatTime(job.job_time)}`,
    `*Address:* ${job.address}, ${job.zip_code}`,
    `*Contact:* ${job.contact_name}`,
  ]
  if (job.contact_phone) lines.push(`*Phone:* ${job.contact_phone}`)
  if (job.description) lines.push(`*Notes:* ${job.description}`)

  return [
    { type: 'header', text: { type: 'plain_text', text: 'New Job Booked', emoji: false } },
    { type: 'section', text: { type: 'mrkdwn', text: lines.join('\n') } },
  ]
}

export function buildReminderBlocks(job: JobFields): object[] {
  const jobTypeLabel = job.job_type === 'demolition' ? 'Demolition' : 'Junk Removal'
  const lines = [
    `*Type:* ${jobTypeLabel}`,
    `*When:* ${formatDate(job.job_date)} at ${formatTime(job.job_time)}`,
    `*Address:* ${job.address}, ${job.zip_code}`,
    `*Contact:* ${job.contact_name}`,
  ]
  if (job.contact_phone) lines.push(`*Phone:* ${job.contact_phone}`)
  if (job.description) lines.push(`*Notes:* ${job.description}`)

  return [
    { type: 'header', text: { type: 'plain_text', text: 'Job Tomorrow — Heads Up', emoji: false } },
    { type: 'section', text: { type: 'mrkdwn', text: lines.join('\n') } },
  ]
}
