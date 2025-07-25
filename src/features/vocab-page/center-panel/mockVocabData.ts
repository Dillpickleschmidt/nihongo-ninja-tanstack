import type { VocabularyItem } from '@/data/types'

export const mockVocabularyData: VocabularyItem[] = [
  {
    word: "人",
    furigana: "人[ひと]",
    english: ["person", "human"],
    chapter: 1,
    part_of_speech: "Ichidan verb",
    mnemonics: ["A person standing with arms and legs spread"],
    info: ["Common counter: 人 (nin/jin)", "Used in many compound words"],
    example_sentences: [
      {
        japanese: ["この", { t: "人[ひと]" }, "は先生です。"],
        english: ["This", { t: "person" }, "is a teacher."]
      },
      {
        japanese: [{ t: "人[ひと]" }, "が多いです。"],
        english: ["There are many", { t: "people" }, "."]
      }
    ],
    particles: [{ label: "Subject", particle: "は" }, { particle: "が" }]
  },
  {
    word: "食べる",
    furigana: "食[た]べる",
    english: ["to eat", "to consume"],
    chapter: 1,
    part_of_speech: "Ichidan verb",
    mnemonics: ["Think of 'taberu' like 'table' - you eat at a table"],
    info: ["Ichidan verb - conjugates regularly", "Very common daily verb"],
    example_sentences: [
      {
        japanese: ["朝ご飯を", { t: "食[た]べる" }, "。"],
        english: ["I", { t: "eat" }, "breakfast."]
      }
    ],
    particles: [{ label: "Object", particle: "を" }]
  },
  {
    word: "学校",
    furigana: "学校[がっこう]",
    english: ["school"],
    chapter: 1,
    mnemonics: ["学 (learning) + 校 (school building) = school"],
    info: ["Formal word for school", "Used for all levels of education"],
    example_sentences: [
      {
        japanese: [{ t: "学校[がっこう]" }, "に行きます。"],
        english: ["I go to", { t: "school" }, "."]
      }
    ],
    particles: [{ label: "Direction", particle: "に" }]
  },
  {
    word: "美しい",
    furigana: "美[うつく]しい",
    english: ["beautiful", "lovely"],
    chapter: 2,
    part_of_speech: "I-adjective",
    mnemonics: ["Beauty that makes you say 'ooh!'"],
    info: ["I-adjective - conjugates with い", "More formal than きれい", "Often used in written Japanese", "Can describe people, nature, or abstract concepts"],
    example_sentences: [
      {
        japanese: ["とても", { t: "美[うつく]しい" }, "花です。"],
        english: ["It's a very", { t: "beautiful" }, "flower."]
      }
    ]
  },
  {
    word: "友達",
    furigana: "友達[ともだち]",
    english: ["friend"],
    chapter: 1,
    mnemonics: ["友 (friend) + 達 (plural marker) = friends"],
    info: ["Casual word for friend", "Can be singular or plural", "More intimate than 知り合い (acquaintance)", "Used among peers and younger people"],
    example_sentences: [
      {
        japanese: [{ t: "友達[ともだち]" }, "と映画を見ます。"],
        english: ["I watch movies with my", { t: "friend" }, "."]
      }
    ],
    particles: [{ label: "With", particle: "と" }]
  }
]