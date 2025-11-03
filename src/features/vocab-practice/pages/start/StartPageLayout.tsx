// features/vocab-practice/components/pages/start-page/components/StartPageLayout.tsx
import { Show, type JSX } from "solid-js"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { BottomNav } from "@/features/navbar/BottomNav"
import { StartPageHeader } from "./header/Header"
import { StartPageButton } from "./StartPageButton"
import { ReviewItemsList } from "./review/ReviewItemsList"
import DependencyOverview from "./dependency/DependencyOverview"
import { useRouteContext } from "@tanstack/solid-router"
import { userDailyTimeQueryOptions } from "@/features/learn-page/query/query-options"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { Route as RootRoute } from "@/routes/__root"
import type { useStartPageLogic } from "./hooks/useStartPageLogic"

type StartPageLayoutProps = {
  logic: ReturnType<typeof useStartPageLogic>
  deckName: string | JSX.Element
}

export function StartPageLayout(props: StartPageLayoutProps) {
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id

  const todayTimeQuery = useCustomQuery(() =>
    userDailyTimeQueryOptions(userId || null, new Date()),
  )

  const dailyProgressPercentage = () => {
    if (!userId) return 0
    const minutesToday = Math.round((todayTimeQuery.data ?? 0) / 60)
    return Math.min(100, Math.round((minutesToday / 30) * 100))
  }

  // Derive preview count from cards
  const previewCount = () => {
    const vocabCount = props.logic
      .previewCards()
      .filter((c) => c.practiceItemType === "vocabulary").length
    const kanjiRadicalCount = props.logic
      .previewCards()
      .filter(
        (c) =>
          (c.practiceItemType === "kanji" ||
            c.practiceItemType === "radical") &&
          !c.isDisabled,
      ).length

    return kanjiRadicalCount > 0
      ? `${vocabCount} vocabulary (+${kanjiRadicalCount} kanji/radicals)`
      : `${vocabCount} vocabulary`
  }

  // Create FSRS map for ReviewItemsList
  const fsrsMap = () => {
    const map = new Map<string, any>()
    const data = props.logic.fsrsCardsQuery.data
    if (!data) return map
    for (const card of data) {
      const key = `${card.type}:${card.practice_item_key}`
      map.set(key, card)
    }
    return map
  }

  return (
    <div class="min-h-screen">
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={props.logic.settingsQuery.data!["active-learning-path"]}
          chapter={props.logic.settingsQuery.data!["active-chapter"]}
          showGradient={false}
          blur="6px"
        />
      </div>

      <StartPageHeader
        deckName={props.deckName}
        previewCount={previewCount()}
        sessionMode={props.logic.sessionMode()}
        onSessionModeChange={props.logic.setSessionMode}
      />

      <div class="px-4 pb-24">
        <div class="mx-auto max-w-3xl">
          <DependencyOverview />

          <Show
            when={
              props.logic.sessionMode() === "mixed" &&
              props.logic.reviewItems().length > 0
            }
          >
            <ReviewItemsList
              reviewItems={props.logic.reviewItems()}
              visibleCount={props.logic.visibleReviewCount()}
              onShowMore={() =>
                props.logic.setVisibleReviewCount((count) => count + 20)
              }
              fsrsMap={fsrsMap()}
              isLoading={props.logic.fsrsCardsQuery.isPending}
            />
          </Show>
        </div>
      </div>

      <StartPageButton
        loading={props.logic.isStarting() || props.logic.isDataPending()}
        disabled={props.logic.hasError()}
        onClick={props.logic.handleStart}
      />

      <BottomNav dailyProgressPercentage={dailyProgressPercentage()} />
    </div>
  )
}
