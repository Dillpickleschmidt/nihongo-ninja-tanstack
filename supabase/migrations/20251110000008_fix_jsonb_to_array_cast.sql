-- Fix upload_learning_path RPC to properly cast JSONB to integer[][]
-- JSONB uses [] for arrays, but PostgreSQL arrays use {}
-- We need to translate the format before casting

CREATE OR REPLACE FUNCTION upload_learning_path(
  user_id_param UUID,
  transcript_data JSONB,
  vocab_decks JSONB[],
  module_sources JSONB[]
)
RETURNS JSONB AS $$
DECLARE
  new_path_id UUID;
  new_deck_ids TEXT[];
  deck_item JSONB;
  vocab_item JSONB;
  module_item JSONB;
  new_deck_id TEXT;
  deck_index INT;
BEGIN
  -- Insert learning path transcript
  INSERT INTO learning_path_transcripts (
    user_id,
    name,
    show_name,
    episode_name,
    transcript_data
  )
  VALUES (
    user_id_param,
    transcript_data->>'name',
    transcript_data->>'show_name',
    transcript_data->>'episode_name',
    transcript_data->'transcript_data'
  )
  RETURNING path_id INTO new_path_id;

  -- Create vocabulary decks and insert vocabulary items
  new_deck_ids := ARRAY[]::TEXT[];

  FOR deck_index IN 1..array_length(vocab_decks, 1) LOOP
    deck_item := vocab_decks[deck_index];

    -- Insert deck and get generated deck_id
    INSERT INTO user_decks (
      user_id,
      deck_name,
      deck_description,
      source,
      allowed_practice_modes
    )
    VALUES (
      user_id_param,
      deck_item->>'deckName',
      deck_item->>'deckDescription',
      'learning_path',
      ARRAY['meanings', 'spellings']::practice_mode_enum[]
    )
    RETURNING deck_id INTO new_deck_id;

    new_deck_ids := array_append(new_deck_ids, new_deck_id);

    -- Insert vocabulary items for this deck
    INSERT INTO vocabulary_items (
      deck_id,
      word,
      furigana,
      english,
      is_verb
    )
    SELECT
      new_deck_id,
      word_item->>'word',
      word_item->>'furigana',
      ARRAY[COALESCE(word_item->>'english', word_item->>'word')],
      (deck_item->>'isVerbDeck')::boolean
    FROM jsonb_array_elements(deck_item->'words') AS word_item;

    -- Create vocabulary module source with the generated deck_id
    -- transcriptLineIds is now an array of arrays: each word maps to its line IDs
    -- Convert JSONB array format [[1,2],[3,4]] to PostgreSQL array format {{1,2},{3,4}}
    INSERT INTO learning_path_module_sources (
      path_id,
      module_id,
      source_type,
      transcript_line_ids,
      vocabulary_key,
      order_index
    )
    VALUES (
      new_path_id,
      new_deck_id,
      'vocabulary',
      translate((deck_item->'transcriptLineIds')::text, '[]', '{}')::integer[][],
      COALESCE(deck_item->>'posTag', 'vocabulary'),
      COALESCE((deck_item->>'orderIndex')::INT, 0)
    );
  END LOOP;

  -- Insert grammar module sources
  FOR module_index IN 1..array_length(module_sources, 1) LOOP
    module_item := module_sources[module_index];

    INSERT INTO learning_path_module_sources (
      path_id,
      module_id,
      source_type,
      transcript_line_ids,
      grammar_pattern_ids,
      order_index
    )
    VALUES (
      new_path_id,
      module_item->>'moduleId',
      module_item->>'sourceType',
      translate((module_item->'transcriptLineIds')::text, '[]', '{}')::integer[][],
      (module_item->'matchedPatterns')::text[],
      COALESCE((module_item->>'orderIndex')::INT, 0)
    );
  END LOOP;

  -- Return generated IDs
  RETURN json_build_object(
    'path_id', new_path_id,
    'deck_ids', new_deck_ids
  );

EXCEPTION WHEN OTHERS THEN
  -- Re-raise the exception with details
  RAISE EXCEPTION 'Failed to upload learning path: %', SQLERRM;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant permissions to authenticated users
GRANT EXECUTE ON FUNCTION upload_learning_path(UUID, JSONB, JSONB[], JSONB[]) TO authenticated;
