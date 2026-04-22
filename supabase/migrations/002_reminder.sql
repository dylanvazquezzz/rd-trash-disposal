-- Add reminder tracking column
alter table jobs add column if not exists reminder_sent boolean not null default false;

-- Function: returns jobs whose ET local time is 23–25 hours from now
-- that haven't been reminded yet and aren't cancelled or complete
create or replace function jobs_due_for_reminder()
returns setof jobs
language sql
security definer
as $$
  select *
  from jobs
  where reminder_sent = false
    and status not in ('cancelled', 'complete')
    and (
      (job_date::text || ' ' || job_time)::timestamp
      at time zone 'America/New_York'
    ) between (now() + interval '23 hours') and (now() + interval '25 hours');
$$;
