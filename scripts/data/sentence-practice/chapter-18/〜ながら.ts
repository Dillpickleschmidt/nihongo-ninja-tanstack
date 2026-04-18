import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I always eat breakfast while reading the news on my phone.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は いつも スマホで ニュースを" },
          { text: "読[よ]み", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は いつも スマホで ニュースを" },
          { text: "読[よ]み", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Adding よ for assertive tone — \"I always eat breakfast while reading news on my phone, you know\"",
      },
      {
        segments: [
          { text: "私[わたし]は いつも スマホで ニュースを" },
          { text: "読[よ]み", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "Adding ね for seeking agreement/softer tone",
      },
      {
        segments: [
          { text: "私[わたし]は いつも 携帯[けいたい]で ニュースを" },
          { text: "読[よ]み", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 携帯 instead of スマホ for \"phone\" — both are common and natural",
      },
      {
        segments: [
          { text: "いつも 私[わたし]は スマホで ニュースを" },
          { text: "読[よ]み", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "いつも moved to the very beginning of the sentence — natural adverb placement variation",
      },
      {
        segments: [
          { text: "いつも スマホで ニュースを" },
          { text: "読[よ]み", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject 私は dropped",
      },
      {
        segments: [
          { text: "私[わたし]が いつも スマホで ニュースを" },
          { text: "読[よ]み", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for the subject particle — emphasizes the subject slightly more",
      },
      {
        segments: [
          { text: "私[わたし]は いつも スマホで ニュースを" },
          { text: "見[み]", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 見る instead of 読む for news — \"watching/checking\" the news on phone (also natural in Japanese)",
      },
      {
        segments: [
          { text: "私[わたし]は いつも 携帯[けいたい]で ニュースを" },
          { text: "見[み]", blank: true },
          { text: "ながら 朝[あさ]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "携帯 + 見る combination",
      },
    ],
  },
  {
    english: "I walked home while talking on the phone.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]し", blank: true },
          { text: "ながら 家[いえ]に" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]し", blank: true },
          { text: "ながら うちに" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "うち instead of 家 for home",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]をし", blank: true },
          { text: "ながら 家[いえ]に" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "電話をする (with を particle), 家 for home",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]をし", blank: true },
          { text: "ながら うちに" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "電話をする with うち for home",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]し", blank: true },
          { text: "ながら 家[いえ]に" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past tense: 帰った/帰りました, 電話する stem, 家",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]をし", blank: true },
          { text: "ながら 家[いえ]に" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past tense with を on 電話, 家",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]し", blank: true },
          { text: "ながら うちに" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past tense, うち for home, no を",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]をし", blank: true },
          { text: "ながら うちに" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past tense, うち, with を on 電話",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]し", blank: true },
          { text: "ながら 家[いえ]まで歩[ある]いて帰[かえ]った" },
        ],
        notes: "歩いて帰った — explicitly \"walked home\" using 歩いて帰る, past tense. The ながら blank is the focus; 歩いて帰った is plain text as it's a fixed subordinate construction.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]をし", blank: true },
          { text: "ながら 家[いえ]まで歩[ある]いて帰[かえ]った" },
        ],
        notes: "電話をして + ながら, 歩いて帰った explicitly walking home past",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]し", blank: true },
          { text: "ながら 家[いえ]へ" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "へ instead of に with 家, non-past",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]し", blank: true },
          { text: "ながら 家[いえ]へ" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "へ instead of に with 家, past tense",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "電話[でんわ]をし", blank: true },
          { text: "ながら 家[いえ]へ" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "電話をする with へ, past",
      },
    ],
  },
  {
    english: "I fell asleep while watching a horror movie.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ホラー 映画[えいが]を" },
          { text: "見[み]ながら", blank: true },
          { text: "寝[ね]てしまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は ホラーを" },
          { text: "見[み]ながら", blank: true },
          { text: "寝[ね]てしまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Same as above but without 映画 — just ホラーを見ながら (natural to drop 映画 in casual speech)",
      },
      {
        segments: [
          { text: "私[わたし]は ホラー 映画[えいが]を" },
          { text: "見[み]ながら", blank: true },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Simple past without てしまう — just 寝た/寝ました",
      },
      {
        segments: [
          { text: "私[わたし]は ホラーを" },
          { text: "見[み]ながら", blank: true },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Simple past without てしまう and without 映画",
      },
      {
        segments: [
          { text: "私[わたし]は ホラー 映画[えいが]を" },
          { text: "見[み]ながら", blank: true },
          { text: "眠[ねむ]ってしまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 眠る (to fall asleep) instead of 寝る, with てしまう",
      },
      {
        segments: [
          { text: "私[わたし]は ホラーを" },
          { text: "見[み]ながら", blank: true },
          { text: "眠[ねむ]ってしまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "眠る + てしまう, without 映画",
      },
    ],
  },
  {
    english: "I always listen to podcasts while doing the laundry.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は いつも" },
          { text: "洗濯[せんたく]し", blank: true },
          { text: "ながら ポッドキャストを" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は いつも ポッドキャストを聞[き]きながら 洗濯[せんたく]を" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order: ポッドキャストを聴きながら洗濯をする (listening while doing laundry — ながら clause is the secondary action)",
      },
      {
        segments: [
          { text: "私[わたし]は いつも 洗濯[せんたく]をし", blank: true },
          { text: "ながら ポッドキャストを" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "洗濯をしながら variant with を particle on 洗濯",
      },
      {
        segments: [
          { text: "私[わたし]は 洗濯[せんたく]し", blank: true },
          { text: "ながら いつも ポッドキャストを" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "いつも moved after ながら to modify the main verb instead",
      },
    ],
  },
  {
    english: "I drank coffee while writing a letter.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 手紙[てがみ]を 書[か]きながら、コーヒーを" },
          { text: "飲[の]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "手紙[てがみ]を 書[か]きながら、コーヒーを" },
          { text: "飲[の]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject (私は) dropped — natural in Japanese casual speech",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを 飲[の]みながら、手紙[てがみ]を" },
          { text: "書[か]く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed: coffee-drinking as A (ながら), letter-writing as B (main action) — also natural",
      },
      {
        segments: [
          { text: "コーヒーを 飲[の]みながら、手紙[てがみ]を" },
          { text: "書[か]く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed A/B, subject dropped",
      },
    ],
  },
  {
    english: "I sang along to my favorite song while washing the dishes.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "皿[さら]を" },
          { text: "洗[あら]いながら", blank: true },
          { text: "、好[す]きな 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "お皿[さら]を" },
          { text: "洗[あら]いながら", blank: true },
          { text: "、好[す]きな 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using お皿 (more natural/polite spoken form) instead of 皿",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "皿[さら]を" },
          { text: "洗[あら]いながら", blank: true },
          { text: "、大[だい]好[す]きな 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "お皿[さら]を" },
          { text: "洗[あら]いながら", blank: true },
          { text: "、大[だい]好[す]きな 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "お皿 + 大好きな combination",
      },
    ],
  },
  {
    english: "I ate dinner while watching TV.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は テレビを" },
          { text: "見[み]ながら", blank: true },
          { text: "、晩[ばん]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は テレビを" },
          { text: "見[み]ながら", blank: true },
          { text: "、夕[ゆう]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 夕ご飯 instead of 晩ご飯 for dinner",
      },
      {
        segments: [
          { text: "テレビを" },
          { text: "見[み]ながら", blank: true },
          { text: "、晩[ばん]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "No subject — completely dropped",
      },
    ],
  },
];
