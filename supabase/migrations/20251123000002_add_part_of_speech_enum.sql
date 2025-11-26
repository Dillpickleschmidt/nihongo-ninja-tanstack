-- Create part_of_speech enum type for type-safe vocabulary items
-- This enum covers Japanese verb conjugation classes and adjective types

CREATE TYPE part_of_speech_enum AS ENUM (
  'Ichidan verb',
  'Godan verb with ''u'' ending',
  'Godan verb with ''tsu'' ending',
  'Godan verb with ''ru'' ending',
  'Godan verb - Iku/Yuku special class',
  'Godan verb with ''ku'' ending',
  'Godan verb with ''gu'' ending',
  'Godan verb with ''bu'' ending',
  'Godan verb with ''mu'' ending',
  'Godan verb with ''nu'' ending',
  'Godan verb with ''su'' ending',
  'Godan verb with ''ru'' ending (irregular verb)',
  'Godan verb - -aru special class',
  'Suru verb - included',
  'Suru verb - compound word',
  'Suru verb - special class',
  'Kuru verb - special class',
  'I-adjective',
  'Na-adjective'
);

-- Update core_vocabulary_items to use the enum type
ALTER TABLE core_vocabulary_items
  ALTER COLUMN part_of_speech TYPE part_of_speech_enum
  USING part_of_speech::part_of_speech_enum;
