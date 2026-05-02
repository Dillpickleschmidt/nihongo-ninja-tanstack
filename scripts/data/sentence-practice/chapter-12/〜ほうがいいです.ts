import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "If you have a fever, you shouldn't go to school.",
    answers: [
      {
        segments: [
          { text: "熱[ねつ]があるから、学校[がっこう]に" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "熱[ねつ]があるときは、学校[がっこう]に" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "熱[ねつ]があるから、学校[がっこう]には" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "熱[ねつ]があるときは、学校[がっこう]には" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "熱[ねつ]があったら、学校[がっこう]に" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You should book a reservation early — that restaurant is really popular.",
    answers: [
      {
        segments: [
          { text: "あのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あのレストランはすごく 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
          { text: "。あのレストランはとても 人気[にんき]があるから。" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
          { text: "です。" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あのレストランはすごく 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
          { text: "です。" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]をしたほうがいい", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "You shouldn't skip breakfast — you'll get hungry by noon.",
    answers: [
      {
        segments: [
          { text: "朝[あさ]ご飯[はん]を" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です。昼[ひる]ごろおなかがすくから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "朝[あさ]ご飯[はん]を" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です。昼[ひる]までにおなかがすくから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "朝[あさ]ご飯[はん]は" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です。昼[ひる]ごろおなかがすくから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "昼[ひる]ごろおなかがすくから、朝[あさ]ご飯[はん]を" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "昼[ひる]までにおなかがすくから、朝[あさ]ご飯[はん]を" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "昼[ひる]ごろおなかがすくから、朝[あさ]ご飯[はん]は" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You shouldn't drink alcohol while taking medicine.",
    answers: [
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで" },
          { text: "いる 間[あいだ]は、お 酒[さけ]を" },
          { text: "飲[の]まないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで" },
          { text: "いる 間[あいだ]は、お 酒[さけ]を" },
          { text: "飲[の]まないほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで" },
          { text: "いるときは、お 酒[さけ]を" },
          { text: "飲[の]まないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで" },
          { text: "いるときは、お 酒[さけ]を" },
          { text: "飲[の]まないほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで" },
          { text: "いる 間[あいだ]は、 酒[さけ]を" },
          { text: "飲[の]まないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで" },
          { text: "いる 間[あいだ]は、 酒[さけ]を" },
          { text: "飲[の]まないほうがいいです", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You should watch that movie — it's really interesting.",
    answers: [
      {
        segments: [
          { text: "あの 映画[えいが]はとても 面白[おもしろ]いから、" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はすごく 面白[おもしろ]いから、" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "その 映画[えいが]はとても 面白[おもしろ]いから、" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "その 映画[えいが]はすごく 面白[おもしろ]いから、" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はとても 面白[おもしろ]いから、" },
          { text: "見[み]たほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あの 映画[えいが]、" },
          { text: "見[み]たほうがいいです", blank: true },
          { text: "。とても 面白[おもしろ]いから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あの 映画[えいが]、" },
          { text: "見[み]たほうがいい", blank: true },
          { text: "。すごく 面白[おもしろ]いから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あの 映画[えいが]すごく 面白[おもしろ]いです。" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "その 映画[えいが]すごく 面白[おもしろ]いです。" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "その 映画[えいが]とても 面白[おもしろ]いです。" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はとても 面白[おもしろ]い。だから、" },
          { text: "見[み]たほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はすごく 面白[おもしろ]い。だから、" },
          { text: "見[み]たほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あの 映画[えいが]、とても 面白[おもしろ]いんです。" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "その 映画[えいが]、とても 面白[おもしろ]いんです。" },
          { text: "見[み]たほうがいいです", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You should rest today — you look tired.",
    answers: [
      {
        segments: [
          { text: "疲[つか]れているから、今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "。疲[つか]れているから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "です。疲[つか]れているから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "疲[つか]れているから、今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "疲[つか]れている。今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
                  ],
        register: "casual",
      },
      {
        segments: [
          { text: "疲[つか]れている。今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "疲[つか]れているから、今日[きょう]は" },
          { text: "出[で]かけないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "疲[つか]れているから、" },
          { text: "休[やす]んだほうがいい", blank: true },
                  ],
        register: "casual",
      },
      {
        segments: [
          { text: "疲[つか]れているから、" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "疲[つか]れて" },
          { text: "いる" },
          { text: "から、今日[きょう]は" },
          { text: "出[で]かけないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You shouldn't walk home alone at night — it's scary.",
    answers: [
      {
        segments: [
          { text: "夜[よる]、一人[ひとり]で" },
          { text: "家[いえ]に 帰[かえ]らないほうがいいです", blank: true },
          { text: "。" },
          { text: "怖[こわ]い" },
          { text: "から" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "怖[こわ]いから、夜[よる]は一人[ひとり]で" },
          { text: "家[いえ]に 帰[かえ]らないほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "夜[よる]、一人[ひとり]で" },
          { text: "歩[ある]いて 帰[かえ]らないほうがいいです", blank: true },
          { text: "。" },
          { text: "怖[こわ]い" },
          { text: "から" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "怖[こわ]いから、夜[よる]は一人[ひとり]で" },
          { text: "歩[ある]いて 帰[かえ]らないほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "夜[よる]に一人[ひとり]で" },
          { text: "家[いえ]に 帰[かえ]らないほうがいいです", blank: true },
          { text: "。" },
          { text: "怖[こわ]い" },
          { text: "から" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "夜[よる]は一人[ひとり]で" },
          { text: "家[いえ]に 帰[かえ]らないほうがいいです", blank: true },
          { text: "。" },
          { text: "怖[こわ]い" },
          { text: "から" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "夜[よる]は一人[ひとり]で" },
          { text: "歩[ある]いて 帰[かえ]らないほうがいいです", blank: true },
          { text: "。" },
          { text: "怖[こわ]い" },
          { text: "から" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You should study kanji — the test is next week.",
    answers: [
      {
        segments: [
          { text: "漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいいです", blank: true },
          { text: "。来週[らいしゅう]テストがあるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "です。来週[らいしゅう]にテストがあるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるんですから、漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]は" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]は" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]の勉強[べんきょう]を" },
          { text: "したほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You shouldn't cut class — the exam is coming up soon.",
    hint: "「cut class」= サボる",
    answers: [
      {
        segments: [
          { text: "もうすぐ 試験[しけん]があるから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もうすぐ 試験[しけん]があるから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
          { text: "。もうすぐ 試験[しけん]があるから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
          { text: "です。もうすぐ 試験[しけん]があるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もうすぐテストがあるから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もうすぐ 試験[しけん]があるから、" },
          { text: "サボらないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もうすぐ 試験[しけん]だから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もうすぐテストだから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "You shouldn't tell lies — it'll cause a fight.",
    answers: [
      {
        segments: [
          { text: "うそを" },
          { text: "つかないほうがいい", blank: true },
          { text: "。けんかになるから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "うそを" },
          { text: "つかないほうがいいです", blank: true },
          { text: "。けんかになるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "けんかになるから、うそを" },
          { text: "つかないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "けんかになるから、うそを" },
          { text: "つかないほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "うそを" },
          { text: "つかないほうがいい", blank: true },
          { text: "。けんかするから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "うそを" },
          { text: "つかないほうがいいです", blank: true },
          { text: "。けんかするから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "けんかするから、うそを" },
          { text: "つかないほうがいい", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "You shouldn't eat too much cake — dinner is almost ready.",
    answers: [
      {
        segments: [
          { text: "ケーキを " },
          { text: "食[た]べすぎないほうがいい", blank: true },
          { text: "。もうすぐ 晩[ばん]ご飯[はん]が" },
          { text: "できる" },
          { text: "から" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もうすぐ 晩[ばん]ご飯[はん]が" },
          { text: "できる" },
          { text: "から、ケーキを" },
          { text: "食[た]べすぎないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "ケーキを " },
          { text: "食[た]べすぎないほうがいいです", blank: true },
          { text: "。もうすぐ 晩[ばん]ご飯[はん]が" },
          { text: "できる" },
          { text: "から" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もうすぐ 晩[ばん]ご飯[はん]が" },
          { text: "できる" },
          { text: "から、ケーキを" },
          { text: "食[た]べすぎないほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "ケーキを " },
          { text: "食[た]べすぎないほうがいい", blank: true },
          { text: "。もうすぐ 夕[ゆう]ご飯[はん]が" },
          { text: "できる" },
          { text: "から" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "ケーキを " },
          { text: "食[た]べすぎないほうがいい", blank: true },
          { text: "。もうすぐ 晩[ばん]ご飯[はん]" },
          { text: "だ" },
          { text: "から" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "もうすぐ 晩[ばん]ご飯[はん]" },
          { text: "だ" },
          { text: "から、ケーキを" },
          { text: "食[た]べすぎないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "ケーキは " },
          { text: "食[た]べすぎないほうがいい", blank: true },
          { text: "。もうすぐ 晩[ばん]ご飯[はん]が" },
          { text: "できる" },
          { text: "から" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "ケーキを " },
          { text: "食[た]べすぎないほうがいい", blank: true },
          { text: "。もうすぐご飯[はん]が" },
          { text: "できる" },
          { text: "から" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "You should call Hana — she's been waiting for a long time.",
    hint: "Hana = はなさん",
    answers: [
      {
        segments: [
          { text: "はなさんは ずっと 待[ま]っているから、" },
          { text: "電話[でんわ]した" },
          { text: "ほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんは ずっと 待[ま]っているから、" },
          { text: "電話[でんわ]した" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんは 長[なが]い間[あいだ] 待[ま]っているから、" },
          { text: "電話[でんわ]した" },
          { text: "ほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんは 長[なが]い間[あいだ] 待[ま]っているから、" },
          { text: "電話[でんわ]した" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんに " },
          { text: "電話[でんわ]した" },
          { text: "ほうがいいです", blank: true },
          { text: "。ずっと 待[ま]っているから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんに " },
          { text: "電話[でんわ]した" },
          { text: "ほうがいい", blank: true },
          { text: "。ずっと 待[ま]っているから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんは ずっと 待[ま]っているから、はなさんに " },
          { text: "電話[でんわ]した" },
          { text: "ほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんが ずっと 待[ま]っているから、" },
          { text: "電話[でんわ]した" },
          { text: "ほうがいいです", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You shouldn't carry too much cash when you travel.",
    answers: [
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]を" },
          { text: "持[も]ちすぎない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]を" },
          { text: "持[も]ちすぎない" },
          { text: "ほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]をたくさん" },
          { text: "持[も]たない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]をたくさん" },
          { text: "持[も]たない" },
          { text: "ほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、お金[かね]を" },
          { text: "持[も]ちすぎない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、お金[かね]を" },
          { text: "持[も]ちすぎない" },
          { text: "ほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、お金[かね]をたくさん" },
          { text: "持[も]たない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、お金[かね]をたくさん" },
          { text: "持[も]たない" },
          { text: "ほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]を" },
          { text: "持[も]ちすぎない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]を" },
          { text: "持[も]ちすぎない" },
          { text: "ほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]をたくさん" },
          { text: "持[も]たない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]をたくさん" },
          { text: "持[も]たない" },
          { text: "ほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、お金[かね]を" },
          { text: "持[も]ちすぎない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、お金[かね]を" },
          { text: "持[も]ちすぎない" },
          { text: "ほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、お金[かね]をたくさん" },
          { text: "持[も]たない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、お金[かね]をたくさん" },
          { text: "持[も]たない" },
          { text: "ほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You should take a walk — the weather is really nice today.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は すごく 天気[てんき]がよいから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]は とても 天気[てんき]がよいから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
          { text: "。" },
          { text: "今日[きょう]は すごく 天気[てんき]がよいから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]は すごく 天気[てんき]がよいから、" },
          { text: "散歩[さんぽ]したほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今日[きょう]は すごく 天気[てんき]がよいから、" },
          { text: "散歩[さんぽ]に 行[い]ったほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]は とても 天気[てんき]がよいから、" },
          { text: "散歩[さんぽ]に 行[い]ったほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]は すごく よい 天気[てんき]だから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]は とても よい 天気[てんき]だから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "散歩[さんぽ]に 行[い]ったほうがいいです", blank: true },
          { text: "。" },
          { text: "今日[きょう]は すごく 天気[てんき]がよいから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]がよいから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You shouldn't use your smartphone too much — your eyes will start to hurt.",
    answers: [
      {
        segments: [
          { text: "スマホを 使[つか]いすぎ" },
          { text: "ないほうがいい", blank: true },
          { text: "です。目[め]が 痛[いた]くなるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホを 使[つか]いすぎ" },
          { text: "ないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "スマホを 使[つか]いすぎ" },
          { text: "ないほうがいい", blank: true },
          { text: "。目[め]が 痛[いた]くなるから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホを 使[つか]いすぎ" },
          { text: "ないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホをあまり 使[つか]わ" },
          { text: "ないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "スマホをあまり 使[つか]わ" },
          { text: "ないほうがいいです", blank: true },
          { text: "。目[め]が 痛[いた]くなるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "スマホをあまり 使[つか]わ" },
          { text: "ないほうがいい", blank: true },
          { text: "。目[め]が 痛[いた]くなるから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホを 見[み]すぎ" },
          { text: "ないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "スマホを 見[み]すぎ" },
          { text: "ないほうがいいです", blank: true },
          { text: "。目[め]が 痛[いた]くなるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホをあまり 使[つか]わ" },
          { text: "ないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "スマホを 見[み]すぎ" },
          { text: "ないほうがいい", blank: true },
          { text: "。目[め]が 痛[いた]くなるから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホを 見[み]すぎ" },
          { text: "ないほうがいい", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "You shouldn't tell Kenji about the surprise party — he'll find out too early.",
    hint: "Kenji = けんじさん",
    answers: [
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "です。早[はや]く 知[し]ってしまうから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "言[い]わないほうがいい", blank: true },
          { text: "です。早[はや]く 知[し]ってしまうから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "早[はや]く 知[し]ってしまうから、サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "早[はや]く 知[し]ってしまうから、サプライズパーティーのことをけんじさんに" },
          { text: "言[い]わないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "教[おし]えないほうがいい", blank: true },
          { text: "です。早[はや]く 知[し]ってしまうから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "早[はや]く 知[し]ってしまうから、サプライズパーティーのことをけんじさんに" },
          { text: "教[おし]えないほうがいい", blank: true },
          { text: "です" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "。早[はや]く 知[し]ってしまうから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "言[い]わないほうがいい", blank: true },
          { text: "。早[はや]く 知[し]ってしまうから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "です。早[はや]すぎるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "言[い]わないほうがいい", blank: true },
          { text: "です。早[はや]くわかってしまうから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "です。早[はや]くわかってしまうから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "サプライズパーティーについてけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "です。早[はや]く 知[し]ってしまうから" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You shouldn't drink too much beer at the party — you'll get a hangover.",
    answers: [
      {
        segments: [
          { text: "パーティーで ビールを 飲[の]み" },
          { text: "すぎないほうがいいです", blank: true },
          { text: "。二日酔[ふつかよ]いになるから" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "二日酔[ふつかよ]いになるから、パーティーで ビールを 飲[の]み" },
          { text: "すぎないほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "パーティーで ビールを 飲[の]み" },
          { text: "すぎないほうがいい", blank: true },
          { text: "。二日酔[ふつかよ]いになるから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "二日酔[ふつかよ]いになるから、パーティーで ビールを 飲[の]み" },
          { text: "すぎないほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "パーティーで ビールをあまり" },
          { text: "飲[の]まないほうがいいです", blank: true },
          { text: "。二日酔[ふつかよ]いになるから" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "Sota hurt his leg, so he shouldn't run in today's match.",
    hint: "Sota = そうたさん",
    answers: [
      {
        segments: [
          { text: "そうたさんは 足[あし]を けがしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]を けがしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない" },
          { text: "ほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]を けがした。だから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]に けがをしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]に けがをしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない" },
          { text: "ほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない" },
          { text: "ほうがいい", blank: true },
          { text: "。そうたさんは 足[あし]を けがしたから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんが 足[あし]を けがしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない" },
          { text: "ほうがいい", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "You should bring an umbrella — it's going to rain.",
    answers: [
      {
        segments: [
          { text: "傘[かさ]を " },
          { text: "持[も]ってきたほうがいい", blank: true },
          { text: "。雨[あめ]が" },
          { text: "降[ふ]る" },
                  ],
        register: "casual",
      },
      {
        segments: [
          { text: "傘[かさ]を " },
          { text: "持[も]っていったほうがいい", blank: true },
          { text: "。雨[あめ]が" },
          { text: "降[ふ]る" },
                  ],
        register: "casual",
      },
      {
        segments: [
          { text: "傘[かさ]を " },
          { text: "持[も]ってきたほうがいいです", blank: true },
          { text: "。雨[あめ]が" },
          { text: "降[ふ]る" },
                  ],
        register: "polite",
      },
      {
        segments: [
          { text: "傘[かさ]を " },
          { text: "持[も]っていったほうがいいです", blank: true },
          { text: "。雨[あめ]が" },
          { text: "降[ふ]る" },
                  ],
        register: "polite",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]る。傘[かさ]を" },
          { text: "持[も]っていったほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]る。傘[かさ]を" },
          { text: "持[も]ってきたほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]る。傘[かさ]を" },
          { text: "持[も]っていったほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]る。傘[かさ]を" },
          { text: "持[も]ってきたほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "傘[かさ]を" },
          { text: "持[も]ったほうがいい", blank: true },
          { text: "。雨[あめ]が" },
          { text: "降[ふ]る" },
                  ],
        register: "casual",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]る。傘[かさ]を" },
          { text: "持[も]ったほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "傘[かさ]を" },
          { text: "持[も]っていったほうがいいです", blank: true },
          { text: "。雨[あめ]が降[ふ]るんです" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "傘[かさ]を" },
          { text: "持[も]ってきたほうがいいです", blank: true },
          { text: "。雨[あめ]が降[ふ]るんです" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "You should wear gloves — it's really cold today.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]はとても 寒[さむ]いから、手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今日[きょう]はすごく 寒[さむ]いから、手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
          { text: "。今日[きょう]はとても 寒[さむ]いから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
          { text: "。今日[きょう]はすごく 寒[さむ]いから" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今日[きょう]はとても 寒[さむ]い。手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
                  ],
        register: "casual",
      },
      {
        segments: [
          { text: "今日[きょう]はとても 寒[さむ]いから、手袋[てぶくろ]をはいた" },
          { text: "ほうがいいです", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]はすごく 寒[さむ]いから、手袋[てぶくろ]をはいた" },
          { text: "ほうがいいです", blank: true },
        ],
        register: "polite",
      },
    ],
  },
];
