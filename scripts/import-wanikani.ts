#!/usr/bin/env bun
/**
 * Imports WaniKani radicals and kanji data into Convex wanikaniItems table
 * Fetches from WaniKani API and imports all data at once
 * Usage: bun run import-wanikani
 *
 * Requires:
 * - WANIKANI_API_TOKEN in .env
 * - `bunx convex login` (one-time auth)
 */

import { execSync } from "child_process"
import { writeFileSync, unlinkSync } from "fs"

const WANIKANI_API_TOKEN = process.env.WANIKANI_API_TOKEN
const API_BASE = "https://api.wanikani.com/v2"

if (!WANIKANI_API_TOKEN) {
  console.error("Error: WANIKANI_API_TOKEN not set")
  console.error("Add it to your .env file")
  process.exit(1)
}

// Character replacement mapping for visually similar Unicode variants
const CHARACTER_REPLACEMENTS: Record<string, string> = {
  ム: "厶", // Katakana Mu → CJK Radical Private Use
  ｲ: "亻",
}

// WaniKani API type definitions
interface WaniKaniMeaning {
  meaning: string
  primary: boolean
  accepted_answer?: boolean
}

interface WaniKaniCharacterImage {
  url: string
  metadata: {
    inline_styles?: boolean
    dimensions?: string
    style_name?: string
    color?: string
  }
  content_type: string
}

interface WaniKaniRadicalData {
  object: "radical"
  characters: string | null
  meanings: WaniKaniMeaning[]
  meaning_mnemonic: string
  reading_mnemonic?: string
  character_images?: WaniKaniCharacterImage[]
}

interface WaniKaniKanjiData {
  object: "kanji"
  characters: string | null
  meanings: WaniKaniMeaning[]
  meaning_mnemonic: string
  reading_mnemonic?: string
  component_subject_ids?: number[]
}

interface WaniKaniApiSubject {
  id: number
  object: string
  data: WaniKaniRadicalData | WaniKaniKanjiData
}

interface WaniKaniCollectionResponse {
  object: "collection"
  pages: {
    next_url: string | null
  }
  data: WaniKaniApiSubject[]
}

// Convex wanikaniItems format
interface WaniKaniItem {
  wanikaniId: number
  characters?: string
  characterType: "radical" | "kanji"
  meanings: string[]
  readingMnemonic?: string
  meaningMnemonic: string
  componentIds: number[]
  characterImageUrl?: string
}

/**
 * Applies character replacements for visually similar Unicode variants
 */
function applyCharacterReplacements(characters: string | null): string | undefined {
  if (!characters) return undefined
  return CHARACTER_REPLACEMENTS[characters] ?? characters
}

/**
 * Selects the best meaning mnemonic between radical and kanji
 * Prefers the one with actual content rather than "same as X" descriptions
 */
function selectBestMeaningMnemonic(radicalMnemonic: string, kanjiMnemonic: string): string {
  const unhelpfulRadicalPatterns = [
    "same as the kanji",
    "radical for",
    "exact same",
  ]
  const unhelpfulKanjiPatterns = [
    "same as the radical",
    "kanji for",
    "exact same",
  ]

  const radicalIsUnhelpful = unhelpfulRadicalPatterns.some((pattern) =>
    radicalMnemonic.toLowerCase().includes(pattern.toLowerCase()),
  )
  const kanjiIsUnhelpful = unhelpfulKanjiPatterns.some((pattern) =>
    kanjiMnemonic.toLowerCase().includes(pattern.toLowerCase()),
  )

  // If radical is unhelpful, use kanji
  if (radicalIsUnhelpful && !kanjiIsUnhelpful) return kanjiMnemonic

  // If kanji is unhelpful, use radical
  if (kanjiIsUnhelpful && !radicalIsUnhelpful) return radicalMnemonic

  // Both have unhelpful patterns or both are helpful - prefer longest
  return radicalMnemonic.length > kanjiMnemonic.length ? radicalMnemonic : kanjiMnemonic
}

/**
 * Extracts meaning strings from WaniKani meaning objects
 */
