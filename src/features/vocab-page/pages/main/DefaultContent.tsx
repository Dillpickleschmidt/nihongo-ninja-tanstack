// features/vocab-page/pages/main/DefaultContent.tsx
export function DefaultContent() {
  return (
    <div class="mx-auto max-w-4xl space-y-6 text-center">
      <h1 class="text-4xl font-bold">Vocabulary Practice</h1>
      <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
        Organize your Japanese vocabulary study with built-in textbook decks and
        personalized practice collections. Import decks to get started or
        practice what you've already collected.
      </p>
      <div class="mt-8 grid grid-cols-2 gap-6 text-sm">
        <div class="bg-muted-foreground/10 rounded-lg p-6 text-center">
          <h3 class="mb-3 text-base font-semibold">Built-in Decks</h3>
          <p class="text-muted-foreground leading-relaxed">
            Curated vocabulary from popular textbooks, organized by chapter and
            topic.
          </p>
        </div>
        <div class="bg-muted-foreground/10 rounded-lg p-6 text-center">
          <h3 class="mb-3 text-base font-semibold">Your Decks</h3>
          <p class="text-muted-foreground leading-relaxed">
            Your imported decks with spaced repetition tracking and progress.
          </p>
        </div>
      </div>
    </div>
  )
}
