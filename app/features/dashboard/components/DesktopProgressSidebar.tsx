// features/dashboard/components/DesktopProgressSidebar.tsx
import { Show } from "solid-js"
import { TrendingUp, Target, Award } from "lucide-solid"
import { WordHierarchy } from "./WordHierarchy"
import type { FullHierarchyData } from "@/data/wanikani/types"
import { cn } from "@/utils"

interface DesktopProgressSidebarProps {
  data: FullHierarchyData | null
}

export function DesktopProgressSidebar(props: DesktopProgressSidebarProps) {
  return (
    <div class="space-y-4">
      {/* Compact Stats Cards */}
      <div class="space-y-2">
        <h2 class="text-lg font-semibold">Your Progress</h2>

        <div class="space-y-2">
          <StatCard
            icon={TrendingUp}
            title="Study Streak"
            value="12 days"
            gradient="from-green-600/20 to-emerald-600/10"
            iconColor="text-green-400"
          />

          <StatCard
            icon={Target}
            title="Weekly Goal"
            value="85%"
            gradient="from-blue-600/20 to-cyan-600/10"
            iconColor="text-blue-400"
          />

          <StatCard
            icon={Award}
            title="Level"
            value="Intermediate"
            gradient="from-purple-600/20 to-indigo-600/10"
            iconColor="text-purple-400"
          />
        </div>
      </div>

      {/* Enhanced Word Hierarchy with scrollable sections */}
      <div class="relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 p-4 backdrop-blur-sm">
        <WordHierarchy data={props.data} variant="desktop" />
      </div>

      {/* Quick Actions */}
      {/* <div class="space-y-3"> */}
      {/*   <h3 class="text-base font-semibold">Quick Actions</h3> */}
      {/*   <div class="space-y-1"> */}
      {/*     <QuickActionButton */}
      {/*       title="Practice Flashcards" */}
      {/*       subtitle="Review vocabulary" */}
      {/*       emoji="🔄" */}
      {/*     /> */}
      {/*     <QuickActionButton */}
      {/*       title="Take Quiz" */}
      {/*       subtitle="Test your knowledge" */}
      {/*       emoji="📝" */}
      {/*     /> */}
      {/*     <QuickActionButton */}
      {/*       title="Study Plan" */}
      {/*       subtitle="View schedule" */}
      {/*       emoji="📅" */}
      {/*     /> */}
      {/*   </div> */}
      {/* </div> */}
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
        "rounded-lg border border-white/10 p-3 backdrop-blur-sm",
        "bg-gradient-to-br transition-all duration-200 hover:scale-[1.01] hover:shadow-lg",
      )}
      style={`background-image: linear-gradient(to bottom right, ${props.gradient})`}
    >
      <div class="flex items-center gap-2">
        <div class="rounded-md bg-white/10 p-1.5">
          <Icon class={cn("h-4 w-4", props.iconColor)} />
        </div>
        <div class="min-w-0 flex-1">
          <div class="text-muted-foreground text-xs font-medium">
            {props.title}
          </div>
          <div class="text-sm font-bold">{props.value}</div>
        </div>
      </div>
    </div>
  )
}

function QuickActionButton(props: {
  title: string
  subtitle: string
  emoji: string
}) {
  return (
    <button class="group flex w-full items-center gap-2 rounded-md border border-white/5 bg-white/2 p-2 text-left transition-colors hover:bg-white/5">
      <span class="text-sm">{props.emoji}</span>
      <div class="min-w-0 flex-1">
        <div class="group-hover:text-primary text-xs font-medium transition-colors">
          {props.title}
        </div>
        <div class="text-muted-foreground text-xs">{props.subtitle}</div>
      </div>
    </button>
  )
}
