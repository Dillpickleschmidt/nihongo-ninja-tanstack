import { Id } from "../_generated/dataModel"
import { MutationCtx, QueryCtx } from "../_generated/server"
import { createDeckVocabItems } from "./vocabulary"
import { deleteDeck } from "./decks"
import {
  getAllTextbooks,
  isBuiltInTextbook,
} from "../../src/data/utils/textbooks"
import { getChaptersByTextbook } from "../../src/data/utils/chapters"
import { static_modules } from "../../src/data/static_modules"
import { dynamic_modules } from "../../src/data/dynamic_modules"

const MODULES_PER_CHAPTER = 30

const allModules = {
  ...static_modules,
  ...dynamic_modules,
}

export type LearningPath = {
  id: string
  name: string
  shortName: string
  isUserCreated: boolean
}

export type LearningPathModule = {
  moduleId: string
  module: {
    title: string
    module_type: string
    description?: string
  }
  linkTo: string
  disabled: boolean
}

export type LearningPathChapter = {
  slug: string
  title: string
  description?: string
  features?: string[]
  modules: LearningPathModule[]
}

export type ModuleDetail = {
  sourceType: "grammar" | "vocabulary"
  transcriptGroups: Array<
    Array<{
      line_id: number
      text: string
      english: string
      timestamp?: string
    }>
  >
  vocabularyItems: Array<{
    word: string
    furigana?: string
    english?: string
  }>
  moduleDescription?: string
}

type CreateCustomLearningPathArgs = {
  transcript: {
    name: string
    showName?: string
    episodeName?: string
    transcriptData: Array<{
      line_id: number
      text: string
      english: string
      timestamp?: string
    }>
  }
  selectedGrammarModules: Array<{
    moduleId: string
    transcriptLineIds: number[][]
    orderIndex: number
  }>
  selectedVocabDecks: Array<{
    isVerbDeck: boolean
    words: Array<{
      word: string
      furigana?: string
      english?: string
    }>
    transcriptLineIds: number[][]
    orderIndex: number
  }>
}

/**
 * Gets all built-in textbook learning paths
 */
export function getBuiltInPaths(): LearningPath[] {
  return getAllTextbooks().map((tb) => ({
    id: tb.id,
    name: tb.name,
    shortName: tb.short_name,
    isUserCreated: false,
  }))
}

/**
 * Gets all learning paths (built-in + user-created if authenticated)
 */
export async function getAllLearningPaths(
  ctx: QueryCtx,
): Promise<LearningPath[]> {
  const builtInPaths = getBuiltInPaths()

  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return builtInPaths

  const userPaths = await ctx.db
    .query("learningPathTranscripts")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect()

  const mappedUserPaths = userPaths.map((path) => ({
    id: String(path._id),
    name: path.name,
    shortName: path.name,
    isUserCreated: true,
  }))

  return [...builtInPaths, ...mappedUserPaths]
}

/**
 * Gets chapters for a learning path (built-in or user-created)
 */
export async function getChaptersForPath(ctx: QueryCtx, pathId: string) {
  // Built-in textbook - get chapters from code
  if (isBuiltInTextbook(pathId)) {
    return getChaptersByTextbook(pathId)
  }

  const userPathId = await resolveUserPathId(ctx, pathId)
  if (!userPathId) return []

  // User path - generate chapters from modules
  const moduleSources = await ctx.db
    .query("learningPathModuleSources")
    .withIndex("by_path", (q) => q.eq("pathId", userPathId))
    .collect()

  moduleSources.sort((a, b) => a.orderIndex - b.orderIndex)

  const moduleIds = moduleSources.map((m) => m.moduleId)
  return chunkIntoChapters(moduleIds)
}

