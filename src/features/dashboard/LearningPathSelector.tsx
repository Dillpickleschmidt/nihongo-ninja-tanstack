import { createSignal, For, Show, createEffect } from "solid-js"
import type { JSX } from "solid-js"
import { X } from "lucide-solid"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useMutation } from "convex-solidjs"
import { api } from "../../../convex/_generated/api"
import { cn } from "@/utils"

type LearningPath = {
  id: string
  name: string
  shortName: string
  isUserCreated: boolean
}

interface LearningPathSelectorProps {
  children: JSX.Element
  learningPaths: LearningPath[]
  activePathId: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onPathSelect: (pathId: string) => void
  class?: string
}

export function LearningPathSelector(props: LearningPathSelectorProps) {
  const [deletingPathId, setDeletingPathId] = createSignal<string | null>(null)
  const deletePathMutation = useMutation(
    api.api.learning_paths.deleteCustomLearningPath,
  )

  let activePathRef: HTMLElement | undefined

  const builtInTextbooks = () =>
    props.learningPaths.filter((p) => !p.isUserCreated)
  const userPaths = () => props.learningPaths.filter((p) => p.isUserCreated)

  // Focus active path when popover opens
  createEffect(() => {
    if (props.isOpen) {
      activePathRef?.focus()
    }
  })

  const handlePathSelect = (pathId: string) => {
    props.onPathSelect(pathId)
    props.onOpenChange(false)
  }

  const handlePathSelectKeyDown = (event: KeyboardEvent, pathId: string) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    handlePathSelect(pathId)
  }

  const handleDeletePath = async (event: MouseEvent, path: LearningPath) => {
    event.preventDefault()
    event.stopPropagation()

    const confirmed = window.confirm(
      `Delete "${path.name}"? This will also delete all vocabulary decks generated for this learning path.`,
    )
    if (!confirmed) return

    setDeletingPathId(path.id)
    try {
      const result = await deletePathMutation.mutate({ pathId: path.id })

      if (props.activePathId === path.id) {
        props.onPathSelect(result.fallbackPathId)
      }
    } catch (error) {
      console.error("Failed to delete learning path:", error)
      alert("Failed to delete learning path. Please try again.")
    } finally {
      setDeletingPathId(null)
    }
  }

  return (
    <Popover open={props.isOpen} onOpenChange={props.onOpenChange}>
      <PopoverTrigger id="deck-selection-popover-trigger" class={props.class}>
        {props.children}
      </PopoverTrigger>
      <PopoverContent
        class="w-[250px] overflow-hidden rounded-md border border-(--accent)/20 p-1 shadow-md backdrop-blur-2xl"
        style={{
          "background-color":
            "color-mix(in srgb, var(--accent) 15%, rgb(10 10 10 / 0.7))",
        }}
      >
        {/* Built-in Textbooks */}
        <For each={builtInTextbooks()}>
          {(path) => (
            <button
              ref={(el) => {
                if (props.activePathId === path.id) {
                  activePathRef = el
                }
              }}
              onClick={() => handlePathSelect(path.id)}
              onKeyDown={(event) =>
                handlePathSelectKeyDown(event, path.id)
              }
              class={cn(
                "flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none hover:bg-white/10",
                props.activePathId === path.id && "bg-(--accent)/15",
              )}
            >
              {path.shortName}
            </button>
          )}
        </For>

        {/* User Learning Paths */}
        <Show when={userPaths().length > 0}>
          <div class="bg-white/10 -mx-1 my-1 h-px" />
          <div class="px-2 py-1.5 text-xs text-white/40">
            Your Learning Paths
          </div>
          <For each={userPaths()}>
            {(path) => (
              <div
                ref={(el) => {
                  if (props.activePathId === path.id) {
                    activePathRef = el
                  }
                }}
                class={cn(
                  "flex cursor-default items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none hover:bg-white/10",
                  props.activePathId === path.id && "bg-(--accent)/15",
                )}
              >
                <div
                  role="button"
                  tabindex={0}
                  onClick={() => handlePathSelect(path.id)}
                  onKeyDown={(event) =>
                    handlePathSelectKeyDown(event, path.id)
                  }
                  class="min-w-0 flex-1 cursor-pointer truncate"
                >
                  {path.shortName}
                </div>
                <button
                  type="button"
                  aria-label={`Delete learning path ${path.name}`}
                  disabled={deletingPathId() === path.id}
                  onClick={(event) => void handleDeletePath(event, path)}
                  class="rounded p-0.5 text-white/40 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Show
                    when={deletingPathId() === path.id}
                    fallback={<X class="size-3.5" />}
                  >
                    <span class="inline-block size-3.5 animate-spin rounded-full border border-current border-t-transparent" />
                  </Show>
                </button>
              </div>
            )}
          </For>
        </Show>
      </PopoverContent>
    </Popover>
  )
}
