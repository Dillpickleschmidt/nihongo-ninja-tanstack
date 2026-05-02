import type { Question } from "../types"

export const questions: Question[] = [
  {
    english:
      "I'm not planning to eat anything at the party — I already had dinner.",
    answers: [
      {
        segments: [
          { text: "パーティーでは 何[なに]も" },
          { text: "食[た]べないつもり", blank: true },
          { text: "です" },
          { text: "。もう 晩[ばん]ご 飯[はん]を 食[た]べたから。" },
        ],
      },
      {
        segments: [
          { text: "パーティーで 何[なに]も 食[た]べないつもり" },
          { text: "です" },
          { text: "。もう 晩[ばん]ご 飯[はん]を 食[た]べたから。" },
        ],
        notes: "パーティーでは → パーティーで (は dropped)",
      },
      {
        segments: [
          { text: "パーティーでは 何[なに]も 食[た]べないつもり" },
          { text: "です" },
          { text: "。もう 夕[ゆう]ご 飯[はん]を 食[た]べたから。" },
        ],
        notes: "晩ご飯 → 夕ご飯",
      },
      {
        segments: [
          { text: "パーティーで 何[なに]も 食[た]べないつもり" },
          { text: "です" },
          { text: "。もう 夕[ゆう]ご 飯[はん]を 食[た]べたから。" },
        ],
        notes: "パーティーで (は dropped) + 夕ご飯",
      },
      {
        segments: [
          { text: "パーティーでは 何[なに]も" },
          { text: "食[た]べるつもりは", blank: true },
          { text: "ありません。もう 夕[ゆう]ご 飯[はん]を 食[た]べたから。" },
        ],
        notes: "食べるつもりはありません (alternate \"have no intent to eat\" structure)",
      },
    ],
  },
  {
    english: "I have no intention of taking the exam again — once was enough.",
    answers: [
      {
        segments: [
          { text: "また テストを" },
          { text: "するつもりは", blank: true },
          {
            text: "ない",
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
          { text: "また テストを" },
          { text: "するつもりが" },
          {
            text: "ない",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "つもりが + ない variation",
      },
      {
        segments: [
          { text: "テストをまた" },
          { text: "するつもりは" },
          {
            text: "ない",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "また moved after テストを",
      },
      {
        segments: [
          { text: "テストをまた" },
          { text: "するつもりが" },
          {
            text: "ない",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "また after テストを + が particle",
      },
      {
        segments: [{ text: "また テストを しないつもり" }, { text: "です" }],
        notes: "しないつもりです - polite ないつもり structure",
      },
      {
        segments: [{ text: "テストをまた しないつもり" }, { text: "です" }],
        notes: "また word order variation",
      },
      {
        segments: [{ text: "また テストを するつもりは ありません" }],
        notes: "Formal polite: つもりはありません",
      },
      {
        segments: [{ text: "テストをまた するつもりは ありません" }],
        notes: "また word order + ありません",
      },
      {
        segments: [{ text: "また テストを するつもりが ありません" }],
        notes: "が particle + ありません",
      },
      {
        segments: [{ text: "テストをまた するつもりが ありません" }],
        notes: "また word order + が + ありません",
      },
    ],
  },
  {
    english: "I'm planning to go to Kyoto by Shinkansen next spring.",
    answers: [
      {
        segments: [
          {
            text: "来年[らいねん]の 春[はる]、新幹線[しんかんせん]で 京都[きょうと]に",
          },
          { text: "行[い]くつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          {
            text: "来年[らいねん]の 春[はる]、新幹線[しんかんせん]で 京都[きょうと]へ 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Using へ instead of に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 来年[らいねん]の 春[はる]、新幹線[しんかんせん]で 京都[きょうと]に 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "私は at start, with に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 来年[らいねん]の 春[はる]、新幹線[しんかんせん]で 京都[きょうと]へ 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "私は at start, with へ",
      },
      {
        segments: [
          {
            text: "来年[らいねん]の 春[はる]に 京都[きょうと]に 新幹線[しんかんせん]で 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes:
          "新幹線で moved after time expression — alternative word order, に",
      },
      {
        segments: [
          {
            text: "来年[らいねん]の 春[はる]に 京都[きょうと]へ 新幹線[しんかんせん]で 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes:
          "新幹線で moved after time expression — alternative word order, へ",
      },
    ],
  },
  {
    english:
      "I have no intention of selling my old bicycle — I've had it since high school.",
    answers: [
      {
        segments: [
          { text: "古[ふる]い 自転車[じてんしゃ]を" },
          { text: "売[う]るつもりはない", blank: true },
          { text: "。 高校[こうこう]のときから 持[も]っています。" },
        ],
      },
      {
        segments: [
          {
            text: "古[ふる]い 自転車[じてんしゃ]を 売[う]るつもりがない。 高校[こうこう]のときから 持[も]っています。",
          },
        ],
      },
      {
        segments: [
          {
            text: "この 古[ふる]い 自転車[じてんしゃ]を 売[う]るつもりはない。 高校[こうこう]のときから 持[も]っています。",
          },
        ],
      },
      {
        segments: [
          {
            text: "この 古[ふる]い 自転車[じてんしゃ]を 売[う]るつもりがない。 高校[こうこう]のときから 持[も]っています。",
          },
        ],
      },
    ],
  },
  {
    english: "I intend not to use my phone at all during dinner.",
    answers: [
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 時[とき]は、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 時[とき]は、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 時[とき]は、スマホをぜんぜん" },
          { text: "使[つか]わないつもり" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 時[とき]は、スマホをぜんぜん" },
          { text: "使[つか]わないつもり" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 時[とき]、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 時[とき]、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 時[とき]、スマホをぜんぜん" },
          { text: "使[つか]わないつもり" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 時[とき]、スマホをぜんぜん" },
          { text: "使[つか]わないつもり" },
          { text: "です" },
        ],
      },
      ],
  },
  {
    english:
      "I have no intention of going back to that restaurant — the fish wasn't even fresh!",
    answers: [
      {
        segments: [
          { text: "あのレストランにまた" },
          { text: "行[い]くつもりはない", blank: true },
          { text: "。 魚[さかな]もおいしくなかったから。" },
        ],
        notes:
          'The blank covers the grammar nucleus: verb (dictionary form) + つもりはない, expressing "have no intention of." The reason clause uses から with い-adjective negative past. 新鮮 is not in known vocabulary, so おいしくなかった is used to convey "wasn\'t even good/fresh."',
      },
      {
        segments: [
          { text: "あのレストランにまた" },
          { text: "行[い]くつもりはありません" },
          { text: "。 魚[さかな]もおいしくなかったから。" },
        ],
        notes: "Polite form with ありません",
      },
      {
        segments: [
          { text: "あのレストランにまた" },
          { text: "行[い]くつもりがない" },
          { text: "。 魚[さかな]もおいしくなかったから。" },
        ],
        notes: "が instead of は in つもりがない",
      },
      {
        segments: [
          { text: "あのレストランにまた" },
          { text: "行[い]くつもりがありません" },
          { text: "。 魚[さかな]もおいしくなかったから。" },
        ],
        notes: "Polite with が: つもりがありません",
      },
      {
        segments: [
          { text: "あのレストランに" },
          { text: "行[い]くつもりはない" },
          { text: "。 魚[さかな]もおいしくなかったから。" },
        ],
        notes: "また moved after に (more natural placement)",
      },
      {
        segments: [
          { text: "あのレストランに" },
          { text: "行[い]くつもりはありません" },
          { text: "。 魚[さかな]もおいしくなかったから。" },
        ],
        notes: "Without また, polite",
      },
      {
        segments: [
          { text: "あのレストランにまた" },
          { text: "行[い]くつもりはない" },
          { text: "。 魚[さかな]はおいしくなかったから。" },
        ],
        notes: "は → が on 魚",
      },
      {
        segments: [
          { text: "あのレストランにまた" },
          { text: "行[い]くつもりはありません" },
          { text: "。 魚[さかな]はおいしくなかったから。" },
        ],
        notes: "Polite + 魚は",
      },
      {
        segments: [
          { text: "魚[さかな]もおいしくなかったから、あのレストランにまた" },
          { text: "行[い]くつもりはない" },
          { text: "。" },
        ],
        notes: "Single sentence with けど joining reason",
      },
      {
        segments: [
          { text: "魚[さかな]もおいしくなかったから、あのレストランにまた" },
          { text: "行[い]くつもりはありません" },
          { text: "。" },
        ],
        notes: "Reason first, polite",
      },
    ],
  },
  {
    english: "I'm planning to practice guitar every day until the concert.",
    answers: [
      {
        segments: [
          { text: "コンサートまで 毎日[まいにち]ギターを" },
          { text: "練習[れんしゅう]するつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "コンサートまで ギターを 毎日[まいにち]" },
          { text: "練習[れんしゅう]するつもり" },
          { text: "です" },
        ],
        notes: "毎日 after を — same meaning",
      },
      {
        segments: [
          { text: "毎日[まいにち]コンサートまで ギターを" },
          { text: "練習[れんしゅう]するつもり" },
          { text: "です" },
        ],
        notes: "毎日 at the start of the sentence",
      },
      {
        segments: [
          { text: "コンサートまで 毎日[まいにち]ギターの 練習[れんしゅう]を" },
          { text: "するつもり" },
          { text: "です" },
        ],
        notes: "ギターの練習をする alternative phrasing",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートまで 毎日[まいにち]ギターを" },
          { text: "練習[れんしゅう]するつもり" },
          { text: "です" },
        ],
        notes: "Subject 私は included explicitly",
      },
    ],
  },
  {
    english:
      "I have no intention of going back to live in the dormitory — living alone is so much better.",
    answers: [
      {
        segments: [
          { text: "寮[りょう]に 帰[かえ]って 住[す]む" },
          { text: "つもりはない", blank: true },
          { text: "。一人[ひとり]で 住[す]むほうがとてもよい。" },
        ],
        notes:
          'Uses the つもりはない pattern ("have no intention of") as hinted. 帰って住む = go back to live. 一人で住む ほうがとてもよい = living alone is much better. ずっと is not in known vocabulary so とても is used instead.',
      },
      {
        segments: [
          {
            text: "寮[りょう]に 帰[かえ]って 住[す]むつもりはありません。一人[ひとり]で 住[す]むほうがとてもよい",
          },
        ],
        notes: "Polite form: はない → はありません",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 帰[かえ]って 住[す]むつもりがない。一人[ひとり]で 住[す]むほうがとてもよい",
          },
        ],
        notes: "Particle swap: は → が",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 帰[かえ]って 住[す]むつもりがありません。一人[ひとり]で 住[す]むほうがとてもよい",
          },
        ],
        notes: "Polite + particle swap: がない → がありません",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 帰[かえ]って 住[す]むつもりはない。一人[ひとり]で住[す]むほうがよい",
          },
        ],
        notes: "Without とても",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 帰[かえ]って 住[す]むつもりはありません。一人[ひとり]で住[す]むほうがよい",
          },
        ],
        notes: "Polite, without とても",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 帰[かえ]って 住[す]むつもりがない。一人[ひとり]で住[す]むほうがよい",
          },
        ],
        notes: "Particle が, without とても",
      },
      {
        segments: [
          {
            text: "寮[りょう]に 帰[かえ]って 住[す]むつもりがありません。一人[ひとり]で住[す]むほうがよい",
          },
        ],
        notes: "Polite + が, without とても",
      },
    ],
  },
  {
    english:
      "I'm planning to quit my part-time job next month and focus on studying.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]、アルバイトをやめて、勉強[べんきょう]する" },
          { text: "つもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          {
            text: "アルバイトをやめて、来月[らいげつ]から 勉強[べんきょう]するつもりです",
          },
        ],
      },
      ],
  },
  {
    english:
      "I have no intention of waking up early on Sunday — it's the only day I can sleep in.",
    answers: [
      {
        segments: [
          { text: "日曜日[にちようび]は、早[はや]く" },
          { text: "起[お]きるつもりはない", blank: true },
          { text: "。ゆっくり 寝[ね]る 日[ひ]だから。" },
        ],
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]は、早[はや]く 起[お]きるつもりがない。ゆっくり 寝[ね]る 日[ひ]だから。",
          },
        ],
        notes: "が instead of は in つもりがない",
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]は、早[はや]く 起[お]きるつもりじゃない。ゆっくり 寝[ね]る 日[ひ]だから。",
          },
        ],
        notes: "じゃ instead of は in つもりじゃない",
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]は、早[はや]く 起[お]きるつもりはありません。ゆっくり 寝[ね]る 日[ひ]だから。",
          },
        ],
        notes: "Polite: つもりはありません",
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]は、早[はや]く 起[お]きるつもりがありません。ゆっくり 寝[ね]る 日[ひ]だから。",
          },
        ],
        notes: "Polite: つもりがありません",
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]には、早[はや]く 起[お]きるつもりはない。ゆっくり 寝[ね]る 日[ひ]だから。",
          },
        ],
        notes: "日曜日には instead of 日曜日は",
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]は、早[はや]く 起[お]きるつもりはない。ゆっくり寝[ね]られる日[ひ]だから。",
          },
        ],
        notes:
          "ゆっくり寝られる日だから gives the reason as a day when I can sleep in",
      },
    ],
  },
  {
    english:
      "I'm planning to take a cooking class and make sushi at home someday.",
    answers: [
      {
        segments: [
          { text: "料理[りょうり]クラスを 取[と]って、家[いえ]で すしを" },
          { text: "作[つく]るつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          {
            text: "料理[りょうり]クラスを 取[と]って、家[いえ]で 寿司[すし]を 作[つく]るつもりです",
          },
        ],
        notes: "Using 寿司 kanji spelling",
      },
      {
        segments: [
          {
            text: "料理[りょうり]のクラスを 取[と]って、家[いえ]で すしを 作[つく]るつもりです",
          },
        ],
        notes: "料理のクラス with の particle",
      },
      {
        segments: [
          {
            text: "料理[りょうり]クラスに 行[い]って、家[いえ]で すしを 作[つく]るつもりです",
          },
        ],
        notes: "料理クラスに行って variation",
      },
      {
        segments: [
          {
            text: "料理[りょうり]のクラスに 行[い]って、家[いえ]で 寿司[すし]を 作[つく]るつもりです",
          },
        ],
        notes: "料理のクラスに行って、家で寿司 variation",
      },
    ],
  },
  {
    english:
      "Kenji says he has no intention of cutting his hair until after graduation.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは、卒業[そつぎょう]するまで 髪[かみ]を" },
          { text: "切[き]るつもりはない", blank: true },
          { text: "と 聞[き]きました" },
        ],
      },
      {
        segments: [
          {
            text: "けんじさんは、卒業[そつぎょう]するまで 髪[かみ]を 切[き]るつもりがないと 聞[き]きました",
          },
        ],
      },
      {
        segments: [
          {
            text: "けんじさんは、卒業[そつぎょう]するまで 髪[かみ]を 切[き]るつもりじゃないと 聞[き]きました",
          },
        ],
      },
      ],
  },
  {
    english:
      "I have no intention of riding the bus — I'm planning to walk to the station.",
    answers: [
      {
        segments: [
          { text: "バスに" },
          { text: "乗[の]るつもりはない", blank: true },
          { text: "。歩[ある]いて 駅[えき]に" },
          { text: "行[い]くつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "バスに" },
          { text: "乗[の]るつもりがない" },
          { text: "。歩[ある]いて 駅[えき]に" },
          { text: "行[い]くつもり" },
          { text: "です" },
        ],
        notes: "が instead of は in first clause (uninterested nuance)",
      },
      {
        segments: [
          { text: "バスに" },
          { text: "乗[の]るつもりはありません" },
          { text: "。歩[ある]いて 駅[えき]に" },
          { text: "行[い]くつもり" },
          { text: "です" },
        ],
        notes: "Polite form with ありません in first clause",
      },
      {
        segments: [
          { text: "バスに" },
          { text: "乗[の]るつもりがありません" },
          { text: "。歩[ある]いて 駅[えき]に" },
          { text: "行[い]くつもり" },
          { text: "です" },
        ],
        notes: "Polite form with がありません in first clause",
      },
      {
        segments: [
          { text: "バスには" },
          { text: "乗[の]るつもりはない" },
          { text: "。歩[ある]いて 駅[えき]に" },
          { text: "行[い]くつもり" },
          { text: "です" },
        ],
        notes: "バスには topic-marked version, polite",
      },
      {
        segments: [
          { text: "バスに" },
          { text: "乗[の]るつもりはない" },
          { text: "。歩[ある]いて 駅[えき]まで" },
          { text: "行[い]くつもり" },
          { text: "です" },
        ],
        notes: "歩いて駅まで行く variant, polite",
      },
    ],
  },
  {
    english:
      "I have no intention of buying a new computer — this old one still works fine.",
    answers: [
      {
        segments: [
          { text: "新[あたら]しいパソコンを" },
          { text: "買[か]うつもりはない", blank: true },
          {
            text: "。この 古[ふる]いパソコンはまだ 大丈夫[だいじょうぶ]だから。",
          },
        ],
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを" },
          { text: "買[か]うつもりがない" },
          {
            text: "。この 古[ふる]いパソコンはまだ 大丈夫[だいじょうぶ]だから。",
          },
        ],
        notes: "が instead of は in つもりはない",
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを" },
          { text: "買[か]うつもりじゃない" },
          {
            text: "。この 古[ふる]いパソコンはまだ 大丈夫[だいじょうぶ]だから。",
          },
        ],
        notes: "じゃ instead of は in つもりはない",
      },
      {
        segments: [
          { text: "新[あたら]しいコンピューターを" },
          { text: "買[か]うつもりはない" },
          {
            text: "。この 古[ふる]いコンピューターはまだ 大丈夫[だいじょうぶ]だから。",
          },
        ],
        notes: "コンピューター instead of パソコン",
      },
      {
        segments: [
          { text: "新[あたら]しいコンピューターを" },
          { text: "買[か]うつもりがない" },
          {
            text: "。この 古[ふる]いコンピューターはまだ 大丈夫[だいじょうぶ]だから。",
          },
        ],
        notes: "コンピューター + が",
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを" },
          { text: "買[か]うつもりはない" },
          {
            text: "。その 古[ふる]いパソコンはまだ 大丈夫[だいじょうぶ]だから。",
          },
        ],
        notes: "その instead of この for the old computer",
      },
      {
        segments: [
          {
            text: "新[あたら]しいパソコンを買[か]うつもりはありません。この 古[ふる]いパソコンはまだ 大丈夫[だいじょうぶ]",
          },
        ],
        notes: "polite: つもりはありません、大丈夫ですから",
      },
    ],
  },
  {
    english:
      "I intend not to drink any alcohol at Yuki's birthday party this year.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーで お酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーでは ぜんぜん お酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
        notes: "With ぜんぜん for emphasis on 'any'",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーでは お酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Topic は on パーティー",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーで お酒[さけ]を 飲[の]むつもりは",
          },
          { text: "ない", blank: true },
        ],
        notes: "つもりはない structure - have no intention of drinking",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーで お酒[さけ]を 飲[の]むつもりが",
          },
          { text: "ない", blank: true },
        ],
        notes: "つもりがない structure",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーで お酒[さけ]を 飲[の]むつもりは ありません",
          },
        ],
        notes: "つもりはありません polite",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーで お酒[さけ]を 飲[の]むつもりが ありません",
          },
        ],
        notes: "つもりがありません polite",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーで 酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
        notes: "酒 instead of お酒",
      },
      {
        segments: [
          {
            text: "ゆきさんの 誕生日[たんじょうび]パーティーで 今年[ことし]は お酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
        notes: "今年 moved after パーティーで",
      },
      {
        segments: [
          {
            text: "ゆきさんの 誕生日[たんじょうび]パーティーでは 今年[ことし]、お酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Sentence starting with ゆきさんの without 今年 up front",
      },
    ],
  },
  {
    english: "I intend not to speak to Hiroshi ever again after what he said.",
    hint: "Hiroshi = ひろし",
    answers: [
      {
        segments: [
          { text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんに" },
          { text: "話[はな]さないつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんと話[はな]さないつもり",
          },
          { text: "です" },
        ],
        notes: "と particle instead of に with 話す",
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんには話[はな]さないつもり",
          },
          { text: "です" },
        ],
        notes: "もうひろしさんには (は for emphasis/topic marker added)",
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんとは話[はな]さないつもり",
          },
          { text: "です" },
        ],
        notes: "もうひろしさんとは (と + は for emphasis)",
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんに話[はな]すつもりはない",
          },
        ],
        notes:
          "つもりはない structure — have no intention of speaking to Hiroshi",
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんと話[はな]すつもりはない",
          },
        ],
        notes: "つもりはない with と particle",
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんには話[はな]すつもりはない",
          },
        ],
        notes: "つもりはない with には",
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんとは話[はな]すつもりはない",
          },
        ],
        notes: "つもりはない with とは",
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんに話[はな]すつもりがない",
          },
        ],
        notes: "つもりがない structure",
      },
      {
        segments: [
          {
            text: "ひろしさんがあんなことを言[い]ったから、もうひろしさんとは話[はな]すつもりがない",
          },
        ],
        notes: "つもりがない with とは",
      },
    ],
  },
  {
    english:
      "I have no intention of becoming a lawyer — I intend to work at a company.",
    answers: [
      {
        segments: [
          { text: "弁護士[べんごし]に" },
          { text: "なるつもりはない", blank: true },
          { text: "。会社[かいしゃ]で" },
          { text: "働[はたら]くつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "弁護士[べんごし]に" },
          { text: "なるつもりがない" },
          { text: "。会社[かいしゃ]で" },
          { text: "働[はたら]くつもり" },
          { text: "です" },
        ],
        notes: "が swap in つもりはない → つもりがない",
      },
      {
        segments: [
          { text: "弁護士[べんごし]に" },
          { text: "なるつもりじゃない" },
          { text: "。会社[かいしゃ]で" },
          { text: "働[はたら]くつもり" },
          { text: "です" },
        ],
        notes: "じゃない swap: つもりはない → つもりじゃない",
      },
      {
        segments: [
          { text: "弁護士[べんごし]に" },
          { text: "なるつもりはない" },
          { text: "。でも、会社[かいしゃ]で" },
          { text: "働[はたら]くつもり" },
          { text: "です" },
        ],
        notes: "Two sentences connected with でも",
      },
      {
        segments: [
          { text: "弁護士[べんごし]に" },
          { text: "なるつもりがない" },
          { text: "。でも、会社[かいしゃ]で" },
          { text: "働[はたら]くつもり" },
          { text: "です" },
        ],
        notes: "Two sentences connected with でも; が swap",
      },
      {
        segments: [
          { text: "弁護士[べんごし]に なるつもりはないが、会社[かいしゃ]で" },
          { text: "働[はたら]くつもり" },
          { text: "です" },
        ],
        notes: "Joined with が",
      },
      {
        segments: [
          { text: "弁護士[べんごし]に なるつもりはないけど、会社[かいしゃ]で" },
          { text: "働[はたら]くつもり" },
          { text: "です" },
        ],
        notes: "Joined with けど",
      },
      {
        segments: [
          {
            text: "弁護士[べんごし]に なるつもりはない。会社員[かいしゃいん]に",
          },
          { text: "なるつもり" },
          { text: "です" },
        ],
        notes: "会社員になるつもり for second clause",
      },
      {
        segments: [
          {
            text: "弁護士[べんごし]に なるつもりじゃないけど、会社[かいしゃ]で",
          },
          { text: "働[はたら]くつもり" },
          { text: "です" },
        ],
        notes: "つもりじゃない and けど connector",
      },
    ],
  },
  {
    english:
      "I have no intention of doing a homestay — I'm planning to live in the dormitory.",
    answers: [
      {
        segments: [
          { text: "ホームステイを" },
          { text: "するつもりはない", blank: true },
          { text: "。寮[りょう]に" },
          { text: "住[す]むつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          {
            text: "ホームステイをするつもりがない。寮[りょう]に住[す]むつもり",
          },
          { text: "です" },
        ],
        notes: "が instead of は in first clause",
      },
      {
        segments: [
          {
            text: "ホームステイをするつもりじゃない。寮[りょう]に住[す]むつもり",
          },
          { text: "です" },
        ],
        notes: "じゃない instead of はない",
      },
      {
        segments: [
          {
            text: "ホームステイをするつもりはありません。寮[りょう]に住[す]むつもり",
          },
          { text: "です" },
        ],
        notes: "Polite はありません in first clause",
      },
      {
        segments: [
          {
            text: "ホームステイをするつもりがありません。寮[りょう]に住[す]むつもり",
          },
          { text: "です" },
        ],
        notes: "Polite がありません in first clause",
      },
      {
        segments: [
          { text: "ホームステイをしないつもり" },
          { text: "です" },
          { text: "。寮[りょう]に住[す]むつもり" },
          { text: "です" },
        ],
        notes: "しないつもり variation for first clause",
      },
    ],
  },
  {
    english:
      "I have no intention of becoming a nurse — I intend to study international relations.",
    answers: [
      {
        segments: [
          { text: "看護師[かんごし]に" },
          { text: "なるつもりはない", blank: true },
          { text: "。国際関係[こくさいかんけい]を" },
          { text: "勉強[べんきょう]するつもり", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "看護師[かんごし]に" },
          { text: "なるつもりがない" },
          { text: "。国際関係[こくさいかんけい]を" },
          { text: "勉強[べんきょう]するつもり" },
          { text: "です" },
        ],
        notes: "つもりがない variant for first clause",
      },
      {
        segments: [
          { text: "看護師[かんごし]に" },
          { text: "ならないつもり" },
          { text: "です" },
          { text: "。国際関係[こくさいかんけい]を" },
          { text: "勉強[べんきょう]するつもり" },
          { text: "です" },
        ],
        notes: "ないつもり for first clause + つもりです",
      },
      ],
  },
  {
    english: "Is Naomi really planning to go to Australia alone?",
    hint: "Naomi = なおみ",
    answers: [
      {
        segments: [
          {
            text: "なおみさんは 本当[ほんとう]に 一人[ひとり]で オーストラリアに",
          },
          { text: "行[い]くつもり", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
      },
      {
        segments: [
          {
            text: "なおみさんは 本当[ほんとう]に 一人[ひとり]で オーストラリアへ",
          },
          { text: "行[い]くつもり" },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "With へ instead of に",
      },
      {
        segments: [
          {
            text: "なおみさんは 本当[ほんとう]に オーストラリアに 一人[ひとり]で",
          },
          { text: "行[い]くつもり" },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "Word order: オーストラリアに before 一人で",
      },
      {
        segments: [
          {
            text: "なおみさんは 本当[ほんとう]に オーストラリアへ 一人[ひとり]で",
          },
          { text: "行[い]くつもり" },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "Word order: オーストラリアへ before 一人で",
      },
      {
        segments: [
          {
            text: "本当[ほんとう]に、なおみさんは 一人[ひとり]で オーストラリアに",
          },
          { text: "行[い]くつもり" },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "本当に at start",
      },
    ],
  },
]
