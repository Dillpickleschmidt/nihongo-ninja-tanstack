


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pgsodium";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE TYPE "public"."practice_item_type" AS ENUM (
    'vocabulary',
    'kanji',
    'radical'
);


ALTER TYPE "public"."practice_item_type" OWNER TO "postgres";


CREATE TYPE "public"."practice_mode_enum" AS ENUM (
    'meanings',
    'spellings'
);


ALTER TYPE "public"."practice_mode_enum" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."execute_edit_transaction"("user_id" "uuid", "operations" "jsonb") RETURNS "void"
    LANGUAGE "plpgsql"
    AS $$DECLARE
    operation JSONB;
    operation_type TEXT;
    target_id INTEGER;
    updates JSONB;
    new_name TEXT;
    new_folder_id INTEGER;
  BEGIN
    IF operations IS NULL OR jsonb_array_length(operations) = 0 THEN
      RAISE EXCEPTION 'Operations array cannot be empty';
    END IF;

    FOR operation IN SELECT * FROM jsonb_array_elements(operations)
    LOOP
      operation_type := operation->>'type';

      CASE operation_type
        WHEN 'update-deck' THEN
          target_id := (operation->>'deckId')::INTEGER;
          updates := operation->'updates';

          -- Verify ownership
          PERFORM 1 FROM user_decks
          WHERE deck_id = target_id AND user_decks.user_id = execute_edit_transaction.user_id;
          IF NOT FOUND THEN
            RAISE EXCEPTION 'Deck % not found or access denied', target_id;
          END IF;

          -- Handle name update
          IF updates ? 'name' THEN
            new_name := TRIM(updates->>'name');
            IF LENGTH(new_name) = 0 OR LENGTH(new_name) > 80 THEN
              RAISE EXCEPTION 'Name must be between 1 and 80 characters';
            END IF;

            -- Get target folder for duplicate check
            new_folder_id := COALESCE(
              NULLIF(updates->>'folderId', 'null')::INTEGER,
              (SELECT folder_id FROM user_decks WHERE deck_id = target_id)
            );

            -- Check for duplicate names in the same folder
            PERFORM 1 FROM user_decks
            WHERE user_decks.user_id = execute_edit_transaction.user_id
            AND LOWER(deck_name) = LOWER(new_name)
            AND folder_id IS NOT DISTINCT FROM new_folder_id
            AND deck_id != target_id;
            IF FOUND THEN
              RAISE EXCEPTION 'A deck with this name already exists in this folder';
            END IF;
          END IF;

          -- Handle folder update
          IF updates ? 'folderId' THEN
            new_folder_id := NULLIF(updates->>'folderId', 'null')::INTEGER;
            IF new_folder_id IS NOT NULL THEN
              PERFORM 1 FROM deck_folders
              WHERE folder_id = new_folder_id AND deck_folders.user_id = execute_edit_transaction.user_id;
              IF NOT FOUND THEN
                RAISE EXCEPTION 'Target folder % not found', new_folder_id;
              END IF;
            END IF;
          END IF;

          -- Apply updates
          UPDATE user_decks SET
            deck_name = COALESCE(TRIM(updates->>'name'), deck_name),
            folder_id = CASE
              WHEN updates ? 'folderId' THEN NULLIF(updates->>'folderId', 'null')::INTEGER
              ELSE folder_id
            END
          WHERE deck_id = target_id AND user_decks.user_id = execute_edit_transaction.user_id;

        WHEN 'update-folder' THEN
          target_id := (operation->>'folderId')::INTEGER;
          updates := operation->'updates';

          -- Verify ownership
          PERFORM 1 FROM deck_folders
          WHERE folder_id = target_id AND deck_folders.user_id = execute_edit_transaction.user_id;
          IF NOT FOUND THEN
            RAISE EXCEPTION 'Folder % not found or access denied', target_id;
          END IF;

          -- Handle name update
          IF updates ? 'name' THEN
            new_name := TRIM(updates->>'name');
            IF LENGTH(new_name) = 0 OR LENGTH(new_name) > 80 THEN
              RAISE EXCEPTION 'Folder name must be between 1 and 80 characters';
            END IF;

            -- Get target parent for duplicate check
            new_folder_id := COALESCE(
              NULLIF(updates->>'parentId', 'null')::INTEGER,
              (SELECT parent_folder_id FROM deck_folders WHERE folder_id = target_id)
            );

            -- Check for duplicate names in the same parent folder
            PERFORM 1 FROM deck_folders
            WHERE deck_folders.user_id = execute_edit_transaction.user_id
            AND LOWER(folder_name) = LOWER(new_name)
            AND parent_folder_id IS NOT DISTINCT FROM new_folder_id
            AND folder_id != target_id;
            IF FOUND THEN
              RAISE EXCEPTION 'A folder with this name already exists in this location';
            END IF;
          END IF;

          -- Handle parent update (check for circular reference)
          IF updates ? 'parentId' THEN
            new_folder_id := NULLIF(updates->>'parentId', 'null')::INTEGER;
            IF new_folder_id IS NOT NULL THEN
              -- Verify parent folder exists and user owns it
              PERFORM 1 FROM deck_folders
              WHERE folder_id = new_folder_id AND deck_folders.user_id = execute_edit_transaction.user_id;
              IF NOT FOUND THEN
                RAISE EXCEPTION 'Parent folder % not found', new_folder_id;
              END IF;

              -- Check for circular reference using recursive CTE
              WITH RECURSIVE folder_ancestry AS (
                SELECT folder_id, parent_folder_id FROM deck_folders WHERE folder_id = new_folder_id AND deck_folders.user_id = execute_edit_transaction.user_id
                UNION ALL
                SELECT df.folder_id, df.parent_folder_id FROM deck_folders df INNER JOIN folder_ancestry fa ON df.folder_id = fa.parent_folder_id WHERE df.user_id = execute_edit_transaction.user_id
              )
              SELECT 1 FROM folder_ancestry WHERE folder_id = target_id;
              IF FOUND THEN
                RAISE EXCEPTION 'Cannot move folder into its own descendant (circular reference)';
              END IF;
            END IF;
          END IF;

          -- Apply updates
          UPDATE deck_folders SET
            folder_name = COALESCE(TRIM(updates->>'name'), folder_name),
            parent_folder_id = CASE
              WHEN updates ? 'parentId' THEN NULLIF(updates->>'parentId', 'null')::INTEGER
              ELSE parent_folder_id
            END
          WHERE folder_id = target_id AND deck_folders.user_id = execute_edit_transaction.user_id;

        WHEN 'update-deck-vocabulary' THEN
          target_id := (operation->>'deckId')::INTEGER;

          -- Verify ownership
          PERFORM 1 FROM user_decks
          WHERE deck_id = target_id AND user_decks.user_id = execute_edit_transaction.user_id;
          IF NOT FOUND THEN
            RAISE EXCEPTION 'Deck % not found or access denied', target_id;
          END IF;

          -- Delete existing vocabulary items
          DELETE FROM vocabulary_items WHERE deck_id = target_id;

          -- Insert new vocabulary items
          IF operation ? 'vocabularyItems' AND jsonb_array_length(operation->'vocabularyItems') > 0 THEN
            INSERT INTO vocabulary_items (
              deck_id, word, furigana, english, part_of_speech,
              chapter, info, mnemonics, example_sentences, particles, videos
            )
            SELECT
              target_id,
              item_data->>'word',
              item_data->>'furigana',
              ARRAY(SELECT jsonb_array_elements_text(item_data->'english')),
              NULLIF(item_data->>'part_of_speech', '')::part_of_speech,
              COALESCE((item_data->>'chapter')::integer, 1),
              CASE
                WHEN item_data->'info' IS NOT NULL AND item_data->'info' != 'null'::jsonb
                THEN ARRAY(SELECT jsonb_array_elements_text(item_data->'info'))
                ELSE NULL
              END,
              item_data->'mnemonics',
              item_data->'example_sentences',
              item_data->'particles',
              item_data->'videos'
            FROM jsonb_array_elements(operation->'vocabularyItems') AS item_data;
          END IF;

         WHEN 'delete-deck' THEN                        
           target_id := (operation->>'deckId')::INTEGER;
                                                
           -- Verify ownership                          
           PERFORM 1 FROM user_decks                    
           WHERE deck_id = target_id AND                
           user_decks.user_id = execute_edit_transaction.user_id;              
           IF NOT FOUND THEN                            
             RAISE EXCEPTION 'Deck % not found or access denied', target_id;                           
           END IF;                                      
                                                
           -- Delete vocabulary items first (foreign key constraint)                                   
           DELETE FROM vocabulary_items WHERE deck_id = target_id;                                     
                                                
           -- Delete the deck                           
           DELETE FROM user_decks                       
           WHERE deck_id = target_id AND                
           user_decks.user_id = execute_edit_transaction.user_id;

        WHEN 'delete-folder' THEN
          target_id := (operation->>'folderId')::INTEGER;
          
          -- Verify ownership
          PERFORM 1 FROM deck_folders
          WHERE folder_id = target_id AND deck_folders.user_id = execute_edit_transaction.user_id;
          IF NOT FOUND THEN
            RAISE EXCEPTION 'Folder % not found or access denied', target_id;
          END IF;
          
          -- Handle deletion strategy
          IF operation->>'strategy' = 'move-up' THEN
            -- Get parent folder ID
            SELECT parent_folder_id INTO new_folder_id FROM deck_folders WHERE folder_id = target_id;
            
            -- Move child folders to parent
            UPDATE deck_folders SET parent_folder_id = new_folder_id WHERE parent_folder_id = target_id AND deck_folders.user_id = execute_edit_transaction.user_id;
            
            -- Move child decks to parent
            UPDATE user_decks SET folder_id = new_folder_id WHERE folder_id = target_id AND user_decks.user_id = execute_edit_transaction.user_id;
            
            -- Delete the folder
            DELETE FROM deck_folders WHERE folder_id = target_id AND deck_folders.user_id = execute_edit_transaction.user_id;
            
          ELSIF operation->>'strategy' = 'delete-all' THEN
            -- Delete all vocabulary items in descendant folders
            WITH RECURSIVE folder_tree AS (
              SELECT folder_id FROM deck_folders WHERE folder_id = target_id AND deck_folders.user_id = execute_edit_transaction.user_id
              UNION ALL
              SELECT df.folder_id FROM deck_folders df INNER JOIN folder_tree ft ON df.parent_folder_id = ft.folder_id WHERE df.user_id = execute_edit_transaction.user_id
            )
            DELETE FROM vocabulary_items WHERE deck_id IN (SELECT deck_id FROM user_decks WHERE folder_id IN (SELECT folder_id FROM folder_tree) AND user_decks.user_id = execute_edit_transaction.user_id);
            
            -- Delete all decks in descendant folders
            WITH RECURSIVE folder_tree AS (
              SELECT folder_id FROM deck_folders WHERE folder_id = target_id AND deck_folders.user_id = execute_edit_transaction.user_id
              UNION ALL
              SELECT df.folder_id FROM deck_folders df INNER JOIN folder_tree ft ON df.parent_folder_id = ft.folder_id WHERE df.user_id = execute_edit_transaction.user_id
            )
            DELETE FROM user_decks WHERE folder_id IN (SELECT folder_id FROM folder_tree) AND user_decks.user_id = execute_edit_transaction.user_id;
            
            -- Delete all descendant folders
            WITH RECURSIVE folder_tree AS (
              SELECT folder_id FROM deck_folders WHERE folder_id = target_id AND deck_folders.user_id = execute_edit_transaction.user_id
              UNION ALL
              SELECT df.folder_id FROM deck_folders df INNER JOIN folder_tree ft ON df.parent_folder_id = ft.folder_id WHERE df.user_id = execute_edit_transaction.user_id
            )
            DELETE FROM deck_folders WHERE folder_id IN (SELECT folder_id FROM folder_tree) AND deck_folders.user_id = execute_edit_transaction.user_id;
            
          ELSE
            RAISE EXCEPTION 'Invalid delete strategy: %', operation->>'strategy';
          END IF;

        ELSE
          RAISE EXCEPTION 'Unknown operation type: %', operation_type;
      END CASE;
    END LOOP;
  END;$$;


