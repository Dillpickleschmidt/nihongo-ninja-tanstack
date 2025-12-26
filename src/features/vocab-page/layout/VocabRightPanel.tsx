import { Show, createEffect, createMemo } from "solid-js"
import { useLocation } from "@tanstack/solid-router"
import { useVocab } from "../context/VocabContext"
import { resolveDeckFromPath, resolveFolderFromPath } from "../utils/navigation"
import { SidebarUserInfoView } from "./vocab-right-panel/components/SidebarUserInfoView"
import { SidebarHierarchyView } from "./vocab-right-panel/components/SidebarHierarchyView"

export function VocabRightPanel() {
  const location = useLocation()
  const ctx = useVocab()

  // Show full sidebar on all routes except /vocab
  const showFullSidebar = () => location().pathname !== "/vocab"

  // Single memo that resolves current target from path
  const currentTarget = createMemo(() => {
    const path = location().pathname

    // Skip routes that don't need resolution
    if (
      path === "/vocab" ||
      path === "/vocab/create" ||
      path === "/vocab/browse"
    ) {
      return null
    }

    // Edit route
    const editMatch = path.match(/^\/vocab\/deck\/([^/]+)\/edit$/)
    if (editMatch) return { type: "deck" as const, id: editMatch[1] }

    // Resolve from path segments
    const segments = path.replace("/vocab/", "").split("/").filter(Boolean)
    if (segments.length === 0) return null

    const deck = resolveDeckFromPath(segments, ctx.decks())
    if (deck) return { type: "deck" as const, id: deck.id }

    const folder = resolveFolderFromPath(segments, ctx.folders())
    if (folder) return { type: "folder" as const, id: folder.id }

    return null
  })

  // Derive selectedDeckId from currentTarget
  const selectedDeckId = () => {
    const target = currentTarget()
    return target?.type === "deck" ? target.id : null
  }

  // Auto-expand based on current location
  createEffect(() => {
    const target = currentTarget()
    if (!target) return

    if (target.type === "deck") {
      ctx.initializeExpandedFromDeck(target.id)
    } else {
      ctx.initializeExpandedFromFolder(target.id)
    }
  })

  return (
    <Show when={showFullSidebar()} fallback={<SidebarUserInfoView />}>
      <SidebarHierarchyView selectedDeckId={selectedDeckId()} />
    </Show>
  )
}