function extractMeanings(meanings: WaniKaniMeaning[]): string[] {
  return meanings.map((m) => m.meaning)
}

/**
 * Selects the best character image URL from the array
 * Preference: SVG > 512px PNG > lower resolutions
 */
function selectBestCharacterImage(
  images?: WaniKaniCharacterImage[],
): string | undefined {
  if (!images || images.length === 0) return undefined

  // First look for SVG
  const svg = images.find((img) => img.content_type === "image/svg+xml")
  if (svg) return svg.url

  // Then look for 512x512 PNG
  const png512 = images.find(
    (img) => img.content_type === "image/png" && img.metadata.dimensions === "512x512",
  )
  if (png512) return png512.url

  // Fall back to first available PNG
  const png = images.find((img) => img.content_type === "image/png")
  if (png) return png.url

  // Last resort: first image
  return images[0]?.url
}

/**
 * Fetches all pages from a WaniKani API collection endpoint
 */
async function fetchAllPages<T>(initialEndpoint: string): Promise<T[]> {
  let allData: T[] = []
  let currentUrl: string | null = initialEndpoint

  while (currentUrl) {
    const fullUrl =
      currentUrl.startsWith("http://") || currentUrl.startsWith("https://")
        ? currentUrl
        : `${API_BASE}${currentUrl}`

    console.log(`   Fetching from: ${fullUrl}`)
    const response = await fetch(fullUrl, {
      headers: {
        Authorization: `Bearer ${WANIKANI_API_TOKEN}`,
        "Wanikani-Revision": "20170710",
      },
    })

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText} for ${fullUrl}`,
      )
    }

    const responseBody: WaniKaniCollectionResponse = await response.json()
    allData = allData.concat(responseBody.data as T[])
    currentUrl = responseBody.pages?.next_url || null
  }

  return allData
}

/**
 * Builds optimized lookup maps for ID remapping
 */
function buildIdMappings(radicalSubjects: WaniKaniApiSubject[], kanjiSubjects: WaniKaniApiSubject[]) {
  // Map kanji characters to their IDs
  const kanjiCharToId = new Map<string, number>()
  for (const kanji of kanjiSubjects) {
    const chars = (kanji.data as WaniKaniKanjiData).characters
    if (chars) {
      kanjiCharToId.set(chars, kanji.id)
    }
  }

  // Build radical→kanji mapping for duplicates + meaning mnemonic transfer
  const radicalToKanjiMap = new Map<number, number>()
  const radicalMeaningMnemonicMap = new Map<number, string>()
  for (const radical of radicalSubjects) {
    const chars = (radical.data as WaniKaniRadicalData).characters

    if (chars && kanjiCharToId.has(chars)) {
      const kanjiId = kanjiCharToId.get(chars)!
      radicalToKanjiMap.set(radical.id, kanjiId)

      // Find matching kanji and select best mnemonic
      const matchingKanji = kanjiSubjects.find((k) => k.id === kanjiId)
      if (matchingKanji) {
        const radicalMnemonic = (radical.data as WaniKaniRadicalData).meaning_mnemonic
        const kanjiMnemonic = (matchingKanji.data as WaniKaniKanjiData).meaning_mnemonic
        const bestMnemonic = selectBestMeaningMnemonic(radicalMnemonic, kanjiMnemonic)

        radicalMeaningMnemonicMap.set(kanjiId, bestMnemonic)
      }
    }
  }

  return { kanjiCharToId, radicalToKanjiMap, radicalMeaningMnemonicMap }
}

/**
 * Filters out radicals that have the same characters as kanji
 */
function filterDuplicateRadicals(
  radicalSubjects: WaniKaniApiSubject[],
  kanjiCharToId: Map<string, number>,
) {
  return radicalSubjects.filter((radical) => {
    const characters = (radical.data as WaniKaniRadicalData).characters
    if (!characters) return true // Keep radicals without characters
    return !kanjiCharToId.has(characters)
  })
}

/**
 * Transforms a radical subject to Convex format
 */
function transformRadicalToItem(subject: WaniKaniApiSubject): WaniKaniItem {
  const data = subject.data as WaniKaniRadicalData
  const characters = applyCharacterReplacements(data.characters)

  return {
    wanikaniId: subject.id,
    characters,
    meanings: extractMeanings(data.meanings),
    meaningMnemonic: data.meaning_mnemonic,
    readingMnemonic: data.reading_mnemonic,
    componentIds: [],
    characterImageUrl: selectBestCharacterImage(data.character_images),
    characterType: "radical",
  }
}

/**
 * Transforms a kanji subject to Convex format with ID remapping
 */
function transformKanjiToItem(
  subject: WaniKaniApiSubject,
  radicalToKanjiMap: Map<number, number>,
  radicalMeaningMnemonicMap: Map<number, string>,
): WaniKaniItem {
  const data = subject.data as WaniKaniKanjiData
  const characters = applyCharacterReplacements(data.characters)

  // Remap component IDs: replace filtered radical IDs with their kanji equivalents
  // Filter out self-references
  const remappedComponentIds = (data.component_subject_ids ?? [])
    .map((id) => radicalToKanjiMap.get(id) ?? id)
    .filter((id) => id !== subject.id)

  // Use radical's meaning mnemonic if this kanji replaced a radical
  const meaningMnemonic =
    radicalMeaningMnemonicMap.get(subject.id) ?? data.meaning_mnemonic

  return {
    wanikaniId: subject.id,
    characters,
    meanings: extractMeanings(data.meanings),
    meaningMnemonic,
    readingMnemonic: data.reading_mnemonic,
    componentIds: remappedComponentIds,
    characterImageUrl: undefined,
    characterType: "kanji",
  }
}

console.log("Starting WaniKani import...")
console.log("")

  ; (async () => {
    try {
      console.log("Fetching WaniKani subjects from API...")
      const allSubjects = await fetchAllPages<WaniKaniApiSubject>(
        "/subjects?per_page=1000",
      )
      console.log(`Fetched ${allSubjects.length} total subjects`)
      console.log("")

      // Filter to only radicals and kanji
      const radicalSubjects = allSubjects.filter((s) => s.object === "radical")
      const kanjiSubjects = allSubjects.filter((s) => s.object === "kanji")

      console.log(`Found:`)
      console.log(`   - ${radicalSubjects.length} radicals`)
      console.log(`   - ${kanjiSubjects.length} kanji`)
      console.log("")

      // Build ID mappings
      const { kanjiCharToId, radicalToKanjiMap, radicalMeaningMnemonicMap } =
        buildIdMappings(radicalSubjects, kanjiSubjects)

      // Filter duplicate radicals
      const filteredRadicals = filterDuplicateRadicals(
        radicalSubjects,
        kanjiCharToId,
      )

      const filteredCount = radicalSubjects.length - filteredRadicals.length
      if (filteredCount > 0) {
        console.log(
          `Filtered out ${filteredCount} radicals with duplicate characters`,
        )
        console.log("")
      }

      // Transform to Convex format
      const items: WaniKaniItem[] = [
        ...filteredRadicals.map(transformRadicalToItem),
        ...kanjiSubjects.map((kanji) =>
          transformKanjiToItem(kanji, radicalToKanjiMap, radicalMeaningMnemonicMap),
        ),
      ]

      console.log(`Prepared ${items.length} items for import`)
      console.log("")

      // Write JSONLines file and import via Convex CLI
      const itemsFile = "scripts/.tmp-wanikani-items.jsonl"
      writeFileSync(itemsFile, items.map((i) => JSON.stringify(i)).join("\n"))

      try {
        console.log(`Importing ${items.length} WaniKani items...`)
        execSync(`bunx convex import --table wanikaniItems ${itemsFile} --replace`, {
          stdio: "inherit",
        })
        console.log("")
        console.log("Done!")
      } finally {
        unlinkSync(itemsFile)
      }
    } catch (error) {
      console.error("Fatal error:", error)
      process.exit(1)
    }
  })()
