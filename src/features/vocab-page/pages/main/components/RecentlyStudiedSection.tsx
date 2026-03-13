import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import { buildDeckUrlPath } from "../../../utils/navigation"
import { useVocab, type Deck } from "../../../context/VocabContext"

interface RecentlyStudiedSectionProps {
  recentCompletions: { moduleId: string; completedAt: number }[]
  decks: Deck[]
}

function formatRelativeTime(ts: number) {
  const diff = Date.now() - ts
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return "just now"
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export function RecentlyStudiedSection(props: RecentlyStudiedSectionProps) {
  const ctx = useVocab()

  const recentDecks = () =>
    props.recentCompletions
      .slice(0, 3)
      .map((c) => {
        const deck = props.decks.find((d) => d.id === c.moduleId)
        return deck ? { deck, completedAt: c.completedAt } : null
      })
      .filter((d): d is { deck: Deck; completedAt: number } => d != null)

  return (
    <Show when={recentDecks().length > 0}>
      <div>
        <h2 class="text-foreground mb-3 text-sm font-semibold">
          Recently Studied
        </h2>
        <div>
          <For each={recentDecks()}>
            {(item) => (
              <Button
                as={Link}
                to={`/vocab/${buildDeckUrlPath(item.deck, ctx.folders())}`}
                variant="ghost"
                class="flex w-full items-center gap-3 py-2 px-2 h-auto justify-start rounded-md transition-colors hover:bg-white/[0.03]"
              >
                <div class="h-1.5 w-1.5 rounded-full bg-white/20 shrink-0" />
                <span class="text-sm text-white/50 truncate flex-1 text-left">
                  {item.deck.deckName}
                </span>
                <span class="text-xs text-white/25 tabular-nums shrink-0">
                  {formatRelativeTime(item.completedAt)}
                </span>
              </Button>
            )}
          </For>
        </div>
      </div>
    </Show>
  )
}
