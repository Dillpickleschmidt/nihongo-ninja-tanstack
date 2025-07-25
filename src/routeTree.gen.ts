/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createServerRootRoute } from '@tanstack/solid-start/server'

import { Route as rootRouteImport } from './routes/__root'
import { Route as VocabRouteImport } from './routes/vocab'
import { Route as ToolsRouteImport } from './routes/tools'
import { Route as SettingsRouteImport } from './routes/settings'
import { Route as LearnRouteImport } from './routes/learn'
import { Route as KanjiTestRouteImport } from './routes/kanji-test'
import { Route as DashboardRouteImport } from './routes/dashboard'
import { Route as AuthRouteImport } from './routes/auth'
import { Route as IndexRouteImport } from './routes/index'
import { Route as LearnIndexRouteImport } from './routes/learn/index'
import { Route as DashboardIndexRouteImport } from './routes/dashboard/index'
import { Route as PracticeReviewRouteImport } from './routes/practice/review'
import { Route as PracticeHiraganaQuizRouteImport } from './routes/practice/hiragana-quiz'
import { Route as PracticeDakutenHandakutenQuizRouteImport } from './routes/practice/dakuten-handakuten-quiz'
import { Route as PracticeContractedSoundsQuizRouteImport } from './routes/practice/contracted-sounds-quiz'
import { Route as PracticeAllHiraganaQuizRouteImport } from './routes/practice/all-hiragana-quiz'
import { Route as PracticePracticeIDRouteImport } from './routes/practice/$practiceID'
import { Route as LearnLessonsRouteImport } from './routes/learn/_lessons'
import { Route as DashboardUserIdRouteImport } from './routes/dashboard/$userId'
import { Route as DashboardServiceIdRouteImport } from './routes/dashboard/$serviceId'
import { Route as LearnLessonsWritingSystemsRouteImport } from './routes/learn/_lessons/writing-systems'
import { Route as LearnLessonsWelcomeOverviewRouteImport } from './routes/learn/_lessons/welcome-overview'
import { Route as LearnLessonsJapanesePronunciationRouteImport } from './routes/learn/_lessons/japanese-pronunciation'
import { Route as LearnLessonsHiraganaRouteImport } from './routes/learn/_lessons/hiragana'
import { Route as DashboardTextbookIdChapterSlugRouteImport } from './routes/dashboard/$textbookId.$chapterSlug'
import { ServerRoute as ApiHelloServerRouteImport } from './routes/api/hello'
import { ServerRoute as ApiAuthLogoutServerRouteImport } from './routes/api/auth/logout'
import { ServerRoute as ApiAuthLoginServerRouteImport } from './routes/api/auth/login'

const rootServerRouteImport = createServerRootRoute()

const VocabRoute = VocabRouteImport.update({
  id: '/vocab',
  path: '/vocab',
  getParentRoute: () => rootRouteImport,
} as any)
const ToolsRoute = ToolsRouteImport.update({
  id: '/tools',
  path: '/tools',
  getParentRoute: () => rootRouteImport,
} as any)
const SettingsRoute = SettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRouteImport,
} as any)
const LearnRoute = LearnRouteImport.update({
  id: '/learn',
  path: '/learn',
  getParentRoute: () => rootRouteImport,
} as any)
const KanjiTestRoute = KanjiTestRouteImport.update({
  id: '/kanji-test',
  path: '/kanji-test',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthRoute = AuthRouteImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const LearnIndexRoute = LearnIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LearnRoute,
} as any)
const DashboardIndexRoute = DashboardIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)
const PracticeReviewRoute = PracticeReviewRouteImport.update({
  id: '/practice/review',
  path: '/practice/review',
  getParentRoute: () => rootRouteImport,
} as any)
const PracticeHiraganaQuizRoute = PracticeHiraganaQuizRouteImport.update({
  id: '/practice/hiragana-quiz',
  path: '/practice/hiragana-quiz',
  getParentRoute: () => rootRouteImport,
} as any)
const PracticeDakutenHandakutenQuizRoute =
  PracticeDakutenHandakutenQuizRouteImport.update({
    id: '/practice/dakuten-handakuten-quiz',
    path: '/practice/dakuten-handakuten-quiz',
    getParentRoute: () => rootRouteImport,
  } as any)
