import { Id } from "../_generated/dataModel"
import { MutationCtx, QueryCtx } from "../_generated/server"
import { createDeckVocabItems } from "./vocabulary"
import { deleteDeck } from "./decks"
import {
  getAllTextbooks,
  isBuiltInTextbook,
} from "../../src/data/utils/textbooks"
import { getChaptersByTextbook } from "../../src/data/utils/chapters"
import { removeOverridesForPath } from "../../src/features/backgrounds/overrides"
import { buildPathSelectionPreferences } from "../../src/features/learning-path/selection"
import { external_resources } from "../../src/data/external_resources"
import { moduleCatalog } from "../../src/data/utils/modules"
import { getModuleLink } from "../../src/lib/module-links"

const MODULES_PER_CHAPTER = 30

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
  externalResourceIds: string[]
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
      const modules = resolveLearningPathModuleIds(
        chapter.learning_path_item_ids,
        disabledSet,
        chapter.slug,
      )
      const externalResourceIds = chapter.learning_path_item_ids.filter(
        (id) => id in external_resources,
      )

      return {
        slug: chapter.slug,
        title: chapter.title,
        description: chapter.description,
        features: chapter.features,
        externalResourceIds,
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
      const module = moduleCatalog[source.moduleId]
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

    const folderPath = deck.folderId
      ? await buildFolderPath(ctx, deck.folderId)
      : ""
    const deckPath = folderPath
      ? `/vocab/${folderPath}/${String(deck._id)}`
      : `/vocab/${String(deck._id)}`

    resolvedModules.push({
      moduleId: source.moduleId,
      module: {
        title: deck.deckName,
        module_type: "vocab-practice",
        description: deck.deckDescription,
      },
      linkTo: deckPath,
      disabled: false,
    })
  }

  return buildCustomPathChapters(resolvedModules)
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
      const module = moduleCatalog[moduleId]
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

  // Create root folder first (needed for path record)
  const rootFolderId = await ctx.db.insert("userDeckFolders", {
    userId: identity.subject,
    folderName: args.transcript.name,
    parentFolderId: undefined,
  })

  // Create path record (needed for learningPathId on folders)
  const pathId = await ctx.db.insert("learningPathTranscripts", {
    userId: identity.subject,
    name: args.transcript.name,
    rootFolderId,
    showName: args.transcript.showName,
    episodeName: args.transcript.episodeName,
    transcriptData: args.transcript.transcriptData,
  })

  // Patch root folder with learningPathId
  await ctx.db.patch(rootFolderId, { learningPathId: pathId })

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
      learningPathId: pathId,
    })
    chapterFolderIdBySlug.set(chapterSlug, chapterFolderId)
  }

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
) {
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

  const profile = await ctx.db
    .query("profiles")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .first()

  if (!profile) return

  const wasActive = profile.userPreferences.activeLearningPath === pathId
  const fallback = buildPathSelectionPreferences("genki_1")

  await ctx.db.patch(profile._id, {
    userPreferences: {
      ...profile.userPreferences,
      backgroundOverrides: removeOverridesForPath(
        profile.userPreferences.backgroundOverrides,
        pathId,
      ),
      ...(wasActive && fallback),
      timestamp: Date.now(),
    },
  })
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

function buildCustomPathChapters(
  modules: LearningPathModule[],
): LearningPathChapter[] {
  const chapters: LearningPathChapter[] = []
  for (let i = 0; i < modules.length; i += MODULES_PER_CHAPTER) {
    const chapterNum = Math.floor(i / MODULES_PER_CHAPTER) + 1
    chapters.push({
      slug: `chapter-${chapterNum}`,
      title: `Chapter ${chapterNum}`,
      externalResourceIds: [],
      modules: modules.slice(i, i + MODULES_PER_CHAPTER),
    })
  }
  return chapters
}

function resolveLearningPathModuleIds(
  moduleIds: string[],
  disabledSet: Set<string>,
  chapterSlug: string,
): LearningPathModule[] {
  const resolvedModules: LearningPathModule[] = [
    {
      moduleId: `${chapterSlug}-vocab`,
      module: {
        title: `Ch. ${chapterSlug.replace("chapter-", "")} Vocabulary`,
        module_type: "vocab-list",
      },
      linkTo: `/vocab?chapter=${chapterSlug}`,
      disabled: false,
    },
  ]

  for (const moduleId of moduleIds) {
    const module = moduleCatalog[moduleId]
    if (!module) {
      console.warn(
        `[LearningPath] Missing built-in module '${moduleId}' in chapter '${chapterSlug}'`,
      )
      continue
    }

    resolvedModules.push({
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

  return resolvedModules
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

async function buildFolderPath(
  ctx: QueryCtx,
  folderId: Id<"userDeckFolders">,
): Promise<string> {
  const segments: string[] = []
  let currentId: Id<"userDeckFolders"> | undefined = folderId

  while (currentId) {
    const [folder] = await ctx.db
      .query("userDeckFolders")
      .filter((q) => q.eq(q.field("_id"), currentId!))
      .collect()
    if (!folder) break
    segments.unshift(String(folder._id))
    currentId = folder.parentFolderId
  }

  return segments.join("/")
}
