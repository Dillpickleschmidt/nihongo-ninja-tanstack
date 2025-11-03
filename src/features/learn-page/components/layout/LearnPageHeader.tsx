// features/learn-page/components/layout/LearnPageHeader.tsx
import { Link, useNavigate } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { LearningPathChapterSelector } from "../shared/LearningPathChapterSelector"
import { NavigationSheet } from "./NavigationSheet"
import { HamburgerIcon } from "../shared/HamburgerIcon"
import { DueCardsDisplay } from "../shared/DueCardsDisplay"
import { getDeckBySlug } from "@/data/utils/core"
import {
  useLearnPageContext,
  type MobileContentView,
} from "@/features/learn-page/context/LearnPageContext"
import type { TextbookIDEnum } from "@/data/types"

interface LearnPageHeaderProps {
  variant: "mobile" | "desktop"
  mobileContentView?: MobileContentView
  setMobileContentView?: (view: MobileContentView) => void
}

export function LearnPageHeader(props: LearnPageHeaderProps) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const context = useLearnPageContext()
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)

  const activeLearningPathId = () =>
    context.settingsQuery.data!["active-learning-path"] as string
  const activeChapterSlug = () => context.settingsQuery.data!["active-chapter"]
  const activeChapter = () =>
    getDeckBySlug(activeLearningPathId(), activeChapterSlug())

  const handleDeckSelect = (learningPathId: string, chapterSlug: string) => {
    const deck = getDeckBySlug(learningPathId, chapterSlug)
    if (deck) {
      navigate({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId: learningPathId, chapterSlug: chapterSlug },
      })
    }
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
            <LearningPathChapterSelector
              activeLearningPathId={activeLearningPathId()}
              activeChapter={activeChapter()!}
              queryClient={queryClient}
              userId={context.userId}
              onChapterSelect={handleDeckSelect}
              isOpen={isPopoverOpen()}
              onOpenChange={setIsPopoverOpen}
              popoverWidth="w-[350px]"
            >
              <div class="hover:bg-card-foreground/40 -mt-0.5 flex min-w-[150px] items-center justify-center space-x-2 rounded-md border-none px-3 py-2 text-center text-lg font-semibold hover:cursor-pointer md:text-xl">
                <span>{activeChapter()?.title}</span>
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
            </LearningPathChapterSelector>
          </div>

          <div class="flex justify-center">
            <div class="min-w-20 text-center">
              <DueCardsDisplay variant="mobile" />
            </div>
          </div>
        </div>
      ) : (
        // Desktop variant
        <div class="px-8 pt-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <SheetTrigger class="mr-2" tabindex="1">
                <HamburgerIcon size="md" class="hover:cursor-pointer" />
              </SheetTrigger>
              <Link to="/" class="flex items-center gap-3" tabindex="2">
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
              <DueCardsDisplay variant="desktop" />
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
