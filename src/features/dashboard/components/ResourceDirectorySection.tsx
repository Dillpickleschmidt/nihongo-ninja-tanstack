import { For } from "solid-js"
import { CategorySection } from "./CategorySection"
import { resourceDirectory } from "../data/resource-directory"

export function ResourceDirectorySection() {
  // Split categories to show some above the fold
  const categories = Object.entries(resourceDirectory)
  const topCategories = categories.slice(0, 2) // Show first 2 categories prominently
  const bottomCategories = categories.slice(2) // Remaining categories

  return (
    <>
      {/* Above the fold resources */}
      <div class="border-border bg-muted/30 border-t py-12">
        <div class="container mx-auto">
          <h2 class="text-foreground mb-8 text-center text-2xl font-bold">
            Quick Start Guides
          </h2>

          <div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <For each={topCategories}>
              {([categoryName, resources]) => (
                <CategorySection title={categoryName} resources={resources} />
              )}
            </For>
          </div>
        </div>
      </div>

      {/* Below the fold resources */}
      {bottomCategories.length > 0 && (
        <div class="py-12">
          <div class="container mx-auto">
            <h2 class="text-foreground mb-8 text-center text-2xl font-bold">
              Additional Resources
            </h2>

            <div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <For each={bottomCategories}>
                {([categoryName, resources]) => (
                  <CategorySection title={categoryName} resources={resources} />
                )}
              </For>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
