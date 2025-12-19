import { Index } from "solid-js"
import { ToolCard } from "./ToolCard"
import { TOOLS } from "./tools-data"

export function PracticeToolsSection() {
  return (
    <section class="mt-6">
      <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
        <Index each={TOOLS}>
          {(tool, index) => <ToolCard tool={tool()} index={index} />}
        </Index>
      </div>
    </section>
  )
}
