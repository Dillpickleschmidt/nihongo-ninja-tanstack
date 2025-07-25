import { Smartphone } from "lucide-solid"

export function MobileVocabPage() {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <Smartphone class="text-muted-foreground mb-6 h-16 w-16" />
      <h1 class="mb-2 text-2xl font-bold">Mobile Layout Coming Soon</h1>
      <p class="text-muted-foreground mb-6 max-w-md">
        We're working on a mobile-optimized vocabulary page with tabs and
        touch-friendly navigation. For now, please use a desktop browser for the
        best experience.
      </p>
      <div class="bg-muted/50 max-w-sm rounded-lg p-4">
        <p class="text-muted-foreground text-sm">
          <strong>Desktop features:</strong>
          <br />
          • Collapsible panels
          <br />
          • Hierarchical deck organization
          <br />• Import and practice workflows
        </p>
      </div>
    </div>
  )
}
