# Immersion Kit Integration

Real-world example sentences from [Immersion Kit](https://immersionkit.com) displayed in the "Real Examples" tab of vocabulary cards. Examples are ranked by relevance to the user's learning progress.

## Data Flow

```
User opens deck
      |
      v
  useDeckView
      |
      +-- resolveDeckScopeId(deck, decks, folders)
      |         |
      |         |   Walks the folder tree to the root using in-memory data
      |         |   from VocabContext (no additional queries).
      |         v
      |   scopeId (root folder ID, textbook ID, or "")
      |         |
      |         v
      |   useConvexQuery(getVocabIndex, { scopeId })
      |         |
      |         v
      |   { deckTerms, orderedKeys? }
      |         |
      |         +-- deckTerms --> SearchIndexSubscription (powers vocab search)
      |         +-- orderedKeys --> passed as prop down to VocabularyCard
      |
      v
  VocabularyCard
      |
      +-- useQuery --> fetchImmersionKitExamples(word)
      |         |
      |         v
      |   apiv2.immersionkit.com/search?q=...&showUrlInMedia=true
      |         |
      |         v
      |   ImmersionKitExample[] (sentences, full image/sound URLs)
      |         |
      |         v
      |   rankExamples(examples, word, orderedKeys) --> top 2
      |
      +-- RealExamples component renders sentences, images, audio
```

## Ranking

When `orderedKeys` is available (deck is part of a learning path), examples are scored using three weighted factors:

- **Vocab overlap (0.5)**: how many words in the example sentence the user has already learned
- **Sentence length (0.3)**: shorter sentences score higher, plateau at 30 chars
- **Proximity (0.2)**: bonus for known words that were learned recently relative to the target word

Without `orderedKeys`, examples are ranked by sentence length only.

## Sequential Fetch Queue

IK requests are queued sequentially (promise chain) to avoid 429 rate limits. TanStack Query handles caching and deduplication across cards with the same word.
