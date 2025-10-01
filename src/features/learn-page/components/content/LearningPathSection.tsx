// features/learn-page/components/content/LearningPathSection.tsx
import { Grid3x3, List } from "lucide-solid"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LearningPathList } from "./LearningPathList"
import { LearningPathGrid } from "./LearningPathGrid"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { completedModulesQueryOptions } from "../../../../queries/learn-page-queries"
import { useCustomQuery } from "@/hooks/useCustomQuery"

interface LearningPathSectionProps {
  variant?: "mobile" | "desktop"
}

export function LearningPathSection(props: LearningPathSectionProps = {}) {
  const variant = props.variant || "desktop"
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const completedModulesQuery = useCustomQuery(() =>
    completedModulesQueryOptions(userId),
  )

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

        <TabsContent value="list">
          <LearningPathList completedModulesQuery={completedModulesQuery} />
        </TabsContent>
        <TabsContent value="grid">
          <LearningPathGrid completedModulesQuery={completedModulesQuery} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
