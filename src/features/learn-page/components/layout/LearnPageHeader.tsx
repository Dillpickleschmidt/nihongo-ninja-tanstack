// features/learn-page/components/layout/LearnPageHeader.tsx
import { Link, useNavigate, Await } from "@tanstack/solid-router"
import { createSignal } from "solid-js"
import { useSettings } from "@/context/SettingsContext"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { DeckSelectionPopover } from "../shared/DeckSelectionPopover"
import type { User } from "@supabase/supabase-js"
import { useLearnPageData } from "@/features/learn-page/context/LearnPageDataContext"

interface LearnPageHeaderProps {
  user: User | null
  variant: "mobile" | "desktop"
}

export function LearnPageHeader(props: LearnPageHeaderProps) {
  const navigate = useNavigate()
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const { activeTextbookId, activeDeck, dueFSRSCardsCount } = useLearnPageData()
  const { updateUserPreferences } = useSettings()

  const handleDeckChange = async (
    textbookId: typeof activeTextbookId,
    deck: typeof activeDeck,
  ) => {
    try {
      // Update preferences first via SWR system
      await updateUserPreferences({
        "active-textbook": textbookId,
        "active-deck": deck.slug,
      })

      // Then navigate to new route
      navigate({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId, chapterSlug: deck.slug },
      })
    } catch (error) {
      console.error("Failed to update preferences:", error)
      // Still navigate even if preference update fails
      navigate({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId, chapterSlug: deck.slug },
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
        promise={dueFSRSCardsCount}
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
      <Sheet>
        <div class="grid grid-cols-3 pt-5 pb-3 text-xl font-bold">
          <div class="flex justify-center">
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </SheetTrigger>
          </div>

          <div class="flex justify-center">
            <DeckSelectionPopover
              activeTextbookId={activeTextbookId}
              activeDeck={activeDeck}
              onDeckChange={handleDeckChange}
              isOpen={isPopoverOpen()}
              onOpenChange={setIsPopoverOpen}
              popoverWidth="w-[350px]"
            >
              <div class="hover:bg-card-foreground/40 -mt-0.5 flex min-w-[150px] items-center justify-center space-x-2 rounded-md border-none px-3 py-2 text-center text-lg font-semibold hover:cursor-pointer md:text-xl">
                <span>{activeDeck.title}</span>
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

          <div class="flex justify-center">
            <div class="min-w-20 text-center">
              {!props.user ? (
                <Button as={Link} to="/auth" variant="link" class="italic">
                  Sign In
                </Button>
              ) : (
                <DueCardsDisplay />
              )}
            </div>
          </div>
        </div>

        <SheetContent position="left">
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
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
            Learn Page
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
