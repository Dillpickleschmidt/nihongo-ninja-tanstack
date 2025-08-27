import type { MergeDeep } from "type-fest"
import type { Database as DatabaseGenerated } from "./features/supabase/db/database.types"
import type { UserPreferences } from "./features/main-cookies/schemas/user-preferences"

declare global {
  // Enhanced Database type with properly typed user_preferences
  type Database = MergeDeep<
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

  type DBProfile = Database["public"]["Tables"]["profiles"]["Row"]
  type DBStaticModule =
    Database["public"]["Tables"]["static_module_user_completions"]["Row"]
  type DBPracticeItem = Database["public"]["Tables"]["fsrs_cards"]["Row"]
  type DBPracticeItemType = Database["public"]["Enums"]["practice_item_type"]
  type PracticeModeEnum = Database["public"]["Enums"]["practice_mode_enum"]

  // Folder Management Types
  type UserDeck = Database["public"]["Tables"]["user_decks"]["Row"]
  type UserDeckInsert = Database["public"]["Tables"]["user_decks"]["Insert"]
  type UserDeckUpdate = Database["public"]["Tables"]["user_decks"]["Update"]

  type DeckFolder = Database["public"]["Tables"]["deck_folders"]["Row"]
  type DeckFolderInsert = Database["public"]["Tables"]["deck_folders"]["Insert"]
  type DeckFolderUpdate = Database["public"]["Tables"]["deck_folders"]["Update"]

  // Vocabulary Database Types
  type DBVocabularyItem =
    Database["public"]["Tables"]["vocabulary_items"]["Row"]
  type DBVocabularyItemInsert =
    Database["public"]["Tables"]["vocabulary_items"]["Insert"]
  type DBVocabularyItemUpdate =
    Database["public"]["Tables"]["vocabulary_items"]["Update"]

  // Deck Sharing Types
  type PublicDeckShare =
    Database["public"]["Tables"]["public_deck_shares"]["Row"]
  type PublicDeckShareInsert =
    Database["public"]["Tables"]["public_deck_shares"]["Insert"]
  type PublicDeckShareUpdate =
    Database["public"]["Tables"]["public_deck_shares"]["Update"]

  type ModuleCompletion =
    Database["public"]["Tables"]["user_module_completions"]["Row"]
  type ModuleCompletionInsert =
    Database["public"]["Tables"]["user_module_completions"]["Insert"]
}
