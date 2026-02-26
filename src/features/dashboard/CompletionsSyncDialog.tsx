import { createSignal } from "solid-js"
import { useMutation } from "convex-solidjs"
import { api } from "convex/_generated/api"
import { getUser } from "@/lib/auth"
import { useLocalCompletions, clearLocalCompletions } from "@/lib/completions"
import { ConfirmActionDialog } from "@/features/import/shared/ConfirmActionDialog"

export function CompletionsSyncDialog() {
  const user = getUser()
  const localCompletions = useLocalCompletions()
  const syncMutation = useMutation(api.api.completions.syncCompletions)
  const [dismissed, setDismissed] = createSignal(false)

  const pendingEntries = () => Object.entries(localCompletions())
  const showSyncDialog = () =>
    !!user() && pendingEntries().length > 0 && !dismissed()

  const handleSync = () => {
    const entries = pendingEntries()
    clearLocalCompletions()
    setDismissed(true)
    syncMutation.mutateAsync({
      completions: entries.map(([modulePath, completedAt]) => ({
        modulePath,
        completedAt,
      })),
    })
  }

  return (
    <ConfirmActionDialog
      open={showSyncDialog()}
      onOpenChange={(open) => {
        if (!open) {
          clearLocalCompletions()
          setDismissed(true)
        }
      }}
      title="Sync Your Progress?"
      description={`You completed ${pendingEntries().length} module${pendingEntries().length === 1 ? "" : "s"} while signed out. Would you like to save them to your account?`}
      confirmLabel="Sync"
      onConfirm={handleSync}
    />
  )
}
