-- Fix execute_edit_transaction to handle text (string) deck IDs instead of integers
-- Deck IDs were changed from INTEGER to TEXT in migration 20251103000002_hash_deck_ids.sql
-- but the execute_edit_transaction function still had hardcoded ::INTEGER casts

CREATE OR REPLACE FUNCTION "public"."execute_edit_transaction"("user_id" "uuid", "operations" "jsonb") RETURNS "void"
    LANGUAGE "plpgsql"
    AS $$DECLARE
    operation JSONB;
    operation_type TEXT;
    target_id TEXT;
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
          target_id := operation->>'deckId';
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
          target_id := (operation->>'folderId')::INTEGER::TEXT;
          updates := operation->'updates';

          -- Verify ownership
          PERFORM 1 FROM deck_folders
          WHERE folder_id = (target_id::INTEGER) AND deck_folders.user_id = execute_edit_transaction.user_id;
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
              (SELECT parent_folder_id FROM deck_folders WHERE folder_id = (target_id::INTEGER))
            );

            -- Check for duplicate names in the same parent folder
            PERFORM 1 FROM deck_folders
            WHERE deck_folders.user_id = execute_edit_transaction.user_id
            AND LOWER(folder_name) = LOWER(new_name)
            AND parent_folder_id IS NOT DISTINCT FROM new_folder_id
            AND folder_id != (target_id::INTEGER);
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
              SELECT 1 FROM folder_ancestry WHERE folder_id = (target_id::INTEGER);
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
          WHERE folder_id = (target_id::INTEGER) AND deck_folders.user_id = execute_edit_transaction.user_id;

        WHEN 'update-deck-vocabulary' THEN
          target_id := operation->>'deckId';

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
          target_id := operation->>'deckId';

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
          target_id := (operation->>'folderId')::INTEGER::TEXT;

          -- Verify ownership
          PERFORM 1 FROM deck_folders
          WHERE folder_id = (target_id::INTEGER) AND deck_folders.user_id = execute_edit_transaction.user_id;
          IF NOT FOUND THEN
            RAISE EXCEPTION 'Folder % not found or access denied', target_id;
          END IF;

          -- Handle deletion strategy
          IF operation->>'strategy' = 'move-up' THEN
            -- Get parent folder ID
            SELECT parent_folder_id INTO new_folder_id FROM deck_folders WHERE folder_id = (target_id::INTEGER);

            -- Move child folders to parent
            UPDATE deck_folders SET parent_folder_id = new_folder_id WHERE parent_folder_id = (target_id::INTEGER) AND deck_folders.user_id = execute_edit_transaction.user_id;

            -- Move child decks to parent
            UPDATE user_decks SET folder_id = new_folder_id WHERE folder_id = (target_id::INTEGER) AND user_decks.user_id = execute_edit_transaction.user_id;

            -- Delete the folder
            DELETE FROM deck_folders WHERE folder_id = (target_id::INTEGER) AND deck_folders.user_id = execute_edit_transaction.user_id;

          ELSIF operation->>'strategy' = 'delete-all' THEN
            -- Delete all vocabulary items in descendant folders
            WITH RECURSIVE folder_tree AS (
              SELECT folder_id FROM deck_folders WHERE folder_id = (target_id::INTEGER) AND deck_folders.user_id = execute_edit_transaction.user_id
              UNION ALL
              SELECT df.folder_id FROM deck_folders df INNER JOIN folder_tree ft ON df.parent_folder_id = ft.folder_id WHERE df.user_id = execute_edit_transaction.user_id
            )
            DELETE FROM vocabulary_items WHERE deck_id IN (SELECT deck_id FROM user_decks WHERE folder_id IN (SELECT folder_id FROM folder_tree) AND user_decks.user_id = execute_edit_transaction.user_id);

            -- Delete all decks in descendant folders
            WITH RECURSIVE folder_tree AS (
              SELECT folder_id FROM deck_folders WHERE folder_id = (target_id::INTEGER) AND deck_folders.user_id = execute_edit_transaction.user_id
              UNION ALL
              SELECT df.folder_id FROM deck_folders df INNER JOIN folder_tree ft ON df.parent_folder_id = ft.folder_id WHERE df.user_id = execute_edit_transaction.user_id
            )
            DELETE FROM user_decks WHERE folder_id IN (SELECT folder_id FROM folder_tree) AND user_decks.user_id = execute_edit_transaction.user_id;

            -- Delete all descendant folders
            WITH RECURSIVE folder_tree AS (
              SELECT folder_id FROM deck_folders WHERE folder_id = (target_id::INTEGER) AND deck_folders.user_id = execute_edit_transaction.user_id
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
