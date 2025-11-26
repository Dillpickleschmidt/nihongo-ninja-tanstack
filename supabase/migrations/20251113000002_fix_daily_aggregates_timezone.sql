-- Fix get_user_daily_aggregates to use user's timezone instead of hardcoded UTC
CREATE OR REPLACE FUNCTION get_user_daily_aggregates(user_id_param UUID, timezone_param TEXT DEFAULT 'UTC')
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
      DATE(created_at AT TIME ZONE timezone_param)::text as practice_date,
      SUM(duration_seconds)::integer as total_seconds
    FROM user_practice_sessions
    WHERE user_id = user_id_param
    GROUP BY DATE(created_at AT TIME ZONE timezone_param)
    ORDER BY practice_date ASC
  ) daily_stats;

  RETURN COALESCE(result, '{}'::jsonb);
END;
$$;
