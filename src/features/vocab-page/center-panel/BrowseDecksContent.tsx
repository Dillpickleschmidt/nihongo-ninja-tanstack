import { Search } from "lucide-solid"

export function BrowseDecksContent() {
  return (
    <div class="mx-auto max-w-4xl space-y-6 text-center">
      <div class="mb-8 flex justify-center">
        <div class="bg-muted flex h-20 w-20 items-center justify-center rounded-full">
          <Search class="text-muted-foreground h-10 w-10" />
        </div>
      </div>
      <h1 class="text-4xl font-bold">Browse Community Decks</h1>
      <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
        Discover and import vocabulary decks created by other learners. Find
        specialized collections for different topics, proficiency levels, and
        learning goals.
      </p>
      <div class="mt-8 space-y-4">
        <p class="text-muted-foreground text-sm">
          This feature is coming soon!
        </p>
        <div class="bg-muted/30 mx-auto max-w-md rounded-lg p-6">
          <h3 class="mb-3 text-base font-semibold">Planned Features</h3>
          <ul class="text-muted-foreground space-y-2 text-sm">
            <li>• Browse community-created decks</li>
            <li>• Filter by topic and difficulty</li>
            <li>• Rate and review deck quality</li>
            <li>• Import popular collections</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

