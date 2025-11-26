-- Complete wanikani_items schema transformation
-- Swap old columns for new optimized ones
-- Assumes 20251123000006 has added the new columns

-- Drop old meanings JSONB column
ALTER TABLE wanikani_items
DROP COLUMN IF EXISTS meanings;

-- Rename meanings_new to meanings
ALTER TABLE wanikani_items
RENAME COLUMN meanings_new TO meanings;

-- Set meanings as NOT NULL
ALTER TABLE wanikani_items
ALTER COLUMN meanings SET NOT NULL;

-- Drop old character_images JSONB column
ALTER TABLE wanikani_items
DROP COLUMN IF EXISTS character_images;

-- Set meaning_mnemonic as NOT NULL (was added with default in previous migration)
ALTER TABLE wanikani_items
ALTER COLUMN meaning_mnemonic DROP DEFAULT,
ALTER COLUMN meaning_mnemonic SET NOT NULL;
