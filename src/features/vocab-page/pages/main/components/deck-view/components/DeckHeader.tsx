import { Show } from "solid-js"
import { Link, useLocation } from "@tanstack/solid-router"
import { Play, ChevronRight } from "lucide-solid"
import { SSRMediaQuery } from "~/components/SSRMediaQuery"
import { Button } from "~/components/ui/button"
import { buildPracticePath } from "../../../../../utils/navigation"

interface DeckHeaderProps {
  deckName: string
  deckDescription?: string
}

export function DeckHeader(props: DeckHeaderProps) {
  const location = useLocation()

  return (
    <div class="relative p-4 text-center">
      <div>
        <div class="mb-2">
          <span class="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 text-xs font-medium tracking-wide uppercase text-orange-400">
            Deck
          </span>
        </div>
        <h1 class="text-2xl font-bold lg:text-3xl">{props.deckName}</h1>
        <Show when={props.deckDescription}>
          <p class="text-muted-foreground mt-2 text-sm">
            {props.deckDescription}
          </p>
        </Show>
      </div>
      <SSRMediaQuery showFrom="md">
        <div class="absolute right-0 bottom-4">
          <Button
            as={Link}
            to={buildPracticePath(location().pathname)}
            class="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition-all bg-(--accent)/80 text-white font-medium hover:scale-[1.02] hover:bg-(--accent)"
            style={{
              "box-shadow":
                "0 8px 15px -4px color-mix(in srgb, var(--accent) 30%, transparent)",
            }}
          >
            <Play class="size-4" />
            <span>Start practicing</span>
            <ChevronRight class="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </SSRMediaQuery>
    </div>
  )
}
