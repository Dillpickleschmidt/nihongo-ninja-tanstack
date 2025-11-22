// src/routes/_home/import/index.tsx
import { createFileRoute, Link } from "@tanstack/solid-router"
import {
  BookOpenCheck,
  UploadCloud,
  Sparkles,
  ArrowRight,
  Clock,
} from "lucide-solid"
import { queryKeys } from "@/query/utils/query-keys"
import { cn } from "@/utils"

export const Route = createFileRoute("/_home/import/")({
  loader: async ({ context }) => {
    // This ensures the background is set correctly for all import pages
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 4,
      backgroundOpacityOffset: -0.22,
      showGradient: true,
    })
  },
  component: ImportGatewayPage,
})

function ImportGatewayPage() {
  return (
    <div class="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden pt-12 pb-24 md:py-24">
      <div class="relative container flex flex-col items-center">
        {/* Hero Header */}
        <div class="mb-4 max-w-6xl space-y-4 text-center sm:mb-16">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Personalize Your{" "}
            {/* Simplified Gradient: Matching your blue/purple brand identity */}
            <span class="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h1>
          <p class="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Tell us what you already know and what you want to learn next.
          </p>
        </div>

        {/* The Triad Grid */}
        <div class="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Option 1: Manual */}
          <ImportOptionCard
            href="/import/manual"
            title="Mark What You Know"
            description="Manually mark vocabulary and grammar you already know."
            icon={BookOpenCheck}
            time="15-30m"
            accentColor="blue"
          />

          {/* Option 2: Automatic */}
          <ImportOptionCard
            href="/import/automatic"
            title="Upload History"
            description="Upload your review history from spaced-repetition apps like Anki."
            icon={UploadCloud}
            time="~5m"
            accentColor="purple"
          />

          {/* Option 3: Custom Path */}
          <ImportOptionCard
            href="/import/learning-path"
            title="Generate Custom Path"
            description="Upload content to create a personalized learning path based on content you want to understand."
            icon={Sparkles}
            time="~5m"
            accentColor="orange"
          />
        </div>
      </div>
    </div>
  )
}

// --- Sub-Components ---

interface ImportOptionCardProps {
  href: string
  title: string
  description: string
  icon: typeof BookOpenCheck
  time: string
  accentColor: "blue" | "purple" | "orange"
}

function ImportOptionCard(props: ImportOptionCardProps) {
  const accentConfig = {
    blue: {
      wrapper: "hover:border-transparent hover:bg-blue-500/[0.08]",
      iconBox: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    purple: {
      wrapper: "hover:border-transparent hover:bg-purple-500/[0.08]",
      iconBox: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    orange: {
      wrapper: "hover:border-transparent hover:bg-orange-500/[0.08]",
      iconBox: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
  }

  const styles = accentConfig[props.accentColor]

  return (
    <Link
      to={props.href}
      class={cn(
        // BASE LAYOUT
        "relative flex flex-col overflow-hidden rounded-xl border p-6 transition-all duration-200 ease-out md:p-8",

        // GLASS BASE
        "border-white/5",
        "bg-background/60 backdrop-blur-sm",
        "bg-linear-to-b from-white/2 to-transparent",

        // INTERACTION
        "hover:-translate-y-1",

        // SHADOW
        "hover:shadow-md hover:shadow-black/10",

        "active:scale-[0.98]",

        styles.wrapper,
      )}
    >
      {/* Header: Icon & Time */}
      <div class="mb-6 flex items-start justify-between">
        <div
          class={cn(
            "flex size-12 items-center justify-center rounded-lg border transition-colors duration-200",
            styles.iconBox,
          )}
        >
          <props.icon class="size-6" />
        </div>

        <div class="text-muted-foreground bg-background/60 flex items-center gap-1.5 rounded-md border border-white/5 px-2.5 py-1 text-xs font-medium">
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
        <div class="text-muted-foreground mt-auto flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors">
          <span>Start Import</span>
          <ArrowRight class="size-3.5" />
        </div>
      </div>
    </Link>
  )
}
