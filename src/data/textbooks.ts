// Type for built-in textbook IDs (internal use only)
export type TextbookIDEnum = "genki_1" | "genki_2"

export interface Textbook {
  id: TextbookIDEnum
  name: string
  short_name: string
  publisher: string
  level: string
  cover_image_url: string
}

export const textbooks: Record<TextbookIDEnum, Textbook> = {
  genki_1: {
    id: "genki_1",
    name: "Genki I: An Integrated Course in Elementary Japanese (3rd Edition)",
    short_name: "Genki I",
    publisher: "The Japan Times",
    level: "N5",
    cover_image_url: "/images/textbooks/genki_1_cover.jpg",
  },

  genki_2: {
    id: "genki_2",
    name: "Genki II: An Integrated Course in Intermediate Japanese (3rd Edition)",
    short_name: "Genki II",
    publisher: "The Japan Times",
    level: "N4",
    cover_image_url: "/images/textbooks/genki_2_cover.jpg",
  },
}
