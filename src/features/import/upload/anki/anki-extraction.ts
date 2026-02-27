import { unzip } from "fflate"
import { decompress } from "fzstd"
import initSqlJs from "sql.js"
import sqlWasmUrl from "/sql-wasm/sql-wasm.wasm?url"
import type {
  AnkiNote,
  AnkiCard,
  AnkiReview,
  AnkiExtractedData,
} from "./anki-types"
import { AnkiNoteSchema, AnkiCardSchema, AnkiReviewSchema } from "./anki-types"

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
  const SQL = await initSqlJs({
    locateFile: () => sqlWasmUrl,
  })
  const db = new SQL.Database(buffer)

  try {
    let fieldCount = 0
    try {
      const modelsResult = db.exec("SELECT models FROM col LIMIT 1")
      if (modelsResult.length > 0 && modelsResult[0].values.length > 0) {
        const modelsJson = JSON.parse(modelsResult[0].values[0][0] as string)
        const firstModelId = Object.keys(modelsJson)[0]
        if (firstModelId) {
          const model = modelsJson[firstModelId]
          fieldCount = (model.flds as Array<unknown>).length || 0
        }
      }
    } catch {
      fieldCount = 0
    }

    // Column indices match SELECT order — sql.js may not populate .columns
    const notesResult = db.exec(
      "SELECT id, guid, mid, mod, usn, tags, flds FROM notes",
    )
    const notes: AnkiNote[] = []

    if (notesResult.length > 0) {
      for (const row of notesResult[0].values) {
        try {
          const note = AnkiNoteSchema.parse({
            id: row[0],
            guid: row[1],
            mid: row[2],
            mod: row[3],
            usn: row[4],
            tags: row[5],
            flds: row[6],
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
      for (const row of cardsResult[0].values) {
        totalCards++
        try {
          const card = AnkiCardSchema.parse({
            id: row[0],
            nid: row[1],
            did: row[2],
            ord: row[3],
            mod: row[4],
            usn: row[5],
            type: row[6],
            queue: row[7],
            due: row[8],
            ivl: row[9],
            factor: row[10],
            reps: row[11],
            lapses: row[12],
            left: row[13],
            odue: row[14],
            odid: row[15],
            flags: row[16],
            data: row[17],
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
      for (const row of reviewsResult[0].values) {
        try {
          const review = AnkiReviewSchema.parse({
            id: row[0],
            cid: row[1],
            usn: row[2],
            ease: row[3],
            ivl: row[4],
            lastIvl: row[5],
            factor: row[6],
            time: row[7],
            type: row[8],
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
    throw new Error(`Failed to extract Anki data: ${message}`)
  }
}
