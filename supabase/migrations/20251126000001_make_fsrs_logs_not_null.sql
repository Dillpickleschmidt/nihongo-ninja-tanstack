-- Make fsrs_logs column NOT NULL with default empty array
-- Since there's no existing data, we can safely alter the column directly

ALTER TABLE user_fsrs_cards
ALTER COLUMN fsrs_logs SET DEFAULT ARRAY[]::jsonb[],
ALTER COLUMN fsrs_logs SET NOT NULL;
