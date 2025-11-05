import type { POS } from "@/features/sentence-practice/kagome/types/kagome"
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"

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
  }>
  selectedVocabDecks: Array<{
    posTag: POS
    words: Array<{
      word: string
      baseForm: string
      furigana?: string
      english?: string
    }>
    transcriptLineIds: number[]
  }>
}

export async function uploadLearningPath(
  input: UploadLearningPathInput,
): Promise<string> {
  const supabase = createSupabaseClient()

  // Build vocabulary deck data for RPC
  const vocabDecks = input.selectedVocabDecks.map((deck, index) => ({
    ...deck,
    deckName: `${deck.posTag} - Part ${index + 1}`,
    deckDescription: `Vocabulary from ${input.transcript.name}`,
  }))

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

export async function getLearningPathData(pathId: string): Promise<{
  transcript: LearningPathTranscript
  modules: LearningPathModuleSource[]
} | null> {
  const supabase = createSupabaseClient()

  const { data: transcript, error: transcriptError } = await supabase
    .from("learning_path_transcripts")
    .select("*")
    .eq("path_id", pathId)
    .single()

  if (transcriptError || !transcript) {
    return null
  }

  const { data: modules, error: modulesError } = await supabase
    .from("learning_path_module_sources")
    .select("*")
    .eq("path_id", pathId)

  if (modulesError) {
    throw new Error(
      `Failed to fetch learning path modules: ${modulesError.message}`,
    )
  }

  return {
    transcript: transcript as LearningPathTranscript,
    modules: (modules || []) as LearningPathModuleSource[],
  }
}
