-- Migration: Drop old user_module_completions table
-- This table has been replaced by the more comprehensive user_module_progress table

-- Verification: Compare counts to ensure migration was successful
-- Run this manually before applying if you want to double-check:
-- SELECT
--   (SELECT COUNT(*) FROM user_module_completions) as old_count,
--   (SELECT COUNT(*) FROM user_module_progress WHERE completion_percentage = 100) as new_count;

-- Drop the old table
DROP TABLE IF EXISTS user_module_completions;
