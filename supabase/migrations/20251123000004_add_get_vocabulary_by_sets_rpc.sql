-- Create RPC function to fetch vocabulary by set IDs in a single query
-- This function unnests vocabulary_keys arrays and joins with vocabulary items

CREATE OR REPLACE FUNCTION get_vocabulary_by_sets(set_ids text[])
RETURNS TABLE (
  key text,
  word text,
  furigana text,
  english text[],
  part_of_speech part_of_speech_enum,
  info text[],
  mnemonics jsonb,
  example_sentences jsonb,
  videos jsonb,
  particles jsonb,
  overwrite_word text
) AS $$
BEGIN
  RETURN QUERY
  SELECT DISTINCT
    v.key,
    v.word,
    v.furigana,
    v.english,
    v.part_of_speech,
    v.info,
    v.mnemonics,
    v.example_sentences,
    v.videos,
    v.particles,
    v.overwrite_word
  FROM core_vocabulary_sets s,
       LATERAL unnest(s.vocabulary_keys) AS vk(key)
  INNER JOIN core_vocabulary_items v ON v.key = vk.key
  WHERE s.set_id = ANY(set_ids);
END;
$$ LANGUAGE plpgsql STABLE;
