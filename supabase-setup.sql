create extension if not exists pgcrypto;

create table if not exists public.trainees (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  track text not null check (track in ('website', 'video')),
  level text not null,
  portfolio text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  trainee_id uuid not null references public.trainees(id) on delete cascade,
  lesson_id text not null,
  lesson_title text not null,
  link text,
  reflection text,
  status text not null default 'Submitted' check (status in ('Submitted', 'Pass', 'Revise', 'Fail')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (trainee_id, lesson_id)
);

create index if not exists trainees_email_idx on public.trainees (email);
create index if not exists trainees_status_idx on public.trainees (status);
create index if not exists submissions_trainee_id_idx on public.submissions (trainee_id);
create index if not exists submissions_status_idx on public.submissions (status);

alter table public.trainees enable row level security;
alter table public.submissions enable row level security;

revoke all on public.trainees from anon, authenticated;
revoke all on public.submissions from anon, authenticated;
