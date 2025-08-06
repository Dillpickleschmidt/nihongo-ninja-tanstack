import { z } from "zod"
import { VocabItemFormDataSchema } from "./vocab-item-schemas"

// Deck metadata validation
export const DeckMetadataSchema = z.object({
  name: z.string().min(1, "Deck name is required").max(100, "Deck name must be 100 characters or less"),
  description: z.string().max(500, "Description must be 500 characters or less"),
  selectedFolderId: z.string(),
  selectedFolderName: z.string()
})

export type DeckMetadata = z.infer<typeof DeckMetadataSchema>

// Complete deck creation validation
export const DeckCreationSchema = z.object({
  deck: DeckMetadataSchema,
  vocabItems: z.record(z.string(), VocabItemFormDataSchema).refine(
    (items) => {
      const validItems = Object.values(items).filter(item => 
        item.word.trim().length > 0 && 
        item.english.some(meaning => meaning.trim().length > 0)
      )
      return validItems.length >= 1
    },
    "At least one complete vocabulary item is required"
  )
})

export type DeckCreationData = z.infer<typeof DeckCreationSchema>

// Validation for deck name uniqueness (used with external data)
export const DeckNameValidationSchema = z.object({
  name: z.string().min(1, "Deck name is required"),
  folderId: z.string(),
  existingDecks: z.array(z.object({
    deck_name: z.string(),
    folder_id: z.number().nullable()
  })),
  excludeId: z.number().optional()
}).refine(
  (data) => {
    const targetFolderId = data.folderId === "root" ? null : parseInt(data.folderId)
    const duplicate = data.existingDecks.find(
      deck => 
        deck.deck_name.trim().toLowerCase() === data.name.trim().toLowerCase() &&
        deck.folder_id === targetFolderId &&
        (data.excludeId ? deck.deck_id !== data.excludeId : true)
    )
    return !duplicate
  },
  "A deck with this name already exists in this folder"
)

export type DeckNameValidation = z.infer<typeof DeckNameValidationSchema>