export async function getResolvedChaptersForPath(
  ctx: QueryCtx,
  pathId: string,
): Promise<LearningPathChapter[]> {
  if (isBuiltInTextbook(pathId)) {
    const chapters = getChaptersByTextbook(pathId)
    return chapters.map((chapter) => {
      const disabledSet = new Set(chapter.disabled_modules ?? [])
      const modules: LearningPathModule[] = []

      for (const moduleId of chapter.learning_path_item_ids) {
        const module = allModules[moduleId]
        if (!module) {
          console.warn(
            `[LearningPath] Missing built-in module '${moduleId}' in chapter '${chapter.slug}'`,
          )
          continue
        }

        modules.push({
          moduleId,
          module: {
            title: module.title,
            module_type: module.module_type,
            description: module.description,
          },
          linkTo: getModuleLink(module, moduleId),
          disabled: disabledSet.has(moduleId),
        })
      }

      return {
        slug: chapter.slug,
        title: chapter.title,
        description: chapter.description,
        features: chapter.features,
        modules,
      }
    })
  }

  const userPathId = await resolveUserPathId(ctx, pathId)
  if (!userPathId) return []

  const moduleSources = await ctx.db
    .query("learningPathModuleSources")
    .withIndex("by_path", (q) => q.eq("pathId", userPathId))
    .collect()

  if (moduleSources.length === 0) return []

  moduleSources.sort((a, b) => a.orderIndex - b.orderIndex)

  const deckIds = new Set(
    moduleSources
      .filter((source) => source.sourceType === "vocabulary")
      .map((source) => source.moduleId),
  )

  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const decks = await Promise.all(
    [...deckIds].map((deckId) => ctx.db.get(deckId as Id<"userDecks">)),
  )

  const deckMap = new Map(
    decks
      .filter((deck) => deck !== null && deck.userId === identity.subject)
      .map((deck) => [String(deck!._id), deck!]),
  )

  const resolvedModules: LearningPathModule[] = []

  for (const source of moduleSources) {
    if (source.sourceType === "grammar") {
      const module = allModules[source.moduleId]
      if (!module) {
        console.warn(
          `[LearningPath] Missing grammar module '${source.moduleId}' for custom path '${pathId}'`,
        )
        continue
      }

      resolvedModules.push({
        moduleId: source.moduleId,
        module: {
          title: module.title,
          module_type: module.module_type,
          description: module.description,
        },
        linkTo: getModuleLink(module, source.moduleId),
        disabled: false,
      })
      continue
    }

    const deck = deckMap.get(source.moduleId)
    if (!deck) {
      console.warn(
        `[LearningPath] Missing vocabulary deck '${source.moduleId}' for custom path '${pathId}'`,
      )
      continue
    }

    resolvedModules.push({
      moduleId: source.moduleId,
      module: {
        title: deck.deckName,
        module_type: "vocab-practice",
        description: deck.deckDescription,
      },
      linkTo: `/vocab/practice/${source.moduleId}`,
      disabled: false,
    })
  }

  return chunkResolvedModulesIntoChapters(resolvedModules)
}

export async function getModuleDetail(
  ctx: QueryCtx,
  pathId: string,
  moduleId: string,
): Promise<ModuleDetail | null> {
  const userPathId = await resolveUserPathId(ctx, pathId)
  if (!userPathId) return null

  const path = await ctx.db.get(userPathId)
  if (!path) return null

  const source = await ctx.db
    .query("learningPathModuleSources")
    .withIndex("by_path_module", (q) =>
      q.eq("pathId", userPathId).eq("moduleId", moduleId),
    )
    .first()

  if (!source) {
    console.warn(
      `[LearningPath] Missing module source for path '${pathId}' and module '${moduleId}'`,
    )
    return null
  }

  const transcriptGroups = source.transcriptLineIds.map((group) =>
    group
      .map((lineId) => path.transcriptData[lineId])
      .filter(
        (
          line,
        ): line is {
          line_id: number
          text: string
          english: string
          timestamp?: string
        } => line !== undefined,
      ),
  )

  if (source.sourceType === "grammar") {
    const module = allModules[moduleId]
    if (!module) {
      console.warn(
        `[LearningPath] Missing grammar module '${moduleId}' for module detail`,
      )
    }

    return {
      sourceType: "grammar",
      transcriptGroups,
      vocabularyItems: [],
      moduleDescription: module?.description,
    }
  }

  const deckId = moduleId as Id<"userDecks">
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return null

  const deck = await ctx.db.get(deckId)
  if (!deck || deck.userId !== identity.subject) {
    console.warn(
      `[LearningPath] Missing or unauthorized deck '${moduleId}' for module detail`,
    )
    return {
      sourceType: "vocabulary",
      transcriptGroups,
      vocabularyItems: [],
    }
  }

  const vocabItems = await ctx.db
    .query("deckVocabularyItems")
    .withIndex("by_deck", (q) => q.eq("deckId", deckId))
    .collect()

  return {
    sourceType: "vocabulary",
    transcriptGroups,
    vocabularyItems: vocabItems
      .sort((a, b) => a._creationTime - b._creationTime)
      .map((item) => ({
        word: item.word,
        furigana: item.furigana,
        english: item.english[0],
      })),
  }
}

