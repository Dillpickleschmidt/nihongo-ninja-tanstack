interface VocabPreviewProps {
  vocabCount: number
}

export function VocabPreview(props: VocabPreviewProps) {
  return (
    <div class="border-border overflow-hidden rounded-lg border">
      <div class="border-border bg-muted/40 text-muted-foreground border-b px-3 py-2 text-xs">
        Preview
      </div>
      <div class="text-muted-foreground p-6 text-center">
        <p class="text-sm">
          Preview will show {props.vocabCount} vocabulary{" "}
          {props.vocabCount === 1 ? "item" : "items"} here.
        </p>
        <p class="mt-2 text-xs">
          Preview functionality will be implemented when data collection is
          added.
        </p>
      </div>
    </div>
  )
}
