import { For } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { DeckCard } from "../../../right-panel/DeckCard"
import { ViewContainer } from "../../../shared/components/ViewContainer"
import { GridContainer } from "../../../shared/components/GridContainer"
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

  const handleSelectDeck = (deck: UserDeck) => {
    // Navigate to the module for practice
    navigate({
      to: `/vocab/${props.learningPath.id}/${props.chapter.slug}/${deck.deck_id}`,
    })
  }

  return (
    <ViewContainer
      breadcrumbs={[
        { label: "Vocabulary", href: "/vocab" },
        { label: props.learningPath.name, href: `/vocab/${props.learningPath.id}` },
        { label: props.chapter.title, href: `/vocab/${props.learningPath.id}/${props.chapter.slug}` }
      ]}
      title={props.chapter.title}
      description={props.chapter.description}
    >
      <GridContainer items={modules} emptyMessage="No modules available">
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
      </GridContainer>
    </ViewContainer>
  )
}
