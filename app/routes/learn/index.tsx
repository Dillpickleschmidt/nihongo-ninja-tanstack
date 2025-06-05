// app/routes/_learn/learn/index.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { Resource } from "sst"
import { createServerFn } from "@tanstack/solid-start"
import { createResource } from "solid-js"

const getSecret = createServerFn({
  method: "GET",
}).handler(() => {
  console.log("THE SECRET KEY IS: ", Resource.SECRET_VAL.value)
  return Resource.SECRET_VAL.value
})

export const Route = createFileRoute("/learn/")({
  component: RouteComponent,
  loader: async ({ context }) => {
    const { user } = context

    const staticContent = "Learn Japanese with Nihongo Ninja!"
    return { user, staticContent }
  },
  staleTime: Infinity,
})

function RouteComponent() {
  const { user, staticContent } = Route.useLoaderData()()

  // const [secret] = createResource(() => getSecret())

  return (
    <>
      <div>
        <h1>{staticContent}</h1>

        {user ? (
          <div>Welcome back, {user.email}! 🎌</div>
        ) : (
          <div>
            <div>Not logged in</div>
            <p>
              💡 <a href="/auth">Sign in</a> to track your progress
            </p>
          </div>
        )}

        {/* <div>Secret: {secret() || "Loading secret..."}</div> */}

        <div>Hello "/learn/"!</div>
      </div>
    </>
  )
}
