-- Migration: Simplify user_module_progress schema
-- Remove redundant status and last_activity_at columns

-- Drop status column (redundant with completion_percentage)
-- No row = not started
-- 0 < percentage < 100 = in progress
-- percentage = 100 = completed
ALTER TABLE user_module_progress DROP COLUMN IF EXISTS status;

-- Drop last_activity_at (use updated_at instead for standard DB conventions)
ALTER TABLE user_module_progress DROP COLUMN IF EXISTS last_activity_at;

-- Recreate the index that referenced status (now use completion_percentage)
DROP INDEX IF EXISTS idx_user_module_progress_status;
CREATE INDEX IF NOT EXISTS idx_user_module_progress_completed
  ON user_module_progress(user_id, completion_percentage)
  WHERE completion_percentage = 100;
