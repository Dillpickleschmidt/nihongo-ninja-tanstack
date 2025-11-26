-- Use JSONB for transcript_line_ids instead of integer[][]
-- PostgreSQL multidimensional arrays require uniform dimensions
-- But we have jagged arrays (different words appear in different numbers of lines)
-- JSONB naturally supports nested arrays of varying lengths

-- Drop and recreate the table with JSONB
DROP TABLE public.learning_path_module_sources;

CREATE TABLE public.learning_path_module_sources (
  path_id uuid not null references public.learning_path_transcripts(path_id) on delete cascade,
  module_id text not null,
  source_type text not null check (source_type in ('grammar', 'vocabulary')),
  grammar_pattern_ids text[],
  vocabulary_key text,
  transcript_line_ids jsonb not null,
  order_index integer not null default 0,
  primary key (path_id, module_id)
);

-- Create indexes for performance
create index idx_learning_path_module_sources_path_id on public.learning_path_module_sources(path_id);

-- Enable RLS
alter table public.learning_path_module_sources enable row level security;

-- RLS Policies
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
