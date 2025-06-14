// Generated WaniKani types - 2025-06-14T19:33:19.314Z

export interface WaniKaniSubject {
  id: number
  object: string
  data: {
    characters: string
    slug: string
    meaning_mnemonic: string
    reading_mnemonic?: string
    component_subject_ids?: number[]
  }
}

export interface WaniKaniCollection {
  object: string
  data: WaniKaniSubject[]
}
