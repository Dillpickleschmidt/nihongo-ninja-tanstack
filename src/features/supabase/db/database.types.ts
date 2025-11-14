export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      deck_folders: {
        Row: {
          created_at: string
          folder_id: number
          folder_name: string
          parent_folder_id: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          folder_id?: never
          folder_name: string
          parent_folder_id?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          folder_id?: never
          folder_name?: string
          parent_folder_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "deck_folders_parent_fkey"
            columns: ["parent_folder_id"]
            isOneToOne: false
            referencedRelation: "deck_folders"
            referencedColumns: ["folder_id"]
          },
        ]
      }
      fsrs_cards: {
        Row: {
          created_at: string
          due_at: string
          fsrs_card: Json
          fsrs_logs: Json[] | null
          id: number
          mode: string
          practice_item_key: string
          stability: number
          type: Database["public"]["Enums"]["practice_item_type"]
          user_id: string
        }
        Insert: {
          created_at?: string
          due_at: string
          fsrs_card: Json
          fsrs_logs?: Json[] | null
          id?: number
          mode?: string
          practice_item_key: string
          stability: number
          type?: Database["public"]["Enums"]["practice_item_type"]
          user_id: string
        }
        Update: {
          created_at?: string
          due_at?: string
          fsrs_card?: Json
          fsrs_logs?: Json[] | null
          id?: number
          mode?: string
          practice_item_key?: string
          stability?: number
          type?: Database["public"]["Enums"]["practice_item_type"]
          user_id?: string
        }
        Relationships: []
      }
      learning_path_module_sources: {
        Row: {
          module_id: string
          order_index: number
          path_id: string
          source_type: string
          transcript_line_ids: Json
        }
        Insert: {
          module_id: string
          order_index?: number
          path_id: string
          source_type: string
          transcript_line_ids: Json
        }
        Update: {
          module_id?: string
          order_index?: number
          path_id?: string
          source_type?: string
          transcript_line_ids?: Json
        }
        Relationships: [
          {
            foreignKeyName: "learning_path_module_sources_path_id_fkey"
            columns: ["path_id"]
            isOneToOne: false
            referencedRelation: "learning_path_transcripts"
            referencedColumns: ["path_id"]
          },
        ]
      }
      learning_path_transcripts: {
        Row: {
          created_at: string
          episode_name: string | null
          name: string
          path_id: string
          show_name: string | null
          transcript_data: Json
          user_id: string
        }
        Insert: {
          created_at?: string
          episode_name?: string | null
          name: string
          path_id?: string
          show_name?: string | null
          transcript_data: Json
          user_id: string
        }
        Update: {
          created_at?: string
          episode_name?: string | null
          name?: string
          path_id?: string
          show_name?: string | null
          transcript_data?: Json
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          display_name: string | null
          user_id: string
          user_preferences: Json
        }
        Insert: {
          display_name?: string | null
          user_id?: string
          user_preferences: Json
        }
        Update: {
          display_name?: string | null
          user_id?: string
          user_preferences?: Json
        }
        Relationships: []
      }
      public_deck_shares: {
        Row: {
          deck_id: string
          import_count: number
          shared_at: string
          shared_by: string
          updated_at: string
        }
        Insert: {
          deck_id: string
          import_count?: number
          shared_at?: string
          shared_by: string
          updated_at?: string
        }
        Update: {
          deck_id?: string
          import_count?: number
          shared_at?: string
          shared_by?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_deck_shares_deck_id_fkey"
            columns: ["deck_id"]
            isOneToOne: true
            referencedRelation: "user_decks"
            referencedColumns: ["deck_id"]
          },
        ]
      }
      user_decks: {
        Row: {
          allowed_practice_modes: Database["public"]["Enums"]["practice_mode_enum"][]
          created_at: string
          deck_description: string | null
          deck_id: string
          deck_name: string
          folder_id: number | null
          original_deck_id: string | null
          source: string
          user_id: string
        }
        Insert: {
          allowed_practice_modes: Database["public"]["Enums"]["practice_mode_enum"][]
          created_at?: string
          deck_description?: string | null
          deck_id?: string
          deck_name: string
          folder_id?: number | null
          original_deck_id?: string | null
          source?: string
          user_id: string
        }
        Update: {
          allowed_practice_modes?: Database["public"]["Enums"]["practice_mode_enum"][]
          created_at?: string
          deck_description?: string | null
          deck_id?: string
          deck_name?: string
          folder_id?: number | null
          original_deck_id?: string | null
          source?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_decks_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "deck_folders"
            referencedColumns: ["folder_id"]
          },
        ]
      }
      user_module_progress: {
        Row: {
          completed_at: string
          module_path: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          module_path: string
          user_id: string
        }
        Update: {
          completed_at?: string
          module_path?: string
          user_id?: string
        }
        Relationships: []
      }
      user_practice_sessions: {
        Row: {
          created_at: string
          duration_seconds: number
          last_updated_at: string
          module_path: string
          module_type: string
          questions_answered: number | null
          session_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_seconds?: number
          last_updated_at?: string
          module_path: string
          module_type: string
          questions_answered?: number | null
          session_id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number
          last_updated_at?: string
          module_path?: string
          module_type?: string
          questions_answered?: number | null
          session_id?: string
          user_id?: string
        }
        Relationships: []
      }
      vocabulary_items: {
        Row: {
          created_at: string
          deck_id: string
          english: string[]
          example_sentences: Json | null
          furigana: string | null
          id: number
          info: string[] | null
          is_verb: boolean | null
          mnemonics: Json | null
          particles: Json | null
          videos: Json | null
          word: string
        }
        Insert: {
          created_at?: string
          deck_id: string
          english: string[]
          example_sentences?: Json | null
          furigana?: string | null
          id?: never
          info?: string[] | null
          is_verb?: boolean | null
          mnemonics?: Json | null
          particles?: Json | null
          videos?: Json | null
          word: string
        }
        Update: {
          created_at?: string
          deck_id?: string
          english?: string[]
          example_sentences?: Json | null
          furigana?: string | null
          id?: never
          info?: string[] | null
          is_verb?: boolean | null
          mnemonics?: Json | null
          particles?: Json | null
          videos?: Json | null
          word?: string
        }
        Relationships: [
          {
            foreignKeyName: "vocabulary_items_deck_id_fkey"
            columns: ["deck_id"]
            isOneToOne: false
            referencedRelation: "user_decks"
            referencedColumns: ["deck_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      execute_edit_transaction: {
        Args: { operations: Json; user_id: string }
        Returns: undefined
      }
      generate_deck_id: { Args: never; Returns: string }
      get_user_daily_aggregates: {
        Args: { user_id_param: string }
        Returns: Json
      }
      get_vocabulary_stats: {
        Args: { user_id_param: string; week_ago_param: string }
        Returns: Json
      }
      upload_learning_path: {
        Args: {
          module_sources: Json[]
          transcript_data: Json
          user_id_param: string
          vocab_decks: Json[]
        }
        Returns: Json
      }
    }
    Enums: {
      practice_item_type: "vocabulary" | "kanji" | "radical"
      practice_mode_enum: "meanings" | "spellings"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      practice_item_type: ["vocabulary", "kanji", "radical"],
      practice_mode_enum: ["meanings", "spellings"],
    },
  },
} as const
