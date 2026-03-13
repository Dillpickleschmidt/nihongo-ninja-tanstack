import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, createEffect, onMount, onCleanup, type Accessor, type Setter } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "../../../convex/_generated/api"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { useQueryClient } from "@tanstack/solid-query"
import { queryKeys } from "~/query/query-keys"
import { CompletionsSyncDialog } from "@/features/dashboard/CompletionsSyncDialog"
import { FloatingKanji } from "@/features/homepage/components/floating-kanji"
import { DashboardPathProvider } from "@/features/dashboard/context/dashboard-path"
import { HeroSection } from "@/features/dashboard/hero/HeroSection"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { PracticeToolsSection } from "@/features/dashboard/practice-tools/PracticeToolsSection"
import { ViewToggle } from "@/features/dashboard/hero/ViewToggle"
import { LearningPathSection } from "@/features/dashboard/learning-path/LearningPathSection"

export const Route = createFileRoute("/_home/dashboard")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }

    const prefs = parsePreferencesCookie()
    const anki = prefs.srsServicePreferences.anki
    if (!(anki.mode === "enabled" && anki.is_api_key_valid)) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.fsrs.getDueFSRSCardsCount, {}),
      )
    }
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
  const [scrollY, setScrollY] = createSignal(0)
  const [selectedView, setSelectedView] = createSignal<string>("grid")
  const queryClient = useQueryClient()

  // Dynamic background blur: 4 at top, 0 when scrolled
  createEffect(() => {
    const atTop = scrollY() < 400
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: atTop ? 4 : 12,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  onMount(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    onCleanup(() => window.removeEventListener("scroll", handleScroll))
  })

  return (
    <div class="relative min-h-screen text-white overflow-x-hidden">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.3s ease-out forwards; }
      `}</style>

      <CompletionsSyncDialog />

      <FloatingKanji char="忍" class="top-20 left-[10%]" delay={0} />

      <main class="relative pt-20 md:pt-20 2xl:pt-28 pb-32">
        <DashboardPathProvider>
          <div class="mx-auto max-w-7xl px-4 md:px-6">
            <HeroSection selectedView={selectedView} setSelectedView={setSelectedView} />

            <SSRMediaQuery hideFrom="md">
              <PracticeToolsSection />
              <ViewToggle
                selectedView={selectedView}
                setSelectedView={setSelectedView}
                class="mt-4"
              />
            </SSRMediaQuery>

            <LearningPathSection selectedView={selectedView} />
          </div>
        </DashboardPathProvider>
      </main>
    </div>
  )
}
