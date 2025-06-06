// features/dashboard/components/DashboardHeader.tsx
import { Link, useNavigate } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePageTransition } from "@/context/TransitionContext"

type CurrentTextbookChapters = Record<
  string,
  { title: string; chapter_number: number }
>

interface DashboardHeaderProps {
  currentChapterID: string
  currentTextbookChapters: CurrentTextbookChapters
  dailyProgress: number
}

export function DashboardHeader(props: DashboardHeaderProps) {
  const navigate = useNavigate({ from: "/dashboard" })
  // const { triggerAnimations, setUserHasNavigated } = usePageTransition()

  // Convert chapters object to array for Select options
  const chapterOptions = Object.entries(props.currentTextbookChapters).map(
    ([id, chapter]) => ({
      id,
      label: `Chapter ${chapter.chapter_number}`,
    }),
  )

  const handleChapterChange = (newChapterID: string) => {
    // Trigger animations and navigate
    // setUserHasNavigated(true)
    // triggerAnimations()
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
        <div class="text-center text-sm xl:text-base">
          <div>{props.dailyProgress}%</div>
          <div class="text-[0.5rem] xl:text-xs">Daily Progress</div>
        </div>
      </div>
    </div>
  )
}
