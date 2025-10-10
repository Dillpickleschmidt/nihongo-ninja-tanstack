// features/learn-page/components/content/LearningPathSection.tsx
import { Grid3x3, List } from "lucide-solid"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LearningPathList } from "./LearningPathList"
import { LearningPathGrid } from "./LearningPathGrid"
import { ParentProps } from "solid-js"

interface LearningPathSectionProps {
  variant?: "mobile" | "desktop"
}

export function LearningPathWrapper(props: ParentProps) {
  return (
    <Tabs defaultValue="grid" class="w-full">
      {props.children}
    </Tabs>
  )
}

export function LearningPathContent(props: LearningPathSectionProps) {
  const variant = props.variant || "desktop"

  return (
    <div class={variant === "mobile" ? "w-full px-6 pt-4" : "w-full pt-4"}>
      <TabsContent value="list" class="mt-0">
        <LearningPathList />
      </TabsContent>
      <TabsContent value="grid" class="mt-0">
        <LearningPathGrid />
      </TabsContent>
    </div>
  )
}

export function LearningPathHeader(props: LearningPathSectionProps) {
  const variant = props.variant || "desktop"

  return (
    <>
      <div class={variant === "mobile" ? "px-6 py-4" : ""}>
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
    </>
  )
}
