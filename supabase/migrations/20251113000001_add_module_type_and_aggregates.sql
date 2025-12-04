-- Add module_type column to user_practice_sessions
ALTER TABLE user_practice_sessions
ADD COLUMN module_type TEXT NOT NULL;

-- Create index for efficient filtering by module_type
CREATE INDEX idx_user_practice_sessions_module_type
ON user_practice_sessions(user_id, module_type, created_at DESC);

-- RPC function to get daily aggregates for all-time practice history
CREATE OR REPLACE FUNCTION get_user_daily_aggregates(user_id_param UUID)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  result jsonb;
BEGIN
  SELECT jsonb_object_agg(
    practice_date,
    total_seconds
  )
  INTO result
  FROM (
    SELECT
      DATE(created_at AT TIME ZONE 'UTC')::text as practice_date,
      SUM(duration_seconds)::integer as total_seconds
    FROM user_practice_sessions
    WHERE user_id = user_id_param
    GROUP BY DATE(created_at AT TIME ZONE 'UTC')
    ORDER BY practice_date ASC
  ) daily_stats;

  RETURN COALESCE(result, '{}'::jsonb);
END;
$$;
