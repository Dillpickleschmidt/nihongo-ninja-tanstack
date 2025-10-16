// features/vocab-practice/components/pages/start-page/components/StartPageLayout.tsx
import { For, Show, type JSX } from "solid-js"
import { Button } from "@/components/ui/button"
import { ChevronDown, Loader2 } from "lucide-solid"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { BottomNav } from "@/features/navbar/BottomNav"
import { StartPageHeader } from "./StartPageHeader"
import { StartPageButton } from "./StartPageButton"
import StartPagePreviewCard from "./StartPagePreviewCard"
import DependencyOverview from "./DependencyOverview"
import type { useStartPageLogic } from "../hooks/useStartPageLogic"

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
            <div class="mt-32 mb-20 space-y-3 md:mt-48">
              <h2 class="text-primary text-center text-lg font-semibold tracking-wide">
                Review Items
              </h2>
              <p class="text-muted-foreground text-center text-sm lg:text-base">
                This is the whole pool of items available. Only a handful of
                them will be mixed into your practice session.
              </p>
              <div class="mt-3 grid gap-3 lg:gap-4">
                <For
                  each={props.logic
                    .reviewItems()
                    .slice(0, props.logic.visibleReviewCount())}
                >
                  {(card, index) => (
                    <StartPagePreviewCard
                      card={card}
                      index={index()}
                      allCards={props.logic.reviewItems()}
                    />
                  )}
                </For>
              </div>

              <div class="mt-4 flex items-center justify-between">
                <div />
                <Show
                  when={
                    props.logic.visibleReviewCount() <
                    props.logic.reviewItems().length
                  }
                  fallback={
                    <p class="text-muted-foreground text-sm">No more items</p>
                  }
                >
                  <Button
                    variant="outline"
                    onClick={() =>
                      props.logic.setVisibleReviewCount((count) => count + 20)
                    }
                    class="bg-card/40 border-card-foreground/70 rounded-lg hover:cursor-pointer"
                  >
                    Show More <ChevronDown class="h-4 w-4" />
                  </Button>
                </Show>
                <p class="text-muted-foreground text-xs">
                  {Math.min(
                    props.logic.visibleReviewCount(),
                    props.logic.reviewItems().length,
                  )}
                  /{props.logic.reviewItems().length}
                </p>
              </div>
            </div>
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
