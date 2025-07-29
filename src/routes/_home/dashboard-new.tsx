import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, onMount } from "solid-js"
import { FeaturedToolsSection } from "@/features/dashboard-new/components/FeaturedToolsSection"
import { ResourceDirectorySection } from "@/features/dashboard-new/components/ResourceDirectorySection"

export const Route = createFileRoute("/_home/dashboard-new")({
  component: RouteComponent,
})

function RouteComponent() {
  const [animated, setAnimated] = createSignal(false)
  const [animationComplete, setAnimationComplete] = createSignal(false)

  onMount(() => {
    setTimeout(() => setAnimated(true), 100)
    setTimeout(() => setAnimationComplete(true), 1200)
  })

  return (
    <div class="bg-background min-h-screen">
      <FeaturedToolsSection
        animated={animated}
        animationComplete={animationComplete}
      />
      <ResourceDirectorySection />
    </div>
  )
}
