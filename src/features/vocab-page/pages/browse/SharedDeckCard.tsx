import { Show } from "solid-js"
import {
  Download,
  Users,
  Crown,
  SquarePen,
  FileText,
  Share,
  Eye,
} from "lucide-solid"
import { useNavigate } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { useVocab } from "../../context/VocabContext"
import type { SharedDeckInfo } from "convex/model/sharing"

interface SharedDeckCardProps {
  deck: SharedDeckInfo
  index: number
  isOwnDeck: boolean
  isImporting: boolean
  isUnsharing: boolean
  onPreview: () => void
  onImport: () => void
  onUnshare: () => void
}

export function SharedDeckCard(props: SharedDeckCardProps) {
  const ctx = useVocab()
  const navigate = useNavigate()

  const handleEditContents = () => {
    navigate({ to: `/vocab/deck/${props.deck.deckId}/edit` })
  }

  const handleRename = () => {
    const newName = window.prompt("Enter new deck name:", props.deck.deckName)
    if (newName && newName.trim() && newName.trim() !== props.deck.deckName) {
      ctx.updateDeck(props.deck.deckId as string, { deckName: newName.trim() })
    }
  }

  return (
    <div
      class={`relative rounded-xl border shadow-md backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${
        props.isOwnDeck
          ? `border-amber-400/50 ring-1 ring-amber-400/20 ${(props.index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"}`
          : `border-border/60 dark:border-card-foreground/70 ${(props.index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"}`
      }`}
    >
      <div class="p-4">
        <div class="flex items-start justify-between">
          <div class="flex-1 space-y-2">
            {/* Deck Title */}
            <div class="flex items-center gap-2">
              <h3 class="text-lg font-bold leading-tight">
                {props.deck.deckName}
              </h3>
              <Show when={props.isOwnDeck}>
                <Crown class="h-3.5 w-3.5 shrink-0 text-amber-400" />
              </Show>
            </div>

            {/* Description */}
            <Show when={props.deck.deckDescription}>
              <p class="text-muted-foreground text-xs leading-relaxed">
                {props.deck.deckDescription}
              </p>
            </Show>

            {/* Metadata */}
            <div class="flex flex-wrap items-center gap-3">
              <div
                class={`flex items-center gap-1.5 rounded-md border px-2 py-1 backdrop-blur-sm ${
                  props.isOwnDeck
                    ? "border-amber-400/30 bg-amber-100/20"
                    : "border-border/60 dark:border-card-foreground/50 bg-background/40"
                }`}
              >
                <Users
                  class={`h-3 w-3 ${props.isOwnDeck ? "text-amber-400" : "text-sky-400"}`}
                />
                <span class="text-xs font-medium">
                  {props.isOwnDeck ? "You" : "Community"}
                </span>
              </div>

              <Show when={props.deck.importCount > 0}>
                <div class="flex items-center gap-1.5 rounded-md border border-border/60 dark:border-card-foreground/50 bg-background/40 px-2 py-1 backdrop-blur-sm">
                  <Download class="h-3 w-3 text-green-400" />
                  <span class="text-xs font-medium">
                    {props.deck.importCount}
                  </span>
                </div>
              </Show>

              <span class="text-muted-foreground text-xs">
                {new Date(props.deck.sharedAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div class="ml-4">
            <Show
              when={props.isOwnDeck}
              fallback={
                <div class="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    class="text-xs shadow-sm hover:cursor-pointer"
                    onClick={props.onPreview}
                  >
                    <Eye class="mr-1.5 h-3.5 w-3.5" />
                    Preview
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    class="text-xs shadow-sm hover:cursor-pointer"
                    disabled={props.isImporting}
                    onClick={props.onImport}
                  >
                    <Show when={props.isImporting}>
                      <div class="mr-1.5 h-3.5 w-3.5 animate-spin rounded-full border border-current border-t-transparent" />
                    </Show>
                    <Show when={!props.isImporting}>
                      <Download class="mr-1.5 h-3.5 w-3.5" />
                    </Show>
                    Import
                  </Button>
                </div>
              }
            >
              <Popover>
                <PopoverTrigger
                  as={Button}
                  variant="secondary"
                  size="sm"
                  class="text-xs shadow-sm hover:cursor-pointer"
                >
                  Manage
                </PopoverTrigger>
                <PopoverContent class="border-border dark:border-card-foreground bg-card w-48 p-2">
                  <div class="space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      class="w-full justify-start hover:cursor-pointer"
                      onClick={handleEditContents}
                    >
                      <SquarePen class="mr-2 h-3 w-3" />
                      Edit contents
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      class="w-full justify-start hover:cursor-pointer"
                      onClick={handleRename}
                    >
                      <FileText class="mr-2 h-3 w-3" />
                      Rename
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      class="w-full justify-start text-red-600 hover:cursor-pointer hover:bg-red-50 hover:text-red-900 dark:text-red-400 dark:hover:bg-red-950 dark:hover:text-red-300"
                      disabled={props.isUnsharing}
                      onClick={props.onUnshare}
                    >
                      <Show when={props.isUnsharing}>
                        <div class="mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
                      </Show>
                      <Show when={!props.isUnsharing}>
                        <Share class="mr-2 h-3 w-3" />
                      </Show>
                      Unshare
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </Show>
          </div>
        </div>
      </div>
    </div>
  )
}
