import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I always eat breakfast while reading the news on my phone.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は いつも スマホで ニュースを" },
          { text: "読[よ]みながら", blank: true },
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は いつも 携帯[けいたい]で ニュースを" },
          { text: "読[よ]みながら", blank: true },
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 携帯 instead of スマホ for \"phone\" — both are common and natural",
      },
      {
        segments: [
          { text: "いつも 私[わたし]は スマホで ニュースを" },
          { text: "読[よ]みながら", blank: true },
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "いつも moved to the very beginning of the sentence — natural adverb placement variation",
      },
      {
        segments: [
          { text: "私[わたし]が いつも スマホで ニュースを" },
          { text: "読[よ]みながら", blank: true },
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for the subject particle — emphasizes the subject slightly more",
      },
      {
        segments: [
          { text: "私[わたし]は いつも スマホで ニュースを" },
          { text: "見[み]ながら", blank: true },
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 見る instead of 読む for news — \"watching/checking\" the news on phone (also natural in Japanese)",
      },
      {
        segments: [
          { text: "私[わたし]は いつも 携帯[けいたい]で ニュースを" },
          { text: "見[み]ながら", blank: true },
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "携帯 + 見る combination",
      },
    ],
  },
  {
    english: "I walked home from the station while talking to my mother on the phone.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 母[はは]と" },
          { text: "電話[でんわ]しながら", blank: true },
          { text: "駅[えき]から 家[いえ]まで 歩[ある]いて" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]と" },
          { text: "電話[でんわ]をしながら", blank: true },
          { text: "駅[えき]から 家[いえ]まで 歩[ある]いて" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "電話をする includes を before 電話.",
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
          { text: "洗濯[せんたく]しながら", blank: true },
          { text: "ポッドキャストを" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は いつも" },
          { text: "洗濯[せんたく]をしながら", blank: true },
          { text: "ポッドキャストを" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "洗濯をする includes を before 洗濯.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "洗濯[せんたく]しながら", blank: true },
          { text: "いつも ポッドキャストを" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "いつも can also come before the main action.",
      },
    ],
  },
  {
    english: "I drank coffee while writing a birthday card for my mother.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 母[はは]の 誕生日[たんじょうび]の カードを" },
          { text: "書[か]きながら", blank: true },
          { text: "コーヒーを" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを" },
          { text: "飲[の]みながら", blank: true },
          { text: "母[はは]の 誕生日[たんじょうび]の カードを" },
          { text: "書[か]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "The coffee-drinking can be the simultaneous action while writing the birthday card.",
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
          { text: "お 皿[さら]を" },
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
          { text: "お 皿[さら]を" },
          { text: "洗[あら]いながら", blank: true },
          { text: "、大[だい]好[す]きな 歌[うた]を" },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "お皿 + 大好きな combination",
      },
    ],
  },
  {
    english: "After work, I ate dinner alone while watching TV.",
    answers: [
      {
        segments: [
          { text: "仕事[しごと]の 後[あと]で、私[わたし]は 一人[ひとり]で テレビを" },
          { text: "見[み]ながら", blank: true },
          { text: "、晩[ばん]ご 飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "仕事[しごと]の 後[あと]で、私[わたし]は 一人[ひとり]で テレビを" },
          { text: "見[み]ながら", blank: true },
          { text: "、夕[ゆう]ご 飯[はん]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 夕ご飯 instead of 晩ご飯 for dinner; adds an after-work solo dinner context",
      },
    ],
  },
];