ALTER FUNCTION "public"."execute_edit_transaction"("user_id" "uuid", "operations" "jsonb") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
  BEGIN
      INSERT INTO public.profiles (user_id,
  user_preferences, display_name)
      VALUES (
          NEW.id,
          '{}',
          NEW.raw_user_meta_data->>'name'
      );

      RETURN NEW;
  END;
  $$;


ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."increment_deck_import_count"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
  BEGIN
    -- Only increment when a deck is successfully imported (source = 'shared')
    -- and has an original_deck_id that corresponds to a shared deck
    IF NEW.source = 'shared' AND NEW.original_deck_id
  IS NOT NULL THEN
      UPDATE public_deck_shares
      SET import_count = import_count + 1
      WHERE deck_id = CAST(NEW.original_deck_id AS
  INTEGER);
    END IF;

    RETURN NEW;
  END;
  $$;


ALTER FUNCTION "public"."increment_deck_import_count"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_updated_at_column"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_updated_at_column"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."deck_folders" (
    "folder_id" bigint NOT NULL,
    "user_id" "uuid" NOT NULL,
    "folder_name" "text" NOT NULL,
    "parent_folder_id" bigint,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."deck_folders" OWNER TO "postgres";


ALTER TABLE "public"."deck_folders" ALTER COLUMN "folder_id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."deck_folders_folder_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."fsrs_cards" (
    "id" bigint NOT NULL,
    "user_id" "uuid" NOT NULL,
    "practice_item_key" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT ("now"() AT TIME ZONE 'utc'::"text") NOT NULL,
    "fsrs_card" "jsonb" NOT NULL,
    "fsrs_logs" "jsonb"[],
    "due_at" timestamp with time zone NOT NULL,
    "stability" real NOT NULL,
    "mode" "text" DEFAULT 'readings'::"text" NOT NULL,
    "type" "public"."practice_item_type" DEFAULT 'vocabulary'::"public"."practice_item_type" NOT NULL
);


ALTER TABLE "public"."fsrs_cards" OWNER TO "postgres";


ALTER TABLE "public"."fsrs_cards" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."fsrs_cards_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "user_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "display_name" "text",
    "user_preferences" "jsonb" NOT NULL
);


