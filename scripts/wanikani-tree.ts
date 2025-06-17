import Database, { Database as SQLiteDB } from "better-sqlite3"
import { writeFileSync, readFileSync, mkdirSync } from "fs"
import { dirname } from "path"
import "dotenv/config" // For loading .env file

// --- Constants and Configuration ---
// NOTE: Create a .env file in the same directory with the line:
// WANIKANI_API_TOKEN="your_api_token_here"
const WANIKANI_API_TOKEN = process.env.WANIKANI_API_TOKEN
const API_BASE = "https://api.wanikani.com/v2"

// --- Type Definitions ---
// These types are used within the script for type safety.
interface WaniKaniSubject {
  id: number
  object: "vocabulary" | "kanji" | "radical"
  data: {
    characters: string
    meanings: {
      meaning: string
      primary: boolean
    }[]
    slug: string
    meaning_mnemonic: string
    reading_mnemonic?: string
    component_subject_ids?: number[]
  }
}

// --- Core Functions ---

/**
 * Reads vocabulary words from ./scripts/new-vocab.txt file.
 * Strips quotes, commas, and spaces, then filters out empty lines.
 */
function readVocabFile(): string[] {
  try {
    const content = readFileSync("./scripts/new-vocab.txt", "utf-8")
    return content
      .split("\n")
      .map((line) => line.replace(/[",\s]/g, ""))
      .filter((line) => line.length > 0)
  } catch (error) {
    throw new Error(
      "Could not read ./scripts/new-vocab.txt file. Make sure it exists.",
    )
  }
}

/**
 * Fetches data from a specified WaniKani API endpoint.
 */
async function fetchFromAPI(endpoint: string) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${WANIKANI_API_TOKEN}`,
      "Wanikani-Revision": "20170710",
    },
  })

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    )
  }
  return response.json()
}

/**
 * Initializes the SQLite database and creates the schema if it doesn't exist.
 */
function initDB(): SQLiteDB {
  const dbPath = "./app/data/wanikani/wanikani.db"

  // Ensure directory exists
  mkdirSync(dirname(dbPath), { recursive: true })

  const db = new Database(dbPath)

  // CHANGED: Renamed 'meaning' column to 'meanings'
  db.exec(`
    CREATE TABLE IF NOT EXISTS vocabulary (
      id INTEGER PRIMARY KEY, object TEXT, characters TEXT, slug TEXT UNIQUE,
      meanings TEXT,
      meaning_mnemonic TEXT, reading_mnemonic TEXT
    );
    CREATE TABLE IF NOT EXISTS kanji (
      id INTEGER PRIMARY KEY, object TEXT, characters TEXT, slug TEXT,
      meanings TEXT,
      meaning_mnemonic TEXT, reading_mnemonic TEXT
    );
    CREATE TABLE IF NOT EXISTS radicals (
      id INTEGER PRIMARY KEY, object TEXT, characters TEXT, slug TEXT,
      meanings TEXT,
      meaning_mnemonic TEXT
    );
    CREATE TABLE IF NOT EXISTS vocab_kanji (
      vocab_id INTEGER NOT NULL,
      kanji_id INTEGER NOT NULL,
      PRIMARY KEY (vocab_id, kanji_id),
      FOREIGN KEY (vocab_id) REFERENCES vocabulary(id),
      FOREIGN KEY (kanji_id) REFERENCES kanji(id)
    );
    CREATE TABLE IF NOT EXISTS kanji_radicals (
      kanji_id INTEGER NOT NULL,
      radical_id INTEGER NOT NULL,
      PRIMARY KEY (kanji_id, radical_id),
      FOREIGN KEY (kanji_id) REFERENCES kanji(id),
      FOREIGN KEY (radical_id) REFERENCES radicals(id)
    );
  `)

  return db
}

/**
 * Inserts or replaces subjects into the appropriate table (vocabulary, kanji, or radicals).
 */
function insertSubjects(
  db: SQLiteDB,
  table: "vocabulary" | "kanji" | "radicals",
  subjects: WaniKaniSubject[],
) {
  if (subjects.length === 0) return

  const hasReading = table !== "radicals"
  // CHANGED: Renamed 'meaning' field to 'meanings'
  const fields = `(id, object, characters, slug, meanings, meaning_mnemonic${
    hasReading ? ", reading_mnemonic" : ""
  })`
  const placeholders = `(?, ?, ?, ?, ?, ?${hasReading ? ", ?" : ""})`

  const stmt = db.prepare(
    `INSERT OR REPLACE INTO ${table} ${fields} VALUES ${placeholders}`,
  )

  for (const subject of subjects) {
    const meaningsJSON = JSON.stringify(subject.data.meanings)

    const values: (string | number | null)[] = [
      subject.id,
      subject.object,
      subject.data.characters || null, // Radicals can have null characters
      subject.data.slug,
      meaningsJSON,
      subject.data.meaning_mnemonic,
    ]
    if (hasReading) {
      values.push(subject.data.reading_mnemonic || null)
    }
    stmt.run(...values)
  }
}

/**
 * Inserts component relationships into the appropriate join table.
 * It first clears existing relationships for the parent subjects to ensure freshness.
 */
function insertRelations(
  db: SQLiteDB,
  table: "vocab_kanji" | "kanji_radicals",
  subjects: WaniKaniSubject[],
) {
  if (subjects.length === 0) return

  const [parentIdCol, childIdCol] =
    table === "vocab_kanji"
      ? ["vocab_id", "kanji_id"]
      : ["kanji_id", "radical_id"]

  const deleteStmt = db.prepare(`DELETE FROM ${table} WHERE ${parentIdCol} = ?`)
  const insertStmt = db.prepare(
    `INSERT OR IGNORE INTO ${table} (${parentIdCol}, ${childIdCol}) VALUES (?, ?)`,
  )

  for (const subject of subjects) {
    deleteStmt.run(subject.id)
    if (subject.data.component_subject_ids) {
      for (const componentId of subject.data.component_subject_ids) {
        insertStmt.run(subject.id, componentId)
      }
    }
  }
}

/**
 * Generates a TypeScript definition file for WaniKani API objects.
 */
function generateTypes() {
  const content = `// Generated WaniKani types - ${new Date().toISOString()}

export interface WaniKaniMeaning {
  meaning: string;
  primary: boolean;
}

export interface WaniKaniSubject {
  id: number;
  object: string;
  data: {
    characters: string;
    meanings: WaniKaniMeaning[];
    slug: string;
    meaning_mnemonic: string;
    reading_mnemonic?: string;
    component_subject_ids?: number[];
  };
}

export interface WaniKaniCollection {
  object: string;
  data: WaniKaniSubject[];
}
`

  const typesPath = "./app/data/wanikani/wanikani-types.ts"
  mkdirSync(dirname(typesPath), { recursive: true })
  writeFileSync(typesPath, content, "utf-8")
}

/**
 * Main execution function.
 */
async function main() {
  const generateTypesFlag = process.argv.includes("--generate-types")

  if (!WANIKANI_API_TOKEN) {
    throw new Error(
      "WANIKANI_API_TOKEN not set. Please create a .env file with your token.",
    )
  }

  const words = readVocabFile()

  if (words.length === 0) {
    throw new Error("No vocabulary words found in ./scripts/new-vocab.txt")
  }

  console.log(`Processing ${words.length} words: ${words.join(", ")}`)
  const db = initDB()

  // 1. Fetch initial vocabulary
  console.log("Fetching vocabulary...")
  const vocabResponse = await fetchFromAPI(
    `/subjects?types=vocabulary&slugs=${words.join(",")}`,
  )
  const vocabSubjects: WaniKaniSubject[] = vocabResponse.data

  const matchedSlugs = new Set(vocabSubjects.map((v) => v.data.slug))
  const unmatchedWords = words.filter((word) => !matchedSlugs.has(word))

  if (vocabSubjects.length === 0) {
    throw new Error(
      `No vocabulary found for any of the provided slugs: ${words.join(", ")}`,
    )
  }
  console.log(`✓ Found ${vocabSubjects.length} vocabulary words`)

  // 2. Collect component Kanji IDs
  const kanjiIds = new Set<number>()
  vocabSubjects.forEach((v) =>
    v.data.component_subject_ids?.forEach((id) => kanjiIds.add(id)),
  )

  // 3. Fetch Kanji
  let kanjiSubjects: WaniKaniSubject[] = []
  if (kanjiIds.size > 0) {
    console.log(`Fetching ${kanjiIds.size} kanji...`)
    const kanjiResponse = await fetchFromAPI(
      `/subjects?ids=${Array.from(kanjiIds).join(",")}`,
    )
    kanjiSubjects = kanjiResponse.data
  }

  // 4. Collect component Radical IDs
  const radicalIds = new Set<number>()
  kanjiSubjects.forEach((k) =>
    k.data.component_subject_ids?.forEach((id) => radicalIds.add(id)),
  )

  // 5. Fetch Radicals
  let radicalSubjects: WaniKaniSubject[] = []
  if (radicalIds.size > 0) {
    console.log(`Fetching ${radicalIds.size} radicals...`)
    const radicalResponse = await fetchFromAPI(
      `/subjects?ids=${Array.from(radicalIds).join(",")}`,
    )
    radicalSubjects = radicalResponse.data
  }

  // 6. Insert all data
  console.log("Saving to database...")
  db.transaction(() => {
    insertSubjects(db, "vocabulary", vocabSubjects)
    insertSubjects(db, "kanji", kanjiSubjects)
    insertSubjects(db, "radicals", radicalSubjects)
    insertRelations(db, "vocab_kanji", vocabSubjects)
    insertRelations(db, "kanji_radicals", kanjiSubjects)
  })()

  // 7. Generate types if requested
  if (generateTypesFlag) {
    console.log("Generating wanikani-types.ts...")
    generateTypes()
  }

  // 8. Show results from the database
  // CHANGED: Updated query to use the 'meanings' column.
  const results = db
    .prepare(
      `
    SELECT
      v.characters as vocab_chars,
      json_extract(v.meanings, '$[0].meaning') as vocab_meaning,
      GROUP_CONCAT(k.characters || ' (' || json_extract(k.meanings, '$[0].meaning') || ')', ', ') as kanji_components
    FROM vocabulary v
    LEFT JOIN vocab_kanji vk ON v.id = vk.vocab_id
    LEFT JOIN kanji k ON vk.kanji_id = k.id
    WHERE v.slug IN (${words.map(() => "?").join(",")})
    GROUP BY v.id
  `,
    )
    .all(...words)

  console.log("\nDependency Trees:")
  results.forEach((r: any) => {
    console.log(
      `  ${r.vocab_chars} (${r.vocab_meaning}) → ${
        r.kanji_components || "(kana only)"
      }`,
    )
  })

  if (unmatchedWords.length > 0) {
    console.log("\nVocabulary not found:")
    unmatchedWords.forEach((word) => {
      console.log(`  ❌ ${word}`)
    })
  }

  const counts = {
    vocab: db.prepare("SELECT COUNT(*) as c FROM vocabulary").get() as any,
    kanji: db.prepare("SELECT COUNT(*) as c FROM kanji").get() as any,
    radicals: db.prepare("SELECT COUNT(*) as c FROM radicals").get() as any,
  }

  console.log(
    `\nTotal in DB: ${counts.vocab.c} vocab, ${counts.kanji.c} kanji, ${counts.radicals.c} radicals`,
  )
  db.close()

  const completionMessage = generateTypesFlag
    ? "\n✓ Complete! Generated ./app/data/wanikani/wanikani.db and ./app/data/wanikani/wanikani-types.ts"
    : "\n✓ Complete! Generated ./app/data/wanikani/wanikani.db"
  console.log(completionMessage)
}

main().catch(console.error)
