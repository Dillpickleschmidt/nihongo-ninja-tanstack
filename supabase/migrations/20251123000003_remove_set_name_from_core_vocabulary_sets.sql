-- Remove redundant set_name column from core_vocabulary_sets
-- The set_id serves as the unique identifier, making set_name unnecessary

ALTER TABLE core_vocabulary_sets
  DROP COLUMN set_name;
