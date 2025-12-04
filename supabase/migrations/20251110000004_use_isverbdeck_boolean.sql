-- Update upload_learning_path RPC: use isVerbDeck boolean instead of deckPOS field
-- Simpler and more accurate representation of deck type

DROP FUNCTION IF EXISTS upload_learning_path(UUID, JSONB, JSONB[], JSONB[]);

CREATE OR REPLACE FUNCTION upload_learning_path(
  user_id_param UUID,
  transcript_data JSONB,
  vocab_decks JSONB[],
  module_sources JSONB[]
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_path_id UUID;
  new_deck_id TEXT;
  deck_ids JSONB := '[]'::JSONB;
  deck_item JSONB;
  vocab_item JSONB;
  module_item JSONB;
BEGIN
  -- Generate UUID for the learning path
  new_path_id := gen_random_uuid();

  -- Insert transcript record
  INSERT INTO learning_path_transcripts (
    path_id,
    user_id,
    name,
    show_name,
    episode_name,
    transcript_data
  )
  VALUES (
    new_path_id,
    user_id_param,
    transcript_data->>'name',
    transcript_data->>'show_name',
    transcript_data->>'episode_name',
    transcript_data->'transcript_data'
  );

  -- Create vocabulary decks and insert vocabulary items
  FOR deck_item IN SELECT * FROM jsonb_array_elements(array_to_json(vocab_decks)::JSONB)
  LOOP
    -- Generate 11-character deck ID
    new_deck_id := LOWER(SUBSTRING(MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT) FROM 1 FOR 11));

    -- Insert deck
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

    -- Track deck ID
    deck_ids := deck_ids || jsonb_build_object('deck_id', new_deck_id);

    -- Insert vocabulary items for this deck
    -- Use isVerbDeck boolean to set is_verb for all words in the deck
    FOR vocab_item IN SELECT * FROM jsonb_array_elements(deck_item->'words')
    LOOP
      INSERT INTO vocabulary_items (
        deck_id,
        word,
        furigana,
        english,
        is_verb
      )
      VALUES (
        new_deck_id,
        vocab_item->>'word',
        vocab_item->>'furigana',
        ARRAY[COALESCE(vocab_item->>'english', vocab_item->>'word')]::TEXT[],
        (deck_item->>'isVerbDeck')::boolean
      );
    END LOOP;

    -- Insert vocabulary module source for this deck (with order_index)
    INSERT INTO learning_path_module_sources (
      path_id,
      module_id,
      source_type,
      grammar_pattern_id,
      vocabulary_key,
      transcript_line_ids,
      order_index
    )
    VALUES (
      new_path_id,
      new_deck_id,
      'vocabulary',
      NULL,
      CASE WHEN (deck_item->>'isVerbDeck')::boolean THEN 'verbs' ELSE 'non-verbs' END,
      ARRAY(SELECT jsonb_array_elements_text(deck_item->'transcriptLineIds'))::INTEGER[],
      (deck_item->>'orderIndex')::INTEGER
    );
  END LOOP;

  -- Insert grammar module sources
  FOR module_item IN SELECT * FROM jsonb_array_elements(array_to_json(module_sources)::JSONB)
  LOOP
    INSERT INTO learning_path_module_sources (
      path_id,
      module_id,
      source_type,
      grammar_pattern_id,
      vocabulary_key,
      transcript_line_ids,
      order_index
    )
    VALUES (
      new_path_id,
      module_item->>'moduleId',
      module_item->>'sourceType',
      NULL,
      NULL,
      ARRAY(SELECT jsonb_array_elements_text(module_item->'transcriptLineIds'))::INTEGER[],
      (module_item->>'orderIndex')::INTEGER
    );
  END LOOP;

  -- Return path ID and created deck IDs
  RETURN jsonb_build_object(
    'path_id', new_path_id,
    'deck_ids', deck_ids
  );
END;
$$;
