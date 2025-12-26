// src/routes/_home/vocab/index.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { VocabDashboard } from "@/features/vocab-page/pages/main/components/VocabDashboard"

export const Route = createFileRoute("/_home/vocab/")({
  component: VocabDashboard,
})
