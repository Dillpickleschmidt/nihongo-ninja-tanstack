import { createFileRoute, Link } from "@tanstack/solid-router"
import { createEffect, createSignal, For, Index, onCleanup, onMount, Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { useQueryClient } from "@tanstack/solid-query"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
import { api } from "../../../convex/_generated/api"
import { usePreferences } from "@/lib/preferences"
import { ChevronRight } from "lucide-solid"
import { getModuleIcon, getModuleIconClasses } from "@/data/utils/module-helpers"
import { LearningPathsPanel, type LearningPathSummary } from "@/features/dashboard/LearningPathsPanel"
import { DashboardCard } from "@/features/dashboard/DashboardCard"
import {
  PRACTICE_TOOLS,
  MEDIA_RESOURCES,
  REFERENCE_TOOLS,
} from "@/features/dashboard/dashboard-cards-data"
import { useColorAnimation } from "@/features/homepage/lib/use-color-animation"
import { useSrs } from "@/features/srs/use-srs"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { queryKeys } from "@/query/query-keys"
import { textbooks, type TextbookIDEnum } from "@/data/textbooks"

export const Route = createFileRoute("/_home/dashboard")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
    context.queryClient.prefetchQuery(
      convexQuery(api.api.fsrs.getDueFSRSCardsCount, {}),
    )
    const prefs = parsePreferencesCookie()
    const pathId = prefs.activeLearningPath
    if (pathId) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.learning_paths.getDashboardData, { pathId }),
      )
    }
  },
  component: DashboardComponent,
})

