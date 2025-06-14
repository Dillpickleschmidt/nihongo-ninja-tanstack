import { isServer } from "solid-js/web"
import { createBackendClient } from "./backendClient"
import { createFrontendClient } from "./frontendClient"

export const createSupabaseClient = () => {
  if (isServer) {
    return createBackendClient()
  } else {
    return createFrontendClient()
  }
}
