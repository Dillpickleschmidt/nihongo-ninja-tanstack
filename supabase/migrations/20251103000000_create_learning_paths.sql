-- Create learning_path_transcripts table
create table public.learning_path_transcripts (
  path_id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  name text not null,
  show_name text,
  episode_name text,
  transcript_data jsonb not null,
  created_at timestamp with time zone default now(),
  unique(user_id, name)
);

-- Create learning_path_module_sources table
create table public.learning_path_module_sources (
  path_id uuid not null references public.learning_path_transcripts(path_id) on delete cascade,
  module_id text not null,
  source_type text not null check (source_type in ('grammar', 'vocabulary')),
  grammar_pattern_id text,
  vocabulary_key text,
  transcript_line_ids integer[] not null,
  primary key (path_id, module_id)
);

-- Update user_decks source constraint to include 'learning_path'
alter table public.user_decks
drop constraint user_decks_source_check;

alter table public.user_decks
add constraint user_decks_source_check check (source = any(array['built-in'::text, 'anki'::text, 'wanikani'::text, 'jpdb'::text, 'user'::text, 'shared'::text, 'learning_path'::text]));

-- Create indexes for performance
create index idx_learning_path_transcripts_user_id on public.learning_path_transcripts(user_id);
create index idx_learning_path_module_sources_path_id on public.learning_path_module_sources(path_id);

-- Enable RLS
alter table public.learning_path_transcripts enable row level security;
alter table public.learning_path_module_sources enable row level security;

-- RLS Policies for learning_path_transcripts
create policy "Users can read their own learning path transcripts"
on public.learning_path_transcripts for select
using (auth.uid() = user_id);

create policy "Users can insert their own learning path transcripts"
on public.learning_path_transcripts for insert
with check (auth.uid() = user_id);

create policy "Users can update their own learning path transcripts"
on public.learning_path_transcripts for update
using (auth.uid() = user_id);

create policy "Users can delete their own learning path transcripts"
on public.learning_path_transcripts for delete
using (auth.uid() = user_id);

-- RLS Policies for learning_path_module_sources
create policy "Users can read module sources for their learning paths"
on public.learning_path_module_sources for select
using (
  exists (
    select 1 from public.learning_path_transcripts
    where learning_path_transcripts.path_id = learning_path_module_sources.path_id
    and learning_path_transcripts.user_id = auth.uid()
  )
);

create policy "Users can insert module sources for their learning paths"
on public.learning_path_module_sources for insert
with check (
  exists (
    select 1 from public.learning_path_transcripts
    where learning_path_transcripts.path_id = learning_path_module_sources.path_id
    and learning_path_transcripts.user_id = auth.uid()
  )
);

create policy "Users can update module sources for their learning paths"
on public.learning_path_module_sources for update
using (
  exists (
    select 1 from public.learning_path_transcripts
    where learning_path_transcripts.path_id = learning_path_module_sources.path_id
    and learning_path_transcripts.user_id = auth.uid()
  )
);

create policy "Users can delete module sources for their learning paths"
on public.learning_path_module_sources for delete
using (
  exists (
    select 1 from public.learning_path_transcripts
    where learning_path_transcripts.path_id = learning_path_module_sources.path_id
    and learning_path_transcripts.user_id = auth.uid()
  )
);
