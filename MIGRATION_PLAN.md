# Migration Plan: Supabase to Convex (Schema & Functions Only)

## Overview

Port the database layer from Supabase to Convex:
- Schema definitions
- Query and mutation functions
- Seeding scripts for reference data

Frontend migration will be done separately after confirming the backend works.

---

## Phase 1: Schema Migration

### 1.1 User-Related Tables

```typescript
// convex/schema.ts

// Profiles (linked to BetterAuth user)
profiles: defineTable({
  userId: v.string(),
  displayName: v.optional(v.string()),
  userPreferences: v.any(), // Flexible JSON object
}).index("by_user", ["userId"]),

// User Deck Folders
userDeckFolders: defineTable({
  userId: v.string(),
  folderName: v.string(),
  parentFolderId: v.optional(v.id("userDeckFolders")),
}).index("by_user", ["userId"]),

// User Decks
userDecks: defineTable({
  userId: v.string(),
  deckId: v.string(), // Generated unique ID
  deckName: v.string(),
  deckDescription: v.optional(v.string()),
  folderId: v.optional(v.id("userDeckFolders")),
  source: v.union(
    v.literal("built-in"),
    v.literal("anki"),
    v.literal("wanikani"),
    v.literal("jpdb"),
    v.literal("user"),
    v.literal("shared"),
    v.literal("learning_path")
  ),
  originalDeckId: v.optional(v.string()),
  allowedPracticeModes: v.array(v.string()),
}).index("by_user", ["userId"])
  .index("by_deckId", ["deckId"]),

// Deck Vocabulary Items
deckVocabularyItems: defineTable({
  deckId: v.string(),
  word: v.string(),
  furigana: v.optional(v.string()),
  english: v.array(v.string()),
  info: v.optional(v.array(v.string())),
  mnemonics: v.optional(v.any()),
  exampleSentences: v.optional(v.any()),
  videos: v.optional(v.any()),
  particles: v.optional(v.any()),
  isVerb: v.optional(v.boolean()),
}).index("by_deck", ["deckId"]),

// FSRS Cards (Spaced Repetition)
userFsrsCards: defineTable({
  userId: v.string(),
  practiceItemKey: v.string(),
  fsrsCard: v.any(), // JSONB
  fsrsLogs: v.array(v.any()),
  dueAt: v.number(), // timestamp
  stability: v.float64(),
  mode: v.string(),
  type: v.union(v.literal("vocabulary"), v.literal("kanji"), v.literal("radical")),
}).index("by_user", ["userId"])
  .index("by_user_key_mode_type", ["userId", "practiceItemKey", "mode", "type"])
  .index("by_user_due", ["userId", "dueAt"]),

// User Completed Modules
userCompletedModules: defineTable({
  userId: v.string(),
  modulePath: v.string(),
  completedAt: v.number(),
}).index("by_user", ["userId"])
  .index("by_user_module", ["userId", "modulePath"]),

// User Practice Sessions
userPracticeSessions: defineTable({
  userId: v.string(),
  modulePath: v.string(),
  moduleType: v.string(),
  durationSeconds: v.number(),
  questionsAnswered: v.optional(v.number()),
  lastUpdatedAt: v.number(),
}).index("by_user", ["userId"]),

// User Service Tokens (Anilist, etc.)
userServiceTokens: defineTable({
  userId: v.string(),
  service: v.union(v.literal("anilist"), v.literal("kitsu"), v.literal("mal")),
  accessToken: v.string(),
  refreshToken: v.optional(v.string()),
  expiresAt: v.optional(v.number()),
}).index("by_user_service", ["userId", "service"]),
```

### 1.2 Deck Sharing Tables

```typescript
// Public Deck Shares
publicDeckShares: defineTable({
  deckId: v.string(),
  sharedBy: v.string(), // userId
  importCount: v.number(),
}).index("by_deck", ["deckId"]),
```

### 1.3 Learning Path Tables

```typescript
// Learning Path Transcripts
learningPathTranscripts: defineTable({
  userId: v.string(),
  name: v.string(),
  showName: v.optional(v.string()),
  episodeName: v.optional(v.string()),
  transcriptData: v.any(), // JSONB
}).index("by_user", ["userId"]),

// Learning Path Module Sources
learningPathModuleSources: defineTable({
  pathId: v.id("learningPathTranscripts"),
  moduleId: v.string(),
  sourceType: v.union(v.literal("grammar"), v.literal("vocabulary")),
  transcriptLineIds: v.any(), // JSONB
  orderIndex: v.number(),
}).index("by_path", ["pathId"]),
```

### 1.4 Reference/Seed Data Tables

