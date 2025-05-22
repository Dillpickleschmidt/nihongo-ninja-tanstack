// app/routes/learn
import { createFileRoute } from "@tanstack/solid-router"
import { Resource } from "sst"
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "@/features/supabase/getUser"

// Server function to log secret value
const logSecret = createServerFn({
  method: "GET",
}).handler(() => {
  console.log("THE SECRET KEY IS: ", Resource.SECRET_VAL.value)
  return Resource.SECRET_VAL.value
})

async function logUser() {
  console.log("GETTING USER NOW")
  const userResult = await getUser()
  console.log("USER IS : ", userResult)
  return userResult as any
}

export const Route = createFileRoute("/learn/")({
  component: RouteComponent,
})

// TODO: Add a button to sign in
function RouteComponent() {
  // Execute the server function when component is rendered
  logSecret()
  logUser()
  return <div>Hello "/learn/"!</div>
}