export async function createCustomLearningPath(
  ctx: MutationCtx,
  args: CreateCustomLearningPathArgs,
): Promise<{ pathId: string; firstChapterSlug: string }> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const rootFolderId = await ctx.db.insert("userDeckFolders", {
    userId: identity.subject,
    folderName: args.transcript.name,
    parentFolderId: undefined,
  })

  const sortedVocabDecks = [...args.selectedVocabDecks].sort(
    (a, b) => a.orderIndex - b.orderIndex,
  )

  const chapterFolderIdBySlug = new Map<string, Id<"userDeckFolders">>()
  for (const deck of sortedVocabDecks) {
    const chapterNum = Math.floor(deck.orderIndex / MODULES_PER_CHAPTER) + 1
    const chapterSlug = `chapter-${chapterNum}`
    if (chapterFolderIdBySlug.has(chapterSlug)) continue

    const chapterFolderId = await ctx.db.insert("userDeckFolders", {
      userId: identity.subject,
      folderName: `Chapter ${chapterNum}`,
      parentFolderId: rootFolderId,
    })
    chapterFolderIdBySlug.set(chapterSlug, chapterFolderId)
  }

  const pathId = await ctx.db.insert("learningPathTranscripts", {
    userId: identity.subject,
    name: args.transcript.name,
    rootFolderId,
    showName: args.transcript.showName,
    episodeName: args.transcript.episodeName,
    transcriptData: args.transcript.transcriptData,
  })

  for (const module of args.selectedGrammarModules) {
    await ctx.db.insert("learningPathModuleSources", {
      pathId,
      moduleId: module.moduleId,
      sourceType: "grammar",
      transcriptLineIds: module.transcriptLineIds,
      orderIndex: module.orderIndex,
    })
  }

  for (let i = 0; i < sortedVocabDecks.length; i++) {
    const deck = sortedVocabDecks[i]!
    const deckName = `${deck.isVerbDeck ? "Verbs" : "Non-Verbs"} - Part ${i + 1}`
    const chapterNum = Math.floor(deck.orderIndex / MODULES_PER_CHAPTER) + 1
    const chapterSlug = `chapter-${chapterNum}`
    const chapterFolderId = chapterFolderIdBySlug.get(chapterSlug)
    const deckId = await ctx.db.insert("userDecks", {
      userId: identity.subject,
      deckName,
      deckDescription: `Vocabulary from ${args.transcript.name}`,
      folderId: chapterFolderId,
      source: "learning_path",
      allowedPracticeModes: ["meanings", "spellings"],
    })

    await createDeckVocabItems(
      ctx,
      deckId,
      deck.words.map((word) => ({
        word: word.word,
        furigana: word.furigana,
        english: word.english ? [word.english] : [],
        isVerb: deck.isVerbDeck,
      })),
    )

    await ctx.db.insert("learningPathModuleSources", {
      pathId,
      moduleId: String(deckId),
      sourceType: "vocabulary",
      transcriptLineIds: deck.transcriptLineIds,
      orderIndex: deck.orderIndex,
    })
  }

  return { pathId: String(pathId), firstChapterSlug: "chapter-1" }
}