```typescript
// Core Vocabulary Items
coreVocabularyItems: defineTable({
  key: v.string(),
  word: v.string(),
  furigana: v.string(),
  english: v.array(v.string()),
  partOfSpeech: v.optional(v.string()),
  info: v.optional(v.array(v.string())),
  mnemonics: v.optional(v.any()),
  exampleSentences: v.optional(v.any()),
  videos: v.optional(v.any()),
  particles: v.optional(v.any()),
  overwriteWord: v.optional(v.string()),
}).index("by_key", ["key"]),

// Core Vocabulary Sets
coreVocabularySets: defineTable({
  setId: v.string(),
  vocabularyKeys: v.array(v.string()),
}).index("by_setId", ["setId"]),

// WaniKani Items
wanikaniItems: defineTable({
  wanikaniId: v.number(), // Original WK ID
  characters: v.optional(v.string()),
  characterType: v.union(v.literal("radical"), v.literal("kanji")),
  meanings: v.array(v.string()),
  readingMnemonic: v.optional(v.string()),
  meaningMnemonic: v.string(),
  componentIds: v.array(v.number()),
  characterImageUrl: v.optional(v.string()),
}).index("by_wanikaniId", ["wanikaniId"])
  .index("by_character", ["characters"]),

// Dictionary Tables
dictionaries: defineTable({
  title: v.string(),
  revision: v.string(),
  format: v.number(),
  sequenced: v.boolean(),
  author: v.optional(v.string()),
  url: v.optional(v.string()),
  description: v.optional(v.string()),
  attribution: v.optional(v.string()),
  sourceLanguage: v.optional(v.string()),
  targetLanguage: v.optional(v.string()),
}).index("by_title", ["title"]),

terms: defineTable({
  dictionary: v.string(),
  expression: v.string(),
  reading: v.string(),
  definitionTags: v.optional(v.string()),
  rules: v.optional(v.string()),
  score: v.number(),
  glossary: v.any(), // JSONB
  sequence: v.number(),
  termTags: v.optional(v.string()),
}).index("by_expression", ["expression"])
  .index("by_dictionary_expression", ["dictionary", "expression"]),

termMeta: defineTable({
  dictionary: v.string(),
  expression: v.string(),
  mode: v.string(),
  data: v.any(),
}).index("by_expression", ["expression"]),

tagMeta: defineTable({
  dictionary: v.string(),
  name: v.string(),
  category: v.optional(v.string()),
  sortOrder: v.number(),
  description: v.optional(v.string()),
  score: v.number(),
}).index("by_dictionary_name", ["dictionary", "name"]),

kanji: defineTable({
  dictionary: v.string(),
  character: v.string(),
  onyomi: v.optional(v.string()),
  kunyomi: v.optional(v.string()),
  tags: v.optional(v.string()),
  meanings: v.any(),
  stats: v.optional(v.any()),
}).index("by_character", ["character"]),

kanjiMeta: defineTable({
  dictionary: v.string(),
  character: v.string(),
  mode: v.string(),
  data: v.any(),
}).index("by_character", ["character"]),
```

---

## Phase 2: Auth Helper

Add `requireAuth` to existing `convex/auth.ts`:

```typescript
export const requireAuth = async (ctx: QueryCtx | MutationCtx) => {
  const user = await getCurrentUser(ctx, {});
  if (!user?._id) {
    throw new Error("Not authenticated");
  }
  return user;
};
```

Use `getCurrentUser` for queries where auth is optional, `requireAuth` for protected mutations.

---

## Phase 3: Convex Functions

### 3.1 File Structure

```
convex/
├── schema.ts              # All table definitions
├── auth.ts                # BetterAuth + getCurrentUser + requireAuth
│
├── decks.ts               # Deck CRUD + vocabulary items
├── folders.ts             # Folder CRUD + getUserFoldersAndDecks
├── fsrs.ts                # FSRS card queries and mutations
├── sharing.ts             # Deck sharing + import
├── learningPaths.ts       # Learning path management
├── progress.ts            # Module completions + sessions
├── vocabulary.ts          # Core vocabulary queries
├── dictionary.ts          # Dictionary lookups (findTerms, getKanji)
├── wanikani.ts            # WaniKani item queries
└── serviceTokens.ts       # External service token storage
```

### 3.2 Function Mappings

