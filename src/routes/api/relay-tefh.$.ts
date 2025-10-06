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
    // Convert Headers to plain object for Lambda compatibility
    const requestHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => {
      // Skip content-length when streaming POST bodies (Lambda may transform the stream)
      if (request.method === "POST" && key === "content-length") {
        return
      }
      requestHeaders[key] = value
    })

    const fetchOptions: RequestInit = {
      method: request.method,
      headers: requestHeaders,
    }

    // Always use streaming for POST requests to avoid timeout issues
    if (request.method === "POST") {
      fetchOptions.body = request.body
      // @ts-ignore - duplex is needed for streaming but not in types
      fetchOptions.duplex = "half"
    }

    const response = await fetch(targetUrl, fetchOptions)

    // Build clean response headers using Headers constructor
    const cleanHeaders = new Headers()
    response.headers.forEach((value, key) => {
      // Skip problematic headers that cause Lambda issues
      if (key !== "content-encoding" && key !== "content-length") {
        cleanHeaders.set(key, value)
      }
    })

    // Handle no-body status codes
    if ([204, 304].includes(response.status)) {
      return new Response(null, {
        status: response.status,
        headers: cleanHeaders,
      })
    }

    // Stream the response back
    return new Response(response.body, {
      status: response.status,
      headers: cleanHeaders,
    })
  } catch (error) {
    console.error(`PostHog proxy error:`, error)
    return new Response("Proxy error", { status: 502 })
  }
}