ALTER TABLE "public"."profiles" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."public_deck_shares" (
    "deck_id" bigint NOT NULL,
    "shared_by" "uuid" NOT NULL,
    "shared_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "import_count" integer DEFAULT 0 NOT NULL
);


ALTER TABLE "public"."public_deck_shares" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_decks" (
    "deck_id" bigint NOT NULL,
    "user_id" "uuid" NOT NULL,
    "deck_name" "text" NOT NULL,
    "deck_description" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "folder_id" bigint,
    "source" "text" DEFAULT 'user'::"text" NOT NULL,
    "original_deck_id" "text",
    "allowed_practice_modes" "public"."practice_mode_enum"[] NOT NULL,
    CONSTRAINT "user_decks_source_check" CHECK (("source" = ANY (ARRAY['built-in'::"text", 'anki'::"text", 'wanikani'::"text", 'jpdb'::"text", 'user'::"text", 'shared'::"text"])))
);


ALTER TABLE "public"."user_decks" OWNER TO "postgres";


ALTER TABLE "public"."user_decks" ALTER COLUMN "deck_id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."user_decks_deck_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."user_module_completions" (
    "id" bigint NOT NULL,
    "user_id" "uuid" NOT NULL,
    "module_path" "text" NOT NULL,
    "completed_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL
);


