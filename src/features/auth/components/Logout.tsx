// features/auth/components/Logout.tsx
import { Button } from "@/components/ui/button"
import { clearFoldersAndDecks } from "@/features/vocab-page/storage/sessionStorage"
import { clearLocalCompletions } from "@/features/module-completion/localStorage"
import { cn } from "@/utils"

interface LogoutButtonProps {
  class?: string
}

export default function LogoutButton(props: LogoutButtonProps) {
  const handleLogout = () => {
    clearFoldersAndDecks()
    clearLocalCompletions()
  }

  return (
    <form action="/api/auth/logout" method="post" onSubmit={handleLogout}>
      <Button
        type="submit"
        class={cn(
          "cursor-pointer bg-red-500 text-white hover:bg-red-600",
          props.class,
        )}
      >
        Logout
      </Button>
    </form>
  )
}
