import { Link } from "@tanstack/solid-router"
import { ArrowRight, Clock, LucideIcon } from "lucide-solid"
import { cn } from "@/utils"
import { SmoothCard } from "@/components/SmoothCard"

export interface ImportOptionCardProps {
  href?: string
  state?: Record<string, any> // Add state prop
  onClick?: () => void
  title: string
  description: string
  icon: LucideIcon
  time: string
  accentColor: "blue" | "purple" | "orange" | "green"
  actionText?: string
}

export function ImportOptionCard(props: ImportOptionCardProps) {
  const accentConfig = {
    blue: {
      gradient: "from-blue-500/10 to-blue-600/5",
      border: "border-blue-500/20",
      ring: "ring-blue-500/50",
      text: "text-blue-400",
      iconBox: "bg-blue-500/20",
    },
    purple: {
      gradient: "from-purple-500/10 to-purple-600/5",
      border: "border-purple-500/20",
      ring: "ring-purple-500/50",
      text: "text-purple-400",
      iconBox: "bg-purple-500/20",
    },
    orange: {
      gradient: "from-orange-500/10 to-orange-600/5",
      border: "border-orange-500/20",
      ring: "ring-orange-500/50",
      text: "text-orange-400",
      iconBox: "bg-orange-500/20",
    },
    green: {
      gradient: "from-green-500/10 to-green-600/5",
      border: "border-green-500/20",
      ring: "ring-green-500/50",
      text: "text-green-400",
      iconBox: "bg-green-500/20",
    },
  }

  const styles = accentConfig[props.accentColor]

  const content = (
    <SmoothCard
      width={340}
      height={300}
      cornerRadius={24}
      border={true}
      borderClass={styles.border}
      class={cn(
        "bg-gradient-to-br shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-150",
        styles.gradient,
      )}
    >
      <div class="flex h-full flex-col p-8 text-left">
        {/* Header: Icon & Time */}
        <div class="mb-6 flex items-start justify-between">
          <div
            class={cn(
              "flex size-12 items-center justify-center rounded-xl transition-colors duration-200",
              styles.iconBox,
            )}
          >
            <props.icon class={cn("size-6", styles.text)} />
          </div>

          <div class="text-muted-foreground bg-black/20 flex items-center gap-1.5 rounded-md border border-white/5 px-2.5 py-1 text-xs font-medium">
            <Clock class="size-3" />
            {props.time}
          </div>
        </div>

        {/* Content */}
        <div class="flex flex-1 flex-col">
          <h3 class="text-foreground mb-2 text-lg font-bold md:text-xl">
            {props.title}
          </h3>
          <p class="text-muted-foreground mb-8 flex-1 text-sm leading-relaxed">
            {props.description}
          </p>

          {/* Action Footer */}
          <div class={cn("mt-auto flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors", styles.text)}>
            <span>{props.actionText || "Start Import"}</span>
            <ArrowRight class="size-3.5" />
          </div>
        </div>
      </div>
    </SmoothCard>
  )

  const containerClass = "group cursor-pointer transition-transform duration-150 hover:-translate-y-1 active:scale-[0.98] block"

  if (props.href) {
    return (
      <Link
        to={props.href}
        state={props.state} // Pass state to Link
        class={containerClass}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      onClick={props.onClick}
      class={containerClass}
    >
      {content}
    </button>
  )
}
