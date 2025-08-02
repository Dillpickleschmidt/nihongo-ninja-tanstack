// features/vocab-page/user-panel/UserDeckCard.tsx
import { Play, ArrowLeft } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { useNavigate } from "@tanstack/solid-router"
import { cn } from "@/utils"
// UserDeck type is now global from global.d.ts

interface UserDeckCardProps {
  deck: UserDeck
  onPlay?: (deck: UserDeck) => void
  isNewlyImported?: boolean
  isSelected?: boolean
  onSelect?: (deck: UserDeck) => void
  class?: string
}

export function UserDeckCard(props: UserDeckCardProps) {
  const navigate = useNavigate()

  return (
    <div
      class={cn(
        "hover:bg-accent bg-card border-border cursor-pointer space-y-3 rounded-lg border p-4",
        props.isSelected && "outline-card-foreground outline-2",
        props.class,
      )}
      onClick={() => props.onSelect?.(props.deck)}
    >
      <div class="space-y-1">
        <h4 class="text-sm leading-tight font-medium">
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
          navigate({
            to: "/practice/$practiceID",
            params: { practiceID: props.deck.deck_id.toString() },
          })
        }}
        class="bg-card-foreground text-primary relative w-full overflow-hidden text-xs hover:bg-neutral-500"
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
    </div>
  )
}
