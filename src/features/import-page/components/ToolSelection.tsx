import { cn } from "@/utils"
import { SmoothCardLink } from "@/components/SmoothCard"
import { Sword, Link as LinkIcon } from "lucide-solid"

export function ToolSelection() {
  return (
    <div class="flex flex-col items-center gap-8">
      <div class="mx-auto max-w-5xl text-center">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Choose Your <span class="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Primary Tool</span>
        </h1>
        <p class="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
          Select which spaced-repetition system you want to use for your learning.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ToolCard
          title="Nihongo Ninja"
          description="Our built-in FSRS system. Best for a streamlined, all-in-one experience."
          icon={Sword}
          to="nihongo"
          accentColor="blue"
        />
        <ToolCard
          title="Anki (External)"
          description="Connect to Anki desktop. Best if you already have an established Anki workflow."
          icon={LinkIcon}
          to="anki"
          accentColor="purple"
        />
      </div>
    </div>
  )
}

interface ToolCardProps {
  title: string
  description: string
  icon: any
  to: string
  accentColor: "blue" | "purple"
}

function ToolCard(props: ToolCardProps) {

  const styles = {
    blue: {
      gradient: "from-blue-500/10 to-blue-600/5",
      border: "border-blue-500/20",
      ring: "ring-blue-500/50",
      text: "text-blue-400",
      iconBg: "bg-blue-500/20",
    },
    purple: {
      gradient: "from-purple-500/10 to-purple-600/5",
      border: "border-purple-500/20",
      ring: "ring-purple-500/50",
      text: "text-purple-400",
      iconBg: "bg-purple-500/20",
    },
  }[props.accentColor]

  return (
    <SmoothCardLink
      to={props.to}
      width={320}
      height={380}
      cornerRadius={24}
      border={true}
      borderClass={styles.border}
      class={cn(
        "bg-gradient-to-br shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-150",
        styles.gradient,
      )}
    >
      <div class="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
        <div class={cn("flex size-20 items-center justify-center rounded-2xl transition-colors", styles.iconBg)}>
          <props.icon class={cn("size-10", styles.text)} />
        </div>

        <div>
          <h3 class="mb-3 text-2xl font-bold text-white">{props.title}</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">
            {props.description}
          </p>
        </div>

        <div class={cn("mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider", styles.text)}>
          <span>Select</span>
          <Sword class="size-4 rotate-90" />
        </div>
      </div>
    </SmoothCardLink>
  )
}
