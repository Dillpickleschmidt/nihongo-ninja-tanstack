import { createSignal, For } from "solid-js"
import { StackItem } from "./StackItem"
import type { Stack } from "@/features/resolvers/types"
import { Plus } from "lucide-solid"
import { findHighestAvailablePriority } from "@/features/resolvers/shared/priority-utils"

interface StackEditorProps {
  title: string
  stacks: Stack[]
  onChange: (stacks: Stack[]) => void
  onAddNew: () => void
}

export function StackEditor(props: StackEditorProps) {
  const [dragIndex, setDragIndex] = createSignal<number | null>(null)

  const handleToggleEnabled = (originalIndex: number, enabled: boolean) => {
    const newStacks = [...props.stacks]
    newStacks[originalIndex] = { ...newStacks[originalIndex], enabled }
    props.onChange(newStacks)
  }

  const handleDragStart = (e: DragEvent, index: number) => {
    setDragIndex(index)
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move"
      e.dataTransfer.setData("text/plain", index.toString())
    }
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = "move"
    }
  }

  const handleDrop = (e: DragEvent, targetIndex: number) => {
    e.preventDefault()

    const sourceIndex = dragIndex()
    if (sourceIndex === null || sourceIndex === targetIndex) {
      setDragIndex(null)
      return
    }

    if (
      props.stacks[sourceIndex]?.locked ||
      props.stacks[targetIndex]?.locked
    ) {
      setDragIndex(null)
      return
    }

    const newStacks = [...props.stacks]
    const sortedStacks = newStacks.sort((a, b) => a.priority - b.priority)
    const sourceStack = sortedStacks[sourceIndex]

    sortedStacks.splice(sourceIndex, 1)
    sortedStacks.splice(targetIndex, 0, sourceStack)

    let currentPriority = 100
    sortedStacks.forEach((stack) => {
      if (!stack.locked) {
        stack.priority = currentPriority
        currentPriority += 100
      }
    })

    props.onChange(sortedStacks)
    setDragIndex(null)
  }

  const sortedStacks = () =>
    [...props.stacks].sort((a, b) => a.priority - b.priority)

  // Calculate where the "Add New" button should appear (same logic as server)
  const getAddNewPosition = () => {
    return findHighestAvailablePriority(props.stacks)
  }

  const handleAddClick = () => {
    props.onAddNew()
  }

  const AddNewButton = () => (
    <button
      onClick={handleAddClick}
      class="border-card-foreground/70 bg-background/30 text-muted-foreground hover:bg-background/50 hover:text-foreground flex items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-sm transition-colors"
    >
      <Plus class="h-4 w-4" />
      Add New
    </button>
  )

  const shouldShowButton = (stack: Stack, sortedIndex: number) => {
    const priority = getAddNewPosition()
    return (
      stack.priority === priority || // Replace stack (push down)
      (stack.priority > priority && // Insert before stack
        (sortedIndex === 0 ||
          sortedStacks()[sortedIndex - 1].priority < priority))
    )
  }

  return (
    <div class="flex h-full flex-col">
      <h3 class="mb-4 text-lg font-semibold">{props.title}</h3>

      {/* Stack list (bottom-aligned) */}
      <div class="flex flex-1 flex-col justify-end gap-3">
        <For each={sortedStacks()}>
          {(stack, sortedIndex) => {
            const originalIndex = props.stacks.findIndex((s) => s === stack)

            return (
              <>
                {shouldShowButton(stack, sortedIndex()) && <AddNewButton />}
                <StackItem
                  stack={stack}
                  index={originalIndex}
                  onToggleEnabled={handleToggleEnabled}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                />
              </>
            )
          }}
        </For>

        {props.stacks.length === 0 && <AddNewButton />}
      </div>
    </div>
  )
}
