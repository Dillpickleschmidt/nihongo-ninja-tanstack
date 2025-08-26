// src/routes/api/upload-override.ts
import { createServerFileRoute } from "@tanstack/solid-start/server"
import { getUser } from "@/features/supabase/getUser"
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import type { Stack } from "@/features/resolvers/types"
import { json } from "@tanstack/solid-start"
import { findHighestAvailablePriority } from "@/features/resolvers/shared/priority-utils"

// Generate unique file path for user uploads
const generateFilePath = (userId: string, filename: string): string => {
  const timestamp = Date.now()
  const cleanFilename = filename.replace(/[^a-zA-Z0-9.-]/g, "-")
  return `${userId}/${timestamp}_${cleanFilename}`
}

export const ServerRoute = createServerFileRoute(
  "/api/upload-override",
).methods({
  POST: async ({ request }) => {
    try {
      // Require authentication
      const { user } = await getUser()
      if (!user) {
        return json({ error: "Authentication required" }, { status: 401 })
      }

      // Parse FormData - let browser handle multipart parsing
      const formData = await request.formData()
      const file = formData.get("file") as File | null
      const stackType = formData.get("stackType") as string | null
      const existingStacksJson = formData.get("existingStacks") as string | null

      // Minimal validation - just check required fields exist
      if (!file || !stackType) {
        return json(
          { error: "File and stackType are required" },
          { status: 400 },
        )
      }

      // Parse existing stacks to calculate priority
      let existingStacks: Stack[] = []
      if (existingStacksJson) {
        try {
          existingStacks = JSON.parse(existingStacksJson)
        } catch {
          // If parsing fails, just use empty array (new stack gets priority 0)
        }
      }

      const newPriority = findHighestAvailablePriority(existingStacks)
      const filePath = generateFilePath(user.id, file.name)

      // Upload to Supabase Storage - let Supabase handle file size, type validation
      const supabase = createSupabaseClient()
      const { error: uploadError } = await supabase.storage
        .from("user_overrides_json")
        .upload(filePath, file, {
          upsert: false,
        })

      if (uploadError) {
        return json({ error: uploadError.message }, { status: 400 })
      }

      // Create stack object with auto-generated properties
      const displayName = file.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())

      const newStack: Stack = {
        name: displayName,
        enabled: true,
        locked: false,
        sourceId: `user_overrides_json/${filePath}`,
        priority: newPriority,
      }

      return json(newStack)
    } catch (error) {
      console.error("File upload failed:", error)
      return json(
        { error: error instanceof Error ? error.message : "Upload failed" },
        { status: 500 },
      )
    }
  },
})

