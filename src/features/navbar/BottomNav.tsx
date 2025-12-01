// features/navbar/BottomNav.tsx
import { Link, useLocation, useRouteContext } from "@tanstack/solid-router"
import { Home, Search, User } from "lucide-solid"
import { cn } from "@/utils"
import { userSettingsQueryOptions } from "@/query/query-options"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { Route as RootRoute } from "@/routes/__root"
import TextbookSelectorDialog from "@/features/homepage/pages/learning-path/components/TextbookSelectorDialog"

interface BottomNavProps {
  dailyProgressPercentage?: number
  class?: string
}

export function BottomNav(props: BottomNavProps) {
  const location = useLocation()
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))
  const activeTextbook = () => settingsQuery.data?.["active-learning-path"]

  const dailyProgress = () => props.dailyProgressPercentage ?? 65

  const navItems = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      href: "/",
    },
    {
      id: "vocab",
      icon: (
        <span class="font-medium text-[1.33rem] block -mb-px">
          あ
        </span>
      ),
      label: "Vocab",
      href: "/vocab",
    },
    {
      id: "review",
      icon: null,
      label: `${dailyProgress()}%`,
      href: "/review",
    },
    {
      id: "search",
      icon: Search,
      label: "Search",
      href: "/search",
    },
    {
      id: "settings",
      icon: User,
      label: "Settings",
      href: "/settings",
    },
  ]

  // Simple function to check if nav item is active
  const isActive = (href: string | (() => string)) => {
    const currentPath = location().pathname
    const hrefValue = typeof href === "function" ? href() : href

    if (hrefValue === "/learn") {
      return currentPath.startsWith("/learn")
    }
    return currentPath === hrefValue
  }

  // Calculate stroke-dashoffset for circular progress
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const progressOffset = () => circumference * (1 - dailyProgress() / 100)

  // Calculate smooth color progression: red-500 → yellow-500 → green-500
  const getProgressColor = () => {
    const progress = Math.max(0, Math.min(100, dailyProgress()))

    // Tailwind colors: red-500 = rgb(239, 68, 68), yellow-500 = rgb(234, 179, 8), green-500 = rgb(34, 197, 94)
    const red500 = [239, 68, 68]
    const yellow500 = [234, 179, 8]
    const green500 = [34, 197, 94]

    let r, g, b

    if (progress <= 50) {
      // Red to Yellow (0% to 50%)
      const ratio = progress / 50
      r = Math.round(red500[0] + (yellow500[0] - red500[0]) * ratio)
      g = Math.round(red500[1] + (yellow500[1] - red500[1]) * ratio)
      b = Math.round(red500[2] + (yellow500[2] - red500[2]) * ratio)
    } else {
      // Yellow to Green (50% to 100%)
      const ratio = (progress - 50) / 50
      r = Math.round(yellow500[0] + (green500[0] - yellow500[0]) * ratio)
      g = Math.round(yellow500[1] + (green500[1] - yellow500[1]) * ratio)
      b = Math.round(yellow500[2] + (green500[2] - yellow500[2]) * ratio)
    }

    return `rgb(${r}, ${g}, ${b})`
  }

  const getProgressColorLowOpacity = () => {
    const progress = Math.max(0, Math.min(100, dailyProgress()))

    const red500 = [239, 68, 68]
    const yellow500 = [234, 179, 8]
    const green500 = [34, 197, 94]

    let r, g, b

    if (progress <= 50) {
      const ratio = progress / 50
      r = Math.round(red500[0] + (yellow500[0] - red500[0]) * ratio)
      g = Math.round(red500[1] + (yellow500[1] - red500[1]) * ratio)
      b = Math.round(red500[2] + (yellow500[2] - red500[2]) * ratio)
    } else {
      const ratio = (progress - 50) / 50
      r = Math.round(yellow500[0] + (green500[0] - yellow500[0]) * ratio)
      g = Math.round(yellow500[1] + (green500[1] - yellow500[1]) * ratio)
      b = Math.round(yellow500[2] + (green500[2] - yellow500[2]) * ratio)
    }

    return `rgba(${r}, ${g}, ${b}, 0.3)`
  }

  return (
    <div class="fixed right-0 bottom-0 left-0 z-50">
      <div
        class={cn(
          "pb-safe flex items-center justify-center px-6",
          "bg-background/50 text-primary",
          "border-card-foreground/50 border-t backdrop-blur-lg transition-all duration-200",
          "shadow-lg shadow-black/10",
          props.class,
        )}
      >
        <div class="flex items-center justify-between" style="width: 400px;">
          {navItems.map((item, index) => {
            if (item.id === "review") {
              const active = isActive(item.href)
              const hrefValue = item.href
              return (
                <Link
                  to={hrefValue}
                  class={cn(
                    "group relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-200",
                    "hover:scale-110",
                    active && "scale-110",
                  )}
                >
                  {/* Progress Circle */}
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="h-14 w-14 -rotate-90 transform">
                      <circle
                        stroke-width="2.5"
                        stroke={getProgressColorLowOpacity()}
                        fill="transparent"
                        r={radius}
                        cx="28"
                        cy="28"
                      />
                      <circle
                        class="transition-all duration-500 ease-out"
                        stroke-width="2.5"
                        stroke-dasharray={circumference}
                        stroke-dashoffset={progressOffset()}
                        stroke-linecap="round"
                        stroke={getProgressColor()}
                        fill="transparent"
                        r={radius}
                        cx="28"
                        cy="28"
                      />
                    </svg>
                  </div>

                  <span
                    class={cn(
                      "relative z-10 font-bold transition-colors duration-200",
                      dailyProgress() === 100
                        ? "text-sm text-green-500"
                        : cn(
                          "text-xs",
                          active ? "text-primary" : "text-primary/80",
                        ),
                    )}
                  >
                    {dailyProgress() === 100 ? "百" : `${dailyProgress()}%`}
                  </span>
                </Link>
              )
            }

            const active = isActive(item.href)
            const hrefValue = item.href
            const isLucideIcon = typeof item.icon === "function"

            const renderIcon = () => {
              if (isLucideIcon) {
                const Icon = item.icon as typeof Home
                return (
                  <Icon
                    class={cn(
                      "h-5 w-5 transition-colors duration-200",
                      active ? "text-primary" : "text-primary/60",
                    )}
                  />
                )
              }
              return (
                <span
                  class={cn(
                    "text-lg transition-colors duration-200",
                    active ? "text-primary" : "text-primary/60",
                  )}
                >
                  {item.icon}
                </span>
              )
            }

            // Special handling for Learn nav item when in getting_started
            if (item.id === "learn" && activeTextbook() === "getting_started") {
              return (
                <TextbookSelectorDialog userId={userId}>
                  <div
                    id={"tour-" + item.id}
                    class={cn(
                      "group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-200",
                      "hover:bg-card-foreground/20 hover:dark:bg-card-foreground/60 hover:scale-110",
                      active &&
                      "bg-card-foreground/10 dark:bg-card-foreground/60 scale-110",
                    )}
                  >
                    {renderIcon()}
                  </div>
                </TextbookSelectorDialog>
              )
            }

            return (
              <Link
                id={"tour-" + item.id}
                to={hrefValue}
                class={cn(
                  "group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200",
                  "hover:bg-card-foreground/20 hover:dark:bg-card-foreground/60 hover:scale-110",
                  active &&
                  "bg-card-foreground/10 dark:bg-card-foreground/60 scale-110",
                )}
              >
                {renderIcon()}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
