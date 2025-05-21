// app/api.ts
import {
  createStartAPIHandler,
  defaultAPIFileRouteHandler,
} from "@tanstack/solid-start/api"

export default createStartAPIHandler(defaultAPIFileRouteHandler)
