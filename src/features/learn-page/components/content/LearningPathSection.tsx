// features/learn-page/components/content/LearningPathSection.tsx
import { Grid3x3, List } from "lucide-solid"
import { createResource } from "solid-js"
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

  const [completedModules] = createResource(async () => {
    const data = await loaderData().completedModules

    // Populate cache for future navigations
    queryClient.setQueryData(["module-completions", userId], data)

    return data
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

        <LearningPathContent completedModulesResource={completedModules} />
      </Tabs>
    </div>
  )
}

function LearningPathContent(props: {
  completedModulesResource: () => string[] | undefined
}) {
  const completedModules = () => props.completedModulesResource() || []

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
