-- Add reminder tracking column
alter table jobs add column if not exists reminder_sent boolean not null default false;

-- Function: returns all jobs scheduled for tomorrow (ET timezone)
-- Called once daily at 5pm ET — sends reminders for everything the next day
create or replace function jobs_due_for_reminder()
returns setof jobs
language sql
security definer
as $$
  select *
  from jobs
  where reminder_sent = false
    and status not in ('cancelled', 'complete')
    and job_date = (current_timestamp at time zone 'America/New_York')::date + 1;
$$;
