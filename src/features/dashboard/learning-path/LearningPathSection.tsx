import { createSignal, createEffect, Suspense, Index, Show } from "solid-js"
import { Rows3, List } from "lucide-solid"
import { useLocalCompletions } from "@/lib/completions"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { useDashboardPath } from "../context/dashboard-path"
import { ChapterSection } from "./ChapterSection"
import { ModuleDetailDialog } from "./ModuleDetailDialog"
import type { LearningPathModule } from "./types"

export function LearningPathSection() {
  const [selectedView, setSelectedView] = createSignal<string>("grid")
  const [expandedChapters, setExpandedChapters] = createSignal<string[]>([])
  const [selectedModule, setSelectedModule] =
    createSignal<LearningPathModule | null>(null)
  const [dialogOpen, setDialogOpen] = createSignal(false)

  const { query, preferences, selectedPathId, selectedPath } =
    useDashboardPath()

  const selectedPathName = () => selectedPath()?.name
  const isUserCreatedPath = () => selectedPath()?.isUserCreated === true

  const chapters = () => query.data()?.chapters

  const completedSet = () => new Set(query.data()?.completedModules ?? [])

  const localCompletions = useLocalCompletions()

  const isCompleted = (moduleId: string) =>
    completedSet().has(moduleId) || moduleId in localCompletions()

  // Ensure the active chapter accordion is always expanded
  createEffect(() => {
    const activeChapter = preferences().activeChapter
    if (!activeChapter) return
    setExpandedChapters((prev) =>
      prev.includes(activeChapter) ? prev : [...prev, activeChapter],
    )
  })

  const handleModuleSelect = (module: LearningPathModule) => {
    setSelectedModule(module)
    setDialogOpen(true)
  }

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
          <Accordion
            multiple
            value={expandedChapters()}
            onChange={setExpandedChapters}
          >
            <Index each={chapters()}>
              {(chapter) => (
                <AccordionItem value={chapter().slug} class="border-white/10">
                  <AccordionTrigger class="text-sm font-medium hover:no-underline data-expanded:text-2xl data-expanded:font-bold">
                    {chapter().title}
                  </AccordionTrigger>
                  <AccordionContent class="text-base">
                    <ChapterSection
                      chapter={chapter()}
                      viewMode={selectedView()}
                      isCompleted={isCompleted}
                      openInDialog={isUserCreatedPath()}
                      onModuleSelect={handleModuleSelect}
                    />
                  </AccordionContent>
                </AccordionItem>
              )}
            </Index>
          </Accordion>
        </Suspense>
      </Tabs>

      <Show when={isUserCreatedPath() && selectedModule() !== null}>
        <ModuleDetailDialog
          pathId={selectedPathId() || ""}
          moduleId={selectedModule()!.moduleId}
          moduleName={selectedModule()!.module.title}
          isOpen={dialogOpen()}
          onOpenChange={setDialogOpen}
        />
      </Show>
    </section>
  )
}
