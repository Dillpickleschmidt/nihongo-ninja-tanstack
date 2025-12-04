import { createMemo, createSignal } from "solid-js"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDeckCreationStore } from "../context/DeckCreationStoreContext"
import { useDeckValidation } from "../hooks/useDeckCreationValidation"
import {
  formDataToDBInsert,
  formDataToVocabularyItem,
  type VocabItemFormData,
} from "@/features/vocab-page/types/vocabulary"
import { validateVocabItemMinimal } from "@/features/vocab-page/validation"
import { executeEditTransactionServerFn } from "@/features/supabase/db/folder"
import { createCustomDeckServerFn } from "@/features/supabase/db/deck"
import type {
  UpdateDeckOperation,
  UpdateDeckVocabularyOperation,
} from "@/features/vocab-page/logic/deck-edit-operations"
import { DeckHeader } from "./DeckHeader"
import { DeckDetails } from "./DeckDetails"
import { VocabItemsList } from "./VocabItemsList"
import { VocabPreview } from "./VocabPreview"

interface DeckCreationContainerProps {
  folders: DeckFolder[]
  decks: UserDeck[]
  onRefetch?: () => Promise<void>
  onNavigateToDeck?: (deck: UserDeck) => void
}

export function DeckCreationContainer(props: DeckCreationContainerProps) {
  const { store, actions } = useDeckCreationStore()
  const deckValidation = useDeckValidation({
    store: () => store,
    existingDecks: props.decks,
  })
  const [isSaving, setIsSaving] = createSignal(false)

  // Convert form data to vocabulary items for preview
  const vocabularyItems = createMemo(() => {
    return Array.from(store.vocabItems.formData.values())
      .filter((formData: VocabItemFormData) =>
        validateVocabItemMinimal(formData),
      )
      .map(formDataToVocabularyItem)
  })

  // Get valid form data items for server submission
  const validFormDataItems = createMemo(() => {
    return Array.from(store.vocabItems.formData.values()).filter(
      (formData: VocabItemFormData) => validateVocabItemMinimal(formData),
    )
  })

  const handleClear = () => {
    actions.resetStore()
  }

  const handleSaveDeck = async () => {
    actions.setHasAttemptedSubmit(true)

    // Validate the entire form
    const isDeckValid =
      deckValidation.deckNameValidation().isValid &&
      store.deck.name.trim().length > 0
    const hasValidVocabItems = validFormDataItems().length > 0

    if (!isDeckValid || !hasValidVocabItems) {
      console.log("Validation failed")
      return
    }

    setIsSaving(true)

    try {
      // Prepare folder_id (convert "root" to null)
      const folder_id =
        store.deck.selectedFolderId === "root"
          ? null
          : parseInt(store.deck.selectedFolderId)

      const isEditMode = actions.isEditMode()

      if (isEditMode) {
        // Edit mode: use edit transaction
        const deckId = store.original?.deckId
        if (!deckId) {
          throw new Error("Deck ID is required for editing")
        }

        // Convert form data to DB insert format
        const vocabularyItems = validFormDataItems()
          .map((item) => formDataToDBInsert(item, deckId))
          .filter((item): item is NonNullable<typeof item> => item !== null)

        // Prepare operations for the transaction
        const updateDeckOperation: UpdateDeckOperation = {
          type: "update-deck",
          deckId,
          updates: {
            name: store.deck.name,
            folderId: folder_id,
            allowedPracticeModes: store.deck.allowedPracticeModes,
          },
        }

        const updateVocabularyOperation: UpdateDeckVocabularyOperation = {
          type: "update-deck-vocabulary",
          deckId,
          vocabularyItems,
        }

        // Execute the edit transaction
        await executeEditTransactionServerFn({
          data: {
            operations: [updateDeckOperation, updateVocabularyOperation],
          },
        })

        // Refetch data to update local state
        // TODO: use the savedDack to update local state instead of refetching
        if (props.onRefetch) {
          await props.onRefetch()
        }
      } else {
        // Create mode: use existing logic
        const savedDeck = await createCustomDeckServerFn({
          data: {
            deck_name: store.deck.name,
            deck_description: store.deck.description || null,
            folder_id,
            vocabulary_items: validFormDataItems(),
            allowed_practice_modes: store.deck.allowedPracticeModes,
          },
        })

        console.log("Deck created successfully:", savedDeck)

        // Refetch data to update local state
        // TODO: use the savedDack to update local state instead of refetching
        if (props.onRefetch) {
          await props.onRefetch()
        }

        if (props.onNavigateToDeck) {
          props.onNavigateToDeck(savedDeck)
        }
      }

      actions.resetStore()
    } catch (error) {
      console.error("Failed to save deck:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div class="w-full max-w-5xl space-y-8 px-2 pb-8 sm:px-4 lg:px-6">
      <DeckHeader
        onClear={handleClear}
        onSave={handleSaveDeck}
        isSaving={isSaving()}
      />

      <DeckDetails folders={props.folders} decks={props.decks} />

      <section>
        <div class="mb-2">
          <h2 class="text-lg font-semibold">Vocabulary Items</h2>
        </div>

        <Tabs value={store.ui.currentTab} onChange={actions.setCurrentTab}>
          <TabsList class="mb-4">
            <TabsTrigger value="items">List</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="items" class="mt-0">
            <VocabItemsList />
          </TabsContent>

          <TabsContent value="preview" class="mt-0">
            <VocabPreview vocabularyItems={vocabularyItems()} />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
