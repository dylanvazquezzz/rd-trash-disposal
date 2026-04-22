export type JobType = 'junk_removal' | 'demolition'
export type JobStatus = 'scheduled' | 'in_progress' | 'complete' | 'cancelled'

export type Job = {
  id: string
  created_at: string
  job_date: string
  job_time: string
  job_type: JobType
  address: string
  zip_code: string
  description: string | null
  status: JobStatus
  contact_name: string
  contact_phone: string | null
}

export type CreateJobPayload = Omit<Job, 'id' | 'created_at'>

export type ViewMode = 'day' | 'week' | 'month'
