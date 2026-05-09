import type { Question } from "../types";

export const questions: Question[] = [
{
    english: "I’m Yamamoto from the front desk, and I’ll call at nine o’clock.",
    hint: "Yamamoto = 山本 (やまもと). Use hotel-staff level politeness.",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。九時[くじ]に お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。" },
        ],
        notes: "Standard hotel-staff self-introduction with でございます and humble お電話いたす.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。九時[くじ]に こちらから お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds こちらから to clarify that the front desk will initiate the call.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。こちらから 九時[くじ]に お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same meaning with こちらから placed before the time.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。九時[くじ]に 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話いたす without お; still humble and natural in service language.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。こちらから 九時[くじ]に 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines 電話いたす with こちらから.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。九時[くじ]に お 電話[でんわ]を" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds を after お電話, a natural formal service-style variant.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。九時[くじ]に こちらから お 電話[でんわ]を" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses お電話をいたす plus こちらから.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。こちらから 九時[くじ]に お 電話[でんわ]を" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same wording with こちらから before the time phrase.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]が、九時[くじ]に お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Identifies the caller with が instead of a separate でございます self-introduction.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]" },
          { text: "でございます", blank: true },
          { text: "。九時[くじ]に こちらから 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 電話いたす and includes こちらから after the time phrase.",
      },
      {
        register: "polite",
        segments: [
          { text: "九時[くじ]に フロントの 山本[やまもと]から お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Single-sentence version using 山本から to indicate who will call.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]から 九時[くじ]に お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Single-sentence version with the caller phrase first.",
      },
      {
        register: "polite",
        segments: [
          { text: "九時[くじ]に フロントの 山本[やまもと]より お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses より, a more formal equivalent of から in service speech.",
      },
      {
        register: "polite",
        segments: [
          { text: "フロントの 山本[やまもと]より 九時[くじ]に お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Formal より with the caller phrase at the beginning.",
      },
    ],
  },
{
    english: "This is tomorrow’s schedule, and I’ll explain it now.",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "これは 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with これは and 今からご説明いたします",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらが 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using polite demonstrative こちら and subject particle が",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using こちらは for a polite presentation style",
      },
      {
        register: "polite",
        segments: [
          { text: "これが 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using これが instead of これは",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]は これ" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed topic order: 'tomorrow's schedule is this'",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]は こちら" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed topic order with polite こちら",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using これから instead of 今から for 'from now'",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらが 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite こちらが with これから",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite こちらは with これから",
      },
      {
        register: "polite",
        segments: [
          { text: "これが 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これが with これから",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]は これ" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed topic order with これから",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]は こちら" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed topic order with polite こちら and これから",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]をいたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ご説明をいたす with を for a slightly more formal object-marked phrasing",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらが 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]をいたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite こちらが plus ご説明をいたす",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]は こちら" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]をいたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed topic order plus ご説明をいたす",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "ご 説明[せつめい]をいたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "これから plus object-marked ご説明をいたす",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting the demonstrative; natural in a presentation context",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting the demonstrative with これから",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using direct する→いたす replacement without ご",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらが 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]から " },
          { text: "説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite こちらが with direct 説明いたす",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]は こちら" },
          { text: "でございます", blank: true },
          { text: "。これから " },
          { text: "説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed topic order with direct 説明いたす",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]、" },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今 without から for 'now'",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらが 明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]、" },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite こちらが with 今、",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]は こちら" },
          { text: "でございます", blank: true },
          { text: "。今[いま]、" },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed topic order with 今、",
      },
      {
        register: "polite",
        segments: [
          { text: "明日[あした]の 予定[よてい]" },
          { text: "でございます", blank: true },
          { text: "。今[いま]、" },
          { text: "ご 説明[せつめい]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting demonstrative with 今、",
      },
    ],
  },
{
    english: "I’m Suzuki from the travel agency; we have two single rooms available.",
    hint: "Suzuki = 鈴木 (すずき); single room = シングルの部屋",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の 鈴木[すずき]" },
          { text: "で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。シングルの 部屋[へや]が 二[ふた]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic version using でございます for self-introduction and ございます for existence/availability.",
      },
      {
        register: "polite",
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の 鈴木[すずき]" },
          { text: "で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。シングルの 部屋[へや]は 二[ふた]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the single rooms as the topic/available item.",
      },
      {
        register: "polite",
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の 鈴木[すずき]" },
          { text: "で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。シングルの 部屋[へや]が 二部屋[ふたへや] " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the room counter 二部屋 instead of 二つ.",
      },
      {
        register: "polite",
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の 鈴木[すずき]" },
          { text: "で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。シングルの 部屋[へや]は 二部屋[ふたへや] " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines topic は with the room counter 二部屋.",
      },
      {
        register: "polite",
        segments: [
          { text: "鈴木[すずき]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "、旅行会社[りょこうがいしゃ]の 者[もの]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。シングルの 部屋[へや]が 二[ふた]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "More explicit service-style introduction: “I am Suzuki, a person from the travel agency.”",
      },
      {
        register: "polite",
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の 鈴木[すずき]" },
          { text: "で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。シングルの お 部屋[へや]が 二[ふた]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the more polite お部屋, natural in travel/hotel service speech.",
      },
      {
        register: "polite",
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の 鈴木[すずき]" },
          { text: "で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。シングルの お 部屋[へや]が 二部屋[ふたへや] " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses polite お部屋 with the room counter 二部屋.",
      },
      {
        register: "polite",
        segments: [
          { text: "旅行会社[りょこうがいしゃ]の 鈴木[すずき]" },
          { text: "で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。シングルが 二部屋[ふたへや] " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omits 部屋 after シングル; natural hotel/travel shorthand for single rooms.",
      },
    ],
  },
{
    english: "I’m Tanaka from the bank, and I’ll exchange this cash here.",
    hint: "Tanaka = 田中",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。こちらで この 現金[げんきん]を " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard polite self-introduction with こちらで for “here” and この現金を as the object.",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。ここで この 現金[げんきん]を " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ここで instead of こちらで for “here.”",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。この 現金[げんきん]を こちらで " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object placed before the location phrase.",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。この 現金[げんきん]を ここで " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object-first order with ここで for “here.”",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。こちらで こちらの 現金[げんきん]を " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses こちらの現金 for a more customer-service-like way to say “this cash.”",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。ここで こちらの 現金[げんきん]を " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses こちらの現金 with ここで for “here.”",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。こちらの 現金[げんきん]を こちらで " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object-first order with こちらの現金 and こちらで.",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。こちらの 現金[げんきん]を ここで " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object-first order with こちらの現金 and ここで.",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。この 現金[げんきん]は こちらで " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Marks この現金 as the topic with は.",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。この 現金[げんきん]は ここで " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked この現金 with ここで.",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。こちらの 現金[げんきん]は こちらで " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked こちらの現金 with こちらで.",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。こちらの 現金[げんきん]は ここで " },
          { text: "両替[りょうがえ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic-marked こちらの現金 with ここで.",
      },
      {
        register: "polite",
        segments: [
          { text: "銀行[ぎんこう]の 田中[たなか]" },
          { text: "でございます", blank: true },
          { text: "。この 現金[げんきん]を 両替[りょうがえ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "のは こちらでございます", blank: true },
        ],
        notes: "Cleft-like phrasing: “It is here that I will exchange this cash,” using でございます for こちら.",
      },
    ],
  },
{
    english: "I have one question, so I’ll call later.",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard humble wording with ので and お電話いたす",
      },
      {
        register: "polite",
        segments: [
          { text: "一[ひと]つ 質問[しつもん]が " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order: 一つ質問が",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 電話いたす without honorific お",
      },
      {
        register: "polite",
        segments: [
          { text: "一[ひと]つ 質問[しつもん]が " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order plus 電話いたす",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 電話[でんわ]を " },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 電話をいたす with を",
      },
      {
        register: "polite",
        segments: [
          { text: "一[ひと]つ 質問[しつもん]が " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 電話[でんわ]を " },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order with 電話をいたす",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から instead of ので",
      },
      {
        register: "polite",
        segments: [
          { text: "一[ひと]つ 質問[しつもん]が " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で お 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から with reversed word order",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and 電話いたす without お",
      },
      {
        register: "polite",
        segments: [
          { text: "一[ひと]つ 質問[しつもん]が " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 電話[でんわ]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から, reversed word order, and 電話いたす",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 電話[でんわ]を " },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and 電話をいたす",
      },
      {
        register: "polite",
        segments: [
          { text: "一[ひと]つ 質問[しつもん]が " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 電話[でんわ]を " },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から with reversed word order and 電話をいたす",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で ご 連絡[れんらく]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ご連絡いたす instead of お電話いたす",
      },
      {
        register: "polite",
        segments: [
          { text: "一[ひと]つ 質問[しつもん]が " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で ご 連絡[れんらく]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ご連絡いたす with reversed word order",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で ご 連絡[れんらく]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and ご連絡いたす",
      },
      {
        register: "polite",
        segments: [
          { text: "一[ひと]つ 質問[しつもん]が " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で ご 連絡[れんらく]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から, ご連絡いたす, and reversed word order",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、後[あと]で 連絡[れんらく]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 連絡いたす without ご",
      },
      {
        register: "polite",
        segments: [
          { text: "質問[しつもん]が 一[ひと]つ " },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、後[あと]で 連絡[れんらく]" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から and 連絡いたす without ご",
      },
    ],
  },
{
    english: "This is a black wallet, and there’s a phone number inside, so I’ll call now.",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using これ, でございます, ございます, and お電話いたします",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using こちら instead of これ, more appropriate in polite service speech",
      },
      {
        register: "polite",
        segments: [
          { text: "この 黒[くろ]い 財布[さいふ]は、中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines 'this black wallet' as the topic rather than using a separate でございます sentence",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。電話番号[でんわばんごう]が 中[なか]に" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order for the existence phrase: 電話番号が中にございます",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 電話いたします without honorific お",
      },
      {
        register: "polite",
        segments: [
          { text: "この 財布[さいふ]は 黒[くろ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Describes the wallet's color as 黒でございます instead of 黒い財布でございます",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。財布[さいふ]の 中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies 財布の中に for 'inside the wallet'",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]から" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今から for 'from now/now'",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "から、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses から instead of ので for 'so/because'",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。財布[さいふ]の 中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]から" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite こちら plus explicit 財布の中に and 今から",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]、" },
          { text: "お 電話[でんわ]をいたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses お電話をいたします with を",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]には 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には to topicalize 'inside'",
      },
      {
        register: "polite",
        segments: [
          { text: "これは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。財布[さいふ]の 中[なか]には 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 財布の中には with topical は",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは 黒[くろ]い 財布[さいふ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。中[なか]には 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]から" },
          { text: "電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Polite こちら, には, 今から, and 電話いたします without お",
      },
      {
        register: "polite",
        segments: [
          { text: "この 財布[さいふ]は 黒[くろ]で" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "。財布[さいふ]の 中[なか]に 電話番号[でんわばんごう]が" },
          { text: "ござる", blank: true, conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ので、今[いま]から" },
          { text: "お 電話[でんわ]いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Color as predicate plus explicit inside and 今から",
      },
    ],
  },
{
    english: "This is a souvenir from Germany, and there are three chocolates inside.",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "これは ドイツからの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。中[なか]に チョコレートが 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Standard translation using ドイツからの and 中に",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは ドイツからの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。中[なか]には チョコレートが 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "More polite こちら and contrastive/location は on 中には",
      },
      {
        register: "polite",
        segments: [
          { text: "これは ドイツの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。中[なか]に チョコレートが 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Using ドイツの instead of ドイツからの",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは ドイツの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。中[なか]には チョコレートが 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Polite こちら plus ドイツの and 中には",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらが ドイツからの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。中[なか]に チョコレートが 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Using こちらが to present the item politely",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらが ドイツの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。中[なか]に チョコレートが 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Using こちらが with ドイツの",
      },
      {
        register: "polite",
        segments: [
          { text: "ドイツからの お 土産[みやげ]は こちら" },
          { text: "でございます", blank: true },
          { text: "。中[なか]に チョコレートが 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Reversed order: the German souvenir is this one",
      },
      {
        register: "polite",
        segments: [
          { text: "ドイツの お 土産[みやげ]は こちら" },
          { text: "でございます", blank: true },
          { text: "。中[なか]に チョコレートが 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Reversed order with ドイツの",
      },
      {
        register: "polite",
        segments: [
          { text: "これは ドイツからの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。チョコレートが 中[なか]に 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Word order variation placing チョコレート first in second sentence",
      },
      {
        register: "polite",
        segments: [
          { text: "これは ドイツの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。チョコレートが 中[なか]に 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Word order variation in second sentence with ドイツの",
      },
      {
        register: "polite",
        segments: [
          { text: "これは ドイツからの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。チョコレートは 中[なか]に 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Using は for chocolate as the topic in the existence sentence",
      },
      {
        register: "polite",
        segments: [
          { text: "これは ドイツの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。チョコレートは 中[なか]に 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Using は for chocolate with ドイツの",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは ドイツからの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。チョコレートは 中[なか]に 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Polite こちら with chocolate as topic",
      },
      {
        register: "polite",
        segments: [
          { text: "こちらは ドイツの お 土産[みやげ]" },
          { text: "でございます", blank: true },
          { text: "。チョコレートは 中[なか]に 三[みっ]つ " },
          { text: "ございます", blank: true },
          { text: "。" },
        ],
        notes: "Polite こちら with ドイツの and chocolate as topic",
      },
    ],
  },
{
    english: "There’s one mistake in this reservation, so I’ll correct it right away.",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]に 間違[まちが]いが 一[ひと]つ" },
          { text: "ございます", blank: true },
          { text: "ので、すぐに お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using ございます for “there is” and お直しいたす for humble “correct.”",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]には 間違[まちが]いが 一[ひと]つ" },
          { text: "ございます", blank: true },
          { text: "ので、すぐに お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to mark “in this reservation” as the relevant context.",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]に 一[ひと]つ 間違[まちが]いが" },
          { text: "ございます", blank: true },
          { text: "ので、すぐに お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Counter placed before 間違い: 一つ間違いがございます.",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]には 一[ひと]つ 間違[まちが]いが" },
          { text: "ございます", blank: true },
          { text: "ので、すぐに お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines には with 一つ before the noun.",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]に 間違[まちが]いが 一[ひと]つ" },
          { text: "ございます", blank: true },
          { text: "ので、今[いま]すぐ お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今すぐ instead of すぐに for “right away.”",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]には 間違[まちが]いが 一[ひと]つ" },
          { text: "ございます", blank: true },
          { text: "ので、今[いま]すぐ お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には plus 今すぐ.",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]に 一[ひと]つ 間違[まちが]いが" },
          { text: "ございます", blank: true },
          { text: "ので、今[いま]すぐ お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 一つ before 間違い and uses 今すぐ.",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]には 一[ひと]つ 間違[まちが]いが" },
          { text: "ございます", blank: true },
          { text: "ので、今[いま]すぐ お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には, 一つ before the noun, and 今すぐ.",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]は 間違[まちが]いが 一[ひと]つ" },
          { text: "ございます", blank: true },
          { text: "ので、すぐに お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses は to topicalize the reservation.",
      },
      {
        register: "polite",
        segments: [
          { text: "この 予約[よやく]は 間違[まちが]いが 一[ひと]つ" },
          { text: "ございます", blank: true },
          { text: "ので、今[いま]すぐ お 直[なお]し" },
          { text: "いたす", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizes with は and uses 今すぐ.",
      },
    ],
  },
{
    english: "I’ll be in Tokyo next week, too.",
    answers: [
      {
        segments: [
          { text: "来週[らいしゅう]も 東京[とうきょう]に" },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses おる as the extra-modest expression for いる.",
      },
    ],
  },
{
    english: "I’ll go to Osaka by Shinkansen.",
    answers: [
      {
        segments: [
          { text: "新幹線[しんかんせん]で 大阪[おおさか]に" },
          {
            text: "参[まい]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 参る as the extra-modest expression for 行く.",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]で 大阪[おおさか]へ" },
          {
            text: "参[まい]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses へ instead of に for the destination particle.",
      },
    ],
  },
{
    english: "I will (modestly) go to the park where the company president (graciously) is.",
    answers: [
      {
        segments: [
          { text: "社長[しゃちょう]がいらっしゃる 公園[こうえん]に" },
          {
            text: "参[まい]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses 参ります as the extra-modest expression for 行く and いらっしゃる as the honorific expression for いる.",
      },
    ],
  },
{
    english: "I will (modestly) go to the branch office tomorrow, where the manager (graciously) is.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 明日[あした]部長[ぶちょう]がいらっしゃる 支店[してん]に",
          },
          {
            text: "参[まい]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses 参ります as the extra-modest expression for 行く and いらっしゃる as the honorific expression for いる.",
      },
    ],
  },
{
    english: "I write novels as a hobby.",
    answers: [
      {
        segments: [
          { text: "趣味[しゅみ]で 小説[しょうせつ]を" },
          { text: "書[か]いて", blank: true },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses ～ておる as the extra-modest expression for ～ている.",
      },
      {
        segments: [
          { text: "趣味[しゅみ]で 小説[しょうせつ]を" },
          { text: "執筆[しっぴつ]して", blank: true },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 執筆 (formal word for 'writing') with ～ておる.",
      },
    ],
  },
{
    english: "I’ll continue this project next month, too.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]もこのプロジェクトを" },
          { text: "続[つづ]けて", blank: true },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses ～ておる as the extra-modest expression for ～ている.",
      },
      {
        segments: [
          { text: "来月[らいげつ]もこのプロジェクトを" },
          { text: "進[すす]めて", blank: true },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 進める (to advance) with ～ておる.",
      },
    ],
  },
{
    english: "I went to the travel agency the other day.",
    hint: "先日 (せんじつ) -> the other day; more formal than この間.",
    answers: [
      {
        segments: [
          { text: "先日[せんじつ]旅行会社[りょこうがいしゃ]に" },
          {
            text: "参[まい]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 参る as the extra-modest expression for 行く.",
      },
      {
        segments: [
          { text: "先日[せんじつ]旅行会社[りょこうがいしゃ]へ" },
          {
            text: "参[まい]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses へ instead of に for the destination particle.",
      },
    ],
  },
{
    english: "I submitted my résumé last month.",
    hint: '提出する (ていしゅつする) is a formal verb for "submit" (for documents, reports, etc.).',
    answers: [
      {
        segments: [
          { text: "先月[せんげつ]履歴書[りれきしょ]を" },
          { text: "提出[ていしゅつ]" },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses いたす as the extra-modest expression for する.",
      },
      {
        segments: [
          { text: "先月[せんげつ]履歴書[りれきしょ]を" },
          { text: "お 出[だ]し" },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses お出しいたす (extra-modest + humble in one).",
      },
    ],
  },
{
    english: "I paint as a hobby.",
    answers: [
      {
        segments: [
          { text: "趣味[しゅみ]で 絵[え]を" },
          { text: "描[か]いて", blank: true },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses ～ておる as the extra-modest expression for ～ている.",
      },
      {
        segments: [
          { text: "趣味[しゅみ]で 絵[え]を" },
          { text: "制作[せいさく]して", blank: true },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 制作 (formal word for 'creating') with ～ておる.",
      },
    ],
  },
{
    english: "Recently, I’ve been taking photos as a hobby.",
    answers: [
      {
        segments: [
          { text: "最近[さいきん]趣味[しゅみ]で 写真[しゃしん]を" },
          { text: "撮[と]って", blank: true },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses ～ておる as the extra-modest expression for ～ている.",
      },
      {
        segments: [
          { text: "最近[さいきん]趣味[しゅみ]で 写真[しゃしん]を" },
          { text: "撮影[さつえい]して", blank: true },
          {
            text: "おる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 撮影 (formal word for 'taking photos') with ～ておる.",
      },
    ],
  },
{
    english: "I’ll do this work next week, too.",
    answers: [
      {
        segments: [
          { text: "来週[らいしゅう]もこの 仕事[しごと]を" },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses いたす as the extra-modest expression for する.",
      },
    ],
  },
{
    english: "I’ll participate in this project next month, too.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]もこのプロジェクトに" },
          { text: "参加[さんか]" },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes: "Uses いたす as the extra-modest expression for する.",
      },
    ],
  },
];
