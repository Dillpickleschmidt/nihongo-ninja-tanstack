import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Kenji drank coffee with his teacher this morning.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 今日[きょう]の 朝[あさ]、" },
          { text: "先生[せんせい]と", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard word order: Kenji は, time, person と, object を, verb",
      },
      {
        segments: [
          { text: "けんじさんは 朝[あさ]、" },
          { text: "先生[せんせい]と", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 朝 alone (this morning) instead of 今日の朝",
      },
      {
        segments: [
          { text: "けんじさんは " },
          { text: "先生[せんせい]と", blank: true },
          { text: "今日[きょう]の 朝[あさ] コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "と (person) moved before the time expression — different word order",
      },
      {
        segments: [
          { text: "けんじさんは " },
          { text: "先生[せんせい]と", blank: true },
          { text: "朝[あさ] コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "と before 朝, using 朝 alone",
      },
      {
        segments: [
          { text: "けんじさんが 今日[きょう]の 朝[あさ]、" },
          { text: "先生[せんせい]と", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が instead of は for subject marking",
      },
      {
        segments: [
          { text: "けんじさんが 朝[あさ]、" },
          { text: "先生[せんせい]と", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は, 朝 alone",
      },
    ],
  },
  {
    english: "Matsumoto bought apples and oranges.",
    answers: [
      {
        segments: [
          { text: "松本[まつもと]さんは" },
          { text: "りんごと オレンジ", blank: true },
          { text: "を" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I took pictures with my younger sister at the temple yesterday.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、" },
          { text: "妹[いもうと]と", blank: true },
          { text: "お 寺[てら]で 写真[しゃしん]を" },
          {
            text: "撮[と]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard order: time first, then と marking companion, location with で",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、お 寺[てら]で " },
          { text: "妹[いもうと]と", blank: true },
          { text: "写真[しゃしん]を" },
          {
            text: "撮[と]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Location (お寺で) moved before と companion",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は " },
          { text: "妹[いもうと]と", blank: true },
          { text: "お 寺[てら]で 写真[しゃしん]を" },
          {
            text: "撮[と]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time word (昨日) fronted to start of sentence",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、" },
          { text: "妹[いもうと]と", blank: true },
          { text: "寺[てら]で 写真[しゃしん]を" },
          {
            text: "撮[と]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 寺 (without お honorific prefix) instead of お寺",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう]、" },
          { text: "妹[いもうと]と", blank: true },
          { text: "お 寺[てら]で 写真[しゃしん]を" },
          {
            text: "撮[と]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が instead of は for the subject",
      },
    ],
  },
  {
    english: "I watch TV with my dog every evening.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 毎晩[まいばん]、" },
          { text: "犬[いぬ]と", blank: true },
          {
            text: "テレビを見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard order: 毎晩 first, then 犬と, then テレビを見る",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "犬[いぬ]と", blank: true },
          { text: "、毎晩[まいばん]" },
          {
            text: "テレビを見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "犬と moved before 毎晩",
      },
      {
        segments: [
          { text: "毎晩[まいばん]、私[わたし]は " },
          { text: "犬[いぬ]と", blank: true },
          {
            text: "テレビを見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "毎晩 fronted as topic-setter at start of sentence",
      },
      {
        segments: [
          { text: "私[わたし]が 毎晩[まいばん]、" },
          { text: "犬[いぬ]と", blank: true },
          {
            text: "テレビを見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は for 私",
      },
      {
        segments: [
          { text: "私[わたし]は 毎晩[まいばん]、" },
          { text: "私[わたし]の犬[いぬ]と", blank: true },
          {
            text: "テレビを見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: '私の犬と — explicitly "my dog" with possessive の',
      },
    ],
  },
  {
    english: "I sometimes watch movies with my older brother.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 時々[ときどき] " },
          { text: "お 兄[にい]さんと", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Standard word order: topic は + time + person + と + object + verb",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "お 兄[にい]さんと", blank: true },
          { text: "時々[ときどき] 映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Time adverb (時々) moved after と-phrase",
      },
      {
        segments: [
          { text: "私[わたし]は 時々[ときどき] " },
          { text: "兄[あに]と", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Using 兄 (plain form of older brother, more humble/casual) instead of お兄さん",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "兄[あに]と", blank: true },
          { text: "時々[ときどき] 映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 兄 with 時々 after と-phrase",
      },
      {
        segments: [
          { text: "私[わたし]が 時々[ときどき] " },
          { text: "お 兄[にい]さんと", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が instead of は for the subject",
      },
      {
        segments: [
          { text: "私[わたし]が 時々[ときどき] " },
          { text: "兄[あに]と", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が + 兄 combination",
      },
    ],
  },
  {
    english: "I ate lunch with a friend yesterday.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、" },
          { text: "友[とも]だちと", blank: true },
          { text: "昼[ひる]ご飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard word order: topic は + time + friend と + object を + verb",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、" },
          { text: "友達[ともだち]と", blank: true },
          { text: "昼[ひる]ご飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "友達 (kanji form) instead of 友だち",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は " },
          { text: "友[とも]だちと", blank: true },
          { text: "昼[ひる]ご飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Time-fronted: 昨日 moved to the very beginning",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "友[とも]だちと", blank: true },
          { text: "昨日[きのう] 昼[ひる]ご飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "と directly after 友だち, then 昨日 before the object",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう]、" },
          { text: "友[とも]だちと", blank: true },
          { text: "昼[ひる]ご飯[はん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は as subject marker",
      },
    ],
  },
  {
    english: "Is Kenji going to the park with his younger sister?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは " },
          { text: "妹[いもうと]と", blank: true },
          { text: "公園[こうえん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard word order: subject は, 妹と, 公園に, 行く",
      },
      {
        segments: [
          { text: "けんじさんは 公園[こうえん]に " },
          { text: "妹[いもうと]と", blank: true },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "公園に moved before 妹と",
      },
      {
        segments: [
          { text: "けんじさんが " },
          { text: "妹[いもうと]と", blank: true },
          { text: "公園[こうえん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は for けんじ (neutral/fresh information)",
      },
      {
        segments: [
          { text: "けんじさんは " },
          { text: "妹[いもうと]と", blank: true },
          { text: "公園[こうえん]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "へ instead of に for direction to the park",
      },
      {
        segments: [
          { text: "けんじさんが " },
          { text: "妹[いもうと]と", blank: true },
          { text: "公園[こうえん]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は, and へ instead of に",
      },
    ],
  },
  {
    english: "I bought a book and a magazine at the bookstore.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 本屋[ほんや]で" },
          { text: "本[ほん]と 雑誌[ざっし]", blank: true },
          { text: "を" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard word order: location with で, then objects with と, past tense",
      },
      {
        segments: [
          { text: "私[わたし]は 本屋[ほんや]で" },
          { text: "雑誌[ざっし]と 本[ほん]", blank: true },
          { text: "を" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Magazine listed first, then book — reversed order of nouns",
      },
      {
        segments: [
          { text: "本屋[ほんや]で" },
          { text: "本[ほん]と 雑誌[ざっし]", blank: true },
          { text: "を" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Subject 私は dropped, location first",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "本[ほん]と 雑誌[ざっし]", blank: true },
          { text: "を 本屋[ほんや]で" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Objects first (は after 私), location placed after objects before verb",
      },
    ],
  },
  {
    english: "I study with my older sister every morning.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 毎朝[まいあさ] " },
          { text: "お 姉[ねえ]さんと", blank: true },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard word order: topic は, time, と, verb",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "お 姉[ねえ]さんと", blank: true },
          { text: " 毎朝[まいあさ]" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "と before time word (毎朝 moved after お姉さんと)",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、私[わたし]は " },
          { text: "お 姉[ねえ]さんと", blank: true },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "毎朝 fronted at the start of the sentence",
      },
    ],
  },
  {
    english: "Did Yuki go back home with her younger brother?",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "弟[おとうと]と", blank: true },
          { text: "ゆきさんは家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "弟と fronted; explicit か question marker; ゆきは mid-sentence",
      },
      {
        segments: [
          { text: "ゆきさんは" },
          { text: "弟[おとうと]と", blank: true },
          { text: "家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Basic variation with 家に, explicit か question marker",
      },
      {
        segments: [
          { text: "ゆきさんは" },
          { text: "弟[おとうと]と", blank: true },
          { text: "うちに" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: 'Using うち instead of 家 for "home"',
      },
      {
        segments: [
          { text: "ゆきさんは" },
          { text: "弟[おとうと]と", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes:
          "Without explicitly stating 家/うちに — 帰る already implies going home",
      },
      {
        segments: [
          { text: "ゆきさんは" },
          { text: "弟[おとうと]と", blank: true },
          { text: "家[いえ]へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using へ instead of に for direction",
      },
    ],
  },
  {
    english: "I waited at the bus stop with a friend.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "友[とも]だちと", blank: true },
          { text: " バス停[バスてい]で" },
          {
            text: "待[ま]つ",
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Standard word order: topic は, friend と, bus stop で, verb past",
      },
      {
        segments: [
          { text: "私[わたし]は バス停[バスてい]で " },
          { text: "友[とも]だちと", blank: true },
          {
            text: "待[ま]つ",
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Bus stop で before 友だちと — location before companion",
      },
      {
        segments: [
          { text: "友[とも]だちと", blank: true },
          { text: " バス停[バスてい]で" },
          {
            text: "待[ま]つ",
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Topic は dropped entirely — just 友だちと starting the sentence",
      },
      {
        segments: [
          { text: "私[わたし]が " },
          { text: "友[とも]だちと", blank: true },
          { text: " バス停[バスてい]で" },
          {
            text: "待[ま]つ",
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using が instead of は for the subject",
      },
    ],
  },
  {
    english: "There are dogs and cats here.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]と 猫[ねこ]", blank: true },
          { text: "はここにいます" },
        ],
        notes: "Emphasizing the presence of the animals.",
      },
      {
        segments: [
          { text: "ここに " },
          { text: "犬[いぬ]と 猫[ねこ]", blank: true },
          { text: "がいます" },
        ],
        notes: "Emphasizing the location in which the animals exist.",
      },
      {
        segments: [
          { text: "ここには " },
          { text: "犬[いぬ]と 猫[ねこ]", blank: true },
          { text: "がいます" },
        ],
        notes: "Highlighting the location more specifically.",
      },
      {
        segments: [
          { text: "犬[いぬ]と 猫[ねこ]", blank: true },
          { text: "がここにいます" },
        ],
        notes: "Emphasizing the presence of the animals.",
      },
    ],
  },
  {
    english: "Is Yuki meeting her older brother at the hospital today?",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんは 今日[きょう]、" },
          { text: "お 兄[にい]さんと", blank: true },
          { text: " 病院[びょういん]で" },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard word order: topic は, time, と, location, verb",
      },
      {
        segments: [
          { text: "今日[きょう]、ゆきさんは " },
          { text: "お 兄[にい]さんと", blank: true },
          { text: " 病院[びょういん]で" },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "今日 moved to the front of the sentence",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう]、 病院[びょういん]で " },
          { text: "お 兄[にい]さんと", blank: true },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Location (病院で) before と phrase",
      },
      {
        segments: [
          { text: "ゆきさんが 今日[きょう]、" },
          { text: "お 兄[にい]さんと", blank: true },
          { text: " 病院[びょういん]で" },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は for ゆき",
      },
      {
        segments: [
          { text: "お 兄[にい]さんと", blank: true },
          { text: "ゆきさんは 今日[きょう]、 病院[びょういん]で" },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "お兄さんと placed before ゆきは (mirroring pattern from sentence 7)",
      },
      {
        segments: [
          { text: "ゆきさんは 今日[きょう]、" },
          { text: "お 兄[にい]さんと", blank: true },
          { text: " 病院[びょういん]に" },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "病院に instead of 病院で — に can be used with 会う as a destination/location particle",
      },
    ],
  },
  {
    english: "Ayaka will go to Korea with Mayumi.",
    answers: [
      {
        segments: [
          { text: "彩香[あやか]さんは " },
          { text: "真由美[まゆみ]さんと", blank: true },
          { text: "韓国[かんこく]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "彩香[あやか]さんは 韓国[かんこく]に " },
          { text: "真由美[まゆみ]さんと", blank: true },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I went to Kyoto and Osaka.",
    answers: [
      {
        segments: [
          { text: "京都[きょうと]と 大阪[おおさか]", blank: true },
          { text: "に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I went to school with Shimizu.",
    answers: [
      {
        segments: [
          { text: "清水[しみず]さんと", blank: true },
          { text: "学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "清水[しみず]さんと", blank: true },
          { text: "学校[がっこう]へ" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "Sasaki bought bread and juice.",
    answers: [
      {
        segments: [
          { text: "佐々[ささ]木[き]さんは" },
          { text: "パンと ジュース", blank: true },
          { text: "を" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I met a friend at the park on Sunday.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に 公園[こうえん]で " },
          { text: "友[とも]だちに", blank: true },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard word order: time then location, particle に with 会う",
      },
      {
        segments: [
          { text: "私[わたし]は 公園[こうえん]で 日曜日[にちようび]に " },
          { text: "友[とも]だちに", blank: true },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Reversed order: location (公園で) before time (日曜日に)",
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に 公園[こうえん]で " },
          { text: "友[とも]だちと", blank: true },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          'Using particle と instead of に with 会う — 友だちと会った ("met with a friend")',
      },
      {
        segments: [
          { text: "私[わたし]が 日曜日[にちようび]に 公園[こうえん]で " },
          { text: "友[とも]だちに", blank: true },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: 'Using が instead of は — emphasizes "I" as the subject',
      },
      {
        segments: [
          { text: "私[わたし]は 日曜日[にちようび]に 公園[こうえん]で " },
          { text: "友人[ゆうじん]に", blank: true },
          {
            text: "会[あ]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 友人 (more formal synonym for friend) with に",
      },
    ],
  },
  {
    english: "I listened to music at the cafe yesterday.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、カフェで " },
          { text: "音楽[おんがく]を", blank: true },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Standard word order: 私は, time, location で, object を, 聞く",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は カフェで " },
          { text: "音楽[おんがく]を", blank: true },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "昨日 moved to sentence-initial position",
      },
      {
        segments: [
          { text: "私[わたし]は カフェで 昨日[きのう] " },
          { text: "音楽[おんがく]を", blank: true },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Location で before 昨日 (alternate adverb placement)",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう]、カフェで " },
          { text: "音楽[おんがく]を", blank: true },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は as subject marker",
      },
    ],
  },
  {
    english: "Fujita went shopping with me.",
    answers: [
      {
        segments: [
          { text: "藤田[ふじた]さんは " },
          { text: "私[わたし]と", blank: true },
          { text: "買い物[かいもの]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
]
