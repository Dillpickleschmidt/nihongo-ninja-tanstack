import type { Question } from "../types"

export const questions: Question[] = [
  // ─── てください requests ───

  {
    english: "Please sit down.",
    answers: [
      {
        segments: [{ text: "座[すわ]って", blank: true }, { text: "ください" }],
        notes: "Te-form + ください for a polite request",
      },
      {
        segments: [
          { text: "どうぞ、" },
          { text: "座[すわ]って", blank: true },
          { text: "ください" },
        ],
        notes: "どうぞ + te-form + ください for a welcoming request",
      },
    ],
  },
  {
    english: "Please tell me your name.",
    answers: [
      {
        segments: [
          { text: "名前[なまえ]を" },
          { text: "教[おし]えて", blank: true },
          { text: "ください" },
        ],
        notes: "Core answer: 教える in te-form + ください",
      },
      {
        segments: [
          { text: "お 名前[なまえ]を" },
          { text: "教[おし]えて", blank: true },
          { text: "ください" },
        ],
        notes: "Using honorific お名前 — slightly more polite phrasing",
      },
      {
        segments: [
          { text: "名前[なまえ]を 私[わたし]に" },
          { text: "教[おし]えて", blank: true },
          { text: "ください" },
        ],
        notes: "Explicitly including 私に (tell me) — に marks the recipient",
      },
      {
        segments: [
          { text: "私[わたし]に 名前[なまえ]を" },
          { text: "教[おし]えて", blank: true },
          { text: "ください" },
        ],
        notes: "私に moved to front — alternate word order",
      },
      {
        segments: [
          { text: "名前[なまえ]を" },
          { text: "言[い]って", blank: true },
          { text: "ください" },
        ],
        notes: "Using 言う (to say) instead of 教える",
      },
    ],
  },
  {
    english: "Please come to the park.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]に" },
          { text: "来[き]て", blank: true },
          { text: "ください" },
        ],
        notes: "te-form of 来る + ください, using に for destination",
      },
      {
        segments: [
          { text: "公園[こうえん]へ" },
          { text: "来[き]て", blank: true },
          { text: "ください" },
        ],
        notes: "Using へ instead of に for directional particle",
      },
    ],
  },
  {
    english: "Please hurry!",
    answers: [
      {
        segments: [{ text: "急[いそ]い", blank: true }, { text: "でください" }],
        notes: "急ぐ → 急いで + ください for polite request",
      },
      {
        segments: [
          { text: "ちょっと" },
          { text: "急[いそ]い", blank: true },
          { text: "でください" },
        ],
        notes: "With ちょっと — softens the request",
      },
      {
        segments: [
          { text: "早[はや]く" },
          { text: "して", blank: true },
          { text: "ください" },
        ],
        notes: "早くしてください — polite alternative using する in te-form",
      },
    ],
  },
  {
    english: "Please turn on the air conditioner.",
    hint: "air conditioner = エアコン",
    answers: [
      {
        segments: [
          { text: "エアコンを" },
          { text: "つけて", blank: true },
          { text: "ください" },
        ],
        notes: "Basic te-form request: please turn on the air conditioner",
      },
      {
        segments: [
          { text: "エアコン" },
          { text: "つけて", blank: true },
          { text: "ください" },
        ],
        notes: "Particle を dropped — natural in casual speech",
      },
      {
        segments: [
          { text: "このエアコンを" },
          { text: "つけて", blank: true },
          { text: "ください" },
        ],
        notes:
          "With この (this air conditioner) — pointing to a specific one nearby",
      },
      {
        segments: [
          { text: "そのエアコンを" },
          { text: "つけて", blank: true },
          { text: "ください" },
        ],
        notes:
          "With その (that air conditioner) — pointing to one near the listener",
      },
    ],
  },
  {
    english: "Please help me!",
    answers: [
      {
        segments: [
          { text: "手伝[てつだ]って", blank: true },
          { text: "ください" },
        ],
        notes: "手伝う (Godan う-verb) in て-form + ください",
      },
      {
        segments: [
          { text: "私[わたし]を 手伝[てつだ]って", blank: true },
          { text: "ください" },
        ],
        notes: "Explicitly including 私を (me) as the object",
      },
      {
        segments: [{ text: "助[たす]けて", blank: true }, { text: "ください" }],
        notes: '助ける (Ichidan verb) — more urgent "save me / help me!"',
      },
    ],
  },

  // ─── て-form connecting activities ───

  {
    english: "I usually drink coffee and read the newspaper in the morning.",
    answers: [
      {
        segments: [
          { text: "私[わたし]はたいてい 朝[あさ]コーヒーを" },
          { text: "飲[の]んで", blank: true },
          { text: "新聞[しんぶん]を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Base answer: たいてい before time word 朝, て-form connects the two actions",
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]たいてい コーヒーを" },
          { text: "飲[の]んで", blank: true },
          { text: "新聞[しんぶん]を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "たいてい placed after 朝 (time word first, then frequency adverb)",
      },
      {
        segments: [
          { text: "朝[あさ]はたいてい コーヒーを" },
          { text: "飲[の]んで", blank: true },
          { text: "新聞[しんぶん]を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "朝は as topic (in the morning, I usually...), dropping 私は",
      },
      {
        segments: [
          { text: "朝[あさ]はたいてい 新聞[しんぶん]を" },
          { text: "読[よ]んで", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Reversed order: read newspaper first, then drink coffee (both valid sequences)",
      },
      {
        segments: [
          { text: "私[わたし]はたいてい 朝[あさ] コーヒーを" },
          { text: "飲[の]んで", blank: true },
          { text: "新聞[しんぶん]を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "朝 without は particle — bare time noun",
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ] たいてい 新聞[しんぶん]を" },
          { text: "読[よ]んで", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order, with 私は, 朝 bare (no は)",
      },
    ],
  },
  {
    english: "I'm going to swim in the sea and then eat lunch.",
    answers: [
      {
        segments: [
          { text: "海[うみ]で" },
          { text: "泳[およ]いで", blank: true },
          { text: "、 昼[ひる]ご 飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard form: 海で泳いで、昼ご飯を食べる",
      },
      {
        segments: [
          { text: "海[うみ]で" },
          { text: "泳[およ]いで", blank: true },
          { text: "、ご 飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: 'Using ご飯 instead of 昼ご飯 for "meal/lunch"',
      },
    ],
  },
  {
    english: "I borrowed a book from the library and then read it at the cafe.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で 本[ほん]を" },
          { text: "借[か]りて", blank: true },
          { text: "、カフェで" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic variation using で for location of borrowing",
      },
      {
        segments: [
          { text: "図書館[としょかん]から 本[ほん]を" },
          { text: "借[か]りて", blank: true },
          { text: "、カフェで" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Using から (from) to mark the library as the source of borrowing",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 本[ほん]を" },
          { text: "借[か]りて", blank: true },
          { text: "、カフェでそれを" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: 'Using それを to explicitly refer back to the book ("read it")',
      },
      {
        segments: [
          { text: "図書館[としょかん]から 本[ほん]を" },
          { text: "借[か]りて", blank: true },
          { text: "、カフェでそれを" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "から + それを: library as source, explicit pronoun reference to book",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 本[ほん]を" },
          { text: "借[か]りて", blank: true },
          { text: "、カフェで" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Past tense version with で for library location",
      },
      {
        segments: [
          { text: "図書館[としょかん]から 本[ほん]を" },
          { text: "借[か]りて", blank: true },
          { text: "、カフェで" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Past tense with から marking source",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 本[ほん]を" },
          { text: "借[か]りて", blank: true },
          { text: "、カフェでそれを" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'Past tense, で for library, それを for "it"',
      },
      {
        segments: [
          { text: "図書館[としょかん]から 本[ほん]を" },
          { text: "借[か]りて", blank: true },
          { text: "、カフェでそれを" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'Past tense, から for source, それを for "it"',
      },
    ],
  },
  {
    english: "I took a shower and then went to sleep.",
    answers: [
      {
        segments: [
          { text: "シャワーを" },
          { text: "浴[あ]びて", blank: true },
          {
            text: "、 寝[ね]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Blank on te-form verb 浴びて, with comma",
      },
      {
        segments: [
          { text: "シャワーを 浴[あ]びて、" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Blank on the final verb 寝る (past), with comma",
      },
      {
        segments: [
          { text: "シャワーを" },
          { text: "浴[あ]びて", blank: true },
          {
            text: "寝[ね]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Blank on te-form verb 浴びて, no comma",
      },
      {
        segments: [
          { text: "シャワーを 浴[あ]びて" },
          {
            text: "寝[ね]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Blank on the final verb 寝る (past), no comma",
      },
    ],
  },
  {
    english: "Did Nakajima go home and then call?",
    hint: "Nakajima = 中島 (なかじま)",
    answers: [
      {
        segments: [
          { text: "中島[なかじま]さんは" },
          { text: "帰[かえ]って", blank: true },
          { text: "、 電話[でんわ]しましたか" },
        ],
        notes:
          "Basic variation: は particle, 電話しましたか as polite past question",
      },
      {
        segments: [
          { text: "中島[なかじま]さんは" },
          { text: "帰[かえ]って", blank: true },
          { text: "、 電話[でんわ]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "電話する with conjugation for the second verb",
      },
      {
        segments: [
          { text: "中島[なかじま]さんは" },
          { text: "帰[かえ]って", blank: true },
          { text: "、 電話[でんわ]を" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "電話をする (with を particle) instead of 電話する",
      },
      {
        segments: [
          { text: "小林[こばやし]さんが" },
          { text: "帰[かえ]って", blank: true },
          { text: "、 電話[でんわ]しましたか" },
        ],
        notes: "が instead of は as subject marker",
      },
      {
        segments: [
          { text: "小林[こばやし]さんが" },
          { text: "帰[かえ]って", blank: true },
          { text: "、 電話[でんわ]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "が particle + 電話する with conjugation",
      },
      {
        segments: [
          { text: "小林[こばやし]さんが" },
          { text: "帰[かえ]って", blank: true },
          { text: "、 電話[でんわ]を" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "が particle + 電話をする with を",
      },
    ],
  },
  {
    english: "Older sis goes out every weekend, and I just stay home.",
    answers: [
      {
        segments: [
          { text: "お 姉[ねえ]さんは 週末[しゅうまつ]に" },
          { text: "出[で]かけて", blank: true },
          { text: "、 私[わたし]は 家[いえ]に" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Basic contrastive て: older sis goes out on weekends, I stay home",
      },
      {
        segments: [
          { text: "お 姉[ねえ]さんは 週末[しゅうまつ]は" },
          { text: "出[で]かけて", blank: true },
          { text: "、 私[わたし]は 家[いえ]に" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "は instead of に for 週末 — topicalizing the weekend",
      },
      {
        segments: [
          {
            text: "お 姉[ねえ]さんは 毎[まい] 週末[しゅうまつ] 出[で]かけて",
            blank: true,
          },
          { text: "、 私[わたし]は 家[いえ]に" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "毎週末 (every weekend) as one phrase before the blank",
      },
      {
        segments: [
          { text: "お 姉[ねえ]さんは 週末[しゅうまつ]に" },
          { text: "出[で]かけて", blank: true },
          { text: "、 私[わたし]は ずっと 家[いえ]に" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          'Adding ずっと (just/always staying) to emphasize "just stay home"',
      },
      {
        segments: [
          { text: "お 姉[ねえ]さんは 週末[しゅうまつ]は" },
          { text: "出[で]かけて", blank: true },
          { text: "、 私[わたし]は ずっと 家[いえ]に" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: 'は for 週末 (topicalizing) + ずっと for "just stay home"',
      },
      {
        segments: [
          { text: "お 姉[ねえ]さんは 週末[しゅうまつ]に" },
          { text: "出[で]かけて", blank: true },
          { text: "、 私[わたし]は いつも 家[いえ]に" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "いつも (always) instead of ずっと",
      },
      {
        segments: [
          { text: "お 姉[ねえ]さんは 週末[しゅうまつ]に" },
          { text: "出[で]かけて", blank: true },
          { text: "、 私[わたし]は うちに" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "うち instead of 家 — more casual word for home",
      },
      {
        segments: [
          { text: "お 姉[ねえ]さんは 毎[まい] 週末[しゅうまつ]に" },
          { text: "出[で]かけて", blank: true },
          { text: "、 私[わたし]は 家[いえ]に" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "毎週末に (every weekend) with に particle",
      },
    ],
  },
  {
    english: "I had a lot of homework and it was rough.",
    hint: "rough = 大変（たいへん）",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]がたくさん" },
          { text: "あって", blank: true },
          { text: "、" },
          {
            text: "大変[たいへん]",
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "たくさんある (have a lot) in te-form, 大変 as past na-adjective",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が" },
          { text: "多[おお]くて", blank: true },
          { text: "、" },
          {
            text: "大変[たいへん]",
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 多い (many) in て-form instead of たくさんある",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]がいっぱい" },
          { text: "あって", blank: true },
          { text: "、" },
          {
            text: "大変[たいへん]",
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "いっぱい (lots/full of) instead of たくさん",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]がたくさんあって", blank: true },
          {
            text: "大変[たいへん]",
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "No comma — more natural in casual speech",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が 多[おお]くて", blank: true },
          {
            text: "大変[たいへん]",
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "多くて without comma",
      },
    ],
  },

  // ─── てもいいです permission ───

  {
    english: "May I borrow your dictionary?",
    answers: [
      {
        segments: [
          { text: "辞書[じしょ]を 借[か]りてもいい", blank: true },
          { text: "の" },
        ],
        notes: "Casual question with の instead of ですか",
      },
      {
        segments: [
          { text: "辞書[じしょ]を 借[か]りてもいい", blank: true },
          { text: "か" },
        ],
        notes: "Casual question without です (plain form + か)",
      },
      {
        segments: [
          { text: "辞書[じしょ]を 借[か]りてもかまわない", blank: true },
          { text: "か" },
        ],
        notes: "てもかまわない casual form without です",
      },
      {
        segments: [
          { text: "辞書[じしょ]を 借[か]りてもかまわない", blank: true },
          { text: "の" },
        ],
        notes: "てもかまわない with の question ending",
      },
      {
        segments: [
          { text: "辞書[じしょ]を" },
          { text: "借[か]りてもいい", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Basic form with てもいいですか",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]を" },
          { text: "借[か]りてもいい", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using この辞書 (this dictionary)",
      },
      {
        segments: [
          { text: "あなたの 辞書[じしょ]を" },
          { text: "借[か]りてもいい", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: 'Explicitly "your dictionary" with あなたの辞書',
      },
      {
        segments: [
          { text: "辞書[じしょ]を" },
          { text: "借[か]りてもかまわない", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using てもかまわない instead of てもいい, with ですか",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]を" },
          { text: "借[か]りてもかまわない", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "てもかまわない with この辞書",
      },
    ],
  },
  {
    english: "Is it okay to take a photo here?",
    answers: [
      {
        segments: [
          { text: "ここで 写真[しゃしん]を 撮[と]っても", blank: true },
          {
            text: "いい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "ですか" },
        ],
        notes:
          "Standard polite question: ここで 写真を + 撮ってもいいですか (two blanks)",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]ってもかまわない", blank: true },
          { text: "ですか" },
        ],
        notes: "Using てもかまわない with ですか",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を 撮[と]っても", blank: true },
          {
            text: "いい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "の" },
        ],
        notes: "Casual question using の instead of ですか",
      },
      {
        segments: [
          { text: "写真[しゃしん]を ここで 撮[と]っても", blank: true },
          {
            text: "いい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "ですか" },
        ],
        notes: "写真を first, then ここで (different word order)",
      },
      {
        segments: [
          { text: "写真[しゃしん]を ここで" },
          { text: "撮[と]ってもかまわない", blank: true },
          { text: "ですか" },
        ],
        notes: "写真を first, ここで second, with かまわない",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]ってもかまわない", blank: true },
          { text: "の" },
        ],
        notes: "Casual の question with かまわない",
      },
    ],
  },
  {
    english: "Is it okay if I go home early today?",
    answers: [
      {
        segments: [
          { text: "今日[きょう]" },
          { text: "早[はや]く 帰[かえ]っても", blank: true },
          { text: "いいですか" },
        ],
        notes: "Standard variation: 今日 without は, using 帰ってもいいですか",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "早[はや]く 帰[かえ]っても", blank: true },
          { text: "いいですか" },
        ],
        notes: "は added to 今日 as topic marker",
      },
      {
        segments: [
          { text: "今日[きょう]" },
          { text: "早[はや]く 帰[かえ]っても", blank: true },
          { text: "かまいませんか" },
        ],
        notes: "Using かまいませんか instead of いいですか",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "早[はや]く 帰[かえ]っても", blank: true },
          { text: "かまいませんか" },
        ],
        notes: "は on 今日, using かまいませんか",
      },
      {
        segments: [
          { text: "今日[きょう]早[はや]く 帰[かえ]ってもいいの", blank: true },
        ],
        notes: "Casual question using の instead of か",
      },
      {
        segments: [
          {
            text: "今日[きょう]は 早[はや]く 帰[かえ]ってもいいの",
            blank: true,
          },
        ],
        notes: "Casual question with は on 今日, using の",
      },
      {
        segments: [
          {
            text: "今日[きょう]早[はや]く 帰[かえ]ってもかまわないですか",
            blank: true,
          },
        ],
        notes: "かまわないですか form, no は on 今日",
      },
      {
        segments: [
          {
            text: "今日[きょう]は 早[はや]く 帰[かえ]ってもかまわないですか",
            blank: true,
          },
        ],
        notes: "かまわないですか with は on 今日",
      },
    ],
  },
  {
    english: "It's okay even if the café is lively.",
    answers: [
      {
        segments: [
          { text: "カフェが" },
          { text: "にぎやか", blank: true },
          { text: "でもかまいません" },
        ],
        notes: "Using かまいません with が",
      },
      {
        segments: [
          { text: "カフェは" },
          { text: "にぎやか", blank: true },
          { text: "でもかまいません" },
        ],
        notes: "Using は with かまいません",
      },
      {
        segments: [
          { text: "カフェがにぎやか" },
          { text: "でもいい", blank: true },
          { text: "です" },
        ],
        notes: "Blank on でもいい with が",
      },
      {
        segments: [
          { text: "カフェはにぎやか" },
          { text: "でもいい", blank: true },
          { text: "です" },
        ],
        notes: "Blank on でもいい with は",
      },
      {
        segments: [
          { text: "カフェがにぎやか" },
          { text: "でもかまわない", blank: true },
        ],
        notes: "Blank on でもかまわない (casual) with が",
      },
      {
        segments: [
          { text: "カフェはにぎやか" },
          { text: "でもかまわない", blank: true },
        ],
        notes: "Blank on でもかまわない (casual) with は",
      },
    ],
  },
  {
    english: "I don't mind if you return the book tomorrow.",
    answers: [
      {
        segments: [
          { text: "本[ほん]を 明日[あした]" },
          { text: "返[かえ]して", blank: true },
          { text: "もいいです" },
        ],
        notes: "Standard てもいいです",
      },
      {
        segments: [
          { text: "本[ほん]を 明日[あした]" },
          { text: "返[かえ]しても", blank: true },
          { text: "かまわないです" },
        ],
        notes: "Using てもかまわない (polite)",
      },
      {
        segments: [
          { text: "明日[あした]本[ほん]を" },
          { text: "返[かえ]して", blank: true },
          { text: "もいいです" },
        ],
        notes: "Time word (明日) moved to front",
      },
      {
        segments: [
          { text: "明日[あした]本[ほん]を" },
          { text: "返[かえ]しても", blank: true },
          { text: "かまわないです" },
        ],
        notes: "Time word first + てもかまわない",
      },
      {
        segments: [
          { text: "本[ほん]は 明日[あした]" },
          { text: "返[かえ]して", blank: true },
          { text: "もいいです" },
        ],
        notes: "Using は instead of を — topicalizing the book",
      },
      {
        segments: [
          { text: "本[ほん]は 明日[あした]" },
          { text: "返[かえ]しても", blank: true },
          { text: "かまわないです" },
        ],
        notes: "は instead of を + てもかまわない",
      },
      {
        segments: [
          { text: "本[ほん]を 明日[あした]" },
          { text: "返[かえ]して", blank: true },
          { text: "もいい" },
        ],
        notes: "Casual plain てもいい without endings",
      },
      {
        segments: [
          { text: "本[ほん]を 明日[あした]" },
          { text: "返[かえ]しても", blank: true },
          { text: "かまわない" },
        ],
        notes: "Casual plain てもかまわない without endings",
      },
    ],
  },
  {
    english: "May I go out to play?",
    answers: [
      {
        segments: [
          { text: "遊[あそ]びに 行[い]っ" },
          { text: "てもいいですか", blank: true },
        ],
        notes:
          "Standard: 遊びに行く (go out to play), てもいいですか for asking permission",
      },
      {
        segments: [
          { text: "遊[あそ]びに 行[い]っ" },
          { text: "てもいいの", blank: true },
        ],
        notes: "Casual question form with の instead of ですか",
      },
      {
        segments: [
          { text: "遊[あそ]びに 行[い]っ" },
          { text: "てもかまいませんか", blank: true },
        ],
        notes: "Using てもかまいませんか for asking permission",
      },
      {
        segments: [
          { text: "遊[あそ]びに 行[い]っ" },
          { text: "てもかまわないですか", blank: true },
        ],
        notes: "てもかまわない with ですか",
      },
      {
        segments: [
          { text: "出[で]かけて 遊[あそ]ん" },
          { text: "でもいいですか", blank: true },
        ],
        notes: "出かけて遊ぶ (go out and play), でもいいですか",
      },
      {
        segments: [
          { text: "出[で]かけて 遊[あそ]ん" },
          { text: "でもいいの", blank: true },
        ],
        notes: "出かけて遊ぶ, casual の question form",
      },
      {
        segments: [
          { text: "出[で]かけて 遊[あそ]ん" },
          { text: "でもかまいませんか", blank: true },
        ],
        notes: "出かけて遊ぶ, てもかまいませんか for formal permission",
      },
    ],
  },
  {
    english: "Dinner can be hamburgers — I don't mind.",
    answers: [
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]は ハンバーガーでも", blank: true },
          { text: "いいです" },
        ],
        notes: "Basic: 晩ご飯 as topic, ハンバーガーでもいいです",
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]は ハンバーガーでも", blank: true },
          { text: "かまいません" },
        ],
        notes: "Using かまいません instead of いいです",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]は ハンバーガーでも", blank: true },
          { text: "いいです" },
        ],
        notes: "夕ご飯 instead of 晩ご飯 for dinner",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]は ハンバーガーでも", blank: true },
          { text: "かまいません" },
        ],
        notes: "夕ご飯 + かまいません",
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]が ハンバーガーでも", blank: true },
          { text: "いいです" },
        ],
        notes: "Using が instead of は",
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]が ハンバーガーでも", blank: true },
          { text: "かまいません" },
        ],
        notes: "が particle + かまいません",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]が ハンバーガーでも", blank: true },
          { text: "いいです" },
        ],
        notes: "夕ご飯 + が particle + いいです",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]が ハンバーガーでも", blank: true },
          { text: "かまいません" },
        ],
        notes: "夕ご飯 + が + かまいません",
      },
      {
        segments: [
          { text: "ハンバーガーでも", blank: true },
          { text: "いいです" },
        ],
        notes: 'Topic (dinner) dropped — just "Hamburgers are fine"',
      },
      {
        segments: [
          { text: "ハンバーガーでも", blank: true },
          { text: "かまいません" },
        ],
        notes: "Topic dropped + かまいません",
      },
    ],
  },
  {
    english: "I don't mind if the room is small.",
    answers: [
      {
        segments: [
          { text: "部屋[へや]が 小[ちい]さくても", blank: true },
          {
            text: "かまわない",
            conjugation: {
              pos: "Godan verb with 'nu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Core answer: い-adjective て-form + かまわない, が marks the subject",
      },
      {
        segments: [
          { text: "部屋[へや]は 小[ちい]さくても", blank: true },
          {
            text: "かまわない",
            conjugation: {
              pos: "Godan verb with 'nu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "は instead of が — topicalizing the room",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が 小[ちい]さくても", blank: true },
          {
            text: "かまわない",
            conjugation: {
              pos: "Godan verb with 'nu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は subject, が marks room",
      },
      {
        segments: [
          { text: "部屋[へや]が 小[ちい]さくても", blank: true },
          { text: "いいです" },
        ],
        notes: "Using いい instead of かまわない, が marks the subject",
      },
      {
        segments: [
          { text: "部屋[へや]は 小[ちい]さくても", blank: true },
          { text: "いいです" },
        ],
        notes: "Using いい, は instead of が",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が 小[ちい]さくても", blank: true },
          { text: "いいです" },
        ],
        notes: "Explicit 私は subject with いい, が marks room",
      },
    ],
  },
  {
    english: "Is it okay if the hotel is a little old?",
    answers: [
      {
        segments: [
          { text: "ホテルがちょっと 古[ふる]くても", blank: true },
          { text: "かまいませんか" },
        ],
        notes: "Core variation: が particle, ちょっと, かまいません question",
      },
      {
        segments: [
          { text: "ホテルはちょっと 古[ふる]くても", blank: true },
          { text: "かまいませんか" },
        ],
        notes: "は instead of が",
      },
      {
        segments: [
          { text: "ホテルが 少[すこ]し 古[ふる]くても", blank: true },
          { text: "かまいませんか" },
        ],
        notes: "少し instead of ちょっと, が particle",
      },
      {
        segments: [
          { text: "ホテルは 少[すこ]し 古[ふる]くても", blank: true },
          { text: "かまいませんか" },
        ],
        notes: "少し, は instead of が",
      },
      {
        segments: [
          { text: "ちょっと 古[ふる]い ホテルでも", blank: true },
          { text: "かまいませんか" },
        ],
        notes: "Noun phrase approach: ちょっと古いホテル + でもかまいません",
      },
      {
        segments: [
          { text: "少[すこ]し 古[ふる]い ホテルでも", blank: true },
          { text: "かまいませんか" },
        ],
        notes: "Noun phrase with 少し instead of ちょっと",
      },
      {
        segments: [
          { text: "ホテルがちょっと 古[ふる]くても", blank: true },
          { text: "いいですか" },
        ],
        notes: "てもいいですか form, が particle, ちょっと",
      },
      {
        segments: [
          { text: "ホテルはちょっと 古[ふる]くても", blank: true },
          { text: "いいですか" },
        ],
        notes: "てもいいですか, は instead of が, ちょっと",
      },
      {
        segments: [
          { text: "ホテルが 少[すこ]し 古[ふる]くても", blank: true },
          { text: "いいですか" },
        ],
        notes: "てもいいですか, が, 少し",
      },
      {
        segments: [
          { text: "ホテルは 少[すこ]し 古[ふる]くても", blank: true },
          { text: "いいですか" },
        ],
        notes: "てもいいですか, は, 少し",
      },
      {
        segments: [
          { text: "ちょっと 古[ふる]い ホテルでも", blank: true },
          { text: "いいですか" },
        ],
        notes: "Noun phrase + でもいいですか, ちょっと",
      },
      {
        segments: [
          { text: "少[すこ]し 古[ふる]い ホテルでも", blank: true },
          { text: "いいですか" },
        ],
        notes: "Noun phrase + でもいいですか, 少し",
      },
    ],
  },

  // ─── てはいけません prohibition ───

  {
    english: "I must not forget my homework.",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "忘[わす]れて", blank: true },
          { text: "は" },
          {
            text: "いけない",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard form: 忘れる te-form + ては + いけない",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "忘[わす]れちゃ", blank: true },
          {
            text: "いけない",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Contracted casual form: ては → ちゃ (忘れちゃいけない)",
      },
    ],
  },
  {
    english: "You must not smoke in the library.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で たばこを" },
          { text: "吸[す]っては", blank: true },
          { text: "いけません" },
        ],
        notes:
          "Standard word order: location first, then action. てはいけません polite form.",
      },
      {
        segments: [
          { text: "たばこを 図書館[としょかん]で" },
          { text: "吸[す]っては", blank: true },
          { text: "いけません" },
        ],
        notes: "Object-first word order: たばこを first, then location.",
      },
      {
        segments: [
          { text: "図書館[としょかん]で たばこを" },
          { text: "吸[す]っちゃ", blank: true },
          { text: "いけません" },
        ],
        notes: "ちゃ contraction of ては. Location first.",
      },
      {
        segments: [
          { text: "たばこを 図書館[としょかん]で" },
          { text: "吸[す]っちゃ", blank: true },
          { text: "いけません" },
        ],
        notes: "ちゃ contraction, object-first word order.",
      },
    ],
  },
  {
    english: "You must not enter this room.",
    hint: "this room = この部屋（へや）",
    answers: [
      {
        segments: [
          { text: "この 部屋[へや]に" },
          { text: "入[はい]ってはいけない", blank: true },
        ],
        notes: "Standard form: この部屋に入ってはいけない",
      },
      {
        segments: [
          { text: "この 部屋[へや]に" },
          { text: "入[はい]っちゃいけない", blank: true },
        ],
        notes: "Casual contraction: ってはいけない → っちゃいけない",
      },
      {
        segments: [
          { text: "この 部屋[へや]に" },
          { text: "入[はい]ってはだめ", blank: true },
        ],
        notes: "Using だめ instead of いけない — casual spoken alternative",
      },
      {
        segments: [
          { text: "この 部屋[へや]に" },
          { text: "入[はい]っちゃだめ", blank: true },
        ],
        notes: "Casual contraction ちゃ + だめ — very casual spoken form",
      },
      {
        segments: [
          { text: "この 部屋[へや]の 中[なか]に" },
          { text: "入[はい]ってはいけない", blank: true },
        ],
        notes: 'Adding 中に (inside) — "must not enter inside this room"',
      },
      {
        segments: [
          { text: "この 部屋[へや]の 中[なか]に" },
          { text: "入[はい]っちゃいけない", blank: true },
        ],
        notes: "中に + ちゃいけない contraction",
      },
      {
        segments: [
          { text: "この 部屋[へや]へ" },
          { text: "入[はい]ってはいけない", blank: true },
        ],
        notes: "Using へ instead of に for direction",
      },
      {
        segments: [
          { text: "この 部屋[へや]へ" },
          { text: "入[はい]っちゃいけない", blank: true },
        ],
        notes: "へ + ちゃいけない contraction",
      },
    ],
  },
  {
    english: "You must not use your phone during the test.",
    answers: [
      {
        segments: [
          { text: "テストの 間[あいだ]は スマホを" },
          { text: "使[つか]っちゃ いけません", blank: true },
        ],
        notes: "Casual contraction ちゃいけません, polite ending",
      },
      {
        segments: [
          { text: "テスト 中[ちゅう] スマホを" },
          { text: "使[つか]っちゃ いけません", blank: true },
        ],
        notes: "テスト中 + ちゃいけません",
      },
      {
        segments: [
          { text: "テストの 間[あいだ]は スマホを" },
          { text: "使[つか]って", blank: true },
          { text: "は" },
          {
            text: "いけない",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          'Standard variation: テストの間 for "during the test", いけない conjugated',
      },
      {
        segments: [
          { text: "テスト 中[ちゅう] スマホを" },
          { text: "使[つか]って", blank: true },
          { text: "は" },
          {
            text: "いけない",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using テスト中 (during the test) instead of テストの間",
      },
      {
        segments: [
          { text: "テストの 間[あいだ]は 電話[でんわ]を" },
          { text: "使[つか]って", blank: true },
          { text: "は" },
          {
            text: "いけない",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: 'Using 電話 instead of スマホ for "phone"',
      },
      {
        segments: [
          { text: "テスト 中[ちゅう] 電話[でんわ]を" },
          { text: "使[つか]って", blank: true },
          { text: "は" },
          {
            text: "いけない",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "テスト中 + 電話 combo",
      },
      {
        segments: [
          { text: "スマホを テストの 間[あいだ]は" },
          { text: "使[つか]って", blank: true },
          { text: "は" },
          {
            text: "いけない",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed word order: object (スマホを) before time phrase",
      },
    ],
  },
  {
    english: "You must not sleep with the light on.",
    hint: "sleep with the light on = turn on the light and sleep",
    answers: [
      {
        segments: [
          { text: "電気[でんき]を" },
          { text: "つけて", blank: true },
          { text: "寝[ね]ては いけない", blank: true },
        ],
        notes: "Standard form: つけて (te-form of つける) + 寝てはいけない",
      },
      {
        segments: [
          { text: "電気[でんき]を" },
          { text: "つけて", blank: true },
          { text: "寝[ね]ちゃ いけない", blank: true },
        ],
        notes: "Contracted ちゃ form: 寝ちゃいけない",
      },
      {
        segments: [
          { text: "電気[でんき]を" },
          { text: "つけて", blank: true },
          { text: "寝[ね]ては いけません", blank: true },
        ],
        notes: "Polite form: 寝てはいけません",
      },
      {
        segments: [
          { text: "電気[でんき]を" },
          { text: "つけて", blank: true },
          { text: "寝[ね]ちゃ いけません", blank: true },
        ],
        notes: "Contracted ちゃ form with polite ending: 寝ちゃいけません",
      },
    ],
  },
  {
    english: "You must not bring a dog into the restaurant.",
    answers: [
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れてきては", blank: true },
          {
            text: "いけない",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard form: 連れてきてはいけない",
      },
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れてきちゃ", blank: true },
          {
            text: "いけない",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Casual contraction: ては → ちゃ (連れてきちゃいけない)",
      },
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れてきては", blank: true },
          { text: "いけません" },
        ],
        notes: "Polite ending: いけません",
      },
      {
        segments: [
          { text: "犬[いぬ]を レストランに" },
          { text: "連[つ]れてきては", blank: true },
          { text: "いけない" },
        ],
        notes: "Word order swapped: 犬を moved before レストランに",
      },
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れて 入[はい]っては", blank: true },
          { text: "いけない" },
        ],
        notes: "Using 連れて入る (bring in/take into) instead of 連れてくる",
      },
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れて 入[はい]っては", blank: true },
          { text: "いけません" },
        ],
        notes: "連れて入る with polite いけません",
      },
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れて 入[はい]っちゃ", blank: true },
          { text: "いけない" },
        ],
        notes: "連れて入る with casual ちゃ contraction",
      },
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れてきては", blank: true },
          { text: "ならない" },
        ],
        notes: "Using ならない instead of いけない (more formal/written style)",
      },
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れてきては", blank: true },
          { text: "だめ" },
        ],
        notes: "Using だめ instead of いけない (very casual spoken style)",
      },
      {
        segments: [
          { text: "レストランに 犬[いぬ]を" },
          { text: "連[つ]れてきちゃ", blank: true },
          { text: "だめ" },
        ],
        notes: "ちゃ contraction + だめ (very casual)",
      },
    ],
  },
  {
    english: "You must not talk on the phone on the train.",
    answers: [
      {
        segments: [
          { text: "電車[でんしゃ]で" },
          { text: "電話[でんわ]して", blank: true },
          { text: "はいけない" },
        ],
        notes: "Standard form: 電話する in te-form + てはいけない",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で" },
          { text: "電話[でんわ]をして", blank: true },
          { text: "はいけない" },
        ],
        notes: "Using 電話をする (with object particle を)",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で" },
          { text: "電話[でんわ]しちゃ", blank: true },
          { text: "いけない" },
        ],
        notes: "Casual contraction: てはいけない → ちゃいけない",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]で" },
          { text: "電話[でんわ]して", blank: true },
          { text: "はいけない" },
        ],
        notes: "Using 電車の中で (inside the train) instead of just 電車で",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]で" },
          { text: "電話[でんわ]をして", blank: true },
          { text: "はいけない" },
        ],
        notes: "電車の中で + 電話をして",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]で" },
          { text: "電話[でんわ]しちゃ", blank: true },
          { text: "いけない" },
        ],
        notes: "電車の中で + ちゃいけない contraction",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で" },
          { text: "電話[でんわ]で 話[はな]して", blank: true },
          { text: "はいけない" },
        ],
        notes: "電話で話す (talk by phone) as an alternative phrasing",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]で" },
          { text: "電話[でんわ]で 話[はな]して", blank: true },
          { text: "はいけない" },
        ],
        notes: "電車の中で + 電話で話して",
      },
    ],
  },
  {
    english: "You must not sit on the desk.",
    answers: [
      {
        segments: [
          { text: "机[つくえ]に" },
          { text: "座[すわ]って", blank: true },
          { text: "はいけない" },
        ],
        notes: "Basic form with に particle and てはいけない",
      },
      {
        segments: [
          { text: "机[つくえ]に" },
          { text: "座[すわ]っちゃ", blank: true },
          { text: "いけない" },
        ],
        notes: "Casual ちゃ contraction of ては",
      },
      {
        segments: [
          { text: "机[つくえ]には" },
          { text: "座[すわ]って", blank: true },
          { text: "はいけない" },
        ],
        notes: 'には for topic emphasis — "on the desk, you must not sit"',
      },
      {
        segments: [
          { text: "机[つくえ]には" },
          { text: "座[すわ]っちゃ", blank: true },
          { text: "いけない" },
        ],
        notes: "には + ちゃ contraction",
      },
    ],
  },
]
