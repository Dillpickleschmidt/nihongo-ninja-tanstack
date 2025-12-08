import { createFileRoute, useNavigate } from "@tanstack/solid-router"
import { createEffect, createSignal, For, on, Show } from "solid-js"
import { useMutation } from "convex-solidjs"
import { ChevronDown } from "lucide-solid"
import { authClient } from "~/lib/auth-client"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
import { api } from "../../convex/_generated/api"
import { TopNav, BottomNav } from "@/features/navbar/Nav"
import { TextbookChapterBackgrounds } from "@/components/TextbookChapterBackgrounds"
import { Sidebar } from "@/features/sidebar/Sidebar"
import { SSRMediaQuery } from "~/components/SSRMediaQuery"
import { ChapterSection } from "@/features/dashboard/ChapterSection"
import { LearningPathChapterSelector } from "@/features/dashboard/LearningPathChapterSelector"
import { cn } from "@/utils"

export const Route = createFileRoute("/dashboard")({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(convexQuery(api.api.profiles.getProfile, {}))
    context.queryClient.prefetchQuery(
      convexQuery(api.api.learning_paths.getAllLearningPaths, {})
    )
  },
  component: DashboardComponent,
})

function DashboardComponent() {
  const navigate = useNavigate()
  const profile = useConvexQuery(api.api.profiles.getProfile, {})
  const updatePreference = useMutation(api.api.profiles.updatePreferenceField)
  const learningPathsQuery = useConvexQuery(
    api.api.learning_paths.getAllLearningPaths,
    {}
  )
  const selectedPathId = () =>
    profile.data()?.userPreferences.activeLearningPath

  const selectedPath = () =>
    learningPathsQuery.data()?.find((p) => p.id === selectedPathId())

  // Fetch chapters for the selected path (works for both static and user paths)
  const pathChaptersQuery = useConvexQuery(
    api.api.learning_paths.getPathChapters,
    () => ({ pathId: selectedPathId()! }),
    () => ({ enabled: !!selectedPathId() })
  )

  const selectedChapter = () => {
    const chapterSlug = profile.data()?.userPreferences.activeChapter
    if (!chapterSlug) return undefined
    return pathChaptersQuery.data()?.find((c) => c.slug === chapterSlug)
  }

  const [isSelectorOpen, setIsSelectorOpen] = createSignal(false)
  const chapterRefs = new Map<string, HTMLDivElement>()

  // Auto-scroll to selected chapter when it changes
  createEffect(on(selectedChapter, (chapter) => {
    if (chapter) {
      chapterRefs.get(chapter.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }))

  const handleSignOut = async () => {
    await authClient.signOut()
    navigate({ to: "/" })
  }

  const dailyProgress = 65

  return (
    <>
      <TextbookChapterBackgrounds blur={8} opacityOffset={0} showGradient={true} />

      <main class="min-h-screen">
        <TopNav dailyProgressPercentage={dailyProgress} onSignOut={handleSignOut} />

        <div class="pt-28 pb-32 md:pb-12">
          {/* Header - always visible */}
          <div class="mx-auto max-w-7xl px-4 md:px-6 mb-8">
            <h1 class="text-3xl font-bold text-white mb-4">Learning Dashboard</h1>
            <p class="text-neutral-300 mb-6">
              Track your progress through structured learning paths. Choose a textbook to begin.
            </p>

            <Show
              when={profile.data() && selectedPath() && selectedChapter()}
              fallback={<div class="h-10 w-48 bg-white/10 rounded animate-pulse" />}
            >
              <LearningPathChapterSelector
                learningPaths={learningPathsQuery.data()!}
                activePathId={selectedPathId()!}
                activeChapter={selectedChapter()!}
                isOpen={isSelectorOpen()}
                onOpenChange={setIsSelectorOpen}
                onChapterSelect={(pathId, chapter) => {
                  updatePreference.mutate({ field: "activeLearningPath", value: pathId })
                  updatePreference.mutate({ field: "activeChapter", value: chapter.slug })
                }}
              >
                <div
                  class={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer",
                    "bg-white/10 text-neutral-300 hover:bg-white/20"
                  )}
                >
                  <span>{selectedPath()?.shortName}</span>
                  <span class="text-neutral-500">—</span>
                  <span>{selectedChapter()?.title}</span>
                  <ChevronDown class="h-4 w-4 ml-1" />
                </div>
              </LearningPathChapterSelector>
            </Show>
          </div>

          <div class="mx-auto max-w-7xl px-4 md:px-6">
            <Show
              when={profile.data() && pathChaptersQuery.data()}
              fallback={
                <div class="space-y-4">
                  <div class="h-24 bg-white/10 rounded animate-pulse" />
                  <div class="h-24 bg-white/10 rounded animate-pulse" />
                </div>
              }
            >
              <For each={pathChaptersQuery.data()}>
                {(chapter) => (
                  <div
                    ref={(el) => chapterRefs.set(chapter.slug, el)}
                    class="scroll-mt-32"
                  >
                    <ChapterSection chapter={chapter} />
                  </div>
                )}
              </For>
            </Show>
          </div>
        </div>
      </main >

      <SSRMediaQuery showFrom="md">
        <Sidebar user={null} />
      </SSRMediaQuery>

      <BottomNav dailyProgressPercentage={dailyProgress} class="md:hidden" />
    </>
  )
}
