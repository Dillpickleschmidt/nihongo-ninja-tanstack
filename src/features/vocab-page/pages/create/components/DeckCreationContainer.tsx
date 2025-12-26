import { createMemo, createSignal } from "solid-js"
import { useMutation } from "convex-solidjs"
import { useNavigate } from "@tanstack/solid-router"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDeckCreationStore } from "../context/DeckCreationStoreContext"
import { useDeckValidation } from "../hooks/useDeckCreationValidation"
import {
  formDataToDeckVocabItemInput,
  type VocabItemFormData,
} from "@/features/vocab-page/types/vocabulary"
import { validateVocabItemMinimal } from "@/features/vocab-page/validation/vocabulary-validation"
import { api } from "convex/_generated/api"
import type { Id } from "convex/_generated/dataModel"
import type { Folder, Deck } from "@/features/vocab-page/context/VocabContext"
import { DeckHeader } from "./DeckHeader"
import { DeckDetails } from "./DeckDetails"
import { VocabItemsList } from "./VocabItemsList"
import { VocabPreview } from "./VocabPreview"

interface DeckCreationContainerProps {
  folders: Folder[]
  decks: Deck[]
}

export function DeckCreationContainer(props: DeckCreationContainerProps) {
  const { store, actions } = useDeckCreationStore()
  const deckValidation = useDeckValidation({
    store: () => store,
    existingDecks: props.decks,
  })
  const [isSaving, setIsSaving] = createSignal(false)
  const navigate = useNavigate()

  // Convex mutations
  const createDeckWithVocab = useMutation(api.api.decks.createDeckWithVocab)
  const updateDeckWithVocab = useMutation(api.api.decks.updateDeckWithVocab)

  // Get valid form data items for preview and submission
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
      // Prepare folder_id (convert "root" to undefined)
      const folderId =
        store.deck.selectedFolderId === "root"
          ? undefined
          : (store.deck.selectedFolderId as Id<"userDeckFolders">)

      const isEditMode = actions.isEditMode()

      // Convert form data to Convex format
      const vocabularyItems = validFormDataItems()
        .map((item) => formDataToDeckVocabItemInput(item))
        .filter((item): item is NonNullable<typeof item> => item !== null)

      if (isEditMode) {
        // Edit mode: use updateDeckWithVocab
        const deckId = store.original?.deckId
        if (!deckId) {
          throw new Error("Deck ID is required for editing")
        }

        await updateDeckWithVocab.mutate({
          deckId: deckId as Id<"userDecks">,
          deckName: store.deck.name,
          deckDescription: store.deck.description || undefined,
          folderId: folderId ?? null,
          allowedPracticeModes: store.deck.allowedPracticeModes,
          vocabularyItems,
        })

        console.log("Deck updated successfully")
      } else {
        // Create mode: use createDeckWithVocab
        const newDeckId = await createDeckWithVocab.mutate({
          deckName: store.deck.name,
          deckDescription: store.deck.description || undefined,
          folderId,
          allowedPracticeModes: store.deck.allowedPracticeModes,
          vocabularyItems,
        })

        console.log("Deck created successfully:", newDeckId)
      }

      actions.resetStore()

      // Navigate back to vocab page
      navigate({ to: "/vocab" })
    } catch (error) {
      console.error("Failed to save deck:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div class="w-full max-w-5xl space-y-8 p-2 pb-8 sm:px-4 lg:px-6">
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
            <VocabPreview vocabularyItems={validFormDataItems()} />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
