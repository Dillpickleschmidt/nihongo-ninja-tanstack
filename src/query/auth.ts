import { queryOptions } from '@tanstack/solid-query'
import { fetchAuth } from '@/lib/server'

export const authQueryOptions = () =>
  queryOptions({
    queryKey: ['auth'],
    queryFn: async () => {
      const auth = await fetchAuth()
      const expiresAt = auth.session?.session.expiresAt
      const staleTime = expiresAt
        ? Math.max(0, new Date(expiresAt).getTime() - Date.now())
        : Infinity
      return { ...auth, staleTime }
    },
    staleTime: (query) => query.state.data?.staleTime ?? 0,
  })
