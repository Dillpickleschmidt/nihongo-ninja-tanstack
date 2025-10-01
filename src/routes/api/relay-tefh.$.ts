import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/api/relay-tefh/$")({
  server: {
    handlers: {
      GET: handler,
      POST: handler,
      OPTIONS: async () => new Response(null, { status: 200 }),
    },
  },
})

async function handler({ request, params }: { request: Request; params: any }) {
  const splatPath = params._splat || ""
  const url = new URL(request.url)
  const targetUrl = splatPath.startsWith("static/")
    ? `https://us-assets.i.posthog.com/${splatPath}${url.search}`
    : `https://us.i.posthog.com/${splatPath}${url.search}`

  try {
    const fetchOptions: any = {
      method: request.method,
      headers: request.headers,
    }

    // Always use streaming for POST requests to avoid timeout issues
    if (request.method === "POST") {
      fetchOptions.body = request.body
      fetchOptions.duplex = "half"
    }

    const response = await fetch(targetUrl, fetchOptions)

    // Clean up problematic headers
    const headers = new Headers(response.headers)
    headers.delete("content-encoding")
    headers.delete("content-length")

    // Handle no-body status codes
    if ([204, 304].includes(response.status)) {
      return new Response(null, { status: response.status, headers })
    }

    // Stream the response back
    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders,
    })
  } catch (error) {
    console.error(`PostHog proxy error:`, error)
    return new Response("Proxy error", { status: 502 })
  }
}
