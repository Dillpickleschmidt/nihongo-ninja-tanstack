import { useQuery, useQueryClient } from "@tanstack/solid-query"
import { useMutation } from "convex-solidjs"
import { api } from "convex/_generated/api"
import { getUser } from "./auth"
import { preferencesQueryOptions } from "@/query/query-options"
import {
  updatePreferenceCookie,
  updatePreferencesCookie,
  type StoredPreferences,
} from "@/query/model/preferences"

export function usePreferences() {
  const queryClient = useQueryClient()
  const user = getUser()
  const prefs = useQuery(() => preferencesQueryOptions())
  const mutation = useMutation(api.api.profiles.updatePreferenceField)

  return {
    preferences: () => prefs.data!,
    setPreference: <K extends keyof StoredPreferences>(
      field: K,
      value: StoredPreferences[K],
    ) => {
      updatePreferenceCookie(queryClient, field, value)
      if (user()) mutation.mutate({ field, value })
    },
    setPreferences: (updates: Partial<StoredPreferences>) => {
      updatePreferencesCookie(queryClient, updates)
      if (user()) {
        for (const [field, value] of Object.entries(updates)) {
          mutation.mutate({ field, value })
        }
      }
    },
  }
}
