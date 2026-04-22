create table if not exists jobs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  job_date date not null,
  job_time text not null,
  job_type text not null check (job_type in ('junk_removal', 'demolition')),
  address text not null,
  zip_code text not null,
  description text,
  status text not null default 'scheduled' check (status in ('scheduled', 'in_progress', 'complete', 'cancelled')),
  contact_name text not null,
  contact_phone text
);

alter table jobs enable row level security;

-- Service role bypasses RLS automatically. No public access needed.
