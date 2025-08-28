// Nav.tsx
import { Button } from "@/components/ui/button"
import ModeToggle from "../navbar/ModeToggle"
import { Link, useLocation } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Nav() {
  const location = useLocation()
  const active = (path: string) =>
    location().pathname === path
      ? "text-primary dark:text-orange-200"
      : "text-foreground/80 hover:text-foreground dark:text-orange-100/70 hover:dark:text-orange-100"

  return (
    <nav class="border-border/40 bg-background/70 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Left: Logo + Brand */}
        <Link to="/" class="relative flex items-center">
          <Avatar class="h-9 w-9">
            <AvatarImage src="/icons/ninja.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <span class="ml-3 text-lg font-semibold tracking-tight dark:text-orange-200">
            Nihongo Ninja
          </span>
        </Link>

        {/* Right: Actions */}
        <div class="hidden items-center gap-2 sm:flex">
          <Link
            to="/dashboard"
            class={`transition-colors ${active("/dashboard")}`}
          >
            <Button variant="ghost" class="px-3">
              <span class="font-medium">日本語</span>
            </Button>
          </Link>

          {/* <Link to="/pricing" class={`transition-colors ${active("/pricing")}`}> */}
          {/*   <Button variant="ghost" class="px-3"> */}
          {/*     <span>Pricing</span> */}
          {/*   </Button> */}
          {/* </Link> */}

          <Link to="/dashboard">
            <Button variant="ghost" class="ml-1 px-3">
              <span class="text-primary font-bold saturate-50 dark:text-orange-200">
                Dive in! →
              </span>
            </Button>
          </Link>

          <div class="ml-1">
            <ModeToggle />
          </div>
        </div>

        {/* Compact for small screens */}
        <div class="flex items-center gap-2 sm:hidden">
          <Link to="/dashboard">
            <Button size="sm" variant="secondary">
              日本語
            </Button>
          </Link>
          <Link to="/pricing">
            <Button size="sm" variant="ghost">
              Pricing
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="sm" variant="ghost">
              <span class="text-primary font-bold dark:text-orange-200">
                Dive in! →
              </span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
