// features/vocab-practice/components/pages/start-page/components/StartPageLayout.tsx
import { Show, type JSX } from "solid-js"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { BottomNav } from "@/features/navbar/BottomNav"
import { StartPageHeader } from "./header/Header"
import { StartPageButton } from "./StartPageButton"
import { ReviewItemsList } from "./review/ReviewItemsList"
import DependencyOverview from "./dependency/DependencyOverview"
import type { useStartPageLogic } from "./hooks/useStartPageLogic"

type StartPageLayoutProps = {
  logic: ReturnType<typeof useStartPageLogic>
  deckName: string | JSX.Element
}

export function StartPageLayout(props: StartPageLayoutProps) {
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
          textbook={props.logic.settingsQuery.data!["active-textbook"]}
          chapter={props.logic.settingsQuery.data!["active-deck"]}
          showGradient={false}
          blur="6px"
        />
      </div>

      <StartPageHeader
        deckName={props.deckName}
        previewCount={previewCount()}
        sessionMode={props.logic.sessionMode()}
        onSessionModeChange={props.logic.setSessionMode}
        activeService={props.logic.activeService}
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
              activeService={props.logic.activeService}
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

      <BottomNav dailyProgressPercentage={25} />
    </div>
  )
}