function DashboardComponent() {
  useColorAnimation()

  const queryClient = useQueryClient()
  const [scrollY, setScrollY] = createSignal(0)

  createEffect(() => {
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: scrollY() < 5 ? 4 : 22,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  onMount(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    onCleanup(() => window.removeEventListener("scroll", handleScroll))
  })

  const { preferences, setPreferences } = usePreferences()
  const selectedPathId = () => preferences().activeLearningPath
  const { dueCounts } = useSrs()
  const vocabTotal = () => dueCounts().vocabTotal

  const dashboardQuery = useConvexQuery(
    api.api.learning_paths.getDashboardData,
    () => ({ pathId: selectedPathId()! }),
    () => ({ enabled: !!selectedPathId() }),
  )

  const nextModule = () => {
    const chapters = dashboardQuery.data()?.chapters
    const completed = new Set(dashboardQuery.data()?.completedModules ?? [])
    if (!chapters) return undefined
    for (const chapter of chapters) {
      for (const mod of chapter.modules) {
        if (!mod.disabled && !completed.has(mod.moduleId)) return mod
      }
    }
    return undefined
  }

  const pathSummaries = (): LearningPathSummary[] => {
    const data = dashboardQuery.data()
    if (!data) return []
    const completedSet = new Set(data.completedModules)

    return data.paths.map((path) => {
      const textbook = textbooks[path.id as TextbookIDEnum]
      const isActive = path.id === data.pathId

      // Real progress for active path only; placeholder for others
      // TODO: Replace with getAllPathsProgress query for all paths
      let totalModules = 0
      let completedCount = 0
      if (isActive && data.chapters) {
        for (const chapter of data.chapters) {
          for (const mod of chapter.modules) {
            if (!mod.disabled) {
              totalModules++
              if (completedSet.has(mod.moduleId)) completedCount++
            }
          }
        }
      }

      return {
        id: path.id,
        name: path.name,
        shortName: path.shortName,
        isUserCreated: path.isUserCreated,
        thumbnailUrl: textbook?.cover_image_url,
        totalModules,
        completedModules: completedCount,
        // TODO: Replace with real SRS vocab data
        totalVocab: 0,
        seenVocab: 0,
      }
    })
  }

  return (
    <div class="z-0 relative min-h-screen text-white overflow-x-clip">
      <style>{`
        @property --landing-accent { syntax: "<color>"; inherits: true; initial-value: #f59e0b; }
        @property --landing-accent-end { syntax: "<color>"; inherits: true; initial-value: #f43f5e; }

        :root { transition: --landing-accent 2s ease-in-out, --landing-accent-end 2s ease-in-out; }

        .landing-accent-gradient { background: linear-gradient(to right, var(--landing-accent), var(--landing-accent-end)); }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.4s ease-out forwards; }
      `}</style>

      <main>
        {/* Hero */}
        <section class="mx-auto grid max-w-7xl items-start gap-8 px-6 pt-12 lg:pt-20 lg:grid-cols-2">
          <div>
            <h1 class="font-bold text-4xl text-white/90">
              The best materials, at the right time
            </h1>
            <p class="mt-3 max-w-lg text-white/50">
              Build learning paths from your favorite content, practice using unique tools, or continue where you left off.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              {/* Review button */}
              <Link
                to="/review"
                class="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10 hover:border-white/20"
              >
                Review
                <span class="flex items-center gap-1.5 text-xs text-white/40">
                  <span>S: –</span>
                  <span>·</span>
                  <span>
                    V:{" "}
                    <Show when={vocabTotal() !== undefined} fallback="–">
                      {vocabTotal()}
                    </Show>
                  </span>
                </span>
              </Link>

              {/* Next module button */}
              <Show when={nextModule()}>
                {(mod) => (
                  <Link
                    to={mod().linkTo}
                    class="group inline-flex items-center gap-2 rounded-xl bg-dynamic-accent/80 px-3 py-2 text-xs font-medium text-white transition-[background-color,transform] hover:bg-dynamic-accent hover:scale-[1.02]"
                    style={{
                      "box-shadow":
                        "0 8px 16px -4px color-mix(in srgb, var(--dynamic-accent) 30%, transparent)",
                    }}
                  >
                    <Dynamic
                      component={getModuleIcon(mod().module.module_type)}
                      class={`size-4 ${getModuleIconClasses(mod().module.module_type)}`}
                    />
                    <span class="truncate max-w-48">{mod().module.title}</span>
                    <ChevronRight class="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </Show>
            </div>
          </div>
          <LearningPathsPanel />

          {/* Learning Paths - temporarily commented out
          <Show when={pathSummaries().length > 0}>
            <div class="lg:col-start-1">
              <h3 class="font-excalifont text-white/50">
                Your Learning Paths
              </h3>
              <div class="scrollbar-none -mx-2.5 mt-3 flex gap-3 overflow-x-auto px-2.5">
                <For each={pathSummaries()}>
                  {(path) => {
                    const modulePct = () =>
                      path.totalModules > 0
                        ? (path.completedModules / path.totalModules) * 100
                        : 0
                    const vocabPct = () =>
                      path.totalVocab > 0
                        ? (path.seenVocab / path.totalVocab) * 100
                        : 0

                    return (
                      <Link
                        to="/learn"
                        onClick={() =>
                          setPreferences({
                            activeLearningPath: path.id,
                          })
                        }
                        class="flex w-44 shrink-0 items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-white/5"
                      >
                        <div class="size-9 shrink-0 overflow-hidden rounded">
                          <Show
                            when={path.thumbnailUrl}
                            fallback={
                              <div class="flex size-full items-center justify-center bg-gradient-to-br from-(--landing-accent)/30 to-(--landing-accent-end)/30">
                                <span class="text-xs font-bold text-white/70">
                                  {path.shortName.charAt(0)}
                                </span>
                              </div>
                            }
                          >
                            <img
                              src={path.thumbnailUrl!}
                              alt={path.shortName}
                              class="size-full object-cover"
                            />
                          </Show>
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="truncate text-sm font-medium text-white/70">
                            {path.shortName}
                          </p>
                          <div class="mt-1 flex flex-col gap-0.5">
                            <div class="flex items-center gap-1.5">
                              <div class="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                                <div
                                  class="landing-accent-gradient h-full rounded-full"
                                  style={{ width: `${modulePct()}%` }}
                                />
                              </div>
                              <span class="shrink-0 text-[9px] text-white/25">
                                {path.totalModules > 0
                                  ? `${path.completedModules}/${path.totalModules}`
                                  : "—"}
                              </span>
                            </div>
                            <div class="flex items-center gap-1.5">
                              <div class="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                                <div
                                  class="h-full rounded-full bg-emerald-500"
                                  style={{ width: `${vocabPct()}%` }}
                                />
                              </div>
                              <span class="shrink-0 text-[9px] text-white/25">
                                {path.totalVocab > 0
                                  ? `${path.seenVocab}/${path.totalVocab}`
                                  : "—"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  }}
                </For>
              </div>
            </div>
          </Show>
          */}
        </section>

        <div class="mx-auto mt-16 max-w-7xl px-6 pb-32">
        {/* Practice Tools */}
        <section>
          <SectionHeader title="Practice Tools" />
          <div class="mt-6 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <Index each={PRACTICE_TOOLS}>
              {(card, index) => (
                <DashboardCard
                  card={card()}
                  index={index}
                  vocabDueCount={vocabTotal}
                />
              )}
            </Index>
          </div>
        </section>

        {/* Row 3: Media & Immersion */}
        <section class="mt-16">
          <SectionHeader title="Media & Immersion" />
          <div class="mt-6 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <Index each={MEDIA_RESOURCES}>
              {(card, index) => (
                <DashboardCard card={card()} index={index} />
              )}
            </Index>
          </div>
        </section>

        {/* Row 4: Reference & Extras */}
        <section class="mt-16">
          <SectionHeader title="Reference & Extras" />
          <div class="mt-6 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <Index each={REFERENCE_TOOLS}>
              {(card, index) => (
                <DashboardCard card={card()} index={index} />
              )}
            </Index>
          </div>
        </section>
        </div>
      </main>
    </div>
  )
}

function SectionHeader(props: { title: string }) {
  return (
    <div class="flex items-center gap-4">
      <h2 class="text-xl font-semibold text-white">{props.title}</h2>
      <div class="h-px flex-1 bg-gradient-to-r from-(--landing-accent)/20 to-transparent" />
    </div>
  )
}
