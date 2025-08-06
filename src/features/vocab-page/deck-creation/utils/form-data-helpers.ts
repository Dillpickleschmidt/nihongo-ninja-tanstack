import type { VocabularyItem, PartOfSpeech } from "@/data/types"
import type { VocabItemFormData } from "../schemas/vocab-item-schemas"

// Convert form data to vocabulary item (from existing VocabItemsList logic)
export function convertFormDataToVocabularyItem(formData: VocabItemFormData): VocabularyItem | null {
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

// Create empty vocab item form data
export function createEmptyVocabItemFormData(): VocabItemFormData {
  return {
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
  }
}

// Convert all form data to vocabulary items for preview/export
export function convertAllFormDataToVocabularyItems(
  formDataMap: Map<number, VocabItemFormData>
): VocabularyItem[] {
  const validItems: VocabularyItem[] = []
  
  for (const formData of formDataMap.values()) {
    const item = convertFormDataToVocabularyItem(formData)
    if (item) {
      validItems.push(item)
    }
  }
  
  return validItems
}