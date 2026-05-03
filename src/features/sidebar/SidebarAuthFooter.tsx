import { Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { useQuery } from "@tanstack/solid-query"
import { ChevronUp, LogIn, LogOut, Settings } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getUser } from "@/lib/auth"
import { autumnCustomerQueryOptions } from "@/query/query-options"
import { hasActiveProSubscription } from "@/features/billing/model"

export function SidebarAuthFooter(props: { onSignOut?: () => void }) {
  const user = getUser()
  const customerQuery = useQuery(() => ({
    ...autumnCustomerQueryOptions(),
    enabled: !!user(),
  }))

  const planLabel = () => {
    if (customerQuery.data === undefined) return "Loading"
    return hasActiveProSubscription(customerQuery.data) ? "Pro" : "Free"
  }

  return (
    <Show
      when={user()}
      fallback={
        <Link to="/auth">
          <Button
            variant="ghost"
            class="w-full justify-start gap-2 text-primary/60 hover:text-primary"
          >
            <LogIn class="size-3.5 2xl:size-4" />
            Sign In
          </Button>
        </Link>
      }
    >
      {(signedInUser) => {
        const displayName = signedInUser().name
        const initials = displayName.trim().charAt(0).toUpperCase()

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
                      {initials}
                    </span>
                  </AvatarFallback>
                </Avatar>
                <div class="min-w-0">
                  <p class="truncate text-sm font-medium">{displayName}</p>
                  <p class="text-xs text-primary/35">{planLabel()} plan</p>
                </div>
              </div>
              <ChevronUp class="size-3.5 shrink-0 text-primary/35" />
            </PopoverTrigger>

            <PopoverContent class="w-72 border-white/10 bg-neutral-950 p-3 text-white">
              <div class="space-y-3">
                <div>
                  <p class="truncate text-sm font-medium">{displayName}</p>
                  <p class="truncate text-xs text-white/45">
                    {signedInUser().email}
                  </p>
                </div>

                <div class="flex items-center justify-between text-sm">
                  <span class="text-white/45">Current plan</span>
                  <span class="font-medium text-dynamic-accent">
                    {planLabel()}
                  </span>
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
          </Popover>
        )
      }}
    </Show>
  )
}
