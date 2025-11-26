-- Fix vocabulary ordering by set
-- Replaces get_vocabulary_by_sets RPC to:
-- 1. Preserve vocabulary_keys array order using unnest WITH ORDINALITY
-- 2. Return results segmented by set_id in a JSONB object
-- 3. Remove DISTINCT to avoid alphabetical sorting

DROP FUNCTION IF EXISTS get_vocabulary_by_sets(text[]);

CREATE FUNCTION get_vocabulary_by_sets(set_ids text[])
RETURNS jsonb AS $$
DECLARE
  result jsonb;
BEGIN
  SELECT json_object_agg(
    s.set_id,
    json_agg(
      json_build_object(
        'key', v.key,
        'word', v.word,
        'furigana', v.furigana,
        'english', v.english,
        'part_of_speech', v.part_of_speech,
        'info', v.info,
        'mnemonics', v.mnemonics,
        'example_sentences', v.example_sentences,
        'videos', v.videos,
        'particles', v.particles,
        'overwrite_word', v.overwrite_word
      )
      ORDER BY vk_ord
    )
  ) INTO result
  FROM core_vocabulary_sets s,
       LATERAL unnest(s.vocabulary_keys) WITH ORDINALITY AS vk(key, vk_ord)
  INNER JOIN core_vocabulary_items v ON v.key = vk.key
  WHERE s.set_id = ANY(set_ids)
  GROUP BY s.set_id;

  RETURN COALESCE(result, '{}'::jsonb);
END;
$$ LANGUAGE plpgsql STABLE;
