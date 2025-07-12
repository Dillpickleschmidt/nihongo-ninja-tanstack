// features/dashboard/components/content/service/ServiceOverview.tsx
import { Play, BarChart3, Calendar, Target } from "lucide-solid"
import { cn } from "@/utils"
import type { ServiceType } from "@/features/service-config/types"

interface ServiceOverviewProps {
  serviceId: ServiceType
  stats: {
    totalDueCards: number
    studiedToday: number
    currentStreak: number
    accuracy: number
  }
  variant: "mobile" | "desktop"
}

export function ServiceOverview(props: ServiceOverviewProps) {
  const getServiceTheme = (serviceId: ServiceType) => {
    switch (serviceId) {
      case "anki":
        return {
          primary: "text-blue-400",
          gradient: "from-blue-600/20 to-cyan-600/10",
          accent: "bg-blue-400/10",
        }
      case "wanikani":
        return {
          primary: "text-pink-400",
          gradient: "from-pink-600/20 to-purple-600/10",
          accent: "bg-pink-400/10",
        }
      case "jpdb":
        return {
          primary: "text-green-400",
          gradient: "from-green-600/20 to-emerald-600/10",
          accent: "bg-green-400/10",
        }
      default:
        return {
          primary: "text-blue-400",
          gradient: "from-gray-600/20 to-slate-600/10",
          accent: "bg-gray-400/10",
        }
    }
  }

  const theme = getServiceTheme(props.serviceId)

  if (props.variant === "mobile") {
    return (
      <div class="mt-6 px-6">
        <div class="mb-4">
          <h2 class="text-xl font-bold">
            {props.serviceId.charAt(0).toUpperCase() + props.serviceId.slice(1)}{" "}
            Overview
          </h2>
          <p class="text-muted-foreground text-sm">Your progress summary</p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <StatCard
            icon={Play}
            title="Due Cards"
            value={props.stats.totalDueCards.toString()}
            theme={theme}
          />
          <StatCard
            icon={Target}
            title="Studied Today"
            value={props.stats.studiedToday.toString()}
            theme={theme}
          />
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div class="space-y-3">
      <div class="flex items-center justify-between px-8">
        <div>
          <h2 class="text-2xl font-bold">
            {props.serviceId.charAt(0).toUpperCase() + props.serviceId.slice(1)}{" "}
            Dashboard
          </h2>
          <p class="text-muted-foreground">
            Your study progress and statistics
          </p>
        </div>
        <button
          class={cn(
            "flex items-center gap-2 rounded-lg px-4 py-2 transition-colors",
            theme.accent,
            theme.primary,
            "hover:opacity-80",
          )}
        >
          <Play class="h-4 w-4" />
          <span class="text-sm font-medium">Start Studying</span>
        </button>
      </div>

      {/* Stats grid */}
      <div class="mx-7 grid grid-cols-4 gap-4 px-1 pt-3">
        <StatCard
          icon={Play}
          title="Due Cards"
          value={props.stats.totalDueCards.toString()}
          theme={theme}
        />
        <StatCard
          icon={Target}
          title="Studied Today"
          value={props.stats.studiedToday.toString()}
          theme={theme}
        />
        <StatCard
          icon={Calendar}
          title="Current Streak"
          value={`${props.stats.currentStreak} days`}
          theme={theme}
        />
        <StatCard
          icon={BarChart3}
          title="Accuracy"
          value={`${props.stats.accuracy}%`}
          theme={theme}
        />
      </div>
    </div>
  )
}

function StatCard(props: {
  icon: any
  title: string
  value: string
  theme: {
    primary: string
    gradient: string
    accent: string
  }
}) {
  const Icon = props.icon

  return (
    <div
      class={cn(
        "rounded-2xl border border-white/10 p-4 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02]",
        "bg-gradient-to-br",
      )}
      style={`background-image: linear-gradient(to bottom right, ${props.theme.gradient})`}
    >
      <div class="flex items-start justify-between">
        <div class={cn("rounded-lg p-2", props.theme.accent)}>
          <Icon class={cn("h-5 w-5", props.theme.primary)} />
        </div>
      </div>
      <div class="mt-3">
        <div class="text-2xl font-bold">{props.value}</div>
        <div class="text-muted-foreground text-sm">{props.title}</div>
      </div>
    </div>
  )
}
