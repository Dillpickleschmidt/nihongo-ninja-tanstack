-- Fix nested aggregate function error in get_vocabulary_by_sets
-- Use subquery to avoid nesting json_agg inside json_object_agg

DROP FUNCTION IF EXISTS get_vocabulary_by_sets(text[]);

CREATE FUNCTION get_vocabulary_by_sets(set_ids text[])
RETURNS jsonb AS $$
BEGIN
  RETURN COALESCE(
    (SELECT json_object_agg(set_id, vocab_items)
     FROM (
       SELECT
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
         ) as vocab_items
       FROM core_vocabulary_sets s,
            LATERAL unnest(s.vocabulary_keys) WITH ORDINALITY AS vk(key, vk_ord)
       INNER JOIN core_vocabulary_items v ON v.key = vk.key
       WHERE s.set_id = ANY(set_ids)
       GROUP BY s.set_id
     ) subquery),
    '{}'::jsonb
  );
END;
$$ LANGUAGE plpgsql STABLE;
