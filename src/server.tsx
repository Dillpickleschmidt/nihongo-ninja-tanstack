// src/server.ts
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/solid-start/server"

import { createRouter } from "./router"

// 1. Create the final, executable handler exactly as it was in your
//    original working code. This function is what we want to time.
const finalHandler = createStartHandler({
  createRouter,
})(defaultStreamHandler)

// 2. Create our timed wrapper. This is the function we will actually export.
//    Crucially, it accepts the `context` object that the server runtime provides.
async function timedWrapper(context: { request: Request }) {
  console.time("SSR Render")

  // 3. Call the original handler, passing the context object it expects.
  const response = await finalHandler(context)

  console.timeEnd("SSR Render")

  // 4. Return the final response.
  return response
}

// 5. Export our wrapper as the default.
export default timedWrapper
