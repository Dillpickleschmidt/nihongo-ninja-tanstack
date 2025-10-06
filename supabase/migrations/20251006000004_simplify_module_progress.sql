-- Migration: Simplify user_module_progress table
-- Remove cumulative fields (now derived from sessions)
-- Add NOT NULL constraints for data integrity

-- Add NOT NULL constraints and defaults
ALTER TABLE user_module_progress
  ALTER COLUMN completion_percentage SET NOT NULL,
  ALTER COLUMN completion_percentage SET DEFAULT 0,
  ALTER COLUMN updated_at SET NOT NULL,
  ALTER COLUMN created_at SET NOT NULL;

-- Remove cumulative fields (now derived from user_practice_sessions)
ALTER TABLE user_module_progress
  DROP COLUMN IF EXISTS time_spent_seconds,
  DROP COLUMN IF EXISTS questions_answered;

-- Note: completed_at remains nullable (only set when module reaches 100%)
