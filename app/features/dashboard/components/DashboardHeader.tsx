// features/dashboard/components/DashboardHeader.tsx
import {
  Link,
  useNavigate,
  Await,
  type DeferredPromise,
} from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { FSRSCardData } from "@/features/supabase/db/utils"

type CurrentTextbookChapters = Record<
  string,
  { title: string; chapter_number: number }
>

interface DashboardHeaderProps {
  currentChapterID: string
  currentTextbookChapters: CurrentTextbookChapters
  dueFSRSCardsPromise: DeferredPromise<FSRSCardData[] | null>
}

export function DashboardHeader(props: DashboardHeaderProps) {
  const navigate = useNavigate({ from: "/dashboard" })

  // Convert chapters object to array for Select options
  const chapterOptions = Object.entries(props.currentTextbookChapters).map(
    ([id, chapter]) => ({
      id,
      label: `Chapter ${chapter.chapter_number}`,
    }),
  )

  const handleChapterChange = (newChapterID: string) => {
    navigate({
      search: { chapter: newChapterID },
    })
  }

  return (
    <div class="grid grid-cols-3 pt-10 text-xl font-bold xl:pt-12 xl:text-2xl">
      <Link to="/" class="-mt-2 pl-8 xl:-mt-3 xl:pl-10">
        <Avatar class="h-11 w-11 xl:h-12 xl:w-12">
          <AvatarImage src="/icons/ninja.png" class="h-full w-full" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
      </Link>
      <div class="flex justify-center">
        <Select
          value={props.currentChapterID}
          onChange={handleChapterChange}
          options={chapterOptions.map((opt) => opt.id)}
          itemComponent={(itemProps) => (
            <SelectItem item={itemProps.item}>
              {
                chapterOptions.find((opt) => opt.id === itemProps.item.rawValue)
                  ?.label
              }
            </SelectItem>
          )}
        >
          <SelectTrigger
            aria-label="Chapter"
            class="-mt-0.5 flex min-w-[200px] justify-center space-x-2 border-none text-center text-lg font-semibold md:text-xl xl:-mt-1 xl:text-2xl"
          >
            <SelectValue<string>>
              {(state) => {
                const selected = state.selectedOption()
                const option = chapterOptions.find((opt) => opt.id === selected)
                return (
                  option?.label || chapterOptions[0]?.label || "No Chapters"
                )
              }}
            </SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
      </div>
      <div class="flex justify-end pr-6 xl:pr-8">
        <div class="min-w-20 text-center xl:min-w-24">
          {!props.dueFSRSCardsPromise ? (
            <Link to="/auth" class="text-sm italic xl:text-base">
              Login
            </Link>
          ) : (
            <Await
              promise={props.dueFSRSCardsPromise}
              fallback={
                <>
                  <div class="text-gray-400">
                    <span class="font-inter text-base font-bold xl:text-lg">
                      ...
                    </span>
                  </div>
                  <div class="text-muted-foreground text-xs xl:text-sm">
                    Loading...
                  </div>
                </>
              }
            >
              {(dueCards) => (
                <>
                  <div
                    class={
                      dueCards && dueCards.length > 0
                        ? "text-amber-400"
                        : "text-green-500"
                    }
                  >
                    <span class="font-inter text-base font-bold xl:text-lg">
                      {dueCards?.length || 0}
                    </span>
                  </div>
                  <div class="text-muted-foreground text-xs xl:text-sm">
                    {dueCards?.length === 0
                      ? "No reviews"
                      : `${dueCards?.length === 1 ? "Review" : "Reviews"} Due`}
                  </div>
                </>
              )}
            </Await>
          )}
        </div>
      </div>
    </div>
  )
}
