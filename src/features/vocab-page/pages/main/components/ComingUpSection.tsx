import { For, Show } from "solid-js"
import { chapters } from "@/data/chapters"
import { dynamic_modules } from "@/data/dynamic_modules"
import { DeckCard } from "../../../shared/components/DeckCard"
import type { Deck } from "../../../context/VocabContext"
import type { TextbookIDEnum } from "@/data/textbooks"

interface ComingUpSectionProps {
  recentCompletions: { moduleId: string; completedAt: number }[]
  decks: Deck[]
  activeLearningPath: string
  activeChapter: string
}

export function ComingUpSection(props: ComingUpSectionProps) {
  const comingUpDecks = () => {
    const textbookChapters = chapters[props.activeLearningPath as TextbookIDEnum]
    if (!textbookChapters) return []

    const chapter = textbookChapters[props.activeChapter]
    if (!chapter) return []

    // Get vocab-practice module IDs in chapter order
    const vocabPracticeIds = chapter.learning_path_item_ids.filter(
      (id) => dynamic_modules[id]?.module_type === "vocab-practice",
    )

    const completedSet = new Set(props.recentCompletions.map((c) => c.moduleId))

    // Find the last completed vocab-practice module in this chapter
    let lastCompletedIdx = -1
    for (let i = vocabPracticeIds.length - 1; i >= 0; i--) {
      if (completedSet.has(vocabPracticeIds[i])) {
        lastCompletedIdx = i
        break
      }
    }

    // Take next 2 uncompleted after that position
    const startIdx = lastCompletedIdx + 1
    const upcoming: Deck[] = []
    for (let i = startIdx; i < vocabPracticeIds.length && upcoming.length < 2; i++) {
      if (!completedSet.has(vocabPracticeIds[i])) {
        const deck = props.decks.find((d) => d.id === vocabPracticeIds[i])
        if (deck) upcoming.push(deck)
      }
    }

    return upcoming
  }

  return (
    <Show when={comingUpDecks().length > 0}>
      <div>
        <h2 class="text-foreground mb-4 text-sm font-semibold">Coming Up</h2>
        <div class="grid gap-3 sm:grid-cols-2">
          <For each={comingUpDecks()}>{(deck) => <DeckCard deck={deck} />}</For>
        </div>
      </div>
    </Show>
  )
}
