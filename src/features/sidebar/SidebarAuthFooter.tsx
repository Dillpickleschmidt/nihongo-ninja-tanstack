import { Show, createSignal } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { useQuery } from "@tanstack/solid-query"
import { ChevronDown, ChevronUp, LogIn, LogOut, Settings } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getUser, type User } from "@/lib/auth"
import { autumnCustomerQueryOptions } from "@/query/query-options"
import { hasActiveProSubscription } from "@/features/billing/model"
import { BackgroundAssignmentDialog } from "@/features/backgrounds/components/BackgroundAssignmentDialog"
import { BackgroundPreviewMedia } from "@/features/backgrounds/components/BackgroundPreviewMedia"
import { resolveBackground } from "@/features/backgrounds/resolveBackground"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { usePreferences } from "@/lib/preferences"

export function SidebarAuthFooter(props: { onSignOut?: () => void }) {
  const user = getUser()

  return (
    <Show when={user()} fallback={<SignedOutFooter />}>
      {(signedInUser) => (
        <SignedInFooter user={signedInUser()} onSignOut={props.onSignOut} />
      )}
    </Show>
  )
}

function SignedOutFooter() {
  return (
    <Link to="/auth">
      <Button
        variant="ghost"
        class="w-full justify-start gap-2 text-primary/60 hover:text-primary"
      >
        <LogIn class="size-3.5 2xl:size-4" />
        Sign In
      </Button>
    </Link>
  )
}

function SignedInFooter(props: { user: User; onSignOut?: () => void }) {
  const customerQuery = useQuery(() => autumnCustomerQueryOptions())
  const { preferences } = usePreferences()
  const [isBackgroundDialogOpen, setIsBackgroundDialogOpen] = createSignal(false)

  const planLabel = () => {
    if (customerQuery.data === undefined) return "Loading"
    return hasActiveProSubscription(customerQuery.data) ? "Pro" : "Free"
  }

  const displayName = () => props.user.name
  const initials = () => displayName().trim().charAt(0).toUpperCase()
  const backgroundTarget = () => ({
    pathId: preferences().activeLearningPath,
    chapterSlug: preferences().activeChapter,
  })
  const currentBackground = () =>
    resolveBackground(
      preferences().activeLearningPath,
      preferences().activeChapter,
      preferences().backgroundOverrides,
    ).background

  return (
    <Popover placement="top-start">
      <PopoverTrigger
        as={Button}
        variant="ghost"
        class="h-auto w-full justify-between gap-3 px-2 py-2 text-left text-primary/70 hover:bg-dynamic-accent/20 hover:text-primary"
      >
        <div class="flex min-w-0 items-center gap-2.5">
          <Avatar class="size-7 bg-dynamic-accent/15">
            <AvatarFallback class="bg-transparent text-xs/none font-semibold text-dynamic-accent">
              <span class="[text-box:trim-both_cap_alphabetic]">
                {initials()}
              </span>
            </AvatarFallback>
          </Avatar>
          <div class="min-w-0">
            <p class="truncate text-sm font-medium">{displayName()}</p>
            <p class="text-xs text-primary/35">{planLabel()} plan</p>
          </div>
        </div>
        <ChevronUp class="size-3.5 shrink-0 text-primary/35" />
      </PopoverTrigger>

      <PopoverContent class="w-72 border-white/10 bg-neutral-950 p-3 text-white">
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium">{displayName()}</p>
              <p class="truncate text-xs text-white/45">{props.user.email}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsBackgroundDialogOpen(true)}
              aria-label="Change current chapter background"
              class="group relative h-10 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-white/20"
            >
              <BackgroundPreviewMedia
                item={currentBackground()}
                width={160}
                class="h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div class="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-1 text-white/80 backdrop-blur-md transition-colors group-hover:bg-white/15 group-hover:text-white">
                <ChevronDown class="size-3" />
              </div>
            </button>
          </div>

          <div class="flex items-center justify-between text-sm">
            <span class="text-white/45">Current plan</span>
            <span class="font-medium text-dynamic-accent">{planLabel()}</span>
          </div>

          <div class="h-px bg-white/10" />

          <div class="grid gap-1">
            <Link to="/settings">
              <Button
                variant="ghost"
                class="w-full justify-start gap-2 px-2 text-white/70 hover:bg-white/5 hover:text-white"
              >
                <Settings class="size-4" />
                Settings
              </Button>
            </Link>
            <Button
              variant="ghost"
              onClick={props.onSignOut}
              class="w-full justify-start gap-2 px-2 text-white/70 hover:bg-white/5 hover:text-red-300"
            >
              <LogOut class="size-4" />
              Sign out
            </Button>
          </div>
        </div>
      </PopoverContent>

      <BackgroundAssignmentDialog
        open={isBackgroundDialogOpen()}
        onOpenChange={setIsBackgroundDialogOpen}
        contextLabel={`Current chapter · Chapter ${getChapterDisplayNumber(preferences().activeChapter)}`}
        target={backgroundTarget()}
      />
    </Popover>
  )
}
