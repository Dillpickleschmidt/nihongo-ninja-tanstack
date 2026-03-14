import { For, Show, type Accessor } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import { buildDeckUrlPath } from "../../../utils/navigation"
import { useVocab, type Deck } from "../../../context/VocabContext"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import type { LearningPathChapter } from "convex/model/learning_paths"

interface ComingUpSectionProps {
  recentCompletions: Accessor<{ moduleId: string; completedAt: number }[]>
  decks: Accessor<Deck[]>
  chapter: Accessor<LearningPathChapter | undefined>
  learningPathName: Accessor<string | undefined>
}

export function ComingUpSection(props: ComingUpSectionProps) {
  const ctx = useVocab()

  const comingUpDecks = () => {
    const chapter = props.chapter()
    if (!chapter) return []

    const vocabPracticeIds = chapter.modules
      .filter((m) => m.module.module_type === "vocab-practice")
      .map((m) => m.moduleId)

    const completedSet = new Set(props.recentCompletions().map((c) => c.moduleId))

    let lastCompletedIdx = -1
    for (let i = vocabPracticeIds.length - 1; i >= 0; i--) {
      if (completedSet.has(vocabPracticeIds[i])) {
        lastCompletedIdx = i
        break
      }
    }

    const startIdx = lastCompletedIdx + 1
    const upcoming: Deck[] = []
    for (
      let i = startIdx;
      i < vocabPracticeIds.length && upcoming.length < 2;
      i++
    ) {
      if (!completedSet.has(vocabPracticeIds[i])) {
        const deck = props.decks().find((d) => d.id === vocabPracticeIds[i])
        if (deck) upcoming.push(deck)
      }
    }

    return upcoming
  }

  const chapterLabel = () => {
    const chapter = props.chapter()
    if (!chapter) return ""
    const num = getChapterDisplayNumber(chapter.slug)
    const short = num ? `Ch. ${num}` : chapter.title
    const parts = [props.learningPathName(), short].filter(Boolean)
    return parts.join(" ")
  }

  return (
    <Show when={comingUpDecks().length > 0}>
      <div>
        <h2 class="text-foreground mb-3 text-sm font-semibold">Coming Up</h2>
        <div>
          <For each={comingUpDecks()}>
            {(deck, index) => (
              <Button
                as={Link}
                to={`/vocab/${buildDeckUrlPath(deck, ctx.folders())}`}
                variant="ghost"
                class="flex w-full items-center gap-3 py-2 px-2 h-auto justify-start rounded-md transition-colors hover:bg-white/[0.03]"
              >
                <div class={`h-1.5 w-1.5 rounded-full shrink-0 ${index() === 0 ? "bg-orange-400" : "bg-white/20"}`} />
                <span class="text-sm text-white/50 truncate flex-1 text-left">
                  {deck.deckName}
                </span>
                <span class="text-xs text-white/25 shrink-0">
                  {chapterLabel()}
                </span>
              </Button>
            )}
          </For>
        </div>
      </div>
    </Show>
  )
}
