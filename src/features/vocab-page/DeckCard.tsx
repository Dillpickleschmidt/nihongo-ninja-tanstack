import { Show } from "solid-js"
import { Plus, Check, Play, ArrowLeft } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { useNavigate } from "@tanstack/solid-router"
import { cn } from "@/utils"
import type { BuiltInDeck, UserDeck } from "./types"

interface DeckCardProps {
  deck: BuiltInDeck | UserDeck
  onImport?: (deck: BuiltInDeck) => void
  onPlay?: (deck: BuiltInDeck | UserDeck) => void
  isNewlyImported?: boolean
  isSelected?: boolean
  onSelect?: (deck: UserDeck) => void
  class?: string
}

export function DeckCard(props: DeckCardProps) {
  const navigate = useNavigate()

  const isBuiltInDeck = (deck: BuiltInDeck | UserDeck): deck is BuiltInDeck => {
    return "isImported" in deck
  }

  const builtInDeck = () => (isBuiltInDeck(props.deck) ? props.deck : null)
  const userDeck = () => (!isBuiltInDeck(props.deck) ? props.deck : null)

  return (
    <div
      class={cn(
        "bg-card border-border space-y-3 rounded-lg border p-4",
        props.isSelected && "outline-card-foreground outline outline-2",
        userDeck() && "cursor-pointer",
        props.class,
      )}
      onClick={() => {
        if (userDeck()) {
          props.onSelect?.(userDeck()!)
        }
      }}
    >
      <div class="space-y-1">
        <h4 class="text-sm leading-tight font-medium">{props.deck.name}</h4>

        <Show when={builtInDeck()}>
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
        <Show when={builtInDeck()}>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              builtInDeck()!.isImported ? {} : props.onImport?.(builtInDeck()!)
            }
            disabled={builtInDeck()!.isImported}
            class="flex-1 text-xs"
          >
            {builtInDeck()!.isImported ? (
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
            onClick={(e) => {
              e.stopPropagation()
              navigate({
                to: "/practice/$practiceID",
                params: { practiceID: userDeck()!.id },
              })
            }}
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
