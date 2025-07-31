// features/learn-page/components/content/LearningPathSection.tsx
import { Grid3x3, List } from "lucide-solid"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LearningPathList } from "./LearningPathList"
import { LearningPathGrid } from "./LearningPathGrid"

interface LearningPathSectionProps {
  variant?: "mobile" | "desktop"
}

export function LearningPathSection(props: LearningPathSectionProps = {}) {
  const variant = props.variant || "desktop"
  return (
    <div class={variant === "mobile" ? "px-6 py-4" : ""}>
      <Tabs defaultValue="grid" class="w-full">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="pl-2 text-xl font-semibold">Learning Path</h3>
          <TabsList class="h-8 bg-transparent">
            <TabsTrigger
              value="list"
              class="data-[selected]:bg-card-foreground/70 h-6 px-2"
            >
              <List class="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger
              value="grid"
              class="data-[selected]:bg-card-foreground/70 h-6 px-2"
            >
              <Grid3x3 class="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="list">
          <LearningPathList />
        </TabsContent>

        <TabsContent value="grid">
          <LearningPathGrid />
        </TabsContent>
      </Tabs>
    </div>
  )
}
