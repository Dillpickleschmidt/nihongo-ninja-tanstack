// app/routes/__root.tsx
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/solid-router"

import "@fontsource-variable/inter"
import appCss from "@/styles/app.css?url"
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core"
import { getCookie } from "vinxi/http"
import { createServerFn } from "@tanstack/solid-start"
import { isServer } from "solid-js/web"
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools"

import Nav from "@/features/navbar/Nav"

const getServerCookies = createServerFn({
  method: "GET",
}).handler(() => {
  const colorMode = getCookie("kb-color-mode")
  return colorMode ? `kb-color-mode=${colorMode}` : ""
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Nihongo Ninja",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  loader: async () => {
    let cookies = ""
    if (isServer) {
      cookies = await getServerCookies()
    } else {
      cookies = document.cookie
    }
    return { cookies }
  },
  component: RootComponent,
})

function RootComponent() {
  // Use the loader data from the Route
  const loaderData = Route.useLoaderData()
  const cookies = loaderData().cookies

  const storageManager = cookieStorageManagerSSR(cookies)

  return (
    <>
      <ColorModeScript storageType={storageManager?.type} />
      <ColorModeProvider storageManager={storageManager}>
        <Nav />
        <BackgroundImage />
        <Outlet />
        <TanStackRouterDevtools />
      </ColorModeProvider>
    </>
  )
}

function BackgroundImage() {
  return (
    <>
      <style>
        {`
            .custom-gradient-mask {
              mask-image: linear-gradient(to bottom,
                transparent 0%,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0) 73%
              );
              -webkit-mask-image: linear-gradient(to bottom,
                transparent 0%,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0) 73%
              );
            }

            .content-gradient {
              background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
            }
            `}
      </style>
      <img
        src="img/dust-splatter-1.png"
        class="absolute top-0 left-0 -z-1 h-auto w-screen bg-repeat opacity-[0.03]"
      />
    </>
  )
}
