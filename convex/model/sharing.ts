import { MutationCtx, QueryCtx } from "../_generated/server"
import { Id } from "../_generated/dataModel"
import { createDeck as createDeckModel } from "./decks"
import { getDeckVocabItems, createDeckVocabItems } from "./vocabulary"

type SortBy = "recent" | "popular"

export interface SharedDeckInfo {
  shareId: Id<"publicDeckShares">
  deckId: Id<"userDecks">
  deckName: string
  deckDescription?: string
  sharedBy: string
  sharedAt: number
  importCount: number
}

// ===== Helpers =====

function getShareByDeckId(ctx: QueryCtx, deckId: Id<"userDecks">) {
  return ctx.db
    .query("publicDeckShares")
    .withIndex("by_deck", (q) => q.eq("deckId", deckId))
    .first()
}

// ===== Queries =====

export async function getSharedDecks(
  ctx: QueryCtx,
  args: { sortBy: SortBy; limit: number; offset: number },
): Promise<SharedDeckInfo[]> {
  const shares = await ctx.db.query("publicDeckShares").collect()

  // Join with deck info
  const results: SharedDeckInfo[] = []
  for (const share of shares) {
    const deck = await ctx.db.get(share.deckId)
    if (!deck) continue // Skip orphaned shares

    results.push({
      shareId: share._id,
      deckId: share.deckId,
      deckName: deck.deckName,
      deckDescription: deck.deckDescription,
      sharedBy: share.sharedBy,
      sharedAt: share._creationTime,
      importCount: share.importCount,
    })
  }

  // Sort
  if (args.sortBy === "popular") {
    results.sort((a, b) => b.importCount - a.importCount)
  } else {
    results.sort((a, b) => b.sharedAt - a.sharedAt)
  }

  // Paginate
  return results.slice(args.offset, args.offset + args.limit)
}

export async function isShared(ctx: QueryCtx, deckId: Id<"userDecks">) {
  return !!(await getShareByDeckId(ctx, deckId))
}

// ===== Mutations =====

export async function shareDeck(ctx: MutationCtx, deckId: Id<"userDecks">) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const deck = await ctx.db.get(deckId)
  if (!deck) throw new Error("Deck not found")
  if (deck.userId !== identity.subject) throw new Error("Unauthorized")

  if (await getShareByDeckId(ctx, deckId))
    throw new Error("Deck is already shared")

  return ctx.db.insert("publicDeckShares", {
    deckId,
    sharedBy: identity.subject,
    importCount: 0,
  })
}

export async function unshareDeck(ctx: MutationCtx, deckId: Id<"userDecks">) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const share = await getShareByDeckId(ctx, deckId)
  if (!share) throw new Error("Deck is not shared")
  if (share.sharedBy !== identity.subject) throw new Error("Unauthorized")

  await ctx.db.delete(share._id)
}

export async function importSharedDeck(
  ctx: MutationCtx,
  deckId: Id<"userDecks">,
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const share = await getShareByDeckId(ctx, deckId)
  if (!share) throw new Error("Deck is not shared")

  const originalDeck = await ctx.db.get(deckId)
  if (!originalDeck) throw new Error("Deck not found")
  if (originalDeck.userId === identity.subject)
    throw new Error("Cannot import your own deck")

  const newDeckId = await createDeckModel(ctx, {
    deckName: originalDeck.deckName,
    deckDescription: originalDeck.deckDescription,
    source: "shared",
    originalDeckId: deckId,
    allowedPracticeModes: originalDeck.allowedPracticeModes,
  })

  const vocabItems = await getDeckVocabItems(ctx, deckId)
  if (vocabItems.length > 0) {
    await createDeckVocabItems(
      ctx,
      newDeckId,
      vocabItems.map(({ _id, _creationTime, deckId: _, ...item }) => item),
    )
  }

  await ctx.db.patch(share._id, { importCount: share.importCount + 1 })

  return newDeckId
}

export async function deleteShareForDeck(
  ctx: MutationCtx,
  deckId: Id<"userDecks">,
) {
  const share = await getShareByDeckId(ctx, deckId)
  if (share) await ctx.db.delete(share._id)
}
