import { Show } from "solid-js"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ModuleDetailGrammar } from "./ModuleDetailGrammar"
import { ModuleDetailVocabulary } from "./ModuleDetailVocabulary"

import type { ModuleLink } from "@/lib/module-links"

interface ModuleDetailDialogProps {
  pathId: string
  moduleId: string
  moduleName: string
  linkTo: ModuleLink
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function ModuleDetailDialog(props: ModuleDetailDialogProps) {
  const detailQuery = useConvexQuery(
    api.api.learning_paths.getModuleDetail,
    () => ({
      pathId: props.pathId,
      moduleId: props.moduleId,
    }),
    () => ({ enabled: props.isOpen && !!props.pathId && !!props.moduleId }),
  )

  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange}>
      <DialogContent class="h-full w-full border-border/70 bg-card bg-gradient-to-br from-white/95 to-muted/40 backdrop-blur-sm dark:border-card-foreground/70 dark:from-neutral-600/15 dark:to-gray-600/10 sm:h-auto sm:max-h-[85vh] sm:max-w-2xl sm:rounded-2xl">
        <DialogHeader>
          <div class="flex items-center gap-2.5">
            <div
              class={`h-5 w-0.5 rounded-full ${
                detailQuery.data()?.sourceType === "grammar"
                  ? "bg-amber-400"
                  : "bg-orange-400"
              }`}
            />
            <DialogTitle class="text-lg font-semibold tracking-tight text-foreground dark:text-white/90">
              {props.moduleName}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div class="flex-1 overflow-y-auto">
          <Show when={!detailQuery.isLoading()} fallback={<LoadingSkeleton />}>
            <Show when={!detailQuery.error()}>
              <Show
                when={detailQuery.data()?.sourceType === "grammar"}
                fallback={
                  <ModuleDetailVocabulary
                    transcriptGroups={
                      detailQuery.data()?.transcriptGroups ?? []
                    }
                    vocabularyItems={detailQuery.data()?.vocabularyItems ?? []}
                    linkTo={props.linkTo}
                  />
                }
              >
                <ModuleDetailGrammar
                  transcriptGroups={detailQuery.data()?.transcriptGroups ?? []}
                  moduleId={props.moduleId}
                  moduleDescription={detailQuery.data()?.moduleDescription}
                  linkTo={props.linkTo}
                />
              </Show>
            </Show>
          </Show>

          <Show when={detailQuery.error()}>
            <div class="py-12 text-center">
              <p class="text-sm text-rose-400/70">
                Failed to load module details
              </p>
            </div>
          </Show>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function LoadingSkeleton() {
  return (
    <div class="space-y-4 py-2">
      <Skeleton class="h-20 rounded-xl bg-muted/70 dark:bg-white/5" />
      <div class="space-y-2">
        <Skeleton class="h-4 w-3/4 rounded bg-muted/70 dark:bg-white/5" />
        <Skeleton class="h-4 w-1/2 rounded bg-muted/70 dark:bg-white/5" />
      </div>
      <div class="h-px bg-border/70 dark:bg-white/10" />
      <div class="space-y-2">
        <Skeleton class="h-4 w-2/3 rounded bg-muted/70 dark:bg-white/5" />
        <Skeleton class="h-3 w-1/3 rounded bg-muted/70 dark:bg-white/5" />
      </div>
    </div>
  )
}