const PracticeContractedSoundsQuizRoute =
  PracticeContractedSoundsQuizRouteImport.update({
    id: '/practice/contracted-sounds-quiz',
    path: '/practice/contracted-sounds-quiz',
    getParentRoute: () => rootRouteImport,
  } as any)
const PracticeAllHiraganaQuizRoute = PracticeAllHiraganaQuizRouteImport.update({
  id: '/practice/all-hiragana-quiz',
  path: '/practice/all-hiragana-quiz',
  getParentRoute: () => rootRouteImport,
} as any)
const PracticePracticeIDRoute = PracticePracticeIDRouteImport.update({
  id: '/practice/$practiceID',
  path: '/practice/$practiceID',
  getParentRoute: () => rootRouteImport,
} as any)
const LearnLessonsRoute = LearnLessonsRouteImport.update({
  id: '/_lessons',
  getParentRoute: () => LearnRoute,
} as any)
const DashboardUserIdRoute = DashboardUserIdRouteImport.update({
  id: '/$userId',
  path: '/$userId',
  getParentRoute: () => DashboardRoute,
} as any)
const DashboardServiceIdRoute = DashboardServiceIdRouteImport.update({
  id: '/$serviceId',
  path: '/$serviceId',
  getParentRoute: () => DashboardRoute,
} as any)
const LearnLessonsWritingSystemsRoute =
  LearnLessonsWritingSystemsRouteImport.update({
    id: '/writing-systems',
    path: '/writing-systems',
    getParentRoute: () => LearnLessonsRoute,
  } as any)
const LearnLessonsWelcomeOverviewRoute =
  LearnLessonsWelcomeOverviewRouteImport.update({
    id: '/welcome-overview',
    path: '/welcome-overview',
    getParentRoute: () => LearnLessonsRoute,
  } as any)
const LearnLessonsJapanesePronunciationRoute =
  LearnLessonsJapanesePronunciationRouteImport.update({
    id: '/japanese-pronunciation',
    path: '/japanese-pronunciation',
    getParentRoute: () => LearnLessonsRoute,
  } as any)
const LearnLessonsHiraganaRoute = LearnLessonsHiraganaRouteImport.update({
  id: '/hiragana',
  path: '/hiragana',
  getParentRoute: () => LearnLessonsRoute,
} as any)
const DashboardTextbookIdChapterSlugRoute =
  DashboardTextbookIdChapterSlugRouteImport.update({
    id: '/$textbookId/$chapterSlug',
    path: '/$textbookId/$chapterSlug',
    getParentRoute: () => DashboardRoute,
  } as any)
