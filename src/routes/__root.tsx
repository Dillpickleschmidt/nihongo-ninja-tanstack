/// <reference types="vite/client" />
import type { JSX } from "solid-js"
import { createEffect } from "solid-js"
import { HydrationScript, Suspense, isServer } from "solid-js/web"
import {
  ClientOnly,
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/solid-router"
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core"
import {
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/solid-query"
import type { QueryClient } from "@tanstack/solid-query"
import { createMediaQuery } from "@solid-primitives/media"
import "@fontsource-variable/inter"
import "@fontsource/poppins"
import appCss from "@/styles/app.css?url"
import AppConvexProvider, { convexQueryClient } from "@/providers/convex"
import { TextbookChapterBackgrounds } from "@/components/TextbookChapterBackgrounds"
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools"
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools"
import {
  authQueryOptions,
  deviceSettingsQueryOptions,
  preferencesQueryOptions,
} from "@/query/query-options"
import { updateDeviceSettingsCookie } from "@/query/model/device-settings"
import { parsePreferencesCookie, syncPreferencesFromProfile } from "@/query/model/preferences"
import { useConvexQuery } from "@/lib/convex-query"
import { getUser } from "@/lib/auth"
import { api } from "convex/_generated/api"

export interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  beforeLoad: async ({ context }) => {
    context.queryClient.prefetchQuery(deviceSettingsQueryOptions())
    context.queryClient.prefetchQuery(preferencesQueryOptions())
    const auth = await context.queryClient.ensureQueryData(authQueryOptions())

    if (auth.token) {
      convexQueryClient.serverHttpClient?.setAuth(auth.token)
    }

    return {}
  },
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.ensureQueryData(deviceSettingsQueryOptions()),
      context.queryClient.ensureQueryData(preferencesQueryOptions()),
    ])
    return {}
  },
  component: RootComponent,
})

function RootComponent() {
  const { queryClient } = Route.useRouteContext()()

  return (
    <QueryClientProvider client={queryClient}>
      <RootDocument>
        <Outlet />
        {/* <SolidQueryDevtools buttonPosition="bottom-left" /> */}
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
      </RootDocument>
    </QueryClientProvider>
  )
}

function RootDocument(props: { children: JSX.Element }) {
  const queryClient = useQueryClient()
  const settingsQuery = useQuery(() => deviceSettingsQueryOptions())
  const initialAccentColor = parsePreferencesCookie().accentColor
  const storageManager = cookieStorageManagerSSR("")

  if (!isServer) {
    const isDesktop = createMediaQuery("(min-width: 1280px)")
    createEffect(() => {
      const detectedType = isDesktop() ? "desktop" : "mobile"
      if (settingsQuery.data!["device-type"] !== detectedType) {
        updateDeviceSettingsCookie(queryClient, { "device-type": detectedType })
      }
    })
  }

  return (
    <html>
      <head>
        <HydrationScript />
        <ColorModeScript storageType={storageManager.type} />
        <style>{`:root { --accent: ${initialAccentColor}; }`}</style>
      </head>
      <body>
        <HeadContent />
        <ColorModeProvider storageManager={storageManager}>
          <AppConvexProvider>
            <ClientOnly>
              <PreferencesSync />
            </ClientOnly>
            <Suspense>
              <TextbookChapterBackgrounds />
            </Suspense>
            {props.children}
          </AppConvexProvider>
        </ColorModeProvider>
        <Scripts />
      </body>
    </html>
  )
}

function PreferencesSync() {
  const queryClient = useQueryClient()
  const user = getUser()
  const profile = useConvexQuery(api.api.profiles.getProfile, {}, () => ({
    enabled: !!user(),
  }))

  createEffect(() => {
    const prefs = profile.data()?.userPreferences
    if (prefs) {
      syncPreferencesFromProfile(queryClient, prefs)
    }
  })

  return null
}

