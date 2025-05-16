import { createFileRoute } from "@tanstack/solid-router"
import { Resource } from "sst"
import { createServerFn } from "@tanstack/solid-start"

export const Route = createFileRoute("/learn/")({
  component: RouteComponent,
})

function RouteComponent() {
  console.log(Resource.SECRET_VAL.value)
  return <div>Hello "/learn/"!</div>
}
