// features/dashboard/utils/allDeckSources.ts
import { textbooks } from "@/data/textbooks"
import { generateServiceSources } from "@/features/dashboard/utils/serviceSourceHelper"
import type { DeckSource, UserDeck } from "@/data/types"
import type { User } from "@supabase/supabase-js"
import type { AllServicePreferences } from "@/features/user-settings/schemas/user-preferences"

const createUserDeckSource = (user: User): DeckSource => {
  const userDeck: UserDeck = {
    id: "user-decks",
    slug: "default",
    title: "My Custom Decks",
    deckType: "user_deck" as const,
    learning_path_items: [],
    owner_id: user.id,
    is_public: false,
    vocabulary_keys: [],
  }
  return {
    id: user.id,
    name: "My Decks",
    type: "user" as const,
    decks: [userDeck],
    disabled: false,
  }
}

export function getAllDeckSources(
  user: User | null,
  preferences: AllServicePreferences,
): DeckSource[] {
  const textbookSources: DeckSource[] = Object.values(textbooks).map((tb) => ({
    id: tb.id,
    name: tb.short_name || tb.name,
    type: "textbook" as const,
    decks: tb.chapters.map(
      ({ id, slug, deckType, chapter_number, title, description }) => ({
        id,
        slug,
        deckType,
        chapter_number,
        title,
        description,
        learning_path_items: [],
        external_resource_ids: [],
      }),
    ),
    disabled: false,
  }))

  const serviceSources = generateServiceSources(preferences)

  const userSpecificDeckSource = user ? [createUserDeckSource(user)] : []

  const combinedSources: DeckSource[] = []
  const seenIds = new Set<string>()

  ;[...textbookSources, ...serviceSources, ...userSpecificDeckSource].forEach(
    (source) => {
      const uniqueId = `${source.type}-${source.id}`
      if (!seenIds.has(uniqueId)) {
        combinedSources.push(source)
        seenIds.add(uniqueId)
      }
    },
  )

  return combinedSources
}