export async function deleteCustomLearningPath(
  ctx: MutationCtx,
  pathId: string,
): Promise<{
  deletedPathId: string
  fallbackPathId: string
  fallbackChapterSlug: string
}> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")
  if (isBuiltInTextbook(pathId)) {
    throw new Error("Built-in learning paths cannot be deleted")
  }

  const userPathId = await resolveUserPathId(ctx, pathId)
  if (!userPathId) throw new Error("Learning path not found")
  const path = await ctx.db.get(userPathId)
  if (!path) throw new Error("Learning path not found")

  const moduleSources = await ctx.db
    .query("learningPathModuleSources")
    .withIndex("by_path", (q) => q.eq("pathId", userPathId))
    .collect()

  const vocabDeckIds = moduleSources
    .filter((source) => source.sourceType === "vocabulary")
    .map((source) => source.moduleId)

  for (const deckIdString of vocabDeckIds) {
    const deckId = deckIdString as Id<"userDecks">
    const deck = await ctx.db.get(deckId)
    if (!deck || deck.userId !== identity.subject) {
      console.warn(
        `[LearningPath] Skipping missing or unauthorized deck '${deckIdString}' for path '${pathId}'`,
      )
      continue
    }

    await deleteDeck(ctx, deckId)
  }

  for (const source of moduleSources) {
    await ctx.db.delete(source._id)
  }

  await deleteFolderTree(ctx, path.rootFolderId)

  await ctx.db.delete(userPathId)

  const fallbackPathId = "genki_1"
  const fallbackChapterSlug =
    getChaptersByTextbook(fallbackPathId)[0]?.slug ?? "chapter-0"

  return {
    deletedPathId: pathId,
    fallbackPathId,
    fallbackChapterSlug,
  }
}

function chunkIntoChapters(moduleIds: string[]) {
  const chapters = []
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

function chunkResolvedModulesIntoChapters(
  modules: LearningPathModule[],
): LearningPathChapter[] {
  const chapters: LearningPathChapter[] = []
  for (let i = 0; i < modules.length; i += MODULES_PER_CHAPTER) {
    const chapterNum = Math.floor(i / MODULES_PER_CHAPTER) + 1
    chapters.push({
      slug: `chapter-${chapterNum}`,
      title: `Chapter ${chapterNum}`,
      modules: modules.slice(i, i + MODULES_PER_CHAPTER),
    })
  }
  return chapters
}

function getModuleLink(
  module: { module_type: string; link?: string },
  moduleId: string,
): string {
  if ("link" in module && module.link) {
    return module.link
  }

  if (module.module_type === "vocab-practice") {
    return `/vocab?import=${moduleId}`
  }

  if (module.module_type === "sentence-practice") {
    const strippedId = moduleId.replace(/^sentence-practice-/, "")
    return `/sentence-practice/${strippedId}`
  }

  if (module.module_type === "vocab-test") {
    const strippedId = moduleId.replace(/-quiz$/, "")
    return `/vocab/quiz/${strippedId}`
  }

  if (module.module_type === "vocab-list") {
    return `/vocab/list/${moduleId}`
  }

  return `/practice/${moduleId}`
}

async function resolveUserPathId(
  ctx: QueryCtx | MutationCtx,
  pathId: string,
): Promise<Id<"learningPathTranscripts"> | null> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return null

  const maybePath = await ctx.db.get(pathId as Id<"learningPathTranscripts">)
  if (!maybePath) return null
  if (maybePath.userId !== identity.subject) return null
  return maybePath._id
}

async function deleteFolderTree(
  ctx: MutationCtx,
  folderId: Id<"userDeckFolders">,
): Promise<void> {
  const children = await ctx.db
    .query("userDeckFolders")
    .filter((q) => q.eq(q.field("parentFolderId"), folderId))
    .collect()

  for (const child of children) {
    await deleteFolderTree(ctx, child._id)
  }

  await ctx.db.delete(folderId)
}
