import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, onMount } from "solid-js"
import { FeaturedToolsSection } from "@/features/dashboard/components/FeaturedToolsSection"
import { ResourceDirectorySection } from "@/features/dashboard/components/ResourceDirectorySection"
import Nav from "@/features/homepage/Nav"

export const Route = createFileRoute("/_home/dashboard")({
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
      <Nav />
      <FeaturedToolsSection
        animated={animated}
        animationComplete={animationComplete}
      />
      <ResourceDirectorySection />
    </div>
  )
}
