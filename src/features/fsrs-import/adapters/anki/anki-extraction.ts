import { unzip } from "fflate"
import { ZSTDDecoder } from "zstddec"
import initSqlJs from "sql.js"
import type {
  AnkiNote,
  AnkiCard,
  AnkiReview,
  AnkiExtractedData,
} from "./anki-types"
import { AnkiNoteSchema, AnkiCardSchema, AnkiReviewSchema } from "./anki-types"

export async function extractApkgFile(
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

export async function decompressZstd(
  buffer: Uint8Array,
): Promise<Uint8Array> {
  try {
    const decoder = new ZSTDDecoder()
    await decoder.init()

    // Try to decode with unknown size first
    try {
      const decompressed = decoder.decode(buffer)
      return decompressed
    } catch (sizeError) {
      // If size is needed, try to extract from zstd frame header
      // zstd frame header contains content size in bytes 4-11
      // If content size is unknown (flag bit set), we may need to handle differently
      console.warn(
        "[AnkiExtraction] Failed to decompress zstd without size info",
        sizeError,
      )

      // Fallback: try to find the uncompressed size from metadata
      // This is a limitation of the zstddec library
      throw new Error(
        "Failed to decompress .anki21b: zstddec requires content size. " +
        "This may indicate a corrupted file or unsupported Anki version.",
      )
    }
  } catch (error) {
    throw new Error(
      `Failed to decompress zstd buffer: ${error instanceof Error ? error.message : String(error)}`,
    )
  }
}

export async function parseAnkiDatabase(
  buffer: Uint8Array,
): Promise<AnkiExtractedData> {
  // WASM file deployed to public/sql-wasm/
  const SQL = await initSqlJs({
    locateFile: file => `/sql-wasm/${file}`,
  })
  const db = new SQL.Database(buffer)

  try {
    let fieldCount = 0
    try {
      const modelsResult = db.exec(
        "SELECT models FROM col LIMIT 1",
      )
      if (modelsResult.length > 0 && modelsResult[0].values.length > 0) {
        const modelsJson = JSON.parse(
          modelsResult[0].values[0][0] as string,
        )
        // Get the first model (typically the default one)
        const firstModelId = Object.keys(modelsJson)[0]
        if (firstModelId) {
          const model = modelsJson[firstModelId]
          fieldCount = (model.flds as Array<unknown>).length || 0
        }
      }
    } catch (err) {
      console.warn("[AnkiExtraction] Failed to extract field count:", err)
      fieldCount = 0
    }

    const notesResult = db.exec(
      "SELECT id, guid, mid, mod, usn, tags, flds FROM notes",
    )
    const notes: AnkiNote[] = []

    if (notesResult.length > 0) {
      const columns = notesResult[0].columns
      const idIdx = columns.indexOf("id")
      const guidIdx = columns.indexOf("guid")
      const midIdx = columns.indexOf("mid")
      const modIdx = columns.indexOf("mod")
      const usnIdx = columns.indexOf("usn")
      const tagsIdx = columns.indexOf("tags")
      const fldsIdx = columns.indexOf("flds")

      for (const row of notesResult[0].values) {
        try {
          const note = AnkiNoteSchema.parse({
            id: row[idIdx],
            guid: row[guidIdx],
            mid: row[midIdx],
            mod: row[modIdx],
            usn: row[usnIdx],
            tags: row[tagsIdx],
            flds: row[fldsIdx],
          })
          notes.push(note)
        } catch (error) {
          console.warn("[AnkiExtraction] Failed to parse note:", error)
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
      const columns = cardsResult[0].columns
      const idIdx = columns.indexOf("id")
      const nidIdx = columns.indexOf("nid")
      const didIdx = columns.indexOf("did")
      const ordIdx = columns.indexOf("ord")
      const modIdx = columns.indexOf("mod")
      const usnIdx = columns.indexOf("usn")
      const typeIdx = columns.indexOf("type")
      const queueIdx = columns.indexOf("queue")
      const dueIdx = columns.indexOf("due")
      const ivlIdx = columns.indexOf("ivl")
      const factorIdx = columns.indexOf("factor")
      const repsIdx = columns.indexOf("reps")
      const lapsesIdx = columns.indexOf("lapses")
      const leftIdx = columns.indexOf("left")
      const odueIdx = columns.indexOf("odue")
      const odidIdx = columns.indexOf("odid")
      const flagsIdx = columns.indexOf("flags")
      const dataIdx = columns.indexOf("data")

      for (const row of cardsResult[0].values) {
        totalCards++
        try {
          const card = AnkiCardSchema.parse({
            id: row[idIdx],
            nid: row[nidIdx],
            did: row[didIdx],
            ord: row[ordIdx],
            mod: row[modIdx],
            usn: row[usnIdx],
            type: row[typeIdx],
            queue: row[queueIdx],
            due: row[dueIdx],
            ivl: row[ivlIdx],
            factor: row[factorIdx],
            reps: row[repsIdx],
            lapses: row[lapsesIdx],
            left: row[leftIdx],
            odue: row[odueIdx],
            odid: row[odidIdx],
            flags: row[flagsIdx],
            data: row[dataIdx],
          })

          const nid = card.nid
          if (!cardsMap.has(nid)) {
            cardsMap.set(nid, [])
          }
          cardsMap.get(nid)!.push(card)
        } catch (error) {
          console.warn("[AnkiExtraction] Failed to parse card:", error)
          skippedCards++
        }
      }
    }

    const reviewsResult = db.exec(
      "SELECT id, cid, usn, ease, ivl, lastIvl, factor, time, type FROM revlog",
    )
    const reviewsMap = new Map<number, AnkiReview[]>()

    if (reviewsResult.length > 0) {
      const columns = reviewsResult[0].columns
      const idIdx = columns.indexOf("id")
      const cidIdx = columns.indexOf("cid")
      const usnIdx = columns.indexOf("usn")
      const easeIdx = columns.indexOf("ease")
      const ivlIdx = columns.indexOf("ivl")
      const lastIvlIdx = columns.indexOf("lastIvl")
      const factorIdx = columns.indexOf("factor")
      const timeIdx = columns.indexOf("time")
      const typeIdx = columns.indexOf("type")

      for (const row of reviewsResult[0].values) {
        try {
          const review = AnkiReviewSchema.parse({
            id: row[idIdx],
            cid: row[cidIdx],
            usn: row[usnIdx],
            ease: row[easeIdx],
            ivl: row[ivlIdx],
            lastIvl: row[lastIvlIdx],
            factor: row[factorIdx],
            time: row[timeIdx],
            type: row[typeIdx],
          })

          const cid = review.cid
          if (!reviewsMap.has(cid)) {
            reviewsMap.set(cid, [])
          }
          reviewsMap.get(cid)!.push(review)
        } catch (error) {
          console.warn("[AnkiExtraction] Failed to parse review:", error)
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
  console.log("[AnkiExtraction] Starting extraction of", file.name)

  try {
    const files = await extractApkgFile(file)
    let dbBuffer: Uint8Array | null = null

    // Try .anki21b (zstd compressed) first, fallback to .anki2
    if (files.has("collection.anki21b")) {
      console.log("[AnkiExtraction] Decompressing collection.anki21b...")
      const compressed = files.get("collection.anki21b")!
      dbBuffer = await decompressZstd(compressed)
    } else if (files.has("collection.anki2")) {
      console.log("[AnkiExtraction] Found collection.anki2")
      dbBuffer = files.get("collection.anki2")!
    } else {
      throw new Error(
        "No collection database found in .apkg file. Expected collection.anki21b or collection.anki2",
      )
    }

    const extractedData = await parseAnkiDatabase(dbBuffer)

    console.log(
      `[AnkiExtraction] Successfully extracted data:`,
      `${extractedData.notes.length} notes,`,
      `${extractedData.totalCards} cards with reviews,`,
      `${extractedData.skippedCards} cards skipped (no reviews)`,
    )

    return extractedData
  } catch (error) {
    const message =
      error instanceof Error ? error.message : String(error)
    console.error("[AnkiExtraction] Extraction failed:", message)
    throw new Error(`Failed to extract Anki data: ${message}`)
  }
}
