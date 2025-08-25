import { createSignal, For } from "solid-js"
import { StackItem } from "./StackItem"
import type { Stack } from "@/features/resolvers/types"
import { Plus } from "lucide-solid"

interface StackEditorProps {
  title: string
  stacks: Stack[]
  onChange: (stacks: Stack[]) => void
}

export function StackEditor(props: StackEditorProps) {
  const [dragIndex, setDragIndex] = createSignal<number | null>(null)

  const handleToggleEnabled = (index: number, enabled: boolean) => {
    const newStacks = [...props.stacks]
    newStacks[index] = { ...newStacks[index], enabled }
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

  const handleAddClick = () => {
    console.log(`Add new stack item to "${props.title}"`)
  }

  return (
    <div class="flex h-full flex-col">
      <h3 class="mb-4 text-lg font-semibold">{props.title}</h3>

      {/* Stack list (bottom-aligned) */}
      <div class="flex flex-1 flex-col justify-end gap-3">
        {/* Add New Block */}
        <button
          onClick={handleAddClick}
          class="border-card-foreground/70 bg-background/30 text-muted-foreground hover:bg-background/50 hover:text-foreground flex items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-sm transition-colors"
        >
          <Plus class="h-4 w-4" />
          Add New
        </button>

        {/* Existing stack items */}
        <For each={sortedStacks()}>
          {(stack, index) => (
            <StackItem
              stack={stack}
              index={index()}
              onToggleEnabled={handleToggleEnabled}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          )}
        </For>
      </div>
    </div>
  )
}