ALTER TABLE "public"."user_module_completions" OWNER TO "postgres";


ALTER TABLE "public"."user_module_completions" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."user_module_completions_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."vocabulary_items" (
    "id" bigint NOT NULL,
    "deck_id" bigint NOT NULL,
    "word" "text" NOT NULL,
    "furigana" "text",
    "english" "text"[] NOT NULL,
    "info" "text"[],
    "mnemonics" "jsonb",
    "example_sentences" "jsonb",
    "videos" "jsonb",
    "particles" "jsonb",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "is_verb" boolean DEFAULT false
);


ALTER TABLE "public"."vocabulary_items" OWNER TO "postgres";


ALTER TABLE "public"."vocabulary_items" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."vocabulary_items_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE ONLY "public"."deck_folders"
    ADD CONSTRAINT "deck_folders_pkey" PRIMARY KEY ("folder_id");



ALTER TABLE ONLY "public"."fsrs_cards"
    ADD CONSTRAINT "practice_item_user_completions_id_key" UNIQUE ("id");



ALTER TABLE ONLY "public"."fsrs_cards"
    ADD CONSTRAINT "practice_item_user_completions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."fsrs_cards"
    ADD CONSTRAINT "practice_item_user_completions_user_id_pkey_type_unique" UNIQUE ("user_id", "practice_item_key", "type");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("user_id");



