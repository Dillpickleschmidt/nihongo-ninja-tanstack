export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
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
      practice_item_user_completions: {
        Row: {
          created_at: string
          due_at: string
          fsrs_card: Json
          fsrs_logs: Json[] | null
          id: number
          lesson_id: string | null
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
          lesson_id?: string | null
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
          lesson_id?: string | null
          mode?: string
          practice_item_key?: string
          stability?: number
          type?: Database["public"]["Enums"]["practice_item_type"]
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
      static_module_user_completions: {
        Row: {
          completed_at: string
          id: number
          static_module_path: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: number
          static_module_path: string
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: number
          static_module_path?: string
          user_id?: string
        }
        Relationships: []
      }
      user_decks: {
        Row: {
          created_at: string
          deck_description: string | null
          deck_id: number
          deck_name: string
          folder_id: number | null
          original_deck_id: string | null
          source: string
          user_id: string
        }
        Insert: {
          created_at?: string
          deck_description?: string | null
          deck_id?: never
          deck_name: string
          folder_id?: number | null
          original_deck_id?: string | null
          source?: string
          user_id: string
        }
        Update: {
          created_at?: string
          deck_description?: string | null
          deck_id?: never
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
      vocabulary_items: {
        Row: {
          chapter: number | null
          created_at: string
          deck_id: number
          english: string[]
          example_sentences: Json | null
          furigana: string | null
          id: number
          info: string[] | null
          mnemonics: Json | null
          part_of_speech: Database["public"]["Enums"]["part_of_speech"] | null
          particles: Json | null
          videos: Json | null
          word: string
        }
        Insert: {
          chapter?: number | null
          created_at?: string
          deck_id: number
          english: string[]
          example_sentences?: Json | null
          furigana?: string | null
          id?: never
          info?: string[] | null
          mnemonics?: Json | null
          part_of_speech?: Database["public"]["Enums"]["part_of_speech"] | null
          particles?: Json | null
          videos?: Json | null
          word: string
        }
        Update: {
          chapter?: number | null
          created_at?: string
          deck_id?: number
          english?: string[]
          example_sentences?: Json | null
          furigana?: string | null
          id?: never
          info?: string[] | null
          mnemonics?: Json | null
          part_of_speech?: Database["public"]["Enums"]["part_of_speech"] | null
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
        Args: { user_id: string; operations: Json }
        Returns: undefined
      }
    }
    Enums: {
      part_of_speech:
        | "Ichidan verb"
        | "Godan verb with 'u' ending"
        | "Godan verb with 'tsu' ending"
        | "Godan verb with 'ru' ending"
        | "Godan verb - Iku/Yuku special class"
        | "Godan verb with 'ku' ending"
        | "Godan verb with 'gu' ending"
        | "Godan verb with 'bu' ending"
        | "Godan verb with 'mu' ending"
        | "Godan verb with 'nu' ending"
        | "Godan verb with 'su' ending"
        | "Godan verb with 'ru' ending (irregular verb)"
        | "Godan verb - -aru special class"
        | "Suru verb - included"
        | "Suru verb - compound word"
        | "Suru verb - special class"
        | "Kuru verb - special class"
        | "I-adjective"
        | "Na-adjective"
      practice_item_type: "vocabulary" | "kanji" | "radical"
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
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      part_of_speech: [
        "Ichidan verb",
        "Godan verb with 'u' ending",
        "Godan verb with 'tsu' ending",
        "Godan verb with 'ru' ending",
        "Godan verb - Iku/Yuku special class",
        "Godan verb with 'ku' ending",
        "Godan verb with 'gu' ending",
        "Godan verb with 'bu' ending",
        "Godan verb with 'mu' ending",
        "Godan verb with 'nu' ending",
        "Godan verb with 'su' ending",
        "Godan verb with 'ru' ending (irregular verb)",
        "Godan verb - -aru special class",
        "Suru verb - included",
        "Suru verb - compound word",
        "Suru verb - special class",
        "Kuru verb - special class",
        "I-adjective",
        "Na-adjective",
      ],
      practice_item_type: ["vocabulary", "kanji", "radical"],
    },
  },
} as const
