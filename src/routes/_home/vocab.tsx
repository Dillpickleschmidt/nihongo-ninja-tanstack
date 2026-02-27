// src/routes/_home/vocab.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { Suspense } from "solid-js"
import { queryKeys } from "~/query/query-keys"
import { Sidebar } from "@/features/sidebar/Sidebar"
import { CenterNavBar } from "@/features/vocab-page/layout/CenterNavBar"
import { VocabProvider } from "@/features/vocab-page/context/VocabContext"
import { VocabRightPanel } from "@/features/vocab-page/layout/VocabRightPanel"
import { FolderEditModal } from "@/features/vocab-page/shared/components/FolderEditModal"
import { DeckCopyModal } from "@/features/vocab-page/shared/components/DeckCopyModal"

export const Route = createFileRoute("/_home/vocab")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 2,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: VocabLayoutComponent,
})

function VocabLayoutComponent() {
  return (
    <VocabProvider>
      <div class="grid grid-cols-[auto_1fr] md:grid-cols-[18rem_1fr_24rem]">
        {/* Left: Sidebar - handles auth internally via getUser() */}
        <div class="sticky top-0 self-start">
          <Sidebar animated={false} />
        </div>

        {/* Center: Nav + Content */}
        <div class="relative w-full">
          <div class="flex flex-col pb-16">
            <CenterNavBar />
            <div class="px-8">
              <Suspense>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Right: Panel with user's decks */}
        <div class="sticky top-0 hidden border-border/50 bg-card/30 border-l py-4 pl-4 md:block md:h-[calc(100vh-4rem)]">
          <VocabRightPanel />
        </div>
      </div>

      {/* Global Modals */}
      <FolderEditModal />
      <DeckCopyModal />
    </VocabProvider>
  )
}
