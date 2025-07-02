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
import { getCookie } from "@/utils/cookie-utils"
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools"
import { getUser } from "@/features/supabase/getUser"
import { TransitionProvider } from "@/context/TransitionContext"
import { SettingsProvider } from "@/context/SettingsContext"
import {
  getServiceAuthDataFromCookie,
  getServicePreferencesFromCookie,
} from "@/features/service-config/server/service-manager"

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
  loader: () => {
    const initialAuthData = getServiceAuthDataFromCookie()
    const initialPreferences = getServicePreferencesFromCookie()
    return { initialAuthData, initialPreferences }
  },
  component: RootComponent,
  staleTime: 0,
})

function RootComponent() {
  const loaderData = Route.useLoaderData()
  const { initialAuthData, initialPreferences } = loaderData()
  const colorModeCookies = `kb-color-mode=${getCookie("kb-color-mode")}`

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
