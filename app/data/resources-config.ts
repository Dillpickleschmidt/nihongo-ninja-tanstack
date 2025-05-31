// data/resources-config.ts
export type ResourceProvider =
  | "youtube"
  | "satori_reader"
  | "anki"
  | "wanikani"
  | "genki"
  | "netflix"
  | "tokini_andy"
  | "kaname_naito"
  | "jpdb"
  | "tofugu"
  | "crunchyroll"
  | "game_gengo"
  | "miku_real_japanese"
  | "nihongo_learning"
  | "speak_japanese_naturally"
  | "japanese_super_immersion"
  | "JapanesePod101"
  | "kikusasaizu"
  | "mykikitori"
  | "nihongodekita"
  | "realrealjapan"
  | "dogen"
  | "that_japanese_man_yuta"
  | "jozu_juls"
  | "generic_website"

export interface ResourceConfig {
  creator_id: ResourceProvider
  creator_name: string
  profile_img: string
  fallback: string
  type: ThumbnailFetchType
}

export type ThumbnailFetchType =
  | "youtube_api" // Uses YouTube's thumbnail API
  | "open_graph" // Standard OG meta tags
  | "css_background" // Like Satori Reader's article-header-image
  | "manual" // Manually curated/uploaded images
  | "none" // No thumbnail available

// Keyed by creator_id
export const RESOURCE_CONFIGS: Record<ResourceProvider, ResourceConfig> = {
  youtube: {
    creator_id: "youtube",
    creator_name: "YouTube",
    profile_img: "/avatars/youtube.png",
    fallback: "YT",
    type: "youtube_api",
  },
  genki: {
    creator_id: "genki",
    creator_name: "Genki",
    profile_img: "/avatars/genki.png",
    fallback: "GK",
    type: "manual",
  },
  anki: {
    creator_id: "anki",
    creator_name: "Anki",
    profile_img: "/avatars/anki.png",
    fallback: "AN",
    type: "none",
  },
  wanikani: {
    creator_id: "wanikani",
    creator_name: "WaniKani",
    profile_img: "/avatars/wanikani.png",
    fallback: "WK",
    type: "open_graph",
  },
  satori_reader: {
    creator_id: "satori_reader",
    creator_name: "Satori Reader",
    profile_img: "/avatars/satori.png",
    fallback: "SR",
    type: "css_background",
  },
  netflix: {
    creator_id: "netflix",
    creator_name: "Netflix",
    profile_img: "/avatars/netflix.png",
    fallback: "NF",
    type: "open_graph",
  },
  tokini_andy: {
    creator_id: "tokini_andy",
    creator_name: "ToKini Andy",
    profile_img: "/avatars/tokini.png",
    fallback: "TA",
    type: "youtube_api",
  },
  kaname_naito: {
    creator_id: "kaname_naito",
    creator_name: "kaname_naito",
    profile_img: "/avatars/kacreator_name.png",
    fallback: "KN",
    type: "youtube_api",
  },
  jpdb: {
    creator_id: "jpdb",
    creator_name: "JPDB",
    profile_img: "/avatars/jpdb.png",
    fallback: "JP",
    type: "open_graph",
  },
  tofugu: {
    creator_id: "tofugu",
    creator_name: "Tofugu",
    profile_img: "/avatars/tofugu.png",
    fallback: "TF",
    type: "open_graph",
  },
  crunchyroll: {
    creator_id: "crunchyroll",
    creator_name: "Crunchyroll",
    profile_img: "/avatars/crunchyroll.png",
    fallback: "CR",
    type: "open_graph",
  },
  game_gengo: {
    creator_id: "game_gengo",
    creator_name: "Game Gengo",
    profile_img: "/avatars/gamegengo.png",
    fallback: "GG",
    type: "youtube_api",
  },
  miku_real_japanese: {
    creator_id: "miku_real_japanese",
    creator_name: "Miku Real Japanese",
    profile_img: "/avatars/miku.png",
    fallback: "MJ",
    type: "youtube_api",
  },
  nihongo_learning: {
    creator_id: "nihongo_learning",
    creator_name: "Nihongo Learning",
    profile_img: "/avatars/nihongo.png",
    fallback: "NL",
    type: "youtube_api",
  },
  speak_japanese_naturally: {
    creator_id: "speak_japanese_naturally",
    creator_name: "Speak Japanese Naturally",
    profile_img: "/avatars/sjn.png",
    fallback: "SJ",
    type: "youtube_api",
  },
  japanese_super_immersion: {
    creator_id: "japanese_super_immersion",
    creator_name: "Japanese Super Immersion",
    profile_img: "/avatars/japanese-super-immersion.png",
    fallback: "JS",
    type: "youtube_api",
  },
  JapanesePod101: {
    creator_id: "JapanesePod101",
    creator_name: "JapanesePod101",
    profile_img: "/avatars/japanese-pod-101.png",
    fallback: "JP",
    type: "youtube_api",
  },
  kikusasaizu: {
    creator_id: "kikusasaizu",
    creator_name: "Kiku Sasai-zu",
    profile_img: "/avatars/kiku.png",
    fallback: "KS",
    type: "youtube_api",
  },
  mykikitori: {
    creator_id: "mykikitori",
    creator_name: "MyKikitori",
    profile_img: "/avatars/mykikitori.png",
    fallback: "MK",
    type: "youtube_api",
  },
  nihongodekita: {
    creator_id: "nihongodekita",
    creator_name: "Nihongo Dekita",
    profile_img: "/avatars/nihongodekita.png",
    fallback: "ND",
    type: "youtube_api",
  },
  realrealjapan: {
    creator_id: "realrealjapan",
    creator_name: "Real Real Japan",
    profile_img: "/avatars/realrealjapan.png",
    fallback: "RR",
    type: "youtube_api",
  },
  dogen: {
    creator_id: "dogen",
    creator_name: "Dogen",
    profile_img: "/avatars/dogen.png",
    fallback: "DO",
    type: "youtube_api",
  },
  that_japanese_man_yuta: {
    creator_id: "that_japanese_man_yuta",
    creator_name: "That Japanese Man Yuta",
    profile_img: "/avatars/that-japanese-man-yuta.png",
    fallback: "TJ",
    type: "youtube_api",
  },
  jozu_juls: {
    creator_id: "jozu_juls",
    creator_name: "Jozu Juls",
    profile_img: "/avatars/jozu-juls.png",
    fallback: "JJ",
    type: "youtube_api",
  },
  generic_website: {
    creator_id: "generic_website",
    creator_name: "Generic Website",
    profile_img: "/avatars/generic.png",
    fallback: "GW",
    type: "open_graph",
  },
}
