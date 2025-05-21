// app/routes/auth.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { onMount, createSignal } from "solid-js"

export const Route = createFileRoute("/auth")({
  component: AuthTest,
})

function AuthTest() {
  const [message, setMessage] = createSignal("Loading...")

  onMount(async () => {
    const res = await fetch("/api/hello")
    const data = await res.json()
    console.log("API /api/hello response:", data)
    setMessage(data.message)
  })
  return (
    <div style={{ padding: "2rem" }}>
      <h1>TanStack Start API Route Test</h1>
      <p>API says: {message()}</p>
      <form
        method="post"
        action="/api/hello"
        style={{ "margin-top": "2rem" }}
        onSubmit={(e) => {
          // Let the browser handle the form POST
        }}
      >
        <input type="hidden" name="foo" value="bar" />
        <button type="submit">POST to /api/hello</button>
      </form>
    </div>
  )
}
