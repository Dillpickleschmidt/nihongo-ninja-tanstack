import { Button } from "@/components/ui/button"
import { GraduationCap, Pencil, LogIn, LogOut } from "lucide-solid"
import ModeToggle from "./ModeToggle"
import { Link, useLocation, useRouter } from "@tanstack/solid-router"
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
            <Avatar class="absolute -top-[0.4rem] left-0 min-h-12 min-w-12">
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
            href="/learn"
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
            href="/auth"
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
        {/* <li class="flex items-center">
          <Link to="/" class="relative flex items-center">
            <Avatar class="absolute -top-0.5 left-0">
              <AvatarImage src="/icons/ninja.png" />
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <div class="h-1 w-10" />
            <label class="ml-4 text-xl font-medium hover:cursor-pointer dark:text-[#BBBBBB]">
              Nihongo Ninja
            </label>
          </Link>
        </li>
        <li>
          <Button
            as="a"
            href="/learn"
            class="px-2 text-base font-normal sm:px-4"
            variant="ghost"
          >
            <span class={`border-b-2 ${active("/learn")} saturate-[50%]`}>
              Learn
            </span>
          </Button>
        </li>
        <li class="flex items-center gap-2">
          <Button
            as="a"
            href="/learn/sentence-practice"
            class="px-2 text-base font-normal sm:px-4"
            variant="ghost"
          >
            <span
              class={`border-b-2 ${active("/learn/sentence-practice")} saturate-[50%]`}
            >
              文
            </span>
            <Pencil size="16px" class="text-yellow-400 lg:ml-3" />
          </Button>
          <Button
            as="a"
            href="/learn/conjugation"
            class="px-2 text-base font-normal sm:px-4"
            variant="ghost"
          >
            <span
              class={`border-b-2 ${active("/learn/conjugation")} saturate-[50%]`}
            >
              活用
            </span>
            <GraduationCap size="20px" class="text-teal-400 lg:ml-3" />
          </Button>

          <div class="inline-flex saturate-[50%]">
            <ModeToggle />
          </div>
          <Button as="a"
            href="/auth"
            variant="ghost"
            class="flex flex-nowrap items-center p-0 text-base font-normal sm:px-4"
            // onClick={() => setIsLoginHintVisible(false)}
          >
            <span class="mr-2 text-sm font-bold text-red-500">Login</span>
          </Button>
        </li> */}
      </ul>
    </nav>
  )
}
