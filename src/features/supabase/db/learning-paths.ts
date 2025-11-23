import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import type {
  LearningPathChapter,
  ResolvedModule,
  DynamicModule,
  Module,
} from "@/data/types"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"

const MODULES_PER_CHAPTER = 30

export type TranscriptLine = {
  line_id: number
  text: string
  english: string
  timestamp?: string
}

// Upload learning path to database with vocabulary decks and module sources
export interface UploadLearningPathInput {
  userId: string
  transcript: {
    name: string
    show_name?: string
    episode_name?: string
    transcript_data: unknown
  }
  selectedGrammarModules: Array<{
    moduleId: string
    transcriptLineIds: number[]
    orderIndex: number
  }>
  selectedVocabDecks: Array<{
    isVerbDeck: boolean
    words: Array<{
      word: string
      furigana?: string
      english?: string
    }>
    transcriptLineIds: number[]
    orderIndex: number
  }>
}

export async function uploadLearningPath(
  input: UploadLearningPathInput,
): Promise<string> {
  const supabase = createSupabaseClient()

  // Build vocabulary deck data for RPC
  const vocabDecks = input.selectedVocabDecks.map((deck, index) => {
    const posLabel = deck.isVerbDeck ? "Verbs" : "Non-Verbs"
    return {
      ...deck,
      deckName: `${posLabel} - Part ${index + 1}`,
      deckDescription: `Vocabulary from ${input.transcript.name}`,
    }
  })

  // Build module sources data for RPC (grammar only)
  // Vocabulary module sources are created by RPC after generating deck_ids
  const moduleSources = input.selectedGrammarModules.map((module) => ({
    ...module,
    sourceType: "grammar",
  }))

  // Call RPC function to upload everything atomically
  const { data, error } = await supabase.rpc("upload_learning_path", {
    user_id_param: input.userId,
    transcript_data: input.transcript,
    vocab_decks: vocabDecks,
    module_sources: moduleSources,
  })

  if (error) {
    throw new Error(`Failed to upload learning path: ${error.message}`)
  }

  if (!data || typeof data !== "object" || !("path_id" in data)) {
    throw new Error("Invalid response from upload_learning_path")
  }

  return (data as { path_id: string }).path_id
}

/**
 * Gets all learning paths created by a user.
 * @param userId - The user ID to fetch learning paths for
 * @returns Array of learning path transcripts for the user
 */
export async function getUserLearningPaths(
  userId: string,
): Promise<LearningPathTranscript[]> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("learning_path_transcripts")
    .select("*")
    .eq("user_id", userId)

  if (error) {
    throw new Error(`Failed to fetch user learning paths: ${error.message}`)
  }

  return (data || []) as LearningPathTranscript[]
}

/**
 * Gets chapters for a generated learning path from database.
 * Segments modules into chapters (MODULES_PER_CHAPTER per chapter).
 * Returns lightweight chapters with module IDs only (no full module data).
 * Modules are ordered by order_index (deterministic ordering).
 */
export async function getUserPathChaptersAsync(
  pathId: string,
): Promise<LearningPathChapter[]> {
  const supabase = createSupabaseClient()

  const { data: moduleSources } = await supabase
    .from("learning_path_module_sources")
    .select("module_id")
    .eq("path_id", pathId)
    .order("order_index", { ascending: true })

  if (!moduleSources?.length) return []

  const moduleIds = moduleSources.map((m) => m.module_id)
  const chapters: LearningPathChapter[] = []

  for (let i = 0; i < moduleIds.length; i += MODULES_PER_CHAPTER) {
    const chapterNum = Math.floor(i / MODULES_PER_CHAPTER) + 1
    chapters.push({
      slug: `chapter-${chapterNum}`,
      title: `Chapter ${chapterNum}`,
      learning_path_item_ids: moduleIds.slice(i, i + MODULES_PER_CHAPTER),
    })
  }

  return chapters
}

/**
 * Gets fully resolved modules for a specific chapter in a user-created learning path.
 * @param pathId - The learning path ID
 * @param chapterSlug - The chapter slug (e.g., "chapter-1")
 * @returns Array of resolved modules with full metadata
 */
