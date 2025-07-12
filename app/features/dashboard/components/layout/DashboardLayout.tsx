// features/dashboard/components/layout/DashboardLayout.tsx
import { useLocation } from "@tanstack/solid-router"
import { createMemo, JSX } from "solid-js"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { DashboardHeader } from "./DashboardHeader"
import { LeftSidebar } from "./LeftSidebar"
import { RightSidebar } from "./RightSidebar"
import { BottomNav } from "./BottomNav"
import { Background } from "../shared/Background"
import { TextbookChapterBackgrounds } from "../shared/TextbookChapterBackgrounds"
import type { BackgroundItem } from "../shared/Background"
import type { User } from "@supabase/supabase-js"
import type { Deck, DeckSource } from "@/data/types"
import type { DeferredPromise } from "@tanstack/solid-router"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import type { FullHierarchyData } from "@/data/wanikani/types"

interface DashboardLayoutProps {
  children: JSX.Element
  user: User | null
  dueFSRSCardsPromise: DeferredPromise<FSRSCardData[] | null>
  currentDeck: Deck
  deckSources: DeckSource[]
  wordHierarchyData: FullHierarchyData | null
  textbookId?: string
  chapterSlug?: string
}

export function DashboardLayout(props: DashboardLayoutProps) {
  const location = useLocation()

  const dashboardType = createMemo(() => {
    const segments = location().pathname.split("/").filter(Boolean)

    if (segments.length === 3) return "textbook" // /dashboard/textbook/chapter
    if (segments.length === 2) {
      const id = segments[1]
      return ["anki", "wanikani", "jpdb"].includes(id) ? "service" : "user"
    }

    return "textbook"
  })

  const getBackgroundConfig = (): BackgroundItem | null => {
    if (dashboardType() === "textbook") {
      // Let TextbookChapterBackgrounds handle textbook backgrounds
      return null
    }

    // Static background for service/user dashboards
    return {
      source_type: "img",
      src: "/img/backgrounds/japanese-gate.png",
      position: "absolute",
      layout: "horizontal",
      opacity: 0.15,
    }
  }

  const backgroundConfig = getBackgroundConfig()

  const struggles = [
    "～て",
    "留学生",
    "Intransat...",
    "～てしま",
    "助詞",
    "敬語",
    "カタカナ",
    "ひらがな",
    "条件形",
  ]

  const historyItems = [
    { name: "Gym", icon: "⚡", amount: -40.99, color: "bg-orange-500" },
    { name: "Coffee", icon: "☕", amount: -5.5, color: "bg-amber-600" },
    { name: "Study Books", icon: "📚", amount: -29.99, color: "bg-blue-500" },
  ]

  return (
    <div class="font-poppins xl:h-screen xl:overflow-y-hidden xl:overscroll-y-contain">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Background Handling */}
      {dashboardType() === "textbook" ? (
        <TextbookChapterBackgrounds
          textbook={props.textbookId!}
          chapter={props.chapterSlug!}
        />
      ) : (
        backgroundConfig && <Background backgroundItem={backgroundConfig} />
      )}

      <BottomNav dailyProgressPercentage={25} />

      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <DashboardHeader
          dashboardType={dashboardType()}
          user={props.user}
          dueFSRSCardsPromise={props.dueFSRSCardsPromise}
          currentDeck={props.currentDeck}
          deckSources={props.deckSources}
          variant="mobile"
        />
        <div class="flex flex-col">
          {props.children}
          <div class="flex flex-col">
            <LeftSidebar
              dashboardType={dashboardType()}
              user={props.user}
              currentDeck={props.currentDeck}
              deckSources={props.deckSources}
              wordHierarchyData={props.wordHierarchyData}
              variant="mobile"
            />
            <RightSidebar
              struggles={struggles}
              historyItems={historyItems}
              variant="mobile"
            />
          </div>
        </div>
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <div class="min-h-screen">
          <DashboardHeader
            dashboardType={dashboardType()}
            user={props.user}
            dueFSRSCardsPromise={props.dueFSRSCardsPromise}
            currentDeck={props.currentDeck}
            deckSources={props.deckSources}
            variant="desktop"
          />

          <div class="flex w-full pr-4 pl-8">
            {/* Left Sidebar - 24% */}
            <div class="w-[24%] pt-6">
              <LeftSidebar
                dashboardType={dashboardType()}
                user={props.user}
                currentDeck={props.currentDeck}
                deckSources={props.deckSources}
                wordHierarchyData={props.wordHierarchyData}
                variant="desktop"
              />
            </div>

            {/* Main Content Area - 52% */}
            <div class="w-[52%]">{props.children}</div>

            {/* Right Sidebar - 24% */}
            <div class="relative h-[calc(100vh-80px)] w-[24%] overflow-y-auto pt-12 pr-4 pb-12">
              <RightSidebar
                struggles={struggles}
                historyItems={historyItems}
                variant="desktop"
              />
            </div>
          </div>

          <div class="pb-8" />
        </div>
      </SSRMediaQuery>
    </div>
  )
}
