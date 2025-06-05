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
    const serverCookies = isServer ? await getColorModeCookieServer() : null
    let cookies: string
    if (isServer) {
      cookies = serverCookies as string
    } else {
      cookies = document.cookie
    }
    return { cookies }
  },
  component: RootComponent,
  staleTime: Infinity,
})

function RootComponent() {
  const loaderData = Route.useLoaderData()
  const { cookies } = loaderData()

  const storageManager = cookieStorageManagerSSR(cookies)

  return (
    <>
      <ColorModeScript storageType={storageManager?.type} />
      <ColorModeProvider storageManager={storageManager}>
        <TransitionProvider>
          <Scripts />
          <Outlet />
          <TanStackRouterDevtools />
        </TransitionProvider>
      </ColorModeProvider>
    </>
  )
}
