import { For, Show } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { DeckCard } from "../../../right-panel/DeckCard"
import { VocabBreadcrumb } from "./VocabBreadcrumb"
import {
  filterVocabPracticeModules,
  transformModuleToDeckLike,
} from "../../../utils/learningPathToDeckAdapter"
import type { LearningPath, LearningPathChapter } from "@/data/types"

interface ChapterViewProps {
  learningPath: LearningPath
  chapter: LearningPathChapter
  userDecks?: UserDeck[]
  userId?: string
  onShareStatusChange?: () => void
}

/**
 * View component for displaying a learning path chapter
 * Shows all vocab-practice modules in the chapter as deck cards
 */
export function ChapterView(props: ChapterViewProps) {
  const navigate = useNavigate()

  // Get and transform modules for this chapter
  const modules = () => {
    const filtered = filterVocabPracticeModules(props.chapter, props.userDecks)
    return filtered
      .map((item) => {
        if ("module" in item) {
          return transformModuleToDeckLike(item.moduleId, item.module)
        } else {
          return item.deck
        }
      })
      .filter(Boolean) as UserDeck[]
  }

  const breadcrumbs = () => [
    { label: "Vocabulary", href: "/vocab" },
    {
      label: props.learningPath.name,
      href: `/vocab/${props.learningPath.id}`,
    },
    {
      label: props.chapter.title,
      href: `/vocab/${props.learningPath.id}/${props.chapter.slug}`,
    },
  ]

  const handleSelectDeck = (deck: UserDeck) => {
    // Navigate to the module for practice
    navigate({
      to: `/vocab/${props.learningPath.id}/${props.chapter.slug}/${deck.deck_id}`,
    })
  }

  return (
    <div class="space-y-6">
      {/* Breadcrumb Navigation */}
      <VocabBreadcrumb items={breadcrumbs()} />

      {/* Chapter Title */}
      <div>
        <h1 class="text-foreground text-2xl font-bold">
          {props.chapter.title}
        </h1>
        <Show when={props.chapter.description}>
          <p class="text-muted-foreground mt-2 text-sm">
            {props.chapter.description}
          </p>
        </Show>
      </div>

      {/* Modules Grid */}
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <For each={modules()}>
          {(deck) => (
            <DeckCard
              deck={deck}
              userId={props.userId}
              onSelect={handleSelectDeck}
              onShareStatusChange={props.onShareStatusChange}
            />
          )}
        </For>
      </div>
    </div>
  )
}
