import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I want everyone to read this LINE message before tomorrow's club meeting.",
    hint: "LINE message = LINEのメッセージ; club meeting = クラブの会議",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 皆[みんな]に 明日[あした]の クラブの 会議[かいぎ]の 前[まえ]に この LINEのメッセージを " },
          { text: "読[よ]んで", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "皆に marks the people the speaker wants to act.",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の クラブの 会議[かいぎ]の 前[まえ]に この LINEのメッセージを 皆[みんな]に " },
          { text: "読[よ]んで", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object/time phrase placed before 皆に for emphasis on the LINE message",
      },
      {
        segments: [
          { text: "私[わたし]は 皆[みんな]が 明日[あした]の クラブの 会議[かいぎ]の 前[まえ]に この LINEのメッセージを " },
          { text: "読[よ]んで", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark everyone as the actor",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の クラブの 会議[かいぎ]の 前[まえ]に この LINEのメッセージを 皆[みんな]が " },
          { text: "読[よ]んで", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with object-first word order",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の クラブの 会議[かいぎ]の 前[まえ]に この LINEのメッセージは 皆[みんな]に " },
          { text: "読[よ]んで", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing the LINE message with は",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の クラブの 会議[かいぎ]の 前[まえ]に この LINEのメッセージは 皆[みんな]が " },
          { text: "読[よ]んで", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized object with が marking the actor",
      },
    ],
  },
  {
    english: "I want Kenji to return my dictionary tomorrow.",
    hint: "Kenji = 健一 (けんいち)",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 健一[けんいち]さんに 明日[あした] 私[わたし]の 辞書[じしょ]を " },
          { text: "返[かえ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "健一に marks the person the speaker wants to act.",
      },
      {
        segments: [
          { text: "私[わたし]は 健一[けんいち]さんに 私[わたし]の 辞書[じしょ]を 明日[あした] " },
          { text: "返[かえ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves 明日 after the object",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした] 健一[けんいち]さんに 私[わたし]の 辞書[じしょ]を " },
          { text: "返[かえ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Starts with the time expression 明日",
      },
      {
        segments: [
          { text: "私[わたし]は 健一[けんいち]さんに 明日[あした] 私[わたし]に 私[わたし]の 辞書[じしょ]を " },
          { text: "返[かえ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly adds 私に as the return destination",
      },
      {
        segments: [
          { text: "私[わたし]は 健一[けんいち]さんが 明日[あした] 私[わたし]の 辞書[じしょ]を " },
          { text: "返[かえ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が instead of に to mark Kenji as the person doing the action",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした] 健一[けんいち]さんが 私[わたし]の 辞書[じしょ]を " },
          { text: "返[かえ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が with the time expression first",
      },
      {
        segments: [
          { text: "私[わたし]は 健一[けんいち]さんが 私[わたし]の 辞書[じしょ]を 明日[あした] " },
          { text: "返[かえ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が and places 明日 just before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 健一[けんいち]さんには 明日[あした] 私[わたし]の 辞書[じしょ]を " },
          { text: "返[かえ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には for slight contrast/emphasis on Kenji",
      },
    ],
  },
  {
    english: "I want the station attendant to explain the directions one more time.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に 道[みち]を もう一度[いちど] " },
          { text: "説明[せつめい]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に もう一度[いちど] 道[みち]を " },
          { text: "説明[せつめい]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverb もう一度 placed before the object",
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に 道[みち]を もう一回[いっかい] " },
          { text: "説明[せつめい]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using もう一回 instead of もう一度",
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に もう一回[いっかい] 道[みち]を " },
          { text: "説明[せつめい]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using もう一回 with the adverb before the object",
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に 道[みち]を もう一度[いちど] " },
          { text: "教[おし]えて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 道を教える, a natural way to say explain/tell directions",
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に もう一度[いちど] 道[みち]を " },
          { text: "教[おし]えて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 道を教える with もう一度 before the object",
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に 道[みち]を もう一回[いっかい] " },
          { text: "教[おし]えて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 道を教える and もう一回",
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に もう一回[いっかい] 道[みち]を " },
          { text: "教[おし]えて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 道を教える with もう一回 before the object",
      },
    ],
  },
  {
    english: "I want my roommate to clean the room today.",
    hint: "roommate = ルームメイト",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ルームメイトに 今日[きょう] 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "The full てほしい phrase is in one blank for validation.",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は ルームメイトに 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase moved to the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] ルームメイトに 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 placed before ルームメイトに",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトに 部屋[へや]を 今日[きょう] " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今日 placed immediately before the verb phrase",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトに 今日[きょう] この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using この部屋 to specify 'the/this room' naturally",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は ルームメイトに この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "この部屋 with time phrase at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] ルームメイトに この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "この部屋 with 今日 before ルームメイトに",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトに この 部屋[へや]を 今日[きょう] " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "この部屋 with 今日 immediately before verb phrase",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトが 今日[きょう] 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the person who should do the action",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトが 今日[きょう] この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with この部屋",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は ルームメイトが 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with time phrase at the beginning",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は ルームメイトが この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が and この部屋 with time phrase at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]の ルームメイトに 今日[きょう] 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly saying 'my roommate' with 私の; speaker is implied by ほしい",
      },
      {
        segments: [
          { text: "私[わたし]の ルームメイトに 今日[きょう] この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私のルームメイト with この部屋",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]の ルームメイトに 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私のルームメイト with 今日 at sentence start",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]の ルームメイトに この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私のルームメイト, この部屋, and 今日 at sentence start",
      },
      {
        segments: [
          { text: "私[わたし]の ルームメイトが 今日[きょう] 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私のルームメイト marked with が",
      },
      {
        segments: [
          { text: "私[わたし]の ルームメイトが 今日[きょう] この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私のルームメイト marked with が and この部屋",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]の ルームメイトが 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私のルームメイト marked with が; 今日 at beginning",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]の ルームメイトが この 部屋[へや]を " },
          { text: "掃除[そうじ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私のルームメイト marked with が; この部屋; 今日 at beginning",
      },
    ],
  },
  {
    english: "I want my younger brother to study hard so he can become a doctor.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 医者[いしゃ]に なれるように 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に marks the younger brother as the person whose action is desired; 一生懸命 means “hard/with effort.”",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 将来[しょうらい] 医者[いしゃ]に なれるように 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 将来 to make the future goal explicit",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]が 医者[いしゃ]に なれるように 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of に to mark the younger brother",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]には 医者[いしゃ]に なれるように 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には for emphasis/contrast on the younger brother",
      },
      {
        segments: [
          { text: "私[わたし]は 医者[いしゃ]に なれるように 弟[おとうと]に 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered clause: placing the purpose phrase first",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 医者[いしゃ]に なれるように 勉強[べんきょう]を 頑張[がんば]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 勉強を頑張る to express studying hard",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]に 医者[いしゃ]に なれるように 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 私の弟 to explicitly say 'my younger brother' without 私は",
      },
      {
        segments: [
          { text: "私[わたし]の 弟[おとうと]が 医者[いしゃ]に なれるように 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 私の弟 with が marking the person whose action is desired",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 医者[いしゃ]に なることができるように 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses なることができるように instead of なれるように",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 医者[いしゃ]に なれるように しっかり 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses しっかり to express studying hard/diligently",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 医者[いしゃ]に なれるように たくさん 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses たくさん勉強して to express studying a lot/hard",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 医者[いしゃ]に なるように 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses なるように instead of potential なれるように",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 一生懸命[いっしょうけんめい] 勉強[べんきょう]して 医者[いしゃ]に なって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses simple てほしい with the desired sequence: study hard and become a doctor",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 医者[いしゃ]に なれるように 頑張[がんば]って 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 頑張って勉強して for 'study hard'",
      },
      {
        segments: [
          { text: "私[わたし]は 弟[おとうと]に 医者[いしゃ]に なれるように 一生懸命[いっしょうけんめい]に 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 一生懸命に with に after the adverbial noun",
      },
      {
        segments: [
          { text: "私[わたし]は 将来[しょうらい] 医者[いしゃ]に なれるように 弟[おとうと]に 一生懸命[いっしょうけんめい] 勉強[べんきょう]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered with 将来 and the purpose phrase before 弟に",
      },
    ],
  },
  {
    english: "I want the children to sing like singers at the party.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 子供[こども]たちに パーティーで " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に marks the children as the people wanted to act; で marks the party as the event/location.",
      },
      {
        segments: [
          { text: "私[わたし]は 子供[こども]たちが パーティーで " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the children as the ones the speaker wants to sing.",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーで 子供[こども]たちに " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered phrase placing the party first.",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーで 子供[こども]たちが " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered phrase with が marking the children.",
      },
      {
        segments: [
          { text: "私[わたし]は 子供[こども]たちに " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " パーティーで " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverbial comparison placed before the party phrase.",
      },
      {
        segments: [
          { text: "私[わたし]は 子供[こども]たちが " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " パーティーで " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverbial comparison first, with が marking the children.",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 子供[こども]たちに " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized party setting at the beginning.",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 子供[こども]たちが " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized party setting with が marking the children.",
      },
      {
        segments: [
          { text: "私[わたし]は 子供[こども]たちに パーティーで " },
          { text: "歌手[かしゅ]みたいに", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the more conversational みたいに for “like singers,” still with てほしい.",
      },
      {
        segments: [
          { text: "私[わたし]は 子供[こども]たちが パーティーで " },
          { text: "歌手[かしゅ]みたいに", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational みたいに with が marking the children.",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーで 子供[こども]たちに " },
          { text: "歌手[かしゅ]みたいに", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational みたいに with party phrase first.",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーで 子供[こども]たちが " },
          { text: "歌手[かしゅ]みたいに", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational みたいに, reordered, with が marking the children.",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーでは 子供[こども]たちに " },
          { text: "歌手[かしゅ]のように", blank: true },
          { text: " " },
          { text: "歌[うた]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using では to set the party as the context.",
      },
    ],
  },
  {
    english: "My parents want me to come home early tonight.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 私[わたし]に 今晩[こんばん] 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 私[わたし]に 今夜[こんや] 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "今晩[こんばん]、私[わたし]の 両親[りょうしん]は 私[わたし]に 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves 今晩 to the beginning",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 今晩[こんばん] 私[わたし]に 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 今晩 before the object/person marker phrase",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 私[わたし]に 今晩[こんばん] 家[いえ]に 早[はや]く " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 家に before the adverb 早く",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 私[わたし]に 今晩[こんばん] 早[はや]く うちに " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses うちに帰る instead of 家に帰る",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 私[わたし]に 今晩[こんばん] 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]ってきて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 帰ってくる to emphasize coming back home",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 今夜[こんや] 私[わたし]に 早[はや]く うちに " },
          { text: "帰[かえ]ってきて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines 今夜, うち, and 帰ってくる",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 私[わたし]に 今晩[こんばん] 早[はや]く " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omits 家に because 帰る already implies going home",
      },
      {
        segments: [
          { text: "私[わたし]の 親[おや]は 私[わたし]に 今晩[こんばん] 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 親 instead of 両親",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 今晩[こんばん]、私[わたし]に 早[はや]く " },
          { text: "帰[かえ]ってきて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omits home location and uses 帰ってくる",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]が 私[わたし]に 今晩[こんばん] 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が to mark the parents as the subject",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 私[わたし]に 今日[きょう]の 夜[よる] 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今日の夜 for tonight",
      },
      {
        segments: [
          { text: "父[ちち]と 母[はは]は 私[わたし]に 今晩[こんばん] 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 父と母 for my parents",
      },
      {
        segments: [
          { text: "私[わたし]の 両親[りょうしん]は 私[わたし]に 今晩[こんばん] 早[はや]く 家[いえ]に " },
          { text: "帰[かえ]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "と " },
          { text: "思[おも]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More natural third-person desire with と思っている",
      },
    ],
  },
  {
    english: "What does Mika want me to bring to the barbecue tomorrow?",
    hint: "Mika = ミカ",
    answers: [
      {
        segments: [
          { text: "ミカさんは 私[わたし]に 明日[あした] バーベキューに 何[なに]を 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "私に marks the person Mika wants the doctor to bring medicine to.",
      },
      {
        segments: [
          { text: "ミカさんは 明日[あした]の バーベキューに 私[わたし]に 何[なに]を 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses 明日のバーベキュー instead of 明日バーベキューに",
      },
      {
        segments: [
          { text: "ミカさんは 私[わたし]に 明日[あした]の バーベキューに 何[なに]を 持[も]っていって" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses 持っていって, viewing the action as taking something to the barbecue",
      },
      {
        segments: [
          { text: "ミカさんは 明日[あした]の バーベキューに 何[なに]を 私[わたし]に 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Reordered: puts 何を before 私に",
      },
      {
        segments: [
          { text: "明日[あした]の バーベキューに、ミカさんは 私[わたし]に 何[なに]を 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Topicalizes the barbecue time/event at the beginning",
      },
      {
        segments: [
          { text: "ミカさんは 私[わたし]に 明日[あした] バーベキューへ 何[なに]を 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses へ instead of に for direction toward the barbecue",
      },
      {
        segments: [
          { text: "ミカさんが 私[わたし]に 明日[あした]の バーベキューに 何[なに]を 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses が to mark Mika as the subject of the question",
      },
      {
        segments: [
          { text: "ミカさんは 私[わたし]に 明日[あした]の バーベキューで 何[なに]を 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses で for the event setting; natural if meaning 'for/at the barbecue'",
      },
      {
        segments: [
          { text: "明日[あした]、ミカさんは 私[わたし]に バーベキューに 何[なに]を 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Places 明日 at the beginning as the time expression",
      },
      {
        segments: [
          { text: "ミカさんは 明日[あした] バーベキューに 私[わたし]に 何[なに]を 持[も]ってきて" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Places the event before 私に",
      },
      {
        segments: [
          { text: "ミカさんは 明日[あした]の バーベキューへ 私[わたし]に 何[なに]を 持[も]っていって" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses へ plus 持っていって for taking something to the event",
      },
    ],
  },
  {
    english: "I want my older sister to take the dog to the park this evening.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 姉[あね]に 今晩[こんばん] 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "姉に marks the person whose action is desired.",
      },
      {
        segments: [
          { text: "私[わたし]は 姉[あね]に 今晩[こんばん] 犬[いぬ]を 公園[こうえん]へ " },
          { text: "連[つ]れていって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for the destination",
      },
      {
        segments: [
          { text: "私[わたし]は 姉[あね]に 今夜[こんや] 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今夜 instead of 今晩 for “tonight/this evening”",
      },
      {
        segments: [
          { text: "私[わたし]は 姉[あね]に 今日[きょう]の 夕方[ゆうがた] 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今日の夕方 for “this evening”",
      },
      {
        segments: [
          { text: "私[わたし]は 姉[あね]が 今晩[こんばん] 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the person desired to do the action",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん] 姉[あね]に 犬[いぬ]を 公園[こうえん]に " },
          { text: "連[つ]れていって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moving the time expression before 姉に",
      },
      {
        segments: [
          { text: "私[わたし]は 犬[いぬ]を 今晩[こんばん] 姉[あね]に 公園[こうえん]に " },
          { text: "連[つ]れていって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topical/object-first word order while preserving meaning",
      },
      {
        segments: [
          { text: "私[わたし]は 姉[あね]に 犬[いぬ]を 今晩[こんばん] 公園[こうえん]に " },
          { text: "連[つ]れていって", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Placing 今晩 closer to the destination phrase",
      },
    ],
  },
  {
    english: "I want my friend to call the hospital right away.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]に すぐ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverb すぐ placed immediately before 電話してほしい",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 今[いま]すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今すぐ for “right away”",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]に 今[いま]すぐ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今すぐ placed before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ instead of に for the call destination",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]へ すぐ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ with adverb placed before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]へ 今[いま]すぐ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ and 今すぐ placed before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は すぐ 友達[ともだち]に 病院[びょういん]に " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places すぐ earlier in the sentence",
      },
      {
        segments: [
          { text: "私[わたし]は 今[いま]すぐ 友達[ともだち]に 病院[びょういん]に " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 今すぐ near the start of the sentence",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]をして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をする instead of 電話する",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]に すぐ " },
          { text: "電話[でんわ]をして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をする with すぐ before the action",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 今[いま]すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]をして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をする with 今すぐ and へ",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]へ 今[いま]すぐ " },
          { text: "電話[でんわ]をして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をする with へ and 今すぐ before the action",
      },
      {
        segments: [
          { text: "友達[ともだち]には すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には to mark the friend as the desired actor",
      },
      {
        segments: [
          { text: "友達[ともだち]には 今[いま]すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には with 今すぐ",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]をして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をする with に",
      },
      {
        segments: [
          { text: "私[わたし]は すぐ 友達[ともだち]に 病院[びょういん]へ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places すぐ early and uses へ",
      },
      {
        segments: [
          { text: "私[わたし]は 今[いま]すぐ 友達[ともだち]に 病院[びょういん]へ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 今すぐ early and uses へ",
      },
      {
        segments: [
          { text: "友達[ともだち]には すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には and へ",
      },
      {
        segments: [
          { text: "友達[ともだち]には 今[いま]すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には, へ, and 今すぐ",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をかける, a natural synonym for calling",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]に すぐ " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をかける with すぐ before the action",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 今[いま]すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をかける with 今すぐ",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]に 今[いま]すぐ " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をかける with 今すぐ before the action",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をかける with へ",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]へ すぐ " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をかける with へ and すぐ before the action",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 今[いま]すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をかける with 今すぐ and へ",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 病院[びょういん]へ 今[いま]すぐ " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話をかける with へ and 今すぐ before the action",
      },
      {
        segments: [
          { text: "友達[ともだち]には すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には with 電話をかける",
      },
      {
        segments: [
          { text: "友達[ともだち]には 今[いま]すぐ 病院[びょういん]に " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には, 今すぐ, and 電話をかける",
      },
      {
        segments: [
          { text: "友達[ともだち]には すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には, へ, and 電話をかける",
      },
      {
        segments: [
          { text: "友達[ともだち]には 今[いま]すぐ 病院[びょういん]へ " },
          { text: "電話[でんわ]をかけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には, へ, 今すぐ, and 電話をかける",
      },
    ],
  },
  {
    english: "I want my landlord to fix the door by the end of today.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 大家[おおや]さんに 今日中[きょうじゅう]に ドアを 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 今日中[きょうじゅう]に 大家[おおや]さんに ドアを 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression placed near the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は ドアを 今日中[きょうじゅう]に 大家[おおや]さんに 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object placed before the deadline and agent",
      },
      {
        segments: [
          { text: "私[わたし]は 大家[おおや]さんに ドアを 今日中[きょうじゅう]に 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Deadline placed immediately before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 大家[おおや]さんが 今日中[きょうじゅう]に ドアを 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the person expected to act",
      },
      {
        segments: [
          { text: "私[わたし]は 今日中[きょうじゅう]に 大家[おおや]さんが ドアを 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for the landlord with time expression near the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 大家[おおや]さんが ドアを 今日中[きょうじゅう]に 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が and placing the deadline immediately before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は ドアを 今日中[きょうじゅう]に 大家[おおや]さんが 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object first with が marking the landlord",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 大家[おおや]さんに 今日中[きょうじゅう]に ドアを 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly saying 私の大家さん for “my landlord”",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 大家[おおや]さんに ドアを 今日中[きょうじゅう]に 直[なお]して" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit my landlord with deadline before the verb",
      },
    ],
  },
  {
    english: "I want the police to find the thief.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 警察[けいさつ]に 泥棒[どろぼう]を " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "警察に marks the group the speaker wants to act.",
      },
      {
        segments: [
          { text: "私[わたし]は 泥棒[どろぼう]を 警察[けいさつ]に " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered object before actor",
      },
      {
        segments: [
          { text: "私[わたし]は 警察[けいさつ]には 泥棒[どろぼう]を " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to emphasize the police as the expected finder",
      },
      {
        segments: [
          { text: "私[わたし]は 警察[けいさつ]の 人[ひと]に 泥棒[どろぼう]を " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 警察の人 to mean a police officer/member of the police",
      },
      {
        segments: [
          { text: "私[わたし]は 泥棒[どろぼう]を 警察[けいさつ]の 人[ひと]に " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered version with 警察の人",
      },
      {
        segments: [
          { text: "私[わたし]は 警察官[けいさつかん]に 泥棒[どろぼう]を " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 警察官 for police officer",
      },
      {
        segments: [
          { text: "私[わたし]は 泥棒[どろぼう]を 警察官[けいさつかん]に " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered version with 警察官",
      },
      {
        segments: [
          { text: "私[わたし]は 警察[けいさつ]が 泥棒[どろぼう]を " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the police as the desired finder",
      },
      {
        segments: [
          { text: "私[わたし]は 泥棒[どろぼう]を 警察[けいさつ]が " },
          { text: "見[み]つけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered version using が for the actor",
      },
    ],
  },
  {
    english: "I want my coworker to put the file on the desk before the meeting.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "机の上に explicitly means “on top of the desk.”",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 机に instead of 机の上に; concise and natural",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に ファイルを 会議[かいぎ]の 前[まえ]に 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Different word order: file first, then timing and location",
      },
      {
        segments: [
          { text: "私[わたし]は 会議[かいぎ]の 前[まえ]に 私[わたし]の 同僚[どうりょう]に ファイルを 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed earlier in the sentence",
      },
      {
        segments: [
          { text: "私[わたし]は 会議[かいぎ]の 前[まえ]に 私[わたし]の 同僚[どうりょう]に ファイルを 机[つくえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase early, with concise 机に",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に ファイルを 机[つくえ]に 会議[かいぎ]の 前[まえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Timing phrase placed immediately before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に ファイルを 机[つくえ]の 上[うえ]に 会議[かいぎ]の 前[まえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Timing phrase immediately before the verb, with 机の上に",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 置いておいて to mean put/leave it there in advance",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]に " },
          { text: "置[お]いておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 置いておいて with concise 机に",
      },
      {
        segments: [
          { text: "私[わたし]は 会議[かいぎ]の 前[まえ]に 私[わたし]の 同僚[どうりょう]に ファイルを 机[つくえ]に " },
          { text: "置[お]いておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "置いておいて with time phrase early in sentence",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]に 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Dropping 私の before coworker; natural when the coworker is understood as mine",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]に 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Dropping 私の, with concise 机に",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]に 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Dropping 私の and using 置いておいて",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]が 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]の 上[うえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the coworker as the desired actor",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]が 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for the coworker and concise 机に",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]が 会議[かいぎ]の 前[まえ]に ファイルを 机[つくえ]に " },
          { text: "置[お]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for coworker, with 私の omitted",
      },
    ],
  },
  {
    english: "I want my friend to speak Japanese like a Japanese person.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 友達[ともだち]に " },
          { text: "日本人[にほんじん]のように", blank: true },
          { text: " 日本語[にほんご]を " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に marks the friend as the person whose action is desired; 日本人のように means “like a Japanese person.”",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に " },
          { text: "日本人[にほんじん]のように", blank: true },
          { text: " 日本語[にほんご]を " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural version omitting 私の before 友達; still clear as 'my friend' in context.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 友達[ともだち]に 日本語[にほんご]を " },
          { text: "日本人[にほんじん]のように", blank: true },
          { text: " " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered so the object 日本語を comes before 日本人のように.",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 日本語[にほんご]を " },
          { text: "日本人[にほんじん]のように", blank: true },
          { text: " " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 私の, with 日本語を before 日本人のように.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 友達[ともだち]に " },
          { text: "日本人[にほんじん]みたいに", blank: true },
          { text: " 日本語[にほんご]を " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the known synonym みたいに for 'like' while still using てほしい.",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に " },
          { text: "日本人[にほんじん]みたいに", blank: true },
          { text: " 日本語[にほんご]を " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses みたいに and omits 私の before 友達.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 友達[ともだち]に 日本語[にほんご]を " },
          { text: "日本人[にほんじん]みたいに", blank: true },
          { text: " " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses みたいに with object-first word order.",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に 日本語[にほんご]を " },
          { text: "日本人[にほんじん]みたいに", blank: true },
          { text: " " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses みたいに, omits 私の, and places 日本語を first.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 友達[ともだち]が " },
          { text: "日本人[にほんじん]のように", blank: true },
          { text: " 日本語[にほんご]を " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が instead of に to mark the person whose action is desired.",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]が " },
          { text: "日本人[にほんじん]のように", blank: true },
          { text: " 日本語[にほんご]を " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が for 友達 and omits 私の.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 友達[ともだち]が 日本語[にほんご]を " },
          { text: "日本人[にほんじん]のように", blank: true },
          { text: " " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が for 友達 with object-first word order.",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]が 日本語[にほんご]を " },
          { text: "日本人[にほんじん]のように", blank: true },
          { text: " " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が for 友達, omits 私の, and places 日本語を first.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 友達[ともだち]が " },
          { text: "日本人[にほんじん]みたいに", blank: true },
          { text: " 日本語[にほんご]を " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が for 友達 and みたいに for 'like'.",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]が " },
          { text: "日本人[にほんじん]みたいに", blank: true },
          { text: " 日本語[にほんご]を " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が, みたいに, and omits 私の.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 友達[ともだち]が 日本語[にほんご]を " },
          { text: "日本人[にほんじん]みたいに", blank: true },
          { text: " " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が and みたいに with object-first word order.",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]が 日本語[にほんご]を " },
          { text: "日本人[にほんじん]みたいに", blank: true },
          { text: " " },
          { text: "話[はな]して", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が and みたいに, omits 私の, and places 日本語を first.",
      },
    ],
  },
  {
    english: "I want my mother to lock the door before going out.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 出[で]かける 前[まえ]に ドアに 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ドアに鍵をかける means “lock the door.”",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 母[はは]が 出[で]かける 前[まえ]に ドアに 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Clarifies that it is the mother who is going out",
      },
      {
        segments: [
          { text: "母[はは]が 出[で]かける 前[まえ]に、私[わたし]は 母[はは]に ドアに 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time clause placed at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 出[で]かける 前[まえ]に ドアの 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ドアの鍵をかける instead of ドアに鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 母[はは]が 出[で]かける 前[まえ]に ドアの 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Clarified subject plus ドアの鍵をかける",
      },
      {
        segments: [
          { text: "母[はは]が 出[で]かける 前[まえ]に、私[わたし]は 母[はは]に ドアの 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted time clause with ドアの鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 外[そと]に 出[で]る 前[まえ]に ドアに 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 外に出る前に for before going out",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 外[そと]に 出[で]る 前[まえ]に ドアの 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 外に出る前に and ドアの鍵",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 出[で]かける 前[まえ]に ドアを 閉[し]めて 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says close and lock the door",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 母[はは]が 出[で]かける 前[まえ]に ドアを 閉[し]めて 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit close-and-lock wording with mother as subject of going out",
      },
      {
        segments: [
          { text: "母[はは]が 出[で]かける 前[まえ]に、私[わたし]は 母[はは]に ドアを 閉[し]めて 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted time clause with explicit close and lock",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]には 出[で]かける 前[まえ]に ドアに 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には for slight emphasis/contrast on mother",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]には 出[で]かける 前[まえ]に ドアの 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Emphatic には with ドアの鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は お母[かあ]さんに 出[で]かける 前[まえ]に ドアに 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial お母さん for mother",
      },
      {
        segments: [
          { text: "私[わたし]は お母[かあ]さんに 出[で]かける 前[まえ]に ドアの 鍵[かぎ]を かけて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Colloquial お母さん with ドアの鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 出[で]かける 前[まえ]に ドアに 鍵[かぎ]を かけておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ておく to mean lock it beforehand",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 出[で]かける 前[まえ]に ドアの 鍵[かぎ]を かけておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ておく with ドアの鍵",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 母[はは]が 出[で]かける 前[まえ]に ドアに 鍵[かぎ]を かけておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Clarifies mother as subject and uses ておく",
      },
      {
        segments: [
          { text: "母[はは]が 出[で]かける 前[まえ]に、私[わたし]は 母[はは]に ドアに 鍵[かぎ]を かけておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted time clause with ておく",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 母[はは]が 出[で]かける 前[まえ]に ドアの 鍵[かぎ]を かけておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Clarified subject with ておく and ドアの鍵",
      },
      {
        segments: [
          { text: "母[はは]が 出[で]かける 前[まえ]に、私[わたし]は 母[はは]に ドアの 鍵[かぎ]を かけておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted time clause with ておく and ドアの鍵",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 外[そと]に 出[で]る 前[まえ]に ドアに 鍵[かぎ]を かけておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "外に出る前に with preparatory ておく",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 外[そと]に 出[で]る 前[まえ]に ドアの 鍵[かぎ]を かけておいて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "外に出る前に with ておく and ドアの鍵",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 母[はは]が 出[で]かける 前[まえ]に ドアに 鍵[かぎ]を かけるようにして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ようにしてほしい to mean make sure to lock the door",
      },
      {
        segments: [
          { text: "私[わたし]は 母[はは]に 母[はは]が 出[で]かける 前[まえ]に ドアの 鍵[かぎ]を かけるようにして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ようにしてほしい with ドアの鍵をかける",
      },
      {
        segments: [
          { text: "母[はは]が 出[で]かける 前[まえ]に、私[わたし]は 母[はは]に ドアに 鍵[かぎ]を かけるようにして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted time clause with ようにしてほしい",
      },
      {
        segments: [
          { text: "母[はは]が 出[で]かける 前[まえ]に、私[わたし]は 母[はは]に ドアの 鍵[かぎ]を かけるようにして", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted time clause and ドアの鍵 with ようにしてほしい",
      },
    ],
  },
  {
    english: "I want my father to take off his boots here.",
    hint: "boots = ブーツ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 父[ちち]に ここで ブーツを " },
          { text: "脱[ぬ]いでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "The full てほしい expression is in one blank.",
      },
      {
        segments: [
          { text: "私[わたし]は 父[ちち]に ブーツを ここで " },
          { text: "脱[ぬ]いでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same meaning with the object placed before ここで.",
      },
      {
        segments: [
          { text: "私[わたし]は 父[ちち]が ここで ブーツを " },
          { text: "脱[ぬ]いでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of に to mark the person desired to act.",
      },
      {
        segments: [
          { text: "私[わたし]は 父[ちち]に ここでは ブーツを " },
          { text: "脱[ぬ]いでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ここでは to emphasize 'here/at this place' as the place where boots should be removed.",
      },
      {
        segments: [
          { text: "私[わたし]は 父[ちち]に ブーツは ここで " },
          { text: "脱[ぬ]いでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to topicalize/contrast the boots.",
      },
      {
        segments: [
          { text: "私[わたし]は 父[ちち]が ブーツを ここで " },
          { text: "脱[ぬ]いでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for the actor with object-before-place word order.",
      },
      {
        segments: [
          { text: "私[わたし]は ここで 父[ちち]に ブーツを " },
          { text: "脱[ぬ]いでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronting ここで after the topic to emphasize the location.",
      },
    ],
  },
  {
    english: "What do the students want the teacher to write on the blackboard?",
    answers: [
      {
        segments: [
          { text: "学生[がくせい]たちは 先生[せんせい]に 黒板[こくばん]に 何[なに]を " },
          { text: "書[か]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "学生[がくせい]たちは 先生[せんせい]に 何[なに]を 黒板[こくばん]に " },
          { text: "書[か]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Object placed before location",
      },
      {
        segments: [
          { text: "学生[がくせい]は 先生[せんせい]に 黒板[こくばん]に 何[なに]を " },
          { text: "書[か]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using 学生は, which can refer to students as a group",
      },
      {
        segments: [
          { text: "学生[がくせい]は 先生[せんせい]に 何[なに]を 黒板[こくばん]に " },
          { text: "書[か]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using 学生は with object before location",
      },
      {
        segments: [
          { text: "学生[がくせい]たちは 先生[せんせい]が 黒板[こくばん]に 何[なに]を " },
          { text: "書[か]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using が to mark the teacher as the person doing the action",
      },
      {
        segments: [
          { text: "学生[がくせい]たちは 先生[せんせい]が 何[なに]を 黒板[こくばん]に " },
          { text: "書[か]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using が for teacher with object before location",
      },
      {
        segments: [
          { text: "学生[がくせい]は 先生[せんせい]が 黒板[こくばん]に 何[なに]を " },
          { text: "書[か]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Generic 学生 with が marking teacher",
      },
      {
        segments: [
          { text: "学生[がくせい]は 先生[せんせい]が 何[なに]を 黒板[こくばん]に " },
          { text: "書[か]いて", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Generic 学生 with object before location and が for teacher",
      },
    ],
  },
  {
    english: "I want the hotel front desk to call a taxi at eight tomorrow morning.",
    hint: "hotel = ホテル; front desk = フロント; taxi = タクシー",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ホテルの フロントに 明日[あした]の 朝[あさ] 八時[はちじ]に タクシーを " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ホテルのフロント marks the front desk as the party asked to act.",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 朝[あさ] 八時[はちじ]に ホテルの フロントに タクシーを " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed before the front desk",
      },
      {
        segments: [
          { text: "私[わたし]は ホテルの フロントに タクシーを 明日[あした]の 朝[あさ] 八時[はちじ]に " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object placed before the time phrase",
      },
      {
        segments: [
          { text: "私[わたし]は ホテルの フロントの 人[ひと]に 明日[あした]の 朝[あさ] 八時[はちじ]に タクシーを " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies the front desk staff/person",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 朝[あさ] 八時[はちじ]に ホテルの フロントの 人[ひと]に タクシーを " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Front desk staff with time phrase first",
      },
      {
        segments: [
          { text: "私[わたし]は ホテルの フロントに 明日[あした]の 午前[ごぜん]八時[はちじ]に タクシーを " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 午前八時 instead of 朝八時",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 午前[ごぜん]八時[はちじ]に ホテルの フロントに タクシーを " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 午前八時 with time phrase before the front desk",
      },
      {
        segments: [
          { text: "私[わたし]は ホテルの フロントの 人[ひと]に 明日[あした]の 午前[ごぜん]八時[はちじ]に タクシーを " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 午前八時 and specifies front desk staff",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]の 午前[ごぜん]八時[はちじ]に ホテルの フロントの 人[ひと]に タクシーを " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Front desk staff with 午前八時 time phrase first",
      },
      {
        segments: [
          { text: "私[わたし]は タクシーを 明日[あした]の 朝[あさ] 八時[はちじ]に ホテルの フロントに " },
          { text: "呼[よ]んでほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic/object fronted before time and actor",
      },
    ],
  },
  {
    english: "I want my coworker to apologize to the customer right away.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に 今[いま]すぐ お客[きゃく]さんに " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に お客[きゃく]さんに 今[いま]すぐ " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverb 今すぐ placed immediately before the verb.",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]に 今[いま]すぐ お客[きゃく]さんに " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 私の before coworker; natural when context makes it my coworker.",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]に お客[きゃく]さんに 今[いま]すぐ " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 私の, with 今すぐ right before the verb.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に すぐ お客[きゃく]さんに " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すぐ instead of 今すぐ.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に お客[きゃく]さんに すぐ " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using すぐ placed before the verb.",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]に すぐ お客[きゃく]さんに " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 私の and using すぐ.",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]に お客[きゃく]さんに すぐ " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 私の with すぐ immediately before 謝ってほしい.",
      },
      {
        segments: [
          { text: "私[わたし]の 同僚[どうりょう]には 今[いま]すぐ お客[きゃく]さんに " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to mark the coworker as the person expected to act.",
      },
      {
        segments: [
          { text: "同僚[どうりょう]には 今[いま]すぐ お客[きゃく]さんに " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には and omitting 私の.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に 今[いま]すぐ お客様[きゃくさま]に " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More polite customer term お客様.",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 同僚[どうりょう]に お客様[きゃくさま]に 今[いま]すぐ " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using お客様 with 今すぐ before the verb.",
      },
      {
        segments: [
          { text: "私[わたし]は 同僚[どうりょう]に 今[いま]すぐ お客様[きゃくさま]に " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting 私の and using お客様.",
      },
      {
        segments: [
          { text: "私[わたし]の 同僚[どうりょう]には 今[いま]すぐ お客様[きゃくさま]に " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には plus the more polite お客様.",
      },
      {
        segments: [
          { text: "同僚[どうりょう]には 今[いま]すぐ お客様[きゃくさま]に " },
          { text: "謝[あやま]って", blank: true },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Concise version with には and お客様.",
      },
    ],
  },
  {
    english: "I want the restaurant chef to make spicy curry tonight.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は レストランの シェフに 今夜[こんや] 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "に marks the chef as the person whose action is desired.",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフに 今晩[こんばん] 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今晩 instead of 今夜",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] レストランの シェフに 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed near the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフに 辛[から]い カレーを 今夜[こんや] 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed right before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん] レストランの シェフに 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 with time phrase near the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフに 今夜[こんや] カレーを 辛[から]く 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 辛く作って to mean make the curry spicy",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフに 今晩[こんばん] カレーを 辛[から]く 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "辛く作って with 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] レストランの シェフに カレーを 辛[から]く 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "辛く作って with time phrase near the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフに カレーを 今夜[こんや] 辛[から]く 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "辛く作って with time phrase before the adverb and verb",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフが 今夜[こんや] 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of に to mark the chef",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフが 今晩[こんばん] 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が marking the chef with 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや] レストランの シェフが 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が marking the chef with time phrase near the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフが 今夜[こんや] カレーを 辛[から]く 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が marking the chef and using 辛く作って",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフに 今日[きょう]の 夜[よる] 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今日の夜 for tonight",
      },
      {
        segments: [
          { text: "私[わたし]は レストランの シェフに 今日[きょう]の 夜[よる] カレーを 辛[から]く 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今日の夜 and 辛く作って",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]は レストランの シェフに 辛[から]い カレーを 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing 今夜 with は",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]は レストランの シェフに カレーを 辛[から]く 作[つく]って" },
          { text: "ほしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizing 今夜 with は and using 辛く作って",
      },
    ],
  },
];
