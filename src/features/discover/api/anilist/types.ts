import type {
  FullMedia,
  MediaEdgeFrag,
  RecrusiveRelations,
  DiscoverMedia as DiscoverMediaFragment,
  DiscoverSearch,
} from "./queries"
import type { FragmentOf, ResultOf } from "gql.tada"

export type Media = ResultOf<typeof FullMedia>

export type MediaEdge = ResultOf<typeof MediaEdgeFrag>

export type RelationTreeMedia = NonNullable<
  NonNullable<ResultOf<typeof RecrusiveRelations>["Page"]>["media"]
>[0]

export type DiscoverMedia = FragmentOf<typeof DiscoverMediaFragment>

export type DiscoverPage = NonNullable<
  ResultOf<typeof DiscoverSearch>["Page"]
>
