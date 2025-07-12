// features/dashboard/components/content/user/UserDeckList.tsx
import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  Clock,
  Star,
  Edit,
  ArrowRight,
  Play,
  MoreHorizontal,
  Circle,
  BookOpen,
} from "lucide-solid"
import { cn } from "@/utils"

interface UserDeckListProps {
  decks: Array<{
    id: string
    name: string
    cardCount: number
    lastStudied: string
  }>
  activeDeckId: string
  variant: "mobile" | "desktop"
}

export function UserDeckList(props: UserDeckListProps) {
  if (props.variant === "mobile") {
    return (
      <div class="mb-8 px-6">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-xl font-bold">Your Decks</h2>
          <div class="text-muted-foreground text-sm">
            {props.decks.length} decks
          </div>
        </div>

        <div class="space-y-3">
          <For each={props.decks}>
            {(deck) => (
              <MobileUserDeckCard
                deck={deck}
                isActive={deck.id === props.activeDeckId}
              />
            )}
          </For>
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div class="space-y-4">
      <For each={props.decks}>
        {(deck) => (
          <UserDeckRow deck={deck} isActive={deck.id === props.activeDeckId} />
        )}
      </For>
    </div>
  )
}

function UserDeckRow(props: {
  deck: {
    id: string
    name: string
    cardCount: number
    lastStudied: string
  }
  isActive: boolean
}) {
  return (
    <Link to={`/study/user/${props.deck.id}`} class="group block">
      <div
        class={cn(
          "flex items-center gap-4 rounded-xl border p-4 transition-all duration-200",
          "backdrop-blur-sm hover:scale-[1.01] hover:shadow-lg",
          "bg-gradient-to-r from-purple-600/10 to-indigo-600/5",
          props.isActive
            ? "border-primary/30 bg-primary/5 ring-primary/20 shadow-lg ring-2"
            : "border-white/5 bg-white/2 hover:border-white/10",
        )}
      >
        {/* Active indicator */}
        <div class="flex-shrink-0">
          {props.isActive ? (
            <Star class="h-6 w-6 fill-current text-yellow-400" />
          ) : (
            <Circle class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors" />
          )}
        </div>

        <div class="min-w-0 flex-1">
          <h4 class="group-hover:text-primary line-clamp-1 font-semibold transition-colors">
            {props.deck.name}
          </h4>
          <div class="mt-1 flex items-center gap-4">
            <span class="text-muted-foreground text-sm">
              {props.deck.cardCount} cards
            </span>
            <div class="text-muted-foreground flex items-center gap-1 text-xs">
              <Clock class="h-3 w-3" />
              <span>Last studied {props.deck.lastStudied}</span>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div class="flex items-center gap-2">
          <button class="hover:bg-card-foreground/40 rounded-lg p-2 transition-colors">
            <Edit class="h-4 w-4" />
          </button>
          <ArrowRight class="text-muted-foreground h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  )
}

function MobileUserDeckCard(props: {
  deck: {
    id: string
    name: string
    cardCount: number
    lastStudied: string
  }
  isActive: boolean
}) {
  return (
    <Link to={`/study/user/${props.deck.id}`} class="block">
      <div
        class={cn(
          "bg-card relative rounded-2xl p-4 transition-all duration-200",
          "bg-gradient-to-r from-purple-600/10 to-indigo-600/5 backdrop-blur-sm hover:scale-[99%]",
          props.isActive && "ring-primary/30 shadow-lg ring-2",
        )}
      >
        {props.isActive && (
          <div class="absolute top-2 right-2">
            <Star class="h-5 w-5 fill-current text-yellow-400" />
          </div>
        )}

        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <div class="rounded-lg bg-purple-400/10 p-2">
              <BookOpen class="h-5 w-5 text-purple-400" />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="line-clamp-1 font-semibold">{props.deck.name}</h3>
              <p class="text-muted-foreground text-sm">
                {props.deck.cardCount} cards
              </p>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-muted-foreground text-xs">
              Last studied {props.deck.lastStudied}
            </div>
            <div class="flex items-center gap-2">
              <Play class="h-4 w-4" />
              <span class="text-sm font-medium">Study</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
