import { unzip } from "fflate"
import { decompress } from "fzstd"
import initSqlJs from "sql.js"
import type {
  AnkiNote,
  AnkiCard,
  AnkiReview,
  AnkiExtractedData,
} from "./anki-types"
import { AnkiNoteSchema, AnkiCardSchema, AnkiReviewSchema } from "./anki-types"

/**
 * Helper function to create a mapping of column names to their indices
 * Reduces repetitive columns.indexOf() calls when parsing SQL results
 */
function createColumnMapper<T extends string>(
  columns: string[],
  fields: readonly T[],
): Record<T, number> {
  const indexMap = {} as Record<T, number>
  for (const field of fields) {
    indexMap[field] = columns.indexOf(field)
  }
  return indexMap
}

async function extractApkgFile(
  file: File,
): Promise<Map<string, Uint8Array>> {
  const buffer = await file.arrayBuffer()
  const data = new Uint8Array(buffer)

  return new Promise((resolve, reject) => {
    unzip(data, (err, result) => {
      if (err) {
        reject(new Error(`Failed to unzip .apkg file: ${err.message}`))
      } else {
        // Convert result object to Map
        const fileMap = new Map<string, Uint8Array>()
        for (const [filename, content] of Object.entries(result)) {
          fileMap.set(filename, content)
        }
        resolve(fileMap)
      }
    })
  })
}

function decompressZstd(buffer: Uint8Array): Uint8Array {
  try {
    return decompress(buffer)
  } catch (error) {
    throw new Error(
      `Failed to decompress zstd buffer: ${error instanceof Error ? error.message : String(error)}`,
    )
  }
}

async function parseAnkiDatabase(
  buffer: Uint8Array,
): Promise<AnkiExtractedData> {
  // WASM file deployed to public/sql-wasm/
  const SQL = await initSqlJs({
    locateFile: (file) => `/sql-wasm/${file}`,
  })
  const db = new SQL.Database(buffer)

  try {
    let fieldCount = 0
    try {
      const modelsResult = db.exec("SELECT models FROM col LIMIT 1")
      if (modelsResult.length > 0 && modelsResult[0].values.length > 0) {
        const modelsJson = JSON.parse(modelsResult[0].values[0][0] as string)
        // Get the first model (typically the default one)
        const firstModelId = Object.keys(modelsJson)[0]
        if (firstModelId) {
          const model = modelsJson[firstModelId]
          fieldCount = (model.flds as Array<unknown>).length || 0
        }
      }
    } catch {
      fieldCount = 0
    }

    const notesResult = db.exec(
      "SELECT id, guid, mid, mod, usn, tags, flds FROM notes",
    )
    const notes: AnkiNote[] = []

    if (notesResult.length > 0) {
      const noteFields = [
        "id",
        "guid",
        "mid",
        "mod",
        "usn",
        "tags",
        "flds",
      ] as const
      const noteIdx = createColumnMapper(notesResult[0].columns, noteFields)

      for (const row of notesResult[0].values) {
        try {
          const note = AnkiNoteSchema.parse({
            id: row[noteIdx.id],
            guid: row[noteIdx.guid],
            mid: row[noteIdx.mid],
            mod: row[noteIdx.mod],
            usn: row[noteIdx.usn],
            tags: row[noteIdx.tags],
            flds: row[noteIdx.flds],
          })
          notes.push(note)
        } catch {
          // Skip note on parse error
        }
      }
    }

    // Filter by reps > 0 (cards with review history)
    const cardsResult = db.exec(
      "SELECT id, nid, did, ord, mod, usn, type, queue, due, ivl, factor, reps, lapses, left, odue, odid, flags, data FROM cards WHERE reps > 0",
    )
    const cardsMap = new Map<number, AnkiCard[]>()
    let totalCards = 0
    let skippedCards = 0

    if (cardsResult.length > 0) {
      const cardFields = [
        "id",
        "nid",
        "did",
        "ord",
        "mod",
        "usn",
        "type",
        "queue",
        "due",
        "ivl",
        "factor",
        "reps",
        "lapses",
        "left",
        "odue",
        "odid",
        "flags",
        "data",
      ] as const
      const cardIdx = createColumnMapper(cardsResult[0].columns, cardFields)

      for (const row of cardsResult[0].values) {
        totalCards++
        try {
          const card = AnkiCardSchema.parse({
            id: row[cardIdx.id],
            nid: row[cardIdx.nid],
            did: row[cardIdx.did],
            ord: row[cardIdx.ord],
            mod: row[cardIdx.mod],
            usn: row[cardIdx.usn],
            type: row[cardIdx.type],
            queue: row[cardIdx.queue],
            due: row[cardIdx.due],
            ivl: row[cardIdx.ivl],
            factor: row[cardIdx.factor],
            reps: row[cardIdx.reps],
            lapses: row[cardIdx.lapses],
            left: row[cardIdx.left],
            odue: row[cardIdx.odue],
            odid: row[cardIdx.odid],
            flags: row[cardIdx.flags],
            data: row[cardIdx.data],
          })

          const nid = card.nid
          if (!cardsMap.has(nid)) {
            cardsMap.set(nid, [])
          }
          cardsMap.get(nid)!.push(card)
        } catch {
          skippedCards++
        }
      }
    }

    const reviewsResult = db.exec(
      "SELECT id, cid, usn, ease, ivl, lastIvl, factor, time, type FROM revlog",
    )
    const reviewsMap = new Map<number, AnkiReview[]>()

    if (reviewsResult.length > 0) {
      const reviewFields = [
        "id",
        "cid",
        "usn",
        "ease",
        "ivl",
        "lastIvl",
        "factor",
        "time",
        "type",
      ] as const
      const reviewIdx = createColumnMapper(
        reviewsResult[0].columns,
        reviewFields,
      )

      for (const row of reviewsResult[0].values) {
        try {
          const review = AnkiReviewSchema.parse({
            id: row[reviewIdx.id],
            cid: row[reviewIdx.cid],
            usn: row[reviewIdx.usn],
            ease: row[reviewIdx.ease],
            ivl: row[reviewIdx.ivl],
            lastIvl: row[reviewIdx.lastIvl],
            factor: row[reviewIdx.factor],
            time: row[reviewIdx.time],
            type: row[reviewIdx.type],
          })

          const cid = review.cid
          if (!reviewsMap.has(cid)) {
            reviewsMap.set(cid, [])
          }
          reviewsMap.get(cid)!.push(review)
        } catch {
          // Skip review on parse error
        }
      }
    }

    return {
      notes,
      cards: cardsMap,
      reviews: reviewsMap,
      fieldCount,
      totalCards,
      skippedCards,
    }
  } finally {
    db.close()
  }
}

export async function extractAnkiData(file: File): Promise<AnkiExtractedData> {
  try {
    const files = await extractApkgFile(file)
    let dbBuffer: Uint8Array | null = null

    // Try .anki21b (zstd compressed) first, fallback to .anki2
    if (files.has("collection.anki21b")) {
      const compressed = files.get("collection.anki21b")!
      dbBuffer = decompressZstd(compressed)
    } else if (files.has("collection.anki2")) {
      dbBuffer = files.get("collection.anki2")!
    } else {
      throw new Error(
        "No collection database found in .apkg file. Expected collection.anki21b or collection.anki2",
      )
    }

    return await parseAnkiDatabase(dbBuffer)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error("[AnkiExtraction] Extraction failed:", message)
    throw new Error(`Failed to extract Anki data: ${message}`)
  }
}
