import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Who is the English teacher?",
    answers: [
      {
        segments: [
          { text: "誰[だれ]が", blank: true },
          { text: "英語[えいご]の 先生[せんせい]ですか" },
        ],
        notes:
          "Using が to identify which specific person among the teachers is the English teacher",
      },
      {
        segments: [
          { text: "英語[えいご]の 先生[せんせい]は" },
          { text: "誰[だれ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Using は to ask about the English teacher in general",
      },
    ],
  },
  {
    english: "Whose umbrella is over there?",
    answers: [
      {
        segments: [
          { text: "あれは" },
          { text: "誰[だれ]の 傘[かさ]", blank: true },
          { text: "ですか" },
        ],
        notes: "あれ as subject — \"that one over there is whose umbrella?\"",
      },
      {
        segments: [
          { text: "あれ、" },
          { text: "誰[だれ]の 傘[かさ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "あの 傘[かさ]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "あの + 傘 as topic — \"that umbrella over there, whose is it?\"",
      },
      {
        segments: [
          { text: "あそこの 傘[かさ]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "あそこの 傘は — \"the umbrella over there, whose is it?\" using location あそこ",
      },
      {
        segments: [
          { text: "誰[だれ]の 傘[かさ]", blank: true },
          { text: "があそこですか" },
        ],
        notes: "Flipped - grammatically valid but usually less natural",
      },
    ],
  },
  {
    english: "Whose English dictionary is this?",
    hint: "Looking at a dictionary on the desk in front of you",
    answers: [
      {
        segments: [
          { text: "誰[だれ]の", blank: true },
          { text: "英語[えいご]の 辞書[じしょ]ですか" },
        ],
        notes: "Shorter variant",
      },
      {
        segments: [
          { text: "これは" },
          { text: "誰[だれ]の", blank: true },
          { text: "英語[えいご]の 辞書[じしょ]ですか" },
        ],
        notes: "Standard variant",
      },
      {
        segments: [
          { text: "これ、" },
          { text: "誰[だれ]の", blank: true },
          { text: "英語[えいご]の 辞書[じしょ]ですか" },
        ],
        notes: "Standard but with 、instead of は"
      },
      {
        segments: [
          { text: "この 英語[えいご]の 辞書[じしょ]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "この variant",
      },
      {
        segments: [
          { text: "誰[だれ]の 英語[えいご]の 辞書[じしょ]", blank: true },
          { text: "がこれですか" },
        ],
        notes: "Flipped - grammatically valid but usually less natural",
      },
      {
        segments: [
          { text: "これは" },
          { text: "誰[だれ]の", blank: true },
          { text: "英語[えいご]辞書[じしょ]ですか" },
        ],
        notes: "Dropped a の: Spelled out",
      },
      {
        segments: [
          { text: "これ、" },
          { text: "誰[だれ]の", blank: true },
          { text: "英語[えいご]辞書[じしょ]ですか" },
        ],
        notes: "Dropped a の: 、instead of は"
      },
      {
        segments: [
          { text: "誰[だれ]の", blank: true },
          { text: "英語[えいご]辞書[じしょ]ですか" },
        ],
        notes: "Dropped a の: Also shorter variant",
      },
      {
        segments: [
          { text: "誰[だれ]の 英語[えいご]辞書[じしょ]", blank: true },
          { text: "がこれですか" },
        ],
        notes: "Dropped a の: Flipped - grammatically valid but usually less natural",
      },
    ],
  },
  {
    english: "Whose bag is this?",
    hint: "Looking at a bag on a chair",
    answers: [
      {
        segments: [{ text: "だれの", blank: true }, { text: "鞄[かばん]ですか" }],
        notes: "Shorter, natural sounding",
      },
      {
        segments: [
          { text: "これは" },
          { text: "誰[だれ]の", blank: true },
          { text: "鞄[かばん]ですか" },
        ],
        notes: "Longer, less natural sounding",
      },
      {
        segments: [
          { text: "これ、" },
          { text: "誰[だれ]の", blank: true },
          { text: "鞄[かばん]ですか" },
        ],
        notes: "、instead of は"
      },
      {
        segments: [
          { text: "誰[だれ]の鞄[かばん]", blank: true },
          { text: "がこれですか" },
        ],
        notes: "Flipped & verbose - grammatically valid but usually less natural",
      },
    ],
  },
  {
    english: "Who is a first-year student?",
    hint: "In a classroom with multiple students",
    answers: [
      {
        segments: [
          { text: "誰[だれ]が", blank: true },
          { text: "一年生[いちねんせい]ですか" },
        ],
        notes: "Using が to identify a specific person",
      },
    ],
  },
  {
    english: "Whose wallet is this?",
    hint: "Found a wallet in the classroom",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "誰[だれ]の", blank: true },
          { text: "財布[さいふ]ですか" },
        ],
        notes: "Longer, less natural sounding",
      },
      {
        segments: [{ text: "誰[だれ]の", blank: true }, { text: "財布[さいふ]ですか" }],
        notes: "Shorter, natural sounding",
      },
      {
        segments: [
          { text: "誰[だれ]の財布[さいふ]", blank: true },
          { text: "がこれですか" },
        ],
        notes: "Flipped - grammatically valid but usually less natural",
      },
    ],
  },
  {
    english: "Whose notebook is on that desk over there?",
    answers: [
      {
        segments: [
          { text: "あの机[つくえ]のノートは" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "だれの (whose) without repeating ノート — natural Japanese",
      },
      {
        segments: [
          { text: "あの机[つくえ]のノートは" },
          { text: "誰[だれ]の ノート", blank: true },
          { text: "ですか" },
        ],
        notes: "Verbose but grammatical: あの机のノートは...whose notebook is it, full noun at end",
      },
      {
        segments: [
          { text: "あそこの 机[つくえ]のノートは" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "Using あそこの机 instead of あの机 — あそこ (over there) + の to modify 机",
      },
      {
        segments: [
          { text: "あそこの 机[つくえ]の ノートは" },
          { text: "誰[だれ]のノート", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Verbose but grammatical: あそこの机, with full noun repeated at end",
      },
    ],
  },
  {
    english: "Who is American?",
    hint: "Looking at a group of people",
    answers: [
      {
        segments: [
          { text: "アメリカ人[じん]は" },
          { text: "誰[だれ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Using は to ask the question in general",
      },
      {
        segments: [
          { text: "誰[だれ]が", blank: true },
          { text: "アメリカ人[じん]ですか" },
        ],
        notes: "Using が to identify a specific person (could be a bit direct/strong sounding though)",
      },
    ],
  },
  {
    english: "Who is an office worker?",
    hint: "Looking at a group of people",
    answers: [
      {
        segments: [
          { text: "会社員[かいしゃいん]は" },
          { text: "誰[だれ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Using は to ask about the office worker's identity in general",
      },
      {
        segments: [
          { text: "誰[だれ]が", blank: true },
          { text: "会社員[かいしゃいん]ですか" },
        ],
        notes: "Using が to identify a specific person",
      },
    ],
  },
  {
    english: "Whose bicycle is that over there?",
    answers: [
      {
        segments: [
          { text: "あの 自転車[じてんしゃ]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "あの + noun as topic, だれの as predicate (bicycle noun dropped)",
      },
      {
        segments: [
          { text: "あの 自転車[じてんしゃ]は" },
          { text: "誰[だれ]の 自転車[じてんしゃ]", blank: true },
          { text: "ですか" },
        ],
        notes: "あの + noun as topic, full explicit predicate だれの自転車",
      },
      {
        segments: [
          { text: "あそこの 自転車[じてんしゃ]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "あそこの + noun as topic, だれの as predicate",
      },
      {
        segments: [
          { text: "あそこの 自転車[じてんしゃ]は" },
          { text: "誰[だれ]の 自転車[じてんしゃ]", blank: true },
          { text: "ですか" },
        ],
        notes: "あそこの + noun as topic, full explicit predicate だれの自転車",
      },
      {
        segments: [
          { text: "あれは" },
          { text: "誰[だれ]の 自転車[じてんしゃ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Basic あれは pattern, blank on だれの自転車",
      },
      {
        segments: [
          { text: "あれ、" },
          { text: "誰[だれ]の 自転車[じてんしゃ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "誰[だれ]の 自転車[じてんしゃ]", blank: true },
          { text: "があそこですか" },
        ],
        notes: "Flipped - grammatically valid but usually less natural",
      },
    ],
  },
  {
    english: "Whose hat is that?",
    answers: [
      {
        segments: [
          { text: "それは" },
          { text: "誰[だれ]の", blank: true },
          { text: "帽子[ぼうし]ですか" },
        ],
        notes: "Standard: それ (that, near listener) + だれの + 帽子",
      },
      {
        segments: [
          { text: "あれは" },
          { text: "誰[だれ]の 帽子[ぼうし]", blank: true },
          { text: "ですか" },
        ],
        notes: "Using あれ (that over there) instead of それ",
      },
      {
        segments: [
          { text: "その 帽子[ぼうし]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "Using その帽子は as the topic, だれの as predicate (whose is that hat?)",
      },
      {
        segments: [
          { text: "あの 帽子[ぼうし]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "Using あの帽子は as topic (that hat over there)",
      },
      {
        segments: [
          { text: "その 帽子[ぼうし]は" },
          { text: "誰[だれ]の", blank: true },
          { text: "帽子[ぼうし]ですか" },
        ],
        notes: "Full form: その帽子は だれの帽子ですか — redundant but mirrors earlier sentence patterns (e.g. sentence 9)",
      },
      {
        segments: [
          { text: "あの 帽子[ぼうし]は" },
          { text: "誰[だれ]の 帽子[ぼうし]", blank: true },
          { text: "ですか" },
        ],
        notes: "Full form with あの帽子は (over there)",
      },
      {
        segments: [
          { text: "それは" },
          { text: "誰[だれ]の 帽子[ぼうし]", blank: true },
          { text: "ですか" },
        ],
        notes: "それは + だれの帽子 in the blank (full noun phrase as blank)",
      },
      {
        segments: [
          { text: "あれは" },
          { text: "誰[だれ]の 帽子[ぼうし]", blank: true },
          { text: "ですか" },
        ],
        notes: "あれは + だれの帽子 in the blank",
      },
      {
        segments: [
          { text: "それ、" },
          { text: "誰[だれ]の 帽子[ぼうし]", blank: true },
          { text: "ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "あれ、" },
          { text: "誰[だれ]の 帽子[ぼうし]", blank: true },
          { text: "ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "誰[だれ]の 帽子[ぼうし]", blank: true },
          { text: "があれですか" },
        ],
        notes: "Flipped - grammatically valid but usually less natural",
      },
      {
        segments: [
          { text: "誰[だれ]の 帽子[ぼうし]", blank: true },
          { text: "がそれですか" },
        ],
        notes: "Flipped - grammatically valid but usually less natural",
      },
    ],
  },
  {
    english: "Who is a lawyer?",
    hint: "Discussing a group of professionals",
    answers: [
      {
        segments: [
          { text: "誰[だれ]が", blank: true },
          { text: "弁護士[べんごし]ですか" },
        ],
        notes: "Using が to identify a specific person",
      },
      {
        segments: [
          { text: "弁護士[べんごし]は" },
          { text: "誰[だれ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Using は to ask the question in general",
      },
    ],
  },
  {
    english: "Whose computer is that?",
    answers: [
      {
        segments: [
          { text: "それは" },
          { text: "誰[だれ]のコンピューター", blank: true },
          { text: "ですか" },
        ],
        notes: "Standard: それは + だれの + noun. \"That one\" near the listener.",
      },
      {
        segments: [
          { text: "あれは" },
          { text: "誰[だれ]のコンピューター", blank: true },
          { text: "ですか" },
        ],
        notes: "Using あれは — \"that one over there\"",
      },
      {
        segments: [
          { text: "そのコンピューターは" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "Using その + noun as subject, asking だれの (dropping the repeated noun)",
      },
      {
        segments: [
          { text: "あのコンピューターは" },
          { text: "誰[だれ]の", blank: true },
          { text: "ですか" },
        ],
        notes: "Using あの + noun as subject, asking だれの (dropping the repeated noun)",
      },
      {
        segments: [
          { text: "それ、" },
          { text: "誰[だれ]のコンピューター", blank: true },
          { text: "ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "あれ、" },
          { text: "誰[だれ]のコンピューター", blank: true },
          { text: "ですか" },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "そのコンピューターは" },
          { text: "誰[だれ]のコンピューター", blank: true },
          { text: "ですか" },
        ],
        notes: "Verbose but grammatical: Using その + noun as subject, with full noun repeated in the question",
      },
      {
        segments: [
          { text: "あのコンピューターは", blank: true },
          { text: "誰[だれ]のコンピューターですか" },
        ],
        notes: "Verbose but grammatical: Using あの + noun as subject, with full noun repeated in the question",
      },
      {
        segments: [
          { text: "誰[だれ]のコンピューター", blank: true },
          { text: "ですか" },
        ],
        notes: "Flipped - pretty natural since it's short",
      },
      {
        segments: [
          { text: "誰[だれ]のコンピューター", blank: true },
          { text: "がそれですか" },
        ],
        notes: "Flipped & verbose - grammatically valid but usually less natural",
      },
      {
        segments: [
          { text: "誰[だれ]のコンピューター", blank: true },
          { text: "があれですか" },
        ],
        notes: "Flipped & verbose - grammatically valid but usually less natural",
      },
    ],
  },
]
