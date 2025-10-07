import { createFileRoute } from "@tanstack/solid-router"
import PracticeContainer from "@/features/sentence-practice/ui/practice/PracticeContainer"

export const Route = createFileRoute("/sentence-practice-demo")({
  component: RouteComponent,
})

function RouteComponent() {
  return <PracticeContainer path="chapter-1/test" showDebug={true} />
}
