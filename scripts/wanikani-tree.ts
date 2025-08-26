import Database, { Database as SQLiteDB } from "better-sqlite3"
import { writeFileSync, mkdirSync } from "fs"
import { dirname } from "path"
import "dotenv/config"

const WANIKANI_API_TOKEN = process.env.WANIKANI_API_TOKEN
const API_BASE = "https://api.wanikani.com/v2"

// Character replacement mapping for visually similar Unicode variants
const CHARACTER_REPLACEMENTS: Record<string, string> = {
  ム: "厶", // Katakana Mu → CJK Radical Private Use
  ｲ: "亻",
}

// --- Type Definitions (aligned with WaniKani API response) ---

interface WaniKaniMeaning {
  meaning: string
  primary: boolean
  accepted_answer?: boolean
}

interface WaniKaniAuxiliaryMeaning {
  meaning: string
  type: "whitelist" | "blacklist"
}

interface WaniKaniReading {
  reading: string
  primary: boolean
  accepted_answer?: boolean
  type?: "onyomi" | "kunyomi" | "nanori"
}

interface WaniKaniCharacterImageMetadata {
  inline_styles: boolean
}

interface WaniKaniCharacterImage {
  url: string
  metadata: WaniKaniCharacterImageMetadata
  content_type: string
}

interface WaniKaniContextSentence {
  en: string
  ja: string
}

interface WaniKaniPronunciationAudioMetadata {
  gender: string
  source_id: number
  pronunciation: string
  voice_actor_id: number
  voice_actor_name: string
  voice_description: string
}

interface WaniKaniPronunciationAudio {
  url: string
  metadata: WaniKaniPronunciationAudioMetadata
  content_type: string
}

// Common Subject Data attributes found across radical, kanji, vocabulary, kana_vocabulary
interface WaniKaniSubjectCommonData {
  auxiliary_meanings?: WaniKaniAuxiliaryMeaning[]
  characters: string | null
  created_at: string
  document_url: string
  hidden_at: string | null
  lesson_position: number
  level: number
  meaning_mnemonic: string
  meanings: WaniKaniMeaning[]
  slug: string
  spaced_repetition_system_id: number
  reading_mnemonic?: string
  reading_hint?: string
  context_sentences?: WaniKaniContextSentence[]
  parts_of_speech?: string[]
  pronunciation_audios?: WaniKaniPronunciationAudio[]
}

// Specific Subject Data interfaces extending common attributes
interface WaniKaniRadicalData extends WaniKaniSubjectCommonData {
  object: "radical"
  amalgamation_subject_ids?: number[]
  character_images?: WaniKaniCharacterImage[]
}

interface WaniKaniKanjiData extends WaniKaniSubjectCommonData {
  object: "kanji"
  amalgamation_subject_ids?: number[]
  component_subject_ids?: number[]
  meaning_hint?: string
  readings?: WaniKaniReading[]
  visually_similar_subject_ids?: number[]
}

interface WaniKaniVocabularyData extends WaniKaniSubjectCommonData {
  object: "vocabulary"
  component_subject_ids?: number[]
  context_sentences?: WaniKaniContextSentence[]
  parts_of_speech?: string[]
  pronunciation_audios?: WaniKaniPronunciationAudio[]
  readings?: WaniKaniReading[]
}

interface WaniKaniKanaVocabularyData extends WaniKaniSubjectCommonData {
  object: "kana_vocabulary"
  context_sentences?: WaniKaniContextSentence[]
  parts_of_speech?: string[]
  pronunciation_audios?: WaniKaniPronunciationAudio[]
}

// Union type for the 'data' part of a WaniKaniApiSubject
type WaniKaniSubjectDataType =
  | WaniKaniRadicalData
  | WaniKaniKanjiData
  | WaniKaniVocabularyData
  | WaniKaniKanaVocabularyData

// Full WaniKani API Subject structure
interface WaniKaniApiSubject {
  id: number
  object: WaniKaniSubjectDataType["object"]
  url: string
  data_updated_at: string
  data: WaniKaniSubjectDataType
}

// WaniKani Collection response structure for pagination
interface WaniKaniCollectionResponse {
  object: "collection"
  url: string
  pages: {
    next_url: string | null
    previous_url: string | null
    per_page: number
  }
  total_count: number
  data_updated_at: string | null
  data: WaniKaniApiSubject[] // Ensure data is WaniKaniApiSubject array
}

