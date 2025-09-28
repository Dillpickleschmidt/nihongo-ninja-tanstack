import { createServerFileRoute } from "@tanstack/solid-start/server"

export const ServerRoute = createServerFileRoute("/api/relay-tefh/$").methods({
  GET: handler,
  POST: handler,
  OPTIONS: async () => new Response(null, { status: 200 }),
})

async function handler({ request, params }: { request: Request; params: any }) {
  // Get the splat parameter which contains the rest of the path
  const splatPath = params._splat || ""

  const url = new URL(request.url)
  const targetUrl = splatPath.startsWith("static/")
    ? `https://us-assets.i.posthog.com/${splatPath}${url.search}`
    : `https://us.i.posthog.com/${splatPath}${url.search}`

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method === "POST" ? await request.text() : undefined,
    })

    // Filter out compression headers since we're sending uncompressed content
    const filteredHeaders = new Headers()
    response.headers.forEach((value, key) => {
      // Skip headers that could cause content decoding issues
      if (
        !["content-encoding", "content-length", "transfer-encoding"].includes(
          key.toLowerCase(),
        )
      ) {
        filteredHeaders.set(key, value)
      }
    })

    return new Response(await response.arrayBuffer(), {
      status: response.status,
      headers: filteredHeaders,
    })
  } catch (error) {
    console.error(`PostHog proxy error:`, error)
    return new Response("Proxy error", { status: 502 })
  }
}
