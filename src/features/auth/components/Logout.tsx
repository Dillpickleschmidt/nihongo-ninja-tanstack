// features/auth/components/Logout.tsx
import { clearFoldersAndDecks } from "@/features/vocab-page/storage/sessionStorage"

export default function LogoutButton() {
  const handleLogout = () => {
    clearFoldersAndDecks()
  }

  return (
    <form action="/api/auth/logout" method="post" onSubmit={handleLogout}>
      <button type="submit" class="rounded bg-red-500 px-5 py-2 text-white">
        Logout
      </button>
    </form>
  )
}
