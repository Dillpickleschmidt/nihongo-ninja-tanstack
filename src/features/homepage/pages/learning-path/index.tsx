import { Show, createMemo } from "solid-js"
import { useModuleProgress } from "./hooks/useModuleProgress"
import { useScrollToIncomplete } from "./hooks/useScrollToIncomplete"
import { useChapterData } from "./hooks/useChapterData"
import type { User } from "@supabase/supabase-js"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { Tile } from "./types"
import { getModules } from "@/data/utils/core"
import { enrichLessons } from "@/features/learn-page/utils/loader-helpers"
import { ChapterHeader } from "./components/ChapterHeader"
import { ModuleTilesGrid } from "./components/ModuleTilesGrid"
import { ProgressFooter } from "./components/ProgressFooter"
import { QuickAccessCards } from "./components/QuickAccessCards"
import { ArrowBigLeft, ChevronDown } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { FeatureList } from "./components/FeatureList"
import ViewingIsEnough from "@/features/homepage/shared/assets/viewing-is-enough.svg"

import type { BuiltInDeck } from "@/data/types"
import type { EnrichedLearningPathModule } from "@/features/learn-page/utils/loader-helpers"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"

interface LearningPathPageProps {
  settingsQuery: UseQueryResult<UserSettings, Error>
  deck?: BuiltInDeck
  enrichedModules?: EnrichedLearningPathModule[]
  onChapterChange?: (chapterSlug: string) => void
  onBack?: () => void
  user?: User | null
}

export function LearningPathPage(props: LearningPathPageProps) {
  const { activeTextbook, deck: deckData } = useChapterData(props.settingsQuery)

  const enrichedModules = createMemo(() => {
    // If enrichedModules provided via props, use them (from route loader)
    if (props.enrichedModules) return props.enrichedModules

    // If deck is provided via props, use it (from route loader)
    if (props.deck) {
      const rawModules = getModules(props.deck)
      return enrichLessons(rawModules)
    }

    // Otherwise, derive and enrich from settings
    const deck = deckData()
    if (!deck) return []
    const rawModules = getModules(deck)
    return enrichLessons(rawModules)
  })

  const tiles = createMemo(
    () =>
      enrichedModules().map((module) => ({
        moduleId: module.moduleId,
        moduleType: module.moduleType,
        title: module.displayTitle,
        description: module.description,
        href: module.linkTo,
        iconClasses: module.iconClasses,
      })) as Tile[],
  )

  const { isModuleCompleted, getFirstIncompleteIndex } = useModuleProgress(
    props.user?.id || null,
    tiles,
  )

  const {
    handleTileRef,
    handleScrollToNext,
    blinkingTileIndex,
    shouldShowButton,
  } = useScrollToIncomplete(getFirstIncompleteIndex)

  const firstIncompleteHref = () => {
    const index = getFirstIncompleteIndex()
    return index >= 0 ? tiles()[index]?.href : undefined
  }

  return (
    <section class="relative mx-auto w-full max-w-7xl px-4 pt-2 pb-16 md:pt-8">
      <Show when={activeTextbook() === "getting_started" && props.onBack}>
        <div class="flex h-16 items-center pl-4">
          <Button
            variant="ghost"
            onClick={props.onBack}
            class="h-auto rounded-full border-2 border-white/30 bg-transparent p-1.25 opacity-60 hover:bg-neutral-400/10 [&_svg]:size-auto"
          >
            <ArrowBigLeft class="h-12 w-12 text-white" />
          </Button>
        </div>
      </Show>

      {/* <SSRMediaQuery hideFrom="md"> */}
      {/* </SSRMediaQuery> */}

      <Show when={activeTextbook() !== "getting_started"}>
        <div class="py-4">
          <QuickAccessCards />
        </div>
      </Show>

      {/* <SSRMediaQuery showFrom="md"> */}
      {/* </SSRMediaQuery> */}

      <Show when={deckData()}>
        <ChapterHeader
          heading={deckData()?.heading}
          description={deckData()?.description}
          features={deckData()?.features}
          settingsQuery={props.settingsQuery}
          onChapterChange={props.onChapterChange}
          firstIncompleteHref={firstIncompleteHref()}
        />
      </Show>

      <div class="flex w-full justify-between md:-mt-15">
        <div />
        <ViewingIsEnough class="-mb-0 h-auto w-68 text-neutral-400" />
      </div>

      <ModuleTilesGrid
        tiles={tiles()}
        settingsQuery={props.settingsQuery}
        isModuleCompleted={isModuleCompleted}
        firstIncompleteIndex={getFirstIncompleteIndex()}
        tileRefs={handleTileRef}
        blinkingTileIndex={blinkingTileIndex()}
      />

      <ProgressFooter
        settingsQuery={props.settingsQuery}
        tiles={tiles()}
        isModuleCompleted={isModuleCompleted}
        userId={props.user?.id || null}
      />
      <Show when={shouldShowButton()}>
        <Button
          onClick={handleScrollToNext}
          class="bg-background/20 fixed bottom-20 left-1/2 z-40 h-11 w-11 -translate-x-1/2 rounded-full p-0 backdrop-blur-sm"
          variant="outline"
        >
          <ChevronDown class="mt-0.5 h-5! w-5!" />
        </Button>
      </Show>
    </section>
  )
}
