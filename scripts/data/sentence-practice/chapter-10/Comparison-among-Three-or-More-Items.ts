import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Among all the seasons, I like fall the best.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 季節[きせつ]の 中[なか]で", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes:
          "With explicit 私は topic marker; pronounless variant is generated automatically.",
      },
      {
        segments: [
          { text: "私[わたし]は 季節[きせつ]の 中[なか]では", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes:
          "With 私は and は after で; pronounless variant is generated automatically.",
      },
      {
        segments: [
          { text: "全[すべ]ての 季節[きせつ]の 中[なか]で、", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes: "全ての (all) prefix to emphasize \"out of all seasons\"",
      },
      {
        segments: [
          { text: "四季[しき]の 中[なか]で、", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes: "四季 means the four seasons; natural for this context.",
      },
      {
        segments: [
          { text: "季節[きせつ]では、", blank: true },
          { text: "秋[あき]が 一番[いちばん] 好[す]き", blank: true },
          { text: "です" },
        ],
        notes: "Concise scope variant.",
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
        notes: "Standard structure: 家族の中で誰が一番背が高いですか",
      },
      {
        segments: [
          { text: "さきさんの 家族[かぞく]の 中[なか]では 誰[だれ]が 一番[いちばん] 背[せ]が" },
          {
            text: "高[たか]い",
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
        notes: "Uses 中では for the comparison scope.",
      },
      {
        segments: [
          { text: "さきさんの 家族[かぞく]で 誰[だれ]が 一番[いちばん] 背[せ]が" },
          {
            text: "高[たか]い",
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
        notes: "Uses 家族で instead of 家族の中で.",
      },
      {
        segments: [
          { text: "さきさんの 家族[かぞく]では 誰[だれ]が 一番[いちばん] 背[せ]が" },
          {
            text: "高[たか]い",
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
        notes: "Uses 家族では for the comparison scope.",
      },
      {
        segments: [
          {
            text: "さきさんの 家族[かぞく]の 中[なか]で 一番[いちばん] 背[せ]が 高[たか]い 人[ひと]は 誰[だれ]ですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Asks who the tallest person is; 高い is fixed inside the relative clause before 人.",
      },
      {
        segments: [
          {
            text: "さきさんの 家族[かぞく]で 一番[いちばん] 背[せ]が 高[たか]い 人[ひと]は 誰[だれ]ですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "家族で variant of 一番背が高い人は誰ですか; 高い is fixed inside the relative clause.",
      },
    ],
  },
  {
    english: "Among all the sports at school, soccer is the most fun!",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]のスポーツの 中[なか]で、サッカーが 一番[いちばん]" },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses が to mark the item chosen as number one.",
      },
      {
        segments: [
          { text: "学校[がっこう]のスポーツの 中[なか]では、サッカーが 一番[いちばん]" },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 中では for the comparison scope.",
      },
      {
        segments: [
          { text: "学校[がっこう]でするスポーツの 中[なか]で、サッカーが 一番[いちばん]" },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 学校でするスポーツ for sports done at school.",
      },
      {
        segments: [
          { text: "学校[がっこう]のスポーツでは、サッカーが 一番[いちばん]" },
          {
            text: "楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Concise 学校のスポーツでは variant.",
      },
      {
        segments: [
          { text: "学校[がっこう]のスポーツの 中[なか]で、サッカーが 一番[いちばん]" },
          {
            text: "面白[おもしろ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 面白い as a natural fun/interesting variant.",
      },
      {
        segments: [
          { text: "学校[がっこう]のスポーツの 中[なか]で、サッカーが 一番[いちばん] 楽[たの]しいと" },
          {
            text: "思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Opinion variant matching the exclamation tone.",
      },
    ],
  },
  {
    english:
      "Among the food at this restaurant, the tempura is the most famous.",
    answers: [
      {
        segments: [
          { text: "この レストランの 料理[りょうり]の 中[なか]で 天[てん]ぷらが 一番[いちばん]" },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 料理 (dishes/menu items) for restaurant food.",
      },
      {
        segments: [
          { text: "この レストランの 食[た]べ 物[もの]の 中[なか]で 天[てん]ぷらが 一番[いちばん]" },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 食べ物 for food.",
      },
      {
        segments: [
          { text: "この レストランの 料理[りょうり]の 中[なか]では 天[てん]ぷらが 一番[いちばん]" },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 料理 with 中では for contrast/topic emphasis.",
      },
      {
        segments: [
          { text: "この レストランの 食[た]べ 物[もの]の 中[なか]では 天[てん]ぷらが 一番[いちばん]" },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 食べ物 with 中では.",
      },
      {
        segments: [
          { text: "この レストランでは 天[てん]ぷらが 一番[いちばん]" },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Natural concise restaurant-scope variant.",
      },
      {
        segments: [
          { text: "この レストランの メニューの 中[なか]で 天[てん]ぷらが 一番[いちばん]" },
          {
            text: "有名[ゆうめい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses メニュー for menu items.",
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
          { text: "一番[いちばん] おいしいのは どれですか", blank: true },
        ],
        register: "polite",
        notes: "「一番おいしいのはどれ」 — polite form.",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の" },
          { text: "中[なか]で", blank: true },
          { text: "一番[いちばん] おいしいのは どれ", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to どれですか.",
      },
      {
        segments: [
          { text: "全部[ぜんぶ]の 飲[の]み 物[もの]の 中[なか]で どれが 一番[いちばん]" },
          {
            text: "おいしい",
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
        notes: "全部の emphasizes all drinks.",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]では どれが 一番[いちばん]" },
          {
            text: "おいしい",
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
        notes: "Concise 飲み物では scope variant.",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の 中[なか]で 一番[いちばん] おいしい 飲[の]み 物[もの]は どれですか", blank: true },
        ],
        register: "polite",
        notes: "Asks which drink is the most delicious; polite form.",
      },
      {
        segments: [
          { text: "飲[の]み 物[もの]の 中[なか]で 一番[いちばん] おいしい 飲[の]み 物[もの]は どれ", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番おいしい飲み物はどれですか.",
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
        notes: "Uses どこ for “which place.”"
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
          { text: "世界[せかい]の 国[くに]の 中[なか]では どの 国[くに]が 一番[いちばん]" },
          {
            text: "寒[さむ]い",
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
        notes: "Uses 中では with どの国.",
      },
      {
        segments: [
          { text: "世界[せかい]の 国[くに]の 中[なか]では どこが 一番[いちばん]" },
          {
            text: "寒[さむ]い",
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
        notes: "Uses 中では with どこ.",
      },
      {
        segments: [
          { text: "世界中[せかいじゅう]の 国[くに]の 中[なか]で どの 国[くに]が 一番[いちばん]" },
          {
            text: "寒[さむ]い",
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
        notes: "Uses 世界中の国 for countries around the world.",
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
      {
        segments: [
          { text: "けんじさんの 友達[ともだち]の 中[なか]では 誰[だれ]が 一番[いちばん]" },
          {
            text: "面白[おもしろ]い",
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
        notes: "Uses 中では for the comparison scope.",
      },
      {
        segments: [
          { text: "けんじさんの 友達[ともだち]では 誰[だれ]が 一番[いちばん]" },
          {
            text: "面白[おもしろ]い",
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
        notes: "Concise 友達では variant.",
      },
      {
        segments: [
          {
            text: "けんじさんの 友達[ともだち]の 中[なか]で 一番[いちばん] 面白[おもしろ]い 人[ひと]は 誰[だれ]ですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Asks who the most interesting person is; 面白い is fixed inside the relative clause.",
      },
      {
        segments: [
          {
            text: "けんじさんの 友だちの 中[なか]で 一番[いちばん] 面白[おもしろ]い 人[ひと]は 誰[だれ]ですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "友だち spelling with relative clause.",
      },
    ],
  },
  {
    english: "In this town, the park is the quietest place.",
    answers: [
      {
        segments: [
          { text: "この 町[まち]の 中[なか]で 公園[こうえん]が 一番[いちばん]" },
          {
            text: "静[しず]か",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses が to mark the place chosen as number one.",
      },
      {
        segments: [
          { text: "この 町[まち]では 公園[こうえん]が 一番[いちばん]" },
          {
            text: "静[しず]か",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses この町では for the town scope.",
      },
      {
        segments: [
          { text: "この 町[まち]の 中[なか]では 公園[こうえん]が 一番[いちばん]" },
          {
            text: "静[しず]か",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 中では for the comparison scope.",
      },
      {
        segments: [
          { text: "この 町[まち]の 場所[ばしょ]の 中[なか]で 公園[こうえん]が 一番[いちばん]" },
          {
            text: "静[しず]か",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 場所の中で for places in town.",
      },
      {
        segments: [
          {
            text: "この 町[まち]の 中[なか]で 公園[こうえん]が 一番[いちばん] 静[しず]かな 所[ところ]です",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Uses 静かな所です (the quietest place) with ところ.",
      },
      {
        segments: [
          {
            text: "この 町[まち]では 公園[こうえん]が 一番[いちばん] 静[しず]かな 所[ところ]です",
            blank: true,
          },
        ],
        register: "polite",
        notes: "この町では variant with 静かな所です.",
      },
    ],
  },
  {
    english: "Among all the rooms at school, the library is the quietest.",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]の 部屋[へや]の 中[なか]で 図書館[としょかん]が 一番[いちばん]" },
          {
            text: "静[しず]か",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 部屋の中で for rooms at school.",
      },
      {
        segments: [
          { text: "学校[がっこう]の 中[なか]で 図書館[としょかん]が 一番[いちばん]" },
          {
            text: "静[しず]か",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Broader school-scope variant.",
      },
      {
        segments: [
          { text: "学校[がっこう]では 図書館[としょかん]が 一番[いちばん]" },
          {
            text: "静[しず]か",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 学校では for the comparison scope.",
      },
      {
        segments: [
          {
            text: "学校[がっこう]の 場所[ばしょ]の 中[なか]で 図書館[としょかん]が 一番[いちばん] 静[しず]かな 所[ところ]です",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Uses 静かな所です for 'the quietest place'.",
      },
    ],
  },
  {
    english: "Among all of Naomi's brothers, who is the youngest?",
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
      {
        segments: [
          { text: "なおみさんの 兄弟[きょうだい]の 中[なか]では 誰[だれ]が 一番[いちばん]" },
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
        notes: "Uses 中では for the comparison scope.",
      },
      {
        segments: [
          { text: "なおみさんの 兄弟[きょうだい]で 誰[だれ]が 一番[いちばん]" },
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
        notes: "Uses 兄弟で instead of 兄弟の中で.",
      },
      {
        segments: [
          { text: "なおみさんの 兄弟[きょうだい]では 誰[だれ]が 一番[いちばん]" },
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
        notes: "Uses 兄弟では for the comparison scope.",
      },
      {
        segments: [
          {
            text: "なおみさんの 兄弟[きょうだい]の 中[なか]で 一番[いちばん] 若[わか]い 人[ひと]は 誰[だれ]ですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Asks who the youngest person is; 若い is fixed inside the relative clause.",
      },
      {
        segments: [
          {
            text: "なおみさんの 兄弟[きょうだい]の 中[なか]で 一番[いちばん] 年下[としした]なのは 誰[だれ]ですか",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Uses 年下 for youngest in sibling age order.",
      },
    ],
  },
  {
    english: "Among all fruits, I like strawberries the best!",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 果物[くだもの]の 中[なか]で いちごが 一番[いちばん]", blank: true },
          { text: " 好[す]き" },
          { text: "です" },
        ],
        notes:
          "With explicit 私は; pronounless variants are generated automatically.",
      },
      {
        segments: [
          { text: "私[わたし]は 果物[くだもの]の 中[なか]では いちごが 一番[いちばん]", blank: true },
          { text: " 好[す]き" },
          { text: "です" },
        ],
        notes: "With 中では and explicit 私は.",
      },
      {
        segments: [
          { text: "全[すべ]ての 果物[くだもの]の 中[なか]で、いちごが 一番[いちばん]", blank: true },
          { text: " 好[す]き" },
          { text: "です" },
        ],
        notes: "全ての emphasizes all fruits.",
      },
      {
        segments: [
          { text: "果物[くだもの]では、いちごが 一番[いちばん]", blank: true },
          { text: " 好[す]き" },
          { text: "です" },
        ],
        notes: "Concise 果物では scope variant.",
      },
      {
        segments: [
          { text: "フルーツの 中[なか]で、いちごが 一番[いちばん]", blank: true },
          { text: " 好[す]き" },
          { text: "です" },
        ],
        notes: "フルーツ loanword variant.",
      },
    ],
  },
  {
    english: "Among the reading materials on the train, magazines are the most common.",
    answers: [
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]にある 読[よ]み 物[もの]の 中[なか]で、雑誌[ざっし]が 一番[いちばん]" },
          {
            text: "多[おお]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 読み物 for reading materials and 一番多い for most common/most numerous.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]にある 読[よ]み 物[もの]の 中[なか]で、雑誌[ざっし]が 一番[いちばん]" },
          {
            text: "多[おお]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 電車にある instead of 電車の中にある.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]の 読[よ]み 物[もの]の 中[なか]で、雑誌[ざっし]が 一番[いちばん]" },
          {
            text: "多[おお]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 電車の中の読み物.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 読[よ]み 物[もの]の 中[なか]で、雑誌[ざっし]が 一番[いちばん]" },
          {
            text: "多[おお]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Compressed 電車の読み物 variant.",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]にある 読[よ]む 物[もの]の 中[なか]で、雑誌[ざっし]が 一番[いちばん]" },
          {
            text: "多[おお]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "More literal 読む物 variant.",
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
      {
        segments: [
          { text: "歌[うた]の 中[なか]では どれが 一番[いちばん]" },
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
          { text: "か" },
        ],
        notes: "Uses 中では with どれが.",
      },
      {
        segments: [
          { text: "歌[うた]の 中[なか]では どの 歌[うた]が 一番[いちばん]" },
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
          { text: "か" },
        ],
        notes: "Uses 中では with どの歌が.",
      },
      {
        segments: [
          { text: "歌[うた]の 中[なか]で 一番[いちばん] 難[むずか]しい 歌[うた]は どれですか", blank: true },
        ],
        register: "polite",
        notes: "Polite 一番難しい歌はどれですか variant.",
      },
      {
        segments: [
          { text: "歌[うた]の 中[なか]で 一番[いちばん] 難[むずか]しい 歌[うた]は どれ", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番難しい歌はどれですか.",
      },
      {
        segments: [
          { text: "歌[うた]の 中[なか]で 一番[いちばん] 難[むずか]しいのは どれですか", blank: true },
        ],
        register: "polite",
        notes: "Polite 一番難しいのはどれですか variant.",
      },
      {
        segments: [
          { text: "歌[うた]の 中[なか]で 一番[いちばん] 難[むずか]しいのは どれ", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番難しいのはどれですか.",
      },
    ],
  },
  {
    english: "Among all my classes, I like history the best.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 授業[じゅぎょう]の 中[なか]で 歴史[れきし]が 一番[いちばん]", blank: true },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Uses 授業 for academic classes.",
      },
      {
        segments: [
          {
            text: "私[わたし]の 授業[じゅぎょう]の 中[なか]では 歴史[れきし]が 一番[いちばん]",
            blank: true,
          },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Adding は after の中で for contrast/topic marking.",
      },
      {
        segments: [
          { text: "私[わたし]の 科目[かもく]の 中[なか]で 歴史[れきし]が 一番[いちばん]", blank: true },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Uses 科目 for school subjects.",
      },
      {
        segments: [
          { text: "取[と]っている 授業[じゅぎょう]の 中[なか]で 歴史[れきし]が 一番[いちばん]", blank: true },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Natural variant meaning among the classes I am taking.",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]の 中[なか]で 歴史[れきし]が 一番[いちばん]", blank: true },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Context-implied my classes.",
      },
      {
        segments: [
          { text: "科目[かもく]の 中[なか]で 歴史[れきし]が 一番[いちばん]", blank: true },
          { text: "好[す]き" },
          { text: "です" },
        ],
        notes: "Context-implied my subjects.",
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
        notes: "Uses 寮の皆の中で with 皆 in kanji."
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
      {
        segments: [
          { text: "寮[りょう]のみんなの 中[なか]では たけしさんが 一番[いちばん]", blank: true },
          { text: "元気[げんき]" },
          { text: "です" },
        ],
        notes: "Uses 中では with みんな.",
      },
      {
        segments: [
          { text: "寮[りょう]の 皆[みんな]の 中[なか]では たけしさんが 一番[いちばん]", blank: true },
          { text: "元気[げんき]" },
          { text: "です" },
        ],
        notes: "Uses 中では with 皆.",
      },
      {
        segments: [
          {
            text: "寮[りょう]のみんなの 中[なか]で 一番[いちばん] 元気[げんき]な 人[ひと]は たけしさんです",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Uses 元気な人 with 元気 fixed before 人.",
      },
      {
        segments: [
          {
            text: "寮[りょう]の 中[なか]で 一番[いちばん] 元気[げんき]な 人[ひと]は たけしさんです",
            blank: true,
          },
        ],
        register: "polite",
        notes: "Concise 寮の中で variant with 元気な人.",
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
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]では どれが 一番[いちばん]" },
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
        notes: "Uses 中では with どれが.",
      },
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]で どの 野菜[やさい]が 一番[いちばん]" },
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
        notes: "Uses どの野菜が for which vegetable.",
      },
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]では どの 野菜[やさい]が 一番[いちばん]" },
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
        notes: "Uses 中では with どの野菜が.",
      },
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]で 一番[いちばん] 安[やす]い 野菜[やさい]は どれですか", blank: true },
        ],
        register: "polite",
        notes: "Polite 一番安い野菜はどれですか variant.",
      },
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]で 一番[いちばん] 安[やす]い 野菜[やさい]は どれ", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番安い野菜はどれですか.",
      },
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]で 一番[いちばん] 安[やす]いのは どれですか", blank: true },
        ],
        register: "polite",
        notes: "Polite 一番安いのはどれですか variant.",
      },
      {
        segments: [
          { text: "野菜[やさい]の 中[なか]で 一番[いちばん] 安[やす]いのは どれ", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番安いのはどれですか.",
      },
    ],
  },
  {
    english: "Among everyone at the company, Rina is the busiest.",
    hint: "Rina = りな",
    answers: [
      {
        segments: [
          { text: "会社[かいしゃ]の 皆[みんな]の 中[なか]で りなさんが 一番[いちばん]", blank: true },
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
        notes: "Uses 会社の皆の中で with 皆 in kanji.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]のみんなの 中[なか]で りなさんが 一番[いちばん]", blank: true },
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
        notes: "Uses みんな in hiragana.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 皆[みんな]の 中[なか]で りなさんは 一番[いちばん]", blank: true },
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
        notes: "Uses は for Rina as topic.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]のみんなの 中[なか]では りなさんが 一番[いちばん]", blank: true },
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
        notes: "Uses 中では with みんな.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 皆[みんな]の 中[なか]では りなさんが 一番[いちばん]", blank: true },
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
        notes: "Uses 中では with 皆.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 中[なか]で りなさんが 一番[いちばん]", blank: true },
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
        notes: "Concise 会社の中で variant.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]のみんなの 中[なか]で 一番[いちばん] 忙[いそが]しい 人[ひと]は りなさんです", blank: true },
        ],
        register: "polite",
        notes: "Uses 忙しい人 with 忙しい fixed before 人.",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 中[なか]で 一番[いちばん] 忙[いそが]しい 人[ひと]は りなさんです", blank: true },
        ],
        register: "polite",
        notes: "Concise 会社の中で variant with 忙しい人.",
      },
    ],
  },
  {
    english: "Among all the animals at the zoo, which one is the scariest?",
    answers: [
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]で どれが 一番[いちばん]" },
          {
            text: "怖[こわ]い",
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
        notes: "Standard どれが question.",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]では どれが 一番[いちばん]" },
          {
            text: "怖[こわ]い",
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
        notes: "Uses 中では with どれが.",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]で どの 動物[どうぶつ]が 一番[いちばん]" },
          {
            text: "怖[こわ]い",
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
        notes: "Uses どの動物が for which animal.",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]では どの 動物[どうぶつ]が 一番[いちばん]" },
          {
            text: "怖[こわ]い",
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
        notes: "Uses 中では with どの動物が.",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の 中[なか]で どの 動物[どうぶつ]が 一番[いちばん]" },
          {
            text: "怖[こわ]い",
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
        notes: "Concise 動物園の中で variant.",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]で 一番[いちばん] 怖[こわ]い 動物[どうぶつ]は どれですか", blank: true },
        ],
        register: "polite",
        notes: "Polite 一番怖い動物はどれですか variant.",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]で 一番[いちばん] 怖[こわ]い 動物[どうぶつ]は どれ", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番怖い動物はどれですか.",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]で 一番[いちばん] 怖[こわ]いのは どれですか", blank: true },
        ],
        register: "polite",
        notes: "Polite 一番怖いのはどれですか variant.",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の 動物[どうぶつ]の 中[なか]で 一番[いちばん] 怖[こわ]いのは どれ", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番怖いのはどれですか.",
      },
    ],
  },
  {
    english: "Among all the languages I study, Japanese is the most difficult.",
    answers: [
      {
        segments: [
          { text: "勉強[べんきょう]している 言語[げんご]の 中[なか]で 日本語[にほんご]が 一番[いちばん]", blank: true },
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
        notes: "Context-implied subject; among the languages I study.",
      },
      {
        segments: [
          { text: "私[わたし]が 勉強[べんきょう]している 言語[げんご]の 中[なか]で 日本語[にほんご]が 一番[いちばん]", blank: true },
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
        notes: "Explicit 私が inside the relative clause.",
      },
      {
        segments: [
          { text: "勉強[べんきょう]している 言語[げんご]の 中[なか]では 日本語[にほんご]が 一番[いちばん]", blank: true },
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
        notes: "Uses 中では.",
      },
      {
        segments: [
          { text: "私[わたし]が 勉強[べんきょう]している 言語[げんご]の 中[なか]では 日本語[にほんご]が 一番[いちばん]", blank: true },
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
        notes: "Explicit 私が with 中では.",
      },
      {
        segments: [
          { text: "勉強[べんきょう]している 言葉[ことば]の 中[なか]で 日本語[にほんご]が 一番[いちばん]", blank: true },
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
        notes: "Uses 言葉 as a common alternative to 言語.",
      },
      {
        segments: [
          { text: "勉強[べんきょう]している 言語[げんご]の 中[なか]で 一番[いちばん] 難[むずか]しい 言語[げんご]は 日本語[にほんご]です", blank: true },
        ],
        register: "polite",
        notes: "Polite relative-noun variant with 難しい fixed before 言語.",
      },
      {
        segments: [
          { text: "勉強[べんきょう]している 言語[げんご]の 中[なか]で 一番[いちばん] 難[むずか]しい 言語[げんご]は 日本語[にほんご]", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番難しい言語は日本語です.",
      },
      {
        segments: [
          { text: "勉強[べんきょう]している 言葉[ことば]の 中[なか]で 一番[いちばん] 難[むずか]しいのは 日本語[にほんご]です", blank: true },
        ],
        register: "polite",
        notes: "Polite 一番難しいのは日本語です variant.",
      },
      {
        segments: [
          { text: "勉強[べんきょう]している 言葉[ことば]の 中[なか]で 一番[いちばん] 難[むずか]しいのは 日本語[にほんご]", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番難しいのは日本語です.",
      },
    ],
  },
  {
    english: "Among all the players on the soccer team, who is the best?",
    hint: "soccer team = サッカーチーム",
    answers: [
      {
        segments: [
          { text: "サッカーチームの 選手[せんしゅ]の 中[なか]で 誰[だれ]が 一番[いちばん]" },
          { text: "上手[じょうず]", blank: true },
          { text: "ですか" },
        ],
        register: "polite",
        notes: "Standard polite question with 選手の中で.",
      },
      {
        segments: [
          { text: "サッカーチームの 選手[せんしゅ]の 中[なか]で 誰[だれ]が 一番[いちばん]" },
          { text: "上手[じょうず]", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 誰が一番上手ですか.",
      },
      {
        segments: [
          { text: "サッカーチームの 選手[せんしゅ]の 中[なか]では 誰[だれ]が 一番[いちばん]" },
          { text: "上手[じょうず]", blank: true },
          { text: "ですか" },
        ],
        register: "polite",
        notes: "Uses 中では with 選手.",
      },
      {
        segments: [
          { text: "サッカーチームの 選手[せんしゅ]の 中[なか]では 誰[だれ]が 一番[いちばん]" },
          { text: "上手[じょうず]", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 中では variant.",
      },
      {
        segments: [
          { text: "サッカーチームの 中[なか]で 誰[だれ]が 一番[いちばん]" },
          { text: "上手[じょうず]", blank: true },
          { text: "ですか" },
        ],
        register: "polite",
        notes: "Concise サッカーチームの中で variant.",
      },
      {
        segments: [
          { text: "サッカーチームの 中[なか]で 誰[だれ]が 一番[いちばん]" },
          { text: "上手[じょうず]", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to サッカーチームの中で variant.",
      },
      {
        segments: [
          { text: "サッカーチームで 誰[だれ]が 一番[いちばん]" },
          { text: "上手[じょうず]", blank: true },
          { text: "ですか" },
        ],
        register: "polite",
        notes: "Natural compressed サッカーチームで variant.",
      },
      {
        segments: [
          { text: "サッカーチームで 誰[だれ]が 一番[いちばん]" },
          { text: "上手[じょうず]", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to サッカーチームで variant.",
      },
      {
        segments: [
          { text: "サッカーチームの 選手[せんしゅ]の 中[なか]で 一番[いちばん] 上手[じょうず]な 人[ひと]は 誰[だれ]ですか", blank: true },
        ],
        register: "polite",
        notes: "Uses 上手な人 with 上手な fixed before 人.",
      },
      {
        segments: [
          { text: "サッカーチームの 選手[せんしゅ]の 中[なか]で 一番[いちばん] 上手[じょうず]な 人[ひと]は 誰[だれ]", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to 一番上手な人は誰ですか.",
      },
      {
        segments: [
          { text: "サッカーチームの 中[なか]で 一番[いちばん] 上手[じょうず]な 人[ひと]は 誰[だれ]ですか", blank: true },
        ],
        register: "polite",
        notes: "Concise サッカーチームの中で variant with 上手な人.",
      },
      {
        segments: [
          { text: "サッカーチームの 中[なか]で 一番[いちばん] 上手[じょうず]な 人[ひと]は 誰[だれ]", blank: true },
        ],
        register: "casual",
        notes: "Casual counterpart to concise 上手な人 variant.",
      },
    ],
  }, 
]
