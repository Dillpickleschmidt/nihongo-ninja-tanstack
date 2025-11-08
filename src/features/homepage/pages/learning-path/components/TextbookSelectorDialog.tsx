import { createSignal, For, Show, type JSX } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { allLearningPathsQueryOptions } from "@/query/query-options"

interface TextbookSelectorDialogProps {
  children: JSX.Element
  userId: string | null
}

export default function TextbookSelectorDialog(
  props: TextbookSelectorDialogProps,
) {
  const [isDialogOpen, setIsDialogOpen] = createSignal(false)
  const navigate = useNavigate()

  const pathsQuery = useCustomQuery(() =>
    allLearningPathsQueryOptions(props.userId),
  )

  const otherTextbooks = () => {
    return (pathsQuery.data || []).filter(
      (path) => !path.isUserCreated && path.id !== "getting_started",
    )
  }

  const handleLearningPathSelect = async (pathId: string) => {
    // Get first chapter of selected path
    const path = (pathsQuery.data || []).find((p) => p.id === pathId)
    const firstChapterSlug = path?.chapters[0]?.slug

    if (!firstChapterSlug) return

    setIsDialogOpen(false)

    // Always navigate - let route loader handle settings update
    // This ensures URL and settings stay in sync
    navigate({
      to: "/$learningPathId/$chapterSlug",
      params: { learningPathId: pathId, chapterSlug: firstChapterSlug },
    })
  }

  const userCreatedPaths = () => {
    return (pathsQuery.data || []).filter((path) => path.isUserCreated)
  }

  return (
    <Dialog open={isDialogOpen()} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a learning path</DialogTitle>
        </DialogHeader>
        <Show
          when={!pathsQuery.isPending && !pathsQuery.isError}
          fallback={
            <div class="flex items-center justify-center py-8">
              <span class="text-muted-foreground text-sm">
                {pathsQuery.isError
                  ? "Failed to load learning paths"
                  : "Loading learning paths…"}
              </span>
            </div>
          }
        >
          <div class="space-y-6">
            {/* Static Textbooks Section */}
            <Show when={otherTextbooks().length > 0}>
              <div>
                <h3 class="mb-3 text-sm font-semibold">Textbooks</h3>
                <div class="grid grid-cols-2 gap-4">
                  <For each={otherTextbooks()}>
                    {(path) => (
                      <Button
                        variant="outline"
                        class="w-full"
                        onClick={() => handleLearningPathSelect(path.id)}
                      >
                        {path.short_name || path.name}
                      </Button>
                    )}
                  </For>
                </div>
              </div>
            </Show>

            {/* User-Created Paths Section */}
            <Show when={userCreatedPaths().length > 0}>
              <div>
                <h3 class="mb-3 text-sm font-semibold">Your Learning Paths</h3>
                <div class="grid grid-cols-2 gap-4">
                  <For each={userCreatedPaths()}>
                    {(path) => (
                      <Button
                        variant="outline"
                        class="w-full"
                        onClick={() => handleLearningPathSelect(path.id)}
                      >
                        <span class="flex flex-col items-start gap-1">
                          <span>{path.short_name || path.name}</span>
                          <span class="text-xs opacity-60">(Custom)</span>
                        </span>
                      </Button>
                    )}
                  </For>
                </div>
              </div>
            </Show>

            {/* Empty State */}
            <Show when={(pathsQuery.data || []).length === 0}>
              <div class="py-8 text-center">
                <span class="text-muted-foreground text-sm">
                  No learning paths available
                </span>
              </div>
            </Show>
          </div>
        </Show>
      </DialogContent>
    </Dialog>
  )
}
