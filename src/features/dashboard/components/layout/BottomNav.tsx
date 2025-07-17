// features/dashboard/components/layout/BottomNav.tsx
import { createSignal } from "solid-js"
import { Link, useLocation } from "@tanstack/solid-router"
import { Home, Hammer, Search, User } from "lucide-solid"
import { cn } from "@/utils"

interface BottomNavProps {
  dailyProgressPercentage?: number
}

export function BottomNav(props: BottomNavProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = createSignal("home")
  const dailyProgress = () => props.dailyProgressPercentage || 65

  const navItems = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      href: "/dashboard",
    },
    {
      id: "tools",
      icon: Hammer,
      label: "Tools",
      href: "/tools",
    },
    {
      id: "progress",
      icon: null,
      label: `${dailyProgress()}%`,
      href: "/progress",
      isProgress: true,
    },
    {
      id: "search",
      icon: Search,
      label: "Search",
      href: "/search",
    },
    {
      id: "profile",
      icon: User,
      label: "Profile",
      href: "/profile",
    },
  ]

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
        )}
      >
        <div class="flex items-center justify-between" style="width: 400px;">
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={location().pathname === item.href}
              dailyProgress={dailyProgress()}
              progressOffset={progressOffset()}
              radius={radius}
              circumference={circumference}
              progressColor={getProgressColor()}
              progressColorLowOpacity={getProgressColorLowOpacity()}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function NavItem(props: {
  item: any
  isActive: boolean
  dailyProgress: number
  progressOffset: number
  radius: number
  circumference: number
  progressColor?: string
  progressColorLowOpacity?: string
  onClick: () => void
}) {
  const {
    item,
    isActive,
    dailyProgress,
    progressOffset,
    radius,
    circumference,
    progressColor,
    progressColorLowOpacity,
  } = props

  if (item.isProgress) {
    return (
      <Link
        to={item.href}
        onClick={props.onClick}
        class={cn(
          "group relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-200",
          "hover:scale-110",
        )}
      >
        {/* Progress Circle */}
        <div class="absolute inset-0 flex items-center justify-center">
          <svg class="h-14 w-14 -rotate-90 transform">
            <circle
              stroke-width="2.5"
              stroke={progressColorLowOpacity}
              fill="transparent"
              r={radius}
              cx="28"
              cy="28"
            />
            <circle
              class="transition-all duration-500 ease-out"
              stroke-width="2.5"
              stroke-dasharray={circumference}
              stroke-dashoffset={progressOffset}
              stroke-linecap="round"
              stroke={progressColor}
              fill="transparent"
              r={radius}
              cx="28"
              cy="28"
            />
          </svg>
        </div>

        <span class="text-primary relative z-10 text-xs font-bold">
          {dailyProgress}%
        </span>
      </Link>
    )
  }

  const Icon = item.icon

  return (
    <Link
      to={item.href}
      onClick={props.onClick}
      class={cn(
        "group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200",
        "hover:bg-card-foreground/60 hover:scale-110",
        isActive && "bg-card-foreground/60",
      )}
    >
      <Icon
        class={cn("h-5 w-5 transition-colors duration-200", "text-primary/80")}
      />
    </Link>
  )
}
