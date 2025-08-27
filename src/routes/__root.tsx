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
import "driver.js/dist/driver.css"
import appCss from "@/styles/app.css?url"
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core"
import { getCookie } from "@/utils/cookie-utils"
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools"
import { getUser } from "@/features/supabase/getUser"
import { SettingsProvider } from "@/context/SettingsContext"
import { TourProvider } from "@/features/guided-tour/TourContext"
import {
  getInitialUserPreferencesFromCookieServerFn,
  getUserPreferencesFromDBServerFn,
} from "@/features/main-cookies/server/server-functions"
import { getDeviceUISettingsCookie } from "@/features/main-cookies/server/cookie-utils"
import type { User } from "@supabase/supabase-js"

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

    // Cross-device user preferences (SWR pattern)
    const initialUserPreferenceData =
      await getInitialUserPreferencesFromCookieServerFn()

    return {
      user: (result?.user as User) || null,
      initialUserPreferenceData,
    }
  },
  loader: async ({ context }) => {
    const { user, initialUserPreferenceData } = context

    // Deferred DB data for SWR pattern
    const userPreferencesDBPromise = defer(
      getUserPreferencesFromDBServerFn().catch((error) => {
        console.log(error.message)
        // Return a promise that never resolves - this prevents good cookie data from being overwritten with a default value
        return new Promise(() => {})
      }),
    ) as Promise<typeof initialUserPreferenceData> // it will never resolve on error thus we can safely type it

    // Device UI settings (client-accessible cookie)
    const deviceUISettings = getDeviceUISettingsCookie()

    // Check if main tour should auto-start
    const isMainTourCompleted =
      initialUserPreferenceData["completed-tours"].includes("app-onboarding") ||
      deviceUISettings.tour.currentTourStep === -2
    const isDismissed = deviceUISettings.tour.currentTourStep === -1
    const hasActiveTour = deviceUISettings.tour.currentTourId
    const shouldStartMainTour =
      !isMainTourCompleted && !isDismissed && !hasActiveTour

    return {
      user,
      initialUserPreferenceData,
      userPreferencesDBPromise,
      deviceUISettings,
      shouldStartMainTour,
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
    shouldStartMainTour,
  } = loaderData()
  const colorModeCookies = `kb-color-mode=${getCookie("kb-color-mode")}`

  const storageManager = cookieStorageManagerSSR(colorModeCookies)

  return (
    <>
      <ColorModeScript storageType={storageManager?.type} />
      <ColorModeProvider storageManager={storageManager}>
        <SettingsProvider
          user={user as User}
          initialUserPreferenceData={initialUserPreferenceData}
          userPreferencesDBPromise={userPreferencesDBPromise}
          deviceUISettings={deviceUISettings}
        >
          <TourProvider shouldStartMainTour={shouldStartMainTour}>
            <Scripts />
            <Outlet />
            <TanStackRouterDevtools />
          </TourProvider>
        </SettingsProvider>
      </ColorModeProvider>
    </>
  )
}
