-- Create function to generate random 11-character IDs with collision retry
CREATE OR REPLACE FUNCTION generate_deck_id()
RETURNS text AS $$
DECLARE
  new_id text;
  attempts int := 0;
BEGIN
  LOOP
    -- Generate random 11-char ID
    new_id := translate(
      substring(encode(gen_random_bytes(9), 'base64'), 1, 11),
      '+/=', 'xyz'
    );

    -- Return if unique
    IF NOT EXISTS (SELECT 1 FROM user_decks WHERE deck_id = new_id) THEN
      RETURN new_id;
    END IF;

    -- Safety: prevent infinite loop
    attempts := attempts + 1;
    IF attempts > 10 THEN
      RAISE EXCEPTION 'Could not generate unique deck_id after 10 attempts';
    END IF;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Drop foreign keys
ALTER TABLE vocabulary_items DROP CONSTRAINT vocabulary_items_deck_id_fkey;
ALTER TABLE public_deck_shares DROP CONSTRAINT public_deck_shares_deck_id_fkey;

-- Change deck_id to text with auto-generation
ALTER TABLE user_decks ALTER COLUMN deck_id DROP IDENTITY;
ALTER TABLE user_decks ALTER COLUMN deck_id SET DATA TYPE text;
ALTER TABLE user_decks ALTER COLUMN deck_id SET DEFAULT generate_deck_id();

ALTER TABLE vocabulary_items ALTER COLUMN deck_id SET DATA TYPE text;
ALTER TABLE public_deck_shares ALTER COLUMN deck_id SET DATA TYPE text;

-- Add unique constraint
ALTER TABLE user_decks ADD CONSTRAINT user_decks_deck_id_unique UNIQUE (deck_id);

-- Recreate foreign keys
ALTER TABLE vocabulary_items ADD CONSTRAINT vocabulary_items_deck_id_fkey
  FOREIGN KEY (deck_id) REFERENCES user_decks(deck_id);
ALTER TABLE public_deck_shares ADD CONSTRAINT public_deck_shares_deck_id_fkey
  FOREIGN KEY (deck_id) REFERENCES user_decks(deck_id);
