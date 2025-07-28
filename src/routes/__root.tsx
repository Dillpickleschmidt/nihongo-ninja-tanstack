// src/routes/__root.tsx
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  defer,
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
  getInitialUserPreferencesFromCookieServerFn,
  getUserPreferencesFromDBServerFn,
} from "@/features/user-settings/server/server-functions"
import { getDeviceUISettingsCookie } from "@/features/user-settings/utils/settings-cookies"

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
    // --- ADD TIMER FOR USER FETCH ---
    console.time("getUser (beforeLoad)")
    const result = await getUser()
    console.timeEnd("getUser (beforeLoad)")
    // --- END TIMER ---
    return { user: result?.user || null }
  },
  loader: async ({ context }) => {
    const { user } = context

    // Cross-device user preferences (SWR pattern)
    const initialUserPreferenceData =
      await getInitialUserPreferencesFromCookieServerFn()
    const userPreferencesDBPromise = defer(
      getUserPreferencesFromDBServerFn().catch((error) => {
        console.log(error.message)
        // Return a promise that never resolves - this prevents good cookie data from being overwritten with a default value
        return new Promise(() => {})
      }),
    )

    // Device UI settings (client-accessible cookie)
    const deviceUISettings = getDeviceUISettingsCookie()

    return {
      user,
      initialUserPreferenceData,
      userPreferencesDBPromise,
      deviceUISettings,
    }
  },
  component: RootComponent,
  staleTime: 0,
})

function RootComponent() {
  const loaderData = Route.useLoaderData()
  const {
    user,
    initialUserPreferenceData,
    userPreferencesDBPromise,
    deviceUISettings,
  } = loaderData()
  const colorModeCookies = `kb-color-mode=${getCookie("kb-color-mode")}`

  const storageManager = cookieStorageManagerSSR(colorModeCookies)

  return (
    <>
      <ColorModeScript storageType={storageManager?.type} />
      <ColorModeProvider storageManager={storageManager}>
        <SettingsProvider
          user={user}
          initialUserPreferenceData={initialUserPreferenceData}
          userPreferencesDBPromise={userPreferencesDBPromise}
          deviceUISettings={deviceUISettings}
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
