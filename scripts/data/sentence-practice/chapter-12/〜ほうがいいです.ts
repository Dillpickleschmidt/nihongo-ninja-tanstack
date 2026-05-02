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
      },
      {
        segments: [
          { text: "熱[ねつ]があるときは、学校[がっこう]に" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "熱[ねつ]があるから、学校[がっこう]には" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "Adding は after に (学校には) for topic/contrast emphasis; から for reason",
      },
      {
        segments: [
          { text: "熱[ねつ]があるときは、学校[がっこう]には" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "とき + は (topic) and 学校には for double は emphasis",
      },
      {
        segments: [
          { text: "熱[ねつ]があるから、学校[がっこう]に" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
          { text: "よ" },
        ],
        notes: "Adding よ particle for emphasis/assertion; から version",
      },
      {
        segments: [
          { text: "熱[ねつ]があったら、学校[がっこう]に" },
          { text: "行[い]かないほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "〜たら conditional (if there's a fever) instead of から/とき",
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
        notes: "Reason first with から, あの for \"that,\" とても for \"really\"",
      },
      {
        segments: [
          { text: "あのレストランはすごく 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
        ],
        notes: "すごく instead of とても for \"really\"",
      },
      {
        segments: [
          { text: "そのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
        ],
        notes: "その instead of あの for \"that\"",
      },
      {
        segments: [
          { text: "早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
          { text: "よ。あのレストランはとても 人気[にんき]があるから。" },
        ],
        notes: "Advice first, then reason — reversed order, with よ for emphasis",
      },
      {
        segments: [
          { text: "あのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
          { text: "です。" },
        ],
        notes: "Polite ending with です added explicitly",
      },
      {
        segments: [
          { text: "あのレストランはすごく 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
          { text: "です。" },
        ],
        notes: "すごく + polite です ending",
      },
      {
        segments: [
          { text: "あのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]をしたほうがいい", blank: true },
        ],
        notes: "予約をした (with を particle) instead of 予約した",
      },
      {
        segments: [
          { text: "あのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
          { text: "よ。" },
        ],
        notes: "よ particle at end for casual emphasis",
      },
      {
        segments: [
          { text: "あのレストランはとても 人気[にんき]があるから、早[はや]く" },
          { text: "予約[よやく]したほうがいい", blank: true },
          { text: "ですよ。" },
        ],
        notes: "Polite with よ for friendly emphasis",
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
          { text: "ですよ。昼[ひる]ごろおなかがすくから" },
        ],
        notes: "Advice first, then reason second with から at the end.",
      },
      {
        segments: [
          { text: "朝[あさ]ご飯[はん]を" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "ですよ。昼[ひる]までにおなかがすくから" },
        ],
        notes: "Advice first with よ for emphasis, then reason with までに and から.",
      },
      {
        segments: [
          { text: "朝[あさ]ご飯[はん]は" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "ですよ。昼[ひる]ごろおなかがすくから" },
        ],
        notes: "は topic marker, advice first with よ, reason after.",
      },
      {
        segments: [
          { text: "昼[ひる]ごろおなかがすくから、朝[あさ]ご飯[はん]を" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "昼[ひる]までにおなかがすくから、朝[あさ]ご飯[はん]を" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "Using までに (by noon) instead of ごろ (around noon) for the time expression.",
      },
      {
        segments: [
          { text: "昼[ひる]ごろおなかがすくから、朝[あさ]ご飯[はん]は" },
          { text: "食[た]べたほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "Using は (topic/contrastive marker) instead of を after 朝ご飯, reason first with ごろ.",
      },
      {
        segments: [
          { text: "昼[ひる]ごろおなかがすくから、朝[あさ]ご飯[はん]を" },
          { text: "食[た]べないほうがいい", blank: true },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "朝[あさ]ご飯[はん]を" },
          { text: "食[た]べないほうがいい", blank: true },
          { text: "ですよ。昼[ひる]ごろおなかがすくから" },
        ],
        notes: "ないほうがいい with advice first (with よ), reason second. を particle.",
      },
      {
        segments: [
          { text: "昼[ひる]までにおなかがすくから、朝[あさ]ご飯[はん]を" },
          { text: "食[た]べないほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "ないほうがいい with までに (by noon) instead of ごろ, reason first.",
      },
      {
        segments: [
          { text: "昼[ひる]ごろおなかがすくから、朝[あさ]ご飯[はん]は" },
          { text: "食[た]べないほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "ないほうがいい with は (contrastive topic) instead of を, reason first with ごろ.",
      },
    ],
  },
  {
    english: "You shouldn't drink alcohol while taking medicine.",
    answers: [
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いる 間[あいだ]は、お 酒[さけ]を 飲[の]まないほうがいい", blank: true },
        ],
        notes: "ないほうがいい (casual), 〜ている間は for \"while taking medicine\"",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いる 間[あいだ]は、お 酒[さけ]を 飲[の]まないほうがいいです", blank: true },
        ],
        notes: "ないほうがいいです (polite form), 〜ている間は",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いるときは、お 酒[さけ]を 飲[の]まないほうがいい", blank: true },
        ],
        notes: "ないほうがいい, using 〜ているときは (\"when taking medicine\") instead of 間",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いるときは、お 酒[さけ]を 飲[の]まないほうがいいです", blank: true },
        ],
        notes: "ないほうがいいです (polite), using 〜ているときは",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いる 間[あいだ]は、お 酒[さけ]を 飲[の]まないほうがいいよ", blank: true },
        ],
        notes: "ないほうがいい + よ particle for softer advisory tone, 〜ている間は",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いる 間[あいだ]は、お 酒[さけ]を 飲[の]まないほうがいいですよ", blank: true },
        ],
        notes: "ないほうがいいですよ (polite + よ), 〜ている間は",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いるときは、お 酒[さけ]を 飲[の]まないほうがいいよ", blank: true },
        ],
        notes: "ないほうがいい + よ, using 〜ているときは",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いるときは、お 酒[さけ]を 飲[の]まないほうがいいですよ", blank: true },
        ],
        notes: "ないほうがいいですよ (polite + よ), 〜ているときは",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いる 間[あいだ]は、 酒[さけ]を 飲[の]まないほうがいい", blank: true },
        ],
        notes: "Using 酒 instead of お酒 (slightly less formal), 〜ている間は",
      },
      {
        segments: [
          { text: "薬[くすり]を 飲[の]んで", blank: true },
          { text: "いる 間[あいだ]は、 酒[さけ]を 飲[の]まないほうがいいです", blank: true },
        ],
        notes: "Using 酒 instead of お酒, polite form with です",
      },
    ],
  },
  {
    english: "You should watch that movie — it's really interesting.",
    answers: [
      {
        segments: [
          { text: "あの 映画[えいが]はとても 面白[おもしろ]いから、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいですよ" },
        ],
      },
      {
        segments: [
          { text: "あの 映画[えいが]はすごく 面白[おもしろ]いから、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいですよ" },
        ],
        notes: "すごく instead of とても for \"really interesting\"",
      },
      {
        segments: [
          { text: "その 映画[えいが]はとても 面白[おもしろ]いから、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいですよ" },
        ],
        notes: "その映画 instead of あの映画",
      },
      {
        segments: [
          { text: "その 映画[えいが]はすごく 面白[おもしろ]いから、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいですよ" },
        ],
        notes: "その映画 + すごく",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はとても 面白[おもしろ]いから、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "Without です or よ — bare casual form",
      },
      {
        segments: [
          { text: "あの 映画[えいが]、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいですよ。とても 面白[おもしろ]いから" },
        ],
        notes: "Advice first, then reason: あの映画、見たほうがいいですよ。とても面白いから",
      },
      {
        segments: [
          { text: "あの 映画[えいが]、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいよ。すごく 面白[おもしろ]いから" },
        ],
        notes: "Advice first, すごく, without です",
      },
      {
        segments: [
          { text: "あの 映画[えいが]すごく 面白[おもしろ]いですよ。" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいです" },
        ],
        notes: "Two sentences: first states the movie is interesting, then recommends watching. No から connector.",
      },
      {
        segments: [
          { text: "その 映画[えいが]すごく 面白[おもしろ]いですよ。" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいです" },
        ],
        notes: "その映画 version, two sentences, no から",
      },
      {
        segments: [
          { text: "その 映画[えいが]とても 面白[おもしろ]いですよ。" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいです" },
        ],
        notes: "その映画 + とても, two sentences",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はとても 面白[おもしろ]い。だから、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいよ" },
        ],
      },
      {
        segments: [
          { text: "あの 映画[えいが]はすごく 面白[おもしろ]い。だから、" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいよ" },
        ],
        notes: "だから + すごく + casual よ",
      },
      {
        segments: [
          { text: "あの 映画[えいが]、とても 面白[おもしろ]いんですよ。" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいです" },
        ],
      },
      {
        segments: [
          { text: "その 映画[えいが]、とても 面白[おもしろ]いんですよ。" },
          { text: "見[み]た", blank: true },
          { text: "ほうがいいです" },
        ],
        notes: "その映画 + んですよ for explanation",
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
        notes: "Reason first: \"because you look tired, you should rest today.\" は after 今日 for topic contrast.",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "よ。疲[つか]れているから" },
        ],
        notes: "Advice first, reason after with よ for emphasis. Natural conversational order.",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "ですよ。疲[つか]れているから" },
        ],
        notes: "Polite advice first with ですよ, reason after.",
      },
      {
        segments: [
          { text: "疲[つか]れているから、今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "よ" },
        ],
        notes: "Reason first + よ at end for warm emphasis.",
      },
      {
        segments: [
          { text: "疲[つか]れているから、今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Reason first, polite + ですよ.",
      },
      {
        segments: [
          { text: "疲[つか]れているね。今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "よ" },
        ],
        notes: "ね as observation \"you look tired\" + advice with よ. More natural conversational tone.",
      },
      {
        segments: [
          { text: "疲[つか]れているね。今日[きょう]は" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "ね observation + polite ですよ advice.",
      },
      {
        segments: [
          { text: "疲[つか]れているから、今日[きょう]は" },
          { text: "出[で]かけないほうがいい", blank: true },
        ],
        notes: "ないほうがいい variation: \"shouldn't go out today\" = rest. Uses 出かける.",
      },
      {
        segments: [
          { text: "疲[つか]れているから、" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "よ" },
        ],
        notes: "Without 今日は — \"since you look tired, you should rest.\" Simpler, omitting today.",
      },
      {
        segments: [
          { text: "疲[つか]れているから、" },
          { text: "休[やす]んだほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Without 今日は, polite ですよ.",
      },
      {
        segments: [
          { text: "疲[つか]れて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、今日[きょう]は休[やす]んだほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "Reason first + polite です. The です is separate plain text (→だ in casual), but いい is an い-adj so いいだ is the known issue — checking if engine handles this correctly.",
      },
      {
        segments: [
          { text: "疲[つか]れて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、今日[きょう]は出[で]かけないほうがいい", blank: true },
          { text: "です" },
        ],
        notes: "ないほうがいい + polite です. Shouldn't go out today.",
      },
    ],
  },
  {
    english: "You shouldn't walk home alone at night — it's scary.",
    answers: [
      {
        segments: [
          { text: "夜[よる]、一人[ひとり]で 家[いえ]に 帰[かえ]らないほうがいいですよ。" },
          { text: "怖[こわ]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "Base variation: ないほうがいい with 怖いから as reason at end; 家に帰る (go home)",
      },
      {
        segments: [
          { text: "怖[こわ]いから、夜[よる]は一人[ひとり]で" },
          { text: "家[いえ]に 帰[かえ]らないほうがいいですよ", blank: true },
        ],
        notes: "Reason-first order: 怖いから at the start, then the advice",
      },
      {
        segments: [
          { text: "夜[よる]、一人[ひとり]で 歩[ある]いて 帰[かえ]らないほうがいいですよ。" },
          { text: "怖[こわ]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "Using 歩いて帰る (walk home on foot) instead of 家に帰る",
      },
      {
        segments: [
          { text: "怖[こわ]いから、夜[よる]は一人[ひとり]で" },
          { text: "歩[ある]いて 帰[かえ]らないほうがいいですよ", blank: true },
        ],
        notes: "Reason-first with 歩いて帰る; blank covers the whole advice phrase",
      },
      {
        segments: [
          { text: "夜[よる]に一人[ひとり]で 家[いえ]に 帰[かえ]らないほうがいいですよ。" },
          { text: "怖[こわ]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "Using 夜に (particle に for \"at night\") instead of 夜、(with comma)",
      },
      {
        segments: [
          { text: "夜[よる]は一人[ひとり]で 家[いえ]に 帰[かえ]らないほうがいいですよ。" },
          { text: "怖[こわ]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
      },
      {
        segments: [
          { text: "夜[よる]は一人[ひとり]で 歩[ある]いて 帰[かえ]らないほうがいいですよ。" },
          { text: "怖[こわ]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "夜は + 歩いて帰る combination",
      },
      {
        segments: [
          { text: "夜[よる]、一人[ひとり]で 家[いえ]に 帰[かえ]らないほうがいいです。" },
          { text: "怖[こわ]い", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "Same as base but without sentence-final よ — slightly less emphatic",
      },
    ],
  },
  {
    english: "You should study kanji — the test is next week.",
    answers: [
      {
        segments: [
          { text: "漢字[かんじ]を", blank: true },
          { text: "勉強[べんきょう]したほうがいいですよ。来週[らいしゅう]テストがあるから" },
        ],
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Reason first with から, then advice. Standard word order with ですよ at end.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
        ],
        notes: "Reason first, advice after — no sentence-final particle. Slightly more neutral.",
      },
      {
        segments: [
          { text: "漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "ですよ。来週[らいしゅう]にテストがあるから" },
        ],
        notes: "Advice first, reason after — using 来週に instead of 来週 for variety.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるんですから、漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Using んですから instead of から for a more explanatory/emphatic nuance.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]は" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Using は instead of を to mark 漢字 as topic (emphasizing \"as for kanji\").",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]は" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
        ],
        notes: "は marking 漢字 as topic, no sentence-final particle.",
      },
      {
        segments: [
          { text: "漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "ですね。来週[らいしゅう]テストがあるから" },
        ],
        notes: "Advice first with ですね (seeking mild agreement), reason after.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]を" },
          { text: "勉強[べんきょう]したほうがいい", blank: true },
          { text: "ですね" },
        ],
        notes: "Reason first, advice with ですね at end — gentle, seeking agreement.",
      },
      {
        segments: [
          { text: "来週[らいしゅう]テストがあるから、漢字[かんじ]の勉強[べんきょう]を" },
          { text: "したほうがいい", blank: true },
          { text: "ですよ" },
        ],
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
      },
      {
        segments: [
          { text: "もうすぐ 試験[しけん]があるから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Polite form with ですよ for emphasis/advice tone",
      },
      {
        segments: [
          { text: "もうすぐ 試験[しけん]があるから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
          { text: "よ" },
        ],
        notes: "Casual form with よ for advice emphasis",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
          { text: "。もうすぐ 試験[しけん]があるから" },
        ],
        notes: "Reason clause placed after the main advice clause",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
          { text: "ですよ。もうすぐ 試験[しけん]があるから" },
        ],
        notes: "Polite with ですよ, reason clause after",
      },
      {
        segments: [
          { text: "もうすぐテストがあるから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
        ],
        notes: "Using テスト instead of 試験",
      },
      {
        segments: [
          { text: "もうすぐ 試験[しけん]があるから、" },
          { text: "サボらないほうがいい", blank: true },
        ],
        notes: "Without を (no direct object marked — サボる used without explicit object)",
      },
      {
        segments: [
          { text: "もうすぐ 試験[しけん]だから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
        ],
        notes: "Using もうすぐ試験だから (exam is coming up = it's almost the exam) instead of 試験がある",
      },
      {
        segments: [
          { text: "もうすぐテストだから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
        ],
        notes: "テスト + だから variant",
      },
      {
        segments: [
          { text: "もうすぐテストがあるから、授業[じゅぎょう]を" },
          { text: "サボらないほうがいい", blank: true },
          { text: "よ" },
        ],
        notes: "テスト variant with よ for emphasis",
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
          { text: "よ。けんかになるから" },
        ],
      },
      {
        segments: [
          { text: "うそを" },
          { text: "つかないほうがいいです", blank: true },
          { text: "よ。けんかになるから" },
        ],
        notes: "Polite form with です",
      },
      {
        segments: [
          { text: "けんかになるから、うそを" },
          { text: "つかないほうがいい", blank: true },
        ],
        notes: "Reason clause first, then advice",
      },
      {
        segments: [
          { text: "けんかになるから、うそを" },
          { text: "つかないほうがいいです", blank: true },
        ],
        notes: "Reason first, polite form",
      },
      {
        segments: [
          { text: "うそを" },
          { text: "つかないほうがいい", blank: true },
          { text: "よ。けんかするから" },
        ],
        notes: "Using けんかする (to have a fight) instead of けんかになる",
      },
      {
        segments: [
          { text: "うそを" },
          { text: "つかないほうがいいです", blank: true },
          { text: "よ。けんかするから" },
        ],
        notes: "けんかする reason, polite form",
      },
      {
        segments: [
          { text: "けんかするから、うそを" },
          { text: "つかないほうがいい", blank: true },
        ],
        notes: "けんかする reason first, no particle at end",
      },
    ],
  },
  {
    english: "You shouldn't eat too much cake — dinner is almost ready.",
    answers: [
      {
        segments: [
          { text: "ケーキを 食[た]べすぎないほうがいいよ。もうすぐ 晩[ばん]ご 飯[はん]が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
      },
      {
        segments: [
          { text: "もうすぐ 晩[ばん]ご 飯[はん]が" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、ケーキを" },
          { text: "食[た]べすぎないほうがいい", blank: true },
        ],
        notes: "Reason clause first, then advice",
      },
      {
        segments: [
          { text: "ケーキを 食[た]べすぎないほうがいいですよ。もうすぐ 晩[ばん]ご 飯[はん]が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "Polite form with です, reason clause at end",
      },
      {
        segments: [
          { text: "もうすぐ 晩[ばん]ご 飯[はん]が" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、ケーキを" },
          { text: "食[た]べすぎないほうがいいです", blank: true },
        ],
        notes: "Reason clause first, polite form with です",
      },
      {
        segments: [
          { text: "ケーキを 食[た]べすぎないほうがいいよ。もうすぐ 夕[ゆう]ご 飯[はん]が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "Using 夕ご飯 instead of 晩ご飯",
      },
      {
        segments: [
          { text: "ケーキを 食[た]べすぎないほうがいいよ。もうすぐ 晩[ばん]ご 飯[はん]" },
          { text: "だ", blank: true },
          { text: "から" },
        ],
        notes: "Using もうすぐ晩ご飯だから (noun predicate) instead of できる",
      },
      {
        segments: [
          { text: "もうすぐ 晩[ばん]ご 飯[はん]" },
          { text: "だ" },
          { text: "から、ケーキを" },
          { text: "食[た]べすぎないほうがいい", blank: true },
        ],
        notes: "Reason (noun predicate) first, then advice; casual",
      },
      {
        segments: [
          { text: "ケーキは 食[た]べすぎないほうがいいよ。もうすぐ 晩[ばん]ご 飯[はん]が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "Using は instead of を for ケーキ (topic marking)",
      },
      {
        segments: [
          { text: "ケーキを 食[た]べすぎないほうがいいよ。もうすぐご 飯[はん]が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から" },
        ],
        notes: "Using plain ご飯 (meal) instead of 晩ご飯/夕ご飯",
      },
    ],
  },
  {
    english: "You should call Hana — she's been waiting for a long time.",
    hint: "Hana is a person's name = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは ずっと 待[ま]っているから、" },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいですよ" },
        ],
      },
      {
        segments: [
          { text: "はなさんは ずっと 待[ま]っているから、" },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいよ" },
        ],
        notes: "Casual ending with よ only (no です)",
      },
      {
        segments: [
          { text: "はなさんは ずっと 待[ま]っているから、" },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいです" },
        ],
        notes: "Polite ending without よ particle",
      },
      {
        segments: [
          { text: "はなさんは 長[なが]い間[あいだ] 待[ま]っているから、" },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいですよ" },
        ],
        notes: "Using 長い間 (for a long time) instead of ずっと",
      },
      {
        segments: [
          { text: "はなさんは 長[なが]い間[あいだ] 待[ま]っているから、" },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいよ" },
        ],
        notes: "長い間 + casual よ ending",
      },
      {
        segments: [
          { text: "はなさんに " },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいですよ。ずっと 待[ま]っているから" },
        ],
        notes: "Advice first, then reason clause (reversed order, matching English prompt structure more closely). に instead of に電話する → はなさんに電話したほうがいい",
      },
      {
        segments: [
          { text: "はなさんに " },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいよ。ずっと 待[ま]っているから" },
        ],
        notes: "Advice first, then reason clause, casual (no です)",
      },
      {
        segments: [
          { text: "はなさんは ずっと 待[ま]っているから、はなさんに " },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいですよ" },
        ],
        notes: "Subject repeated with に to make the recipient explicit in the second clause",
      },
      {
        segments: [
          { text: "はなさんが ずっと 待[ま]っているから、" },
          { text: "電話[でんわ]した", blank: true },
          { text: "ほうがいいですよ" },
        ],
        notes: "が instead of は for はなさん (emphasizing she is the one waiting)",
      },
    ],
  },
  {
    english: "You shouldn't carry too much cash when you travel.",
    answers: [
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "Core variation: 旅行するとき, 現金, 持ちすぎない + ほうがいい (no です)",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいい" },
          { text: "です" },
        ],
        notes: "With です (polite ending): 旅行するとき, 現金, 持ちすぎない + ほうがいいです",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "Using たくさん + 持たない instead of 持ちすぎない, no です",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいい" },
          { text: "です" },
        ],
        notes: "たくさん + 持たない + ほうがいいです (polite ending)",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、お金[かな]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "Using お金 instead of 現金, 持ちすぎない, no です",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、お金[かな]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいい" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、お金[かな]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいい" },
        ],
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、お金[かな]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいい" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "Using 旅行の時 (noun + の時) instead of 旅行するとき, 現金, 持ちすぎない",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいい" },
          { text: "です" },
        ],
        notes: "旅行の時, 現金, 持ちすぎない + ほうがいいです (polite)",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "旅行の時, 現金, たくさん + 持たない, no です",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいい" },
          { text: "です" },
        ],
        notes: "旅行の時, 現金, たくさん + 持たない + ほうがいいです (polite)",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、お金[かな]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "旅行の時, お金, 持ちすぎない, no です",
      },
      {
        segments: [
          { text: "旅行[りょこよう]の時[とき]、お金[かな]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいい" },
          { text: "です" },
        ],
        notes: "旅行の時, お金, 持ちすぎない + ほうがいいです (polite)",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、お金[かな]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "旅行の時, お金, たくさん + 持たない, no です",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、お金[かな]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいい" },
          { text: "です" },
        ],
        notes: "旅行の時, お金, たくさん + 持たない + ほうがいいです (polite)",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいいよ" },
        ],
        notes: "With よ at the end for emphasis/advice nuance: 旅行するとき, 現金, 持ちすぎない + ほうがいいよ",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき、現金[げんきん]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいいよ" },
        ],
        notes: "With よ: 旅行するとき, 現金, たくさん + 持たない + ほうがいいよ",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]を" },
          { text: "持[も]ちすぎない", blank: true },
          { text: "ほうがいいよ" },
        ],
        notes: "旅行の時, 現金, 持ちすぎない + ほうがいいよ",
      },
      {
        segments: [
          { text: "旅行[りょこう]の時[とき]、現金[げんきん]をたくさん" },
          { text: "持[も]たない", blank: true },
          { text: "ほうがいいよ" },
        ],
        notes: "旅行の時, 現金, たくさん + 持たない + ほうがいいよ",
      },
    ],
  },
  {
    english: "You should take a walk — the weather is really nice today.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は すごく 天気[てんき]がいいから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は とても 天気[てんき]がいいから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        notes: "とても instead of すごく for \"really nice\"",
      },
      {
        segments: [
          { text: "散歩[さんぽ]したほうがいいですよ。", blank: true },
          { text: "今日[きょう]は すごく 天気[てんき]がいいから" },
        ],
        notes: "Reversed order: advice first with よ, then reason",
      },
      {
        segments: [
          { text: "今日[きょう]は すごく 天気[てんき]がいいから、" },
          { text: "散歩[さんぽ]したほうがいいよ", blank: true },
        ],
        notes: "Casual/friendly with よ at the end instead of です",
      },
      {
        segments: [
          { text: "今日[きょう]は すごく 天気[てんき]がいいから、" },
          { text: "散歩[さんぽ]に 行[い]ったほうがいいです", blank: true },
        ],
        notes: "散歩に行く (go for a walk) instead of 散歩する",
      },
      {
        segments: [
          { text: "今日[きょう]は とても 天気[てんき]がいいから、" },
          { text: "散歩[さんぽ]に 行[い]ったほうがいいです", blank: true },
        ],
        notes: "散歩に行く + とても",
      },
      {
        segments: [
          { text: "今日[きょう]は すごく いい 天気[てんき]だから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        notes: "いい天気だ construction (noun predicate) instead of 天気がいい — すごく",
      },
      {
        segments: [
          { text: "今日[きょう]は とても いい 天気[てんき]だから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        notes: "いい天気だ construction + とても",
      },
      {
        segments: [
          { text: "散歩[さんぽ]に 行[い]ったほうがいいですよ。", blank: true },
          { text: "今日[きょう]は すごく 天気[てんき]がいいから" },
        ],
        notes: "散歩に行く, reversed order: advice first with よ, then reason",
      },
      {
        segments: [
          { text: "今日[きょう]は 天気[てんき]がいいから、" },
          { text: "散歩[さんぽ]したほうがいいです", blank: true },
        ],
        notes: "Without すごく/とても — simpler \"the weather is nice today\"",
      },
    ],
  },
  {
    english: "You shouldn't use your smartphone too much — your eyes will start to hurt.",
    answers: [
      {
        segments: [
          { text: "スマホを 使[つか]いすぎ", blank: true },
          { text: "ないほうがいい", blank: true },
          { text: "ですよ。目[め]が 痛[いた]くなるから" },
        ],
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホを 使[つか]いすぎ", blank: true },
          { text: "ないほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Reason clause first: 目が痛くなるから、... ないほうがいいです",
      },
      {
        segments: [
          { text: "スマホを 使[つか]いすぎ", blank: true },
          { text: "ないほうがいいよ。目[め]が 痛[いた]くなるから" },
        ],
        notes: "Casual (no です), よ for emphasis at end of advice clause",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホを 使[つか]いすぎ", blank: true },
          { text: "ないほうがいいよ" },
        ],
        notes: "Reason clause first, casual (no です), よ at end",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホをあまり 使[つか]わ", blank: true },
          { text: "ないほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Using あまり～ないほうがいい instead of すぎない; reason clause first",
      },
      {
        segments: [
          { text: "スマホをあまり 使[つか]わ", blank: true },
          { text: "ないほうがいいですよ。目[め]が 痛[いた]くなるから" },
        ],
        notes: "あまり～ないほうがいい, advice clause first, reason clause after",
      },
      {
        segments: [
          { text: "スマホをあまり 使[つか]わ", blank: true },
          { text: "ないほうがいいよ。目[め]が 痛[いた]くなるから" },
        ],
        notes: "あまり～ないほうがいい casual (no です), advice first, reason after",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホを 見[み]すぎ", blank: true },
          { text: "ないほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "見すぎない instead of 使いすぎない — \"not look at smartphone too much\"; reason clause first",
      },
      {
        segments: [
          { text: "スマホを 見[み]すぎ", blank: true },
          { text: "ないほうがいいですよ。目[め]が 痛[いた]くなるから" },
        ],
        notes: "見すぎないほうがいい, advice clause first, reason after",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホをあまり 使[つか]わ", blank: true },
          { text: "ないほうがいいよ" },
        ],
        notes: "あまり～ないほうがいい, reason clause first, casual (no です)",
      },
      {
        segments: [
          { text: "スマホを 見[み]すぎ", blank: true },
          { text: "ないほうがいいよ。目[め]が 痛[いた]くなるから" },
        ],
        notes: "見すぎない, casual (no です), advice first",
      },
      {
        segments: [
          { text: "目[め]が 痛[いた]くなるから、スマホを 見[み]すぎ", blank: true },
          { text: "ないほうがいいよ" },
        ],
        notes: "見すぎない, casual, reason clause first",
      },
    ],
  },
  {
    english: "You shouldn't tell Kenji about the surprise party — he'll find out too early.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "ですよ。早[はや]く 知[し]ってしまうから" },
        ],
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "言[い]わないほうがいい", blank: true },
          { text: "ですよ。早[はや]く 知[し]ってしまうから" },
        ],
        notes: "Using 言う instead of 話す",
      },
      {
        segments: [
          { text: "早[はや]く 知[し]ってしまうから、サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Reason clause first (から leading), then advice with 話す",
      },
      {
        segments: [
          { text: "早[はや]く 知[し]ってしまうから、サプライズパーティーのことをけんじさんに" },
          { text: "言[い]わないほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Reason clause first, using 言う",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "教[おし]えないほうがいい", blank: true },
          { text: "ですよ。早[はや]く 知[し]ってしまうから" },
        ],
        notes: "Using 教える (to tell/inform) instead of 話す or 言う",
      },
      {
        segments: [
          { text: "早[はや]く 知[し]ってしまうから、サプライズパーティーのことをけんじさんに" },
          { text: "教[おし]えないほうがいい", blank: true },
          { text: "ですよ" },
        ],
        notes: "Reason clause first, using 教える",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "よ。早[はや]く 知[し]ってしまうから" },
        ],
        notes: "Casual version without です, using 話す; よ as sentence-final particle",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "言[い]わないほうがいい", blank: true },
          { text: "よ。早[はや]く 知[し]ってしまうから" },
        ],
        notes: "Casual version without です, using 言う",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "ですよ。早[はや]すぎるから" },
        ],
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "言[い]わないほうがいい", blank: true },
          { text: "ですよ。早[はや]くわかってしまうから" },
        ],
        notes: "Using わかってしまう (will figure out) instead of 知ってしまう, with 言う",
      },
      {
        segments: [
          { text: "サプライズパーティーのことをけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "ですよ。早[はや]くわかってしまうから" },
        ],
        notes: "わかってしまう with 話す",
      },
      {
        segments: [
          { text: "サプライズパーティーについてけんじさんに" },
          { text: "話[はな]さないほうがいい", blank: true },
          { text: "ですよ。早[はや]く 知[し]ってしまうから" },
        ],
        notes: "Using について instead of のことを; サプライズパーティーについて",
      },
    ],
  },
  {
    english: "You shouldn't drink too much beer at the party — you'll get a hangover.",
    answers: [
      {
        segments: [
          { text: "パーティーで ビールを 飲[の]み", blank: true },
          { text: "すぎないほうがいいですよ。二日酔[ふつかよ]いになるから" },
        ],
        notes: "Advice first, reason after. パーティーで (at the party). すぎない attached to 飲み as one blank unit.",
      },
      {
        segments: [
          { text: "二日酔[ふつかよ]いになるから、パーティーで ビールを 飲[の]み", blank: true },
          { text: "すぎないほうがいいですよ" },
        ],
        notes: "Reason first, then advice. から clause leads the sentence.",
      },
      {
        segments: [
          { text: "パーティーで ビールを 飲[の]み", blank: true },
          { text: "すぎないほうがいいよ。二日酔[ふつかよ]いになるから" },
        ],
        notes: "Same as first but without です — casual register (よ instead of ですよ at advice, reason after).",
      },
      {
        segments: [
          { text: "二日酔[ふつかよ]いになるから、パーティーで ビールを 飲[の]み", blank: true },
          { text: "すぎないほうがいいよ" },
        ],
        notes: "Reason first, casual ending (よ without です).",
      },
      {
        segments: [
          { text: "パーティーで ビールをあまり" },
          { text: "飲[の]まないほうがいいですよ", blank: true },
          { text: "。二日酔[ふつかよ]いになるから" },
        ],
      },
    ],
  },
  {
    english: "Sota hurt his leg, so he shouldn't run in today's match.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんは 足[あし]を けがしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいい" },
        ],
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]を けがしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいいです" },
        ],
        notes: "Polite form with です",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]を けがしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいいよ" },
        ],
        notes: "Casual with よ for soft emphasis",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]を けがしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいいですよ" },
        ],
        notes: "Polite with よ for added emphasis",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]を けがした。だから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "Two sentences joined by だから instead of a single sentence with から",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]に けがをしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "足にけがをした — alternate phrasing \"got injured in his leg\" vs 足をけがした",
      },
      {
        segments: [
          { text: "そうたさんは 足[あし]に けがをしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいいです" },
        ],
        notes: "足にけがをした, polite with です",
      },
      {
        segments: [
          { text: "今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいいよ。そうたさんは 足[あし]を けがしたから" },
        ],
        notes: "Advice first, reason after — inverted sentence order",
      },
      {
        segments: [
          { text: "そうたさんが 足[あし]を けがしたから、今日[きょう]の 試合[しあい]で" },
          { text: "走[はし]らない", blank: true },
          { text: "ほうがいい" },
        ],
        notes: "そうたが instead of そうたは — が marks the subject with more focus/prominence",
      },
    ],
  },
  {
    english: "You should bring an umbrella — it's going to rain.",
    answers: [
      {
        segments: [
          { text: "傘[かさ]を 持[も]ってきたほうがいいよ。雨[あめ]が" },
          { text: "降[ふ]る", blank: true },
          { text: "よ" },
        ],
        notes: "Core answer: 持ってきた (brought along) + ほうがいい; rain stated as non-past fact separately with よ",
      },
      {
        segments: [
          { text: "傘[かさ]を 持[も]っていったほうがいいよ。雨[あめ]が" },
          { text: "降[ふ]る", blank: true },
          { text: "よ" },
        ],
        notes: "持っていく (take along, going away from here) instead of 持ってくる",
      },
      {
        segments: [
          { text: "傘[かさ]を 持[も]ってきたほうがいいですよ。雨[あめ]が" },
          { text: "降[ふ]る", blank: true },
          { text: "よ" },
        ],
        notes: "Polite form with です; 持ってくる; rain stated as non-past fact",
      },
      {
        segments: [
          { text: "傘[かさ]を 持[も]っていったほうがいいですよ。雨[あめ]が" },
          { text: "降[ふ]る", blank: true },
          { text: "よ" },
        ],
        notes: "Polite form with です; 持っていく instead of 持ってくる",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]るよ。傘[かさ]を" },
          { text: "持[も]っていったほうがいい", blank: true },
        ],
        notes: "Rain stated first, then advice; 持っていく; no sentence-final よ",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]るよ。傘[かさ]を" },
          { text: "持[も]ってきたほうがいい", blank: true },
        ],
        notes: "Rain stated first; 持ってくる variant",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]るよ。傘[かさ]を" },
          { text: "持[も]っていったほうがいいです", blank: true },
        ],
        notes: "Rain first; 持っていく; polite です",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]るよ。傘[かさ]を" },
          { text: "持[も]ってきたほうがいいです", blank: true },
        ],
        notes: "Rain first; 持ってくる; polite です",
      },
      {
        segments: [
          { text: "傘[かさ]を持[も]ったほうがいいよ。雨[あめ]が" },
          { text: "降[ふ]る", blank: true },
          { text: "よ" },
        ],
        notes: "傘を持つ (carry/have an umbrella) instead of 持ってくる/持っていく",
      },
      {
        segments: [
          { text: "雨[あめ]が降[ふ]るよ。傘[かさ]を" },
          { text: "持[も]ったほうがいい", blank: true },
        ],
        notes: "Rain first; 傘を持つ (carry an umbrella); no sentence-final particle",
      },
      {
        segments: [
          { text: "傘[かさ]を 持[も]っていったほうがいいよ。雨[あめ]が" },
          { text: "降[ふ]る", blank: true },
          { text: "ね" },
        ],
        notes: "ね instead of よ at end of rain clause — seeking agreement/confirmation tone",
      },
      {
        segments: [
          { text: "傘[かさ]を" },
          { text: "持[も]っていったほうがいいですよ", blank: true },
          { text: "。雨[あめ]が降[ふ]るんです" },
        ],
        notes: "Polite; 持っていく; んです for explanatory nuance on the rain clause",
      },
      {
        segments: [
          { text: "傘[かさ]を" },
          { text: "持[も]ってきたほうがいいですよ", blank: true },
          { text: "。雨[あめ]が降[ふ]るんです" },
        ],
        notes: "Polite; 持ってくる; んです for explanatory nuance on the rain clause",
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
      },
      {
        segments: [
          { text: "今日[きょう]はすごく 寒[さむ]いから、手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
        ],
        notes: "すごく instead of とても",
      },
      {
        segments: [
          { text: "手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
          { text: "よ。今日[きょう]はとても 寒[さむ]いから" },
        ],
        notes: "Advice first, reason clause at the end with よ; とても寒い",
      },
      {
        segments: [
          { text: "手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
          { text: "よ。今日[きょう]はすごく 寒[さむ]いから" },
        ],
        notes: "Advice first with よ, reason at end; すごく寒い",
      },
      {
        segments: [
          { text: "今日[きょう]はとても 寒[さむ]い。手袋[てぶくろ]を" },
          { text: "はいたほうがいい", blank: true },
          { text: "よ" },
        ],
        notes: "Reason as separate statement (no から); two sentences joined with よ at end",
      },
      {
        segments: [
          { text: "今日[きょう]はとても 寒[さむ]いから、手袋[てぶくろ]をはいた" },
          { text: "ほうがいいです", blank: true },
        ],
        notes: "Polite with です fully inside the blank to prevent いいだ conversion; とても寒い; reason first",
      },
      {
        segments: [
          { text: "今日[きょう]はすごく 寒[さむ]いから、手袋[てぶくろ]をはいた" },
          { text: "ほうがいいです", blank: true },
        ],
        notes: "Polite with です inside the blank; すごく寒い; reason first",
      },
      {
        segments: [
          { text: "今日[きょう]はとても 寒[さむ]いから、手袋[てぶくろ]をはいた" },
          { text: "ほうがいいですよ", blank: true },
        ],
        notes: "Polite with ですよ inside the blank for emphasis; とても寒い; reason first",
      },
      {
        segments: [
          { text: "今日[きょう]はすごく 寒[さむ]いから、手袋[てぶくろ]をはいた" },
          { text: "ほうがいいですよ", blank: true },
        ],
        notes: "Polite with ですよ inside the blank; すごく寒い; reason first",
      },
    ],
  },
];
