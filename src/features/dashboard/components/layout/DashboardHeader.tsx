// features/dashboard/components/layout/DashboardHeader.tsx
import { Link, useNavigate, Await } from "@tanstack/solid-router"
import { createSignal, createMemo } from "solid-js"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DeckSelectionPopover } from "../shared/DeckSelectionPopover"
import type { User } from "@supabase/supabase-js"
import { useSettings } from "@/context/SettingsContext"
import { generateServiceSources } from "@/features/dashboard/utils/serviceSourceHelper"
import type { Deck, DeckSource, UserDeck } from "@/data/types"
import type { DeferredPromise } from "@tanstack/solid-router"

interface DashboardHeaderProps {
  dashboardType: "textbook" | "service" | "user"
  user: User | null
  dueFSRSCardsCount: DeferredPromise<number | null>
  currentDeck: Deck
  deckSources: DeckSource[]
  variant: "mobile" | "desktop"
}

export function DashboardHeader(props: DashboardHeaderProps) {
  const navigate = useNavigate()
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const { preferences } = useSettings()

  // Helper function to create a properly typed user deck source
  const createUserDeckSource = (user: User): DeckSource => {
    const userDeck: UserDeck = {
      id: "user-decks",
      slug: "default",
      title: "My Custom Decks",
      deckType: "user_deck" as const,
      learning_path_items: [],
      owner_id: user.id,
      is_public: false,
      vocabulary_keys: [],
    }

    return {
      id: user.id,
      name: "My Decks",
      type: "user" as const,
      decks: [userDeck],
      disabled: false,
    }
  }

  // Generate all available sources
  const allSources = createMemo(() => {
    const serviceSources = generateServiceSources(preferences())
    const userSources = props.user ? [createUserDeckSource(props.user)] : []

    return [...props.deckSources, ...serviceSources, ...userSources]
  })

  const handleDeckChange = (source: DeckSource, deck: Deck) => {
    if (source.type === "textbook") {
      navigate({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: source.id, chapterSlug: deck.slug },
      })
    } else if (source.type === "service") {
      navigate({
        to: "/dashboard/$serviceId",
        params: { serviceId: deck.slug },
      })
    } else if (source.type === "user") {
      navigate({
        to: "/dashboard/$userId",
        params: { userId: source.id },
      })
    }
    setIsPopoverOpen(false)
  }

  // Component for rendering due cards count
  const DueCardsDisplay = () => {
    if (!props.user) {
      return null
    }

    return (
      <Await
        promise={props.dueFSRSCardsCount}
        fallback={
          <>
            <div class="text-gray-400">
              <span class="font-inter text-base font-bold xl:text-lg">...</span>
            </div>
            <div class="text-muted-foreground text-xs xl:text-sm">
              Loading...
            </div>
          </>
        }
      >
        {(count) => (
          <>
            <div
              class={count && count > 0 ? "text-amber-400" : "text-green-500"}
            >
              <span class="font-inter text-base font-bold xl:text-lg">
                {count || 0}
              </span>
            </div>
            <div class="text-muted-foreground text-xs xl:text-sm">
              {count === 0
                ? "No reviews"
                : `${count === 1 ? "Review" : "Reviews"} Due`}
            </div>
          </>
        )}
      </Await>
    )
  }

  if (props.variant === "mobile") {
    return (
      <div class="grid grid-cols-3 pt-10 text-xl font-bold xl:pt-12 xl:text-2xl">
        <Link to="/" class="-mt-2 pl-8 xl:-mt-3 xl:pl-10">
          <Avatar class="h-11 w-11 xl:h-12 xl:w-12">
            <AvatarImage src="/icons/ninja.png" class="h-full w-full" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
        </Link>

        <div class="flex justify-center">
          <DeckSelectionPopover
            currentDeck={props.currentDeck}
            allSources={allSources()}
            onDeckChange={handleDeckChange}
            isOpen={isPopoverOpen()}
            onOpenChange={setIsPopoverOpen}
            popoverWidth="w-[480px]"
            backgroundColor="bg-neutral-950/70"
          >
            <div class="hover:bg-card-foreground/40 -mt-0.5 flex min-w-[200px] items-center justify-center space-x-2 rounded-md border-none px-3 py-2 text-center text-lg font-semibold hover:cursor-pointer md:text-xl xl:-mt-1 xl:text-2xl">
              <span>{props.currentDeck.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-4 opacity-50"
              >
                <path d="M8 9l4 -4l4 4" />
                <path d="M16 15l-4 4l-4 -4" />
              </svg>
            </div>
          </DeckSelectionPopover>
        </div>

        <div class="flex justify-end pr-6 xl:pr-8">
          <div class="min-w-20 text-center xl:min-w-24">
            {!props.user ? (
              <Button
                as={Link}
                to="/auth"
                variant="link"
                class="italic xl:text-base"
              >
                Sign In
              </Button>
            ) : (
              <DueCardsDisplay />
            )}
          </div>
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div class="px-8 pt-8">
      <div class="flex items-center justify-between">
        <Link to="/" class="flex items-center gap-3">
          <Avatar class="h-11 w-11">
            <AvatarImage src="/icons/ninja.png" class="h-full w-full" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <span class="text-foreground/90 text-lg font-semibold">
            Dashboard
          </span>
        </Link>

        <div class="flex items-center gap-6">
          {!props.user ? (
            <Button
              as={Link}
              to="/auth"
              variant="link"
              class="mr-8 font-bold italic xl:text-base"
            >
              Sign In
            </Button>
          ) : (
            <>
              <div class="text-center">
                <div class="text-xl font-bold text-green-400">12</div>
                <div class="text-muted-foreground text-xs">Completed</div>
              </div>

              <div class="text-center">
                <DueCardsDisplay />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
