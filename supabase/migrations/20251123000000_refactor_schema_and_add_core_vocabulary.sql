-- Refactor schema tables to use consistent naming pattern
-- Rename tables to follow user_* pattern
-- Create new core_vocabulary tables for static data

-- ============================================
-- Rename existing tables
-- ============================================

-- Rename fsrs_cards to user_fsrs_cards
ALTER TABLE IF EXISTS fsrs_cards RENAME TO user_fsrs_cards;

-- Rename deck_folders to user_deck_folders
ALTER TABLE IF EXISTS deck_folders RENAME TO user_deck_folders;

-- Rename user_module_progress to user_completed_modules
ALTER TABLE IF EXISTS user_module_progress RENAME TO user_completed_modules;

-- Rename vocabulary_items to deck_vocabulary_items
ALTER TABLE IF EXISTS vocabulary_items RENAME TO deck_vocabulary_items;

-- ============================================
-- Update foreign key constraints
-- ============================================

-- Update foreign key in user_decks that referenced deck_folders
ALTER TABLE IF EXISTS user_decks
  DROP CONSTRAINT IF EXISTS user_decks_folder_id_fkey,
  ADD CONSTRAINT user_decks_folder_id_fkey
    FOREIGN KEY (folder_id) REFERENCES user_deck_folders(folder_id) ON DELETE SET NULL;

-- Update self-referencing foreign key in user_deck_folders
ALTER TABLE IF EXISTS user_deck_folders
  DROP CONSTRAINT IF EXISTS deck_folders_parent_fkey,
  ADD CONSTRAINT user_deck_folders_parent_fkey
    FOREIGN KEY (parent_folder_id) REFERENCES user_deck_folders(folder_id) ON DELETE SET NULL;

-- Update foreign key in deck_vocabulary_items that referenced user_decks
ALTER TABLE IF EXISTS deck_vocabulary_items
  DROP CONSTRAINT IF EXISTS vocabulary_items_deck_id_fkey,
  ADD CONSTRAINT deck_vocabulary_items_deck_id_fkey
    FOREIGN KEY (deck_id) REFERENCES user_decks(deck_id) ON DELETE CASCADE;

-- Update foreign key in user_fsrs_cards
ALTER TABLE IF EXISTS user_fsrs_cards
  DROP CONSTRAINT IF EXISTS practice_item_user_completions_user_id_fkey,
  ADD CONSTRAINT user_fsrs_cards_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- ============================================
-- Create core_vocabulary_items table
-- ============================================

CREATE TABLE IF NOT EXISTS core_vocabulary_items (
  word TEXT PRIMARY KEY,
  furigana TEXT NOT NULL,
  english TEXT[] NOT NULL,
  part_of_speech TEXT,
  info TEXT[],
  mnemonics JSONB,
  example_sentences JSONB,
  videos JSONB,
  particles JSONB,
  overwrite_word TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Create core_vocabulary_sets table
-- ============================================

CREATE TABLE IF NOT EXISTS core_vocabulary_sets (
  set_id TEXT PRIMARY KEY,
  set_name TEXT,
  vocabulary_keys TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create GIN index for efficient array queries on vocabulary_keys
CREATE INDEX IF NOT EXISTS idx_core_vocabulary_sets_vocabulary_keys
  ON core_vocabulary_sets USING GIN (vocabulary_keys);

-- ============================================
-- Rename indexes to match new table names
-- ============================================

-- Rename indexes on renamed tables (if they exist with old names)
ALTER INDEX IF EXISTS fsrs_cards_pkey RENAME TO user_fsrs_cards_pkey;
ALTER INDEX IF EXISTS fsrs_cards_id_key RENAME TO user_fsrs_cards_id_key;
ALTER INDEX IF EXISTS idx_fsrs_cards_covering RENAME TO idx_user_fsrs_cards_covering;
ALTER INDEX IF EXISTS idx_fsrs_cards_user_due_mode_type RENAME TO idx_user_fsrs_cards_user_due_mode_type;

ALTER INDEX IF EXISTS deck_folders_pkey RENAME TO user_deck_folders_pkey;
ALTER INDEX IF EXISTS idx_deck_folders_parent_id RENAME TO idx_user_deck_folders_parent_id;
ALTER INDEX IF EXISTS idx_deck_folders_user_id RENAME TO idx_user_deck_folders_user_id;

ALTER INDEX IF EXISTS user_module_progress_pkey RENAME TO user_completed_modules_pkey;
ALTER INDEX IF EXISTS idx_user_module_progress_user_id RENAME TO idx_user_completed_modules_user_id;
ALTER INDEX IF EXISTS idx_user_module_progress_module_path RENAME TO idx_user_completed_modules_module_path;

ALTER INDEX IF EXISTS vocabulary_items_pkey RENAME TO deck_vocabulary_items_pkey;
ALTER INDEX IF EXISTS idx_vocabulary_items_deck_id RENAME TO idx_deck_vocabulary_items_deck_id;
ALTER INDEX IF EXISTS idx_vocabulary_items_word RENAME TO idx_deck_vocabulary_items_word;

-- ============================================
-- Update RLS policies
-- ============================================

-- Rename RLS policies on user_fsrs_cards
ALTER POLICY IF EXISTS "user_own_completions_policy" ON user_fsrs_cards
  RENAME TO "user_own_fsrs_cards_policy";

-- Note: Other RLS policies may need manual review and updates depending on their names
-- The policy names should remain functional even after table rename in most cases
