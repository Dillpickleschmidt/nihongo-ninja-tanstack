import { createFileRoute } from "@tanstack/solid-router"
import { isServer } from "solid-js/web"
import { Suspense, createSignal, createEffect, onMount, onCleanup } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "../../../convex/_generated/api"
import { useQueryClient } from "@tanstack/solid-query"
import { queryKeys } from "~/query/query-keys"
import { useColorAnimation } from "@/features/homepage/lib/use-color-animation"
import { FloatingKanji } from "@/features/homepage/components/floating-kanji"
import { HeroSection } from "@/features/dashboard/hero/HeroSection"
import { PracticeToolsSection } from "@/features/dashboard/practice-tools/PracticeToolsSection"
import { LearningPathSection } from "@/features/dashboard/learning-path/LearningPathSection"

export const Route = createFileRoute("/_home/dashboard")({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(convexQuery(api.api.profiles.getProfile, {}))
    context.queryClient.prefetchQuery(
      convexQuery(api.api.learning_paths.getAllLearningPaths, {})
    )
    return { didSSR: isServer }
  },
  component: DashboardComponent,
})

function DashboardComponent() {
  const { didSSR } = Route.useLoaderData()()
  const [scrollY, setScrollY] = createSignal(0)
  const queryClient = useQueryClient()

  // Dynamic background blur: 4 at top, 0 when scrolled
  createEffect(() => {
    const atTop = scrollY() < 400
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: atTop ? 4 : 0,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  useColorAnimation()

  onMount(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    onCleanup(() => window.removeEventListener("scroll", handleScroll))
  })

  return (
    <div class="relative min-h-screen text-white overflow-x-hidden">
      <style>{`
        @property --accent { syntax: "<color>"; inherits: true; initial-value: #f59e0b; }
        @property --accent-end { syntax: "<color>"; inherits: true; initial-value: #f43f5e; }
        :root { transition: --accent 2s ease-in-out, --accent-end 2s ease-in-out; }
        .accent-gradient { background: linear-gradient(to right, var(--accent), var(--accent-end)); }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.3s ease-out forwards; }
      `}</style>

      <FloatingKanji char="忍" class="top-20 left-[10%]" delay={0} />

      <div
        class="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          "background-image": `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <main class="relative pt-28 pb-32 md:pb-12">
        <div class="mx-auto max-w-7xl px-4 md:px-6">
          <HeroSection skipAnimation={didSSR} />

          <PracticeToolsSection />

          <Suspense>
            <LearningPathSection skipAnimation={didSSR} />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
