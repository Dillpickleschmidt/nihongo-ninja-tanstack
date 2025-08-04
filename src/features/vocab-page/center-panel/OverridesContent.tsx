import { Settings } from "lucide-solid"

export function OverridesContent() {
  return (
    <div class="mx-auto max-w-4xl space-y-6 text-center">
      <div class="mb-8 flex justify-center">
        <div class="bg-muted flex h-20 w-20 items-center justify-center rounded-full">
          <Settings class="text-muted-foreground h-10 w-10" />
        </div>
      </div>
      <h1 class="text-4xl font-bold">Vocabulary Overrides</h1>
      <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
        Configure advanced stacking context rules to customize how vocabulary
        items are prioritized and presented during practice sessions.
      </p>
      <div class="mt-8 space-y-4">
        <p class="text-muted-foreground text-sm">
          This feature is coming soon!
        </p>
        <div class="bg-muted/30 mx-auto max-w-md rounded-lg p-6">
          <h3 class="mb-3 text-base font-semibold">Planned Features</h3>
          <ul class="text-muted-foreground space-y-2 text-sm">
            <li>• Set vocabulary priority rules</li>
            <li>• Configure deck stacking contexts</li>
            <li>• Override default spaced repetition</li>
            <li>• Custom learning algorithms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

