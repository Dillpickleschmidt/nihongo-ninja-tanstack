import { redirect } from '@tanstack/solid-router'
import { useQuery } from '@tanstack/solid-query'
import { authQueryOptions } from '@/query/query-options'
import { fetchAuth } from './server'

type AuthData = Awaited<ReturnType<typeof fetchAuth>>
export type User = NonNullable<AuthData['session']>['user']

// For components - reactive via useQuery
export function getUser() {
  const query = useQuery(() => authQueryOptions())
  return () => query.data?.session?.user ?? null
}

// For protected route beforeLoad - fresh server validation
export async function requireAuth() {
  const { token } = await fetchAuth()
  if (!token) {
    throw redirect({ to: '/auth' })
  }
}
