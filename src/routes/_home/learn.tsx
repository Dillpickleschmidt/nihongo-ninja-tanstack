import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, createEffect, onMount, onCleanup } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "../../../convex/_generated/api"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { useQueryClient } from "@tanstack/solid-query"
import { queryKeys } from "~/query/query-keys"
import { CompletionsSyncDialog } from "@/features/learn/CompletionsSyncDialog"
import { FloatingKanji } from "@/features/homepage/components/floating-kanji"
import { LearningPathProvider } from "@/features/learn/context/learning-path"
import { LearningPathHeader } from "@/features/learn/LearningPathHeader"
import { LearningPathSection } from "@/features/learn/LearningPathSection"

export const Route = createFileRoute("/_home/learn")({
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
    if (
      context.auth.userId &&
      !(anki.mode === "enabled" && anki.is_api_key_valid)
    ) {
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
  component: LearnComponent,
})

function LearnComponent() {
  const [scrollY, setScrollY] = createSignal(0)
  const [selectedView, setSelectedView] = createSignal<string>("grid")
  const queryClient = useQueryClient()

  // Dynamic background blur: 4 at top, 0 when scrolled
  createEffect(() => {
    const atTop = scrollY() < 150
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
    <div class="relative min-h-screen text-foreground dark:text-white">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.3s ease-out forwards; }
      `}</style>

      <CompletionsSyncDialog />

      <FloatingKanji char="忍" class="top-52 left-10" delay={0} />

      <main class="mx-auto max-w-7xl px-4 pt-20 pb-32 md:px-6 md:pt-20 2xl:pt-28">
        <LearningPathProvider>
          <LearningPathHeader />

          <LearningPathSection
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
        </LearningPathProvider>
      </main>
    </div>
  )
}
