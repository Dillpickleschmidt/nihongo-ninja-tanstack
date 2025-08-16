// features/vocab-page/user-panel/UserDeckCard.tsx
import {
  Play,
  ArrowLeft,
  Edit,
  Edit3,
  FileText,
  FolderPlus,
  Copy,
  Trash2,
  Share,
} from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { cn } from "@/utils"
import { createSignal } from "solid-js"
import { TreeView } from "@/components/ui/tree-view"
import { useFolderTree } from "../hooks/useFolderTree"
import { Folder, Home } from "lucide-solid"
import {
  createDeckShareServerFn,
  removeDeckShareServerFn,
} from "@/features/supabase/db/deck-sharing-operations"
import { ShareModal } from "../components/ShareModal"
import { PracticeModeModal } from "../components/PracticeModeModal"

interface UserDeckCardProps {
  deck: UserDeck
  onPlay?: (deck: UserDeck) => void
  isNewlyImported?: boolean
  isSelected?: boolean
  onSelect?: (deck: UserDeck) => void
  onEdit?: (deck: UserDeck) => void
  folders?: DeckFolder[]
  onMove?: (deck: UserDeck, targetFolderId: string) => void
  onRename?: (deck: UserDeck, newName: string) => void
  onCopy?: (deck: UserDeck) => void
  onDelete?: (deck: UserDeck) => void
  userId?: string
  isShared?: boolean
  onShareStatusChange?: () => void // Callback to refresh share status
  class?: string
}

