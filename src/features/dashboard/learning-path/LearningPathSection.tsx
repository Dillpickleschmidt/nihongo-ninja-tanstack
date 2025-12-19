import { createSignal, Suspense, For, onMount } from "solid-js"
import { Rows3, List } from "lucide-solid"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { animateElementIn, getInitialAnimationStyles } from "@/utils/animations"
import { ChapterSection } from "./ChapterSection"

interface LearningPathSectionProps {
  skipAnimation?: boolean
}

export function LearningPathSection(props: LearningPathSectionProps) {
  let ref: HTMLElement | undefined
  const [selectedView, setSelectedView] = createSignal<string>("grid")

  // Queries
  const profile = useConvexQuery(api.api.profiles.getProfile, {})
  const learningPathsQuery = useConvexQuery(
    api.api.learning_paths.getAllLearningPaths,
    {}
  )

  const selectedPathId = () =>
    profile.data()?.userPreferences.activeLearningPath

  const selectedPath = () =>
    learningPathsQuery.data()?.find((p) => p.id === selectedPathId())

  const selectedPathName = () => selectedPath()?.name

  const pathChaptersQuery = useConvexQuery(
    api.api.learning_paths.getPathChapters,
    () => ({ pathId: selectedPathId()! }),
    () => ({ enabled: !!selectedPathId() })
  )

  const chapters = () => pathChaptersQuery.data()

  onMount(() => {
    if (!props.skipAnimation && ref) {
      animateElementIn(ref, "down")
    }
  })

  return (
    <section
      ref={ref}
      class="mt-12"
      style={props.skipAnimation ? {} : getInitialAnimationStyles("down")}
    >
      <Tabs value={selectedView()} onChange={setSelectedView} class="w-full">
        {/* Header + tabs - render immediately */}
        <div class="mb-8 flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-white md:text-2xl">
              Your{" "}
              <span class="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-(--accent-end)">
                Learning Path
              </span>
            </h2>
            <p class="mt-1 text-sm text-white/50">
              {selectedPathName() ?? "Select a textbook to begin"}
            </p>
          </div>
          <TabsList class="flex h-8 bg-transparent">
            <TabsTrigger
              value="grid"
              class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
            >
              <Rows3 class="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger
              value="compact"
              class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
            >
              <List class="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Chapters in Suspense */}
        <Suspense
          fallback={
            <div class="space-y-4">
              <div class="h-24 bg-white/5 rounded animate-pulse" />
              <div class="h-24 bg-white/5 rounded animate-pulse" />
            </div>
          }
        >
          <For each={chapters()}>
            {(chapter) => <ChapterSection chapter={chapter} viewMode={selectedView()} />}
          </For>
        </Suspense>
      </Tabs>
    </section>
  )
}
