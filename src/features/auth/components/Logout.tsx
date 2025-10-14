// features/auth/components/Logout.tsx
import { Button } from "@/components/ui/button"
import { clearFoldersAndDecks } from "@/features/vocab-page/storage/sessionStorage"

export default function LogoutButton() {
  const handleLogout = () => {
    clearFoldersAndDecks()
  }

  return (
    <form action="/api/auth/logout" method="post" onSubmit={handleLogout}>
      <Button
        type="submit"
        class="cursor-pointer bg-red-500 text-white hover:bg-red-600"
      >
        Logout
      </Button>
    </form>
  )
}
