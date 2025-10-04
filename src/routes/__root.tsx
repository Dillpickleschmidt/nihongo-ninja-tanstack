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
import { getCookie } from "@/utils/cookie-utils"
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
} from "@/features/main-cookies/query/query-options"

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

    return { user }
  },
  loader: async ({ context }) => {
    const { user, queryClient } = context

    // Await queries to ensure data ready for SSR
    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

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
