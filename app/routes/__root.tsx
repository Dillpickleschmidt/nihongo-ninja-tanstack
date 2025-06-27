// app/routes/__root.tsx
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/solid-router"
import "@fontsource-variable/inter"
import "@fontsource/poppins"
import appCss from "@/styles/app.css?url"
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core"
import { getCookie } from "@tanstack/solid-start/server"
import { createServerFn } from "@tanstack/solid-start"
import { isServer } from "solid-js/web"
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools"
import { getUser } from "@/features/supabase/getUser"
import { TransitionProvider } from "@/context/TransitionContext"
import { SettingsProvider } from "@/context/SettingsContext"
import {
  getAuthDataFromCookie,
  getPreferencesFromCookie,
} from "@/features/service-config/server/service-manager"
import type {
  AllServiceAuthData,
  AllServicePreferences,
} from "@/features/service-config/types"

const getColorModeCookieServer = createServerFn({
  method: "GET",
}).handler(() => {
  const colorMode = getCookie("kb-color-mode")
  return colorMode ? `kb-color-mode=${colorMode}` : ""
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Nihongo Ninja" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  beforeLoad: async () => {
    console.log("root beforeLoad fired!")
    const result = await getUser()
    return { user: result?.user || null }
  },
  loader: async () => {
    const serverColorModeCookies = isServer
      ? await getColorModeCookieServer()
      : null
    let colorModeCookies: string
    if (isServer) {
      colorModeCookies = serverColorModeCookies as string
    } else {
      colorModeCookies = document.cookie
    }
    const initialAuthData = getAuthDataFromCookie()
    const initialPreferences = getPreferencesFromCookie()
    return { colorModeCookies, initialAuthData, initialPreferences }
  },
  component: RootComponent,
  staleTime: Infinity,
})

function RootComponent() {
  const loaderData = Route.useLoaderData()
  const { colorModeCookies, initialAuthData, initialPreferences } = loaderData()

  const storageManager = cookieStorageManagerSSR(colorModeCookies)

  return (
    <>
      <ColorModeScript storageType={storageManager?.type} />
      <ColorModeProvider storageManager={storageManager}>
        <SettingsProvider
          initialAuthData={initialAuthData}
          initialPreferences={initialPreferences}
        >
          <TransitionProvider>
            <Scripts />
            <Outlet />
            <TanStackRouterDevtools />
          </TransitionProvider>
        </SettingsProvider>
      </ColorModeProvider>
    </>
  )
}
