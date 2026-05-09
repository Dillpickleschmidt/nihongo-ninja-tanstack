import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Yamada's friend is Japanese.",
    hint: "Yamada = 山田 (やまだ)",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんの友[とも]だち", blank: true },
          { text: "は 日本人[にほんじん]です" },
        ],
      },
    ],
  },
  {
    english: "Is Kobayashi's friend an international student?",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          { text: "小林[こばやし]さんの 友達[ともだち]", blank: true },
          { text: "は 留学生[りゅうがくせい]ですか" },
        ],
        notes: "Standard word order with は topic marker",
      },
      {
        segments: [
          { text: "小林[こばやし]さんの 友達[ともだち]", blank: true },
          { text: "が 留学生[りゅうがくせい]ですか" },
        ],
        notes: "Using が instead of は — emphasises the subject in the question",
      },
      {
        segments: [
          { text: "小林[こばやし]さんの 友[とも]だち", blank: true },
          { text: "は 留学生[りゅうがくせい]ですか" },
        ],
        notes: "Using 友だち (mixed kana spelling) with は",
      },
      {
        segments: [
          { text: "小林[こばやし]さんの", blank: true },
          { text: "友[とも]だちが 留学生[りゅうがくせい]ですか" },
        ],
        notes: "Using 友だち with が",
      },
    ],
  },
  {
    english: "I am a first-year student at a university.",
    hint: "Express \"university first-year student\" as two nouns linked by の",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "大学[だいがく]の 一年生[いちねんせい]", blank: true },
          { text: "です" },
        ],
        notes: "Standard word order: 私は + 大学の一年生 + です",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "大学[だいがく]の 一年生[いちねんせい]", blank: true },
          { text: "です" },
        ],
        notes: "が instead of は — emphasizes the subject (I am the one who is...)",
      },
    ],
  },
  {
    english: "What is Kaede's major?",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんの 専攻[せんこう]", blank: true },
          { text: "は 何[なん]ですか" },
        ],
        notes: "Standard form: の marks possession, は marks topic, なん before ですか",
      },
      {
        segments: [
          { text: "楓[かえで]さんの 専攻[せんこう]", blank: true },
          { text: "が 何[なん]ですか" },
        ],
        notes: "が instead of は for the topic particle — emphasizes the major itself",
      },
      {
        segments: [
          { text: "何[なに]が 楓[かえで]さんの", blank: true },
          { text: "専攻[せんこう]ですか" },
        ],
        notes: "Reversed word order: 何が...ですか — \"What is it that is Kaede's major?\" (not the most natural but could be valid in some situations",
      },
    ],
  },
  {
    english: "What is the doctor's phone number?",
    answers: [
      {
        segments: [
          { text: "医者[いしゃ]の 電話[でんわ] 番号[ばんごう]", blank: true },
          { text: "は 何[なん]ですか" },
        ],
        notes: "Basic variation: 医者 is the blank (Noun A before の), は particle",
      },
      {
        segments: [
          { text: "医者[いしゃ]の 電話[でんわ] 番号[ばんごう]", blank: true },
          { text: "は 何[なん]ですか" },
        ],
        notes: "の phrase as the blank (Noun A の Noun B together), は particle",
      },
      {
        segments: [
          { text: "医者[いしゃ]の 電話[でんわ] 番号[ばんごう]", blank: true },
          { text: "が 何[なん]ですか" },
        ],
        notes: "が instead of は — natural when asking for specific information",
      },
      {
        segments: [
          { text: "医者[いしゃ]", blank: true },
          { text: "の 電話[でんわ] 番号[ばんごて]が 何[なん]ですか" },
        ],
        notes: "が instead of は, 医者 as the blank",
      },
      {
        segments: [
          { text: "医者[いしゃ]の 電話[でんわ]の 番号[ばんごう]", blank: true },
          { text: "は 何[なん]ですか" },
        ],
        notes: "医者の電話の番号 — double の, treating 電話 and 番号 separately; は particle",
      },
      {
        segments: [
          { text: "医者[いしゃ]の 電話[でんわ]の 番号[ばんごう]", blank: true },
          { text: "が 何[なん]ですか" },
        ],
        notes: "医者の電話の番号 with が instead of は",
      },
    ],
  },
  {
    english: "Mizuki's older sister is a lawyer.",
    hint: "Mizuki = 瑞希 (みずき)",
    answers: [
      {
        segments: [
          { text: "瑞希[みずき]さんのお 姉[ねえ]さん", blank: true },
          { text: "は 弁護士[べんごし]です" },
        ],
        notes: "Standard answer: 瑞希さんのお姉さんは弁護士です",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのお 姉[ねえ]さん", blank: true },
          { text: "が 弁護士[べんごし]です" },
        ],
        notes: "が instead of は for the subject particle",
      },
    ],
  },
  {
    english: "My friend is a college student in Korea.",
    hint: "Express \"college student in Korea\" as a noun-の-noun relationship.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 友達[ともだち]は" },
          { text: "韓国[かんこく]の 大学生[だいがくせい]", blank: true },
          { text: "です" },
        ],
        notes: "Standard answer: blank is 韓国の大学生, using の for \"in Korea\" relationship; 友達 kanji form",
      },
      {
        segments: [
          { text: "私[わたし]の 友[とも]だちは" },
          { text: "韓国[かんこく]の 大学生[だいがくせい]", blank: true },
          { text: "です" },
        ],
        notes: "Same structure but with 友だち in hiragana form",
      },
      {
        segments: [
          { text: "私[わたし]の 友達[ともだち]が" },
          { text: "韓国[かんこく]の 大学生[だいがくせい]", blank: true },
          { text: "です" },
        ],
        notes: "Using が instead of は for the subject (友達が); 友達 kanji form",
      },
      {
        segments: [
          { text: "私[わたし]の 友[とも]だちが" },
          { text: "韓国[かんこく]の 大学生[だいがくせい]", blank: true },
          { text: "です" },
        ],
        notes: "Using が instead of は; 友だち hiragana form",
      },
    ],
  },
  {
    english: "Yosuke is a first-year engineering student.",
    hint: "Yosuke = 陽介 (ようすけ)",
    answers: [
      {
        segments: [
          { text: "陽介[ようすけ]さんは" },
          { text: "工学[こうがく]の一年生[いちねんせい]", blank: true },
          { text: "です" },
        ],
        notes: "Basic structure: は topic marker, の connecting 工学 and 一年生",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんが" },
          { text: "工学[こうがく]の一年生[いちねんせい]", blank: true },
          { text: "です" },
        ],
        notes: "Using が instead of は for the subject marker",
      },
    ],
  },
  {
    english: "What is the name of Natsumi's university?",
    hint: "Natsumi = 夏美 (なつみ)",
    answers: [
      {
        segments: [
          { text: "夏美[なつみ]さんの 大学[だいがく]の 名前[なまえ]", blank: true },
          { text: "は 何[なん]ですか" },
        ],
        notes: "Standard word order with は; both の instances are blanked as the grammar being tested",
      },
    ],
  },
  {
    english: "My older brother's friend is a lawyer.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の お 兄[にい]さんの 友達[ともだち]", blank: true },
          { text: "は 弁護士[べんごし]です" },
        ],
        notes: "Standard: 私のお兄さん for \"my older brother\", 友達 for friend",
      },
      {
        segments: [
          { text: "私[わたし]の お 兄[にい]さんの 友だち[ともだち]", blank: true },
          { text: "は 弁護士[べんごし]です" },
        ],
        notes: "Using 友だち (alternate spelling) instead of 友達",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[にい]さんの 友達[ともだち]", blank: true },
          { text: "は 弁護士[べんごし]です" },
        ],
        notes: "Using 兄さん (without お) instead of お兄さん",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[にい]ちゃんの 友達[ともだち]", blank: true },
          { text: "は 弁護士[べんごし]です" },
        ],
        notes: "Using 兄ちゃん (casual/familiar \"big bro\") instead of お兄さん",
      },
    ],
  },
  {
    english: "Is the teacher of Chinese language a graduate student?",
    hint: "Chinese language = 中国語",
    answers: [
      {
        segments: [
          { text: "中国語[ちゅうごくご]の 先生[せんせい]", blank: true },
          { text: "は 大学院生[だいがくいんせい]ですか" },
        ],
      },
    ],
  },
  {
    english: "What is the name of the economics teacher?",
    answers: [
      {
        segments: [
          { text: "経済[けいざい]の 先生[せんせい]の 名前[なまえ]", blank: true },
          { text: "は 何[なん]ですか" },
        ],
      },
    ],
  },
  {
    english: "Kaede's older brother is a high school student.",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんのお 兄[にい]さん", blank: true },
          { text: "は 高校生[こうこうせい]です" },
        ],
        notes: "Standard answer with の as the blank",
      },
      {
        segments: [
          { text: "楓[かえで]さんの 兄[にい]さん", blank: true },
          { text: "は 高校生[こうこうせい]です" },
        ],
        notes: "Using 兄さん instead of お兄さん (less formal, no honorific お prefix)",
      },
      {
        segments: [
          { text: "楓[かえで]さんのお 兄[にい]さん", blank: true },
          { text: "が 高校生[こうこうせい]です" },
        ],
        notes: "Using が instead of は (emphasizing the subject)",
      },
      {
        segments: [
          { text: "楓[かえで]さんの 兄[にい]ちゃん", blank: true },
          { text: "は 高校生[こうこうせい]です" },
        ],
        notes: "Using 兄ちゃん (casual/affectionate term for older brother)",
      },
    ],
  },
  {
    english: "Is Fujii's mother a nurse?",
    hint: "Fujii = 藤井 (ふじい)",
    answers: [
      {
        segments: [
          { text: "藤井[ふじい]さんのお 母[かあ]さん", blank: true },
          { text: "は 看護師[かんごし]ですか" },
        ],
      },
    ],
  },
  {
    english: "Mori's friend's major is biology.",
    hint: "Mori = 森 (もり)",
    answers: [
      {
        segments: [
          { text: "森[もり]さんの 友達[ともだち]の 専攻[せんこう]", blank: true },
          { text: "は 生物学[せいぶつがく]です" },
        ],
        notes: "Standard: の chain as the blank — \"Mori's friend's [major is biology]\"",
      },
      {
        segments: [
          { text: "森[もり]さんの 友だちの 専攻[せんこう]", blank: true },
          { text: "は 生物学[せいぶつがく]です" },
        ],
        notes: "Alternative spelling: 友だち instead of 友達",
      },
      {
        segments: [
          { text: "森[もり]さんの 友達[ともだち]の 専攻[せんこう]", blank: true },
          { text: "が 生物学[せいぶつがく]です" },
        ],
        notes: "Using が instead of は for the subject particle",
      },
      {
        segments: [
          { text: "森[もり]さんの 友だちの 専攻[せんこう]", blank: true },
          { text: "が 生物学[せいぶつがく]です" },
        ],
        notes: "友だち spelling + が particle",
      },
    ],
  },
  {
    english: "Mizuki's younger brother is an office worker.",
    hint: "Mizuki = 瑞希 (みずき)",
    answers: [
      {
        segments: [
          { text: "瑞希[みずき]さんの 弟[おとうと]さん", blank: true },
          { text: "は 会社員[かいしゃいん]です" },
        ],
        notes: "Standard variation using 弟さん (polite reference to someone else's younger brother)",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんの 弟[おとうと]さん", blank: true },
          { text: "は 会社員[かいしゃいん]です" },
        ],
        notes: "Blank on the の portion (瑞希さんの)",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんの弟[おとうと]さん", blank: true },
          { text: "は 会社員[かいしゃいん]です" },
        ],
        notes: "Blank on the topic (瑞希さんの弟さんは)",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんの 弟[おとうと]さん", blank: true },
          { text: "が 会社員[かいしゃいん]です" },
        ],
        notes: "Using が instead of は as the subject particle",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんの 弟[おとうと]", blank: true },
          { text: "は 会社員[かいしゃいん]です" },
        ],
        notes: "Using plain 弟 without さん — if you're more familiar with the person",
      },
    ],
  },
  {
    english: "What is the name of the biology teacher?",
    hint: "Use の to connect both \"biology\" and \"teacher's name\"",
    answers: [
      {
        segments: [
          { text: "生物学[せいぶつがく]の 先生[せんせい]の 名前[なまえ]", blank: true },
          { text: "は 何[なん]ですか" },
        ],
        notes: "Standard form: chained の connecting biology → teacher → name",
      },
    ],
  },
  {
    english: "What is Fujii's phone number?",
    hint: "Fujii = 藤井 (ふじい)",
    answers: [
      {
        segments: [
          { text: "藤井[ふじい]さんの 電話[でんわ] 番号[ばんごう]", blank: true },
          { text: "は 何[なん]ですか" }
        ],
        notes: "Standard: blank on 藤井さん, の connects possession to 電話番号",
      },
    ],
  },
  {
    english: "What time is the Chinese class?",
    hint: "class = クラス",
    answers: [
      {
        segments: [
          { text: "中国語[ちゅうごくご]のクラス", blank: true },
          { text: "は 何時[なんじ]ですか" },
        ],
        notes: "Standard: の connects 中国語 and クラス; 何時 asks the time",
      },
    ],
  },
  {
    english: "Natsumi's younger sister is an international student in India.",
    hint: "Natsumi = 夏美 (なつみ)",
    answers: [
      {
        segments: [
          { text: "夏美[なつみ]さんの 妹[いもうと]さん", blank: true },
          { text: "はインドの 留学生[りゅうがくせい]です" },
        ],
        notes: "Standard answer: 夏美さんの for possession, インドの留学生 for \"international student in India\"",
      },
      {
        segments: [
          { text: "夏美[なつみ]さんの 妹[いもうと]", blank: true },
          { text: "はインドの 留学生[りゅうがくせい]です" },
        ],
        notes: "Without さん after 妹 — if you're more familiar with the person",
      },
    ],
  },
];
