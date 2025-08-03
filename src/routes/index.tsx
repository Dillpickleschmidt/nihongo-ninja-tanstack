// src/routes/index.tsx
import Nav from "@/features/homepage/Nav"
import { createFileRoute } from "@tanstack/solid-router"

import Hero from "@/features/homepage/sections/Hero"
import PreviewGrid from "@/features/homepage/sections/PreviewGrid"
import FeatureBlocks from "@/features/homepage/sections/FeatureBlocks"
import Excite from "@/features/homepage/sections/Excite"

export const Route = createFileRoute("/")({
  component: RouteComponent,
  staleTime: Infinity,
})

function RouteComponent() {
  return (
    <div class="relative min-h-screen">
      <Nav />

      <section class="relative">
        <Hero />
        <CurveDivider />
      </section>

      <PreviewGrid />

      <div class="mx-auto max-w-4xl pt-4">
        <p class="text-muted-foreground text-center text-xs">
          Nihongo Ninja is not affiliated with any of the listed sources. We
          only embed videos as per YouTube&apos;s Terms of Service, use public
          APIs provided by these sites, or provide URLs to visit them. We love
          these creators and would love to bring more attention to them.
        </p>
      </div>

      <section class="relative">
        <FeatureBlocks />
        <CurveDivider flip />
      </section>

      <Excite />
    </div>
  )
}

function CurveDivider(props: { flip?: boolean }) {
  return (
    <div class="relative">
      <svg
        class={`text-muted -mb-1 h-10 w-full ${props.flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path
          d="M321.39,56.44C187.9,77.16,81.47,95.22,0,120H1200V0C1071.31,13.21,974.61,35.44,821.69,53.58,655.39,73.44,532.6,40.14,321.39,56.44Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
