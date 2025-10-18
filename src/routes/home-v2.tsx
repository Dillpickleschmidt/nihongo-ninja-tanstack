import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal } from "solid-js"
import Nav from "@/features/homepage-v2/Nav"
import LoginMessage from "@/features/homepage-v2/login-message.svg"
import { BackgroundLayers } from "@/features/homepage-v2/components/BackgroundLayers"
import { WelcomeSection } from "@/features/homepage-v2/components/WelcomeSection"
import { LevelSelection } from "@/features/homepage-v2/components/LevelSelection"

export const Route = createFileRoute("/home-v2")({
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const [selectedLevel, setSelectedLevel] = createSignal<string | null>(null)

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level)
    console.log(`Selected level: ${level}`)
    // TODO: Navigate to level-specific content or show different view based on selected level
  }

  return (
    <div class="relative h-screen w-screen overflow-hidden">
      <BackgroundLayers />

      <Nav />
      <LoginMessage class="absolute top-6 right-24 h-auto w-64 text-neutral-500" />

      <WelcomeSection />

      {/* JLPT Level Cards */}
      <LevelSelection onSelect={handleLevelSelect} />

      <div class="absolute bottom-4 w-full px-6 text-right text-sm opacity-50">
        <p>
          Don't worry, there's no additional questions asking for your email or
          anything :)
        </p>
      </div>
    </div>
  )
}
