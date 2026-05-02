import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Among all the seasons, I like fall the best.",
    answers: [
      {
        segments: [
          { text: "季節[きせつ]の 中[なか]で", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes: "Standard structure: 季節の中で秋が一番好き",
      },
      {
        segments: [
          { text: "私[わたし]は 季節[きせつ]の 中[なか]で", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes: "With explicit 私は topic marker",
      },
      {
        segments: [
          { text: "季節[きせつ]の 中[なか]では", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes: "With は after で to emphasize the scope (季節の中では)",
      },
      {
        segments: [
          { text: "私[わたし]は 季節[きせつ]の 中[なか]では", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes: "With 私は and は after で",
      },
      {
        segments: [
          { text: "全[すべ]ての 季節[きせつ]の 中[なか]で、", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes: "全ての (all) prefix to emphasize \"out of all seasons\"",
      },
    ],
  },
  {
    english: "Among Saki's family, who is the tallest?",
    hint: "Saki = さき",
    answers: [
      {
        segments: [
          { text: "さきさんの 家族[かぞく]の" },
          { text: "中[なか]で 誰[だれ]が 一番[いちばん]", blank: true },
          { text: "背[せ]が" },
          {
            text: "高[たか]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard structure: 家族の中で誰が一番背が高いですか",
      },
      ],
  },
  {
    english: "Among all sports, soccer is the most fun!",
    answers: [
      {
        segments: [
          { text: "スポーツの 中[なか]で" },
          { text: "サッカーが 一番[いちばん]", blank: true },
          {
            text: "楽[たの]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic version with が particle",
      },
    ],
  },
  {
    english:
      "Among the food at this restaurant, the tempura is the most famous.",
    answers: [
      {
        segments: [
          { text: "この レストランの 食[た]べ 物[もの]の" },
          { text: "中[なか]で", blank: true },
          { text: "天[てん]ぷらが" },
          { text: "一番[いちばん]", blank: true },
          { text: "有名[ゆうめい]" },
          { text: "です" },
        ],
        notes: "Standard version using 食べ物",
      },
      {
        segments: [
          { text: "この レストランの 料理[りょうり]の" },
          { text: "中[なか]で", blank: true },
          { text: "天[てん]ぷらが" },
          { text: "一番[いちばん]", blank: true },
          { text: "有名[ゆうめい]" },
          { text: "です" },
        ],
        notes: "Using 料理 (dishes/cooking) instead of 食べ物",
      },
      {
        segments: [
          { text: "この レストランの 料理[りょうり]の" },
          { text: "中[なか]で", blank: true },
          { text: "天[てん]ぷらが" },
          { text: "一番[いちばん]", blank: true },
          { text: "有名[ゆうめい]" },
        ],
        notes: "Using 料理 without copula (bare な-adjective ending)",
      },
      {
        segments: [
          { text: "この レストランの 食[た]べ 物[もの]の" },
          { text: "中[なか]で", blank: true },
          { text: "天[てん]ぷらが" },
          { text: "一番[いちばん]", blank: true },
          { text: "有名[ゆうめい]" },
        ],
        notes: "Using 食べ物 without copula (bare な-adjective ending)",
      },
      {
        segments: [
          { text: "この レストランの 食[た]べ 物[もの]の" },
          { text: "中[なか]では", blank: true },
          { text: "天[てん]ぷらが" },
          { text: "一番[いちばん]", blank: true },
          { text: "有名[ゆうめい]" },
          { text: "です" },
        ],
        notes: "Using 中では with は particle for contrast/topic emphasis",
      },
      {
        segments: [
          { text: "この レストランの 料理[りょうり]の" },
          { text: "中[なか]では", blank: true },
          { text: "天[てん]ぷらが" },
          { text: "一番[いちばん]", blank: true },
          { text: "有名[ゆうめい]" },
          { text: "です" },
        ],
        notes: "Using 料理 with 中では for contrast/topic emphasis",
      },
      {
        segments: [
          { text: "この レストランの 食[た]べ 物[もの]の" },
          { text: "中[なか]では", blank: true },
          { text: "天[てん]ぷらが" },
          { text: "一番[いちばん]", blank: true },
          { text: "有名[ゆうめい]" },
        ],
        notes: "Using 食べ物 with 中では, no copula",
      },
      {
        segments: [
          { text: "この レストランの 料理[りょうり]の" },
          { text: "中[なか]では", blank: true },
          { text: "天[てん]ぷらが" },
          { text: "一番[いちばん]", blank: true },
          { text: "有名[ゆうめい]" },
        ],
        notes: "Using 料理 with 中では, no copula",
      },
    ],
  },
  {
    english: "Among all drinks, which one is the most delicious?",
    answers: [
      {
        segments: [
          { text: "飲[の]み 物[もの]の" },
          { text: "中[なか]で", blank: true },
          { text: "どれが" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard: 飲み物の中で + どれが + 一番おいしい",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の" },
          { text: "中[なか]で", blank: true },
          { text: "何[なに]が" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using 何が instead of どれが",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の" },
          { text: "中[なか]で", blank: true },
          { text: "どの 飲[の]み 物[もの]が" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using どの飲み物が instead of どれが",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の" },
          { text: "中[なか]では", blank: true },
          { text: "どれが" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using は after 中で for topic marking: 中では",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の" },
          { text: "中[なか]では", blank: true },
          { text: "何[なに]が" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using は after 中で with 何が instead of どれが",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の" },
          { text: "中[なか]では", blank: true },
          { text: "どの 飲[の]み 物[もの]が" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using は after 中で with どの飲み物が",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の" },
          { text: "中[なか]で", blank: true },
          { text: "一番[いちばん]", blank: true },
          { text: "おいしい" },
          { text: "のはどれ" },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "「一番おいしいのはどれ」 — \"which one is the most delicious\"",
      },
    ],
  },
  {
    english: "Among all the countries in the world, which one is the coldest?",
    answers: [
      {
        segments: [
          { text: "世界[せかい]の 国[くに]の" },
          { text: "中[なか]で", blank: true },
          { text: "どこが" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "寒[さむ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard version using どこ (which place)",
      },
      {
        segments: [
          { text: "世界[せかい]の 国[くに]の" },
          { text: "中[なか]で", blank: true },
          { text: "どの 国[くに]が" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "寒[さむ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using どの国 (which country) instead of どこ",
      },
      {
        segments: [
          { text: "世界[せかい]の" },
          { text: "中[なか]で", blank: true },
          { text: "どこが" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "寒[さむ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Shorter: 世界の中で without 国, using どこ",
      },
      {
        segments: [
          { text: "世界[せかい]の" },
          { text: "中[なか]で", blank: true },
          { text: "どの 国[くに]が" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "寒[さむ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Shorter: 世界の中で without 国, using どの国",
      },
    ],
  },
  {
    english: "Among Kenji's friends, who is the most interesting?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんの 友達[ともだち]の" },
          { text: "中[なか]で", blank: true },
          { text: "誰[だれ]が" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "面白[おもしろ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard structure with 友達の中で...誰が一番面白い",
      },
      {
        segments: [
          { text: "けんじさんの 友だちの" },
          { text: "中[なか]で", blank: true },
          { text: "誰[だれ]が" },
          { text: "一番[いちばん]", blank: true },
          {
            text: "面白[おもしろ]い",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Using 友だち (hiragana) instead of 友達",
      },
    ],
  },
  {
    english: "Among all the places in this town, the park is the quietest.",
    answers: [
      {
        segments: [
          { text: "この 町[まち]の" },
          { text: "中[なか]で", blank: true },
          { text: " 公園[こうえん]が" },
          { text: "一番[いちばん]", blank: true },
          { text: " 静[しず]か" },
          { text: "です" },
        ],
        notes: "Standard version with が particle",
      },
      {
        segments: [
          { text: "この 町[まち]の" },
          { text: "中[なか]で", blank: true },
          { text: " 公園[こうえん]が" },
          { text: "一番[いちばん]", blank: true },
          { text: " 静[しず]かな 所[ところ]" },
          { text: "です" },
        ],
        notes: "Using 静かな所です (the quietest place) with ところ",
      },
    ],
  },
  {
    english: "I ate breakfast in the car.",
    answers: [
      {
        segments: [
          { text: "車[くるま]" },
          { text: "のなかで", blank: true },
          { text: "朝[あさ]ご 飯[はん]を" },
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
        notes: "Standard with のなかで in hiragana",
      },
      {
        segments: [
          { text: "私[わたし]は 車[くるま]" },
          { text: "のなかで", blank: true },
          { text: "朝[あさ]ご 飯[はん]を" },
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
        notes: "With explicit subject 私は",
      },
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を 車[くるま]" },
          { text: "のなかで", blank: true },
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
        notes: "Reversed word order: 朝ご飯を first, then 車のなかで",
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]ご 飯[はん]を 車[くるま]" },
          { text: "のなかで", blank: true },
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
        notes: "With 私は and reversed word order",
      },
    ],
  },
  {
    english: "Among all of Naomi's brothers and sisters, who is the youngest?",
    hint: "Naomi = なおみ",
    answers: [
      {
        segments: [
          {
            text: "なおみさんの 兄弟[きょうだい]の 中[なか]で 誰[だれ]が 一番[いちばん]",
          },
          {
            text: "若[わか]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Standard version with 兄弟の中で, direct question with か",
      },
      ],
  },
  {
    english: "Among all fruits, I like strawberries the best!",
    answers: [
      {
        segments: [
          { text: "果物[くだもの]" },
          { text: "の 中[なか]でいちごが 一番[いちばん]", blank: true },
          { text: " 好[す]き" },
          { text: "です" },
        ],
        notes:
          "Standard pattern: 果物の中でいちごが一番 as blank, with です ending",
      },
      {
        segments: [
          { text: "私[わたし]は 果物[くだもの]" },
          { text: "の 中[なか]でいちごが 一番[いちばん]", blank: true },
          { text: " 好[す]き" },
          { text: "です" },
        ],
        notes: "With explicit subject 私は",
      },
      {
        segments: [
          { text: "果物[くだもの]" },
          { text: "の 中[なか]でいちごが 一番[いちばん]", blank: true },
          { text: " 好[す]き" },
        ],
        register: "casual",
        notes: "好き as a plain statement",
      },
    ],
  },
  {
    english: "I read a magazine in the train yesterday.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、" },
          { text: "電車[でんしゃ]のなかで", blank: true },
          { text: "雑誌[ざっし]を" },
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
        notes: "Standard word order, のなかで in hiragana",
      },
      {
        segments: [
          { text: "電車[でんしゃ]のなかで", blank: true },
          { text: "昨日[きのう]、雑誌[ざっし]を" },
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
        notes: "のなかで at the start, 昨日 after",
      },
      {
        segments: [
          { text: "昨日[きのう]、雑誌[ざっし]を" },
          { text: "電車[でんしゃ]のなかで", blank: true },
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
        notes: "Object before location: 雑誌を電車のなかで読んだ",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、" },
          { text: "電車[でんしゃ]のなかで", blank: true },
          { text: "雑誌[ざっし]を" },
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
        notes: "With explicit 私は subject",
      },
    ],
  },
  {
    english: "Among all songs, which one is the most difficult?",
    answers: [
      {
        segments: [
          { text: "歌[うた]の 中[なか]で" },
          { text: "どれが 一番[いちばん]", blank: true },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          "Standard: 歌の中で + どれが一番 + 難しいですか (polite) / 難しい？ (casual)",
      },
      {
        segments: [
          { text: "歌[うた]の 中[なか]で" },
          { text: "どの 歌[うた]が 一番[いちばん]", blank: true },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          'Using どの歌が instead of どれが - "which song" instead of "which one"',
      },
      {
        segments: [
          { text: "歌[うた]の 中[なか]で" },
          { text: "何[なに]が 一番[いちばん]", blank: true },
          {
            text: "難[むずか]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: 'Using 何が instead of どれが - "what" instead of "which one"',
      },
      ],
  },
  {
    english: "Among all my classes, I like history the best.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の クラス" },
          { text: "の 中[なか]で 歴史[れきし]が 一番[いちばん]", blank: true },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes:
          "Standard version using クラス (known vocabulary), 好き as predicate",
      },
      {
        segments: [
          { text: "私[わたし]の クラス" },
          {
            text: "の 中[なか]では 歴史[れきし]が 一番[いちばん]",
            blank: true,
          },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Adding は after の中で for contrast/topic marking",
      },
      {
        segments: [
          { text: "クラス" },
          { text: "の 中[なか]で 歴史[れきし]が 一番[いちばん]", blank: true },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Dropping 私の - implied from context",
      },
      {
        segments: [
          { text: "クラス" },
          {
            text: "の 中[なか]では 歴史[れきし]が 一番[いちばん]",
            blank: true,
          },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Dropping 私の, with は after の中で",
      },
    ],
  },
  {
    english: "Among everyone in the dormitory, Takeshi is the most energetic.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "寮[りょう]の 皆[みんな]の" },
          { text: "中[なか]で", blank: true },
          { text: "たけしさんが" },
          { text: "一番[いちばん]", blank: true },
          { text: "元気[げんき]" },
          { text: "です" },
        ],
        notes: "Standard: 寮の皆の中で with 皆 in kanji",
      },
      {
        segments: [
          { text: "寮[りょう]のみんなの" },
          { text: "中[なか]で", blank: true },
          { text: "たけしさんが" },
          { text: "一番[いちばん]", blank: true },
          { text: "元気[げんき]" },
          { text: "です" },
        ],
        notes: "Using みんな in hiragana instead of kanji 皆",
      },
      {
        segments: [
          { text: "寮[りょう]の" },
          { text: "中[なか]で", blank: true },
          { text: "たけしさんが" },
          { text: "一番[いちばん]", blank: true },
          { text: "元気[げんき]" },
          { text: "です" },
        ],
        notes: "Without 皆/みんな - 寮の中で implying among people in the dorm",
      },
      ],
  },
  {
    english: "Among all vegetables, which one is the cheapest?",
    answers: [
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]でどれが 一番[いちばん]" },
          {
            text: "安[やす]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "どれが asks which one",
      },
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]で 何[なに]が 一番[いちばん]" },
          {
            text: "安[やす]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "何が instead of どれが",
      },
      ],
  },
  {
    english: "Among everyone at the company, Rina is the busiest.",
    hint: "Rina = りな",
    answers: [
      {
        segments: [
          { text: "会社[かいしゃ]の 皆[みんな]の 中[なか]で" },
          { text: "りなさんが 一番[いちばん]", blank: true },
          {
            text: "忙[いそが]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "会社[かいしゃ]のみんなの中[なか]でりなさんが一番[いちばん]",
          },
          {
            text: "忙[いそが]しい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "会社[かいしゃ]の 皆[みんな]の中[なか]でりなさんは一番[いちばん]",
          },
          {
            text: "忙[いそが]しい",
            conjugation: {
              pos: "I-adjective",
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
    english:
      "Among all the animals at the zoo, which one is the most frightening?",
    answers: [
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]で" },
          { text: "どれが 一番[いちばん] 怖[こわ]いか", blank: true },
        ],
      },
      {
        segments: [
          {
            text: "動物園[どうぶつえん]の動物[どうぶつ]のなかでどれが一番[いちばん]怖[こわ]いか",
          },
        ],
      },
    ],
  },
  {
    english: "Among all the languages I study, Japanese is the most difficult.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が 勉強[べんきょう]している 言語[げんご]の 中[なか]で" },
          { text: "日本語[にほんご]が 一番[いちばん]", blank: true },
          {
            text: "難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "私が勉強している言語の中で means among the languages I study.",
      },
      {
        segments: [
          { text: "私[わたし]が 勉強[べんきょう]している 言語[げんご]のなかで 日本語[にほんご]が 一番[いちばん]" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "なかで written in hiragana",
      },
      {
        segments: [
          { text: "勉強[べんきょう]している 言語[げんご]の 中[なか]で 日本語[にほんご]が 一番[いちばん]" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私が at the start",
      },
      {
        segments: [
          { text: "勉強[べんきょう]している 言語[げんご]のなかで 日本語[にほんご]が 一番[いちばん]" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私の, なかで in hiragana",
      },
    ],
  },
  {
    english: "Among all the celebrities Hana knows, who is the most famous?",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんが 知[し]っている" },
          { text: "有名人[ゆうめいじん]の 中[なか]で" },
          { text: "誰[だれ]が 一番[いちばん]有名[ゆうめい]", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          {
            text: "はなさんが 知[し]っている 有名人[ゆうめいじん]の中[なか]で誰[だれ]が一番[いちばん]有名[ゆうめい]ですか",
          },
        ],
        register: "polite",
        notes: "ですか question ending",
      },
      {
        segments: [
          {
            text: "はなさんの知[し]っている 有名人[ゆうめいじん]の 中[なか]で誰[だれ]が一番[いちばん]有名[ゆうめい]か",
          },
        ],
        notes: "の instead of が for the possessive of はな",
      },
      {
        segments: [
          {
            text: "はなさんの知[し]っている 有名人[ゆうめいじん]の 中[なか]で誰[だれ]が一番[いちばん]有名[ゆうめい]ですか",
          },
        ],
        register: "polite",
        notes: "の possessive + ですか question ending",
      },
      {
        segments: [
          {
            text: "はなさんが 知[し]っている 有名人[ゆうめいじん]のなかで誰[だれ]が一番[いちばん]有名[ゆうめい]か",
          },
        ],
        notes: "のなか written without space as のなかで",
      },
      {
        segments: [
          {
            text: "はなさんが 知[し]っている 有名人[ゆうめいじん]のなかで誰[だれ]が一番[いちばん]有名[ゆうめい]ですか",
          },
        ],
        register: "polite",
        notes: "のなかで + ですか question ending",
      },
    ],
  },
]
