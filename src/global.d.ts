import type { Database as DB } from "./features/supabase/db/database.types"

declare global {
  type Database = DB

  type DBProfile = Database["public"]["Tables"]["profiles"]["Row"]
  type DBStaticModule =
    Database["public"]["Tables"]["static_module_user_completions"]["Row"]
  type DBPracticeItem =
    Database["public"]["Tables"]["practice_item_user_completions"]["Row"]
  type DBPracticeItemType = Database["public"]["Enums"]["practice_item_type"]

  // Folder Management Types
  type UserDeck = Database["public"]["Tables"]["user_decks"]["Row"]
  type UserDeckInsert = Database["public"]["Tables"]["user_decks"]["Insert"]
  type UserDeckUpdate = Database["public"]["Tables"]["user_decks"]["Update"]

  type DeckFolder = Database["public"]["Tables"]["deck_folders"]["Row"]
  type DeckFolderInsert = Database["public"]["Tables"]["deck_folders"]["Insert"]
  type DeckFolderUpdate = Database["public"]["Tables"]["deck_folders"]["Update"]

  type DBVocabularyItem = Database["public"]["Tables"]["vocabulary_items"]["Row"]
  type DBVocabularyItemInsert = Database["public"]["Tables"]["vocabulary_items"]["Insert"]
  type DBVocabularyItemUpdate = Database["public"]["Tables"]["vocabulary_items"]["Update"]
}