ALTER TABLE ONLY "public"."public_deck_shares"
    ADD CONSTRAINT "public_deck_shares_pkey" PRIMARY KEY ("deck_id");



ALTER TABLE ONLY "public"."user_module_completions"
    ADD CONSTRAINT "static_module_user_completions_id_key" UNIQUE ("id");



ALTER TABLE ONLY "public"."user_module_completions"
    ADD CONSTRAINT "static_module_user_completions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."user_module_completions"
    ADD CONSTRAINT "static_module_user_completions_user_id_module_path_key" UNIQUE ("user_id", "module_path");



ALTER TABLE ONLY "public"."user_decks"
    ADD CONSTRAINT "user_decks_pkey" PRIMARY KEY ("deck_id");



ALTER TABLE ONLY "public"."vocabulary_items"
    ADD CONSTRAINT "vocabulary_items_pkey" PRIMARY KEY ("id");



CREATE INDEX "idx_deck_folders_parent_id" ON "public"."deck_folders" USING "btree" ("parent_folder_id");



CREATE INDEX "idx_deck_folders_user_id" ON "public"."deck_folders" USING "btree" ("user_id");



CREATE INDEX "idx_practice_item_user_completions_user_due" ON "public"."fsrs_cards" USING "btree" ("user_id", "due_at");



CREATE INDEX "idx_practice_item_user_completions_user_id" ON "public"."fsrs_cards" USING "btree" ("user_id");



CREATE INDEX "idx_practice_item_user_completions_user_key" ON "public"."fsrs_cards" USING "btree" ("user_id", "practice_item_key");



CREATE INDEX "idx_public_deck_shares_shared_by" ON "public"."public_deck_shares" USING "btree" ("shared_by");



CREATE INDEX "idx_static_module_user_completions_user_id" ON "public"."user_module_completions" USING "btree" ("user_id");



CREATE INDEX "idx_user_decks_folder_id" ON "public"."user_decks" USING "btree" ("folder_id");



CREATE INDEX "idx_user_decks_user_id" ON "public"."user_decks" USING "btree" ("user_id");



CREATE INDEX "idx_vocabulary_items_deck_id" ON "public"."vocabulary_items" USING "btree" ("deck_id");



CREATE INDEX "idx_vocabulary_items_word" ON "public"."vocabulary_items" USING "btree" ("word");



CREATE OR REPLACE TRIGGER "trigger_increment_import_count" AFTER INSERT ON "public"."user_decks" FOR EACH ROW EXECUTE FUNCTION "public"."increment_deck_import_count"();



CREATE OR REPLACE TRIGGER "update_public_deck_shares_updated_at" BEFORE UPDATE ON "public"."public_deck_shares" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



