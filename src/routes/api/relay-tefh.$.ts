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
    console.log("Starting proxy for:", targetUrl)
    console.log("Request method:", request.method)
    console.log("Content-Length:", request.headers.get("content-length"))

    console.log("Request headers being forwarded:")
    for (const [key, value] of request.headers.entries()) {
      console.log(`${key}: ${value}`)
    }

    const body =
      request.method === "POST" ? await request.arrayBuffer() : undefined
    console.log("Body processed, size:", body?.byteLength || 0)

    // Log body content for debugging (first 500 chars)
    if (body && body.byteLength > 0) {
      const bodyText = new TextDecoder().decode(body.slice(0, 500))
      console.log("Body content (first 500 chars):", bodyText)
    }

    const fetchStart = Date.now()
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: body,
    })
    console.log("Fetch took:", Date.now() - fetchStart, "ms")
    console.log("Response status:", response.status)

    const headers = new Headers(response.headers)
    headers.delete("content-encoding")
    headers.delete("content-length")

    // Responses that must not have a body per HTTP spec
    const noBodyStatuses = [204, 304]
    if (noBodyStatuses.includes(response.status)) {
      return new Response(null, {
        status: response.status,
        headers,
      })
    }

    return new Response(await response.arrayBuffer(), {
      status: response.status,
      headers,
    })
  } catch (error) {
    console.error(`PostHog proxy error:`, error)
    return new Response("Proxy error", { status: 502 })
  }
}
