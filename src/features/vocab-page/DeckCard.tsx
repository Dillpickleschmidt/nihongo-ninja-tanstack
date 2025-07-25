import { Show } from "solid-js"
import { Plus, Check, Play, ArrowLeft } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import type { DeckPart, UserDeck } from "./types"

interface DeckCardProps {
  deck: DeckPart | UserDeck
  onImport?: (deck: DeckPart) => void
  onPlay?: (deck: DeckPart | UserDeck) => void
  isNewlyImported?: boolean
  class?: string
}

export function DeckCard(props: DeckCardProps) {
  const isDeckPart = (deck: DeckPart | UserDeck): deck is DeckPart => {
    return "partNumber" in deck
  }

  const deckPart = () => (isDeckPart(props.deck) ? props.deck : null)
  const userDeck = () => (!isDeckPart(props.deck) ? props.deck : null)

  return (
    <div
      class={cn(
        "bg-card border-border space-y-3 rounded-lg border p-4",
        props.class,
      )}
    >
      <div class="space-y-1">
        <h4 class="text-sm leading-tight font-medium">{props.deck.name}</h4>

        <Show when={deckPart()}>
          {(deck) => (
            <p class="text-muted-foreground text-xs">{deck().description}</p>
          )}
        </Show>

        <Show when={userDeck()}>
          {(deck) => (
            <p class="text-muted-foreground text-xs">
              Imported {deck().importedAt.toLocaleDateString()}
            </p>
          )}
        </Show>
      </div>

      <div class="flex gap-2">
        <Show when={deckPart()}>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              deckPart()!.isImported ? {} : props.onImport?.(deckPart()!)
            }
            disabled={deckPart()!.isImported}
            class="flex-1 text-xs"
          >
            {deckPart()!.isImported ? (
              <>
                <Check class="mr-1 h-3 w-3" />
                Imported
              </>
            ) : (
              <>
                <Plus class="mr-1 h-3 w-3" />
                Import
              </>
            )}
          </Button>
        </Show>

        <Show when={userDeck()}>
          <Button
            variant="default"
            size="sm"
            onClick={() => {}}
            class="relative flex-1 overflow-hidden text-xs"
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
        </Show>
      </div>
    </div>
  )
}
