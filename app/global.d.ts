import type { Database as DB } from "./features/supabase/db/database.types"

declare global {
  type Database = DB

  type DBProfile = Database["public"]["Tables"]["profiles"]["Row"]
  type DBStaticModule =
    Database["public"]["Tables"]["static_module_user_completions"]["Row"]
  type DBPracticeItem =
    Database["public"]["Tables"]["practice_item_user_completions"]["Row"]
  type DBPracticeItemType = Database["public"]["Enums"]["practice_item_type"]
}
