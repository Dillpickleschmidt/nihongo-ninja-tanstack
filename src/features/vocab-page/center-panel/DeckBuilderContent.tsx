import { createSignal } from "solid-js"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { VocabularyItem } from "@/data/types"
import type { VocabItemFormData } from "../components/deck-builder/VocabItemEditor"
import { useFolderTree } from "../hooks/useFolderTree"

import { DeckHeader } from "../components/deck-builder/DeckHeader"
import { DeckDetails } from "../components/deck-builder/DeckDetails"
import { VocabItemsList } from "../components/deck-builder/VocabItemsList"
import { VocabPreview } from "../components/deck-builder/VocabPreview"

interface DeckBuilderContentProps {
  folders: DeckFolder[]
  decks: UserDeck[]
}

export function DeckBuilderContent(props: DeckBuilderContentProps) {
  const [deckName, setDeckName] = createSignal("")
  const [deckDesc, setDeckDesc] = createSignal("")
  const [selectedFolderId, setSelectedFolderId] = createSignal("root")
  const [selectedFolderName, setSelectedFolderName] = createSignal("Root")
  const [vocabIds, setVocabIds] = createSignal([0]) // Just track IDs
  const [nextId, setNextId] = createSignal(1)
  const [confirmClearOpen, setConfirmClearOpen] = createSignal(false)
  const [tab, setTab] = createSignal("items")
  const [vocabularyItems, setVocabularyItems] = createSignal<VocabularyItem[]>(
    [],
  )
  const [formDataMap, setFormDataMap] = createSignal<
    Map<number, VocabItemFormData>
  >(new Map())

  // Folder tree for LocationSelector
  const folderTree = useFolderTree({
    folders: props.folders,
    decks: props.decks,
    item: null, // No item being edited, so all folders are selectable
  })

  const addItem = () => {
    setVocabIds((prev) => [...prev, nextId()])
    setNextId((prev) => prev + 1)
  }

  const removeItem = (id: number) => {
    setVocabIds((prev) => prev.filter((vocabId) => vocabId !== id))
  }

  const handleFolderSelect = (folderId: string) => {
    setSelectedFolderId(folderId)
    if (folderId === "root") {
      setSelectedFolderName("Root")
    } else {
      // Find the folder name from the folders list
      const folder = props.folders.find(
        (f) => f.folder_id.toString() === folderId,
      )
      setSelectedFolderName(folder?.folder_name || "Root")
    }
  }

  const handleClear = () => {
    setDeckName("")
    setDeckDesc("")
    setSelectedFolderId("root")
    setSelectedFolderName("Root")
    setVocabIds([0])
    setNextId(1)
    setVocabularyItems([])
    setFormDataMap(new Map())
  }

  return (
    <div class="w-full space-y-8 px-2 pb-8 sm:px-4 lg:px-6">
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
        selectedFolderId={selectedFolderId}
        selectedFolderName={selectedFolderName}
        folderTreeNodes={folderTree.folderTreeNodes()}
        onFolderSelect={handleFolderSelect}
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
