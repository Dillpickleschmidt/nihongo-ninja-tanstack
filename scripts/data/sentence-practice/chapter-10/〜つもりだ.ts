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
          { text: "パーティーで 何[なに]も 食[た]べないつもり", blank: true },
          { text: "です" },
          { text: "。もう 晩[ばん]ご 飯[はん]を 食[た]べたから。" },
        ],
        notes: "パーティーでは → パーティーで (は dropped)",
      },
      {
        segments: [
          { text: "パーティーでは 何[なに]も 食[た]べないつもり", blank: true },
          { text: "です" },
          { text: "。もう 夕[ゆう]ご 飯[はん]を 食[た]べたから。" },
        ],
        notes: "晩ご飯 → 夕ご飯",
      },
      {
        segments: [
          { text: "パーティーで 何[なに]も 食[た]べないつもり", blank: true },
          { text: "です" },
          { text: "。もう 夕[ゆう]ご 飯[はん]を 食[た]べたから。" },
        ],
        notes: "パーティーで (は dropped) + 夕ご飯",
      },
      {
        segments: [
          { text: "パーティーでは 何[なに]も" },
          { text: "食[た]べるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。もう 晩[ばん]ご 飯[はん]を 食[た]べたから。" },
        ],
        notes: "Uses 食べるつもりはありません / 食べるつもりはない structure.",
      },
      {
        segments: [
          { text: "パーティーでは 何[なに]も" },
          { text: "食[た]べるつもりはないです", blank: true },
          { text: "。もう 晩[ばん]ご 飯[はん]を 食[た]べたから。" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
    ],
  },
  {
    english: "I have no intention of taking the exam again — once was enough.",
    answers: [
      {
        segments: [
          { text: "もう 一度[いちど] 試験[しけん]を" },
          { text: "受[う]けるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。一回[いっかい]で" },
          {
            text: "十分[じゅうぶん]",
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Natural exam phrasing with 試験を受ける and 一回で十分でした/だった.",
      },
      {
        segments: [
          { text: "もう 一度[いちど] 試験[しけん]を" },
          { text: "受[う]けるつもりはないです", blank: true },
          { text: "。一回[いっかい]で 十分[じゅうぶん]でした。" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "また 試験[しけん]を" },
          { text: "受[う]けるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。一回[いっかい]で" },
          {
            text: "十分[じゅうぶん]",
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses また instead of もう一度.",
      },
      {
        segments: [
          { text: "試験[しけん]を もう 一度[いちど]" },
          { text: "受[う]けるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。一回[いっかい]で" },
          {
            text: "十分[じゅうぶん]",
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Moves もう一度 after 試験を.",
      },
      {
        segments: [
          { text: "もう 一度[いちど] 試験[しけん]を" },
          { text: "受[う]けないつもり", blank: true },
          { text: "です。一回[いっかい]で 十分[じゅうぶん]でした。" },
        ],
        register: "polite",
        notes: "受けないつもりです variant.",
      },
    ],
  },
  {
    english: "I'm planning to go to Kyoto by Shinkansen next spring.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 来年[らいねん]の 春[はる]、新幹線[しんかんせん]で 京都[きょうと]に 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Basic に destination variant."
      },
      {
        segments: [
          {
            text: "私[わたし]は 来年[らいねん]の 春[はる]、新幹線[しんかんせん]で 京都[きょうと]へ 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Uses へ instead of に.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 来年[らいねん]の 春[はる]に 新幹線[しんかんせん]で 京都[きょうと]に 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Uses 来年の春に with に.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 来年[らいねん]の 春[はる]に 新幹線[しんかんせん]で 京都[きょうと]へ 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Uses 来年の春に with へ.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 来年[らいねん]の 春[はる]に 京都[きょうと]に 新幹線[しんかんせん]で 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Alternative word order, に.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 来年[らいねん]の 春[はる]に 京都[きょうと]へ 新幹線[しんかんせん]で 行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
        notes: "Alternative word order, へ.",
      },
    ],
  },
  {
    english:
      "I have no intention of selling my old bicycle — I've had it since high school.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い 自転車[じてんしゃ]を" },
          { text: "売[う]るつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。高校[こうこう]のときから 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses この古い自転車.",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い 自転車[じてんしゃ]を" },
          { text: "売[う]るつもりはないです", blank: true },
          { text: "。高校[こうこう]のときから 持[も]っています。" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "古[ふる]い 自転車[じてんしゃ]を" },
          { text: "売[う]るつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。高校[こうこう]のときから 持[も]って" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Without この.",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い 自転車[じてんしゃ]を" },
          { text: "売[う]らないつもり", blank: true },
          { text: "です。高校[こうこう]のときから 持[も]っています。" },
        ],
        register: "polite",
        notes: "Uses 売らないつもりです.",
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
        notes: "晩ご飯の時は with ぜんぜん before スマホを.",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 時[とき]は、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり", blank: true },
          { text: "です" },
        ],
        notes: "夕ご飯の時は with ぜんぜん before スマホを.",
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 時[とき]は、スマホをぜんぜん" },
          { text: "使[つか]わないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Places ぜんぜん before the verb.",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 時[とき]は、スマホをぜんぜん" },
          { text: "使[つか]わないつもり", blank: true },
          { text: "です" },
        ],
        notes: "夕ご飯 with ぜんぜん before the verb.",
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]の 間[あいだ]は、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 晩ご飯の間は for during dinner.",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]の 間[あいだ]は、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 夕ご飯の間は for during dinner.",
      },
      {
        segments: [
          { text: "晩[ばん]ご 飯[はん]中[ちゅう]は、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 晩ご飯中は for during dinner.",
      },
      {
        segments: [
          { text: "夕[ゆう]ご 飯[はん]中[ちゅう]は、ぜんぜん スマホを" },
          { text: "使[つか]わないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 夕ご飯中は for during dinner.",
      },
    ],
  },
  {
    english:
      "I have no intention of going back to that restaurant — even the fries weren't good!",
    hint: "fries = ポテト",
    answers: [
      {
        segments: [
          { text: "あのレストランには もう" },
          { text: "行[い]くつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。ポテトも" },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses あのレストランにはもう for not going back there.",
      },
      {
        segments: [
          { text: "あのレストランには もう" },
          { text: "行[い]くつもりはないです", blank: true },
          { text: "。ポテトも おいしくありませんでした。" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "あのレストランに また" },
          { text: "行[い]くつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。ポテトも" },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses また行く for going back.",
      },
      {
        segments: [
          { text: "あのレストランに もう 一度[いちど]" },
          { text: "行[い]くつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。ポテトも" },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses もう一度行く for going back.",
      },
      {
        segments: [
          { text: "ポテトも おいしくなかったから、あのレストランには もう" },
          { text: "行[い]くつもりはない", blank: true },
          { text: "。" },
        ],
        register: "casual",
        notes: "Reason first, casual.",
      },
    ],
  },
  {
    english: "I'm planning to practice guitar every day until the concert.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は コンサートまで 毎日[まいにち]ギターを" },
          { text: "練習[れんしゅう]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Basic wording with コンサートまで.",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートまで ギターを 毎日[まいにち]" },
          { text: "練習[れんしゅう]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Places 毎日 before 練習する.",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートの日[ひ]まで 毎日[まいにち]ギターを" },
          { text: "練習[れんしゅう]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses コンサートの日まで for until the concert day.",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートの日[ひ]まで ギターを 毎日[まいにち]" },
          { text: "練習[れんしゅう]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses コンサートの日まで with 毎日 before 練習する.",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートまで 毎日[まいにち]ギターの 練習[れんしゅう]を" },
          { text: "するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses ギターの練習をする.",
      },
    ],
  },
  {
    english:
      "I have no intention of going back to live in the dormitory — living alone is so much better.",
    hint: "living alone = 一人暮らし",
    answers: [
      {
        segments: [
          { text: "もう 寮[りょう]に 戻[もど]るつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。一人暮[ひとりぐ]らしのほうが ずっと" },
          {
            text: "いい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses もう寮に戻る for going back to the dormitory.",
      },
      {
        segments: [
          { text: "もう 寮[りょう]に" },
          { text: "戻[もど]るつもりはないです", blank: true },
          { text: "。一人暮[ひとりぐ]らしのほうが ずっと" },
          {
            text: "いい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "また 寮[りょう]に 住[す]むつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。一人暮[ひとりぐ]らしのほうが ずっと" },
          {
            text: "いい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses また寮に住む for living in the dormitory again.",
      },
      {
        segments: [
          { text: "寮[りょう]に 戻[もど]って 住[す]むつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。一人暮[ひとりぐ]らしのほうが ずっと" },
          {
            text: "いい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 寮に戻って住む.",
      },
    ],
  },
  {
    english:
      "I'm planning to quit my part-time job next month and focus on studying.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]、アルバイトをやめて、勉強[べんきょう]に 集中[しゅうちゅう]する" },
          { text: "つもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 勉強に集中する for focusing on studying.",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]、バイトをやめて、勉強[べんきょう]に 集中[しゅうちゅう]する" },
          { text: "つもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses バイト instead of アルバイト.",
      },
      {
        segments: [
          { text: "来月[らいげつ]から、アルバイトをやめて、勉強[べんきょう]に 集中[しゅうちゅう]する" },
          { text: "つもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 来月から to frame the plan from next month.",
      },
      {
        segments: [
          { text: "私[わたし]は 来月[らいげつ]、アルバイトを やめるつもりです。そして、勉強[べんきょう]に 集中[しゅうちゅう]する" },
          { text: "つもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Splits quitting and focusing into two sentences.",
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
          { text: "起[お]きるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。ゆっくり 寝[ね]られる 唯一[ゆいいつ]の日[ひ]ですから。" },
        ],
        register: "polite",
        notes: "Uses 唯一の日 for the only day.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は、早[はや]く" },
          { text: "起[お]きるつもりはないです", blank: true },
          { text: "。ゆっくり 寝[ね]られる 唯一[ゆいいつ]の日[ひ]ですから。" },
        ],
        register: "polite",
        notes: "Polite ないです variant with 唯一の日.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は、早[はや]く" },
          { text: "起[お]きるつもりはない", blank: true },
          { text: "。ゆっくり 寝[ね]られる 唯一[ゆいいつ]の日[ひ]だから。" },
        ],
        register: "casual",
        notes: "Casual counterpart with 唯一の日.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]だけ ゆっくり 寝[ね]られるので、早[はや]く" },
          { text: "起[お]きるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        register: "polite",
        notes: "Uses 日曜日だけ to express the only day.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]だけ ゆっくり 寝[ね]られるから、早[はや]く" },
          { text: "起[お]きるつもりはない", blank: true },
          { text: "。" },
        ],
        register: "casual",
        notes: "Casual 日曜日だけ variant.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]には、早[はや]く" },
          { text: "起[お]きるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。ゆっくり 寝[ね]られる 日[ひ]ですから。" },
        ],
        register: "polite",
        notes: "Simpler ゆっくり寝られる日 reason.",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は、早起[はやお]きする" },
          { text: "つもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。ゆっくり 寝[ね]られる 唯一[ゆいいつ]の日[ひ]ですから。" },
        ],
        register: "polite",
        notes: "Uses 早起きする instead of 早く起きる.",
      },
    ],
  },
  {
    english:
      "I'm planning to take a cooking class and make sushi at home someday.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は いつか 料理教室[りょうりきょうしつ]に 行[い]って、家[いえ]で 寿司[すし]を" },
          { text: "作[つく]るつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 料理教室に行く for taking a cooking class.",
      },
      {
        segments: [
          { text: "私[わたし]は いつか 料理教室[りょうりきょうしつ]に 通[かよ]って、家[いえ]で 寿司[すし]を" },
          { text: "作[つく]るつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 料理教室に通う.",
      },
      {
        segments: [
          { text: "私[わたし]は いつか 料理[りょうり]のクラスを 取[と]って、家[いえ]で 寿司[すし]を" },
          { text: "作[つく]るつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 料理のクラスを取る.",
      },
      {
        segments: [
          { text: "いつか 料理教室[りょうりきょうしつ]に 行[い]って、家[いえ]で すしを" },
          { text: "作[つく]るつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses kana すし.",
      },
      {
        segments: [
          { text: "私[わたし]は いつか 料理教室[りょうりきょうしつ]に 行[い]って、家[いえ]で お寿司[すし]を" },
          { text: "作[つく]るつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses お寿司.",
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
          { text: "けんじさんは、卒業[そつぎょう]するまでは 髪[かみ]を" },
          { text: "切[き]るつもりはない", blank: true },
          { text: "と 言[い]って" },
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
        notes: "Uses 卒業するまでは for until after graduation.",
      },
      {
        segments: [
          { text: "けんじさんは、卒業[そつぎょう]するまでは 髪[かみ]を" },
          { text: "切[き]らないつもり", blank: true },
          { text: "だと 言[い]って" },
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
        notes: "Uses 切らないつもり.",
      },
      {
        segments: [
          { text: "けんじさんは、卒業[そつぎょう]してから 髪[かみ]を" },
          { text: "切[き]るつもり", blank: true },
          { text: "だと 言[い]って" },
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
        notes: "Positive plan after graduation.",
      },
      {
        segments: [
          { text: "けんじさんは、卒業[そつぎょう]するまでは 髪[かみ]を" },
          { text: "切[き]るつもりはありません", blank: true },
          { text: "と 言[い]って" },
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
        register: "polite",
        notes: "Quotes a polite ありません form.",
      },
    ],
  },
  {
    english:
      "I have no intention of riding the bus — I'm planning to walk to the station.",
    answers: [
      {
        segments: [
          { text: "バスに 乗[の]るつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。駅[えき]まで 歩[ある]いて 行[い]くつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 駅まで歩いて行く for walking to the station.",
      },
      {
        segments: [
          { text: "バスには 乗[の]るつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。駅[えき]まで 歩[ある]いて 行[い]くつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses バスには as a contrastive topic.",
      },
      {
        segments: [
          { text: "バスに" },
          { text: "乗[の]るつもりはないです", blank: true },
          { text: "。駅[えき]まで 歩[ある]いて 行[い]くつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "バスに 乗[の]るつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。歩[ある]いて 駅[えき]に 行[い]くつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 歩いて駅に行く.",
      },
      {
        segments: [
          { text: "バスに 乗[の]らないつもり" },
          { text: "です", blank: true },
          { text: "。駅[えき]まで 歩[ある]いて 行[い]くつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Uses 乗らないつもりです.",
      },
    ],
  },
  {
    english:
      "I have no intention of buying a new computer — this old one still works fine.",
    hint: "computer = パソコン",
    answers: [
      {
        segments: [
          { text: "新[あたら]しいパソコンを 買[か]うつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。今[いま]のパソコンは まだ" },
          {
            text: "使[つか]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 今のパソコン for this old one.",
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを" },
          { text: "買[か]うつもりはないです", blank: true },
          { text: "。今[いま]のパソコンは まだ 使[つか]えます。" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを 買[か]うつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。今[いま]のパソコンは まだ ちゃんと" },
          {
            text: "使[つか]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses ちゃんと使える for works fine.",
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを 買[か]うつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。古[ふる]いのは まだ" },
          {
            text: "使[つか]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 古いの for the old one.",
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを 買[か]うつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。この 古[ふる]いパソコンは まだ" },
          {
            text: "使[つか]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses この古いパソコン.",
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを 買[か]うつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。今[いま]のは まだ" },
          {
            text: "使[つか]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 今の for the current one.",
      },
      {
        segments: [
          { text: "新[あたら]しいパソコンを" },
          { text: "買[か]わないつもり", blank: true },
          { text: "です。今[いま]のパソコンは まだ 使[つか]えます。" },
        ],
        register: "polite",
        notes: "Uses 買わないつもりです.",
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
        notes: "With ぜんぜん for emphasis on 'any'.",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーでは お酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Topic は on パーティー.",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーで お酒[さけ]を 飲[の]むつもりは",
          },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 飲むつもりはありません / 飲むつもりはない.",
      },
      {
        segments: [
          {
            text: "今年[ことし]、ゆきさんの 誕生日[たんじょうび]パーティーで お酒[さけ]を",
          },
          { text: "飲[の]むつもりはないです", blank: true },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          {
            text: "今年[ことし]は、ゆきさんの 誕生日[たんじょうび]パーティーで お酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今年は at the beginning.",
      },
      {
        segments: [
          {
            text: "ゆきさんの 誕生日[たんじょうび]パーティーでは 今年[ことし]、お酒[さけ]を",
          },
          { text: "飲[の]まないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Starts with the party as the topic.",
      },
    ],
  },
  {
    english: "I intend not to speak to Hiroshi ever again after what he said.",
    hint: "Hiroshi = ひろし",
    answers: [
      {
        segments: [
          { text: "ひろしさんが あんなことを 言[い]ったから、もう" },
          { text: "話[はな]さないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Omits Hiroshi in the main clause after the reason establishes him.",
      },
      {
        segments: [
          { text: "ひろしさんが あんなことを 言[い]ったから、二度[にど]と" },
          { text: "話[はな]さないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 二度と for ever again.",
      },
      {
        segments: [
          { text: "ひろしさんが あんなことを 言[い]ったから、もう ひろしさんとは" },
          { text: "話[はな]さないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Explicitly marks Hiroshi as the person not to talk with.",
      },
      {
        segments: [
          { text: "ひろしさんが あんなことを 言[い]ったから、もう 話[はな]すつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 話すつもりはありません / 話すつもりはない.",
      },
      {
        segments: [
          { text: "ひろしさんが あんなことを 言[い]ったから、二度[にど]と 話[はな]すつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 二度と with 話すつもりはありません/ない.",
      },
      {
        segments: [
          { text: "ひろしさんが あんなことを 言[い]ったから、もう" },
          { text: "話[はな]すつもりはないです", blank: true },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "ひろしさんに あんなことを 言[い]われたから、もう" },
          { text: "話[はな]さないつもり", blank: true },
          { text: "です" },
        ],
        notes: "Passive reason: after Hiroshi said that to me.",
      },
    ],
  },
  {
    english:
      "I have no intention of becoming a lawyer — I intend to work at a company.",
    answers: [
      {
        segments: [
          { text: "弁護士[べんごし]に なるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。会社[かいしゃ]で 働[はたら]くつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 会社で働くつもり.",
      },
      {
        segments: [
          { text: "弁護士[べんごし]に" },
          { text: "なるつもりはないです", blank: true },
          { text: "。会社[かいしゃ]で 働[はたら]くつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "弁護士[べんごし]には なるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。会社[かいしゃ]で 働[はたら]くつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 弁護士には as a contrastive topic.",
      },
      {
        segments: [
          { text: "弁護士[べんごし]に なるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。会社員[かいしゃいん]に なるつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 会社員になるつもり for the second clause.",
      },
      {
        segments: [
          { text: "弁護士[べんごし]に なるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "が、会社[かいしゃ]で 働[はたら]くつもり", blank: true },
          { text: "です" },
        ],
        notes: "Joined with が."
      },
      {
        segments: [
          { text: "弁護士[べんごし]に" },
          { text: "ならないつもり", blank: true },
          { text: "です。会社[かいしゃ]で 働[はたら]くつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Uses ならないつもりです.",
      },
    ],
  },
  {
    english:
      "I have no intention of doing a homestay — I'm planning to live in the dormitory.",
    answers: [
      {
        segments: [
          { text: "ホームステイを するつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。寮[りょう]に 住[す]むつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses ホームステイをするつもりはありません/ない.",
      },
      {
        segments: [
          { text: "ホームステイを" },
          { text: "するつもりはないです", blank: true },
          { text: "。寮[りょう]に 住[す]むつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "ホームステイは するつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。寮[りょう]に 住[す]むつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses ホームステイは as a contrastive topic.",
      },
      {
        segments: [
          { text: "ホームステイを しないつもり" },
          { text: "です", blank: true },
          { text: "。寮[りょう]に 住[す]むつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Uses しないつもりです.",
      },
      {
        segments: [
          { text: "ホームステイを するつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。寮[りょう]で 生活[せいかつ]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 寮で生活するつもり.",
      },
    ],
  },
  {
    english:
      "I have no intention of becoming a nurse — I intend to study international relations.",
    answers: [
      {
        segments: [
          { text: "看護師[かんごし]に なるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。国際関係[こくさいかんけい]を 勉強[べんきょう]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 国際関係を勉強するつもり.",
      },
      {
        segments: [
          { text: "看護師[かんごし]に" },
          { text: "なるつもりはないです", blank: true },
          { text: "。国際関係[こくさいかんけい]を 勉強[べんきょう]するつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Polite ないです variant.",
      },
      {
        segments: [
          { text: "看護師[かんごし]には なるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。国際関係[こくさいかんけい]を 勉強[べんきょう]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 看護師には as a contrastive topic.",
      },
      {
        segments: [
          { text: "看護師[かんごし]に" },
          { text: "ならないつもり", blank: true },
          { text: "です。国際関係[こくさいかんけい]を 勉強[べんきょう]するつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Uses ならないつもりです.",
      },
      {
        segments: [
          { text: "看護師[かんごし]に なるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。国際関係学[こくさいかんけいがく]を 勉強[べんきょう]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 国際関係学 for the field of study.",
      },
      {
        segments: [
          { text: "看護師[かんごし]に なるつもりは" },
          {
            text: "ある",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "。国際関係[こくさいかんけい]を 専攻[せんこう]するつもり", blank: true },
          { text: "です" },
        ],
        notes: "Uses 専攻する for studying as a major.",
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
          { text: "行[い]くつもり", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "With へ instead of に.",
      },
      {
        segments: [
          {
            text: "なおみさんは 本当[ほんとう]に オーストラリアに 一人[ひとり]で",
          },
          { text: "行[い]くつもり", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "Word order: オーストラリアに before 一人で.",
      },
      {
        segments: [
          {
            text: "なおみさんは 本当[ほんとう]に オーストラリアへ 一人[ひとり]で",
          },
          { text: "行[い]くつもり", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "Word order: オーストラリアへ before 一人で.",
      },
      {
        segments: [
          {
            text: "本当[ほんとう]に、なおみさんは 一人[ひとり]で オーストラリアに",
          },
          { text: "行[い]くつもり", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        register: "polite",
        notes: "本当に at start.",
      },
      {
        segments: [
          {
            text: "なおみさんは 本当[ほんとう]に 一人[ひとり]で オーストラリアに",
          },
          { text: "行[い]くつもり", blank: true },
          { text: "？" },
        ],
        register: "casual",
        notes: "Casual question.",
      },
      {
        segments: [
          {
            text: "なおみさん、本当[ほんとう]に 一人[ひとり]で オーストラリアに",
          },
          { text: "行[い]くつもり", blank: true },
          { text: "？" },
        ],
        register: "casual",
        notes: "Casual spoken topic with comma.",
      },
    ],
  },
]
