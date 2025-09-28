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
    // Create clean headers for forwarding
    const forwardHeaders = new Headers()

    // Only forward essential headers to reduce overhead
    const essentialHeaders = [
      "content-type",
      "content-length",
      "user-agent",
      "accept",
      "accept-encoding",
      "authorization",
    ]

    for (const header of essentialHeaders) {
      const value = request.headers.get(header)
      if (value) {
        forwardHeaders.set(header, value)
      }
    }

    // Handle request body efficiently
    const body = request.method === "POST" ? request.body : null

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: forwardHeaders,
      body: body,
    })

    // Create response headers efficiently
    const responseHeaders = new Headers()

    // Copy essential response headers
    const essentialResponseHeaders = [
      "content-type",
      "cache-control",
      "access-control-allow-origin",
      "access-control-allow-methods",
      "access-control-allow-headers",
    ]

    for (const header of essentialResponseHeaders) {
      const value = response.headers.get(header)
      if (value) {
        responseHeaders.set(header, value)
      }
    }

    // Handle CORS
    responseHeaders.set("access-control-allow-origin", "*")
    responseHeaders.set("access-control-allow-methods", "GET, POST, OPTIONS")
    responseHeaders.set(
      "access-control-allow-headers",
      "Content-Type, Authorization",
    )

    // Responses that must not have a body per HTTP spec
    const noBodyStatuses = [204, 304]
    if (noBodyStatuses.includes(response.status)) {
      return new Response(null, {
        status: response.status,
        headers: responseHeaders,
      })
    }

    // Stream the response body for better performance
    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders,
    })
  } catch (error) {
    console.error(`PostHog proxy error:`, error)
    return new Response("Proxy error", { status: 502 })
  }
}
