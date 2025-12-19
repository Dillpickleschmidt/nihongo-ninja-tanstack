import { Index } from "solid-js"
import { ToolCard } from "./ToolCard"
import { TOOLS } from "./tools-data"

export function PracticeToolsSection() {
  return (
    <section class="mt-12">
      <div class="mb-8 flex items-end justify-between">
        <div>
          <h2 class="text-xl font-bold text-white md:text-2xl">
            Practice{" "}
            <span class="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-(--accent-end)">
              Tools
            </span>
          </h2>
          <p class="mt-1 text-sm text-white/50">Master every aspect of Japanese</p>
        </div>
      </div>

      <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
        <Index each={TOOLS}>
          {(tool, index) => <ToolCard tool={tool()} index={index} />}
        </Index>
      </div>
    </section>
  )
}
