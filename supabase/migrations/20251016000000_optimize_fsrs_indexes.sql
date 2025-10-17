-- Optimize FSRS card indexes for better query performance
-- This migration adds covering indexes and removes redundant indexes

-- Add covering index for getFSRSCards optimization
-- This allows index-only scans for the most common query pattern
CREATE INDEX IF NOT EXISTS idx_fsrs_cards_covering
ON fsrs_cards(user_id, practice_item_key, type, mode)
INCLUDE (fsrs_card, fsrs_logs, due_at, stability);

-- Add composite index for filtered due card queries
-- Useful for queries that filter by user_id, due_at, mode, and type
CREATE INDEX IF NOT EXISTS idx_fsrs_cards_user_due_mode_type
ON fsrs_cards(user_id, due_at, mode, type);

-- Remove redundant user_id only index
-- This is redundant with idx_practice_item_user_completions_user_due (user_id, due_at)
-- PostgreSQL can use the first column of composite indexes for user_id queries
DROP INDEX IF EXISTS idx_practice_item_user_completions_user_id;
