import { createSignal, Suspense, Index } from "solid-js"
import { Rows3, List } from "lucide-solid"
import { useConvexQuery } from "@/lib/convex-query"
import { useLocalCompletions } from "@/lib/completions"
import { api } from "convex/_generated/api"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePreferences } from "@/lib/preferences"
import { getUser } from "@/lib/auth"
import { ChapterSection } from "./ChapterSection"

export function LearningPathSection() {
  const [selectedView, setSelectedView] = createSignal<string>("grid")

  // Queries
  const user = getUser()
  const { preferences } = usePreferences()
  const learningPathsQuery = useConvexQuery(
    api.api.learning_paths.getAllLearningPaths,
    {},
  )

  const selectedPathId = () => preferences().activeLearningPath

  const selectedPath = () =>
    learningPathsQuery.data()?.find((p) => p.id === selectedPathId())

  const selectedPathName = () => selectedPath()?.name

  const progressQuery = useConvexQuery(
    api.api.learning_paths.getPathWithProgress,
    () => ({ pathId: selectedPathId()! }),
    () => ({ enabled: !!selectedPathId() }),
  )

  const chapters = () => progressQuery.data()?.chapters

  const completedSet = () =>
    new Set(progressQuery.data()?.completedModules ?? [])

  const localCompletions = useLocalCompletions()

  const isCompleted = (moduleId: string) =>
    completedSet().has(moduleId) || moduleId in localCompletions()

  return (
    <section
      class="mt-12 animate-fade-up opacity-0"
      style={{ "animation-delay": "150ms" }}
    >
      <Tabs value={selectedView()} onChange={setSelectedView} class="w-full">
        {/* Header + tabs - render immediately */}
        <div class="mb-8 flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-white md:text-2xl">
              Your <span class="text-(--accent)">Learning Path</span>
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
          <Index each={chapters()}>
            {(chapter) => (
              <ChapterSection chapter={chapter()} viewMode={selectedView()} isCompleted={isCompleted} />
            )}
          </Index>
        </Suspense>
      </Tabs>
    </section>
  )
}
