// features/vocab-page/built-in-panel/BuiltInDeckCard.tsx
import { Plus, Check } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import type { VocabBuiltInDeck } from "../types"

interface BuiltInDeckCardProps {
  deck: VocabBuiltInDeck
  onImport: (deck: VocabBuiltInDeck) => void
  class?: string
}

export function BuiltInDeckCard(props: BuiltInDeckCardProps) {
  return (
    <div
      class={cn(
        "bg-card/50 border-card-foreground/70 space-y-3 rounded-lg border p-4 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md",
        props.class,
      )}
    >
      <div class="space-y-1">
        <h4 class="text-sm leading-tight font-medium">{props.deck.title}</h4>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => !props.deck.isImported && props.onImport(props.deck)}
        disabled={props.deck.isImported}
        class="w-full text-xs"
      >
        {props.deck.isImported ? (
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
    </div>
  )
}
