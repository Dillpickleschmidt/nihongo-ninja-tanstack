// app/routes/learn
import { createFileRoute } from "@tanstack/solid-router"
import { Resource } from "sst"
import { createServerFn } from "@tanstack/solid-start"

// Server function to log secret value
const logSecret = createServerFn({
  method: "GET",
}).handler(() => {
  console.log("THE SECRET KEY IS: ", Resource.SECRET_VAL.value)
  return Resource.SECRET_VAL.value
})

export const Route = createFileRoute("/learn/")({
  component: RouteComponent,
})

// TODO: Add a button to sign in
function RouteComponent() {
  // Execute the server function when component is rendered
  logSecret()
  return <div>Hello "/learn/"!</div>
}
