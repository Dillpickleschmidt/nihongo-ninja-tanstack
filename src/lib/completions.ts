import { createSignal, onMount } from "solid-js"
import { useMutation } from "convex-solidjs"
import { getUser } from "@/lib/auth"
import { api } from "convex/_generated/api"

// ============================================================================
// localStorage helpers
// ============================================================================

const STORAGE_KEY = "nihongo-ninja:local-completions"

export function getLocalCompletions(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function addLocalCompletion(modulePath: string) {
  const current = getLocalCompletions()
  current[modulePath] = Date.now()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
}

export function clearLocalCompletions() {
  localStorage.removeItem(STORAGE_KEY)
}

// ============================================================================
// useLocalCompletions — hydration-safe reactive localStorage completions
// ============================================================================

export function useLocalCompletions() {
  const [completions, setCompletions] = createSignal<Record<string, number>>({})

  onMount(() => {
    setCompletions(getLocalCompletions())
  })

  return completions
}

// ============================================================================
// useCompleteModule — write-only hook for marking modules complete
// ============================================================================

export function useCompleteModule() {
  const user = getUser()
  const completeMutation = useMutation(api.api.completions.completeModule)

  const [localCompletions, setLocalCompletions] = createSignal<Record<string, number>>({})

  onMount(() => {
    setLocalCompletions(getLocalCompletions())
  })

  const completeModule = (moduleId: string) => {
    if (user()) {
      completeMutation.mutate({ modulePath: moduleId })
    } else {
      addLocalCompletion(moduleId)
      setLocalCompletions(getLocalCompletions())
    }
  }

  return { completeModule, localCompletions }
}