export async function getUserPathChapterModules(
  pathId: string,
  chapterSlug: string,
): Promise<ResolvedModule[]> {
  const supabase = createSupabaseClient()

  // Get the chapter to find the module IDs
  const chapters = await getUserPathChaptersAsync(pathId)
  const chapter = chapters.find((ch) => ch.slug === chapterSlug)

  if (!chapter) return []

  // Query module sources - just get module_id and source_type
  const { data: moduleSources, error } = await supabase
    .from("learning_path_module_sources")
    .select("module_id, source_type")
    .eq("path_id", pathId)
    .in("module_id", chapter.learning_path_item_ids)
    .order("order_index", { ascending: true })

  if (error) {
    console.error("[getUserPathChapterModules] Query error:", error)
    return []
  }

  if (!moduleSources?.length) return []

  // For vocabulary modules, we need to fetch user_deck data separately
  const vocabModuleIds = moduleSources
    .filter((m) => m.source_type === "vocabulary")
    .map((m) => m.module_id)

  let userDecksMap: Record<string, any> = {}
  if (vocabModuleIds.length > 0) {
    const { data: userDecks, error: decksError } = await supabase
      .from("user_decks")
      .select("deck_id, deck_name, allowed_practice_modes")
      .in("deck_id", vocabModuleIds)

    if (decksError) {
      console.error(
        "[getUserPathChapterModules] Error fetching user decks:",
        decksError,
      )
    } else if (userDecks) {
      userDecksMap = Object.fromEntries(
        userDecks.map((deck) => [deck.deck_id, deck]),
      )
    }
  }

  const modules = {
    ...static_modules,
    ...dynamic_modules,
    ...external_resources,
  }

  return moduleSources
    .map((row) => {
      let module: Module | undefined

      if (row.source_type === "grammar") {
        // Lookup grammar module in static/dynamic/external collections
        module = modules[row.module_id]
      } else if (row.source_type === "vocabulary") {
        // Create DynamicModule from user deck
        const deckData = userDecksMap[row.module_id]
        if (deckData) {
          module = {
            title: deckData.deck_name,
            source_type: "vocab-practice" as const,
            vocab_set_ids: [row.module_id],
            allowed_practice_modes: deckData.allowed_practice_modes,
          } as DynamicModule
        }
      }

      return {
        key: row.module_id,
        module,
        disabled: false,
      } as
        | ResolvedModule
        | { key: string; module: undefined; disabled: boolean }
    })
    .filter((item): item is ResolvedModule => item.module !== undefined)
}

/**
 * Gets transcript data for a learning path.
 * Shared across all modules in the path for efficient caching.
 * @param pathId - The learning path ID
 * @returns Array of transcript lines with text and english
 */
export async function getTranscriptData(
  pathId: string,
): Promise<TranscriptLine[]> {
  const supabase = createSupabaseClient()

  const { data: transcript, error } = await supabase
    .from("learning_path_transcripts")
    .select("transcript_data")
    .eq("path_id", pathId)
    .single()

  if (error) {
    console.error("[getTranscriptData] Query error:", error)
    throw new Error(`Failed to fetch transcript data: ${error.message}`)
  }

  if (!transcript?.transcript_data) {
    return []
  }

  // transcript_data is stored as JSONB array
  return (transcript.transcript_data as TranscriptLine[]) || []
}

/**
 * Gets metadata for a specific module in a learning path.
 * Includes transcript line IDs and vocabulary items (if applicable).
 * @param pathId - The learning path ID
 * @param moduleId - The module ID
 * @returns Module metadata with transcript references and vocab items
 */
export interface ModuleMetadata {
  sourceType: "grammar" | "vocabulary"
  transcriptLineIds: number[][]
  vocabularyItems?: Array<{
    word: string
    furigana?: string
    english?: string
  }>
}

export async function getModuleMetadata(
  pathId: string,
  moduleId: string,
): Promise<ModuleMetadata> {
  const supabase = createSupabaseClient()

  // Get module source data
  const { data: moduleSource, error: sourceError } = await supabase
    .from("learning_path_module_sources")
    .select("source_type, transcript_line_ids")
    .eq("path_id", pathId)
    .eq("module_id", moduleId)
    .single()

  if (sourceError) {
    console.error("[getModuleMetadata] Source query error:", sourceError)
    throw new Error(`Failed to fetch module metadata: ${sourceError.message}`)
  }

  if (!moduleSource) {
    throw new Error(`Module ${moduleId} not found in path ${pathId}`)
  }

  const sourceType = moduleSource.source_type as "grammar" | "vocabulary"
  const transcriptLineIds =
    (moduleSource.transcript_line_ids as number[][]) || []

  // For vocabulary modules, fetch vocabulary items
  let vocabularyItems: ModuleMetadata["vocabularyItems"] = undefined
  if (sourceType === "vocabulary") {
    const { data: vocabItems, error: vocabError } = await supabase
      .from("vocabulary_items")
      .select("word, furigana, english")
      .eq("deck_id", moduleId)
      .order("created_at", { ascending: true })

    if (vocabError) {
      console.error("[getModuleMetadata] Vocab query error:", vocabError)
    } else if (vocabItems) {
      // Format english array to string
      vocabularyItems = vocabItems.map((item) => ({
        word: item.word,
        furigana: item.furigana,
        english:
          Array.isArray(item.english) && item.english.length > 0
            ? item.english[0]
            : undefined,
      }))
    }
  }

  return {
    sourceType,
    transcriptLineIds,
    vocabularyItems,
  }
}
