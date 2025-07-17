// features/auth/components/Logout.tsx
export default function LogoutButton() {
  return (
    <form action="/api/auth/logout" method="post">
      <button type="submit" class="rounded bg-red-600 px-3 py-1 text-white">
        Logout
      </button>
    </form>
  )
}
