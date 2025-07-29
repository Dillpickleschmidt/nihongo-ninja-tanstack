// features/learn/components/content/LearnPageContent.tsx
import { JSX } from "solid-js"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { LearnPageHeader } from "./LearnPageHeader"
import { LeftSidebar } from "./LeftSidebar"
import { RightSidebar } from "./RightSidebar"
import { TextbookChapterBackgrounds } from "../shared/TextbookChapterBackgrounds"
import type { User } from "@supabase/supabase-js"
import type { TextbookIDEnum } from "@/data/types"

interface LearnPageContentProps {
  user: User | null
  activeTextbookId: TextbookIDEnum
  activeDeck: string
}

export function LearnPageContent(props: LearnPageContentProps) {
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

      <TextbookChapterBackgrounds
        textbook={props.activeTextbookId!}
        chapter={props.activeDeck!}
      />

      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <LearnPageHeader user={props.user} variant="mobile" />
        <div class="flex flex-col">
          {/* {props.children} */}
          <div class="flex flex-col">
            <LeftSidebar user={props.user} variant="mobile" />
            <RightSidebar variant="mobile" />
          </div>
        </div>
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <div class="min-h-screen">
          <LearnPageHeader user={props.user} variant="desktop" />
          <div class="flex w-full pr-4 pl-8">
            <div class="relative max-h-[calc(100vh-146px)] w-[20%] overflow-y-auto pt-6">
              <LeftSidebar user={props.user} variant="desktop" />
            </div>
            <div class="w-[60%]">{/* {props.children} */}</div>
            <div class="relative h-[calc(100vh-146px)] w-[20%] overflow-y-auto pt-6 pr-4">
              <RightSidebar variant="desktop" />
            </div>
          </div>
          <div class="pb-8" />
        </div>
      </SSRMediaQuery>
    </div>
  )
}
