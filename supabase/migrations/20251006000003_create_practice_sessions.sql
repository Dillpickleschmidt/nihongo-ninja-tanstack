-- Migration: Create user_practice_sessions table for detailed activity tracking
-- This provides the source of truth for time tracking and daily goals

CREATE TABLE IF NOT EXISTS user_practice_sessions (
  session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_path TEXT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMPTZ,
  duration_seconds INTEGER,
  questions_answered INTEGER,
  completion_percentage_after INTEGER CHECK (completion_percentage_after >= 0 AND completion_percentage_after <= 100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for getting latest session per module (current state queries)
CREATE INDEX IF NOT EXISTS idx_sessions_latest
  ON user_practice_sessions (user_id, module_path, ended_at DESC);

-- Index for time-based queries (daily goals, date ranges)
CREATE INDEX IF NOT EXISTS idx_sessions_by_date
  ON user_practice_sessions (user_id, started_at);

-- Enable Row Level Security
ALTER TABLE user_practice_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own sessions
CREATE POLICY "Users can view their own practice sessions"
  ON user_practice_sessions
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own practice sessions"
  ON user_practice_sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own practice sessions"
  ON user_practice_sessions
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own practice sessions"
  ON user_practice_sessions
  FOR DELETE
  USING (auth.uid() = user_id);
