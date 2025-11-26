-- Alter wanikani_items table to optimize schema
-- Assumes 20251123000005 has already created the table
-- Changes:
-- - meanings: JSONB → text[] (store just the meaning strings)
-- - Add meaning_mnemonic column (was missing)
-- - reading_mnemonic: already exists, keep nullable TEXT
-- - character_images: JSONB → character_image_url TEXT (single best image URL)

-- Add meaning_mnemonic column
ALTER TABLE wanikani_items
ADD COLUMN IF NOT EXISTS meaning_mnemonic TEXT;

-- Add new character_image_url column
ALTER TABLE wanikani_items
ADD COLUMN IF NOT EXISTS character_image_url TEXT;

-- Create temporary column for new meanings format
ALTER TABLE wanikani_items
ADD COLUMN IF NOT EXISTS meanings_new TEXT[];

-- Note: Data migration would need to be done separately:
-- UPDATE wanikani_items SET meanings_new = (
--   SELECT array_agg(value->>'meaning')
--   FROM jsonb_array_elements(meanings)
-- );

-- Then swap columns:
-- ALTER TABLE wanikani_items DROP COLUMN meanings;
-- ALTER TABLE wanikani_items RENAME COLUMN meanings_new TO meanings;
-- ALTER TABLE wanikani_items ALTER COLUMN meanings SET NOT NULL;

-- Similarly for character_images → character_image_url
-- UPDATE wanikani_items SET character_image_url = (
--   SELECT url FROM jsonb_array_elements(character_images)
--   WHERE content_type = 'image/svg+xml' LIMIT 1
-- );
-- ALTER TABLE wanikani_items DROP COLUMN character_images;

-- For now, keeping both old and new columns.
-- Run import script to populate the new schema correctly.
