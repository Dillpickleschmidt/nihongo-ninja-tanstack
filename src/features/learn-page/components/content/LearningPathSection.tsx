// features/learn-page/components/content/LearningPathSection.tsx
import { Grid3x3, List } from "lucide-solid"
import { createResource, Suspense, onMount, onCleanup } from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LearningPathList } from "./LearningPathList"
import { LearningPathGrid } from "./LearningPathGrid"
import { Route } from "@/routes/_home/learn/$textbookId.$chapterSlug"

interface LearningPathSectionProps {
  variant?: "mobile" | "desktop"
}

export function LearningPathSection(props: LearningPathSectionProps = {}) {
  const variant = props.variant || "desktop"
  const loaderData = Route.useLoaderData()
  const queryClient = useQueryClient()
  const userId = loaderData().user?.id || null

  const [completedModules, { refetch }] = createResource(async () => {
    // First, await and populate cache from deferred loader data
    const data = await loaderData().completedModules
    queryClient.setQueryData(["module-completions", userId], data)
    return data
  })

  // Subscribe to cache updates and trigger refetch
  onMount(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (
        event?.query?.queryKey?.[0] === "module-completions" &&
        event?.query?.queryKey?.[1] === userId
      ) {
        refetch()
      }
    })

    onCleanup(() => unsubscribe())
  })

  return (
    <div class={variant === "mobile" ? "px-6 py-4" : ""}>
      <Tabs defaultValue="grid" class="w-full">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="pl-2 text-xl font-semibold">Learning Path</h3>
          <TabsList class="h-8 bg-transparent">
            <TabsTrigger
              value="list"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              <List class="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger
              value="grid"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              <Grid3x3 class="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>

        <Suspense>
          <LearningPathContent completedModules={completedModules} />
        </Suspense>
      </Tabs>
    </div>
  )
}

function LearningPathContent(props: {
  completedModules: () => string[] | undefined
}) {
  const completedModules = () => props.completedModules() || []
  // const { animateOnDataChange } = useAnimationManager()
  //
  // animateOnDataChange(["[data-lessons-section]"], completedModules)

  return (
    <>
      <TabsContent value="list">
        <LearningPathList completedModules={completedModules} />
      </TabsContent>
      <TabsContent value="grid">
        <LearningPathGrid completedModules={completedModules} />
      </TabsContent>
    </>
  )
}
