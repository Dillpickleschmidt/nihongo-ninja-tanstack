// features/supabase/getUser.ts
import { isServer } from "solid-js/web"
import { getUserSSR } from "./getUserSSR"
import { getUserBrowser } from "./getUserBrowser"

export async function getUser() {
  if (isServer) {
    return await getUserSSR()
  } else {
    return await getUserBrowser()
  }
}
