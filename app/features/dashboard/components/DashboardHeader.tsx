// features/dashboard/components/DashboardHeader.tsx
import { Link, useNavigate } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

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
    <div class="grid grid-cols-3 pt-10 text-xl font-bold">
      <Link to="/" class="-mt-2 pl-8">
        <Avatar class="h-11 w-11">
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
            class="text-center justify-center flex space-x-2 border-none text-lg -mt-0.5 font-semibold"
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

      <div class="flex justify-end pr-6">
        <div class="text-center text-sm">
          <div>{props.dailyProgress}%</div>
          <div class="text-[0.5rem]">Daily Progress</div>
        </div>
      </div>
    </div>
  )
}
