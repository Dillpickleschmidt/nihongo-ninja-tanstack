// features/dashboard/components/content/user/UserOverview.tsx
import { BookOpen, Clock, Target, TrendingUp } from "lucide-solid"
import { cn } from "@/utils"

interface UserOverviewProps {
  variant: "mobile" | "desktop"
}

export function UserOverview(props: UserOverviewProps) {
  if (props.variant === "mobile") {
    return (
      <div class="mb-8 px-6">
        <div class="mb-4">
          <h2 class="text-xl font-bold">Your Progress</h2>
          <p class="text-muted-foreground text-sm">Study activity overview</p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <StatCard
            icon={BookOpen}
            title="Total Cards"
            value="305"
            gradient="from-blue-600/20 to-cyan-600/10"
            iconColor="text-blue-400"
          />
          <StatCard
            icon={Clock}
            title="Study Time"
            value="2.5h"
            gradient="from-green-600/20 to-emerald-600/10"
            iconColor="text-green-400"
          />
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div class="space-y-3">
      <h3 class="text-muted-foreground text-lg font-semibold">Your Activity</h3>
      <div class="scrollbar-hide max-h-[142px] space-y-2 overflow-x-visible overflow-y-auto">
        <div class="grid grid-cols-2 gap-3">
          <StatCard
            icon={BookOpen}
            title="Total Cards"
            value="305"
            gradient="from-blue-600/20 to-cyan-600/10"
            iconColor="text-blue-400"
          />
          <StatCard
            icon={Clock}
            title="Study Time Today"
            value="2.5h"
            gradient="from-green-600/20 to-emerald-600/10"
            iconColor="text-green-400"
          />
          <StatCard
            icon={Target}
            title="Weekly Goal"
            value="80%"
            gradient="from-purple-600/20 to-indigo-600/10"
            iconColor="text-purple-400"
          />
          <StatCard
            icon={TrendingUp}
            title="Current Streak"
            value="8 days"
            gradient="from-orange-600/20 to-pink-600/10"
            iconColor="text-orange-400"
          />
        </div>
      </div>
    </div>
  )
}

function StatCard(props: {
  icon: any
  title: string
  value: string
  gradient: string
  iconColor: string
}) {
  const Icon = props.icon

  return (
    <div
      class={cn(
        "rounded-lg border border-white/10 p-3 backdrop-blur-sm transition-all duration-200 hover:scale-[1.01]",
        "bg-gradient-to-br",
      )}
      style={`background-image: linear-gradient(to bottom right, ${props.gradient})`}
    >
      <div class="flex items-start justify-between">
        <div class="rounded-md bg-white/10 p-1.5">
          <Icon class={cn("h-4 w-4", props.iconColor)} />
        </div>
      </div>
      <div class="mt-2">
        <div class="text-lg font-bold">{props.value}</div>
        <div class="text-muted-foreground text-xs">{props.title}</div>
      </div>
    </div>
  )
}
