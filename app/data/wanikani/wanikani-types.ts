// Generated WaniKani types - 2025-06-17T19:38:16.339Z

export interface WaniKaniMeaning {
  meaning: string;
  primary: boolean;
}

export interface WaniKaniSubject {
  id: number;
  object: string;
  data: {
    characters: string;
    meanings: WaniKaniMeaning[];
    slug: string;
    meaning_mnemonic: string;
    reading_mnemonic?: string;
    component_subject_ids?: number[];
  };
}

export interface WaniKaniCollection {
  object: string;
  data: WaniKaniSubject[];
}
