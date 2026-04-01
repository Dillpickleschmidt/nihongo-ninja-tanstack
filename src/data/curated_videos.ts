export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1"

export interface CuratedVideo {
  videoId: string
  title: string
  jlptLevel: JlptLevel
  duration: number // seconds
}

export const FEATURED_VIDEO_IDS = [
  "pXh1Mc5LonQ",
  "drT61-bRMNk",
  "JBeEpW8l-Mg",
  "lKvMbqpQAw4",
  "5csq1MlSspA",
  "uAnaXOpqESA",
]

// JLPT levels are placeholder assignments — edit as needed
export const CURATED_VIDEOS: CuratedVideo[] = [
  { videoId: "IJEn-9nAFQE", title: "０から始める日本語 日常会話！Basic conversation in JAPANESE", jlptLevel: "N5", duration: 1950 },
  { videoId: "C3oPjuudXas", title: "Japanese Listening Practice | Supermarket and Christmas in Japan", jlptLevel: "N4", duration: 1082 },
  { videoId: "K_Qa95xLmeA", title: "What - Japanese Conversation for Beginners なに食べる？", jlptLevel: "N5", duration: 144 },
  { videoId: "rUA0Ll5lbAs", title: "０から始める日本語会話！SUPER EASY CONVERSATION!!", jlptLevel: "N5", duration: 1322 },
  { videoId: "7XKDgSyu2yk", title: "Let's learn color names in Japanese!!", jlptLevel: "N5", duration: 282 },
  { videoId: "nmmj3N3RnqY", title: "Comprehensible Japanese Beginner - Emotion 気持ち", jlptLevel: "N5", duration: 402 },
  { videoId: "JFjoG2tOUcg", title: "How much can you understand? Natural Japanese conversation", jlptLevel: "N3", duration: 820 },
  { videoId: "qBClLIT_aLU", title: "I Can Speaking Japanese", jlptLevel: "N3", duration: 68 },
  { videoId: "ZATif_EO2Ao", title: "かんたん日本語会話【んです】EASY JAPANESE CONVERSATION", jlptLevel: "N4", duration: 844 },
  { videoId: "0GgbLxHg-n0", title: "まだ間違えてる？『ある』と『いる』の超簡単ルール", jlptLevel: "N4", duration: 523 },
  { videoId: "iwXT0U7ESys", title: "Japanese Listening Practice | Casual Japanese Conversation at an Izakaya", jlptLevel: "N3", duration: 511 },
  { videoId: "scLWToOqXzA", title: "Let's Learn Japanese with Minecraft! #1", jlptLevel: "N4", duration: 3603 },
  { videoId: "Q_io4G_EHMA", title: "The Ultimate Guide to Using Keigo (Polite Speech) in Japanese", jlptLevel: "N2", duration: 1202 },
  { videoId: "5csq1MlSspA", title: "Learn Real Japanese from This Funny Girl! - 1 Hour VRChat Immersion", jlptLevel: "N3", duration: 3647 },
  { videoId: "5xP2TQZb0jM", title: "ACNH SAKURA town - Start of the healing Japanese-style island", jlptLevel: "N3", duration: 1112 },
  { videoId: "pXh1Mc5LonQ", title: "Buying a new Macbook Pro at ヨドバシカメラ | Japanese immersion practice", jlptLevel: "N3", duration: 982 },
  { videoId: "TlNzOvJ_wi4", title: "VRChat Polyglot RIZZES natives in VRChat!", jlptLevel: "N2", duration: 769 },
  { videoId: "drT61-bRMNk", title: "JAPAN UNFILTERED - THOUGHTS ON FOREIGNERS", jlptLevel: "N2", duration: 696 },
  { videoId: "NRGt2LahmQg", title: "Understand the 'end,' and you'll understand Japanese. | Japanese Podcast", jlptLevel: "N2", duration: 932 },
  { videoId: "uAnaXOpqESA", title: "日本語ネイティブの話し方/Why does your Japanese sound unnatural?", jlptLevel: "N2", duration: 877 },
  { videoId: "lKvMbqpQAw4", title: "every shoujo manga ever", jlptLevel: "N1", duration: 106 },
  { videoId: "xLWAvqzen_c", title: "アニメで日本語は勉強できるのか/How to Learn Japanese with Anime?", jlptLevel: "N2", duration: 1033 },
  { videoId: "8yEZmofGxwI", title: "Beginner Japanese Drama: How to Use あります／います (JLPT N5-N4)", jlptLevel: "N5", duration: 1457 },
  { videoId: "JBeEpW8l-Mg", title: "Z会グループ x loundraw x FLAT STUDIO 受験生応援ムービー『ふたり分の証明』", jlptLevel: "N1", duration: 293 },
]

export const JLPT_LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"]

export const JLPT_COLORS: Record<JlptLevel, string> = {
  N5: "bg-emerald-500/20 text-emerald-400",
  N4: "bg-sky-500/20 text-sky-400",
  N3: "bg-amber-500/20 text-amber-400",
  N2: "bg-orange-500/20 text-orange-400",
  N1: "bg-red-500/20 text-red-400",
}
