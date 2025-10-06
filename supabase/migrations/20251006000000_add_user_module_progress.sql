-- Migration: Add unified user_module_progress table
-- This replaces user_module_completions with a more comprehensive progress tracking system

-- Create the new table
CREATE TABLE IF NOT EXISTS user_module_progress (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  module_path TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
  completion_percentage INTEGER NOT NULL DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
  time_spent_seconds INTEGER NOT NULL DEFAULT 0,
  questions_answered INTEGER NOT NULL DEFAULT 0,
  completed_at TIMESTAMPTZ,
  last_activity_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  PRIMARY KEY (user_id, module_path)
);

-- Create indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_user_module_progress_user_id ON user_module_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_module_progress_last_activity ON user_module_progress(user_id, last_activity_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_module_progress_status ON user_module_progress(user_id, status);

-- Migrate existing completion data
INSERT INTO user_module_progress (user_id, module_path, status, completion_percentage, completed_at, last_activity_at, created_at)
SELECT
  user_id,
  module_path,
  'completed' as status,
  100 as completion_percentage,
  completed_at,
  completed_at as last_activity_at,
  completed_at as created_at
FROM user_module_completions
ON CONFLICT (user_id, module_path) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE user_module_progress ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (users can only access their own progress)
CREATE POLICY "Users can view their own module progress"
  ON user_module_progress
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own module progress"
  ON user_module_progress
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own module progress"
  ON user_module_progress
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own module progress"
  ON user_module_progress
  FOR DELETE
  USING (auth.uid() = user_id);

-- Note: We're keeping user_module_completions table for now for backward compatibility
-- It can be dropped after verifying the migration is successful
