import { For, createSignal, createEffect } from "solid-js"
import { Plus } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { VocabItemEditor, type VocabItemFormData } from "./VocabItemEditor"
import type { VocabularyItem, PartOfSpeech } from "@/data/types"

interface VocabItemsListProps {
  vocabIds: () => number[]
  onAddItem: () => void
  onRemoveItem: (id: number) => void
  onDataChange?: (items: VocabularyItem[]) => void
  formDataMap: () => Map<number, VocabItemFormData>
  setFormDataMap: (map: Map<number, VocabItemFormData>) => void
}

const createEmptyFormData = (): VocabItemFormData => ({
  word: "",
  furigana: "",
  english: [""],
  partOfSpeech: "",
  chapter: "1",
  notes: [],
  particles: [],
  examples: [],
  readingMnemonics: [],
  kanjiMnemonics: []
})

const convertFormDataToVocabularyItem = (formData: VocabItemFormData): VocabularyItem | null => {
  if (!formData.word.trim() || formData.english.length === 0 || !formData.english[0].trim()) {
    return null
  }

  const item: VocabularyItem = {
    word: formData.word.trim(),
    furigana: formData.furigana.trim() || formData.word.trim(),
    english: formData.english.filter(e => e.trim()).map(e => e.trim()),
    chapter: parseInt(formData.chapter) || 1,
    part_of_speech: formData.partOfSpeech as PartOfSpeech || undefined,
  }

  // Add optional fields if they have content
  if (formData.notes.length > 0) {
    item.info = formData.notes.filter(n => n.trim()).map(n => n.trim())
  }

  if (formData.particles.length > 0) {
    const validParticles = formData.particles.filter(p => p.particle.trim() || p.label.trim())
    if (validParticles.length > 0) {
      item.particles = validParticles.map(p => ({
        particle: p.particle.trim(),
        label: p.label.trim()
      }))
    }
  }

  if (formData.readingMnemonics.length > 0 || formData.kanjiMnemonics.length > 0) {
    item.mnemonics = {
      reading: formData.readingMnemonics.filter(m => m.trim()).map(m => m.trim()),
      kanji: formData.kanjiMnemonics.filter(m => m.trim()).map(m => m.trim())
    }
  }

  if (formData.examples.length > 0) {
    const validExamples = formData.examples.filter(e => e.japanese.trim() || e.english.trim())
    if (validExamples.length > 0) {
      item.example_sentences = validExamples.map(e => ({
        japanese: [e.japanese.trim()],
        english: [e.english.trim()]
      }))
    }
  }

  return item
}

export function VocabItemsList(props: VocabItemsListProps) {
  const handleFormDataChange = (id: number, formData: VocabItemFormData) => {
    const newMap = new Map(props.formDataMap())
    newMap.set(id, formData)
    props.setFormDataMap(newMap)
  }

  const getFormData = (id: number): VocabItemFormData => {
    return props.formDataMap().get(id) || createEmptyFormData()
  }

  // Convert form data to vocabulary items and notify parent
  createEffect(() => {
    if (props.onDataChange) {
      const validItems: VocabularyItem[] = []
      for (const id of props.vocabIds()) {
        const formData = props.formDataMap().get(id)
        if (formData) {
          const item = convertFormDataToVocabularyItem(formData)
          if (item) {
            validItems.push(item)
          }
        }
      }
      props.onDataChange(validItems)
    }
  })

  return (
    <div class="space-y-4">
      <For each={props.vocabIds()}>
        {(id, index) => (
          <VocabItemEditor
            index={index()}
            onRemove={() => props.onRemoveItem(id)}
            formData={getFormData(id)}
            onFormDataChange={(formData) => handleFormDataChange(id, formData)}
          />
        )}
      </For>

      <div class="mt-6 flex justify-center">
        <Button variant="secondary" onClick={props.onAddItem}>
          <Plus class="mr-2 size-4" />
          Add Item
        </Button>
      </div>
    </div>
  )
}
