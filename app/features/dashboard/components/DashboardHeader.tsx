// features/dashboard/components/DashboardHeader.tsx
import { Link } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardHeaderProps {
  chapterTitle: string
  dailyProgress: number
}

export function DashboardHeader(props: DashboardHeaderProps) {
  return (
    <div class="grid grid-cols-3 pt-10 text-xl font-bold">
      <Link to="/" class="-mt-2 pl-8">
        <Avatar class="h-11 w-11">
          <AvatarImage src="/icons/ninja.png" class="h-full w-full" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
      </Link>
      <h1 class="-mt-1 text-center font-semibold">{props.chapterTitle}</h1>
      <div class="flex justify-end pr-6">
        <div class="text-center text-xs">
          <div>{props.dailyProgress}%</div>
          <div class="text-[0.5rem]">Daily Progress</div>
        </div>
      </div>
    </div>
  )
}
