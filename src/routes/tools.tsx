// src/routes/tools.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { For, createSignal, onMount } from "solid-js"
import { SSRMediaQuery } from "~/components/SSRMediaQuery"

export const Route = createFileRoute("/tools")({
  component: RouteComponent,
})

const tools = [
  {
    title: "Vocab Decks",
    description: "Practice vocabulary both quickly and with spaced repetition",
    icon: "📚",
    href: "/practice/vocab",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Grammar Notes",
    description: "Review grammar patterns and structures",
    icon: "📝",
    href: "/learn/grammar",
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Lessons",
    description: "Follow structured learning paths",
    icon: "🎓",
    href: "/learn",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "Sentence Practice",
    description: "Build sentences and improve comprehension",
    icon: "💬",
    href: "/practice/sentences",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Conjugation",
    description: "Master verb and adjective conjugations",
    icon: "⚡",
    href: "/practice/conjugation",
    gradient: "from-red-400 to-red-600",
  },
]

function DesktopCard(props: {
  tool: (typeof tools)[0]
  index: () => number
  animated: () => boolean
  animationComplete: () => boolean
}) {
  return (
    <a
      href={props.tool.href}
      class={`group relative h-88 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${props.tool.gradient} flex flex-col justify-between p-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        props.animated()
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={
        props.animationComplete()
          ? {}
          : {
              "transition-delay": props.animated()
                ? `${props.index() * 100 + 300}ms`
                : "0ms",
            }
      }
    >
      <div class="flex flex-1 flex-col items-center text-center">
        <div class="mt-4 mb-6 text-5xl transition-transform duration-300 group-hover:scale-110">
          {props.tool.icon}
        </div>
        <h2 class="mb-4 text-xl font-bold">{props.tool.title}</h2>
        <p class="text-sm leading-relaxed opacity-90">
          {props.tool.description}
        </p>
      </div>

      <div class="mt-auto">
        <div class="h-0.5 w-full rounded bg-white/20" />
        <div class="mt-3 text-center text-sm font-medium opacity-80">
          Start Learning →
        </div>
      </div>
    </a>
  )
}

function MobileCard(props: {
  tool: (typeof tools)[0]
  index: () => number
  animated: () => boolean
  animationComplete: () => boolean
}) {
  return (
    <a
      href={props.tool.href}
      class={`group block bg-gradient-to-r ${props.tool.gradient} rounded-xl px-6 py-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        props.animated()
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
      style={
        props.animationComplete()
          ? {}
          : {
              "transition-delay": props.animated()
                ? `${props.index() * 150 + 200}ms`
                : "0ms",
            }
      }
    >
      <div class="flex items-center space-x-4">
        <div class="text-3xl transition-transform duration-300 group-hover:scale-110">
          {props.tool.icon}
        </div>
        <div class="flex-1">
          <h2 class="mb-1 text-lg font-bold">{props.tool.title}</h2>
          <p class="text-sm opacity-90">{props.tool.description}</p>
        </div>
        <div class="text-xl text-white/60 transition-colors duration-300 group-hover:text-white">
          →
        </div>
      </div>
    </a>
  )
}

function RouteComponent() {
  const [animated, setAnimated] = createSignal(false)
  const [animationComplete, setAnimationComplete] = createSignal(false)

  onMount(() => {
    setTimeout(() => setAnimated(true), 100)
    // Clear delays after animation completes
    setTimeout(() => setAnimationComplete(true), 1200)
  })

  return (
    <div class="bg-background min-h-screen">
      <SSRMediaQuery showFrom="md">
        <div class="relative min-h-screen">
          {/* Header - absolutely centered */}
          <div class="absolute inset-0 flex items-center justify-center">
            <h1
              class={`text-foreground text-center text-3xl font-bold transition-transform duration-700 ease-out ${
                animated() ? "-translate-y-56" : "translate-y-0"
              }`}
            >
              Learning Tools
            </h1>
          </div>

          {/* Cards - perfectly centered */}
          <div class="flex min-h-screen items-center justify-center">
            <div class="w-full max-w-7xl">
              <div class="grid justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-5">
                <For each={tools}>
                  {(tool, index) => (
                    <DesktopCard
                      tool={tool}
                      index={index}
                      animated={animated}
                      animationComplete={animationComplete}
                    />
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
      </SSRMediaQuery>

      <SSRMediaQuery hideFrom="md">
        <div class="px-4 py-8">
          <div class="mx-auto max-w-6xl">
            <h1
              class={`text-foreground mb-10 text-center text-3xl font-bold transition-opacity duration-300 ${
                animated() ? "opacity-100" : "opacity-0"
              }`}
            >
              Learning Tools
            </h1>

            <div class="space-y-4">
              <For each={tools}>
                {(tool, index) => (
                  <MobileCard
                    tool={tool}
                    index={index}
                    animated={animated}
                    animationComplete={animationComplete}
                  />
                )}
              </For>
            </div>
          </div>
        </div>
      </SSRMediaQuery>
    </div>
  )
}
