-- Drop grammar_pattern_ids column - it's write-only and never used
-- This simplifies the schema and removes unused complexity

ALTER TABLE public.learning_path_module_sources
DROP COLUMN grammar_pattern_ids;
