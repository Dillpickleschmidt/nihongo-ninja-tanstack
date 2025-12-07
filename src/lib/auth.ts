import { createIsomorphicFn } from '@tanstack/solid-start'
import { authClient } from './auth-client'
import { fetchAuth } from './server'

export type User = Awaited<ReturnType<typeof getUser>>;

export const getUser = createIsomorphicFn()
  .server(async () => {
    const { session } = await fetchAuth()
    return session?.user ?? null
  })
  .client(() => {
    return authClient.useSession()().data?.user ?? null
  })
