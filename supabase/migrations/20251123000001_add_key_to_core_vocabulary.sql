-- Add key column as primary key to core_vocabulary_items
-- This allows multiple entries with the same word (e.g., 私1, 私2 for different readings)

-- Drop the old primary key constraint on word
ALTER TABLE core_vocabulary_items DROP CONSTRAINT core_vocabulary_items_pkey;

-- Add key column as the new primary key
ALTER TABLE core_vocabulary_items ADD COLUMN key TEXT PRIMARY KEY;

-- Create index on word for efficient lookups
CREATE INDEX IF NOT EXISTS idx_core_vocabulary_items_word
  ON core_vocabulary_items(word);
