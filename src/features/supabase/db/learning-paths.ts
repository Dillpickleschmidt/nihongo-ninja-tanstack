import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"

export async function createLearningPath(
  transcript: Omit<LearningPathTranscriptInsert, "path_id">,
  modules: Omit<LearningPathModuleSourceInsert, "path_id">[],
): Promise<string> {
  const supabase = createSupabaseClient()

  const { data, error: transcriptError } = await supabase
    .from("learning_path_transcripts")
    .insert([transcript])
    .select()
    .single()

  if (transcriptError || !data) {
    throw new Error(
      `Failed to create learning path transcript: ${transcriptError?.message}`,
    )
  }

  const pathId = data.path_id
  const modulesWithPathId = modules.map((module) => ({
    ...module,
    path_id: pathId,
  }))

  const { error: modulesError } = await supabase
    .from("learning_path_module_sources")
    .insert(modulesWithPathId)

  if (modulesError) {
    throw new Error(
      `Failed to insert learning path modules: ${modulesError.message}`,
    )
  }

  return pathId
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
