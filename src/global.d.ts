import type { MergeDeep } from "type-fest"
import type { Database as DatabaseGenerated } from "./features/supabase/db/database.types"
import type { UserPreferences } from "./features/main-cookies/schemas/user-preferences"
import type {
  KagomeToken,
  GrammarMatch,
  WordClass,
  POS,
  KagomeTokenizationResult,
} from "./features/sentence-practice/kagome/types/kagome"

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
  type DBPracticeItem = SupabaseDB["public"]["Tables"]["user_fsrs_cards"]["Row"]
  type DBPracticeItemType = SupabaseDB["public"]["Enums"]["practice_item_type"]
  type PracticeModeEnum = SupabaseDB["public"]["Enums"]["practice_mode_enum"]

  // Folder Management Types
  type UserDeck = SupabaseDB["public"]["Tables"]["user_decks"]["Row"]
  type UserDeckInsert = SupabaseDB["public"]["Tables"]["user_decks"]["Insert"]
  type UserDeckUpdate = SupabaseDB["public"]["Tables"]["user_decks"]["Update"]

  type DeckFolder = SupabaseDB["public"]["Tables"]["user_deck_folders"]["Row"]
  type DeckFolderInsert =
    SupabaseDB["public"]["Tables"]["user_deck_folders"]["Insert"]
  type DeckFolderUpdate =
    SupabaseDB["public"]["Tables"]["user_deck_folders"]["Update"]

  // Vocabulary SupabaseDB Types
  type DBVocabularyItem =
    SupabaseDB["public"]["Tables"]["deck_vocabulary_items"]["Row"]
  type DBVocabularyItemInsert =
    SupabaseDB["public"]["Tables"]["deck_vocabulary_items"]["Insert"]
  type DBVocabularyItemUpdate =
    SupabaseDB["public"]["Tables"]["deck_vocabulary_items"]["Update"]

  // Core Vocabulary Types (read-only, shared across all users)
  type CoreVocabularyItem =
    SupabaseDB["public"]["Tables"]["core_vocabulary_items"]["Row"]
  type CoreVocabularySet =
    SupabaseDB["public"]["Tables"]["core_vocabulary_sets"]["Row"]

  // Deck Sharing Types
  type PublicDeckShare =
    SupabaseDB["public"]["Tables"]["public_deck_shares"]["Row"]
  type PublicDeckShareInsert =
    SupabaseDB["public"]["Tables"]["public_deck_shares"]["Insert"]
  type PublicDeckShareUpdate =
    SupabaseDB["public"]["Tables"]["public_deck_shares"]["Update"]

  // Module Progress Tracking Types
  type ModuleProgress =
    SupabaseDB["public"]["Tables"]["user_completed_modules"]["Row"]
  type ModuleProgressInsert =
    SupabaseDB["public"]["Tables"]["user_completed_modules"]["Insert"]
  type ModuleProgressUpdate =
    SupabaseDB["public"]["Tables"]["user_completed_modules"]["Update"]
  // Module progress including local-only completions (with nullable fields)
  type ModuleProgressWithLocal = {
    module_path: string
    user_id: string | null
    completed_at: string | null
  }

  // Practice Session Tracking Types
  type PracticeSession =
    SupabaseDB["public"]["Tables"]["user_practice_sessions"]["Row"]
  type PracticeSessionInsert =
    SupabaseDB["public"]["Tables"]["user_practice_sessions"]["Insert"]
  type PracticeSessionUpdate =
    SupabaseDB["public"]["Tables"]["user_practice_sessions"]["Update"]

  // Learning Path Types
  type LearningPathTranscript =
    SupabaseDB["public"]["Tables"]["learning_path_transcripts"]["Row"]
  type LearningPathTranscriptInsert =
    SupabaseDB["public"]["Tables"]["learning_path_transcripts"]["Insert"]
  type LearningPathTranscriptUpdate =
    SupabaseDB["public"]["Tables"]["learning_path_transcripts"]["Update"]

  type LearningPathModuleSource =
    SupabaseDB["public"]["Tables"]["learning_path_module_sources"]["Row"]
  type LearningPathModuleSourceInsert =
    SupabaseDB["public"]["Tables"]["learning_path_module_sources"]["Insert"]
  type LearningPathModuleSourceUpdate =
    SupabaseDB["public"]["Tables"]["learning_path_module_sources"]["Update"]
}
