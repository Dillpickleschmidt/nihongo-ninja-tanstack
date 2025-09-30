// features/learn-page/components/layout/LeftSidebar.tsx
import { createSignal } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { useSettings } from "@/context/SettingsContext"
import { WordHierarchy } from "../content/WordHierarchy"
import { DeckSelectionPopover } from "../shared/DeckSelectionPopover"
import { Route } from "@/routes/_home/learn/$textbookId.$chapterSlug"
import { getDeckBySlug } from "@/data/utils/core"

interface LeftSidebarProps {
  variant: "mobile" | "desktop"
}

export function LeftSidebar(props: LeftSidebarProps) {
  const navigate = useNavigate()
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const loaderData = Route.useLoaderData()
  const { updateUserPreferences } = useSettings()

  const handleDeckChange = async (
    textbookId: string,
    deck: { slug: string; title: string },
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

  if (props.variant === "mobile") {
    return (
      <div class="mb-8 flex flex-col gap-3 px-7">
        <WordHierarchy variant="mobile" />
      </div>
    )
  }

  return (
    <div class="space-y-6">
      <div class="space-y-3">
        <div class="text-muted-foreground text-sm tracking-wider uppercase">
          Current Chapter
        </div>
        <DeckSelectionPopover
          activeTextbookId={loaderData().textbookId}
          activeDeck={
            getDeckBySlug(loaderData().textbookId, loaderData().chapterSlug)!
          }
          onDeckChange={handleDeckChange}
          isOpen={isPopoverOpen()}
          onOpenChange={setIsPopoverOpen}
        >
          <div class="group flex items-center gap-3 text-left">
            <h1 class="text-foreground group-hover:text-foreground/80 text-2xl font-bold transition-colors">
              {
                getDeckBySlug(
                  loaderData().textbookId,
                  loaderData().chapterSlug,
                )!.title
              }
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4 opacity-60 transition-opacity group-hover:opacity-80"
            >
              <path d="M8 9l4 -4l4 4" />
              <path d="M16 15l-4 4l-4 -4" />
            </svg>
          </div>
        </DeckSelectionPopover>
      </div>

      <div class="pt-1">
        <WordHierarchy variant="desktop" />
      </div>
    </div>
  )
}
