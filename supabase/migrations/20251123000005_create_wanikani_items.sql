-- Create wanikani_items table for storing radical and kanji data
-- Polymorphic table design: minimal schema optimized for read-heavy, write-once usage
-- Only stores radicals and kanji (no vocabulary)

CREATE TABLE IF NOT EXISTS wanikani_items (
  id INTEGER PRIMARY KEY,
  characters TEXT,
  meanings JSONB NOT NULL,
  reading_mnemonic TEXT,
  component_ids INTEGER[] DEFAULT '{}',
  character_images JSONB
);

-- Index for character lookups (only where characters exist)
CREATE INDEX IF NOT EXISTS idx_wanikani_characters
ON wanikani_items(characters)
WHERE characters IS NOT NULL;

-- Grant permissions to authenticated users for read access
ALTER TABLE wanikani_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to wanikani_items"
  ON wanikani_items
  FOR SELECT
  USING (true);
