import { Plus } from "lucide-solid"

export function DeckBuilderContent() {
  return (
    <div class="mx-auto max-w-4xl space-y-6 text-center">
      <div class="mb-8 flex justify-center">
        <div class="bg-muted flex h-20 w-20 items-center justify-center rounded-full">
          <Plus class="text-muted-foreground h-10 w-10" />
        </div>
      </div>
      <h1 class="text-4xl font-bold">Create Decks</h1>
      <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
        Create your own vocabulary decks from scratch. Add words, definitions,
        example sentences, and organize them into custom learning collections.
      </p>
      <div class="mt-8 space-y-4">
        <p class="text-muted-foreground text-sm">
          This feature is coming soon!
        </p>
        <div class="bg-muted/30 mx-auto max-w-md rounded-lg p-6">
          <h3 class="mb-3 text-base font-semibold">Planned Features</h3>
          <ul class="text-muted-foreground space-y-2 text-sm">
            <li>• Create custom vocabulary collections</li>
            <li>• Import from CSV or text files</li>
            <li>• Add your own example sentences</li>
            <li>• Share decks with the community</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
