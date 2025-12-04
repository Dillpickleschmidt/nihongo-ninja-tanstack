-- Drop vocabulary_key column - it's write-only and never used
-- The column stored POS tag info but was never queried

ALTER TABLE public.learning_path_module_sources
DROP COLUMN vocabulary_key;
