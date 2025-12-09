// src/routes/_home/vocab.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { Suspense } from "solid-js"
import { Sidebar } from "@/features/sidebar/Sidebar"
import { CenterNavBar } from "@/features/vocab-page/layout/CenterNavBar"
import { VocabProvider } from "@/features/vocab-page/context/VocabContext"
import { VocabRightPanel } from "@/features/vocab-page/layout/VocabRightPanel"

export const Route = createFileRoute("/_home/vocab")({
  component: VocabLayoutComponent,
})

function VocabLayoutComponent() {
  return (
    <VocabProvider>
      <div class="grid grid-cols-[auto_1fr] md:grid-cols-[18rem_1fr_24rem]">
        {/* Left: Sidebar - handles auth internally via getUser() */}
        <div class="sticky top-0 z-20 -mt-16 self-start">
          <Sidebar />
        </div>

        {/* Center: Nav + Content */}
        <div class="relative z-0 w-full">
          <div class="flex h-[calc(100vh-65px)] flex-col overflow-y-auto">
            <CenterNavBar />
            <div class="px-8 md:pt-12">
              <Suspense>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Right: Panel with user's decks */}
        <div class="hidden h-[calc(100vh-65px)] md:block">
          <VocabRightPanel />
        </div>
      </div>
    </VocabProvider>
  )
}
