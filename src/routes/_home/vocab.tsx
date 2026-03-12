// src/routes/_home/vocab.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { Suspense } from "solid-js"
import { queryKeys } from "~/query/query-keys"
import { CenterNavBar } from "@/features/vocab-page/layout/CenterNavBar"
import { VocabProvider } from "@/features/vocab-page/context/VocabContext"
import { VocabRightPanel } from "@/features/vocab-page/layout/VocabRightPanel"
import { FolderEditModal } from "@/features/vocab-page/shared/components/FolderEditModal"
import { DeckCopyModal } from "@/features/vocab-page/shared/components/DeckCopyModal"

export const Route = createFileRoute("/_home/vocab")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 12,
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
      {/* Center: Nav + Content */}
      <div class="px-8 pb-16 mr-80">
        <CenterNavBar />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>

      {/* Right: Panel with user's decks */}
      <div class="fixed top-0 right-0 w-80! hidden border-border/50 bg-card/30 border-l py-4 pl-4 md:block md:h-[calc(100vh-4rem)]">
        <VocabRightPanel />
      </div>

      {/* Global Modals */}
      <FolderEditModal />
      <DeckCopyModal />
    </VocabProvider>
  )
}
