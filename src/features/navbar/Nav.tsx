import { Dynamic } from "solid-js/web"
import { Link, useLocation } from "@tanstack/solid-router"
import {
  House,
  Search,
  GraduationCap,
  Settings,
  type LucideIcon,
} from "lucide-solid"
import { cn } from "@/utils"

// --- Shared Types ---
interface NavItem {
  id: string
  label: string
  href: string
  icon: LucideIcon | null
}

interface NavProps {
  dailyProgressPercentage?: number
  class?: string
  style?: Record<string, string>
  onSignOut?: () => void
  ref?: (el: HTMLDivElement) => void
}

// --- Shared Logic ---
const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/dashboard", icon: House },
  { id: "guides", label: "Guides", href: "/guides", icon: GraduationCap },
  { id: "search", label: "Search", href: "/search", icon: Search },
  { id: "tools", label: "Tools", href: "/settings", icon: Settings },
]

function useNavLogic(dailyProgress: number) {
  const location = useLocation()

  const isActive = (href: string) => {
    const currentPath = location().pathname
    if (href === "/learn") return currentPath.startsWith("/learn")
    return currentPath === href
  }

  const getProgressColor = (opacity: number = 1) => {
    const progress = Math.max(0, Math.min(100, dailyProgress))
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

    return opacity === 1
      ? `rgb(${r}, ${g}, ${b})`
      : `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  return {
    isActive,
    getProgressColor,
  }
}

// --- ProgressCircle Component ---
interface ProgressCircleProps {
  size: number
  radius: number
  strokeWidth: number
  progress: number
  progressColor: string
  bgColor: string
  class?: string
}

function ProgressCircle(props: ProgressCircleProps) {
  const circumference = 2 * Math.PI * props.radius
  const offset = circumference * (1 - props.progress / 100)
  const center = props.size / 2

  return (
    <svg
      class={cn("-rotate-90", props.class)}
      viewBox={`0 0 ${props.size} ${props.size}`}
    >
      <circle
        cx={center}
        cy={center}
        r={props.radius}
        fill="none"
        stroke-width={props.strokeWidth}
        stroke={props.bgColor}
      />
      <circle
        cx={center}
        cy={center}
        r={props.radius}
        fill="none"
        stroke-width={props.strokeWidth}
        stroke={props.progressColor}
        stroke-dasharray={String(circumference)}
        stroke-dashoffset={String(offset)}
        stroke-linecap="round"
        class="transition-all duration-500 ease-out"
      />
    </svg>
  )
}

// --- BottomNav (Mobile) ---
export function BottomNav(props: NavProps) {
  const dailyProgress = () => props.dailyProgressPercentage ?? 65
  const nav = useNavLogic(dailyProgress())

  const bottomNavItems = [
    ...navItems.slice(0, 2), // Home, Vocab
    { id: "review", label: `${dailyProgress()}%`, href: "/review", icon: null },
    ...navItems.slice(2), // Search, Settings
  ]

  return (
    <div class={cn("fixed right-0 bottom-0 left-0 z-40")}>
      <div
        class={cn(
          "pb-safe flex items-center justify-center px-6",
          "bg-background/50 text-primary",
          "border-card-foreground/50 border-t backdrop-blur-lg transition-all duration-200",
          "shadow-lg shadow-black/10",
          props.class,
        )}
      >
        <nav class="flex items-center justify-between" style="width: 400px;">
          {bottomNavItems.map((item) => {
            if (item.id === "review") {
              const active = nav.isActive(item.href)
              return (
                <Link
                  to={item.href}
                  class={cn(
                    "group relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-200",
                    "hover:scale-110",
                    active && "scale-110",
                  )}
                >
                  {/* Progress Circle */}
                  <div class="absolute inset-0 flex items-center justify-center">
                    <ProgressCircle
                      size={56}
                      radius={18}
                      strokeWidth={2.5}
                      progress={dailyProgress()}
                      progressColor={nav.getProgressColor()}
                      bgColor={nav.getProgressColor(0.3)}
                      class="h-14 w-14"
                    />
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

            const active = nav.isActive(item.href)

            return (
              <Link
                id={"tour-" + item.id}
                to={item.href}
                class={cn(
                  "group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200",
                  "hover:bg-card-foreground/20 hover:dark:bg-card-foreground/60 hover:scale-110",
                  active &&
                    "bg-card-foreground/10 dark:bg-card-foreground/60 scale-110",
                )}
              >
                <Dynamic
                  component={item.icon as LucideIcon}
                  class={cn(
                    "h-5 w-5 transition-colors duration-200",
                    active ? "text-primary" : "text-primary/60",
                  )}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
