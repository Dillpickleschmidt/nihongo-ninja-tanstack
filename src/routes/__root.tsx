/// <reference types="vite/client" />
import type { JSX } from 'solid-js'
import { createEffect } from 'solid-js'
import { HydrationScript, Suspense, isServer } from 'solid-js/web'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/solid-router'
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from '@kobalte/core'
import {
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from '@tanstack/solid-query'
import type { QueryClient } from '@tanstack/solid-query'
import { createMediaQuery } from '@solid-primitives/media'
import '@fontsource-variable/inter'
import '@fontsource/poppins'
import appCss from '@/styles/app.css?url'
import AppConvexProvider from '@/providers/convex'
import {
  deviceSettingsQueryOptions,
  updateDeviceSettingsCookie,
} from '@/query/device-settings'
import { authQueryOptions } from '@/query/auth'

export interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  beforeLoad: async ({ context }) => {
    context.queryClient.prefetchQuery(deviceSettingsQueryOptions())
    await context.queryClient.ensureQueryData(authQueryOptions())
    return {}
  },
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(deviceSettingsQueryOptions())
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
      </RootDocument>
    </QueryClientProvider>
  )
}

function RootDocument(props: { children: JSX.Element }) {
  const queryClient = useQueryClient()
  const settingsQuery = useQuery(() => deviceSettingsQueryOptions())
  const storageManager = cookieStorageManagerSSR('')

  if (!isServer) {
    const isDesktop = createMediaQuery('(min-width: 1280px)')
    createEffect(() => {
      const detectedType = isDesktop() ? 'desktop' : 'mobile'
      if (settingsQuery.data!['device-type'] !== detectedType) {
        updateDeviceSettingsCookie(queryClient, { 'device-type': detectedType })
      }
    })
  }

  return (
    <html>
      <head>
        <HydrationScript />
        <ColorModeScript storageType={storageManager.type} />
      </head>
      <body>
        <HeadContent />
        <Suspense>
          <ColorModeProvider storageManager={storageManager}>
            <AppConvexProvider>
              {props.children}
            </AppConvexProvider>
          </ColorModeProvider>
        </Suspense>
        <Scripts />
      </body>
    </html>
  )
}
