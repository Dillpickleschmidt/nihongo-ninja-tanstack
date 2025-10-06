-- Migration: Final schema cleanup
-- Remove all redundant columns, keep only essential fields

-- Clean up user_practice_sessions: Remove completion_percentage_after
ALTER TABLE user_practice_sessions
  DROP COLUMN IF EXISTS completion_percentage_after;

-- Clean up user_module_progress: Remove redundant tracking columns
-- Keep only: user_id, module_path, completed_at (when module was marked complete)
ALTER TABLE user_module_progress
  DROP COLUMN IF EXISTS completion_percentage,
  DROP COLUMN IF EXISTS created_at,
  DROP COLUMN IF EXISTS updated_at;

-- Make completed_at NOT NULL (always set when marker is created)
ALTER TABLE user_module_progress
  ALTER COLUMN completed_at SET NOT NULL,
  ALTER COLUMN completed_at SET DEFAULT NOW();
