// app/routes/learn/index.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { Resource } from "sst"
import { createServerFn } from "@tanstack/solid-start"
import { createResource } from "solid-js"
import { getUser } from "@/features/supabase/getUser"
import { useAuth } from "@/features/auth/context/AuthContext"

// Server function to log secret value
const getSecret = createServerFn({
  method: "GET",
}).handler(() => {
  console.log("THE SECRET KEY IS: ", Resource.SECRET_VAL.value)
  return Resource.SECRET_VAL.value
})

export const Route = createFileRoute("/learn/")({
  component: RouteComponent,
  loader: async () => {
    console.log("[LEARN LOADER] GETTING USER NOW")
    const { user } = useAuth()
    console.log("[LEARN LOADER] USER IS : ", user)
    return { user }
  },
  staleTime: Infinity,
})

function RouteComponent() {
  // const { user } = Route.useLoaderData()()

  // const [secret] = createResource(() => getSecret())

  return (
    <>
      {/* <div>User: {user?.user?.email || "Not logged in"}</div> */}
      {/* <div>Secret: {secret() || "Loading secret..."}</div> */}
      <div>Hello "/learn/"!</div>
    </>
  )
}
