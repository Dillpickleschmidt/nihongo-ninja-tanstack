// features/vocab-page/components/LocationSelector.tsx
import { createSignal, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { TreeView, TreeNode } from "@/components/ui/tree-view"
import { Folder, Home, ChevronDown } from "lucide-solid"

interface LocationSelectorProps {
  selectedFolderId: string
  selectedFolderName: string
  folderTreeNodes: TreeNode[]
  editingType: "deck" | "folder"
  onSelect: (folderId: string) => void
}

export function LocationSelector(props: LocationSelectorProps) {
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const [tempSelectedFolderId, setTempSelectedFolderId] =
    createSignal<string>("")
  const [expandedFolderIds, setExpandedFolderIds] = createSignal<Set<string>>(
    new Set(),
  )

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempSelectedFolderId(props.selectedFolderId)

      // Auto-expand path to current selection
      if (props.selectedFolderId !== "root") {
        const expandPath = (
          targetId: string,
          nodes: TreeNode[],
          path: string[] = [],
        ): string[] | null => {
          for (const node of nodes) {
            if (node.id === targetId) return path
            if (node.children) {
              const found = expandPath(targetId, node.children, [
                ...path,
                node.id,
              ])
              if (found !== null) return found
            }
          }
          return null
        }

        const pathToExpand = expandPath(
          props.selectedFolderId,
          props.folderTreeNodes,
        )
        // Always include "root" since it needs to be expanded to show any children
        setExpandedFolderIds(new Set(["root", ...(pathToExpand || [])]))
      }
    }
    setIsPopoverOpen(open)
  }

  const handleToggleFolder = (id: string) => {
    setExpandedFolderIds((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleSelectTreeNode = (id: string, node: TreeNode) => {
    // Auto-expand folders when clicked (if they have children)
    if (node.children && node.children.length > 0) {
      handleToggleFolder(id)
    }

    // Always update selection (both folders and root can be selected)
    setTempSelectedFolderId(id)
  }

  // Determine if a node should be selectable based on editing type
  const isSelectableNode = (node: TreeNode) => {
    if (props.editingType === "folder") {
      // When editing folders, only folders (and root) are selectable
      return node.id === "root" || node.data !== null
    } else {
      // When editing decks, all locations are selectable
      return true
    }
  }

  const handleSelectFolder = () => {
    props.onSelect(tempSelectedFolderId())
    setIsPopoverOpen(false)
  }

  const handleCancelSelection = () => {
    setTempSelectedFolderId(props.selectedFolderId)
    setIsPopoverOpen(false)
  }

  return (
    <Popover open={isPopoverOpen()} onOpenChange={handleOpenChange}>
      <PopoverTrigger>
        <Button
          variant="outline"
          class="bg-background/50 border-card-foreground/70 h-10 w-full justify-start font-normal backdrop-blur-sm"
        >
          <Show
            when={props.selectedFolderId === "root"}
            fallback={
              <>
                <Folder class="mr-2 h-4 w-4" />
                {props.selectedFolderName}
              </>
            }
          >
            <Home class="mr-2 h-4 w-4" />
            Root
          </Show>
          <ChevronDown class="ml-auto h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="bg-background/70 w-80 border border-white/10 p-0 shadow-xl backdrop-blur-md">
        <div class="max-h-64 space-y-1 overflow-y-auto p-3">
          {/* Root + Folder Tree */}
          <TreeView
            nodes={[
              {
                id: "root",
                label: "Root",
                children: props.folderTreeNodes,
                data: null,
              },
            ]}
            selectedId={tempSelectedFolderId()}
            onSelect={handleSelectTreeNode}
            expandedIds={expandedFolderIds()}
            onToggle={handleToggleFolder}
            isSelectable={isSelectableNode}
            renderIcon={(node) =>
              node.id === "root" ? (
                <Home class="mr-2 h-4 w-4 flex-shrink-0" />
              ) : (
                <Folder class="mr-2 h-4 w-4 flex-shrink-0" />
              )
            }
            renderLabel={(node, isSelected) => (
              <span
                class={`flex-1 truncate ${
                  !isSelectableNode(node) ? "opacity-50" : ""
                } ${isSelected && isSelectableNode(node) ? "font-medium" : ""}`}
              >
                {node.label}
              </span>
            )}
          />
        </div>

        {/* Action Buttons */}
        <div class="bg-background/40 border-card-foreground/70 flex justify-end gap-2 border-t p-2 backdrop-blur-sm">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCancelSelection}
            class="h-8"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleSelectFolder}
            disabled={tempSelectedFolderId() === props.selectedFolderId}
            class="h-8"
          >
            Select
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
