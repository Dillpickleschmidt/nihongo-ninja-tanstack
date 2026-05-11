import { createFileRoute, Link } from "@tanstack/solid-router"
import {
  createEffect,
  createSignal,
  Index,
  onCleanup,
  onMount,
  Show,
} from "solid-js"
import { Dynamic } from "solid-js/web"
import { useQueryClient } from "@tanstack/solid-query"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
import { api } from "../../../convex/_generated/api"
import { usePreferences } from "@/lib/preferences"
import { ChevronRight } from "lucide-solid"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { DashboardCard } from "@/features/dashboard/DashboardCard"
import {
  PRACTICE_TOOLS,
  MEDIA_RESOURCES,
  REFERENCE_TOOLS,
} from "@/features/dashboard/dashboard-cards-data"
import { useSrs } from "@/features/srs/use-srs"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { queryKeys } from "@/query/query-keys"

export const Route = createFileRoute("/_home/dashboard")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
    if (context.auth.userId) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.fsrs.getDueFSRSCardsCount, {}),
      )
    }
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

  const { preferences } = usePreferences()
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

  return (
    <div class="z-0 relative min-h-screen text-white overflow-x-clip">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.4s ease-out forwards; }
      `}</style>

      <main>
        {/* Hero */}
        <section class="mx-auto grid max-w-7xl gap-8 px-6 pt-16 lg:pt-24">
          <div class="mx-auto text-center">
            <h1 class="font-excalifont text-4xl text-white/90 sm:text-5xl lg:whitespace-nowrap">
              The best materials, at the right time
            </h1>
          </div>

          <div class="mx-auto grid w-full max-w-3xl items-start gap-8">
            <div class="text-center">
              <p class="mx-auto max-w-lg text-white/50">
                Build learning paths from your favorite content, practice using
                unique tools, or continue where you left off.
              </p>

              <div class="mt-6 flex flex-wrap justify-center gap-3">
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
                      <span class="truncate max-w-48">
                        {mod().module.title}
                      </span>
                      <ChevronRight class="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </Show>
              </div>
            </div>
          </div>
        </section>

        <div class="mx-auto mt-10 max-w-7xl px-6 pb-32">
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
                {(card, index) => <DashboardCard card={card()} index={index} />}
              </Index>
            </div>
          </section>

          {/* Row 4: Reference & Extras */}
          <section class="mt-16">
            <SectionHeader title="Reference & Extras" />
            <div class="mt-6 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              <Index each={REFERENCE_TOOLS}>
                {(card, index) => <DashboardCard card={card()} index={index} />}
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
      <h2 class="text-xl font-semibold font-excalifont text-white">
        {props.title}
      </h2>
      <div class="h-px flex-1 bg-gradient-to-r from-dynamic-accent/20 to-transparent" />
    </div>
  )
}
