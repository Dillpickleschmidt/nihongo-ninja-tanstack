-- Migration: Add get_vocabulary_stats RPC function for optimized statistics queries
-- This function uses COUNT(DISTINCT) in SQL instead of fetching all data to count in JS
-- Performance improvement: Reduces 4 queries to 1 query + eliminates network transfer of thousands of rows

CREATE OR REPLACE FUNCTION get_vocabulary_stats(
  user_id_param UUID,
  week_ago_param TIMESTAMPTZ
)
RETURNS JSON AS $$
BEGIN
  RETURN json_build_object(
    'vocab_total', (
      SELECT COUNT(DISTINCT practice_item_key)
      FROM fsrs_cards
      WHERE user_id = user_id_param AND type = 'vocabulary'
    ),
    'kanji_total', (
      SELECT COUNT(DISTINCT practice_item_key)
      FROM fsrs_cards
      WHERE user_id = user_id_param AND type IN ('kanji', 'radical')
    ),
    'vocab_week', (
      SELECT COUNT(DISTINCT practice_item_key)
      FROM fsrs_cards
      WHERE user_id = user_id_param
        AND type = 'vocabulary'
        AND created_at >= week_ago_param
    ),
    'kanji_week', (
      SELECT COUNT(DISTINCT practice_item_key)
      FROM fsrs_cards
      WHERE user_id = user_id_param
        AND type IN ('kanji', 'radical')
        AND created_at >= week_ago_param
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_vocabulary_stats(UUID, TIMESTAMPTZ) TO authenticated;

-- Add comment for documentation
COMMENT ON FUNCTION get_vocabulary_stats IS 'Returns vocabulary and kanji statistics (total and last week). Used by progress page for efficient counting.';
