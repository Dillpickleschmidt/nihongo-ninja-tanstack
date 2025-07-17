// createSupabaseClient.ts
import { isServer } from "solid-js/web"
import { createBackendClient } from "./backendClient"
import { createCustomFrontendClient } from "./customFrontendClient"

export const createSupabaseClient = () => {
  if (isServer) {
    return createBackendClient()
  } else {
    return createCustomFrontendClient()
  }
}
