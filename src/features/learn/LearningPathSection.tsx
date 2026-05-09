import {
  Suspense,
  Show,
  createSignal,
  type Accessor,
  type Setter,
} from "solid-js"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { useLocalCompletions } from "@/lib/completions"
import { useLearningPath } from "./context/learning-path"
import { ViewToggle } from "./components/ViewToggle"
import { ChapterSection } from "./components/ChapterSection"
import { ModuleDetailDialog } from "./components/ModuleDetailDialog"
import type { LearningPathModule } from "convex/model/learning_paths"

interface LearningPathSectionProps {
  selectedView: Accessor<string>
  setSelectedView: Setter<string>
}

export function LearningPathSection(props: LearningPathSectionProps) {
  const [selectedModule, setSelectedModule] =
    createSignal<LearningPathModule | null>(null)
  const [dialogOpen, setDialogOpen] = createSignal(false)

  const { query, selectedPathId, selectedPath, currentChapter } =
    useLearningPath()

  const isUserCreatedPath = () => selectedPath()?.isUserCreated === true
  const completedSet = () => new Set(query.data()?.completedModules ?? [])
  const localCompletions = useLocalCompletions()
  const isCompleted = (moduleId: string) =>
    completedSet().has(moduleId) || moduleId in localCompletions()

  const handleModuleSelect = (module: LearningPathModule) => {
    setSelectedModule(module)
    setDialogOpen(true)
  }

  return (
    <section
      class="mt-8 animate-fade-up opacity-0"
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
        <Show when={currentChapter()}>
          {(chapter) => (
            <>
              <div class="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p class="text-xs uppercase tracking-[0.28em] text-white/35">
                    Selected Chapter
                  </p>
                  <h2 class="mt-3 font-excalifont text-2xl font-bold text-white md:text-3xl">
                    {chapter().title}
                  </h2>
                </div>
                <ViewToggle
                  selectedView={props.selectedView}
                  setSelectedView={props.setSelectedView}
                />
              </div>

              <ChapterSection
                chapter={chapter()}
                viewMode={props.selectedView()}
                isCompleted={isCompleted}
                openInDialog={isUserCreatedPath()}
                onModuleSelect={handleModuleSelect}
              />
            </>
          )}
        </Show>
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
