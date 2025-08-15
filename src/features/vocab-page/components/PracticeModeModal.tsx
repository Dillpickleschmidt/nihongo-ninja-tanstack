// features/vocab-page/components/PracticeModeModal.tsx
import { Show } from "solid-js"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useNavigate } from "@tanstack/solid-router"

interface PracticeModeModalProps {
  deck: UserDeck | null
  isOpen: boolean
  onClose: () => void
  userId?: string
}

export function PracticeModeModal(props: PracticeModeModalProps) {
  const navigate = useNavigate()

  const handlePracticeMode = (mode: "readings" | "kana") => {
    if (!props.deck) return

    if (props.deck.source === "built-in") {
      // Built-in decks use the original route with search params
      navigate({
        to: "/practice/$practiceID",
        params: { practiceID: props.deck.original_deck_id! },
        search: { mode },
      })
    } else {
      // User decks use the new route structure with search params
      navigate({
        to: "/practice/$userID/$deckID",
        params: {
          userID: props.userId || "unknown",
          deckID: props.deck.deck_id.toString(),
        },
        search: { mode },
      })
    }

    props.onClose()
  }

  return (
    <Show when={props.deck}>
      <Dialog open={props.isOpen} onOpenChange={props.onClose}>
        <DialogContent class="bg-card border-card-foreground sm:max-w-md">
          <DialogHeader>
            <DialogTitle class="text-muted-foreground font-medium">
              Practice{" "}
              <span class="text-primary font-bold">
                {props.deck?.deck_name}
              </span>
            </DialogTitle>
          </DialogHeader>

          <div class="space-y-4">
            <p class="text-muted-foreground text-sm">
              Start with the readings to familiarize yourself, then move on to
              kana for pronunciation.
            </p>

            <div class="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                class="bg-background/30 h-auto min-h-16 flex-col items-center justify-center p-4 whitespace-normal"
                onClick={() => handlePracticeMode("readings")}
              >
                <div class="mb-2 text-lg font-bold text-sky-400 select-none">
                  読
                </div>
                <div class="text-center">
                  <div class="text-sm font-medium">Readings</div>
                  <div class="text-muted-foreground mt-1 text-xs">
                    Japanese → English
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                class="bg-background/30 h-auto min-h-16 flex-col items-center justify-center p-4 whitespace-normal"
                onClick={() => handlePracticeMode("kana")}
              >
                <div class="mb-2 text-lg font-bold text-orange-400 select-none">
                  あ
                </div>
                <div class="text-center">
                  <div class="text-sm font-medium">Kana</div>
                  <div class="text-muted-foreground mt-1 text-xs">
                    English → Japanese
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Show>
  )
}

