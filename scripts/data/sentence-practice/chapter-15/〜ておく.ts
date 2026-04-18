import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I'll go ahead and make a reservation.",
    answers: [
      {
        segments: [
          { text: "予約[よやく]" },
          { text: "しておく", blank: true },
        ],
      },
      {
        segments: [
          { text: "じゃあ、 予約[よやく]" },
          { text: "しておく", blank: true },
        ],
        notes: "じゃあ (well then) prefix",
      },
      {
        segments: [
          { text: "予約[よやく]" },
          { text: "しとく", blank: true },
        ],
        notes: "Contracted casual form: しとく instead of しておく",
      },
      {
        segments: [
          { text: "予約[よやく]" },
          { text: "しておく", blank: true },
          { text: "ね" },
        ],
        notes: "With ね sentence-final particle for seeking agreement/softening",
      },
      {
        segments: [
          { text: "予約[よやく]" },
          { text: "しとく", blank: true },
          { text: "ね" },
        ],
        notes: "Contracted とく + ね",
      },
      {
        segments: [
          { text: "予約[よやく]" },
          { text: "しておく", blank: true },
          { text: "よ" },
        ],
        notes: "With よ sentence-final particle for assertiveness",
      },
      {
        segments: [
          { text: "予約[よやく]" },
          { text: "しとく", blank: true },
          { text: "よ" },
        ],
        notes: "Contracted とく + よ",
      },
      {
        segments: [
          { text: "私[わたし]が 予約[よやく]" },
          { text: "しておく", blank: true },
        ],
        notes: "Explicit subject 私が — emphasizing that I (specifically) will do it",
      },
      {
        segments: [
          { text: "私[わたし]が 予約[よやく]" },
          { text: "しとく", blank: true },
        ],
        notes: "Explicit subject 私が + contracted とく",
      },
      {
        segments: [
          { text: "私[わたし]が 予約[よやく]" },
          { text: "しておく", blank: true },
          { text: "ね" },
        ],
        notes: "Explicit 私が + ておく + ね",
      },
      {
        segments: [
          { text: "私[わたし]が 予約[よやく]" },
          { text: "しとく", blank: true },
          { text: "ね" },
        ],
        notes: "Explicit 私が + contracted とく + ね",
      },
    ],
  },
  {
    english: "I'll go ahead and buy the tickets.",
    hint: "The nuance is doing this now so it's taken care of for later.",
    answers: [
      {
        segments: [
          { text: "切符[きっぷ]を" },
          { text: "買[か]っておく", blank: true },
        ],
        notes: "Base answer: 切符を 買っておく — student fills in 買っておく",
      },
      {
        segments: [
          { text: "チケットを" },
          { text: "買[か]っておく", blank: true },
        ],
        notes: "Using チケット instead of 切符",
      },
      {
        segments: [
          { text: "切符[きっぷ]を" },
          { text: "買[か]っとく", blank: true },
        ],
        notes: "Contracted とく form (casual) with 切符",
      },
      {
        segments: [
          { text: "チケットを" },
          { text: "買[か]っとく", blank: true },
        ],
        notes: "Contracted とく form (casual) with チケット",
      },
      {
        segments: [
          { text: "切符[きっぷ]を" },
          { text: "買[か]っておく", blank: true },
          { text: "よ" },
        ],
        notes: "With よ for assertiveness: 切符を買っておくよ",
      },
      {
        segments: [
          { text: "チケットを" },
          { text: "買[か]っておく", blank: true },
          { text: "よ" },
        ],
        notes: "チケットを買っておくよ — with よ",
      },
      {
        segments: [
          { text: "切符[きっぷ]を" },
          { text: "買[か]っとく", blank: true },
          { text: "よ" },
        ],
        notes: "Contracted とく + よ with 切符",
      },
      {
        segments: [
          { text: "チケットを" },
          { text: "買[か]っとく", blank: true },
          { text: "よ" },
        ],
        notes: "Contracted とく + よ with チケット",
      },
      {
        segments: [
          { text: "切符[きっぷ]を" },
          { text: "買[か]っておく", blank: true },
          { text: "ね" },
        ],
        notes: "With ね for seeking agreement/softening: 切符を買っておくね",
      },
      {
        segments: [
          { text: "チケットを" },
          { text: "買[か]っておく", blank: true },
          { text: "ね" },
        ],
        notes: "チケットを買っておくね",
      },
      {
        segments: [
          { text: "切符[きっぷ]を" },
          { text: "買[か]っとく", blank: true },
          { text: "ね" },
        ],
        notes: "Contracted とく + ね with 切符",
      },
      {
        segments: [
          { text: "チケットを" },
          { text: "買[か]っとく", blank: true },
          { text: "ね" },
        ],
        notes: "Contracted とく + ね with チケット",
      },
      {
        segments: [
          { text: "先[さき]に 切符[きっぷ]を" },
          { text: "買[か]っておく", blank: true },
        ],
        notes: "先に (in advance/ahead) + 切符を買っておく — emphasizes \"going ahead\"",
      },
      {
        segments: [
          { text: "先[さき]に チケットを" },
          { text: "買[か]っておく", blank: true },
        ],
        notes: "先に + チケットを買っておく",
      },
      {
        segments: [
          { text: "先[さき]に 切符[きっぷ]を" },
          { text: "買[か]っとく", blank: true },
        ],
        notes: "先に + 切符を買っとく (contracted)",
      },
      {
        segments: [
          { text: "先[さき]に チケットを" },
          { text: "買[か]っとく", blank: true },
        ],
        notes: "先に + チケットを買っとく (contracted)",
      },
      {
        segments: [
          { text: "私[わたし]は 切符[きっぷ]を" },
          { text: "買[か]っておく", blank: true },
        ],
        notes: "Explicit 私は subject with 切符",
      },
      {
        segments: [
          { text: "私[わたし]は チケットを" },
          { text: "買[か]っておく", blank: true },
        ],
        notes: "Explicit 私は with チケット",
      },
    ],
  },
  {
    english: "I'll go ahead and look up the restaurant so we don't get lost.",
    answers: [
      {
        segments: [
          { text: "迷[まよ]わないから、レストランを" },
          { text: "調[しら]べておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "迷[まよ]わないので、レストランを" },
          { text: "調[しら]べておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ので instead of から for the reason clause.",
      },
      {
        segments: [
          { text: "レストランを" },
          { text: "調[しら]べておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Minimal version — no reason clause, just the core ておく sentence.",
      },
      {
        segments: [
          { text: "迷[まよ]わないから、レストランを" },
          { text: "調[しら]べとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form instead of ておく (casual speech pattern).",
      },
      {
        segments: [
          { text: "迷[まよ]わないので、レストランを" },
          { text: "調[しら]べとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form with ので reason clause.",
      },
      {
        segments: [
          { text: "迷[まよ]わないから、私[わたし]がレストランを" },
          { text: "調[しら]べておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly including 私が to emphasize \"I will go ahead and look it up\".",
      },
      {
        segments: [
          { text: "先[まず]にレストランを" },
          { text: "調[しら]べておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "先に (first/ahead) without reason clause — \"I'll go ahead and look up the restaurant first.\"",
      },
      {
        segments: [
          { text: "迷[まよ]わないから、先[さき]に レストランを" },
          { text: "調[しら]べておく", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "先に (first/ahead) with から reason clause, reinforcing the \"going ahead\" nuance",
      },
      {
        segments: [
          { text: "先[さき]に レストランを" },
          { text: "調[しら]べとく", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "先に with contracted とく form, no reason clause",
      },
    ],
  },
  {
    english: "I'll go ahead and read the textbook.",
    answers: [
      {
        segments: [
          { text: "教科書[きょうかしょ]を 読[よ]んで", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "教科書[きょうかしょ]を 読[よ]ん", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual contracted とく form of ておく.",
      },
      {
        segments: [
          { text: "先[さき]に 教科書[きょうかしょ]を 読[よ]んで", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Added 先に (in advance/first) to reinforce the \"go ahead\" nuance, with ておく.",
      },
      {
        segments: [
          { text: "先[さき]に 教科書[きょうかしょ]を 読[よ]ん", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "先に + casual contracted とく form.",
      },
      {
        segments: [
          { text: "教科書[きょうかしょ]を 読[よ]んで", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "ておく + ね for a softer, confirmatory tone.",
      },
      {
        segments: [
          { text: "教科書[きょうかしょ]を 読[よ]ん", blank: true },
          { text: "とくね", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく + ね particle.",
      },
      {
        segments: [
          { text: "教科書[きょうかしょ]を 読[よ]んで", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "ておく + よ for a more assertive/declarative tone.",
      },
      {
        segments: [
          { text: "先[さき]に 教科書[きょうかしょ]を 読[よ]んで", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "先に + ておく + ね.",
      },
    ],
  },
  {
    english: "I'll go ahead and turn off the light.",
    answers: [
      {
        segments: [
          { text: "電気[でんき]を" },
          { text: "消[け]しておく", blank: true },
        ],
      },
      {
        segments: [
          { text: "電気[でんき]を" },
          { text: "消[け]しとく", blank: true },
        ],
        notes: "Casual contracted とく form",
      },
    ],
  },
  {
    english: "Shall I go ahead and open the window?",
    answers: [
      {
        segments: [
          { text: "窓[まど]を" },
          { text: "開[あ]けておきましょうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "窓[まど]を" },
          { text: "開[あ]けときましょうか", blank: true },
        ],
        notes: "Contracted ときます form instead of ておきます (casual contraction in polite speech).",
      },
      {
        segments: [
          { text: "窓[まど]は" },
          { text: "開[あ]けておきましょうか", blank: true },
        ],
        notes: "窓 marked with は (topicalizing the window) instead of を.",
      },
      {
        segments: [
          { text: "窓[まど]は" },
          { text: "開[あ]けときましょうか", blank: true },
        ],
        notes: "窓は with contracted ときます form.",
      },
    ],
  },
  {
    english: "I'll go ahead and write Kenji's number in my notebook.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "ノートに けんじさんの 番号[ばんごう]を" },
          { text: "書[か]いて", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんの 番号[ばんごう]を ノートに" },
          { text: "書[か]いて", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object first, then location, then ておく",
      },
      {
        segments: [
          { text: "ノートに けんじさんの 番号[ばんごう]を" },
          { text: "書[か]いとく", blank: true },
        ],
        notes: "Contracted とく form, location first — casual speech variant",
      },
      {
        segments: [
          { text: "けんじさんの 番号[ばんごう]を ノートに" },
          { text: "書[か]いとく", blank: true },
        ],
        notes: "Contracted とく form, object first — casual speech variant",
      },
    ],
  },
  {
    english: "I'll go ahead and make lunch for tomorrow.",
    answers: [
      {
        segments: [
          { text: "明日[あした]の 昼[ひる]ご飯[はん]を 作[つく]って" },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "明日[あした]の 昼[ひる]ご飯[はん]を 作[つく]っ" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form instead of ておく",
      },
      {
        segments: [
          { text: "明日[あした]の お弁当[べんとう]を 作[つく]って" },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "お弁当 (boxed lunch) instead of 昼ご飯, ておく form",
      },
      {
        segments: [
          { text: "明日[あした]の お弁当[べんとう]を 作[つく]っ" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "お弁当 with contracted とく form",
      },
      {
        segments: [
          { text: "明日[あした]のために 昼[ひる]ご飯[はん]を 作[つく]って" },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "明日[あした]のために 昼[ひる]ご飯[はん]を 作[つく]っ" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ために with contracted とく form, 昼ご飯",
      },
      {
        segments: [
          { text: "明日[あした]のために お弁当[べんとう]を 作[つく]って" },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ために with お弁当, ておく",
      },
      {
        segments: [
          { text: "明日[あした]のために お弁当[べんとう]を 作[つく]っ" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ために with お弁当 and contracted とく form",
      },
    ],
  },
  {
    english: "I'll go ahead and pack my bag tonight.",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]、かばんに 荷物[にもつ]を" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Core answer using contracted とく form; 今夜 for tonight; かばんに荷物を入れる for packing",
      },
      {
        segments: [
          { text: "今晩[こんばん]、かばんに 荷物[にもつ]を" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 instead of 今夜 for tonight",
      },
      {
        segments: [
          { text: "今夜[こんや]、荷物[にもつ]はかばんに" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "荷物はかばんに — は marks 荷物 as topic",
      },
      {
        segments: [
          { text: "今夜[こんや]、かばんに 荷物[にもつ]を" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Adding よ for assertion/announcement nuance",
      },
      {
        segments: [
          { text: "今夜[こんや]、かばんに 荷物[にもつ]を" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "Adding ね for seeking confirmation/softening nuance",
      },
      {
        segments: [
          { text: "かばんに 荷物[にもつ]を今夜[こんや]" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 moved after the object phrase",
      },
      {
        segments: [
          { text: "今夜[こんや]、私[わたし]のかばんに 荷物[にもつ]を" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私のかばん — \"my bag\"",
      },
    ],
  },
  {
    english: "I'll go ahead and send the email.",
    answers: [
      {
        segments: [
          { text: "メールを" },
          { text: "送[おく]って", blank: true },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Two blanks: 送って + おく. Standard variation.",
      },
      {
        segments: [
          { text: "メールを" },
          { text: "送[おく]って", blank: true },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "With ね at the end for seeking confirmation/softening.",
      },
      {
        segments: [
          { text: "メールを" },
          { text: "送[おく]って", blank: true },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "With よ at the end for assertiveness.",
      },
      {
        segments: [
          { text: "先[さき]に メールを" },
          { text: "送[おく]って", blank: true },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 先に (first/in advance) to emphasize \"go ahead\".",
      },
      {
        segments: [
          { text: "Eメールを" },
          { text: "送[おく]って", blank: true },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using Eメール instead of メール as a synonym.",
      },
      {
        segments: [
          { text: "メールを 送[おく]っ" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form: 送っとく (casual contraction of 送っておく).",
      },
      {
        segments: [
          { text: "メールを 送[おく]っ" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "Contracted とく form with ね for softening.",
      },
      {
        segments: [
          { text: "メールを 送[おく]っ" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Contracted とく with よ for assertiveness.",
      },
      {
        segments: [
          { text: "先[さき]に メールを 送[おく]っ" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "先に with contracted とく form.",
      },
    ],
  },
  {
    english: "I went ahead and cleaned the room.",
    answers: [
      {
        segments: [
          { text: "部屋[へや]を" },
          { text: "掃除[そうじ]して", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "部屋[へや]を" },
          { text: "掃除[そうじ]しとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Contracted とく form (past): 掃除して + とく → しといた, casual speech",
      },
      {
        segments: [
          { text: "部屋[へや]を" },
          { text: "片付[かたづ]けて", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 片付ける (to tidy up) instead of 掃除する, standard ておく past tense",
      },
      {
        segments: [
          { text: "部屋[へや]を" },
          { text: "片付[かたづ]けとく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "片付ける + contracted とく form (past), casual speech",
      },
    ],
  },
  {
    english: "Did Hana go ahead and book the hotel?",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは ホテルを 予約[よやく]し" },
          { text: "ておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はなさんは ホテルの 予約[よやく]を し" },
          { text: "ておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "ホテルの予約をする phrasing instead of ホテルを予約する",
      },
      {
        segments: [
          { text: "はなさんは ホテルを 予約[よやく]し" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "？" },
        ],
        notes: "Contracted とく form (casual), using ？ instead of か for casual question",
      },
      {
        segments: [
          { text: "はなさんは ホテルの 予約[よやく]を し" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "？" },
        ],
        notes: "Contracted とく form with ホテルの予約をする phrasing",
      },
      {
        segments: [
          { text: "はなさんが ホテルを 予約[よやく]し" },
          { text: "ておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Using が instead of は for subject marker",
      },
      {
        segments: [
          { text: "はなさんは もう ホテルを 予約[よやく]し" },
          { text: "ておく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "か" },
        ],
        notes: "Adding もう (already) — natural in questions about whether something was done in advance",
      },
      {
        segments: [
          { text: "はなさんは もう ホテルを 予約[よやく]し" },
          { text: "とく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
          { text: "？" },
        ],
        notes: "もう + contracted とく form, casual question",
      },
    ],
  },
  {
    english: "I'll go ahead and put some money in my wallet.",
    answers: [
      {
        segments: [
          { text: "財布[さいふ]に お金[おかね]を" },
          { text: "入[い]れておく", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "財布[さいふ]に お金[おかね]を" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form (casual). 財布に first.",
      },
      {
        segments: [
          { text: "お金[おかね]を 財布[さいふ]に" },
          { text: "入[い]れておく", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "お金[おかね]を 財布[さいふ]に" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form (casual). お金を first.",
      },
      {
        segments: [
          { text: "財布[さいふ]に 少[すこ]し お金[おかね]を" },
          { text: "入[い]れておく", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding 少し (a little / some) to specify \"some money\". 財布に first.",
      },
      {
        segments: [
          { text: "財布[さいふ]に 少[すこ]し お金[おかね]を" },
          { text: "入[い]れとく", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form with 少し. 財布に first.",
      },
    ],
  },
  {
    english: "I'll go ahead and do my homework.",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "しておく", blank: true },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "しとく", blank: true },
        ],
        notes: "Casual contracted とく form of する + ておく",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "やっておく", blank: true },
        ],
        notes: "Using やる instead of する + ておく",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "やっとく", blank: true },
        ],
        notes: "Casual contracted とく form of やる + ておく",
      },
      {
        segments: [
          { text: "先[さき]に 宿題[しゅくだい]を" },
          { text: "しておく", blank: true },
        ],
        notes: "Adding 先に to emphasize \"ahead/first\"",
      },
      {
        segments: [
          { text: "先[さき]に 宿題[しゅくだい]を" },
          { text: "やっておく", blank: true },
        ],
        notes: "先に with やる + ておく",
      },
      {
        segments: [
          { text: "先[さき]に 宿題[しゅくだい]を" },
          { text: "しとく", blank: true },
        ],
        notes: "先に with contracted とく (する)",
      },
      {
        segments: [
          { text: "先[さき]に 宿題[しゅくだい]を" },
          { text: "やっとく", blank: true },
        ],
        notes: "先に with contracted とく (やる)",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "しておく", blank: true },
          { text: "よ" },
        ],
        notes: "With よ for assertion/declaration",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "やっておく", blank: true },
          { text: "よ" },
        ],
        notes: "やる + ておく + よ",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "しておく", blank: true },
          { text: "ね" },
        ],
        notes: "With ね for seeking agreement/softening",
      },
    ],
  },
  {
    english: "I'll go ahead and tell Kenji.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんに 話[はな]して" },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんに 伝[つた]えて" },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんに 言[い]って" },
          { text: "おく", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんに 話[はな]しと" },
          { text: "く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんに 伝[つた]えと" },
          { text: "く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "けんじさんに 言[い]っと" },
          { text: "く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
    ],
  },
  {
    english: "I'll go ahead and buy some snacks for the party.",
    answers: [
      {
        segments: [
          { text: "パーティーのために お菓子[おかし]を 買[か]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "パーティーのために お菓子[おかし]を 買[か]っ", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form (casual speech)",
      },
      {
        segments: [
          { text: "パーティーに お菓子[おかし]を 買[か]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に instead of のために — slightly less explicit but natural",
      },
      {
        segments: [
          { text: "パーティーに お菓子[おかし]を 買[か]っ", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に + contracted とく form",
      },
      {
        segments: [
          { text: "パーティー用[よう]の お菓子[おかし]を 買[か]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "パーティー用の (party-use snacks) — noun modifier alternative",
      },
      {
        segments: [
          { text: "パーティー用[よう]の お菓子[おかし]を 買[か]っ", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "パーティー用の + contracted とく",
      },
      {
        segments: [
          { text: "パーティーのために お菓子[おかし]を 先[さき]に買[か]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "先に (in advance / ahead of time) added for emphasis on \"going ahead\"",
      },
      {
        segments: [
          { text: "パーティーのために お菓子[おかし]を 先[さき]に買[か]っ", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "先に + contracted とく",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーのために お菓子[おかし]を 買[か]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は subject added",
      },
      {
        segments: [
          { text: "お菓子[おかし]は パーティーのために買[か]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-fronted: お菓子は at the start",
      },
    ],
  },
  {
    english: "I'll go ahead and memorize the new vocabulary words.",
    answers: [
      {
        segments: [
          { text: "新[あたら]しい 単語[たんご]を 覚[おぼ]えて", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "新[あたら]しい 単語[たんご]を 覚[おぼ]えて", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form, 単語 for vocabulary words",
      },
      {
        segments: [
          { text: "新[あたら]しい 言葉[ことば]を 覚[おぼ]えて", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 言葉 instead of 単語 for vocabulary/words",
      },
      {
        segments: [
          { text: "新[あたら]しい 言葉[ことば]を 覚[おぼ]えて", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted とく form with 言葉",
      },
      {
        segments: [
          { text: "新[あたら]しい 単語[たんご]は 覚[おぼ]えて", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は instead of を to emphasize the vocabulary words as topic",
      },
      {
        segments: [
          { text: "新[あたら]しい 言葉[ことば]は 覚[おぼ]えて", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "は particle with 言葉",
      },
    ],
  },
  {
    english: "I'll go ahead and wash the vegetables.",
    answers: [
      {
        segments: [
          { text: "野菜[やさい]を洗[あら]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "野菜[やさい]を洗[あら]っ", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Contracted casual form: 洗っとく / 洗っときます",
      },
      {
        segments: [
          { text: "私[わたし]は 野菜[やさい]を洗[あら]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With explicit 私は subject",
      },
      {
        segments: [
          { text: "私[わたし]は 野菜[やさい]を洗[あら]っ", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は subject with contracted とく",
      },
      {
        segments: [
          { text: "野菜[やさい]を洗[あら]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "With ね for softening/seeking agreement",
      },
      {
        segments: [
          { text: "野菜[やさい]を洗[あら]っ", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "Contracted とく with ね",
      },
      {
        segments: [
          { text: "野菜[やさい]を洗[あら]って", blank: true },
          { text: "おく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "With よ for assertive tone",
      },
      {
        segments: [
          { text: "野菜[やさい]を洗[あら]っ", blank: true },
          { text: "とく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Contracted とく with よ",
      },
    ],
  },
  {
    english: "I'll go ahead and take a photo here.",
    answers: [
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]っておく", blank: true },
        ],
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]っとく", blank: true },
        ],
        notes: "Contracted casual form とく instead of ておく",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]っておく", blank: true },
          { text: "ね" },
        ],
        notes: "Added ね for seeking agreement/softening",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]っとく", blank: true },
          { text: "ね" },
        ],
        notes: "Contracted とく + ね",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]っておく", blank: true },
          { text: "よ" },
        ],
        notes: "Added よ for assertion/informing the listener",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を" },
          { text: "撮[と]っとく", blank: true },
          { text: "よ" },
        ],
        notes: "Contracted とく + よ",
      },
      {
        segments: [
          { text: "ここで 写真[しゃしん]を 撮[と]って" },
          { text: "おきます", blank: true },
        ],
        notes: "Polite おきます split as blank",
      },
    ],
  },
  {
    english: "I'll go ahead and turn on the air conditioner before everyone arrives.",
    answers: [
    ],
  },
];
