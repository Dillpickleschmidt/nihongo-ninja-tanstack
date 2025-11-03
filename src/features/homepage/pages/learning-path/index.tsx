import { Show, createMemo } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useFrozenQuery } from "@/features/homepage/hooks/useFrozenQuery"
import { completedModulesQueryOptions } from "@/features/learn-page/query/query-options"
import type { User } from "@supabase/supabase-js"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import { getDeckBySlug, getModules } from "@/data/utils/core"
import { enrichLessons } from "@/features/learn-page/utils/loader-helpers"
import { ChapterHeader } from "./components/ChapterHeader"
import { ModuleTilesGrid } from "./components/ModuleTilesGrid"
import { ProgressFooter } from "./components/ProgressFooter"
import { QuickAccessCards } from "./components/QuickAccessCards"
import { ArrowBigLeft } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { FeatureList } from "./components/FeatureList"
import ViewingIsEnough from "@/features/homepage/shared/assets/viewing-is-enough.svg"

import type { TextbookIDEnum, BuiltInDeck } from "@/data/types"
import type { EnrichedLearningPathModule } from "@/features/learn-page/utils/loader-helpers"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import StudyHeader from "./components/StudyHeader"

interface LearningPathPageProps {
  settingsQuery: UseQueryResult<UserSettings, Error>
  deck?: BuiltInDeck
  enrichedModules?: EnrichedLearningPathModule[]
  onChapterChange?: (chapterSlug: string) => void
  onBack?: () => void
  user?: User | null
  isNavigating?: boolean
  onNavigationStart?: () => void
}

export function LearningPathPage(props: LearningPathPageProps) {
  // Freeze settings query during navigation to prevent content flashing
  const frozenSettingsQuery = useFrozenQuery(
    props.settingsQuery,
    () => props.isNavigating || false,
  )

  const deckData = createMemo(() => {
    // If deck is provided via props, use it (from route loader)
    if (props.deck) return props.deck

    // Otherwise, derive from settings
    const settings = frozenSettingsQuery().data!
    const textbook = settings["active-learning-path"] as TextbookIDEnum
    const chapter = settings["active-chapter"]
    return getDeckBySlug(textbook, chapter)
  })

  const enrichedModules = createMemo(() => {
    // If enrichedModules provided via props, use them (from route loader)
    if (props.enrichedModules) return props.enrichedModules

    // Otherwise, derive and enrich from deck
    const deck = deckData()
    if (!deck) return []
    const rawModules = getModules(deck)
    return enrichLessons(rawModules)
  })

  const completedModulesQuery = useCustomQuery(() =>
    completedModulesQueryOptions(props.user?.id || null),
  )

  const isModuleCompleted = (moduleHref: string) => {
    const moduleId = moduleHref.split("/").pop()
    return (
      completedModulesQuery.data?.some(
        (module) => module.module_path === moduleId,
      ) ?? false
    )
  }

  const tiles = createMemo(() =>
    enrichedModules().map((module) => ({
      moduleId: module.moduleId,
      moduleType: module.moduleType,
      title: module.displayTitle,
      description: module.description,
      href: module.linkTo,
      iconClasses: module.iconClasses,
    })),
  )

  const getFirstIncompleteIndex = () =>
    tiles().findIndex((tile) => !isModuleCompleted(tile.href))

  return (
    <section class="relative mx-auto w-full max-w-7xl px-4 pt-4 pb-16 md:pt-8">
      <Show
        when={
          frozenSettingsQuery().data!["active-learning-path"] ===
            "getting_started" && props.onBack
        }
      >
        <div class="mb-4 flex h-16 items-center pl-4">
          <Button
            variant="ghost"
            onClick={props.onBack}
            class="h-auto rounded-full border-2 border-white/30 bg-transparent p-1.25 opacity-60 hover:bg-neutral-400/10 [&_svg]:size-auto"
          >
            <ArrowBigLeft class="h-12 w-12 text-white" />
          </Button>
        </div>
      </Show>

      <SSRMediaQuery hideFrom="md">
        <StudyHeader />
      </SSRMediaQuery>

      <Show
        when={
          frozenSettingsQuery().data!["active-learning-path"] !== "getting_started"
        }
      >
        <div class="py-4">
          <QuickAccessCards />
        </div>
      </Show>

      <SSRMediaQuery showFrom="md">
        <StudyHeader />
      </SSRMediaQuery>

      <ChapterHeader
        heading={deckData()?.heading}
        description={deckData()?.description}
        features={deckData()?.features}
        settingsQuery={frozenSettingsQuery()}
        onChapterChange={props.onChapterChange}
      />

      <div class="flex w-full justify-between md:-mt-16">
        <div />
        <ViewingIsEnough class="-mb-0 h-auto w-68 text-neutral-400" />
      </div>

      <ModuleTilesGrid
        tiles={tiles()}
        settingsQuery={frozenSettingsQuery()}
        isModuleCompleted={isModuleCompleted}
        firstIncompleteIndex={getFirstIncompleteIndex()}
      />

      <ProgressFooter
        settingsQuery={frozenSettingsQuery()}
        tiles={tiles()}
        isModuleCompleted={isModuleCompleted}
        userId={props.user?.id || null}
        onNavigationStart={props.onNavigationStart}
      />
    </section>
  )
}
