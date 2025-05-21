// features/auth/components/logout.tsx

import { Resource } from "sst"

const apiBase = Resource.MyApi.url

export default function LogoutButton() {
  return (
    <form action={`${apiBase}/auth/logout`} method="post">
      <button type="submit" class="rounded bg-red-600 px-3 py-1 text-white">
        Logout
      </button>
    </form>
  )
}
