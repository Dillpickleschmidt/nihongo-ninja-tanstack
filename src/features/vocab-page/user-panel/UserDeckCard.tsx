// features/vocab-page/user-panel/UserDeckCard.tsx
import { Play, ArrowLeft, Edit } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { useNavigate } from "@tanstack/solid-router"
import { cn } from "@/utils"
import { createSignal } from "solid-js"

interface UserDeckCardProps {
  deck: UserDeck
  onPlay?: (deck: UserDeck) => void
  isNewlyImported?: boolean
  isSelected?: boolean
  onSelect?: (deck: UserDeck) => void
  onEdit?: (deck: UserDeck) => void
  class?: string
}

export function UserDeckCard(props: UserDeckCardProps) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = createSignal(false)

  const practiceID = () =>
    props.deck.source === "built-in"
      ? props.deck.original_deck_id!
      : props.deck.deck_id.toString()

  return (
    <div
      class={cn(
        "bg-card/60 hover:bg-card/70 border-card-foreground/70 relative cursor-pointer space-y-3 rounded-lg border p-4 shadow-sm backdrop-blur-sm hover:shadow-md",
        props.isSelected && "outline-card-foreground outline-2",
        props.class,
      )}
      onClick={() => props.onSelect?.(props.deck)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edit button - appears on hover */}
      <div
        class={cn(
          "absolute top-2 right-2 transition-opacity duration-200",
          isHovered() ? "opacity-100" : "opacity-0",
        )}
      >
        <Button
          size="sm"
          variant="ghost"
          class="h-6 w-6 p-0 hover:cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            props.onEdit?.(props.deck)
          }}
        >
          <Edit class="h-3 w-3" />
        </Button>
      </div>

      <div class="space-y-1">
        <h4 class="pr-8 text-sm leading-tight font-medium">
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
            params: { practiceID: practiceID() },
          })
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
    </div>
  )
}
