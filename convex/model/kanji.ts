import { QueryCtx } from '../_generated/server'
import type { Doc } from '../_generated/dataModel'
import type { KanjiEntry, RadicalEntry } from '../validators'

type WanikaniItem = Doc<'wanikaniItems'>

/**
 * Fetch kanji and radical data from wanikaniItems table
 * Skips missing entries (no placeholders)
 *
 * TODO: Will eventually fetch from additional sources and orchestrate
 * based on user preferences (e.g., WaniKani API, custom kanji sources)
 */
export async function fetchKanjiAndRadicals(
  ctx: QueryCtx,
  kanjiChars: string[],
  radicalChars: string[] = []
): Promise<{
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
  skippedKanji: string[]
  skippedRadicals: string[]
}> {
  if (kanjiChars.length === 0 && radicalChars.length === 0) {
    return { kanji: [], radicals: [], skippedKanji: [], skippedRadicals: [] }
  }

  const items = await fetchWanikaniItemsByCharacters(ctx, [...kanjiChars, ...radicalChars])
  const { kanjiMap, radicalMap } = partitionItemsByType(items)
  const componentMap = await buildComponentRadicalMap(ctx, kanjiMap)

  const { entries: kanji, skipped: skippedKanji } = buildKanjiEntries(kanjiChars, kanjiMap, componentMap)
  const { entries: radicals, skipped: skippedRadicals } = buildRadicalEntries(radicalChars, radicalMap)

  return { kanji, radicals, skippedKanji, skippedRadicals }
}

async function fetchWanikaniItemsByCharacters(
  ctx: QueryCtx,
  characters: string[]
): Promise<WanikaniItem[]> {
  const items: WanikaniItem[] = []
  for (const char of characters) {
    const item = await ctx.db
      .query('wanikaniItems')
      .withIndex('by_character', (q) => q.eq('characters', char))
      .first()
    if (item) {
      items.push(item)
    }
  }
  return items
}

function partitionItemsByType(items: WanikaniItem[]): {
  kanjiMap: Map<string, WanikaniItem>
  radicalMap: Map<string, WanikaniItem>
} {
  const kanjiMap = new Map<string, WanikaniItem>()
  const radicalMap = new Map<string, WanikaniItem>()

  for (const item of items) {
    if (item.characterType === 'kanji' && item.characters) {
      kanjiMap.set(item.characters, item)
    } else if (item.characterType === 'radical' && item.characters) {
      radicalMap.set(item.characters, item)
    }
  }

  return { kanjiMap, radicalMap }
}

async function buildComponentRadicalMap(
  ctx: QueryCtx,
  kanjiMap: Map<string, WanikaniItem>
): Promise<Map<number, string>> {
  const componentIds = new Set<number>()
  for (const item of kanjiMap.values()) {
    item.componentIds.forEach((id) => componentIds.add(id))
  }

  const map = new Map<number, string>()
  if (componentIds.size === 0) return map

  const allRadicals = await ctx.db.query('wanikaniItems').collect()
  for (const item of allRadicals) {
    if (
      item.characterType === 'radical' &&
      item.characters &&
      componentIds.has(item.wanikaniId)
    ) {
      map.set(item.wanikaniId, item.characters)
    }
  }

  return map
}

function buildKanjiEntries(
  kanjiChars: string[],
  kanjiMap: Map<string, WanikaniItem>,
  componentMap: Map<number, string>
): { entries: KanjiEntry[]; skipped: string[] } {
  const entries: KanjiEntry[] = []
  const skipped: string[] = []

  for (const char of kanjiChars) {
    const item = kanjiMap.get(char)
    if (!item) {
      skipped.push(char)
      continue
    }

    const radicalComponents = item.componentIds
      .map((id) => componentMap.get(id))
      .filter((c): c is string => c !== undefined)

    entries.push({
      kanji: char,
      radicalComponents,
      meanings: item.meanings,
      meaningMnemonic: item.meaningMnemonic,
      ...(item.readingMnemonic && { readingMnemonic: item.readingMnemonic }),
    })
  }

  return { entries, skipped }
}

function buildRadicalEntries(
  radicalChars: string[],
  radicalMap: Map<string, WanikaniItem>
): { entries: RadicalEntry[]; skipped: string[] } {
  const entries: RadicalEntry[] = []
  const skipped: string[] = []

  for (const char of radicalChars) {
    const item = radicalMap.get(char)
    if (!item) {
      skipped.push(char)
      continue
    }

    entries.push({
      radical: char,
      meanings: item.meanings,
      meaningMnemonic: item.meaningMnemonic,
    })
  }

  return { entries, skipped }
}
