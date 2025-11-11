import { Show } from "solid-js"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { transcriptDataQueryOptions, moduleMetadataQueryOptions } from "@/query/query-options"
import { useLearningPath } from "../LearningPathContext"
import GrammarModuleContent from "./ModuleDetailDialog/GrammarModuleContent"
import VocabularyModuleContent from "./ModuleDetailDialog/VocabularyModuleContent"

interface ModuleDetailDialogProps {
  moduleId: string
  moduleName: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function ModuleDetailDialog(props: ModuleDetailDialogProps) {
  const context = useLearningPath()
  const learningPathId = () => context.settingsQuery.data?.["active-learning-path"] || ""

  // Query transcript data (shared across all modules)
  const transcriptQuery = useCustomQuery(() =>
    transcriptDataQueryOptions(learningPathId()),
  )

  // Query module metadata (only when dialog is open)
  const moduleQuery = useCustomQuery(() =>
    moduleMetadataQueryOptions(learningPathId(), props.moduleId, props.isOpen),
  )

  // Extract sentences for this module from transcript data
  const getSentences = () => {
    if (!moduleQuery.data || !transcriptQuery.data) return []

    return moduleQuery.data.transcriptLineIds.map((lineIds) =>
      lineIds.map((id) => transcriptQuery.data[id]).filter(Boolean),
    )
  }

  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange}>
      <DialogContent class="sm:max-w-2xl w-full h-full sm:h-auto">
        <DialogHeader class="relative">
          <DialogTitle>{props.moduleName}</DialogTitle>
          {/* "Why is this listed?" text in top right */}
          <div class="absolute top-4 right-4 text-xs text-muted-foreground italic">
            Why is listed?
          </div>
        </DialogHeader>

        <div class="flex-1 overflow-y-auto py-4">
          <Show
            when={moduleQuery.isLoading}
            fallback={
              <Show
                when={moduleQuery.data?.sourceType === "grammar"}
                fallback={
                  <VocabularyModuleContent
                    sentences={getSentences()}
                    vocabularyItems={moduleQuery.data?.vocabularyItems || []}
                    moduleId={props.moduleId}
                  />
                }
              >
                <GrammarModuleContent
                  sentences={getSentences()}
                  moduleId={props.moduleId}
                />
              </Show>
            }
          >
            <div class="text-center py-8 text-muted-foreground">Loading...</div>
          </Show>

          <Show when={moduleQuery.isError}>
            <div class="text-center py-8 text-destructive">
              Error loading module details
            </div>
          </Show>
        </div>
      </DialogContent>
    </Dialog>
  )
}
