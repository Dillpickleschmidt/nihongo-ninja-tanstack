import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Is Kenji able to swim in the sea?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 海[うみ]で" },
          { text: "泳[およ]げる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 海[うみ]で 泳[およ]ぐ" },
          { text: "ことができる", blank: true },
          { text: "か" },
        ],
        notes: "ことができる structure — verb nominalised with こと",
      },
      {
        segments: [
          { text: "けんじさんが 海[うみ]で" },
          { text: "泳[およ]げる", blank: true },
          { text: "か" },
        ],
        notes: "が instead of は to mark subject",
      },
      {
        segments: [
          { text: "けんじさんが 海[うみ]で 泳[およ]ぐ" },
          { text: "ことができる", blank: true },
          { text: "か" },
        ],
        notes: "ことができる with が marking subject",
      },
      {
        segments: [
          { text: "けんじさんは 海[うみ]を" },
          { text: "泳[およ]げる", blank: true },
          { text: "か" },
        ],
        notes: "を instead of で — treating 海 as the space being \"swum through\", は marks topic",
      },
      {
        segments: [
          { text: "けんじさんは 海[うみ]を 泳[およ]ぐ" },
          { text: "ことができる", blank: true },
          { text: "か" },
        ],
        notes: "ことができる with を marking 海",
      },
      {
        segments: [
          { text: "けんじさんは 海[うみ]で" },
          { text: "泳[およ]げる", blank: true },
          { text: "の" },
        ],
        notes: "の instead of か for a softer, more curious question tone; は and で",
      },
      {
        segments: [
          { text: "けんじさんが 海[うみ]で" },
          { text: "泳[およ]げる", blank: true },
          { text: "の" },
        ],
        notes: "の question ending with が marking subject",
      },
      {
        segments: [
          { text: "けんじさんは 海[うみ]で 泳[およ]ぐ" },
          { text: "ことができる", blank: true },
          { text: "の" },
        ],
        notes: "ことができる with の question ending, は and で",
      },
      {
        segments: [
          { text: "けんじさんは 海[うみ]を" },
          { text: "泳[およ]げる", blank: true },
          { text: "の" },
        ],
        notes: "を and の question ending with は",
      },
      {
        segments: [
          { text: "けんじさんが 海[うみ]を" },
          { text: "泳[およ]げる", blank: true },
          { text: "か" },
        ],
        notes: "が subject + を marking 海 + potential + か",
      },
    ],
  },
  {
    english: "I can't eat spicy food at all.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 辛[から]い 食[た]べ 物[もの]が 全然[ぜんぜん]" },
          { text: "食[た]べられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 辛[から]い 食[た]べ 物[もの]を 全然[ぜんぜん]" },
          { text: "食[た]べられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Standard potential form with られる, を marks the object instead of が",
      },
      {
        segments: [
          { text: "私[わたし]は 辛[から]いものが 全然[ぜんぜん]" },
          { text: "食[た]べられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "辛いもの instead of 辛い食べ物, が marking object",
      },
      {
        segments: [
          { text: "私[わたし]は 辛[から]いものを 全然[ぜんぜん]" },
          { text: "食[た]べられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "辛いもの instead of 辛い食べ物, を marking object",
      },
      {
        segments: [
          { text: "私[わたし]は 辛[から]い 食[た]べ物[もの]が 全然[ぜんぜん] 食[た]べること" },
          { text: "が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ことができない form with 辛い食べ物 and が marking object",
      },
      {
        segments: [
          { text: "私[わたし]は 辛[から]い 食[た]べ物[もの]を 全然[ぜんぜん] 食[た]べること" },
          { text: "が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ことができない form with 辛い食べ物 and を marking object",
      },
      {
        segments: [
          { text: "私[わたし]は 辛[から]いものが 全然[ぜんぜん] 食[た]べること" },
          { text: "が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ことができない with 辛いもの and が marking object",
      },
      {
        segments: [
          { text: "私[わたし]は 辛[から]いものを 全然[ぜんぜん] 食[た]べること" },
          { text: "が" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ことができない with 辛いもの and を marking object",
      },
      {
        segments: [
          { text: "辛[から]いものは 全[まった]く" },
          { text: "食[た]べられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "全く (emphatic \"not at all\") instead of 全然; subject 私は dropped",
      },
    ],
  },
  {
    english: "Takeshi can drink coffee, but not milk.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは コーヒーは" },
          { text: "飲[の]める", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "が、牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]める", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Potential form 飲める/飲めない; は marks both objects for contrast; が connects clauses",
      },
    ],
  },
  {
    english: "Sakura can play the piano and sing at the same time!",
    hint: "Sakura = さくら",
    answers: [
      {
        segments: [
          { text: "さくらは、ピアノを" },
          { text: "弾[ひ]きながら", blank: true },
          { text: "歌[うた]を" },
          { text: "歌[うた]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Core answer: ながら expresses \"at the same time / while playing\", 歌える is potential of 歌う (Ichidan verb)",
      },
      {
        segments: [
          { text: "さくらは、ピアノを弾[ひ]きながら歌[うた]う" },
          { text: "ことができる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる construction: ながら connects the two actions, できる as potential",
      },
      {
        segments: [
          { text: "さくらは、ピアノを" },
          { text: "弾[ひ]きながら", blank: true },
          { text: "歌[うた]が" },
          { text: "歌[うた]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of を before 歌える — potential verbs allow が to mark the object",
      },
      {
        segments: [
          { text: "さくらは、ピアノを弾[ひ]きながら歌[うた]が歌[うた]う" },
          { text: "ことができる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる with が marking 歌 (potential allows が as object marker)",
      },
      {
        segments: [
          { text: "さくらは、ピアノを" },
          { text: "弾[ひ]きながら", blank: true },
          { text: "歌[うた]も" },
          { text: "歌[うた]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "も instead of を before 歌える — \"can even sing while playing piano\" — emphatic nuance",
      },
      {
        segments: [
          { text: "さくらが、ピアノを" },
          { text: "弾[ひ]きながら", blank: true },
          { text: "歌[うた]を" },
          { text: "歌[うた]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は for さくら — が emphasizes the specific subject",
      },
      {
        segments: [
          { text: "さくらが、ピアノを弾[ひ]きながら歌[うた]う" },
          { text: "ことができる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は + ことができる + ながら construction",
      },
      {
        segments: [
          { text: "さくらは、同時[どうじ]にピアノを" },
          { text: "弾[ひ]いて", blank: true },
          { text: "歌[うた]を" },
          { text: "歌[うた]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "同時に + te-form 弾いて (while playing) + 歌える potential — expressing simultaneity via て-form",
      },
    ],
  },
  {
    english: "Hana can use chopsticks!",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは はしが" },
          { text: "使[つか]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "はなさんは はしを" },
          { text: "使[つか]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "はなさんは はしを 使[つか]う ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる form, を marks the object",
      },
      {
        segments: [
          { text: "はなさんは はしが 使[つか]う ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる form, が marks the object",
      },
    ],
  },
  {
    english: "I couldn't ride a bike when I was a child.",
    answers: [
      {
        segments: [
          { text: "子供[こども]の 時[とき]、自転車[じてんしゃ]に" },
          { text: "乗[の]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "子供[こども]の ころ、自転車[じてんしゃ]に" },
          { text: "乗[の]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Using ころ instead of 時 for \"when I was a child\" — slightly softer/more nostalgic nuance.",
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]、自転車[じてんしゃ]が" },
          { text: "乗[の]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Using が instead of に to mark 自転車 with potential verb — both particles are natural with potential forms.",
      },
      {
        segments: [
          { text: "小さい[ちいさい] 時[とき]、自転車[じてんしゃ]に" },
          { text: "乗[の]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Using 小さい時 (\"when I was little\") instead of 子供の時.",
      },
      {
        segments: [
          { text: "私[わたし]は 子供[こども]の 時[とき]、自転車[じてんしゃ]に" },
          { text: "乗[の]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "Explicit 私は subject added at the start.",
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]、自転車[じてんしゃ]に 乗[の]る ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "ことができる construction, negative past — 子供の時",
      },
      {
        segments: [
          { text: "子供[こども]の ころ、自転車[じてんしゃ]に 乗[の]る ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "ことができる with ころ instead of 時",
      },
      {
        segments: [
          { text: "小[ちい]さい 時[とき]、自転車[じてんしゃ]に 乗[の]る ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "ことができる with 小さい時 (\"when I was little\")",
      },
      {
        segments: [
          { text: "私[わたし]は 子供[こども]の 時[とき]、自転車[じてんしゃ]に 乗[の]る ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "ことができる with explicit 私は subject",
      },
    ],
  },
  {
    english: "Can Hana write her name in kanji?",
    hint: "Hana = ハナ",
    answers: [
      {
        segments: [
          { text: "ハナさんは 漢字[かんじ]で 名前[なまえ]が" },
          { text: "書[か]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Potential form 書ける, が marks the object, か question particle",
      },
      {
        segments: [
          { text: "ハナさんは 漢字[かんじ]で 名前[なまえ]を" },
          { text: "書[か]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Same but を marks the object instead of が",
      },
      {
        segments: [
          { text: "ハナさんは 漢字[かんじ]で 名前[なまえ]が 書[か]く ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる form, が marks object",
      },
      {
        segments: [
          { text: "ハナさんは 漢字[かんじ]で 名前[なまえ]を 書[か]く ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる form, を marks object",
      },
      {
        segments: [
          { text: "ハナさんは 名前[なまえ]を 漢字[かんじ]で" },
          { text: "書[か]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "を marks object, 名前を comes before 漢字で (reversed adverb order)",
      },
      {
        segments: [
          { text: "ハナさんは 名前[なまえ]が 漢字[かんじ]で" },
          { text: "書[か]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "が marks object, 名前が comes before 漢字で",
      },
      {
        segments: [
          { text: "ハナさんは 名前[なまえ]を 漢字[かんじ]で 書[か]く ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる, を marks object, 名前を before 漢字で",
      },
      {
        segments: [
          { text: "ハナさんは 名前[なまえ]が 漢字[かんじ]で 書[か]く ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる, が marks object, 名前が before 漢字で",
      },
      {
        segments: [
          { text: "ハナさんが 漢字[かんじ]で 名前[なまえ]を" },
          { text: "書[か]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "が instead of は for subject, を marks object",
      },
      {
        segments: [
          { text: "ハナさんが 漢字[かんじ]で 名前[なまえ]が" },
          { text: "書[か]ける", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "が instead of は for subject, が marks object",
      },
    ],
  },
  {
    english: "Can Takeshi understand English?",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは 英語[えいご]が 分[わ]かる" },
          { text: "ことができる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる form — nominalizes 分かる then uses できる for potential; が marks 英語",
      },
      {
        segments: [
          { text: "たけしさんは 英語[えいご]は 分[わ]かる" },
          { text: "ことができる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる with は instead of が marking 英語 (topic/contrast nuance)",
      },
      {
        segments: [
          { text: "たけしさんは 英語[えいご]を 理解[りかい]する" },
          { text: "ことができる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる with 理解する (to understand/comprehend); を marks 英語 as object of 理解する",
      },
    ],
  },
  {
    english: "I was able to make sushi for the first time!",
    answers: [
      {
        segments: [
          { text: "初[はじ]めて すしを" },
          { text: "作[つく]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "初[はじ]めて すしが" },
          { text: "作[つく]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Same but using が instead of を to mark すし (both natural with potential verbs)",
      },
      {
        segments: [
          { text: "初[はじ]めて すしを作[つく]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "すしを" },
          { text: "初[はじ]めて" },
          { text: "作[つく]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Word order variation: すしを comes first, 初めて in the middle before the verb",
      },
      {
        segments: [
          { text: "すしが" },
          { text: "初[はじ]めて" },
          { text: "作[つく]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Word order: すしが first, 初めて before verb, が particle",
      },
      {
        segments: [
          { text: "初[はじ]めて" },
          { text: "寿司[すし]を" },
          { text: "作[つく]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 寿司[すし] (kanji with furigana) instead of hiragana すし, を particle",
      },
      {
        segments: [
          { text: "初[はじ]めて" },
          { text: "寿司[すし]が" },
          { text: "作[つく]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "初[はじ]めて" },
          { text: "寿司[すし]を作[つく]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ことができた construction with 寿司[すし] (kanji)",
      },
    ],
  },
  {
    english: "Can Kenji come to the party?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは パーティーに" },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは パーティーに" },
          { text: "来[こ]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ら抜き form: これる (casual potential, ら removed)",
      },
      {
        segments: [
          { text: "けんじさんは パーティーに 来[く]る ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる structure with は topic particle",
      },
      {
        segments: [
          { text: "けんじさんが パーティーに" },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "が instead of は as the subject marker",
      },
      {
        segments: [
          { text: "けんじさんが パーティーに 来[く]る ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる with が subject marker",
      },
      {
        segments: [
          { text: "けんじさんは パーティーに" },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "の" },
        ],
        notes: "Using の instead of か for a softer question ending",
      },
      {
        segments: [
          { text: "けんじさんは パーティーに" },
          { text: "来[こ]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "の" },
        ],
        notes: "ら抜き これる with の question ending",
      },
    ],
  },
  {
    english: "Can Hana climb that mountain?",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは あの 山[やま]に" },
          { text: "登[のぼ]れる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はなさんは あの 山[やま]に登[のぼ]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる construction with に marking the mountain",
      },
      {
        segments: [
          { text: "はなさんは あの 山[やま]を" },
          { text: "登[のぼ]れる", blank: true },
          { text: "か" },
        ],
        notes: "Potential form with を marking the mountain (を is also natural with potential verbs)",
      },
      {
        segments: [
          { text: "はなさんは あの 山[やま]を登[のぼ]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる construction with を marking the mountain",
      },
      {
        segments: [
          { text: "はなさんは あの 山[やま]が" },
          { text: "登[のぼ]れる", blank: true },
          { text: "か" },
        ],
        notes: "Potential form with が marking the mountain",
      },
      {
        segments: [
          { text: "はなさんは その 山[やま]に" },
          { text: "登[のぼ]れる", blank: true },
          { text: "か" },
        ],
        notes: "Using その instead of あの for \"that mountain\"",
      },
      {
        segments: [
          { text: "はなさんは その 山[やま]を" },
          { text: "登[のぼ]れる", blank: true },
          { text: "か" },
        ],
        notes: "その + を particle + potential form",
      },
      {
        segments: [
          { text: "はなさんは その 山[やま]に登[のぼ]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる with その and に particle",
      },
    ],
  },
  {
    english: "Can Takeshi run to the station?",
    answers: [
      {
        segments: [
          { text: "たけしさんは 駅[えき]まで" },
          { text: "走[はし]れる", blank: true },
        ],
      },
      {
        segments: [
          { text: "たけしさんは 駅[えき]まで" },
          { text: "走[はし]れる", blank: true },
          { text: "か" },
        ],
        notes: "Potential form with か question marker, まで",
      },
      {
        segments: [
          { text: "たけしさんは 駅[えき]まで 走[はし]る" },
          { text: "ことができる", blank: true },
          { text: "か" },
        ],
        notes: "ことができる form with か question marker, まで",
      },
      {
        segments: [
          { text: "たけしさんは 駅[えき]まで 走[はし]る" },
          { text: "ことができる", blank: true },
        ],
        notes: "ことができる form without か, question by intonation, まで",
      },
      {
        segments: [
          { text: "たけしさんが 駅[えき]まで" },
          { text: "走[はし]れる", blank: true },
          { text: "か" },
        ],
        notes: "が instead of は for subject particle, potential form, か",
      },
      {
        segments: [
          { text: "たけしさんが 駅[えき]まで 走[はし]る" },
          { text: "ことができる", blank: true },
          { text: "か" },
        ],
        notes: "が subject particle + ことができる + か, まで",
      },
      {
        segments: [
          { text: "たけしさんは 駅[えき]に" },
          { text: "走[はし]れる", blank: true },
          { text: "か" },
        ],
        notes: "に instead of まで as destination particle, potential + か",
      },
      {
        segments: [
          { text: "たけしさんは 駅[えき]に 走[はし]る" },
          { text: "ことができる", blank: true },
          { text: "か" },
        ],
        notes: "に destination + ことができる + か",
      },
    ],
  },
  {
    english: "Can I take a photo here?",
    answers: [
      {
        segments: [
          { text: "ここで 写真[しゃしん]が" },
          { text: "撮[と]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using を instead of が to mark 写真",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を撮[と]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる construction with を",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]が撮[と]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる construction with が marking 写真",
      },
    ],
  },
  {
    english: "I can't sleep on the bus.",
    answers: [
      {
        segments: [
          { text: "バスで" },
          { text: "寝[の]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]はバスで" },
          { text: "寝[の]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Explicit 私は subject + バスで寝られない",
      },
      {
        segments: [
          { text: "バスの中[なか]で" },
          { text: "寝[の]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "バスの中で (inside the bus) instead of バスで",
      },
      {
        segments: [
          { text: "私[わたし]はバスの中[なか]で" },
          { text: "寝[の]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "私は + バスの中で + 寝られない",
      },
      {
        segments: [
          { text: "バスで寝[の]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "バスで + 寝ることができない (ことができる structure)",
      },
      {
        segments: [
          { text: "私[わたし]はバスで寝[の]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "私は + バスで + 寝ることができない",
      },
      {
        segments: [
          { text: "バスの中[なか]で寝[の]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "バスの中で + 寝ることができない",
      },
      {
        segments: [
          { text: "私[わたし]はバスの中[なか]で寝[の]ることが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "私は + バスの中で + 寝ることができない",
      },
    ],
  },
  {
    english: "I can do laundry by myself.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一人[ひとり]で 洗濯[せんたく]が" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun + ができる potential — 洗濯ができる",
      },
      {
        segments: [
          { text: "私[わたし]は 一人[ひとり]で 洗濯[せんたく]することが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "洗濯することができる — ことができる form with する nominalized",
      },
      {
        segments: [
          { text: "私[わたし]は 洗濯[せんたく]を 一人[ひとり]ですることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "洗濯をすることができる — を marking 洗濯, ことができる form",
      },
      {
        segments: [
          { text: "私[わたし]は 自分[じぶん]で 洗濯[せんたく]が" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 自分で (by oneself) instead of 一人で, noun + ができる",
      },
      {
        segments: [
          { text: "私[わたし]は 自分[じぶん]で 洗濯[せんたく]することが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "自分で + ことができる form",
      },
    ],
  },
  {
    english: "I can forget all my stress on the weekend!",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に ストレスを 全部[ぜんぶ]" },
          { text: "忘[わす]れられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]は ストレスを 全部[ぜんぶ]" },
          { text: "忘[わす]れられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same but 週末は (topicalizing the weekend, implying contrast)",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に ストレスが 全部[ぜんぶ]" },
          { text: "忘[わす]れられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of を to mark stress (natural with potential verbs)",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]は ストレスが 全部[ぜんぶ]" },
          { text: "忘[わす]れられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が + 週末は combination",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に ストレスを 全部[ぜんぶ]" },
          { text: "忘[わす]れれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ら抜き form (忘れれる), casual potential, を, 週末に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]は ストレスを 全部[ぜんぶ]" },
          { text: "忘[わす]れれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ら抜き form, を, 週末は",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に ストレスが 全部[ぜんぶ]" },
          { text: "忘[わす]れれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ら抜き form, が, 週末に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に ストレスを 全部[ぜんぶ] 忘[わす]れることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる form, を, 週末に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]は ストレスを 全部[ぜんぶ] 忘[わす]れることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる form, を, 週末は",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に ストレスが 全部[ぜんぶ] 忘[わす]れることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる form, が, 週末に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に 全部[ぜんぶ]の ストレスを" },
          { text: "忘[わす]れられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "全部の modifying ストレス directly (all of my stress), られる potential, 週末に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に 全部[ぜんぶ]の ストレスを 忘[わす]れることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "全部の modifying ストレス, ことができる form, 週末に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]は ストレスが 全部[ぜんぶ] 忘[わす]れることが" },
          { text: "できる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる form, が, 週末は",
      },
    ],
  },
  {
    english: "Can Hana come home early tonight?",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは 今晩[こんばん]、早[はや]く" },
          { text: "帰[かえ]る ことができる", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる structure instead of potential verb form",
      },
      {
        segments: [
          { text: "はなさんは 今夜[こんや]、早[はや]く" },
          { text: "帰[かえ]る ことができる", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる with 今夜",
      },
      {
        segments: [
          { text: "はなさんは 今晩[こんばん]、早[はや]く" },
          { text: "帰[かえ]れる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はなさんは 今夜[こんや]、早[はや]く" },
          { text: "帰[かえ]れる", blank: true },
          { text: "か" },
        ],
        notes: "今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "はなさんは 早[はや]く 今晩[こんばん]" },
          { text: "帰[かえ]れる", blank: true },
          { text: "か" },
        ],
        notes: "早く placed before 今晩 (adverb word order variation)",
      },
      {
        segments: [
          { text: "はなさんは 早[はや]く 今夜[こんや]" },
          { text: "帰[かえ]れる", blank: true },
          { text: "か" },
        ],
        notes: "早く before 今夜 (word order variation with 今夜)",
      },
    ],
  },
  {
    english: "Can Takeshi keep a promise?",
    answers: [
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]を" },
          { text: "守[まも]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Potential form 守れる (Godan る-verb potential), を marking the object",
      },
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]が" },
          { text: "守[まも]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Potential form 守れる with が instead of を marking the object (natural with potential verbs)",
      },
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]を守[まも]る" },
          { text: "ことができる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる structure with を marking object",
      },
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]を守[まも]る" },
          { text: "ことができる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ことができる with explicit question marker か and を",
      },
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]を" },
          { text: "守[まも]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Potential form with explicit question marker か and を",
      },
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]が" },
          { text: "守[まも]れる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Potential form with explicit question marker か and が",
      },
    ],
  },
  {
    english: "I can't pay — I don't have any money.",
    answers: [
      {
        segments: [
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "、お 金[かね]が" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "、お 金[かね]が 全然[ぜんぜん]" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding ぜんぜん for emphasis: don't have any money at all",
      },
      {
        segments: [
          { text: "お 金[かね]が" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、" },
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Reversed order: reason (から) first, then result (can't pay)",
      },
      {
        segments: [
          { text: "お 金[かね]が 全然[ぜんぜん]" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、" },
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Reversed order with ぜんぜん + から",
      },
      {
        segments: [
          { text: "払[はら]う ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "、お 金[かね]が" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ことができない instead of potential form, reason follows",
      },
      {
        segments: [
          { text: "お 金[かね]が" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、払[はら]う ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ことができない with reason (から) first",
      },
      {
        segments: [
          { text: "お 金[かね]が 全然[ぜんぜん]" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、払[はら]う ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ことができない with ぜんぜん + から first",
      },
      {
        segments: [
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "、お 金[かね]は" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は instead of が with お金 (contrastive/topical は)",
      },
      {
        segments: [
          { text: "お 金[かね]は" },
          { text: "ない", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、" },
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "は instead of が + から first order",
      },
      {
        segments: [
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "、お 金[かね]を 持[も]っていない" },
        ],
        notes: "Using 持っていない (not holding/having money) instead of ない alone",
      },
      {
        segments: [
          { text: "お 金[かね]を 持[も]っていないから、" },
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "持っていないから first, then potential negative",
      },
      {
        segments: [
          { text: "お 金[かね]を 持[も]っていないから、払[はら]う ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "持っていないから + ことができない",
      },
      {
        segments: [
          { text: "私[わたし]は お 金[かね]が ないので、" },
          { text: "払[はら]える", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ので instead of から, with 私は as topic",
      },
      {
        segments: [
          { text: "私[わたし]は お 金[かね]が ないので、払[はら]う ことが" },
          { text: "できる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ので + ことができない with 私は",
      },
    ],
  },
  {
    english: "Can Sakura stay at a hotel by herself?",
    answers: [
    ],
  },
];
