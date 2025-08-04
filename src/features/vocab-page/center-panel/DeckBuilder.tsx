import { createSignal } from "solid-js"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { VocabularyItem } from "@/data/types"
import type { VocabItemFormData } from "../components/deck-builder/VocabItemEditor"

import { DeckHeader } from "../components/deck-builder/DeckHeader"
import { DeckDetails } from "../components/deck-builder/DeckDetails"
import { VocabItemsList } from "../components/deck-builder/VocabItemsList"
import { VocabPreview } from "../components/deck-builder/VocabPreview"

export function DeckBuilder() {
  const [deckName, setDeckName] = createSignal("")
  const [deckDesc, setDeckDesc] = createSignal("")
  const [folderName, setFolderName] = createSignal("")
  const [vocabIds, setVocabIds] = createSignal([0]) // Just track IDs
  const [nextId, setNextId] = createSignal(1)
  const [confirmClearOpen, setConfirmClearOpen] = createSignal(false)
  const [tab, setTab] = createSignal("items")
  const [vocabularyItems, setVocabularyItems] = createSignal<VocabularyItem[]>([])
  const [formDataMap, setFormDataMap] = createSignal<Map<number, VocabItemFormData>>(new Map())

  const addItem = () => {
    setVocabIds((prev) => [...prev, nextId()])
    setNextId((prev) => prev + 1)
  }

  const removeItem = (id: number) => {
    setVocabIds((prev) => prev.filter((vocabId) => vocabId !== id))
  }

  const handleClear = () => {
    setDeckName("")
    setDeckDesc("")
    setFolderName("")
    setVocabIds([0])
    setNextId(1)
    setVocabularyItems([])
    setFormDataMap(new Map())
  }

  return (
    <div class="w-full space-y-8 px-2 sm:px-4 lg:px-6">
      <DeckHeader
        confirmClearOpen={confirmClearOpen}
        setConfirmClearOpen={setConfirmClearOpen}
        onClear={handleClear}
      />

      <DeckDetails
        deckName={deckName}
        setDeckName={setDeckName}
        deckDesc={deckDesc}
        setDeckDesc={setDeckDesc}
        folderName={folderName}
        setFolderName={setFolderName}
      />

      <section>
        <div class="mb-2">
          <h2 class="text-lg font-semibold">Vocabulary Items</h2>
        </div>

        <Tabs value={tab()} onChange={setTab}>
          <TabsList class="mb-4">
            <TabsTrigger value="items">List</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="items" class="mt-0">
            <VocabItemsList
              vocabIds={vocabIds}
              onAddItem={addItem}
              onRemoveItem={removeItem}
              onDataChange={setVocabularyItems}
              formDataMap={formDataMap}
              setFormDataMap={setFormDataMap}
            />
          </TabsContent>

          <TabsContent value="preview" class="mt-0">
            <VocabPreview vocabularyItems={vocabularyItems()} />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
