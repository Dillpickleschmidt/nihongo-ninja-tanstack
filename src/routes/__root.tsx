// src/routes/__root.tsx
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/solid-router"
import {
  isServer,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/solid-query"
import type { QueryClient } from "@tanstack/solid-query"
import "@fontsource-variable/inter"
import "@fontsource/poppins"
import "driver.js/dist/driver.css"
import appCss from "@/styles/app.css?url"
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core"
import { getCookie, setCookie } from "@/utils/cookie-utils"
import { createEffect } from "solid-js"
import { createMediaQuery } from "@solid-primitives/media"
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools"
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools"
import { getUser } from "@/features/supabase/getUser"
import { TourProvider } from "@/features/guided-tour/TourContext"
import type { User } from "@supabase/supabase-js"
import { useMutation } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { PostHogProvider } from "@/features/posthog/PostHogContext"
import {
  userSettingsQueryOptions,
  updateUserSettingsMutation,
  fetchUserSettingsFromDB,
} from "@/features/main-cookies/query/query-options"
import { UserSettingsSchema } from "@/features/main-cookies/schemas/user-settings"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import { USER_SETTINGS_COOKIE } from "@/features/main-cookies/types"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
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
  beforeLoad: async ({ context }) => {
    const result = await getUser()
    const user = (result?.user as User) || null

    // Prefetch queries (don't await - let loader handle that)
    const { queryClient } = context
    queryClient.prefetchQuery(userSettingsQueryOptions(user?.id || null))

    // Start DB fetch immediately (fire-and-forget)
    const dbSyncPromise = user?.id
      ? fetchUserSettingsFromDB(user.id)
      : Promise.resolve(null)

    return { user, dbSyncPromise }
  },
  loader: async ({ context }) => {
    const { user, queryClient, dbSyncPromise } = context

    // Await queries to ensure data ready for SSR
    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    // When DB fetch completes, compare timestamps and update if DB is newer (fire-and-forget)
    dbSyncPromise.then((dbData) => {
      if (!dbData || !user?.id) return

      const currentData = queryClient.getQueryData<UserSettings>([
        "user-settings",
        user.id,
      ])
      const dbTimestamp = dbData.timestamp || 0
      const currentTimestamp = currentData?.timestamp || 0

      if (dbTimestamp > currentTimestamp) {
        const defaults = UserSettingsSchema.parse({})
        const mergedData = UserSettingsSchema.parse({
          ...defaults,
          ...dbData,
          // Preserve device-specific fields from cookie
          routes: currentData?.routes ?? defaults.routes,
          tour: currentData?.tour ?? defaults.tour,
          "device-type": currentData?.["device-type"] ?? defaults["device-type"],
        })

        // Update cache
        queryClient.setQueryData(["user-settings", user.id], mergedData)

        // Update cookie so next page load has fresh data
        setCookie(USER_SETTINGS_COOKIE, JSON.stringify(mergedData), {
          httpOnly: false,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 365, // 1 year
        })
      }
    })

    // Check if main tour should auto-start
    const isMainTourCompleted =
      userSettings["completed-tours"].includes("app-onboarding") ||
      userSettings.tour.currentTourStep === -2
    const isDismissed = userSettings.tour.currentTourStep === -1
    const hasActiveTour = userSettings.tour.currentTourId
    const shouldStartMainTour =
      !isMainTourCompleted && !isDismissed && !hasActiveTour

    return {
      user,
      shouldStartMainTour,
    }
  },
  component: RootComponent,
  notFoundComponent: () => (
    <div class="flex min-h-screen items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold">404</h1>
        <p class="mt-2 text-lg">Page not found</p>
      </div>
    </div>
  ),
})

function RootComponent() {
  const { queryClient } = Route.useRouteContext()()

  return (
    <>
      <HeadContent />
      <QueryClientProvider client={queryClient}>
        <RootContent />
      </QueryClientProvider>
      <Scripts />
    </>
  )
}

function RootContent() {
  const loaderData = Route.useLoaderData()
  const { user, shouldStartMainTour } = loaderData()
  const queryClient = useQueryClient()
  const colorModeCookies = `kb-color-mode=${getCookie("kb-color-mode")}`

  const storageManager = cookieStorageManagerSSR(colorModeCookies)

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )
  const updateSettingsMutation = useMutation(() =>
    updateUserSettingsMutation(user?.id || null, queryClient),
  )

  if (!isServer) {
    const isDesktop = createMediaQuery("(min-width: 1280px)")
    createEffect(() => {
      const detectedType: "mobile" | "desktop" = isDesktop()
        ? "desktop"
        : "mobile"

      if (settingsQuery.data?.["device-type"] !== detectedType) {
        updateSettingsMutation.mutate({
          "device-type": detectedType,
        })
      }
    })
  }

  return (
    <PostHogProvider user={user}>
      <ColorModeScript storageType={storageManager?.type} />
      <ColorModeProvider storageManager={storageManager}>
        <TourProvider shouldStartMainTour={shouldStartMainTour}>
          <Outlet />
          <TanStackRouterDevtools position="bottom-right" />
          <SolidQueryDevtools buttonPosition="bottom-left" />
        </TourProvider>
      </ColorModeProvider>
    </PostHogProvider>
  )
}
