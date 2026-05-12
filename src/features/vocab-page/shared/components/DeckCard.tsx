import {
  SquarePen,
  PencilLine,
  FileText,
  FolderPlus,
  Copy,
  Trash2,
  Folder,
  House,
  Share,
} from "lucide-solid"
import { Link } from "@tanstack/solid-router"
import { useMutation } from "convex-solidjs"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
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
import { createSignal, Show } from "solid-js"
import { TreeView } from "@/components/ui/tree-view"
import { useFolderTree } from "../../hooks/useFolderTree"
import { getFolderPath } from "../../utils/hierarchy"
import { buildDeckUrlPath } from "../../utils/navigation"
import { useVocab, type Deck } from "../../context/VocabContext"
import { useNavigate } from "@tanstack/solid-router"
import { getUser } from "@/lib/auth"
import type { Id } from "convex/_generated/dataModel"

interface DeckCardProps {
  deck: Deck
  isSelected?: boolean
  class?: string
}

export function DeckCard(props: DeckCardProps) {
  const ctx = useVocab()
  const navigate = useNavigate()
  const user = getUser()
  const deckPath = () => `/vocab/${buildDeckUrlPath(props.deck, ctx.folders())}`
  const [isHovered, setIsHovered] = createSignal(false)
  const [expandedFolderIds, setExpandedFolderIds] = createSignal<Set<string>>(
    new Set(),
  )
  const [isSharing, setIsSharing] = createSignal(false)

  // Check if deck is shared (only for user decks)
  const isSharedQuery = useConvexQuery(
    api.api.sharing.isShared,
    () => ({ deckId: props.deck.id as Id<"userDecks"> }),
    () => ({ enabled: props.deck.source === "user" && !!user() }),
  )
  const isShared = () => isSharedQuery.data() ?? false

  // Sharing mutations
  const shareDeckMutation = useMutation(api.api.sharing.shareDeck)
  const unshareDeckMutation = useMutation(api.api.sharing.unshareDeck)

  const { folderTreeNodes } = useFolderTree({
    folders: ctx.folders(),
    decks: [],
    item: props.deck,
  })

  const getCurrentFolderPath = () => {
    if (!props.deck.folderId) return []
    return getFolderPath(props.deck.folderId, ctx.folders())
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

  const handleMoveToFolder = async (folderId: string) => {
    const newFolderId = folderId === "root" ? null : folderId
    await ctx.updateDeck(props.deck.id, { folderId: newFolderId })
  }

  const initializeExpandedState = () => {
    const path = getCurrentFolderPath()
    setExpandedFolderIds(new Set(["root", ...path.map((f) => f.id)]))
  }

  const handleRename = () => {
    const newName = window.prompt("Enter new deck name:", props.deck.deckName)
    if (newName && newName.trim() && newName.trim() !== props.deck.deckName) {
      ctx.updateDeck(props.deck.id, { deckName: newName.trim() })
    }
  }

  const handleDelete = () => {
    const message =
      props.deck.source === "built-in"
        ? `You're about to remove "${props.deck.deckName}". You can always import it again. ( ˆ𐃷ˆ) .ᐟ.ᐟ`
        : `Are you sure you want to delete "${props.deck.deckName}"? This action cannot be undone.`

    if (window.confirm(message)) {
      ctx.deleteDeck(props.deck.id)
    }
  }

  const handleEditContents = () => {
    // Navigate to deck edit page
    navigate({ to: `/vocab/deck/${props.deck.id}/edit` })
  }

  const canEdit = () => props.deck.source === "user"

  const handleShare = async () => {
    if (!canEdit()) return
    setIsSharing(true)
    try {
      if (isShared()) {
        if (!confirm("Are you sure you want to unshare this deck?")) {
          setIsSharing(false)
          return
        }
        await unshareDeckMutation.mutate({
          deckId: props.deck.id as Id<"userDecks">,
        })
      } else {
        await shareDeckMutation.mutate({
          deckId: props.deck.id as Id<"userDecks">,
        })
        // Navigate to browse page after sharing
        navigate({ to: "/vocab/browse" })
      }
    } catch (error) {
      console.error("Failed to share/unshare deck:", error)
      alert("Failed to update sharing status. Please try again.")
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger
        as={Link}
        to={deckPath()}
        class={cn(
          "block bg-card/70 hover:bg-card/90 border-border/60 relative cursor-pointer space-y-3 rounded-lg border p-4 shadow-sm backdrop-blur-sm hover:shadow-md dark:bg-card/60 dark:hover:bg-card/70 dark:border-card-foreground/70",
          props.isSelected && "outline-border outline-2 dark:outline-card-foreground",
          props.class,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Edit button (only for user decks) */}
        <Show when={canEdit()}>
          <div
            class={cn(
              "absolute top-2 right-2 transition-opacity duration-200",
              isHovered() ? "opacity-100" : "opacity-0",
            )}
            title="Edit deck"
          >
            <Button
              size="sm"
              variant="ghost"
              class="h-6 w-6 p-0 hover:cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleEditContents()
              }}
            >
              <SquarePen class="h-3 w-3" />
            </Button>
          </div>
        </Show>

        {/* Deck info */}
        <div class="space-y-1">
          <h4
            class={cn(
              "pr-8 text-sm leading-tight font-medium",
              props.deck.source === "built-in" &&
                "decoration-muted-foreground/70 underline underline-offset-4",
            )}
            title={
              props.deck.source === "built-in" ? "Built-in deck" : undefined
            }
          >
            {props.deck.deckName}
          </h4>
          <Show when={props.deck.source === "built-in"}>
            <p class="text-muted-foreground text-xs">Built-in</p>
          </Show>
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent class="bg-card border-border outline-none dark:border-card-foreground">
        {/* Edit contents (user decks only) */}
        <div
          title={
            !canEdit()
              ? "Built-in deck editing is disabled. Select make a copy instead."
              : undefined
          }
        >
          <ContextMenuItem
            disabled={!canEdit()}
            class="disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => canEdit() && handleEditContents()}
          >
            <PencilLine class="mr-2 h-3 w-3" />
            Edit contents
          </ContextMenuItem>
        </div>

        <ContextMenuSeparator class="border-border dark:border-card-foreground" />

        {/* Rename (user decks only) */}
        <ContextMenuItem
          disabled={!canEdit()}
          class="disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => canEdit() && handleRename()}
        >
          <FileText class="mr-2 h-3 w-3" />
          Rename
        </ContextMenuItem>

        {/* Move (user decks only) */}
        <Show when={canEdit()}>
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
                  selectedId={props.deck.folderId || "root"}
                  onSelect={(id) => handleMoveToFolder(id)}
                  expandedIds={expandedFolderIds()}
                  onToggle={handleToggleFolder}
                  renderIcon={(node) =>
                    node.id === "root" ? (
                      <House class="mr-2 h-4 w-4 shrink-0" />
                    ) : (
                      <Folder class="mr-2 h-4 w-4 shrink-0" />
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
        </Show>

        {/* Share/Unshare (user decks only) */}
        <Show when={canEdit()}>
          <ContextMenuItem
            disabled={isSharing()}
            onClick={handleShare}
            class={isShared() ? "text-amber-600 dark:text-amber-400" : ""}
          >
            <Show when={isSharing()}>
              <div class="mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
            </Show>
            <Show when={!isSharing()}>
              <Share class="mr-2 h-3 w-3" />
            </Show>
            {isShared() ? "Unshare" : "Share"}
          </ContextMenuItem>
        </Show>

        {/* Copy (always available) */}
        <ContextMenuItem onClick={() => ctx.setCopyingDeck(props.deck)}>
          <Copy class="mr-2 h-3 w-3" />
          Make a copy
        </ContextMenuItem>

        <ContextMenuSeparator class="border-border dark:border-card-foreground" />

        {/* Delete */}
        <ContextMenuItem
          onClick={handleDelete}
          class="text-red-600 focus:bg-red-50 focus:text-red-900 dark:text-red-400 dark:focus:bg-red-950 dark:focus:text-red-300"
        >
          <Trash2 class="mr-2 h-3 w-3" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
