import type { TextbookCollection } from "./types"

export const textbooks: TextbookCollection = {
  getting_started: {
    id: "getting_started",
    name: "Getting Started with Nihongo Ninja",
    short_name: "Getting Started",
    publisher: "Nihongo Ninja",
    level: "N5",
    cover_image_url: "/images/textbooks/getting_started_cover.jpg",
    chapterSlugs: [
      "n5-introduction",
      "n4-introduction",
      "n3-introduction",
      "n2-introduction",
      "n1-introduction",
    ],
  },

  genki_1: {
    id: "genki_1",
    name: "Genki I: An Integrated Course in Elementary Japanese (3rd Edition)",
    short_name: "Genki I",
    publisher: "The Japan Times",
    level: "N5",
    cover_image_url: "/images/textbooks/genki_1_cover.jpg",
    chapterSlugs: [
      "chapter-0",
      "chapter-1",
      "chapter-2",
      "chapter-3",
      "chapter-4",
      "chapter-5",
      "chapter-6",
      "chapter-7",
      "chapter-8",
      "chapter-9",
      "chapter-10",
      "chapter-11",
      "chapter-12",
    ],
  },

  genki_2: {
    id: "genki_2",
    name: "Genki II: An Integrated Course in Intermediate Japanese (3rd Edition)",
    short_name: "Genki II",
    publisher: "The Japan Times",
    level: "N4",
    cover_image_url: "/images/textbooks/genki_2_cover.jpg",
    chapterSlugs: [
      "chapter-13",
      "chapter-14",
      "chapter-15",
      "chapter-16",
      "chapter-17",
      "chapter-18",
      "chapter-19",
      "chapter-20",
    ],
  },
}
