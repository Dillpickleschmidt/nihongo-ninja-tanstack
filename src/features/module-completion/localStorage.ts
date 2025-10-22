/**
 * Temporary local storage for module completions before user signs in.
 * Automatically synced to database on login.
 */

const LOCAL_COMPLETIONS_KEY = "nihongo-ninja:local-completions"

/** Get all locally completed module paths */
export function getLocalCompletions(): string[] {
  if (typeof localStorage === "undefined") return []

  try {
    const data = localStorage.getItem(LOCAL_COMPLETIONS_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error("Failed to read local completions:", error)
    return []
  }
}

/** Add a module path to local completions (auto-deduplicates) */
export function addLocalCompletion(modulePath: string): void {
  if (typeof localStorage === "undefined") return

  try {
    const completions = new Set(getLocalCompletions())
    completions.add(modulePath)
    localStorage.setItem(LOCAL_COMPLETIONS_KEY, JSON.stringify([...completions]))
  } catch (error) {
    console.error("Failed to save local completion:", error)
  }
}

/** Clear all local completions (on logout or after sync) */
export function clearLocalCompletions(): void {
  if (typeof localStorage === "undefined") return

  try {
    localStorage.removeItem(LOCAL_COMPLETIONS_KEY)
  } catch (error) {
    console.error("Failed to clear local completions:", error)
  }
}