// --- Core Functions ---

/**
 * Fetches all pages from a WaniKani API collection endpoint.
 */
async function fetchAllPages<T>(initialEndpoint: string): Promise<T[]> {
  let allData: T[] = []
  let currentUrl: string | null = initialEndpoint

  while (currentUrl) {
    const fullUrl =
      currentUrl.startsWith("http://") || currentUrl.startsWith("https://")
        ? currentUrl // Use full URL if provided by 'next_url'
        : `${API_BASE}${currentUrl}` // Prepend base for initial relative path

    console.log(`Fetching from: ${fullUrl}`)
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
 * Initializes the SQLite database and creates/recreates schema.
 */
function initDB(): SQLiteDB {
  const dbPath = "./public/wanikani.db"
  mkdirSync(dirname(dbPath), { recursive: true })
  const db = new Database(dbPath)

  // Clear existing tables for a fresh sync
  db.exec(`
    DROP TABLE IF EXISTS vocab_kanji;
    DROP TABLE IF EXISTS kanji_radicals;
    DROP TABLE IF EXISTS vocabulary;
    DROP TABLE IF EXISTS kana_vocabulary;
    DROP TABLE IF EXISTS kanji;
    DROP TABLE IF EXISTS radicals;
  `)

  db.exec(`
    CREATE TABLE vocabulary (
      id INTEGER PRIMARY KEY, object TEXT, characters TEXT, slug TEXT UNIQUE,
      meanings TEXT, meaning_mnemonic TEXT, reading_mnemonic TEXT
    );
    CREATE TABLE kana_vocabulary (
      id INTEGER PRIMARY KEY, object TEXT, characters TEXT, slug TEXT UNIQUE,
      meanings TEXT, meaning_mnemonic TEXT, reading_mnemonic TEXT
    );
    CREATE TABLE kanji (
      id INTEGER PRIMARY KEY, object TEXT, characters TEXT, slug TEXT UNIQUE,
      meanings TEXT, meaning_mnemonic TEXT, reading_mnemonic TEXT
    );
    CREATE TABLE radicals (
      id INTEGER PRIMARY KEY, object TEXT, characters TEXT, slug TEXT UNIQUE,
      meanings TEXT, meaning_mnemonic TEXT
    );
    CREATE TABLE vocab_kanji (
      vocab_id INTEGER NOT NULL, kanji_id INTEGER NOT NULL,
      PRIMARY KEY (vocab_id, kanji_id),
      FOREIGN KEY (vocab_id) REFERENCES vocabulary(id),
      FOREIGN KEY (kanji_id) REFERENCES kanji(id)
    );
    CREATE TABLE kanji_radicals (
      kanji_id INTEGER NOT NULL, radical_id INTEGER NOT NULL,
      PRIMARY KEY (kanji_id, radical_id),
      FOREIGN KEY (kanji_id) REFERENCES kanji(id),
      FOREIGN KEY (radical_id) REFERENCES radicals(id)
    );

    CREATE INDEX IF NOT EXISTS idx_radicals_characters ON radicals (characters);
  `)
  return db
}

/**
 * Inserts or replaces WaniKani subjects into the appropriate table.
 */
function insertSubjects(
  db: SQLiteDB,
  table: "vocabulary" | "kana_vocabulary" | "kanji" | "radicals",
  subjects: WaniKaniApiSubject[],
) {
  if (subjects.length === 0) return

  const hasReading =
    table === "vocabulary" || table === "kanji" || table === "kana_vocabulary"
  const fields = `(id, object, characters, slug, meanings, meaning_mnemonic${
    hasReading ? ", reading_mnemonic" : ""
  })`
  const placeholders = `(?, ?, ?, ?, ?, ?${hasReading ? ", ?" : ""})`

  const stmt = db.prepare(
    `INSERT OR REPLACE INTO ${table} ${fields} VALUES ${placeholders}`,
  )

  for (const subject of subjects) {
    const meaningsJSON = JSON.stringify(subject.data.meanings)

    // Apply character replacements for kanji and radicals
    let characters = subject.data.characters || null
    let slug = subject.data.slug

    if ((table === "kanji" || table === "radicals") && characters) {
      characters = CHARACTER_REPLACEMENTS[characters] || characters
      slug = CHARACTER_REPLACEMENTS[slug] || slug
    }

    const values: (string | number | null)[] = [
      subject.id,
      subject.object,
      characters,
      slug,
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
 * Inserts component relationships into join tables.
 */
function insertRelations(
  db: SQLiteDB,
  table: "vocab_kanji" | "kanji_radicals",
  subjects: WaniKaniApiSubject[],
  validComponentIds?: Set<number>,
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
    deleteStmt.run(subject.id) // Clear existing relations for this subject
    if (
      "component_subject_ids" in subject.data &&
      subject.data.component_subject_ids
    ) {
      for (const componentId of subject.data.component_subject_ids) {
        // Filter out references to components that were filtered out
        if (!validComponentIds || validComponentIds.has(componentId)) {
          insertStmt.run(subject.id, componentId)
        }
      }
    }
  }
}

/**
 * Generates TypeScript definition file for WaniKani API objects.
 */
function generateTypes() {
  const content = `// Generated WaniKani types - ${new Date().toISOString()}

export interface WaniKaniMeaning {
  meaning: string;
  primary: boolean;
  accepted_answer?: boolean;
}

export interface WaniKaniAuxiliaryMeaning {
  meaning: string;
  type: "whitelist" | "blacklist";
}

export interface WaniKaniReading {
  reading: string;
  primary: boolean;
  accepted_answer?: boolean;
  type?: "onyomi" | "kunyomi" | "nanori";
}

export interface WaniKaniCharacterImageMetadata {
  inline_styles: boolean;
}

export interface WaniKaniCharacterImage {
  url: string;
  metadata: WaniKaniCharacterImageMetadata;
  content_type: string;
}

export interface WaniKaniContextSentence {
  en: string;
  ja: string;
}

export interface WaniKaniPronunciationAudioMetadata {
  gender: string;
  source_id: number;
  pronunciation: string;
  voice_actor_id: number;
  voice_actor_name: string;
  voice_description: string;
}

export interface WaniKaniPronunciationAudio {
  url: string;
  metadata: WaniKaniPronunciationAudioMetadata;
  content_type: string;
}

interface WaniKaniSubjectCommonData {
  auxiliary_meanings?: WaniKaniAuxiliaryMeaning[];
  characters: string | null;
  created_at: string;
  document_url: string;
  hidden_at: string | null;
  lesson_position: number;
  level: number;
  meaning_mnemonic: string;
  meanings: WaniKaniMeaning[];
  slug: string;
  spaced_repetition_system_id: number;
  reading_mnemonic?: string;
  reading_hint?: string;
  context_sentences?: WaniKaniContextSentence[];
  parts_of_speech?: string[];
  pronunciation_audios?: WaniKaniPronunciationAudio[];
}

export interface WaniKaniRadicalData extends WaniKaniSubjectCommonData {
  object: "radical";
  amalgamation_subject_ids?: number[];
  character_images?: WaniKaniCharacterImage[];
}

export interface WaniKaniKanjiData extends WaniKaniSubjectCommonData {
  object: "kanji";
  amalgamation_subject_ids?: number[];
  component_subject_ids?: number[];
  meaning_hint?: string;
  readings?: WaniKaniReading[];
  visually_similar_subject_ids?: number[];
}

export interface WaniKaniVocabularyData extends WaniKaniSubjectCommonData {
  object: "vocabulary";
  component_subject_ids?: number[];
  context_sentences?: WaniKaniContextSentence[];
  parts_of_speech?: string[];
  pronunciation_audios?: WaniKaniPronunciationAudio[];
  readings?: WaniKaniReading[];
}

export interface WaniKaniKanaVocabularyData extends WaniKaniSubjectCommonData {
  object: "kana_vocabulary";
  context_sentences?: WaniKaniContextSentence[];
  parts_of_speech?: string[];
  pronunciation_audios?: WaniKaniPronunciationAudio[];
}

export type WaniKaniSubjectDataType =
  | WaniKaniRadicalData
  | WaniKaniKanjiData
  | WaniKaniVocabularyData
  | WaniKaniKanaVocabularyData;

export interface WaniKaniApiSubject {
  id: number;
  object: WaniKaniSubjectDataType["object"];
  url: string;
  data_updated_at: string;
  data: WaniKaniSubjectDataType;
}

export interface WaniKaniCollectionResponse<T> {
  object: "collection";
  url: string;
  pages: {
    next_url: string | null;
    previous_url: string | null;
    per_page: number;
  };
  total_count: number;
  data_updated_at: string | null;
  data: T[];
}

export interface WaniKaniReportResponse<T> {
  object: "report";
  url: string;
  data_updated_at: string | null;
  data: T;
}

export type WaniKaniSubjectsCollection =
  WaniKaniCollectionResponse<WaniKaniApiSubject>;
`

  const typesPath = "./public/wanikani-types.ts"
  mkdirSync(dirname(typesPath), { recursive: true })
  writeFileSync(typesPath, content, "utf-8")
}

/**
 * Main execution function.
 */
async function main() {
  const generateTypesFlag = process.argv.includes("--generate-types")

  if (!WANIKANI_API_TOKEN) {
    throw new Error("WANIKANI_API_TOKEN not set. Create a .env file.")
  }

  console.log("Initializing database...")
  const db = initDB()

  console.log("Fetching all WaniKani subjects...")
  const allSubjects = await fetchAllPages<WaniKaniApiSubject>(
    "/subjects?per_page=1000",
  )
  console.log(`✓ Fetched ${allSubjects.length} subjects.`)

  const vocabSubjects = allSubjects.filter((s) => s.object === "vocabulary")
  const kanaVocabSubjects = allSubjects.filter(
    (s) => s.object === "kana_vocabulary",
  )
  const kanjiSubjects = allSubjects.filter((s) => s.object === "kanji")
  const allRadicalSubjects = allSubjects.filter((s) => s.object === "radical")

  // Filter out radicals that have the same characters as kanji to avoid duplicates
  const kanjiCharacters = new Set(
    kanjiSubjects
      .map((k) => k.data.characters)
      .filter((chars): chars is string => chars !== null),
  )

  const radicalSubjects = allRadicalSubjects.filter((radical) => {
    if (!radical.data.characters) return true // Keep radicals without characters
    return !kanjiCharacters.has(radical.data.characters)
  })

  const filteredRadicalCount =
    allRadicalSubjects.length - radicalSubjects.length
  if (filteredRadicalCount > 0) {
    console.log(
      `✓ Filtered out ${filteredRadicalCount} duplicate radicals that share characters with kanji`,
    )
  }

  // Create a set of remaining radical IDs for filtering relationships
  const remainingRadicalIds = new Set(radicalSubjects.map((r) => r.id))

  console.log("Saving subjects and relationships to database...")
  db.transaction(() => {
    insertSubjects(db, "vocabulary", vocabSubjects)
    insertSubjects(db, "kana_vocabulary", kanaVocabSubjects)
    insertSubjects(db, "kanji", kanjiSubjects)
    insertSubjects(db, "radicals", radicalSubjects)

    // Filter subjects to only include those with component_subject_ids for relations
    insertRelations(
      db,
      "vocab_kanji",
      vocabSubjects.filter(
        (s) => (s.data as WaniKaniVocabularyData).component_subject_ids?.length,
      ),
    )
    insertRelations(
      db,
      "kanji_radicals",
      kanjiSubjects.filter(
        (s) => (s.data as WaniKaniKanjiData).component_subject_ids?.length,
      ),
      remainingRadicalIds, // Only reference radicals that weren't filtered out
    )
  })()
  console.log("✓ All subjects and relationships saved.")

  const counts = {
    vocabulary: db.prepare("SELECT COUNT(*) as c FROM vocabulary").get() as {
      c: number
    },
    kana_vocabulary: db
      .prepare("SELECT COUNT(*) as c FROM kana_vocabulary")
      .get() as {
      c: number
    },
    kanji: db.prepare("SELECT COUNT(*) as c FROM kanji").get() as { c: number },
    radicals: db.prepare("SELECT COUNT(*) as c FROM radicals").get() as {
      c: number
    },
  }

  console.log(
    `\nTotal in DB: ${counts.vocabulary.c} vocab, ` +
      `${counts.kana_vocabulary.c} kana_vocab, ` +
      `${counts.kanji.c} kanji, ` +
      `${counts.radicals.c} radicals`,
  )
  db.close()

  if (generateTypesFlag) {
    console.log("Generating wanikani-types.ts...")
    generateTypes()
  }

  const completionMessage = generateTypesFlag
    ? "\n✓ Complete! Generated ./public/wanikani.db and ./public/wanikani-types.ts"
    : "\n✓ Complete! Generated ./public/wanikani.db"
  console.log(completionMessage)
}

main().catch(console.error)