ALTER TABLE ONLY "public"."deck_folders"
    ADD CONSTRAINT "deck_folders_parent_fkey" FOREIGN KEY ("parent_folder_id") REFERENCES "public"."deck_folders"("folder_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."deck_folders"
    ADD CONSTRAINT "deck_folders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."fsrs_cards"
    ADD CONSTRAINT "practice_item_user_completions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON UPDATE CASCADE ON DELETE CASCADE;



ALTER TABLE ONLY "public"."public_deck_shares"
    ADD CONSTRAINT "public_deck_shares_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "public"."user_decks"("deck_id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."public_deck_shares"
    ADD CONSTRAINT "public_deck_shares_shared_by_fkey" FOREIGN KEY ("shared_by") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_module_completions"
    ADD CONSTRAINT "static_module_user_completions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_decks"
    ADD CONSTRAINT "user_decks_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "public"."deck_folders"("folder_id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."user_decks"
    ADD CONSTRAINT "user_decks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."vocabulary_items"
    ADD CONSTRAINT "vocabulary_items_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "public"."user_decks"("deck_id") ON DELETE CASCADE;



CREATE POLICY "Enable users to view their own data only" ON "public"."profiles" FOR SELECT TO "authenticated" USING ((( SELECT "auth"."uid"() AS "uid") = "user_id"));



CREATE POLICY "Users can update their own profile" ON "public"."profiles" FOR UPDATE TO "authenticated" USING ((( SELECT "auth"."uid"() AS "uid") = "user_id")) WITH CHECK ((( SELECT "auth"."uid"() AS "uid") = "user_id"));



ALTER TABLE "public"."fsrs_cards" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."user_module_completions" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "user_own_completions_policy" ON "public"."fsrs_cards" USING (("auth"."uid"() = "user_id")) WITH CHECK (("auth"."uid"() = "user_id"));



CREATE POLICY "user_own_completions_policy" ON "public"."user_module_completions" USING (( SELECT ("auth"."uid"() = "user_module_completions"."user_id"))) WITH CHECK (( SELECT ("auth"."uid"() = "user_module_completions"."user_id")));





ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";




















































































































































































GRANT ALL ON FUNCTION "public"."execute_edit_transaction"("user_id" "uuid", "operations" "jsonb") TO "anon";
GRANT ALL ON FUNCTION "public"."execute_edit_transaction"("user_id" "uuid", "operations" "jsonb") TO "authenticated";
GRANT ALL ON FUNCTION "public"."execute_edit_transaction"("user_id" "uuid", "operations" "jsonb") TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";



GRANT ALL ON FUNCTION "public"."increment_deck_import_count"() TO "anon";
GRANT ALL ON FUNCTION "public"."increment_deck_import_count"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."increment_deck_import_count"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "service_role";



























GRANT ALL ON TABLE "public"."deck_folders" TO "anon";
GRANT ALL ON TABLE "public"."deck_folders" TO "authenticated";
GRANT ALL ON TABLE "public"."deck_folders" TO "service_role";



GRANT ALL ON SEQUENCE "public"."deck_folders_folder_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."deck_folders_folder_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."deck_folders_folder_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."fsrs_cards" TO "anon";
GRANT ALL ON TABLE "public"."fsrs_cards" TO "authenticated";
GRANT ALL ON TABLE "public"."fsrs_cards" TO "service_role";



GRANT ALL ON SEQUENCE "public"."fsrs_cards_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."fsrs_cards_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."fsrs_cards_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";



GRANT ALL ON TABLE "public"."public_deck_shares" TO "anon";
GRANT ALL ON TABLE "public"."public_deck_shares" TO "authenticated";
GRANT ALL ON TABLE "public"."public_deck_shares" TO "service_role";



GRANT ALL ON TABLE "public"."user_decks" TO "anon";
GRANT ALL ON TABLE "public"."user_decks" TO "authenticated";
GRANT ALL ON TABLE "public"."user_decks" TO "service_role";



GRANT ALL ON SEQUENCE "public"."user_decks_deck_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."user_decks_deck_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."user_decks_deck_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."user_module_completions" TO "anon";
GRANT ALL ON TABLE "public"."user_module_completions" TO "authenticated";
GRANT ALL ON TABLE "public"."user_module_completions" TO "service_role";



GRANT ALL ON SEQUENCE "public"."user_module_completions_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."user_module_completions_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."user_module_completions_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."vocabulary_items" TO "anon";
GRANT ALL ON TABLE "public"."vocabulary_items" TO "authenticated";
GRANT ALL ON TABLE "public"."vocabulary_items" TO "service_role";



GRANT ALL ON SEQUENCE "public"."vocabulary_items_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."vocabulary_items_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."vocabulary_items_id_seq" TO "service_role";









ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";































RESET ALL;

