-- Migration: Simplify practice sessions to event-based completions
-- Remove real-time tracking fields, use single completion timestamp
-- All durations are estimated/calculated, not measured

-- Drop old indexes
DROP INDEX IF EXISTS idx_sessions_latest;
DROP INDEX IF EXISTS idx_sessions_by_date;

-- Rename created_at to completed_at for clearer semantics
ALTER TABLE user_practice_sessions
  RENAME COLUMN created_at TO completed_at;

-- Remove real-time tracking columns
ALTER TABLE user_practice_sessions
  DROP COLUMN IF EXISTS started_at,
  DROP COLUMN IF EXISTS ended_at;

-- Make duration_seconds required (always have estimated/calculated value)
ALTER TABLE user_practice_sessions
  ALTER COLUMN duration_seconds SET NOT NULL,
  ALTER COLUMN duration_seconds SET DEFAULT 0;

-- Create new index optimized for completion-based queries (daily goals, activity timeline)
CREATE INDEX idx_sessions_by_completion
  ON user_practice_sessions (user_id, completed_at DESC);
