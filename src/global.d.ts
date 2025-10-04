import type { MergeDeep } from "type-fest"
import type { Database as DatabaseGenerated } from "./features/supabase/db/database.types"
import type { UserPreferences } from "./features/main-cookies/schemas/user-preferences"

declare global {
  // Enhanced Database type with properly typed user_preferences
  type SupabaseDB = MergeDeep<
    DatabaseGenerated,
    {
      public: {
        Tables: {
          profiles: {
            Row: { user_preferences: UserPreferences }
            Insert: { user_preferences: UserPreferences }
            Update: { user_preferences?: UserPreferences }
          }
        }
      }
    }
  >

  type DBProfile = SupabaseDB["public"]["Tables"]["profiles"]["Row"]
  type DBPracticeItem = SupabaseDB["public"]["Tables"]["fsrs_cards"]["Row"]
  type DBPracticeItemType = SupabaseDB["public"]["Enums"]["practice_item_type"]
  type PracticeModeEnum = SupabaseDB["public"]["Enums"]["practice_mode_enum"]

  // Folder Management Types
  type UserDeck = SupabaseDB["public"]["Tables"]["user_decks"]["Row"]
  type UserDeckInsert = SupabaseDB["public"]["Tables"]["user_decks"]["Insert"]
  type UserDeckUpdate = SupabaseDB["public"]["Tables"]["user_decks"]["Update"]

  type DeckFolder = SupabaseDB["public"]["Tables"]["deck_folders"]["Row"]
  type DeckFolderInsert =
    SupabaseDB["public"]["Tables"]["deck_folders"]["Insert"]
  type DeckFolderUpdate =
    SupabaseDB["public"]["Tables"]["deck_folders"]["Update"]

  // Vocabulary SupabaseDB Types
  type DBVocabularyItem =
    SupabaseDB["public"]["Tables"]["vocabulary_items"]["Row"]
  type DBVocabularyItemInsert =
    SupabaseDB["public"]["Tables"]["vocabulary_items"]["Insert"]
  type DBVocabularyItemUpdate =
    SupabaseDB["public"]["Tables"]["vocabulary_items"]["Update"]

  // Deck Sharing Types
  type PublicDeckShare =
    SupabaseDB["public"]["Tables"]["public_deck_shares"]["Row"]
  type PublicDeckShareInsert =
    SupabaseDB["public"]["Tables"]["public_deck_shares"]["Insert"]
  type PublicDeckShareUpdate =
    SupabaseDB["public"]["Tables"]["public_deck_shares"]["Update"]

  type ModuleCompletion =
    SupabaseDB["public"]["Tables"]["user_module_completions"]["Row"]
  type ModuleCompletionInsert =
    SupabaseDB["public"]["Tables"]["user_module_completions"]["Insert"]

  // User Textbook Progress Types
  type UserTextbookProgress =
    SupabaseDB["public"]["Tables"]["user_textbook_progress"]["Row"]
  type UserTextbookProgressInsert =
    SupabaseDB["public"]["Tables"]["user_textbook_progress"]["Insert"]
  type UserTextbookProgressUpdate =
    SupabaseDB["public"]["Tables"]["user_textbook_progress"]["Update"]
}
