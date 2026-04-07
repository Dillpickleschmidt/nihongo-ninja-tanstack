import {
  createSignal,
  createEffect,
  Suspense,
  Index,
  Show,
  type Accessor,
} from "solid-js"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { useLocalCompletions } from "@/lib/completions"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { useLearningPath } from "../context/learning-path"
import { ChapterSection } from "./ChapterSection"
import { ModuleDetailDialog } from "./ModuleDetailDialog"
import type { LearningPathModule } from "convex/model/learning_paths"

interface LearningPathSectionProps {
  selectedView: Accessor<string>
}

export function LearningPathSection(props: LearningPathSectionProps) {
  const [expandedChapters, setExpandedChapters] = createSignal<string[]>([])
  const [selectedModule, setSelectedModule] =
    createSignal<LearningPathModule | null>(null)
  const [dialogOpen, setDialogOpen] = createSignal(false)

  const { query, preferences, selectedPathId, selectedPath } =
    useLearningPath()

  const isUserCreatedPath = () => selectedPath()?.isUserCreated === true

  const chapters = () => query.data()?.chapters

  const completedSet = () => new Set(query.data()?.completedModules ?? [])

  const localCompletions = useLocalCompletions()

  const isCompleted = (moduleId: string) =>
    completedSet().has(moduleId) || moduleId in localCompletions()

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
      class="mt-6 animate-fade-up opacity-0"
      style={{ "animation-delay": "150ms" }}
    >
      <Suspense
        fallback={
          <div class="space-y-4">
            <Skeleton class="h-24 bg-white/5 rounded" />
            <Skeleton class="h-24 bg-white/5 rounded" />
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
                <AccordionTrigger class="text-sm font-medium font-excalifont hover:no-underline data-expanded:text-2xl data-expanded:font-bold">
                  {chapter().title}
                </AccordionTrigger>
                <AccordionContent class="text-base">
                  <ChapterSection
                    chapter={chapter()}
                    viewMode={props.selectedView()}
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

      <Show when={isUserCreatedPath() && selectedModule() !== null}>
        <ModuleDetailDialog
          pathId={selectedPathId() || ""}
          moduleId={selectedModule()!.moduleId}
          moduleName={selectedModule()!.module.title}
          linkTo={selectedModule()!.linkTo}
          isOpen={dialogOpen()}
          onOpenChange={setDialogOpen}
        />
      </Show>
    </section>
  )
}
