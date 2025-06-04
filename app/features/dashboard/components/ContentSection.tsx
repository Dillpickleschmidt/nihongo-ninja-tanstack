// features/dashboard/components/ContentSection.tsx
import { For } from "solid-js"
import { ArrowRight, Plus } from "lucide-solid"
import { Await } from "@tanstack/solid-router"
import { ExternalResourceCard } from "./ExternalResourceCard"
import type { ExternalResource } from "@/data/types"

interface ContentSectionProps {
  resources: ExternalResource[]
  thumbnailPromises: Promise<{
    resourceId: string
    thumbnailUrl: string | null
  }>[]
}

export function ContentSection(props: ContentSectionProps) {
  return (
    <div class="mt-6 xl:mt-7">
      <div class="mb-4 flex items-center justify-between pl-8 xl:mb-5 xl:pl-10">
        <div class="flex items-end">
          <h2 class="text-xl xl:text-2xl">Content</h2>
          <p class="text-muted-foreground pb-1 pl-2 text-xs xl:pl-3 xl:text-sm">
            You Might Enjoy
          </p>
        </div>
        <ArrowRight class="mr-5 h-5 w-5 xl:mr-6 xl:h-6 xl:w-6" />
      </div>
      <div class="scrollbar-hide mb-5 flex gap-4 overflow-x-auto pr-4 pb-2 pl-8 xl:mb-6 xl:gap-5 xl:pr-5 xl:pl-10">
        <div class="bg-background border-primary/30 mr-1 flex min-w-[50px] items-center justify-center rounded-[14px] border-2 border-dashed xl:min-w-[55px] xl:rounded-[16px]">
          <Plus class="text-primary/30 h-6 w-6 xl:h-7 xl:w-7" />
        </div>
        <For each={props.resources}>
          {(resource, index) => {
            const thumbnailPromise = props.thumbnailPromises[index()]
            return (
              <Await
                promise={thumbnailPromise}
                fallback={<ExternalResourceCard resource={resource} />}
              >
                {(thumbnailData) => (
                  <ExternalResourceCard
                    resource={resource}
                    thumbnailUrl={thumbnailData.thumbnailUrl}
                  />
                )}
              </Await>
            )
          }}
        </For>
      </div>
    </div>
  )
}
