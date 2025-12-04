import { createFileRoute } from "@tanstack/solid-router"
import { createMemo, Switch, Match } from "solid-js"
import { useVocabPageContext } from "@/features/vocab-page/layout/VocabPageContext"
import { VocabCardsContent } from "@/features/vocab-page/pages/main/VocabCardsContent"
import { useVocabDashboard } from "@/features/vocab-page/pages/main/hooks/useVocabDashboard"
import { FolderView } from "@/features/vocab-page/pages/main/components/FolderView"
import { LearningPathView } from "@/features/vocab-page/pages/main/components/LearningPathView"
import { ChapterView } from "@/features/vocab-page/pages/main/components/ChapterView"
import { dynamic_modules } from "@/data/dynamic_modules"
import { transformModuleToDeckLike } from "@/features/vocab-page/utils/learningPathToDeckAdapter"
import type { LearningPath, LearningPathChapter } from "@/data/types"

export const Route = createFileRoute("/_home/vocab/$")({
  component: RouteComponent,
})

// Discriminated union type for route view states
type ViewInfo =
  | { type: "dashboard" }
  | { type: "learning-path"; learningPath: LearningPath }
  | {
      type: "learning-path-chapter"
      learningPath: LearningPath
      chapter: LearningPathChapter
    }
  | {
      type: "learning-path-deck"
      learningPath: LearningPath
      chapter: LearningPathChapter
      deck: UserDeck
    }
  | { type: "folder"; folderId: number | null }
  | { type: "folder-deck"; folderId: number | null; deck: UserDeck }

function RouteComponent() {
  const params = Route.useParams()
  const vocabPageState = useVocabPageContext()
  const dashboardState = useVocabDashboard()

  const pathSegments = () => {
    const splatPath = params()?._splat || ""
    if (!splatPath) {
      return []
    }
    return splatPath.split("/").filter(Boolean)
  }

  const viewInfo = createMemo((): ViewInfo => {
    const segments = pathSegments()

    if (segments.length === 0) {
      return { type: "dashboard" }
    }

    const firstSegment = segments[0]
    const learningPaths = dashboardState.learningPaths()

    const isLearningPath = learningPaths.some((lp) => lp.id === firstSegment)

    if (isLearningPath) {
      const learningPath = learningPaths.find((lp) => lp.id === firstSegment)
      if (!learningPath) {
        return { type: "dashboard" }
      }

      if (segments.length === 1) {
        return { type: "learning-path", learningPath }
      } else if (segments.length === 2) {
        const chapter = learningPath.chapters?.find(
          (c) => c.slug === segments[1],
        )
        if (!chapter) {
          return { type: "dashboard" }
        }
        return { type: "learning-path-chapter", learningPath, chapter }
      } else {
        // Three+ segments: learning-path-deck
        const chapter = learningPath.chapters?.find(
          (c) => c.slug === segments[1],
        )
        if (!chapter) {
          return { type: "dashboard" }
        }

        const deckId = segments[2]
        const module = dynamic_modules[deckId]
        const userDeck = vocabPageState
          .userDecks()
          .find((d) => d.deck_id === deckId)

        if (!module && !userDeck) {
          return { type: "dashboard" }
        }

        const deck = module
          ? transformModuleToDeckLike(deckId, module)
          : userDeck!

        return {
          type: "learning-path-deck",
          learningPath,
          chapter,
          deck,
        }
      }
    } else {
      const allDecks = vocabPageState.userDecks()
      const lastSegment = segments[segments.length - 1]
      const deck = allDecks.find((d) => d.deck_id === lastSegment)

      if (deck) {
        const folderId =
          segments.length > 1 ? Number(segments[segments.length - 2]) : null
        return { type: "folder-deck", folderId, deck }
      }

      const folderId = Number(firstSegment)
      return {
        type: "folder",
        folderId: isNaN(folderId) ? null : folderId,
      }
    }
  })

  // Helper functions for Match conditions - returns typed viewInfo or false
  const matchLearningPath = () => {
    const info = viewInfo()
    return info.type === "learning-path" ? info : false
  }

  const matchLearningPathChapter = () => {
    const info = viewInfo()
    return info.type === "learning-path-chapter" ? info : false
  }

  const matchLearningPathDeck = () => {
    const info = viewInfo()
    return info.type === "learning-path-deck" ? info : false
  }

  const matchFolder = () => {
    const info = viewInfo()
    return info.type === "folder" ? info : false
  }

  const matchFolderDeck = () => {
    const info = viewInfo()
    return info.type === "folder-deck" ? info : false
  }

  return (
    <div class="w-full px-6 py-8">
      <Switch
        fallback={
          <div class="border-border/50 rounded-lg border p-8 text-center">
            <p class="text-muted-foreground text-sm">Not found</p>
          </div>
        }
      >
        <Match when={matchLearningPath()}>
          {(info) => <LearningPathView learningPath={info().learningPath} />}
        </Match>

        <Match when={matchLearningPathChapter()}>
          {(info) => (
            <ChapterView
              learningPath={info().learningPath}
              chapter={info().chapter}
              userDecks={vocabPageState.userDecks()}
            />
          )}
        </Match>

        <Match when={matchLearningPathDeck()}>
          {(info) => <VocabCardsContent selectedUserDeck={info().deck} />}
        </Match>

        <Match when={matchFolder()}>
          {(info) => (
            <FolderView
              folderId={info().folderId}
              folders={vocabPageState.folders()}
              decks={vocabPageState.userDecks()}
              onSelectDeck={vocabPageState.handleSelectDeck}
            />
          )}
        </Match>

        <Match when={matchFolderDeck()}>
          {(info) => <VocabCardsContent selectedUserDeck={info().deck} />}
        </Match>
      </Switch>
    </div>
  )
}
