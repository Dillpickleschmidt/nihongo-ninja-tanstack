// Nav.tsx
import { Button } from "@/components/ui/button"
import ModeToggle from "../navbar/ModeToggle"
import { Link, useLocation } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Nav() {
  const location = useLocation()
  const active = (path: string) =>
    location().pathname === path
      ? "border-orange-200 saturate-[50%]"
      : "border-transparent"

  return (
    <nav class="bg-background relative z-50">
      <ul class="mx-auto grid max-w-6xl grid-cols-3 px-2 pt-8 pb-6 sm:px-3 dark:text-orange-200 [&>*]:items-center">
        <li class="flex w-full">
          <Link to="/" class="relative flex items-center">
            <Avatar class="absolute -top-[0.4rem] left-0 min-h-12 min-w-12 bg-red-500/50">
              <AvatarImage src="/icons/ninja.png" />
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <div class="h-1 w-10" />
            <label class="ml-5 text-xl font-medium saturate-50 hover:cursor-pointer dark:text-orange-200">
              Nihongo Ninja
            </label>
          </Link>
        </li>
        <li class="flex w-full justify-center">
          <Button
            as="a"
            href="/dashboard"
            class="px-2 text-base font-normal sm:px-4"
            variant="ghost"
          >
            <span
              class={`border-b-2 ${active("/learn")} text-lg font-medium saturate-[50%]`}
            >
              日本語
            </span>
          </Button>
        </li>
        <li class="flex w-full justify-end">
          <div class="saturate-[50%]">
            <ModeToggle />
          </div>
          <Button
            as="a"
            href="/dashboard"
            variant="ghost"
            class="text-primary-foreground dark:border-secondary/50 dark:border-r-secondary/50 ml-4 rounded-lg border-2 dark:border-l-orange-200/50"
            // onClick={() => setIsLoginHintVisible(false)}
          >
            <span class="text-primary font-bold saturate-50 dark:text-orange-200">
              Dive in! →
            </span>
            {/* <LogIn class="h-4 w-4 pt-0.5 saturate-[50%]" /> */}
          </Button>
        </li>
      </ul>
    </nav>
  )
}
