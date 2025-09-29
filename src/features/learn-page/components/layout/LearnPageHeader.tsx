// features/learn-page/components/layout/LearnPageHeader.tsx
import { Link, useNavigate, Await } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { useSettings } from "@/context/SettingsContext"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { DeckSelectionPopover } from "../shared/DeckSelectionPopover"
import { NavigationSheet } from "./NavigationSheet"
import { HamburgerIcon } from "../shared/HamburgerIcon"
import { UserActions } from "../shared/UserActions"
import type { User } from "@supabase/supabase-js"
import type { MobileContentView } from "./LearnPageContent"
import { useLearnPageData } from "@/features/learn-page/context/LearnPageDataContext"

interface LearnPageHeaderProps {
  user: User | null
  variant: "mobile" | "desktop"
  mobileContentView?: MobileContentView
  setMobileContentView?: (view: MobileContentView) => void
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

  return (
    <Sheet>
      {props.variant === "mobile" ? (
        <div class="grid grid-cols-3 pt-5 pb-3 text-xl font-bold">
          <div class="ml-8 flex">
            <SheetTrigger>
              <HamburgerIcon size="md" class="hover:cursor-pointer" />
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
              <UserActions
                user={props.user}
                variant="mobile"
                dueFSRSCardsCount={dueFSRSCardsCount}
              />
            </div>
          </div>
        </div>
      ) : (
        // Desktop variant
        <div class="px-8 pt-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <SheetTrigger class="mr-2">
                <HamburgerIcon size="md" class="hover:cursor-pointer" />
              </SheetTrigger>
              <Link to="/" class="flex items-center gap-3">
                <Avatar class="h-11 w-11">
                  <AvatarImage src="/icons/ninja.png" class="h-full w-full" />
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <span class="text-foreground/90 text-lg font-semibold">
                  Learn Page
                </span>
                <span class="font-semibold text-red-500 italic">Alpha</span>
              </Link>
            </div>

            <div class="flex items-center gap-6">
              <UserActions
                user={props.user}
                variant="desktop"
                dueFSRSCardsCount={dueFSRSCardsCount}
              />
            </div>
          </div>
        </div>
      )}

      <SheetContent
        class="data-[closed=]:duration-300 data-[expanded=]:duration-200"
        position="left"
      >
        <Show when={props.variant === "mobile"}>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
        </Show>
        <NavigationSheet
          activeView={props.mobileContentView || "learning-path"}
          setActiveView={props.setMobileContentView}
          variant={props.variant}
        />
      </SheetContent>
    </Sheet>
  )
}
