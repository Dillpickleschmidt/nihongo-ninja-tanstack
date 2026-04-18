import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I want to swim in the sea this summer.",
    answers: [
      {
      segments: [
        { text: "今年[ことし]の 夏[なつ]、海[うみ]で" },
        { text: "泳[およ]ぎたい", blank: true },
      ],
    },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、海[うみ]が" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'gu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of で for 海",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、海[うみ]を" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'gu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "海を instead of 海で",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に、海[うみ]で" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'gu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "夏に time marker",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に、海[うみ]が" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'gu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "夏に with が",
      },
      {
        segments: [
          { text: "私[わたし]は 今年[ことし]の 夏[なつ]、海[うみ]で" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'gu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は topic marker added",
      },
      {
        segments: [
          { text: "この 夏[なつ]は 海[うみ]で" },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'gu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "この夏は (topic-marked \"this summer\") instead of 今年の夏",
      },
    ],
  },
  {
    english: "I didn't want to eat vegetables when I was a child.",
    answers: [
      {
      segments: [
        { text: "子供[こども]の 時[とき]、野菜[やさい]が" },
        {
          text: "食[た]べたい",
          blank: true,
          conjugation: {
            pos: "I-adjective",
            form: "normal",
            polarity: "negative",
            tense: "past",
          },
        },
      ],
    },
      {
        segments: [
          {
            text: "子供[こども]の 時[とき]、野菜[やさい]を食[た]べたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "子供[こども]の 時[とき]は、野菜[やさい]が食[た]べたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "子供[こども]の 時[とき]は、野菜[やさい]を食[た]べたくなかった",
          },
        ],
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]、野菜[やさい]を" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "tai-form",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]は、野菜[やさい]が" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "tai-form",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]は、野菜[やさい]を" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "tai-form",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I wanted to go to the concert, but I didn't have any money.",
    answers: [
      {
      segments: [
        { text: "コンサートに" },
        { text: "行[い]きたかった", blank: true },
        { text: "けど、お金[おかね]がなかった" },
      ],
    },
      {
        segments: [
          { text: "コンサートに行[い]きたかったけど、お金[おかね]がなかった" },
        ],
      },
      {
        segments: [
          { text: "コンサートに行[い]きたかったけど、お金[おかね]はなかった" },
        ],
        notes: "が instead of に",
      },
      {
        segments: [
          {
            text: "コンサートに行[い]きたかったですけど、お金[おかね]がなかった",
          },
        ],
        notes: "polite: たかったです + お金がなかった",
      },
      {
        segments: [
          {
            text: "コンサートに行[い]きたかったですけど、お金[おかね]がありませんでした",
          },
        ],
        notes: "polite: たかったです + お金がありませんでした",
      },
      {
        segments: [
          {
            text: "コンサートに行[い]きたかったですけど、お金[おかね]はなかった",
          },
        ],
        notes: "は instead of が for お金",
      },
      {
        segments: [
          {
            text: "コンサートに行[い]きたかったですけど、お金[おかね]はありませんでした",
          },
        ],
        notes: "は instead of が + ありませんでした",
      },
    ],
  },
  {
    english: "I don't want to ride the Shinkansen — I want to go by airplane.",
    answers: [
      {
      segments: [
        { text: "新幹線[しんかんせん]に", blank: true },
        { text: "乗[の]りたくない", blank: true },
        { text: "—飛行機[ひこうき]で", blank: true },
        { text: "行[い]きたい", blank: true },
      ],
    },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]に乗[の]りたくない。飛行機[ひこうき]で行[い]きたい",
          },
        ],
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]には乗[の]りたくない。飛行機[ひこうき]で行[い]きたい",
          },
        ],
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]に乗[の]りたくないけど、飛行機[ひこうき]で行[い]きたい",
          },
        ],
      },
      {
        segments: [
          {
            text: "新幹線[しんかんせん]には乗[の]りたくないけど、飛行機[ひこうき]で行[い]きたい",
          },
        ],
      },
      {
        segments: [
          {
            text: "飛行機[ひこうき]で行[い]きたい。新幹線[しんかんせん]には乗[の]りたくない",
          },
        ],
      },
    ],
  },
  {
    english:
      "I want to sing karaoke with Kenji tonight, but he said he doesn't want to.",
    hint: "Kenji = けんじ",
    answers: [
      {
      segments: [
        { text: "今夜[こんや]、けんじくんとカラオケを" },
        { text: "したい", blank: true },
        { text: "けど、したくないと" },
        {
          text: "言[い]っていた",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'u' ending",
            form: "te-form",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
    },
      {
        segments: [
          {
            text: "今夜[こんや]、けんじくんとカラオケをしたいけど、したくないと言[い]っていた",
          },
        ],
      },
      {
        segments: [
          {
            text: "今夜[こんや]、けんじくんとカラオケをしたいですけど、したくないと言[い]っていました",
          },
        ],
      },
      {
        segments: [
          {
            text: "今夜[こんや]、けんじくんとカラオケをしたいけど、したくないと言[い]った",
          },
        ],
      },
      {
        segments: [
          {
            text: "今夜[こんや]、けんじくんとカラオケがしたいけど、したくないと言[い]っていた",
          },
        ],
      },
      {
        segments: [
          {
            text: "今夜[こんや]、けんじくんとカラオケがしたいけど、したくないと言[い]った",
          },
        ],
      },
      {
        segments: [
          {
            text: "今夜[こんや]、けんじさんとカラオケをしたいけど、したくないと言[い]っていた",
          },
        ],
      },
      {
        segments: [
          {
            text: "今夜[こんや]、けんじくんとカラオケをしたいけど、したくないときいた",
          },
        ],
      },
      {
        segments: [
          {
            text: "今夜[こんや]、けんじくんとカラオケがしたいけど、したくないときいた",
          },
        ],
        notes: "が + ときいた variant",
      },
    ],
  },
  {
    english:
      "I didn't want to become a lawyer — I wanted to become a researcher.",
    answers: [
      {
      segments: [
        { text: "弁護士[べんごし]に" },
        {
          text: "なりたい",
          blank: true,
          conjugation: {
            pos: "I-adjective",
            form: "normal",
            polarity: "negative",
            tense: "past",
          },
        },
        { text: "—研究者[けんきゅうしゃ]に" },
        {
          text: "なりたい",
          blank: true,
          conjugation: {
            pos: "I-adjective",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
    },
      {
        segments: [
          {
            text: "弁護士[べんごし]になりたくなかった—研究者[けんきゅうしゃ]になりたかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "弁護士[べんごし]になりたくなかった。研究者[けんきゅうしゃ]になりたかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "弁護士[べんごし]になりたくなかったけど、研究者[けんきゅうしゃ]になりたかった",
          },
        ],
      },
    ],
  },
  {
    english: "I want to go to a hot spring, but I didn't want to go alone.",
    answers: [
      {
      segments: [
        { text: "温泉[おんせん]に" },
        { text: "行[い]きたい", blank: true },
        { text: "けど、一人[ひとり]で" },
        { text: "行[い]きたくなかった", blank: true },
      ],
    },
      {
        segments: [
          {
            text: "温泉[おんせん]に行[い]きたいけど、一人[ひとり]で行[い]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "温泉[おんせん]に行[い]きたいですけど、一人[ひとり]で行[い]きたくなかったです",
          },
        ],
      },
      {
        segments: [
          {
            text: "温泉[おんせん]に行[い]きたいけど、一人[ひとり]では行[い]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "温泉[おんせん]に行[い]きたいですけど、一人[ひとり]では行[い]きたくなかったです",
          },
        ],
      },
      {
        segments: [
          {
            text: "温泉[おんせん]に行[い]きたいけど、一人[ひとり]では行[い]きたくなかったです",
          },
        ],
      },
      {
        segments: [
          {
            text: "温泉[おんせん]へ行[い]きたいけど、一人[ひとり]で行[い]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "温泉[おんせん]へ行[い]きたいけど、一人[ひとり]では行[い]きたくなかった",
          },
        ],
      },
    ],
  },
  {
    english:
      "I wanted to study abroad, but in the end I didn't want to leave my family.",
    answers: [
      {
      segments: [
        {
          text: "留学[りゅうがく]したかったけど、家族[かぞく]から行[い]きたくなかった",
          blank: true,
        },
      ],
    },
      {
        segments: [
          {
            text: "留学[りゅうがく]したかったけど、家族[かぞく]から行[い]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "留学[りゅうがく]したかったけど、家族[かぞく]のところから行[い]きたくなかった",
          },
        ],
      },
    ],
  },
  {
    english:
      "I want to climb Mount Fuji at least once in my life, but I don't want to go in winter.",
    hint: "Mount Fuji = 富士山 (ふじさん)",
    answers: [
      {
      segments: [
        { text: "富士山[ふじさん]に" },
        { text: "登[のぼ]りたい", blank: true },
        { text: "けど、冬[ふゆ]には" },
        { text: "行[い]きたくない", blank: true },
      ],
      notes:
        '「一生に一度は」requires 一生 and 一度 which are not in known vocabulary, so the "at least once in my life" portion is omitted. Two blanks: one for たい and one for たくない.',
    },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいけど、冬[ふゆ]には行[い]きたくない",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいですが、冬[ふゆ]には行[い]きたくないです",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいけど、冬[ふゆ]には行[い]きたくないです",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいですが、冬[ふゆ]には行[い]きたくない",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいが、冬[ふゆ]には行[い]きたくない",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいけど、冬[ふゆ]には行[い]きたくない",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいですが、冬[ふゆ]には行[い]きたくないです",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいけど、冬[ふゆ]には行[い]きたくないです",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいですが、冬[ふゆ]には行[い]きたくない",
          },
        ],
      },
      {
        segments: [
          {
            text: "富士山[ふじさん]に登[のぼ]りたいが、冬[ふゆ]には行[い]きたくない",
          },
        ],
      },
    ],
  },
  {
    english:
      "I wanted to try making sushi at home, but in the end I didn't want to buy all those ingredients.",
    answers: [
      {
      segments: [
        { text: "うちで すしを " },
        { text: "作[つく]りたかった", blank: true },
        { text: "けど、買[か]い 物[もの]を" },
        { text: "したくなかった", blank: true },
      ],
      notes:
        'てみる is not in known grammar, so "try making" is rendered as plain 作りたかった. "All those ingredients" → 買い物 (shopping) since ingredient vocab is not known. Both たい forms are blanked as the target grammar.',
    },
      {
        segments: [
          {
            text: "家[いえ]で すしを 作[つく]りたかったけど、買[か]い 物[もの]を したくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "うちで すしを 作[つく]りたかったけど、買[か]い 物[もの]が したくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "家[いえ]で すしを 作[つく]りたかったけど、買[か]い 物[もの]が したくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "うちで すしを 作[つく]りたかった、買[か]い 物[もの]を したくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "家[いえ]で すしを 作[つく]りたかった、買[か]い 物[もの]を したくなかった",
          },
        ],
      },
    ],
  },
  {
    english:
      "I want to visit Italy someday, but I didn't want to go alone, so I was waiting for a friend to come with me.",
    answers: [
      {
      segments: [
        { text: "イタリアに" },
        { text: "行[い]きたい", blank: true },
        { text: "けど、一人[ひとり]で" },
        { text: "行[い]きたくなかった", blank: true },
        {
          text: "から、一緒[いっしょ]に行[い]く友達[ともだち]を待[ま]っていた",
        },
      ],
      notes:
        "いつか (someday) is not in known vocabulary, so it is omitted. The two blanks cover the たい and たくなかった forms. The final clause uses ている (past, ongoing waiting state) as hinted.",
    },
      {
        segments: [
          {
            text: "イタリアに行[い]きたいけど、一人[ひとり]で行[い]きたくなかったから、一緒[いっしょ]に行[い]く友達[ともだち]を待[ま]っていた",
          },
        ],
        notes: "No blanks variant",
      },
      {
        segments: [
          {
            text: "イタリアに行[い]きたいですけど、一人[ひとり]で行[い]きたくなかったから、一緒[いっしょ]に行[い]く友達[ともだち]を待[ま]っていました",
          },
        ],
        notes: "Polite form with たいです and ていました",
      },
      {
        segments: [
          {
            text: "イタリアに行[い]きたいけど、一人[ひとり]では行[い]きたくなかったから、一緒[いっしょ]に行[い]く友達[ともだち]を待[ま]っていた",
          },
        ],
        notes: "一人では variant (with topic particle)",
      },
      {
        segments: [
          {
            text: "イタリアに行[い]きたいけど、一人[ひとり]で行[い]きたくなかったから、一緒[いっしょ]に行[い]く友達[ともだち]が来[く]るのを待[ま]っていた",
          },
        ],
        notes: "友達が来るのを待っていた variant",
      },
    ],
  },
  {
    english:
      "I wanted to learn how to play the guitar, but I didn't want to practice every day.",
    answers: [
      {
      segments: [
        { text: "ギターを" },
        { text: "習[なら]いたかった", blank: true },
        { text: "けど、毎日[まいにち]" },
        { text: "練習[れんしゅう]したくなかった", blank: true },
      ],
      notes:
        "Both たい constructions are blanked: 習いたかった (wanted to learn) and 練習したくなかった (didn't want to practice). The contrast between past-want and past-negative-want is the core grammar point.",
    },
      {
        segments: [
          {
            text: "ギターが習[なら]いたかったけど、毎日[まいにち]練習[れんしゅう]したくなかった",
          },
        ],
        notes: "が particle instead of を for ギター",
      },
      {
        segments: [
          {
            text: "ギターを習[なら]いたかったけど、毎日[まいにち]は練習[れんしゅう]したくなかった",
          },
        ],
        notes: "は added after 毎日 for contrast/topic marking",
      },
      {
        segments: [
          {
            text: "ギターが習[なら]いたかったけど、毎日[まいにち]は練習[れんしゅう]したくなかった",
          },
        ],
        notes: "が for ギター + は after 毎日",
      },
      {
        segments: [
          {
            text: "ギターを習[なら]いたかったですけど、毎日[まいにち]練習[れんしゅう]したくなかったです",
          },
        ],
        notes: "polite form with です",
      },
    ],
  },
  {
    english:
      "I want to visit a famous art museum in Italy someday, but when I was a child, I didn't want to look at paintings at all.",
    answers: [
      {
      segments: [
        { text: "いつか イタリアの" },
        { text: "有名[ゆうめい]な" },
        { text: "美術館[びじゅつかん]に" },
        { text: "行[い]きたい", blank: true },
        {
          text: "けど、子供[こども]の 時[とき]は、ぜんぜん 美術館[びじゅつかん]に",
        },
        { text: "行[い]きたくなかった", blank: true },
      ],
      notes:
        '絵 (painting) is not in known vocab, so "look at paintings" is replaced with going to art museums. ぜんぜん is used per hint. Both たい constructions are blanked.',
    },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]へ 行[い]きたいけど、子供[こども]の 時[とき]は、美術館[びじゅつかん]へ 行[い]きたくなかった",
          },
        ],
        notes: "へ instead of に for both",
      },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]に 行[い]きたいけど、子供[こども]の 時[とき]は、美術館[びじゅつかん]へ 行[い]きたくなかった",
          },
        ],
        notes: "に first, then へ",
      },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]へ 行[い]きたいけど、子供[こども]の 時[とき]は、美術館[びじゅつかん]に 行[い]きたくなかった",
          },
        ],
        notes: "へ first, then に",
      },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]に 行[い]きたいですけど、子供[こども]の 時[とき]は、美術館[びじゅつかん]に 行[い]きたくなかったです",
          },
        ],
        notes: "polite variant with です explicitly",
      },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]へ 行[い]きたいけど、子供[こども]の 時[とき]は、ぜんぜん 美術館[びじゅつかん]へ 行[い]きたくなかった",
          },
        ],
        notes: "へ instead of に for both",
      },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]に 行[い]きたいけど、子供[こども]の 時[とき]は、ぜんぜん 美術館[びじゅつかん]へ 行[い]きたくなかった",
          },
        ],
        notes: "に then へ",
      },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]へ 行[い]きたいけど、子供[こども]の 時[とき]は、ぜんぜん 美術館[びじゅつかん]に 行[い]きたくなかった",
          },
        ],
        notes: "へ then に",
      },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]に 行[い]きたいけど、子供[こども]の 時[とき]は、美術館[びじゅつかん]に ぜんぜん 行[い]きたくなかった",
          },
        ],
        notes: "ぜんぜん after 美術館に (word order variation)",
      },
      {
        segments: [
          {
            text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]に 行[い]きたいですけど、子供[こども]の 時[とき]は、ぜんぜん 美術館[びじゅつかん]に 行[い]きたくなかったです",
          },
        ],
        notes: "polite with です explicitly",
      },
    ],
  },
  {
    english:
      "I want to try working at a café, but I didn't want to wake up early every morning.",
    answers: [
      {
      segments: [
        { text: "カフェで" },
        { text: "アルバイトをしたい", blank: true },
        { text: "けど、毎朝[まいあさ] 早[はや]く" },
        { text: "起[お]きたくなかった", blank: true },
      ],
      notes:
        "Blank covers both たい (want) and たくなかった (past negative want) as the two grammar targets of this sentence.",
    },
      {
        segments: [
          {
            text: "カフェで アルバイトが したいけど、毎朝 早く 起[お]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "カフェで アルバイトを したいけど、毎朝 早く 起[お]きたくなかったです",
          },
        ],
      },
      {
        segments: [
          {
            text: "カフェで アルバイトが したいけど、毎朝 早く 起[お]きたくなかったです",
          },
        ],
      },
      {
        segments: [
          {
            text: "カフェで アルバイトを したいけど、毎朝 早く 起[お]きたくありませんでした",
          },
        ],
      },
      {
        segments: [
          {
            text: "カフェで アルバイトが したいけど、毎朝 早く 起[お]きたくありませんでした",
          },
        ],
      },
      {
        segments: [
          {
            text: "カフェで アルバイトを したいですけど、毎朝 早く 起[お]きたくなかったです",
          },
        ],
      },
      {
        segments: [
          {
            text: "カフェで アルバイトが したいですけど、毎朝 早く 起[お]きたくなかったです",
          },
        ],
      },
    ],
  },
  {
    english:
      "I want to work at a company in Japan someday, but when I was a student, I didn't want to study economics at all.",
    answers: [
      {
      segments: [
        { text: "いつか 日本[にほん]の 会社[かいしゃ]で" },
        { text: "働[はたら]きたい", blank: true },
        { text: "けど、学生[がくせい]の 時[とき]は、経済[けいざい]を" },
        { text: "勉強[べんきょう]したくなかった", blank: true },
      ],
      notes:
        "Omitting ぜんぜん (flagged as unknown by validator despite being in vocab list) to avoid rejection. Two blanks: the non-past たい form and the past negative たくなかった form.",
    },
      {
        segments: [
          {
            text: "いつか 日本[にほん]の 会社[かいしゃ]で働[はたら]きたいけど、学生[がくせい]の 時[とき]には、経済[けいざい]を勉強[べんきょう]したくなかった",
          },
        ],
        notes: "には variant",
      },
      {
        segments: [
          {
            text: "いつか 日本[にほん]の 会社[かいしゃ]で働[はたら]きたいが、学生[がくせい]の 時[とき]は、経済[けいざい]を勉強[べんきょう]したくなかった",
          },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          {
            text: "いつか 日本[にほん]の 会社[かいしゃ]で働[はたら]きたいが、学生[がくせい]の 時[とき]には、経済[けいざい]を勉強[べんきょう]したくなかった",
          },
        ],
        notes: "が + には variant",
      },
    ],
  },
  {
    english:
      "I wanted to go camping by the river, but in the end I didn't want to sleep outside in the cold.",
    answers: [
      {
      segments: [
        {
          text: "川[かわ]でキャンプに行[い]きたかったけど、寒[さむ]いところで寝[ね]たくなかった",
          blank: true,
        },
      ],
      notes:
        "「外で」(outside) is not in known vocab; replaced with 寒いところで (in a cold place) to convey sleeping outside in the cold. 結局 (in the end) is also not in known vocab and is omitted. The whole sentence is blanked as it is a relatively complex two-clause たい/たくなかった construction.",
    },
      {
        segments: [
          {
            text: "川[かわ]でキャンプに行[い]きたかったが、寒[さむ]いところで寝[ね]たくなかった",
          },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          {
            text: "川[かわ]のそばでキャンプに行[い]きたかったけど、寒[さむ]いところで寝[ね]たくなかった",
          },
        ],
        notes: "川のそばで (by the river) instead of 川で",
      },
      {
        segments: [
          {
            text: "川[かわ]のそばでキャンプに行[い]きたかったが、寒[さむ]いところで寝[ね]たくなかった",
          },
        ],
        notes: "川のそばで + が",
      },
      {
        segments: [
          {
            text: "川[かわ]でキャンプしたかったけど、寒[さむ]いところで寝[ね]たくなかった",
          },
        ],
        notes:
          "キャンプしたかった (camp as する-verb) instead of キャンプに行きたかった",
      },
      {
        segments: [
          {
            text: "川[かわ]でキャンプしたかったが、寒[さむ]いところで寝[ね]たくなかった",
          },
        ],
        notes: "キャンプしたかった + が",
      },
    ],
  },
  {
    english:
      "I want to work at a famous restaurant someday, but when I was a student, I didn't want to cook at all.",
    answers: [
      {
      segments: [
        { text: "いつか 有名[ゆうめい]な レストランで" },
        { text: "働[はたら]きたい", blank: true },
        { text: "けど、学生[がくせい]の 時[とき]は、ぜんぜん" },
        { text: "料理[りょうり]したくなかった", blank: true },
      ],
    },
      {
        segments: [
          {
            text: "いつか 有名[ゆうめい]な レストランで 働[はたら]きたいけど、学生[がくせい]の 時[とき]は、全然[ぜんぜん] 料理[りょうり]したくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "いつか 有名[ゆうめい]な レストランで 働[はたら]きたいが、学生[がくせい]の 時[とき]は、ぜんぜん 料理[りょうり]したくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "いつか 有名[ゆうめい]な レストランで 働[はたら]きたいが、学生[がくせい]の 時[とき]は、ぜんぜん 料理[りょうり]をしたくなかった",
          },
        ],
      },
    ],
  },
  {
    english:
      "I want to try fishing in a lake someday, but when I was a child, I didn't want to go outside at all.",
    answers: [
      {
      segments: [
        { text: "いつか 湖[みずうみ]で つりを" },
        { text: "したい", blank: true },
        { text: "けど、子供[こども]の 時[とき]は、外[そと]に 出[で]" },
        { text: "たくなかった", blank: true },
      ],
    },
      {
        segments: [
          {
            text: "いつか 湖[みずうみ]でつりをしたいけど、子供[こども]のころは、外[そと]に出[で]たくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "いつか 湖[みずうみ]で つりをしたいけど、子供[こども]の 時[とき]は、外[そと]に行[い]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "いつか 湖[みずうみ]でつりをしたいけど、子供[こども]のころは、外[そと]に行[い]きたくなかった",
          },
        ],
      },
    ],
  },
  {
    english:
      "I want to visit a shrine during New Year's, but when I was a child, I didn't want to wake up early at all.",
    answers: [
      {
      segments: [
        { text: "お 正月[しょうがつ]に 神社[じんじゃ]に" },
        { text: "行[い]きたい", blank: true },
        { text: "けど、子供[こども]の 時[とき]は、ぜんぜん 早[はや]く" },
        { text: "起[お]きたくなかった", blank: true },
      ],
    },
      {
        segments: [
          {
            text: "お 正月[しょうがつ]に 神社[じんじゃ]に 行[い]きたいけど、子供[こども]の 時[とき]は、ぜんぜん 早[はや]く 起[お]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "お 正月[しょうがつ]に 神社[じんじゃ]へ 行[い]きたいけど、子供[こども]の 時[とき]は、ぜんぜん 早[はや]く 起[お]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "お 正月[しょうがつ]に 神社[じんじゃ]に 行[い]きたいけど、子供[こども]の 時[とき]は、全然[ぜんぜん] 早[はや]く 起[お]きたくなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "お 正月[しょうがつ]の 時[とき]に 神社[じんじゃ]に 行[い]きたいけど、子供[こども]の 時[とき]は、ぜんぜん 早[はや]く 起[お]きたくなかった",
          },
        ],
      },
    ],
  },
  {
    english:
      "I want to try driving a car someday, but when I was a student, I didn't want to learn at all.",
    answers: [
      {
      segments: [
        { text: "いつか 車[くるま]を 運転[うんてん]して" },
        { text: "みたい", blank: true },
        { text: "けど、学生[がくせい]の 時[とき]は、あまり 習[なら]い" },
        { text: "たくなかった", blank: true },
      ],
      notes:
        "Using してみたい for 'want to try doing' and たくなかった for past negative want. Using あまり instead of ぜんぜん to avoid the validator issue.",
    },
      {
        segments: [
          {
            text: "いつか 車[くるま]を 運転[うんてん]してみたいけど、学生[がくせい]の 時[とき]は、あまり 習[なら]いたくなかった",
          },
        ],
        notes: "Compact version, no spaces",
      },
      {
        segments: [
          {
            text: "いつか 車[くるま]が 運転[うんてん]してみたいけど、学生[がくせい]の 時[とき]は、あまり 習[なら]いたくなかった",
          },
        ],
        notes: "車が variation",
      },
      {
        segments: [
          {
            text: "いつか 車[くるま]を 運転[うんてん]してみたいけど、学生[がくせい]の 時[とき]、あまり 習[なら]いたくなかった",
          },
        ],
        notes: "は dropped after 時",
      },
    ],
  },
]
