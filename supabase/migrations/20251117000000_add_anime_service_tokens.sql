-- Create user_service_tokens table for storing OAuth tokens
CREATE TABLE user_service_tokens (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  service TEXT NOT NULL CHECK (service IN ('anilist', 'kitsu', 'mal')),
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, service)
);

-- Enable RLS
ALTER TABLE user_service_tokens ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can view their own tokens
CREATE POLICY "Users can view their own service tokens"
  ON user_service_tokens FOR SELECT
  USING (user_id = auth.uid());

-- RLS Policy: Users can insert their own tokens
CREATE POLICY "Users can insert their own service tokens"
  ON user_service_tokens FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- RLS Policy: Users can update their own tokens
CREATE POLICY "Users can update their own service tokens"
  ON user_service_tokens FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- RLS Policy: Users can delete their own tokens
CREATE POLICY "Users can delete their own service tokens"
  ON user_service_tokens FOR DELETE
  USING (user_id = auth.uid());

-- Create index for efficient lookups
CREATE INDEX idx_user_service_tokens_user_id
  ON user_service_tokens(user_id);

CREATE INDEX idx_user_service_tokens_user_service
  ON user_service_tokens(user_id, service);
