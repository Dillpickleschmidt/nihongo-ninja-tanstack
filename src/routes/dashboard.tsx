import { createFileRoute, Link } from "@tanstack/solid-router"
import { Index, Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
import { api } from "../../convex/_generated/api"
import { usePreferences } from "@/lib/preferences"
import { ChevronRight } from "lucide-solid"
import { getModuleIcon, getModuleIconClasses } from "@/data/utils/module-helpers"
import { FloatingKanji } from "@/features/homepage/components/floating-kanji"
import { DashboardCard } from "@/features/dashboard/DashboardCard"
import {
  PRACTICE_TOOLS,
  MEDIA_RESOURCES,
  REFERENCE_TOOLS,
} from "@/features/dashboard/dashboard-cards-data"
import { useColorAnimation } from "@/features/homepage/lib/use-color-animation"
import { useSrs } from "@/features/srs/use-srs"
import { parsePreferencesCookie } from "@/query/model/preferences"

export const Route = createFileRoute("/dashboard")({
  loader: ({ context }) => {
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
    <div class="z-0 relative min-h-screen bg-neutral-950 text-white overflow-x-clip">
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

      {/* Floating kanji decorations */}
      <FloatingKanji char="忍" class="top-20 left-[10%] -z-20" delay={0} />
      <FloatingKanji char="語" class="top-[40%] right-[5%] -z-20" delay={200} />
      <FloatingKanji
        char="学"
        class="bottom-[20%] left-[15%] -z-20"
        delay={400}
      />

      {/* Noise texture */}
      <div class="fixed inset-0 -z-10">
        <div
          class="absolute inset-0 opacity-[0.015]"
          style={{
            "background-image": `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <main class="mx-auto max-w-7xl px-6 pt-20 pb-32">
        {/* Row 1: Header + Image */}
        <section class="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 class="text-4xl font-bold lg:text-5xl">
              <span class="text-transparent bg-clip-text bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end)">
                Dashboard
              </span>
            </h1>
            <p class="mt-3 max-w-lg text-lg text-white/50">
              Your home base for learning Japanese. Pick up where you left off
              or explore something new.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              {/* Review button */}
              <Link
                to="/review"
                class="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/20"
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
                    class="group inline-flex items-center gap-2 rounded-xl bg-dynamic-accent/80 px-4 py-2.5 text-sm font-medium text-white transition-[background-color,transform] hover:bg-dynamic-accent hover:scale-[1.02]"
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
          <Link
            to="/discover"
            class="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/5 transition-colors duration-300 hover:border-(--landing-accent)/20"
          >
            <img
              src="/img/backgrounds/rainy-day-mood-cartoon-style.jpg"
              alt="Discover"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <p class="text-xs font-medium uppercase tracking-wider text-(--landing-accent) mb-1">
                Discover
              </p>
              <h3 class="text-lg font-bold text-white">
                Find your next show
              </h3>
              <p class="mt-1 text-sm text-white/50">
                Browse curated anime and dramas for immersion practice
              </p>
            </div>
            <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--landing-accent)/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </section>

        {/* Row 2: Practice Tools */}
        <section class="mt-16">
          <SectionHeader title="Practice Tools" />
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Index each={REFERENCE_TOOLS}>
              {(card, index) => (
                <DashboardCard card={card()} index={index} />
              )}
            </Index>
          </div>
        </section>
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
