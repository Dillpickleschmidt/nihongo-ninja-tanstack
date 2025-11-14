import { Client, cacheExchange, fetchExchange, ssrExchange } from "@urql/core"

export function createUrqlClient(isServer: boolean) {
  const ssr = ssrExchange({
    isClient: !isServer,
  })

  const client = new Client({
    url: "https://graphql.anilist.co",
    preferGetMethod: false,
    exchanges: [cacheExchange, ssr, fetchExchange],
  })

  return { client, ssr }
}
