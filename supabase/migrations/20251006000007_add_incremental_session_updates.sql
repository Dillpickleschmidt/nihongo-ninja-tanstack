-- Migration: Add support for incremental session updates
-- Rename completed_at to created_at (when session started)
-- Add last_updated_at (when session was last saved)

-- Rename completed_at to created_at for clearer semantics
ALTER TABLE user_practice_sessions
  RENAME COLUMN completed_at TO created_at;

-- Add last_updated_at for tracking incremental saves
ALTER TABLE user_practice_sessions
  ADD COLUMN last_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- Update index for daily goals (uses created_at, not last_updated_at)
DROP INDEX IF EXISTS idx_sessions_by_completion;
CREATE INDEX idx_sessions_by_date
  ON user_practice_sessions (user_id, created_at DESC);