const ApiHelloServerRoute = ApiHelloServerRouteImport.update({
  id: '/api/hello',
  path: '/api/hello',
  getParentRoute: () => rootServerRouteImport,
} as any)
const ApiAuthLogoutServerRoute = ApiAuthLogoutServerRouteImport.update({
  id: '/api/auth/logout',
  path: '/api/auth/logout',
  getParentRoute: () => rootServerRouteImport,
} as any)
const ApiAuthLoginServerRoute = ApiAuthLoginServerRouteImport.update({
  id: '/api/auth/login',
  path: '/api/auth/login',
  getParentRoute: () => rootServerRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/kanji-test': typeof KanjiTestRoute
  '/learn': typeof LearnLessonsRouteWithChildren
  '/settings': typeof SettingsRoute
  '/tools': typeof ToolsRoute
  '/vocab': typeof VocabRoute
  '/dashboard/$serviceId': typeof DashboardServiceIdRoute
  '/dashboard/$userId': typeof DashboardUserIdRoute
  '/practice/$practiceID': typeof PracticePracticeIDRoute
  '/practice/all-hiragana-quiz': typeof PracticeAllHiraganaQuizRoute
  '/practice/contracted-sounds-quiz': typeof PracticeContractedSoundsQuizRoute
  '/practice/dakuten-handakuten-quiz': typeof PracticeDakutenHandakutenQuizRoute
  '/practice/hiragana-quiz': typeof PracticeHiraganaQuizRoute
  '/practice/review': typeof PracticeReviewRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/learn/': typeof LearnIndexRoute
  '/dashboard/$textbookId/$chapterSlug': typeof DashboardTextbookIdChapterSlugRoute
  '/learn/hiragana': typeof LearnLessonsHiraganaRoute
  '/learn/japanese-pronunciation': typeof LearnLessonsJapanesePronunciationRoute
  '/learn/welcome-overview': typeof LearnLessonsWelcomeOverviewRoute
  '/learn/writing-systems': typeof LearnLessonsWritingSystemsRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/kanji-test': typeof KanjiTestRoute
  '/settings': typeof SettingsRoute
  '/tools': typeof ToolsRoute
  '/vocab': typeof VocabRoute
  '/dashboard/$serviceId': typeof DashboardServiceIdRoute
  '/dashboard/$userId': typeof DashboardUserIdRoute
  '/learn': typeof LearnIndexRoute
  '/practice/$practiceID': typeof PracticePracticeIDRoute
  '/practice/all-hiragana-quiz': typeof PracticeAllHiraganaQuizRoute
  '/practice/contracted-sounds-quiz': typeof PracticeContractedSoundsQuizRoute
  '/practice/dakuten-handakuten-quiz': typeof PracticeDakutenHandakutenQuizRoute
  '/practice/hiragana-quiz': typeof PracticeHiraganaQuizRoute
  '/practice/review': typeof PracticeReviewRoute
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/$textbookId/$chapterSlug': typeof DashboardTextbookIdChapterSlugRoute
  '/learn/hiragana': typeof LearnLessonsHiraganaRoute
  '/learn/japanese-pronunciation': typeof LearnLessonsJapanesePronunciationRoute
  '/learn/welcome-overview': typeof LearnLessonsWelcomeOverviewRoute
  '/learn/writing-systems': typeof LearnLessonsWritingSystemsRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/kanji-test': typeof KanjiTestRoute
  '/learn': typeof LearnRouteWithChildren
  '/settings': typeof SettingsRoute
  '/tools': typeof ToolsRoute
  '/vocab': typeof VocabRoute
  '/dashboard/$serviceId': typeof DashboardServiceIdRoute
  '/dashboard/$userId': typeof DashboardUserIdRoute
  '/learn/_lessons': typeof LearnLessonsRouteWithChildren
  '/practice/$practiceID': typeof PracticePracticeIDRoute
  '/practice/all-hiragana-quiz': typeof PracticeAllHiraganaQuizRoute
  '/practice/contracted-sounds-quiz': typeof PracticeContractedSoundsQuizRoute
  '/practice/dakuten-handakuten-quiz': typeof PracticeDakutenHandakutenQuizRoute
  '/practice/hiragana-quiz': typeof PracticeHiraganaQuizRoute
  '/practice/review': typeof PracticeReviewRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/learn/': typeof LearnIndexRoute
  '/dashboard/$textbookId/$chapterSlug': typeof DashboardTextbookIdChapterSlugRoute
  '/learn/_lessons/hiragana': typeof LearnLessonsHiraganaRoute
  '/learn/_lessons/japanese-pronunciation': typeof LearnLessonsJapanesePronunciationRoute
  '/learn/_lessons/welcome-overview': typeof LearnLessonsWelcomeOverviewRoute
  '/learn/_lessons/writing-systems': typeof LearnLessonsWritingSystemsRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth'
    | '/dashboard'
    | '/kanji-test'
    | '/learn'
    | '/settings'
    | '/tools'
    | '/vocab'
    | '/dashboard/$serviceId'
    | '/dashboard/$userId'
    | '/practice/$practiceID'
    | '/practice/all-hiragana-quiz'
    | '/practice/contracted-sounds-quiz'
    | '/practice/dakuten-handakuten-quiz'
    | '/practice/hiragana-quiz'
    | '/practice/review'
    | '/dashboard/'
    | '/learn/'
    | '/dashboard/$textbookId/$chapterSlug'
    | '/learn/hiragana'
    | '/learn/japanese-pronunciation'
    | '/learn/welcome-overview'
    | '/learn/writing-systems'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth'
    | '/kanji-test'
    | '/settings'
    | '/tools'
    | '/vocab'
    | '/dashboard/$serviceId'
    | '/dashboard/$userId'
    | '/learn'
    | '/practice/$practiceID'
    | '/practice/all-hiragana-quiz'
    | '/practice/contracted-sounds-quiz'
    | '/practice/dakuten-handakuten-quiz'
    | '/practice/hiragana-quiz'
    | '/practice/review'
    | '/dashboard'
    | '/dashboard/$textbookId/$chapterSlug'
    | '/learn/hiragana'
    | '/learn/japanese-pronunciation'
    | '/learn/welcome-overview'
    | '/learn/writing-systems'
  id:
    | '__root__'
    | '/'
    | '/auth'
    | '/dashboard'
    | '/kanji-test'
    | '/learn'
    | '/settings'
    | '/tools'
    | '/vocab'
    | '/dashboard/$serviceId'
    | '/dashboard/$userId'
    | '/learn/_lessons'
    | '/practice/$practiceID'
    | '/practice/all-hiragana-quiz'
    | '/practice/contracted-sounds-quiz'
    | '/practice/dakuten-handakuten-quiz'
    | '/practice/hiragana-quiz'
    | '/practice/review'
    | '/dashboard/'
    | '/learn/'
    | '/dashboard/$textbookId/$chapterSlug'
    | '/learn/_lessons/hiragana'
    | '/learn/_lessons/japanese-pronunciation'
    | '/learn/_lessons/welcome-overview'
    | '/learn/_lessons/writing-systems'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRoute
  DashboardRoute: typeof DashboardRouteWithChildren
  KanjiTestRoute: typeof KanjiTestRoute
  LearnRoute: typeof LearnRouteWithChildren
  SettingsRoute: typeof SettingsRoute
  ToolsRoute: typeof ToolsRoute
  VocabRoute: typeof VocabRoute
  PracticePracticeIDRoute: typeof PracticePracticeIDRoute
  PracticeAllHiraganaQuizRoute: typeof PracticeAllHiraganaQuizRoute
  PracticeContractedSoundsQuizRoute: typeof PracticeContractedSoundsQuizRoute
  PracticeDakutenHandakutenQuizRoute: typeof PracticeDakutenHandakutenQuizRoute
  PracticeHiraganaQuizRoute: typeof PracticeHiraganaQuizRoute
  PracticeReviewRoute: typeof PracticeReviewRoute
}
export interface FileServerRoutesByFullPath {
  '/api/hello': typeof ApiHelloServerRoute
  '/api/auth/login': typeof ApiAuthLoginServerRoute
  '/api/auth/logout': typeof ApiAuthLogoutServerRoute
}
export interface FileServerRoutesByTo {
  '/api/hello': typeof ApiHelloServerRoute
  '/api/auth/login': typeof ApiAuthLoginServerRoute
  '/api/auth/logout': typeof ApiAuthLogoutServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/api/hello': typeof ApiHelloServerRoute
  '/api/auth/login': typeof ApiAuthLoginServerRoute
  '/api/auth/logout': typeof ApiAuthLogoutServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/api/hello' | '/api/auth/login' | '/api/auth/logout'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/api/hello' | '/api/auth/login' | '/api/auth/logout'
  id: '__root__' | '/api/hello' | '/api/auth/login' | '/api/auth/logout'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  ApiHelloServerRoute: typeof ApiHelloServerRoute
  ApiAuthLoginServerRoute: typeof ApiAuthLoginServerRoute
  ApiAuthLogoutServerRoute: typeof ApiAuthLogoutServerRoute
}

declare module '@tanstack/solid-router' {
  interface FileRoutesByPath {
    '/vocab': {
      id: '/vocab'
      path: '/vocab'
      fullPath: '/vocab'
      preLoaderRoute: typeof VocabRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/tools': {
      id: '/tools'
      path: '/tools'
      fullPath: '/tools'
      preLoaderRoute: typeof ToolsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/learn': {
      id: '/learn'
      path: '/learn'
      fullPath: '/learn'
      preLoaderRoute: typeof LearnRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/kanji-test': {
      id: '/kanji-test'
      path: '/kanji-test'
      fullPath: '/kanji-test'
      preLoaderRoute: typeof KanjiTestRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/learn/': {
      id: '/learn/'
      path: '/'
      fullPath: '/learn/'
      preLoaderRoute: typeof LearnIndexRouteImport
      parentRoute: typeof LearnRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/practice/review': {
      id: '/practice/review'
      path: '/practice/review'
      fullPath: '/practice/review'
      preLoaderRoute: typeof PracticeReviewRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/practice/hiragana-quiz': {
      id: '/practice/hiragana-quiz'
      path: '/practice/hiragana-quiz'
      fullPath: '/practice/hiragana-quiz'
      preLoaderRoute: typeof PracticeHiraganaQuizRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/practice/dakuten-handakuten-quiz': {
      id: '/practice/dakuten-handakuten-quiz'
      path: '/practice/dakuten-handakuten-quiz'
      fullPath: '/practice/dakuten-handakuten-quiz'
      preLoaderRoute: typeof PracticeDakutenHandakutenQuizRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/practice/contracted-sounds-quiz': {
      id: '/practice/contracted-sounds-quiz'
      path: '/practice/contracted-sounds-quiz'
      fullPath: '/practice/contracted-sounds-quiz'
      preLoaderRoute: typeof PracticeContractedSoundsQuizRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/practice/all-hiragana-quiz': {
      id: '/practice/all-hiragana-quiz'
      path: '/practice/all-hiragana-quiz'
      fullPath: '/practice/all-hiragana-quiz'
      preLoaderRoute: typeof PracticeAllHiraganaQuizRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/practice/$practiceID': {
      id: '/practice/$practiceID'
      path: '/practice/$practiceID'
      fullPath: '/practice/$practiceID'
      preLoaderRoute: typeof PracticePracticeIDRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/learn/_lessons': {
      id: '/learn/_lessons'
      path: ''
      fullPath: '/learn'
      preLoaderRoute: typeof LearnLessonsRouteImport
      parentRoute: typeof LearnRoute
    }
    '/dashboard/$userId': {
      id: '/dashboard/$userId'
      path: '/$userId'
      fullPath: '/dashboard/$userId'
      preLoaderRoute: typeof DashboardUserIdRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/dashboard/$serviceId': {
      id: '/dashboard/$serviceId'
      path: '/$serviceId'
      fullPath: '/dashboard/$serviceId'
      preLoaderRoute: typeof DashboardServiceIdRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/learn/_lessons/writing-systems': {
      id: '/learn/_lessons/writing-systems'
      path: '/writing-systems'
      fullPath: '/learn/writing-systems'
      preLoaderRoute: typeof LearnLessonsWritingSystemsRouteImport
      parentRoute: typeof LearnLessonsRoute
    }
    '/learn/_lessons/welcome-overview': {
      id: '/learn/_lessons/welcome-overview'
      path: '/welcome-overview'
      fullPath: '/learn/welcome-overview'
      preLoaderRoute: typeof LearnLessonsWelcomeOverviewRouteImport
      parentRoute: typeof LearnLessonsRoute
    }
    '/learn/_lessons/japanese-pronunciation': {
      id: '/learn/_lessons/japanese-pronunciation'
      path: '/japanese-pronunciation'
      fullPath: '/learn/japanese-pronunciation'
      preLoaderRoute: typeof LearnLessonsJapanesePronunciationRouteImport
      parentRoute: typeof LearnLessonsRoute
    }
    '/learn/_lessons/hiragana': {
      id: '/learn/_lessons/hiragana'
      path: '/hiragana'
      fullPath: '/learn/hiragana'
      preLoaderRoute: typeof LearnLessonsHiraganaRouteImport
      parentRoute: typeof LearnLessonsRoute
    }
    '/dashboard/$textbookId/$chapterSlug': {
      id: '/dashboard/$textbookId/$chapterSlug'
      path: '/$textbookId/$chapterSlug'
      fullPath: '/dashboard/$textbookId/$chapterSlug'
      preLoaderRoute: typeof DashboardTextbookIdChapterSlugRouteImport
      parentRoute: typeof DashboardRoute
    }
  }
}
declare module '@tanstack/solid-start/server' {
  interface ServerFileRoutesByPath {
    '/api/hello': {
      id: '/api/hello'
      path: '/api/hello'
      fullPath: '/api/hello'
      preLoaderRoute: typeof ApiHelloServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/api/auth/logout': {
      id: '/api/auth/logout'
      path: '/api/auth/logout'
      fullPath: '/api/auth/logout'
      preLoaderRoute: typeof ApiAuthLogoutServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/api/auth/login': {
      id: '/api/auth/login'
      path: '/api/auth/login'
      fullPath: '/api/auth/login'
      preLoaderRoute: typeof ApiAuthLoginServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
  }
}

interface DashboardRouteChildren {
  DashboardServiceIdRoute: typeof DashboardServiceIdRoute
  DashboardUserIdRoute: typeof DashboardUserIdRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  DashboardTextbookIdChapterSlugRoute: typeof DashboardTextbookIdChapterSlugRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardServiceIdRoute: DashboardServiceIdRoute,
  DashboardUserIdRoute: DashboardUserIdRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  DashboardTextbookIdChapterSlugRoute: DashboardTextbookIdChapterSlugRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

interface LearnLessonsRouteChildren {
  LearnLessonsHiraganaRoute: typeof LearnLessonsHiraganaRoute
  LearnLessonsJapanesePronunciationRoute: typeof LearnLessonsJapanesePronunciationRoute
  LearnLessonsWelcomeOverviewRoute: typeof LearnLessonsWelcomeOverviewRoute
  LearnLessonsWritingSystemsRoute: typeof LearnLessonsWritingSystemsRoute
}

const LearnLessonsRouteChildren: LearnLessonsRouteChildren = {
  LearnLessonsHiraganaRoute: LearnLessonsHiraganaRoute,
  LearnLessonsJapanesePronunciationRoute:
    LearnLessonsJapanesePronunciationRoute,
  LearnLessonsWelcomeOverviewRoute: LearnLessonsWelcomeOverviewRoute,
  LearnLessonsWritingSystemsRoute: LearnLessonsWritingSystemsRoute,
}

const LearnLessonsRouteWithChildren = LearnLessonsRoute._addFileChildren(
  LearnLessonsRouteChildren,
)

interface LearnRouteChildren {
  LearnLessonsRoute: typeof LearnLessonsRouteWithChildren
  LearnIndexRoute: typeof LearnIndexRoute
}

const LearnRouteChildren: LearnRouteChildren = {
  LearnLessonsRoute: LearnLessonsRouteWithChildren,
  LearnIndexRoute: LearnIndexRoute,
}

const LearnRouteWithChildren = LearnRoute._addFileChildren(LearnRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRoute,
  DashboardRoute: DashboardRouteWithChildren,
  KanjiTestRoute: KanjiTestRoute,
  LearnRoute: LearnRouteWithChildren,
  SettingsRoute: SettingsRoute,
  ToolsRoute: ToolsRoute,
  VocabRoute: VocabRoute,
  PracticePracticeIDRoute: PracticePracticeIDRoute,
  PracticeAllHiraganaQuizRoute: PracticeAllHiraganaQuizRoute,
  PracticeContractedSoundsQuizRoute: PracticeContractedSoundsQuizRoute,
  PracticeDakutenHandakutenQuizRoute: PracticeDakutenHandakutenQuizRoute,
  PracticeHiraganaQuizRoute: PracticeHiraganaQuizRoute,
  PracticeReviewRoute: PracticeReviewRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  ApiHelloServerRoute: ApiHelloServerRoute,
  ApiAuthLoginServerRoute: ApiAuthLoginServerRoute,
  ApiAuthLogoutServerRoute: ApiAuthLogoutServerRoute,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()
