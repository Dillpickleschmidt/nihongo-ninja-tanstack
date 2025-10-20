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
    <nav class="sticky top-0 z-50 flex h-16 w-full items-center justify-between overflow-hidden px-6 py-2">
      <div />
      <Button class="h-8.5 border-2 border-black bg-indigo-400 opacity-70 transition-opacity duration-200 hover:bg-indigo-400 hover:opacity-100">
        Login
      </Button>
    </nav>
  )
}
