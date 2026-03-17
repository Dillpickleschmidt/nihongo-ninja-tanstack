import type { StaticModule } from "./static_modules"

export interface ExternalResource extends Omit<StaticModule, "link"> {
  external_url: string
  creator_id: string
  difficulty_rating: "easy" | "medium" | "hard"
}

export function getExternalResourceLink(key: string): string {
  return `/external-resources/${key}`
}

export const external_resources: Record<string, ExternalResource> = {
  // Chapter 0
  "greetings-japanese-super-immersion": {
    title: "Japanese Greetings - Super Immersion Video",
    external_url: "youtube.com/watch?v=po_6rnpP5mI",
    creator_id: "japanese_super_immersion",
    difficulty_rating: "easy",
    module_type: "video",
  },
  "common-expressions-japanese-super-immersion": {
    title: "Common Japanese Expressions - Super Immersion Video",
    external_url: "youtube.com/watch?v=4PBR4w47wsQ",
    creator_id: "japanese_super_immersion",
    difficulty_rating: "easy",
    module_type: "video",
  },

  // Chapter 1
  "kikusasaizu-1-1": {
    title: "Kikusasaizu Video - L1-1",
    external_url: "https://h5p.cee.sfu.ca/h5p/embed/2319",
    creator_id: "kikusasaizu",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "japanese-super-immersion-nice-to-meet-you": {
    title: "Nice to meet you - Listening Practice",
    external_url: "youtube.com/watch?v=XBKeW87xsKc",
    creator_id: "japanese_super_immersion",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "my-kikitori-conversation-1": {
    title: "MyKikitori - Conversation 1",
    external_url: "mykikitori.com/lesson-1",
    creator_id: "mykikitori",
    module_type: "listening-material",
    difficulty_rating: "easy",
  },
  "my-kikitori-conversation-2": {
    title: "MyKikitori - Conversation 2",
    external_url: "mykikitori.com/lesson-1",
    creator_id: "mykikitori",
    module_type: "listening-material",
    difficulty_rating: "easy",
  },
  "kikusasaizu-1-3": {
    title: "Kikusasaizu Video - L1-3",
    external_url: "youtube.com/watch?v=VKETvr5uXsk",
    creator_id: "kikusasaizu",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "my-kikitori-conversation-3": {
    title: "MyKikitori - Conversation 3",
    external_url: "mykikitori.com/lesson-1",
    creator_id: "mykikitori",
    module_type: "listening-material",
    difficulty_rating: "easy",
  },

  // Chapter 2
  "kikusasaizu-2-1": {
    title: "Kikusasaizu Video - L2-1",
    external_url: "https://h5p.cee.sfu.ca/h5p/embed/2358",
    creator_id: "kikusasaizu",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "kikusasaizu-2-2": {
    title: "Kikusasaizu Video - L2-2",
    external_url: "youtube.com/watch?v=EdkEWPldx28",
    creator_id: "kikusasaizu",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "kudasai-vs-onegaishimasu": {
    title: "ください vs お願いします",
    external_url: "youtube.com/watch?v=sVCeecJw8GM",
    creator_id: "nihongodekita",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "my-kikitori-at-a-cafe": {
    title: "MyKikitori - At a Café",
    external_url: "mykikitori.com/lesson-2",
    creator_id: "mykikitori",
    module_type: "listening-material",
    difficulty_rating: "easy",
  },
  "unlearning-japanese": {
    title: "Unlearning Japanese - Real Real Japan #01",
    external_url: "youtube.com/watch?v=BH9n_fNA7Z8",
    creator_id: "realrealjapan",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "my-kikitori-at-a-store": {
    title: "MyKikitori - At a Store",
    external_url: "mykikitori.com/lesson-2",
    creator_id: "mykikitori",
    module_type: "listening-material",
    difficulty_rating: "easy",
  },

  // Chapter 3
  "your-japanese-voice": {
    title: "Your Japanese Voice",
    external_url: "youtube.com/watch?v=Phr8z5X5Sf4",
    creator_id: "dogen",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "kikusasaizu-3-2": {
    title: "Kikusasaizu Video - L3-2",
    external_url: "https://h5p.cee.sfu.ca/h5p/embed/2327",
    creator_id: "kikusasaizu",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "kikusasaizu-3-3": {
    title: "Kikusasaizu Video - L3-3",
    external_url: "https://h5p.cee.sfu.ca/h5p/embed/2332",
    creator_id: "kikusasaizu",
    module_type: "video",
    difficulty_rating: "easy",
  },
  aizuchi: {
    title: "Aizuchi: Japanese Noises",
    external_url: "youtube.com/watch?v=r0io_xgmcSs",
    creator_id: "kaname_naito",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "my-kikitori-do-you-want-to-go-to-tokyo": {
    title: "MyKikitori - Do You Want to Go to Tokyo?",
    external_url: "mykikitori.com/lesson-3",
    creator_id: "mykikitori",
    module_type: "listening-material",
    difficulty_rating: "easy",
  },
  "kikusasaizu-3-1": {
    title: "Kikusasaizu Video - L3-1",
    external_url: "https://h5p.cee.sfu.ca/h5p/embed/1978",
    creator_id: "kikusasaizu",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "my-kikitori-campus-interview-1": {
    title: "MyKikitori - Campus Interview #1",
    external_url: "mykikitori.com/lesson-3",
    creator_id: "mykikitori",
    module_type: "listening-material",
    difficulty_rating: "easy",
  },
  "my-kikitori-campus-interview-2": {
    title: "MyKikitori - Campus Interview #2",
    external_url: "mykikitori.com/lesson-3",
    creator_id: "mykikitori",
    module_type: "listening-material",
    difficulty_rating: "easy",
  },
  "long-form-conversation-immersion": {
    title: "Long Form Conversation Immersion",
    external_url: "youtube.com/watch?v=IJEn-9nAFQE",
    creator_id: "japanese_super_immersion",
    module_type: "video",
    difficulty_rating: "medium",
  },

  // Chapter 4
  "saying-no-naturally": {
    title: 'Don\'t use いいえ! - Saying "No" Naturally',
    external_url: "youtube.com/watch?v=J9JdP6pA5LY",
    creator_id: "that_japanese_man_yuta",
    module_type: "video",
    difficulty_rating: "easy",
  },
  "immersion-with-yuta": {
    title: "Immersion With Yuta - Listening Practice",
    external_url: "youtube.com/watch?v=PFJZdvrghgI",
    creator_id: "nihongo_learning",
    module_type: "video",
    difficulty_rating: "medium",
  },
  "beginner-guide-to-konbini": {
    title: "Beginner Guide To コンビニ",
    external_url: "youtube.com/watch?v=bPP3-GyFpYs",
    creator_id: "kaname_naito",
    module_type: "video",
    difficulty_rating: "easy",
  },

  // Chapter 5
  sports: {
    title: "Sports - Listening Practice",
    external_url: "youtube.com/watch?v=MYuNYVhz3Gs",
    creator_id: "nihongo_learning",
    module_type: "video",
    difficulty_rating: "easy",
  },

  // Chapter 6
  "why-your-speaking-sucks": {
    title: "Why Your Speaking Sucks",
    external_url: "youtube.com/watch?v=xLqnAI6mqDo",
    creator_id: "tokini_andy",
    module_type: "video",
    difficulty_rating: "medium",
  },

  // Chapter 8
  "how-verbs-work": {
    title: "How Verbs Work",
    external_url: "youtube.com/watch?v=cGA6Tj9_lSg",
    creator_id: "jozu_juls",
    module_type: "video",
    difficulty_rating: "medium",
  },

  // Chapter 9
  colors: {
    title: "Colors",
    external_url: "youtube.com/watch?v=7XKDgSyu2yk",
    creator_id: "nihongo_learning",
    module_type: "video",
    difficulty_rating: "easy",
  },

  // Chapter 10
  "comparing-sizes": {
    title: "Comparing Sizes",
    external_url: "youtube.com/watch?v=vD3_BO4KAdM",
    creator_id: "nihongo_learning",
    module_type: "video",
    difficulty_rating: "medium",
  },
  emotions: {
    title: "Emotions",
    external_url: "youtube.com/watch?v=nmmj3N3RnqY",
    creator_id: "nihongo_learning",
    module_type: "video",
    difficulty_rating: "easy",
  },

  // Chapter 15
  "hobbies-with-yuta": {
    title: "Hobbies With Yuta",
    external_url: "youtube.com/watch?v=p37XUVrHP4E",
    creator_id: "nihongo_learning",
    module_type: "video",
    difficulty_rating: "medium",
  },
}
