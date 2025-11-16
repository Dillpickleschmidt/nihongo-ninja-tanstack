export interface Image {
  coverType: "Banner" | "Poster" | "Fanart" | "Clearlogo"
  url: string
}

export interface EpisodesResponse {
  titles?: Record<string, string>
  episodes?: Record<string | number, any>
  episodeCount?: number
  specialCount?: number
  images?: Image[]
  mappings?: any
}
