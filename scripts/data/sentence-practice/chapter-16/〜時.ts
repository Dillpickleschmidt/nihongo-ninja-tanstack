import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "When I'm free, I usually go to the park.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "暇[ひま]な", blank: true },
          { text: "とき、たいてい 公園[こうえん]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base form: な-adjective + なとき, たいてい before verb",
      },
      {
        segments: [
          { text: "私[わたし]は 暇[ひま]な" },
          { text: "ときに", blank: true },
          { text: "、たいてい 公園[こうえん]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ときに as the blank (with に particle attached)",
      },
      {
        segments: [
          { text: "私[わたし]は 暇[ひま]な" },
          { text: "とき", blank: true },
          { text: "、公園[こうえん]に たいてい" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "たいてい placed closer to the verb (after 公園に)",
      },
      {
        segments: [
          { text: "私[わたし]は 暇[ひま]な" },
          { text: "とき", blank: true },
          { text: "、たいてい 公園[こうえん]へ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "公園へ instead of 公園に",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "暇[ひま]なとき", blank: true },
          { text: "に、たいてい 公園[こうえん]へ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "暇なとき as a single blank, へ direction particle, ときに split with に outside blank",
      },
      {
        segments: [
          { text: "私[わたし]は 暇[ひま]な" },
          { text: "とき", blank: true },
          { text: "、たいてい 公園[こうえん]に" },
          { text: "出[で]かける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "出かける (to go out) instead of 行く",
      },
      {
        segments: [
          { text: "私[わたし]は 暇[ひま]な" },
          { text: "とき", blank: true },
          { text: "、よく 公園[こうえん]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "よく instead of たいてい (both mean \"usually/often\")",
      },
    ],
  },
  {
    english: "When I'm sick, I want to eat my mom's cooking.",
    answers: [
      {
        segments: [
          { text: "病気[びょうき]のとき", blank: true },
          { text: "、お 母[かあ]さんの 料理[りょうり]が" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "病気[びょうき]のとき", blank: true },
          { text: "、お 母[かあ]さんの 料理[りょうり]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using を instead of が to mark 料理",
      },
      {
        segments: [
          { text: "病気[びょうき]のとき", blank: true },
          { text: "に、お 母[かあ]さんの 料理[りょうり]が" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding に after とき",
      },
      {
        segments: [
          { text: "病気[びょうき]のとき", blank: true },
          { text: "に、お 母[かあ]さんの 料理[りょうり]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に after とき, を marking 料理",
      },
      {
        segments: [
          { text: "病気[びょうき]のときは", blank: true },
          { text: "、お 母[かあ]さんの 料理[りょうり]が" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "病気[びょうき]のときは", blank: true },
          { text: "、お 母[かあ]さんの 料理[りょうり]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "は after とき, を marking 料理",
      },
    ],
  },
  {
    english: "When I listen to music, I can't study at all.",
    answers: [
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]くとき、全然[ぜんぜん] 勉強[べんきょう]" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]くときに、全然[ぜんぜん] 勉強[べんきょう]" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adding に after とき",
      },
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]くとき、全然[ぜんぜん] 勉強[べんきょう]が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "勉強が instead of 勉強 — が marks the object of できない",
      },
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]くときに、全然[ぜんぜん] 勉強[べんきょう]が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "とき + に, and 勉強が with potential できない",
      },
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]くとき、全然[ぜんぜん] 勉強[べんきょう]することが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "音楽[おんがく]を聞[き]いているとき、全然[ぜんぜん] 勉強[べんきょう]" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 聞いているとき (while in the act of listening) instead of 聞くとき",
      },
      {
        segments: [
          { text: "音楽[おんがく]を聞[き]いているときに、全然[ぜんぜん] 勉強[べんきょう]" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "聞いているときに — ている form with に",
      },
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]くときは、全然[ぜんぜん] 勉強[べんきょう]" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "音楽[おんがく]を聞[き]いているときは、全然[ぜんぜん] 勉強[べんきょう]" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "聞いているときは — ている form with は for topic/contrast",
      },
    ],
  },
  {
    english: "When I was a college student, I worked part-time every day.",
    answers: [
      {
        segments: [
          { text: "大学生[だいがくせい]のとき、毎日[まいにち]アルバイトを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "大学生[だいがくせい]のとき、毎日[まいにち]アルバイトをして" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "大学生[だいがくせい]のときに、毎日[まいにち]アルバイトを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adding に after とき (大学生のときに)",
      },
      {
        segments: [
          { text: "大学生[だいがくせい]のときに、毎日[まいにち]アルバイトをして" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "とき + に, with ていた for habitual past",
      },
      {
        segments: [
          { text: "大学生[だいがくせい]のとき、アルバイトを毎日[まいにち]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "毎日 moved after アルバイトを (adverb placement variation)",
      },
    ],
  },
  {
    english: "When I arrived at the station, the last train had already left.",
    answers: [
      {
        segments: [
          { text: "駅[えき]に" },
          { text: "着[つ]いた", blank: true },
          { text: "とき、終電[しゅうでん]はもう 出[で]ていた" },
        ],
        notes: "Core answer: past tense verb before とき, ていた for resultant state, は for topic",
      },
      {
        segments: [
          { text: "駅[えき]に" },
          { text: "着[つ]いた", blank: true },
          { text: "ときに、終電[しゅうでん]はもう 出[で]ていた" },
        ],
        notes: "Adding に after とき — both とき and ときに are natural",
      },
      {
        segments: [
          { text: "駅[えき]に" },
          { text: "着[つ]いた", blank: true },
          { text: "とき、終電[しゅうでん]がもう 出[で]ていた" },
        ],
        notes: "が instead of は for the last train — slightly more neutral/informational nuance",
      },
      {
        segments: [
          { text: "駅[えき]に" },
          { text: "着[つ]いた", blank: true },
          { text: "ときに、終電[しゅうでん]がもう 出[で]ていた" },
        ],
        notes: "ときに + が particle for the last train",
      },
      {
        segments: [
          { text: "駅[えき]に" },
          { text: "着[つ]いた", blank: true },
          { text: "とき、もう終電[しゅうでん]は 出[で]ていた" },
        ],
        notes: "もう moved before 終電は — slightly different emphasis, also natural",
      },
      {
        segments: [
          { text: "駅[えき]に" },
          { text: "着[つ]いた", blank: true },
          { text: "とき、終電[しゅうでん]はもう 出[で]た" },
        ],
        notes: "Simple past 出た instead of 出ていた — also natural when emphasizing the event rather than the resultant state",
      },
      {
        segments: [
          { text: "駅[えき]に" },
          { text: "着[つ]いた", blank: true },
          { text: "ときに、終電[しゅうでん]はもう 出[で]た" },
        ],
        notes: "ときに + simple past 出た",
      },
    ],
  },
  {
    english: "When it's cold, I don't want to get up.",
    answers: [
      {
        segments: [
          { text: "寒[さむ]い", blank: true },
          { text: "とき、起[お]きたくない" },
        ],
      },
      {
        segments: [
          { text: "寒[さむ]い", blank: true },
          { text: "ときに、起[お]きたくない" },
        ],
        notes: "With に particle after とき",
      },
      {
        segments: [
          { text: "寒[さむ]い", blank: true },
          { text: "ときは、起[お]きたくない" },
        ],
        notes: "With は particle after とき (topicalizing)",
      },
      {
        segments: [
          { text: "寒[さむ]い", blank: true },
          { text: "とき、私[わたし]は起[お]きたくない" },
        ],
        notes: "私は explicitly in the result clause",
      },
      {
        segments: [
          { text: "起[お]きたくないのは、寒[さむ]い", blank: true },
          { text: "ときです" },
        ],
        notes: "Reversed structure: \"What I don't want to get up at is when it's cold\" — の(は)＋とき",
      },
      {
        segments: [
          { text: "寒[さむ]い", blank: true },
          { text: "ときは、全然[ぜんぜん]起[お]きたくない" },
        ],
        notes: "Adding 全然 to emphasize \"don't want to get up at all\"",
      },
    ],
  },
  {
    english: "When I'm hungry, I always buy too much at the supermarket.",
    answers: [
      {
        segments: [
          { text: "おなかが 空[す]くとき", blank: true },
          { text: "、いつもスーパーで" },
          { text: "買[か]いすぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]はおなかが 空[す]くとき", blank: true },
          { text: "、いつもスーパーで" },
          { text: "買[か]いすぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は subject added",
      },
      {
        segments: [
          { text: "おなかが 空[す]くときに", blank: true },
          { text: "、いつもスーパーで" },
          { text: "買[か]いすぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ときに (with に particle after とき) instead of とき alone",
      },
      {
        segments: [
          { text: "私[わたし]はおなかが 空[す]くときに", blank: true },
          { text: "、いつもスーパーで" },
          { text: "買[か]いすぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は with ときに",
      },
      {
        segments: [
          { text: "おなかが 空[す]くとき", blank: true },
          { text: "、スーパーでいつも" },
          { text: "買[か]いすぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "いつも placed after スーパーで (adverb position variation)",
      },
      {
        segments: [
          { text: "おなかが 空[す]くときに", blank: true },
          { text: "、スーパーでいつも" },
          { text: "買[か]いすぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ときに + いつも after スーパーで",
      },
      {
        segments: [
          { text: "おなかがすいているとき", blank: true },
          { text: "、いつもスーパーで" },
          { text: "買[か]いすぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "おなかがすいているとき — using the ている stative form to express \"when (I am in a state of being hungry)\"",
      },
      {
        segments: [
          { text: "おなかがすいているときに", blank: true },
          { text: "、いつもスーパーで" },
          { text: "買[か]いすぎる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "おなかがすいているときに — ている stative + ときに",
      },
    ],
  },
  {
    english: "When it's exam time, I can't sleep at all.",
    answers: [
      {
        segments: [
          { text: "試験[しけん]のとき", blank: true },
          { text: "、全然[ぜんぜん]寝[ね]ることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using ことができる (negative) instead of 寝られない — できる conjugated for polite/casual split.",
      },
      {
        segments: [
          { text: "テストのとき", blank: true },
          { text: "、全然[ぜんぜん]寝[ね]ることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "テストのとき with ことができない — テスト variant.",
      },
      {
        segments: [
          { text: "試験[しけん]のときに", blank: true },
          { text: "、全然[ぜんぜん]寝[ね]ることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "試験のときに + ことができない — adding に particle after とき.",
      },
      {
        segments: [
          { text: "テストのときに", blank: true },
          { text: "、全然[ぜんぜん]寝[ね]ることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "テストのときに + ことができない.",
      },
      {
        segments: [
          { text: "試験[しけん]の", blank: true },
          { text: "とき、全然[ぜんぜん]" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Base answer: 試験のとき + 全然寝られない. Potential-negative of 寝る via conjugation metadata.",
      },
      {
        segments: [
          { text: "試験[しけん]の", blank: true },
          { text: "ときに、全然[ぜんぜん]" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adding に after とき — marks the time when something happens.",
      },
      {
        segments: [
          { text: "テストの", blank: true },
          { text: "とき、全然[ぜんぜん]" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using テスト instead of 試験 — both are natural for \"exam\".",
      },
      {
        segments: [
          { text: "テストの", blank: true },
          { text: "ときに、全然[ぜんぜん]" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "テストのときに — テスト variant with に particle.",
      },
    ],
  },
  {
    english: "When I'm sad, I watch a horror movie.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "悲[かな]しいとき", blank: true },
          { text: "、ホラー 映画[えいが]を" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "悲[かな]しいとき", blank: true },
          { text: "、ホラーを" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Dropping 映画 — just saying \"watch a horror\" (ホラーを見る is natural shorthand)",
      },
      {
        segments: [
          { text: "悲[かな]しいときに", blank: true },
          { text: "、ホラー 映画[えいが]を" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding に after とき (ときに) — also very natural",
      },
      {
        segments: [
          { text: "悲[かな]しいときに", blank: true },
          { text: "、ホラーを" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ときに + dropping 映画",
      },
      {
        segments: [
          { text: "私[わたし]は 悲[かな]しいとき", blank: true },
          { text: "、ホラー 映画[えいが]を" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は subject added at the start",
      },
      {
        segments: [
          { text: "悲[かな]しいときは", blank: true },
          { text: "、ホラー 映画[えいが]を" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とき topicalized with は — \"As for when I'm sad, I watch horror movies\" — very natural for expressing a habit",
      },
      {
        segments: [
          { text: "悲[かな]しいときは", blank: true },
          { text: "、ホラーを" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ときは topicalized + dropping 映画",
      },
    ],
  },
  {
    english: "When I'm quiet, my friends always get worried.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "静[しず]かな", blank: true },
          { text: "とき、 友達[ともだち]はいつも 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "静[しず]かな", blank: true },
          { text: "とき、 友達[ともだち]がいつも 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は for friends (neutral subject marking)",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "静[しず]かな", blank: true },
          { text: "とき、いつも 友達[ともだち]は 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "いつも moved to before 友達 (adverb placement variation)",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "静[しず]かな", blank: true },
          { text: "とき、いつも 友達[ともだち]が 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "いつも before 友達, が marking friends",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "静[しず]かな", blank: true },
          { text: "とき、 友達[ともだち]はいつも 心配[しんぱい]に" },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "心配になる instead of 心配する (become worried/get worried nuance)",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "静[しず]かな", blank: true },
          { text: "とき、 友達[ともだち]がいつも 心配[しんぱい]に" },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "心配になる with が marking friends",
      },
      {
        segments: [
          { text: "静[しず]かな", blank: true },
          { text: "とき、 友達[ともだち]はいつも 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私が dropped from the front (topic-dropped variation, とき clause starts the sentence)",
      },
      {
        segments: [
          { text: "静[しず]かな", blank: true },
          { text: "とき、 友達[ともだち]がいつも 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私が dropped, が marking friends",
      },
      {
        segments: [
          { text: "静[しず]かな", blank: true },
          { text: "とき、いつも 友達[ともだち]は 心配[しんぱい]に" },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私が dropped, 心配になる, いつも before 友達, は marking friends",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "静[しず]かな", blank: true },
          { text: "ときに、 友達[ともだち]はいつも 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ときに with に particle after とき",
      },
      {
        segments: [
          { text: "私[わたし]が" },
          { text: "静[しず]かな", blank: true },
          { text: "ときに、 友達[ともだち]がいつも 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ときに, が marking friends",
      },
      {
        segments: [
          { text: "静[しず]かな", blank: true },
          { text: "ときに、 友達[ともだち]はいつも 心配[しんぱい]" },
          { text: "する", conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私が dropped, ときに with に particle",
      },
    ],
  },
  {
    english: "When I cook, I always make way too much food.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 料理[りょうり]する" },
          { text: "とき", blank: true },
          { text: "、いつも 食[た]べ 物[もの]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base answer: 料理する＋とき, 食べ物を作りすぎる",
      },
      {
        segments: [
          { text: "私[わたし]は 料理[りょうり]をする" },
          { text: "とき", blank: true },
          { text: "、いつも 食[た]べ 物[もの]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "料理をする (with を particle) instead of 料理する",
      },
      {
        segments: [
          { text: "私[わたし]は 料理[りょうり]する" },
          { text: "ときに", blank: true },
          { text: "、いつも 食[た]べ 物[もの]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ときに (with に particle after とき)",
      },
      {
        segments: [
          { text: "私[わたし]は 料理[りょうり]をする" },
          { text: "ときに", blank: true },
          { text: "、いつも 食[た]べ 物[もの]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "料理をする (with を) + ときに (with に)",
      },
      {
        segments: [
          { text: "私[わたし]は 料理[りょうり]する" },
          { text: "とき", blank: true },
          { text: "、いつも ご 飯[はん]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ご飯を作りすぎる instead of 食べ物を作りすぎる",
      },
      {
        segments: [
          { text: "私[わたし]は 料理[りょうり]する" },
          { text: "とき", blank: true },
          { text: "、いつも 料理[りょうり]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "料理を作りすぎる — using 料理 as the object (the dishes/food made)",
      },
      {
        segments: [
          { text: "料理[りょうり]する" },
          { text: "とき", blank: true },
          { text: "、いつも 食[た]べ 物[もの]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "No 私は at the start (dropped subject)",
      },
      {
        segments: [
          { text: "料理[りょうり]する" },
          { text: "ときに", blank: true },
          { text: "、いつも 食[た]べ 物[もの]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "No 私は, ときに variant",
      },
      {
        segments: [
          { text: "料理[りょうり]する" },
          { text: "とき", blank: true },
          { text: "、いつも ご 飯[はん]を" },
          { text: "作[つく]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "No 私は, ご飯 as object",
      },
    ],
  },
  {
    english: "When I'm nervous, I can't speak at all.",
    answers: [
      {
        segments: [
          { text: "緊張[きんちょう]するとき、全然[ぜんぜん]" },
          { text: "話[はな]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "緊張[きんちょう]しているとき、全然[ぜんぜん]" },
          { text: "話[はな]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "緊張[きんちょう]するときに、全然[ぜんぜん]" },
          { text: "話[はな]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adding に after とき (緊張するときに), a natural variant marking the time expression.",
      },
      {
        segments: [
          { text: "緊張[きんちょう]しているときに、全然[ぜんぜん]" },
          { text: "話[はな]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Combining ている state + に after とき.",
      },
      {
        segments: [
          { text: "緊張[きんちょう]するとき、全然[ぜんぜん]話[はな]すことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using ことができない instead of 話せない for \"can't speak\" — the ことができる grammar alternative.",
      },
      {
        segments: [
          { text: "緊張[きんちょう]しているとき、全然[ぜんぜん]話[はな]すことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ている state + ことができない variant.",
      },
    ],
  },
  {
    english: "When I'm on a trip, I always take too many photos.",
    answers: [
      {
        segments: [
          { text: "旅行[りょこう]のとき", blank: true },
          { text: "、いつも 写真[しゃしん]を" },
          { text: "撮[と]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun + の + とき; 旅行 as a noun; standard word order",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき", blank: true },
          { text: "、いつも 写真[しゃしん]を" },
          { text: "撮[と]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Verb + とき; 旅行する as a verb instead of noun",
      },
      {
        segments: [
          { text: "旅行[りょこう]のとき", blank: true },
          { text: "、写真[しゃしん]をいつも" },
          { text: "撮[と]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "の + とき; いつも moved after を (before the verb)",
      },
      {
        segments: [
          { text: "旅行[りょこう]するとき", blank: true },
          { text: "、写真[しゃしん]をいつも" },
          { text: "撮[と]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Verb + とき; いつも moved to just before the verb",
      },
      {
        segments: [
          { text: "旅行[りょこう]のときに", blank: true },
          { text: "、いつも 写真[しゃしん]を" },
          { text: "撮[と]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "の + とき with に particle after とき",
      },
      {
        segments: [
          { text: "旅行[りょこう]するときに", blank: true },
          { text: "、いつも 写真[しゃしん]を" },
          { text: "撮[と]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Verb + とき with に particle after とき",
      },
      {
        segments: [
          { text: "私[わたし]は 旅行[りょこう]のとき", blank: true },
          { text: "、いつも 写真[しゃしん]を" },
          { text: "撮[と]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は topic at the start with noun + の + とき",
      },
      {
        segments: [
          { text: "私[わたし]は 旅行[りょこう]するとき", blank: true },
          { text: "、いつも 写真[しゃしん]を" },
          { text: "撮[と]りすぎる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は with verb + とき",
      },
    ],
  },
  {
    english: "When I'm young, I want to travel around the world.",
    answers: [
      {
        segments: [
          { text: "若[わか]いとき、世界[せかい]を旅行[りょこう]", blank: true },
          { text: "したい" },
        ],
      },
      {
        segments: [
          { text: "若[わか]いとき、世界中[せかいじゅう]を旅行[りょこう]", blank: true },
          { text: "したい" },
        ],
        notes: "世界中 (all over the world) instead of 世界",
      },
      {
        segments: [
          { text: "若[わか]いときに、世界[せかい]を旅行[りょこう]", blank: true },
          { text: "したい" },
        ],
        notes: "Adding に after とき",
      },
      {
        segments: [
          { text: "若[わか]いときに、世界中[せかいじゅう]を旅行[りょこう]", blank: true },
          { text: "したい" },
        ],
        notes: "に after とき + 世界中",
      },
      {
        segments: [
          { text: "若[わか]いとき、世界旅行[せかいりょこう]を", blank: true },
          { text: "したい" },
        ],
        notes: "世界旅行 as a compound noun with を",
      },
      {
        segments: [
          { text: "若[わか]いときに、世界旅行[せかいりょこう]を", blank: true },
          { text: "したい" },
        ],
        notes: "に after とき + 世界旅行 as noun",
      },
    ],
  },
  {
    english: "When I was a child, I wanted to become an astronaut.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 子供[こども]の" },
          { text: "とき", blank: true },
          { text: "、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 子供[こども]の" },
          { text: "とき", blank: true },
          { text: "に、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "With に after とき",
      },
      {
        segments: [
          { text: "子供[こども]の" },
          { text: "とき", blank: true },
          { text: "、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "Dropped 私は from beginning (topic drop)",
      },
      {
        segments: [
          { text: "子供[こども]の" },
          { text: "とき", blank: true },
          { text: "に、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "Dropped 私は, with に after とき",
      },
      {
        segments: [
          { text: "私[わたし]は 小[ちい]さい" },
          { text: "とき", blank: true },
          { text: "、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "小さいとき (when I was little) — い-adjective + とき, no に after とき",
      },
      {
        segments: [
          { text: "私[わたし]は 小[ちい]さい" },
          { text: "とき", blank: true },
          { text: "に、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "小さいとき with に after とき",
      },
      {
        segments: [
          { text: "小[ちい]さい" },
          { text: "とき", blank: true },
          { text: "、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "小さいとき, no 私は, no に after とき",
      },
      {
        segments: [
          { text: "小[ちい]さい" },
          { text: "とき", blank: true },
          { text: "に、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "小さいとき, no 私は, with に after とき",
      },
      {
        segments: [
          { text: "私[わたし]が 子供[こども]の" },
          { text: "とき", blank: true },
          { text: "、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "Using が instead of は before 子供のとき",
      },
      {
        segments: [
          { text: "私[わたし]が 子供[こども]の" },
          { text: "とき", blank: true },
          { text: "に、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]が 小[ちい]さい" },
          { text: "とき", blank: true },
          { text: "、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "小さいとき with が particle",
      },
      {
        segments: [
          { text: "私[わたし]が 小[ちい]さい" },
          { text: "とき", blank: true },
          { text: "に、 宇宙飛行士[うちゅうひこうし]に なりたかった" },
        ],
        notes: "小さいとき with が particle and に after とき",
      },
    ],
  },
  {
    english: "When I'm busy, I forget to eat lunch.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "忙[いそが]しい", blank: true },
          { text: "とき、昼[ひる]ご飯[はん]を食[た]べるのを" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "忙[いそが]しい", blank: true },
          { text: "ときに、昼[ひる]ご飯[はん]を食[た]べるのを" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding に after とき (ときに) — both とき and ときに are natural.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "忙[いそが]しい", blank: true },
          { text: "とき、昼[ひる]ご飯[はん]を食[た]べることを" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ことを instead of のを with 忘れる — both are natural in Japanese.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "忙[いそが]しい", blank: true },
          { text: "ときに、昼[ひる]ご飯[はん]を食[た]べることを" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ときに + ことを combination.",
      },
    ],
  },
  {
    english: "When I'm on a date, I get so nervous I can't say anything.",
    answers: [
      {
        segments: [
          { text: "デートのとき", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Core answer: noun + の + とき. て-form of 緊張する chains to 何も言えない (potential negative of 言う)",
      },
      {
        segments: [
          { text: "デートのときに", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adding に after とき (とき + に variant)",
      },
      {
        segments: [
          { text: "デートのとき", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
          { text: "に" },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "なる ending: \"can't say anything\" expressed as \"become unable to say anything\"",
      },
      {
        segments: [
          { text: "デートのときに", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
          { text: "に" },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "とき + に + なる ending variant",
      },
      {
        segments: [
          { text: "デートのとき", blank: true },
          { text: "、すごく緊張[きんちょう]して 何[なに]も" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Adding すごく to emphasize \"so nervous\"",
      },
      {
        segments: [
          { text: "デートのとき", blank: true },
          { text: "、とても緊張[きんちょう]して 何[なに]も" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "とても instead of すごく to emphasize nervousness",
      },
      {
        segments: [
          { text: "デートのとき", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も 言[い]うことが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using ことができない (cannot say anything) instead of potential form 言えない",
      },
      {
        segments: [
          { text: "デートするとき", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "デートする as a suru verb + とき instead of noun + の + とき",
      },
      {
        segments: [
          { text: "デートするときに", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "デートする verb + とき + に",
      },
      {
        segments: [
          { text: "デートのとき", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も" },
          { text: "話[はな]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "話せない (can't speak/talk) as synonym for 言えない",
      },
      {
        segments: [
          { text: "デートするとき", blank: true },
          { text: "、緊張[きんちょう]して 何[なに]も" },
          { text: "話[はな]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "デートする verb form + 話せない",
      },
    ],
  },
  {
    english: "When I'm at a hot spring, I always feel like I never want to go home.",
    answers: [
      {
        segments: [
          { text: "温泉[おんせん]のとき", blank: true },
          { text: "、いつも 帰[かえ]りたくないと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun + の + とき. \"When (it's) hot spring time, I always think I don't want to go home.\"",
      },
      {
        segments: [
          { text: "温泉[おんせん]にいるとき", blank: true },
          { text: "、いつも 帰[かえ]りたくないと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Verb + とき using いる (to be at), 温泉にいるとき — \"when I'm at a hot spring\"",
      },
      {
        segments: [
          { text: "温泉[おんせん]のときに", blank: true },
          { text: "、いつも 帰[かえ]りたくないと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same as first but with に after とき, emphasising the moment/situation",
      },
      {
        segments: [
          { text: "温泉[おんせん]にいるときに", blank: true },
          { text: "、いつも 帰[かえ]りたくないと" },
          { text: "思[おも]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Verb + とき with に particle after, 温泉にいるときに",
      },
    ],
  },
  {
    english: "When I go to karaoke, I always sing the same songs.",
    answers: [
      {
        segments: [
          { text: "カラオケに" },
          { text: "行[い]くとき", blank: true },
          { text: "、いつも同[おな]じ 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "カラオケに" },
          { text: "行[い]くときに", blank: true },
          { text: "、いつも同[おな]じ 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With に after とき",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケに" },
          { text: "行[い]くとき", blank: true },
          { text: "、いつも 同[おな]じ 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 私は subject explicit",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケに" },
          { text: "行[い]くときに", blank: true },
          { text: "、いつも 同[おな]じ 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 私は and に after とき",
      },
      {
        segments: [
          { text: "カラオケの" },
          { text: "とき", blank: true },
          { text: "、いつも 同[おな]じ 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun + の + とき: カラオケのとき (when it's karaoke time)",
      },
      {
        segments: [
          { text: "カラオケの" },
          { text: "ときに", blank: true },
          { text: "、いつも 同[おな]じ 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun + の + とき + に",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケの" },
          { text: "とき", blank: true },
          { text: "、いつも 同[おな]じ 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私は + noun + の + とき",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケの" },
          { text: "ときに", blank: true },
          { text: "、いつも 同[おな]じ 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私は + noun + の + ときに",
      },
    ],
  },
  {
    english: "When I'm lonely, I call my older sister.",
    answers: [
      {
        segments: [
          { text: "寂[さび]しい", blank: true },
          { text: "とき、お 姉[ねえ]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "寂[さび]しい", blank: true },
          { text: "とき、お 姉[ねえ]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は at the start",
      },
      {
        segments: [
          { text: "寂[さび]しい", blank: true },
          { text: "ときに、お 姉[ねえ]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With に after とき (ときに)",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "寂[さび]しい", blank: true },
          { text: "ときに、お 姉[ねえ]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は + ときに",
      },
      {
        segments: [
          { text: "寂[さび]しい", blank: true },
          { text: "とき、お 姉[ねえ]さんに 電話[でんわ]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "電話をする variant (with を)",
      },
      {
        segments: [
          { text: "寂[さび]しい", blank: true },
          { text: "ときに、お 姉[ねえ]さんに 電話[でんわ]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "電話をする + ときに",
      },
      {
        segments: [
          { text: "寂[さび]しい", blank: true },
          { text: "とき、私[わたし]はお 姉[ねえ]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私は placed after the とき clause (mid-sentence topic)",
      },
      {
        segments: [
          { text: "寂[さび]しい", blank: true },
          { text: "ときに、私[わたし]はお 姉[ねえ]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "私は after とき clause + ときに",
      },
    ],
  },
];