export function UserDeckCard(props: UserDeckCardProps) {
  const [isHovered, setIsHovered] = createSignal(false)
  const [expandedFolderIds, setExpandedFolderIds] = createSignal<Set<string>>(
    new Set(),
  )
  const [showShareModal, setShowShareModal] = createSignal(false)
  const [showPracticeModeModal, setShowPracticeModeModal] = createSignal(false)
  const [isSharing, setIsSharing] = createSignal(false)

  // Build folder tree for move functionality
  const { folderTreeNodes } = useFolderTree({
    folders: props.folders || [],
    decks: [],
    item: props.deck,
  })

  // Auto-expand to show current folder location
  const getCurrentFolderPath = () => {
    if (!props.deck.folder_id || !props.folders) return []

    const expandPath = (
      targetId: number,
      folders: DeckFolder[],
      path: number[] = [],
    ): number[] | null => {
      for (const folder of folders) {
        if (folder.folder_id === targetId) return [...path, targetId]

        const childFolders = folders.filter(
          (f) => f.parent_folder_id === folder.folder_id,
        )
        if (childFolders.length > 0) {
          const found = expandPath(targetId, childFolders, [
            ...path,
            folder.folder_id,
          ])
          if (found) return found
        }
      }
      return null
    }

    return expandPath(props.deck.folder_id, props.folders) || []
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

  const handleMoveToFolder = (folderId: string, node: any) => {
    props.onMove?.(props.deck, folderId)
  }

  // Initialize expanded state with current folder path
  const initializeExpandedState = () => {
    const path = getCurrentFolderPath()
    setExpandedFolderIds(new Set(["root", ...path.map((id) => id.toString())]))
  }

  // Handle public sharing
  const handlePublicShare = async () => {
    if (!props.deck?.deck_id) return

    setIsSharing(true)
    try {
      await createDeckShareServerFn({ data: { deck_id: props.deck.deck_id } })
      setShowShareModal(false)
      props.onShareStatusChange?.()
      alert("Deck shared publicly!")
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to share deck")
    } finally {
      setIsSharing(false)
    }
  }

  // Handle unsharing
  const handleUnshare = async () => {
    if (!props.deck?.deck_id) return

    setIsSharing(true)
    try {
      await removeDeckShareServerFn({ data: { deck_id: props.deck.deck_id } })
      props.onShareStatusChange?.()
      alert("Deck unshared!")
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to unshare deck")
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger
          class={cn(
            "bg-card/60 hover:bg-card/70 border-card-foreground/70 relative cursor-pointer space-y-3 rounded-lg border p-4 shadow-sm backdrop-blur-sm hover:shadow-md",
            props.isSelected && "outline-card-foreground outline-2",
            props.class,
          )}
          onClick={() => {
            props.onSelect?.(props.deck)
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Edit button - appears on hover */}
          <div
            class={cn(
              "absolute top-2 right-2 transition-opacity duration-200",
              isHovered() ? "opacity-100" : "opacity-0",
            )}
            title={
              props.deck.source === "built-in"
                ? "Built-in deck editing is disabled. Right click and make a copy instead."
                : props.deck.deck_id < 0
                  ? "Deck is still syncing. Refresh to enable editing."
                  : "Edit deck"
            }
          >
            <Button
              size="sm"
              variant="ghost"
              class="h-6 w-6 p-0"
              classList={{
                "hover:cursor-pointer":
                  props.deck.source !== "built-in" && props.deck.deck_id > 0,
                "cursor-not-allowed opacity-50 pointer-events-none":
                  props.deck.source === "built-in" || props.deck.deck_id < 0,
              }}
              onClick={(e) => {
                e.stopPropagation()
                if (
                  props.deck.source !== "built-in" &&
                  props.deck.deck_id > 0
                ) {
                  props.onEdit?.(props.deck)
                }
              }}
            >
              <Edit class="h-3 w-3" />
            </Button>
          </div>

          <div class="space-y-1">
            <h4
              class={`${props.deck.source === "built-in" && "decoration-muted-foreground/70 underline underline-offset-4"} "pr-8 font-medium" text-sm leading-tight`}
              title={
                props.deck.source === "built-in" ? "Built-in deck" : undefined
              }
            >
              {props.deck.deck_name}
            </h4>
            <p class="text-muted-foreground text-xs">
              {`Imported ${new Date(props.deck.created_at).toLocaleDateString()}`}
            </p>
          </div>

          <Button
            variant="default"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              setShowPracticeModeModal(true)
            }}
            class="bg-card hover:bg-card-foreground/10 dark:bg-card-foreground text-primary outline-card-foreground/70 relative w-full overflow-hidden text-xs outline backdrop-blur-xs transition-colors dark:outline-none hover:dark:bg-neutral-600"
          >
            <div class="relative flex w-full items-center justify-center">
              <div
                class={cn(
                  "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out",
                  props.isNewlyImported
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0",
                )}
              >
                <ArrowLeft class="mt-0.25 mr-1 max-h-3 max-w-3" />
                <span class="text-xs whitespace-nowrap italic">
                  Look at the words before practicing them!
                </span>
              </div>
              <div
                class={cn(
                  "flex items-center justify-center transition-all duration-300 ease-in-out",
                  props.isNewlyImported
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100",
                )}
              >
                <Play class="mr-1 max-h-3 max-w-3" />
                Practice
              </div>
            </div>
          </Button>
        </ContextMenuTrigger>

        <ContextMenuContent class="bg-card border-card-foreground outline-none">
          <div
            title={
              props.deck.source === "built-in"
                ? "Built-in deck editing is disabled. Select make a copy instead."
                : undefined
            }
          >
            <ContextMenuItem
              disabled={props.deck.source === "built-in"}
              class="disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => {
                if (
                  props.deck.source !== "built-in" &&
                  props.deck.deck_id > 0
                ) {
                  props.onEdit?.(props.deck)
                }
              }}
            >
              <Edit3 class="mr-2 h-3 w-3" />
              Edit contents
            </ContextMenuItem>
          </div>
          <ContextMenuSeparator class="border-card-foreground" />
          <ContextMenuItem
            onClick={() => {
              const newName = window.prompt(
                "Enter new deck name:",
                props.deck.deck_name,
              )
              if (
                newName &&
                newName.trim() &&
                newName.trim() !== props.deck.deck_name
              ) {
                props.onRename?.(props.deck, newName.trim())
              }
            }}
          >
            <FileText class="mr-2 h-3 w-3" />
            Rename
          </ContextMenuItem>
          <ContextMenuSub
            onOpenChange={(open: boolean) => {
              if (open) {
                initializeExpandedState()
              }
            }}
          >
            <ContextMenuSubTrigger>
              <FolderPlus class="mr-2 h-3 w-3" />
              Move
            </ContextMenuSubTrigger>
            <ContextMenuPortal>
              <ContextMenuSubContent class="bg-card border-card-foreground max-h-80 w-64 overflow-y-auto p-2">
                <TreeView
                  nodes={[
                    {
                      id: "root",
                      label: "Root",
                      children: folderTreeNodes(),
                      data: null,
                    },
                  ]}
                  selectedId={props.deck.folder_id?.toString() || "root"}
                  onSelect={handleMoveToFolder}
                  expandedIds={expandedFolderIds()}
                  onToggle={handleToggleFolder}
                  renderIcon={(node) =>
                    node.id === "root" ? (
                      <Home class="mr-2 h-4 w-4 flex-shrink-0" />
                    ) : (
                      <Folder class="mr-2 h-4 w-4 flex-shrink-0" />
                    )
                  }
                  renderLabel={(node, isSelected) => (
                    <span
                      class={`flex-1 truncate text-xs ${isSelected ? "font-medium" : ""}`}
                    >
                      {node.label}
                    </span>
                  )}
                />
              </ContextMenuSubContent>
            </ContextMenuPortal>
          </ContextMenuSub>
          <ContextMenuItem
            disabled={props.deck.deck_id < 0 || isSharing()}
            class="disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => {
              if (props.deck.source === "built-in") {
                // Show copy prompt for built-in decks
                const shouldCopy = window.confirm(
                  "Built-in decks cannot be shared. Make a copy instead?",
                )
                if (shouldCopy) {
                  // Open copy modal - user can then edit the copy
                  props.onCopy?.(props.deck)
                }
              } else if (props.isShared) {
                handleUnshare()
              } else {
                setShowShareModal(true)
              }
            }}
          >
            {isSharing() ? (
              <div class="mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
            ) : (
              <Share class="mr-2 h-3 w-3" />
            )}
            {isSharing()
              ? "Processing..."
              : props.isShared
                ? "Unshare"
                : "Share"}
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => {
              props.onCopy?.(props.deck)
            }}
          >
            <Copy class="mr-2 h-3 w-3" />
            Make a copy
          </ContextMenuItem>
          <ContextMenuSeparator class="border-card-foreground" />
          <ContextMenuItem
            onClick={() => {
              const message =
                props.deck.source === "built-in"
                  ? `You're about to remove "${props.deck.deck_name}" You can always import it again. ( ˆ𐃷ˆ) .ᐟ.ᐟ`
                  : `Are you sure you want to delete "${props.deck.deck_name}"? This action cannot be undone.`

              if (window.confirm(message)) {
                props.onDelete?.(props.deck)
              }
            }}
            class="text-red-600 focus:bg-red-50 focus:text-red-900 dark:text-red-400 dark:focus:bg-red-950 dark:focus:text-red-300"
          >
            <Trash2 class="mr-2 h-3 w-3" />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <ShareModal
        showShareModal={showShareModal}
        setShowShareModal={setShowShareModal}
        deck={props.deck}
        isSharing={() => isSharing()}
        handlePublicShare={handlePublicShare}
      />

      <PracticeModeModal
        deck={props.deck}
        isOpen={showPracticeModeModal()}
        onClose={() => setShowPracticeModeModal(false)}
        userId={props.userId}
      />
    </>
  )
}