| Supabase Function | Convex Function |
|-------------------|-----------------|
| `createUserDeckServerFn` | `decks:createDeck` |
| `updateUserDeckServerFn` | `decks:updateDeck` |
| `createCustomDeckServerFn` | `decks:createCustomDeck` |
| `executeEditTransactionServerFn` | `decks:executeEditTransaction` |
| `getUserFoldersAndDecks` | `folders:getUserFoldersAndDecks` |
| `createFolderServerFn` | `folders:createFolder` |
| `getAllFSRSCardsForUser` | `fsrs:getAllCards` |
| `getFSRSCards` | `fsrs:getCards` |
| `getDueFSRSCards` | `fsrs:getDueCards` |
| `upsertFSRSCardForUser` | `fsrs:upsertCard` |
| `batchUpsertFSRSCardsForUser` | `fsrs:batchUpsert` |
| `getSharedDecksServerFn` | `sharing:getSharedDecks` |
| `importSharedDeckServerFn` | `sharing:importDeck` |
| `createDeckShareServerFn` | `sharing:shareDeck` |
| `uploadLearningPath` (RPC) | `learningPaths:upload` |
| `getUserLearningPaths` | `learningPaths:getUserPaths` |
| `markModuleCompleted` | `progress:markComplete` |
| `createSession` | `progress:createSession` |
| `getUserDailyAggregates` | `progress:getDailyAggregates` |
| `getCoreVocabularyByKeys` | `vocabulary:getByKeys` |
| `getVocabularyBySets` | `vocabulary:getBySets` |
| `findTerms` (RPC) | `dictionary:findTerms` |
| `getWanikaniItems` | `wanikani:getItems` |
| `storeTokenInDB` | `serviceTokens:store` |
| `getTokensFromDB` | `serviceTokens:get` |

---

## Phase 4: Seeding Scripts

### 4.1 Scripts to Port

| Script | Output Tables | Priority |
|--------|---------------|----------|
| `upsert-core-vocab.ts` | coreVocabularyItems, coreVocabularySets | High |
| `import-wanikani.ts` | wanikaniItems | High |
| `import-dictionary.ts` | dictionaries, terms, termMeta, tagMeta, kanji, kanjiMeta | High |

Scripts that don't touch DB (no porting needed):
- `parse-sentences.ts` - Updates local JSON files
- `sync-grammar-patterns.ts` - Generates TypeScript file
- `check-grammar-coverage.ts` - Console output only

### 4.2 Convex Seeding Approach

Create internal mutations for seeding (no auth required, only callable via CLI):

```typescript
// convex/vocabulary.ts
import { internalMutation } from "./_generated/server";

export const seedItems = internalMutation({
  args: { items: v.array(v.object({...})) },
  handler: async (ctx, args) => {
    for (const item of args.items) {
      await ctx.db.insert("coreVocabularyItems", item);
    }
  },
});
```

Scripts call via: `bunx convex run vocabulary:seedItems --args '{"items": [...]}'`

For large datasets (dictionary), batch in chunks and call multiple times.

---

## Implementation Order

### Batch 1: Schema
1. Add all table definitions to `convex/schema.ts`
2. Add `requireAuth` to `convex/auth.ts`
3. Run `bunx convex dev` to validate schema

### Batch 2: Core User Features
1. `convex/decks.ts` - Deck CRUD + vocabulary
2. `convex/folders.ts` - Folder CRUD + combined query
3. Test with dashboard

### Batch 3: FSRS & Progress
1. `convex/fsrs.ts` - Card management
2. `convex/progress.ts` - Completions + sessions

### Batch 4: Sharing & Learning Paths
1. `convex/sharing.ts` - Deck sharing
2. `convex/learningPaths.ts` - Path management

### Batch 5: Reference Data
1. `convex/vocabulary.ts` - Core vocab queries + seeding
2. `convex/wanikani.ts` - WaniKani queries + seeding
3. `convex/dictionary.ts` - Dictionary queries + seeding
4. `convex/serviceTokens.ts` - Token storage

### Batch 6: Seeding Scripts
1. Port `scripts/upsert-core-vocab.ts`
2. Port `scripts/import-wanikani.ts`
3. Port `scripts/import-dictionary.ts`
4. Run scripts to seed data

---

## Reference Files

**Old Repo (Supabase implementations):**
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/deck.ts`
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/folder.ts`
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/fsrs.ts`
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/deck-sharing.ts`
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/learning-paths.ts`
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/module-progress.ts`
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/core-vocab.ts`
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/dictionary.ts`
- `~/Programming-Projects/nihongo-ninja_old/src/features/supabase/db/wanikani.ts`
- `~/Programming-Projects/nihongo-ninja_old/scripts/*.ts`

**New Repo:**
- `/home/dylank/Programming-Projects/nihongo-ninja/convex/schema.ts`
- `/home/dylank/Programming-Projects/nihongo-ninja/convex/auth.ts`

---

## Notes

- Convex uses `v.any()` for flexible JSONB-like fields
- Convex IDs are `v.id("tableName")` for foreign keys
- Timestamps stored as `v.number()` (Unix ms)
- No RLS - auth checks in function handlers via `requireAuth`
- Use `internalMutation` for seeding (bypasses auth, CLI only)
