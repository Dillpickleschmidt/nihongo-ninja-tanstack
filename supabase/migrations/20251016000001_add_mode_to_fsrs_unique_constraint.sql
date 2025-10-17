-- Add mode to FSRS cards unique constraint
-- This allows separate FSRS cards for the same word in different practice modes

-- Drop the old unique constraint
ALTER TABLE "public"."fsrs_cards"
DROP CONSTRAINT IF EXISTS "practice_item_user_completions_user_id_pkey_type_unique";

-- Add new unique constraint including mode
ALTER TABLE "public"."fsrs_cards"
ADD CONSTRAINT "practice_item_user_completions_user_id_pkey_type_mode_unique"
UNIQUE ("user_id", "practice_item_key", "type", "mode");
