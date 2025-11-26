-- Add character_type column to wanikani_items table
-- This stores whether each item is a 'kanji' or 'radical'

ALTER TABLE wanikani_items
ADD COLUMN character_type TEXT NOT NULL CHECK (character_type IN ('radical', 'kanji'));
