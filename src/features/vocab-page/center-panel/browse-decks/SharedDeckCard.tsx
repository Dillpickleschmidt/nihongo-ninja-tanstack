// features/vocab-page/components/SharedDeckCard.tsx
import { Show } from "solid-js"
import {
  Download,
  Users,
  Crown,
  Edit,
  FileText,
  Share,
  Eye,
} from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import type { SharedDeck } from "./useBrowseDecks"

interface SharedDeckCardProps {
  deck: SharedDeck
  index: number
  isOwnDeck: boolean
  isAlreadyImported: boolean
  isImporting: boolean
  isUnsharing: boolean
  onPreview: (deck: SharedDeck) => void
  onImport: (deck: SharedDeck) => void
  onUnshare: (deck: SharedDeck) => void
}

export function SharedDeckCard(props: SharedDeckCardProps) {
  return (
    <div
      class={`relative rounded-xl border shadow-md backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${
        props.isOwnDeck
          ? `border-amber-400/50 ring-1 ring-amber-400/20 ${(props.index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"}`
          : `border-card-foreground/70 ${(props.index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"}`
      }`}
    >
      <div class="p-4">
        <div class="flex items-start justify-between">
          <div class="flex-1 space-y-2">
            {/* Deck Title */}
            <div class="flex items-center gap-2">
              <h3 class="text-lg leading-tight font-bold">
                {props.deck.user_decks.deck_name}
              </h3>
              <Show when={props.isOwnDeck}>
                <Crown class="h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
              </Show>
            </div>

            {/* Description */}
            <Show when={props.deck.user_decks.deck_description}>
              <p class="text-muted-foreground text-xs leading-relaxed">
                {props.deck.user_decks.deck_description}
              </p>
            </Show>

            {/* Metadata */}
            <div class="flex flex-wrap items-center gap-3">
              <div
                class={`flex items-center gap-1.5 rounded-md border px-2 py-1 backdrop-blur-sm ${
                  props.isOwnDeck
                    ? "border-amber-400/30 bg-amber-100/20"
                    : "bg-background/40 border-card-foreground/50"
                }`}
              >
                <Users
                  class={`h-3 w-3 ${props.isOwnDeck ? "text-amber-400" : "text-sky-400"}`}
                />
                <span class="text-xs font-medium">
                  {props.isOwnDeck ? "You" : props.deck.shared_by}
                </span>
              </div>

              <span class="text-muted-foreground text-xs">
                {new Date(props.deck.shared_at).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Preview/Import/Manage Buttons */}
          <div class="ml-4">
            <Show
              when={props.isOwnDeck}
              fallback={
                <div class="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    class="text-xs shadow-sm"
                    onClick={() => props.onPreview(props.deck)}
                  >
                    <Eye class="mr-1.5 h-3.5 w-3.5" />
                    Preview
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    class="text-xs shadow-sm hover:cursor-pointer"
                    disabled={props.isImporting}
                    onClick={() => props.onImport(props.deck)}
                  >
                    <Show when={props.isImporting}>
                      <div class="mr-1.5 h-3.5 w-3.5 animate-spin rounded-full border border-current border-t-transparent" />
                    </Show>
                    <Show when={!props.isImporting}>
                      <Download class="mr-1.5 h-3.5 w-3.5" />
                    </Show>
                    {props.isAlreadyImported ? "Import Again?" : "Import"}
                  </Button>
                </div>
              }
            >
              <Popover>
                <PopoverTrigger>
                  <Button
                    variant="secondary"
                    size="sm"
                    class="text-xs shadow-sm"
                  >
                    Manage
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="bg-card border-card-foreground w-48 p-2">
                  <div class="space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      class="w-full justify-start"
                      onClick={() => {
                        alert("Edit contents feature coming soon!")
                      }}
                    >
                      <Edit class="mr-2 h-3 w-3" />
                      Edit contents
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      class="w-full justify-start"
                      onClick={() => {
                        const newName = window.prompt(
                          "Enter new deck name:",
                          props.deck.user_decks.deck_name,
                        )
                        if (
                          newName &&
                          newName.trim() &&
                          newName.trim() !== props.deck.user_decks.deck_name
                        ) {
                          alert("Rename feature coming soon!")
                        }
                      }}
                    >
                      <FileText class="mr-2 h-3 w-3" />
                      Rename
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      class="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-900 dark:text-red-400 dark:hover:bg-red-950 dark:hover:text-red-300"
                      disabled={props.isUnsharing}
                      onClick={() => props.onUnshare(props.deck)}
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
