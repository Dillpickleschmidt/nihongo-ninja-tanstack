import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I was invited to the Christmas party by Mizuki.",
    hint: "Mizuki = 瑞希 (みずき); Christmas party = クリスマスパーティー",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 瑞希[みずき]さんに クリスマスパーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard passive sentence with the agent marked by に",
      },
      {
        segments: [
          { text: "私[わたし]は 瑞希[みずき]さんから クリスマスパーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から for the inviter/source instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は クリスマスパーティーに 瑞希[みずき]さんに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered phrases: party before inviter",
      },
      {
        segments: [
          { text: "私[わたし]は クリスマスパーティーに 瑞希[みずき]さんから " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered phrases with から marking the inviter/source",
      },
      {
        segments: [
          { text: "ゆきさんに 私[わたし]は クリスマスパーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topicalized subject placed after the agent",
      },
      {
        segments: [
          { text: "ゆきさんから 私[わたし]は クリスマスパーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topicalized subject placed after source marked with から",
      },
      {
        segments: [
          { text: "クリスマスパーティーに 私[わたし]は ゆきさんに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic after the party phrase",
      },
      {
        segments: [
          { text: "クリスマスパーティーに 私[わたし]は ゆきさんから " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic after the party phrase with から for the inviter",
      },
      {
        segments: [
          { text: "私[わたし]は ゆきさんに クリスマスパーティーへ " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using へ instead of に for the destination/event invited to",
      },
      {
        segments: [
          { text: "私[わたし]は ゆきさんから クリスマスパーティーへ " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から for inviter and へ for the event",
      },
      {
        segments: [
          { text: "私[わたし]が ゆきさんに クリスマスパーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が instead of は to mark the subject",
      },
      {
        segments: [
          { text: "私[わたし]が ゆきさんから クリスマスパーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject marked with が and inviter/source with から",
      },
      {
        segments: [
          { text: "私[わたし]が ゆきさんに クリスマスパーティーへ " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject が with event marked by へ",
      },
      {
        segments: [
          { text: "私[わたし]が ゆきさんから クリスマスパーティーへ " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject が, inviter/source から, and event marked by へ",
      },
      {
        segments: [
          { text: "私[わたし]は ゆきさんに クリスマスの パーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using クリスマスのパーティー instead of compound クリスマスパーティー",
      },
      {
        segments: [
          { text: "私[わたし]は ゆきさんから クリスマスの パーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using クリスマスのパーティー with inviter/source marked by から",
      },
      {
        segments: [
          { text: "私[わたし]は ゆきさんに クリスマスの パーティーへ " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using クリスマスのパーティー and へ for the invited-to event",
      },
      {
        segments: [
          { text: "私[わたし]は ゆきさんから クリスマスの パーティーへ " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using クリスマスのパーティー, から for inviter, and へ for event",
      },
      {
        segments: [
          { text: "私[わたし]が ゆきさんに クリスマスの パーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject marked with が and using クリスマスのパーティー",
      },
      {
        segments: [
          { text: "私[わたし]が ゆきさんから クリスマスの パーティーに " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject が with source から and クリスマスのパーティー",
      },
    ],
  },
  {
    english: "My room was cleaned by my mother this morning.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は 今朝[けさ]、母[はは]に " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard passive sentence with 私の部屋は as the topic",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が 今朝[けさ]、母[はは]に " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が to mark the room as the subject",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]の 部屋[へや]は 母[はは]に " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed at the beginning; topic marked with は",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]の 部屋[へや]が 母[はは]に " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression first, with が marking the subject",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]は 母[はは]に 今朝[けさ] " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent placed before the time expression",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]が 母[はは]に 今朝[けさ] " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent before the time expression, with が marking the subject",
      },
      {
        segments: [
          { text: "今朝[けさ]、母[はは]に 私[わたし]の 部屋[へや]は " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent placed before the topic noun phrase",
      },
      {
        segments: [
          { text: "今朝[けさ]、母[はは]に 私[わたし]の 部屋[へや]が " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent before the subject, with が marking the room",
      },
      {
        segments: [
          { text: "母[はは]に 今朝[けさ]、私[わたし]の 部屋[へや]は " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent placed at the very beginning",
      },
      {
        segments: [
          { text: "母[はは]に 今朝[けさ]、私[わたし]の 部屋[へや]が " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent at the beginning, subject marked with が",
      },
      {
        segments: [
          { text: "母[はは]に 私[わたし]の 部屋[へや]は 今朝[けさ] " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent first, time expression before the verb",
      },
      {
        segments: [
          { text: "母[はは]に 私[わたし]の 部屋[へや]が 今朝[けさ] " },
          { text: "掃除[そうじ]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent first, time before the verb, with が subject marking",
      },
    ],
  },
  {
    english: "Yesterday, I was made fun of by a colleague during the meeting.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、会議中[かいぎちゅう]に 同僚[どうりょう]に " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic order with passive ばかにされる conjugated to past",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、会議中[かいぎちゅう]に 同僚[どうりょう]から " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から instead of に for the doer, natural when there is no physical contact",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 会議中[かいぎちゅう]に 同僚[どうりょう]に " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed at the beginning before the subject",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 会議[かいぎ]で 同僚[どうりょう]に " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 昨日の会議で to mean “at yesterday’s meeting”",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 会議中[かいぎちゅう]に 同僚[どうりょう]に " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 昨日の会議中に for “during yesterday’s meeting”",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 会議[かいぎ]で 同僚[どうりょう]から " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 昨日の会議で and から for the doer",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 会議中[かいぎちゅう]に 同僚[どうりょう]から " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 昨日の会議中に and から for the doer",
      },
      {
        segments: [
          { text: "昨日[きのう]、会議中[かいぎちゅう]に 私[わたし]は 同僚[どうりょう]に " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronting both time and meeting context before the subject",
      },
      {
        segments: [
          { text: "昨日[きのう]の 会議[かいぎ]で、私[わたし]は 同僚[どうりょう]に " },
          { text: "ばかにされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Meeting phrase placed at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、会議中[かいぎちゅう]に 同僚[どうりょう]に " },
          { text: "笑[わら]われる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 笑われる, “was laughed at,” as a natural equivalent of being made fun of",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、会議中[かいぎちゅう]に 同僚[どうりょう]から " },
          { text: "笑[わら]われる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 笑われる with から marking the source/doer",
      },
      {
        segments: [
          { text: "昨日[きのう]の 会議[かいぎ]で、私[わたし]は 同僚[どうりょう]に " },
          { text: "笑[わら]われる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 昨日の会議で with 笑われる",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 会議中[かいぎちゅう]に 同僚[どうりょう]に " },
          { text: "笑[わら]われる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 昨日の会議中に with 笑われる",
      },
    ],
  },
  {
    english: "This grammar was explained by the teacher during class.",
    answers: [
      {
        segments: [
          { text: "この 文法[ぶんぽう]は 授業中[じゅぎょうちゅう]に 教師[きょうし]に " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard wording with は, 授業中に, and agent marked by に",
      },
      {
        segments: [
          { text: "この 文法[ぶんぽう]は 授業中[じゅぎょうちゅう]に 教師[きょうし]から " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から to mark the source/agent of the explanation",
      },
      {
        segments: [
          { text: "この 文法[ぶんぽう]が 授業中[じゅぎょうちゅう]に 教師[きょうし]に " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が to mark the grammar as the subject",
      },
      {
        segments: [
          { text: "この 文法[ぶんぽう]が 授業中[じゅぎょうちゅう]に 教師[きょうし]から " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が with から for the explaining source",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に、この 文法[ぶんぽう]は 教師[きょうし]に " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase moved to the beginning",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に、この 文法[ぶんぽう]は 教師[きょうし]から " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, with から marking source",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に、この 文法[ぶんぽう]が 教師[きょうし]に " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first with が subject marking",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に、この 文法[ぶんぽう]が 教師[きょうし]から " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, が subject, and から source",
      },
      {
        segments: [
          { text: "この 文法[ぶんぽう]は 授業[じゅぎょう]で 教師[きょうし]に " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 授業で to mean in/during class",
      },
      {
        segments: [
          { text: "この 文法[ぶんぽう]は 授業[じゅぎょう]で 教師[きょうし]から " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 授業で and から for the source",
      },
      {
        segments: [
          { text: "この 文法[ぶんぽう]が 授業[じゅぎょう]で 教師[きょうし]に " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 授業で with が subject marking",
      },
      {
        segments: [
          { text: "この 文法[ぶんぽう]が 授業[じゅぎょう]で 教師[きょうし]から " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 授業で, が subject, and から source",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]で、この 文法[ぶんぽう]は 教師[きょうし]に " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "授業で placed at the beginning",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]で、この 文法[ぶんぽう]は 教師[きょうし]から " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "授業で first, with から marking source",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]で、この 文法[ぶんぽう]が 教師[きょうし]に " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "授業で first with が subject marking",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]で、この 文法[ぶんぽう]が 教師[きょうし]から " },
          { text: "説明[せつめい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "授業で first, が subject, and から source",
      },
    ],
  },
  {
    english: "At the ticket gate, I was warned by the station attendant.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 改札[かいさつ]で 駅員[えきいん]に " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation; passive past form of 注意する",
      },
      {
        segments: [
          { text: "改札[かいさつ]で、私[わたし]は 駅員[えきいん]に " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic placed after the location for emphasis on where it happened",
      },
      {
        segments: [
          { text: "私[わたし]は 改札[かいさつ]で 駅員[えきいん]から " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から instead of に to mark the source of the warning",
      },
      {
        segments: [
          { text: "改札[かいさつ]で、私[わたし]は 駅員[えきいん]から " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location first, with から marking the source of the warning",
      },
      {
        segments: [
          { text: "私[わたし]は 改札[かいさつ]の 所[ところ]で 駅員[えきいん]に " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 改札の所で to mean at/near the ticket gate",
      },
      {
        segments: [
          { text: "私[わたし]は 改札[かいさつ]の 所[ところ]で 駅員[えきいん]から " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 改札の所で plus から for the source of the warning",
      },
      {
        segments: [
          { text: "私[わたし]は 改札口[かいさつぐち]で 駅員[えきいん]に " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 改札口 instead of 改札 for ticket gate",
      },
      {
        segments: [
          { text: "私[わたし]は 改札口[かいさつぐち]で 駅員[えきいん]から " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 改札口, with から marking the source of the warning",
      },
      {
        segments: [
          { text: "改札口[かいさつぐち]で、私[わたし]は 駅員[えきいん]に " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location first using 改札口",
      },
      {
        segments: [
          { text: "改札口[かいさつぐち]で、私[わたし]は 駅員[えきいん]から " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location first using 改札口, with から",
      },
      {
        segments: [
          { text: "私[わたし]が 改札[かいさつ]で 駅員[えきいん]に " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が instead of は to emphasize that I was the one warned",
      },
      {
        segments: [
          { text: "私[わたし]が 改札[かいさつ]で 駅員[えきいん]から " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が for the subject and から for the source",
      },
      {
        segments: [
          { text: "改札[かいさつ]で、私[わたし]が 駅員[えきいん]に " },
          { text: "注意[ちゅうい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location first, with が emphasizing the subject",
      },
    ],
  },
  {
    english: "Yesterday, I was introduced to the department manager by the teacher.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、教師[きょうし]から 部長[ぶちょう]に " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard passive sentence; から marks the introducer to avoid double に.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、教師[きょうし]に 部長[ぶちょう]に " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using に to mark the doer; grammatical though it repeats に.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 教師[きょうし]から 部長[ぶちょう]に " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase placed at the beginning.",
      },
      {
        segments: [
          { text: "私[わたし]は 教師[きょうし]から 昨日[きのう]、部長[ぶちょう]に " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Different placement of 昨日 after the introducer.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、部長[ぶちょう]に 教師[きょうし]から " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed order of the person introduced to and the introducer.",
      },
    ],
  },
  {
    english: "At the party, I was asked a question by an astronaut.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は パーティーで 宇宙飛行士[うちゅうひこうし]に " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic passive sentence with に marking the doer; past tense",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーで 宇宙飛行士[うちゅうひこうし]に 質問[しつもん]を" },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 質問をされた with を marking the question action as a noun",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーで 宇宙飛行士[うちゅうひこうし]から " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から instead of に for the source of the question",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーで 宇宙飛行士[うちゅうひこうし]から 質問[しつもん]を" },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から plus 質問をされた",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 宇宙飛行士[うちゅうひこうし]に " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronting the party location for emphasis",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 宇宙飛行士[うちゅうひこうし]に 質問[しつもん]を" },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronted location with 質問をされた",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 宇宙飛行士[うちゅうひこうし]から " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronted location with から marking the source",
      },
      {
        segments: [
          { text: "パーティーで、私[わたし]は 宇宙飛行士[うちゅうひこうし]から 質問[しつもん]を" },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronted location with から and 質問をされた",
      },
    ],
  },
  {
    english: "This morning, I was suddenly visited by my landlord.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、大家[おおや]さんに 急[きゅう]に " },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic passive sentence; treats 来られる as the passive verb stem for past-tense generation.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、大家[おおや]さんに 突然[とつぜん] " },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 突然 instead of 急に for “suddenly.”",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、急[きゅう]に 大家[おおや]さんに " },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Moves 急に before the agent phrase.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、突然[とつぜん] 大家[おおや]さんに " },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Moves 突然 before the agent phrase.",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 大家[おおや]さんに 急[きゅう]に " },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places the time expression first.",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 大家[おおや]さんに 突然[とつぜん] " },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression first, using 突然.",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 急[きゅう]に 大家[おおや]さんに " },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression first and 急に before the agent.",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 突然[とつぜん] 大家[おおや]さんに " },
          { text: "来[こ]られる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression first and 突然 before the agent.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、大家[おおや]さんに 急[きゅう]に " },
          { text: "訪[たず]ねられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 訪ねられる, a more literal passive for “was visited.”",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、大家[おおや]さんに 突然[とつぜん] " },
          { text: "訪[たず]ねられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Literal “visited” verb with 突然 for “suddenly.”",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 大家[おおや]さんに 急[きゅう]に " },
          { text: "訪[たず]ねられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Literal “visited” verb with the time expression first.",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 大家[おおや]さんに 突然[とつぜん] " },
          { text: "訪[たず]ねられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Literal “visited” verb, time expression first, using 突然.",
      },
    ],
  },
  {
    english: "This room was reserved yesterday.",
    answers: [
      {
        segments: [
          { text: "この 部屋[へや]は 昨日[きのう]、" },
          { text: "予約[よやく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with この部屋は as the topic.",
      },
      {
        segments: [
          { text: "昨日[きのう]、この 部屋[へや]は" },
          { text: "予約[よやく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed at the beginning.",
      },
      {
        segments: [
          { text: "この 部屋[へや]が 昨日[きのう]、" },
          { text: "予約[よやく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が to mark the room as the subject/focus.",
      },
      {
        segments: [
          { text: "昨日[きのう]、この 部屋[へや]が" },
          { text: "予約[よやく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time-first order with が marking the focused subject.",
      },
    ],
  },
  {
    english: "The new schedule was announced by the travel agency this morning.",
    answers: [
      {
        segments: [
          { text: "新[あたら]しい 予定[よてい]は 今朝[けさ]、旅行会社[りょこうがいしゃ]から " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using は and から to mark the announcing source/agent.",
      },
      {
        segments: [
          { text: "今朝[けさ]、新[あたら]しい 予定[よてい]は 旅行会社[りょこうがいしゃ]から " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression moved to the beginning.",
      },
      {
        segments: [
          { text: "新[あたら]しい 予定[よてい]が 今朝[けさ]、旅行会社[りょこうがいしゃ]から " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が to present the new schedule as newly reported information.",
      },
      {
        segments: [
          { text: "今朝[けさ]、新[あたら]しい 予定[よてい]が 旅行会社[りょこうがいしゃ]から " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が with the time expression first.",
      },
      {
        segments: [
          { text: "新[あたら]しい 予定[よてい]は 旅行会社[りょこうがいしゃ]から 今朝[けさ] " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent/source placed before the time expression.",
      },
      {
        segments: [
          { text: "新[あたら]しい 予定[よてい]が 旅行会社[りょこうがいしゃ]から 今朝[けさ] " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が with the agent/source before the time expression.",
      },
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]から 今朝[けさ]、新[あたら]しい 予定[よてい]が " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Source/agent phrase placed at the beginning; が sounds natural with this order.",
      },
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]から 新[あたら]しい 予定[よてい]が 今朝[けさ] " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Source/agent at the beginning with the time expression before the verb.",
      },
      {
        segments: [
          { text: "新[あたら]しい スケジュールは 今朝[けさ]、旅行会社[りょこうがいしゃ]から " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using the loanword スケジュール instead of 予定.",
      },
      {
        segments: [
          { text: "今朝[けさ]、新[あたら]しい スケジュールが 旅行会社[りょこうがいしゃ]から " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Loanword スケジュール with が and time expression first.",
      },
      {
        segments: [
          { text: "旅行会社[りょこうがいしゃ]から 今朝[けさ]、新[あたら]しい スケジュールが " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Loanword スケジュール with source/agent phrase first.",
      },
      {
        segments: [
          { text: "今朝[けさ]、旅行会社[りょこうがいしゃ]から 新[あたら]しい 予定[よてい]が " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time first, then source/agent, with が before the passive verb.",
      },
      {
        segments: [
          { text: "今朝[けさ]、旅行会社[りょこうがいしゃ]から 新[あたら]しい スケジュールが " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Loanword スケジュール with time first, then source/agent.",
      },
    ],
  },
  {
    english: "This hotel was introduced on TV yesterday.",
    answers: [
      {
        segments: [
          { text: "この ホテルは 昨日[きのう]、テレビで " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation with このホテル as the topic and テレビで as the medium",
      },
      {
        segments: [
          { text: "この ホテルが 昨日[きのう]、テレビで " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が to mark the hotel as the subject",
      },
      {
        segments: [
          { text: "昨日[きのう]、この ホテルは テレビで " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed at the beginning",
      },
      {
        segments: [
          { text: "昨日[きのう]、この ホテルが テレビで " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression first, with が for the subject",
      },
      {
        segments: [
          { text: "昨日[きのう] テレビで この ホテルは " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronting the time and medium before the topic",
      },
      {
        segments: [
          { text: "昨日[きのう] テレビで この ホテルが " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronting the time and medium, with が for the subject",
      },
      {
        segments: [
          { text: "この ホテルは 昨日[きのう]、テレビ番組[ばんぐみ]で " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using テレビ番組で to specify it was introduced on a TV program",
      },
      {
        segments: [
          { text: "昨日[きのう]、この ホテルは テレビ番組[ばんぐみ]で " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "テレビ番組で with time expression first",
      },
      {
        segments: [
          { text: "この ホテルが 昨日[きのう]、テレビ番組[ばんぐみ]で " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "テレビ番組で with が as the subject marker",
      },
      {
        segments: [
          { text: "昨日[きのう]、この ホテルが テレビ番組[ばんぐみ]で " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "テレビ番組で with time first and が as the subject marker",
      },
    ],
  },
  {
    english: "After my presentation, I was asked a lot of questions by everyone.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]で、みんなに たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic version with みんなに and 発表の後で",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]で、みんなから たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から for the doer/source instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]、みんなに たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 後 without で",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]、みんなから たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 後 without で and から",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]で、皆[みな]さんに たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 皆さん instead of みんな",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]で、皆[みな]さんから たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 皆さん and から",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]で、みんなに たくさんの 質問[しつもん]を " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using たくさんの質問をされる construction",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]で、みんなから たくさんの 質問[しつもん]を " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "たくさんの質問をされる with から",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]、みんなに たくさんの 質問[しつもん]を " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "たくさんの質問をされる with 後 without で",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]、みんなから たくさんの 質問[しつもん]を " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "たくさんの質問をされる with から and 後 without で",
      },
      {
        segments: [
          { text: "私[わたし]の 発表[はっぴょう]の 後[あと]で、私[わたし]は みんなに たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with time phrase first",
      },
      {
        segments: [
          { text: "私[わたし]の 発表[はっぴょう]の 後[あと]で、私[わたし]は みんなから たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with から",
      },
      {
        segments: [
          { text: "私[わたし]が 発表[はっぴょう]してから、私は みんなに たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表してから instead of 発表の後で",
      },
      {
        segments: [
          { text: "私[わたし]が 発表[はっぴょう]してから、私は みんなから たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表してから and から for the source",
      },
      {
        segments: [
          { text: "私[わたし]が 発表[はっぴょう]してから、私は みんなに たくさんの 質問[しつもん]を " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表してから with たくさんの質問をされる",
      },
      {
        segments: [
          { text: "私[わたし]が 発表[はっぴょう]してから、私は みんなから たくさんの 質問[しつもん]を " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表してから, から, and たくさんの質問をされる",
      },
      {
        segments: [
          { text: "私[わたし]が 発表[はっぴょう]した 後[あと]で、私は みんなに たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表した後で instead of noun phrase 発表の後で",
      },
      {
        segments: [
          { text: "私[わたし]が 発表[はっぴょう]した 後[あと]で、私は みんなから たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表した後で and から",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]で、みんなに 質問[しつもん]を たくさん " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Changing word order: 質問をたくさんされた",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の 発表[はっぴょう]の 後[あと]で、みんなから 質問[しつもん]を たくさん " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "質問をたくさんされた with から",
      },
      {
        segments: [
          { text: "私[わたし]の 発表[はっぴょう]が 終[お]わってから、私は みんなに たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表が終わってから",
      },
      {
        segments: [
          { text: "私[わたし]の 発表[はっぴょう]が 終[お]わってから、私は みんなから たくさん " },
          { text: "質問[しつもん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表が終わってから and から",
      },
      {
        segments: [
          { text: "私[わたし]の 発表[はっぴょう]が 終[お]わってから、私は みんなに たくさんの 質問[しつもん]を " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表が終わってから with たくさんの質問をされる",
      },
      {
        segments: [
          { text: "私[わたし]の 発表[はっぴょう]が 終[お]わってから、私は みんなから たくさんの 質問[しつもん]を " },
          { text: "される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 発表が終わってから, から, and たくさんの質問をされる",
      },
    ],
  },
  {
    english: "Yesterday, I was contacted by the hotel.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、ホテルから " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using から for the source of contact.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は ホテルから " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase placed at the beginning.",
      },
      {
        segments: [
          { text: "私[わたし]は ホテルから 昨日[きのう] " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places the source before the time adverb.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、ホテルに " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using に instead of から to mark the agent.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は ホテルに " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase at the beginning with に for the agent.",
      },
      {
        segments: [
          { text: "私[わたし]は ホテルに 昨日[きのう] " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Source/agent before the time phrase with に.",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう]、ホテルから " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が to mark the subject, as in answering who was contacted.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]が ホテルから " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase at the beginning with が as subject marker.",
      },
      {
        segments: [
          { text: "私[わたし]が ホテルから 昨日[きのう] " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Source before time, with が marking the subject.",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう]、ホテルに " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が for subject and に for the agent.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]が ホテルに " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, with が and に.",
      },
      {
        segments: [
          { text: "私[わたし]が ホテルに 昨日[きのう] " },
          { text: "連絡[れんらく]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent before time, with が as subject marker.",
      },
    ],
  },
  {
    english: "Yesterday, I was consulted by my younger sister about a present.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、妹[いもうと]に プレゼントについて " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with に marking the person who consulted me",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、妹[いもうと]から プレゼントについて " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using から instead of に for the source of the consultation",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、プレゼントについて 妹[いもうと]に " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Putting the topic of the consultation before the person",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、プレゼントについて 妹[いもうと]から " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic-first order with から marking the source",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 妹[いもうと]に プレゼントについて " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Starting with the time expression",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 妹[いもうと]から プレゼントについて " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time-first order with から marking the source",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、妹[いもうと]に プレゼントのことで " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using プレゼントのことで for 'about a present'",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、妹[いもうと]から プレゼントのことで " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using プレゼントのことで with から",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、プレゼントのことで 妹[いもうと]に " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "プレゼントのことで placed before the doer",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、プレゼントのことで 妹[いもうと]から " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "プレゼントのことで first, with から",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 妹[いもうと]に プレゼントのことで " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time-first order with プレゼントのことで",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 妹[いもうと]から プレゼントのことで " },
          { text: "相談[そうだん]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time-first order with プレゼントのことで and から",
      },
    ],
  },
  {
    english: "This new app was introduced at the meeting this morning.",
    hint: "app = アプリ",
    answers: [
      {
        segments: [
          { text: "この 新[あたら]しい アプリは 今朝[けさ]の 会議[かいぎ]で " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation using 今朝の会議で and topic は",
      },
      {
        segments: [
          { text: "今朝[けさ]の 会議[かいぎ]で、この 新[あたら]しい アプリは " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time/place phrase placed at the beginning",
      },
      {
        segments: [
          { text: "この 新[あたら]しい アプリが 今朝[けさ]の 会議[かいぎ]で " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が instead of は to mark the app as the focused subject",
      },
      {
        segments: [
          { text: "今朝[けさ]の 会議[かいぎ]で、この 新[あたら]しい アプリが " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Focused subject が with fronted time/place phrase",
      },
      {
        segments: [
          { text: "この 新[あたら]しい アプリは 今朝[けさ]、会議[かいぎ]で " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Separates 今朝 and 会議で instead of using 今朝の会議",
      },
      {
        segments: [
          { text: "今朝[けさ]、会議[かいぎ]で この 新[あたら]しい アプリは " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronted 今朝、会議で with topic は",
      },
      {
        segments: [
          { text: "この 新[あたら]しい アプリが 今朝[けさ]、会議[かいぎ]で " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Separated 今朝 and 会議で with focused subject が",
      },
      {
        segments: [
          { text: "今朝[けさ]、会議[かいぎ]で この 新[あたら]しい アプリが " },
          { text: "紹介[しょうかい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronted separated time/place phrase with focused subject が",
      },
    ],
  },
  {
    english: "Yesterday on the train, my shoes were stepped on by a child.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、電車[でんしゃ]で 子供[こども]に 私[わたし]の 靴[くつ]を " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural suffering passive with 私の靴を as the affected object",
      },
      {
        segments: [
          { text: "昨日[きのう]、電車[でんしゃ]で 私[わたし]の 靴[くつ]が 子供[こども]に " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Direct passive with 靴が as the subject",
      },
      {
        segments: [
          { text: "昨日[きのう]、電車[でんしゃ]で 私[わたし]の 靴[くつ]は 子供[こども]に " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using は to mark 'my shoes' as the topic",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、電車[でんしゃ]で 子供[こども]に 靴[くつ]を " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Suffering passive with 私は as the sentence subject",
      },
      {
        segments: [
          { text: "昨日[きのう]、電車[でんしゃ]の 中[なか]で 子供[こども]に 私[わたし]の 靴[くつ]を " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 電車の中で for 'on/in the train'",
      },
      {
        segments: [
          { text: "昨日[きのう]、電車[でんしゃ]の 中[なか]で 私[わたし]の 靴[くつ]が 子供[こども]に " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Direct passive with 電車の中で",
      },
      {
        segments: [
          { text: "昨日[きのう]、電車[でんしゃ]で 私[わたし]の 靴[くつ]を 子供[こども]に " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed before the agent in suffering passive",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で 昨日[きのう]、子供[こども]に 私[わたし]の 靴[くつ]を " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered location before time",
      },
      {
        segments: [
          { text: "昨日[きのう]、子供[こども]に 電車[でんしゃ]で 私[わたし]の 靴[くつ]を " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent placed earlier in the sentence",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 電車[でんしゃ]で 子供[こども]に 靴[くつ]を " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time before 私は in suffering passive",
      },
      {
        segments: [
          { text: "昨日[きのう]、電車[でんしゃ]の 中[なか]で 私[わたし]は 子供[こども]に 靴[くつ]を " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Suffering passive with 私は and 電車の中で",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、電車[でんしゃ]の 中[なか]で 子供[こども]に 靴[くつ]を " },
          { text: "踏[ふ]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Suffering passive with train interior phrase",
      },
    ],
  },
  {
    english: "Yesterday at the park, my bicycle was stolen.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 私[わたし]の 自転車[じてんしゃ]が " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic passive sentence with 自転車が as the subject",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、公園[こうえん]で 自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adversative passive with 私は as the affected person and 自転車を as the object",
      },
      {
        segments: [
          { text: "私[わたし]は 公園[こうえん]で 昨日[きのう]、自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adversative passive with location placed before time",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]の 自転車[じてんしゃ]が 公園[こうえん]で " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Same meaning with time first, then subject, then location",
      },
      {
        segments: [
          { text: "公園[こうえん]で 昨日[きのう]、私[わたし]の 自転車[じてんしゃ]が " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location-fronted word order",
      },
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 私[わたし]の 自転車[じてんしゃ]は " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using は to mark my bicycle as the topic",
      },
      {
        segments: [
          { text: "私[わたし]の 自転車[じてんしゃ]は 昨日[きのう]、公園[こうえん]で " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic-first word order with は",
      },
      {
        segments: [
          { text: "公園[こうえん]で 昨日[きのう]、私[わたし]の 自転車[じてんしゃ]は " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location-fronted word order with は",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]の 自転車[じてんしゃ]は 公園[こうえん]で " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time first, then topic, then location",
      },
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 私[わたし]の 自転車[じてんしゃ]が 誰[だれ]かに " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Including the implied agent 誰かに",
      },
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 誰[だれ]かに 私[わたし]の 自転車[じてんしゃ]が " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent 誰かに placed before the subject",
      },
      {
        segments: [
          { text: "私[わたし]の 自転車[じてんしゃ]が 昨日[きのう]、公園[こうえん]で 誰[だれ]かに " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject-first order with the implied agent included",
      },
      {
        segments: [
          { text: "公園[こうえん]で 昨日[きのう]、誰[だれ]かに 私[わたし]の 自転車[じてんしゃ]が " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location-fronted order with 誰かに as agent",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、公園[こうえん]で 自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past adversative passive with 私 as the affected person",
      },
      {
        segments: [
          { text: "私[わたし]は 公園[こうえん]で 昨日[きのう]、自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past adversative passive with location placed before time",
      },
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 私[わたし]は 自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time and location first, followed by affected-person topic",
      },
      {
        segments: [
          { text: "公園[こうえん]で 昨日[きのう]、私[わたし]は 自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location-fronted past adversative passive",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、公園[こうえん]で 誰[だれ]かに 自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adversative passive with the implied thief marked by 誰かに",
      },
      {
        segments: [
          { text: "私[わたし]は 誰[だれ]かに 昨日[きのう]、公園[こうえん]で 自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent 誰かに placed early after the topic",
      },
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 私[わたし]は 誰[だれ]かに 自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time/location first with agent included",
      },
      {
        segments: [
          { text: "公園[こうえん]で 昨日[きのう]、私[わたし]は 誰[だれ]かに 自転車[じてんしゃ]を " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location-fronted adversative passive with agent included",
      },
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 私[わたし]の 自転車[じてんしゃ]が " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic past passive sentence with 自転車が as subject",
      },
      {
        segments: [
          { text: "私[わたし]の 自転車[じてんしゃ]が 昨日[きのう]、公園[こうえん]で " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject-first word order with が",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]の 自転車[じてんしゃ]が 公園[こうえん]で " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time first, then subject, then location",
      },
      {
        segments: [
          { text: "公園[こうえん]で 昨日[きのう]、私[わたし]の 自転車[じてんしゃ]が " },
          { text: "盗[ぬす]まれる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location-fronted word order with が",
      },
    ],
  },
  {
    english: "After the exam, I was praised by the teacher.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 試験[しけん]の 後[あと]で、教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard wording with 試験の後で and agent marked by に",
      },
      {
        segments: [
          { text: "私[わたし]は テストの 後[あと]で、教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using テスト instead of 試験",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、私[わたし]は 教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "テストの 後[あと]で、私[わたし]は 教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, using テスト",
      },
      {
        segments: [
          { text: "私[わたし]は 試験[しけん]の 後[あと]、教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 後 without で",
      },
      {
        segments: [
          { text: "私[わたし]は テストの 後[あと]、教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using テスト and 後 without で",
      },
      {
        segments: [
          { text: "私[わたし]は 試験[しけん]の 後[あと]で、教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Agent/source marked with から instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は テストの 後[あと]で、教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using テスト with agent/source marked by から",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、私[わたし]は 教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, 後 without で, agent/source marked by から, past passive",
      },
      {
        segments: [
          { text: "テストの 後[あと]、私[わたし]は 教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, using テスト, 後 without で, agent/source marked by から",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、私[わたし]は 教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first with 後で and agent/source marked by から",
      },
      {
        segments: [
          { text: "テストの 後[あと]で、私[わたし]は 教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first with 後で, using テスト, agent/source marked by から",
      },
      {
        segments: [
          { text: "私[わたし]は 試験[しけん]の 後[あと]、教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject first, 後 without で, agent/source marked by から",
      },
      {
        segments: [
          { text: "私[わたし]は テストの 後[あと]、教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject first, using テスト, 後 without で, agent/source marked by から",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]、私[わたし]は 教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, 後 without で, agent marked by に",
      },
      {
        segments: [
          { text: "テストの 後[あと]、私[わたし]は 教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first, using テスト, 後 without で, agent marked by に",
      },
      {
        segments: [
          { text: "私[わたし]は 試験[しけん]の 後[あと]で、教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject first with 後で and agent marked by に, explicit past passive",
      },
      {
        segments: [
          { text: "私[わたし]は テストの 後[あと]で、教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject first with 後で, using テスト, explicit past passive",
      },
      {
        segments: [
          { text: "私[わたし]は 試験[しけん]の 後[あと]で、教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject first with 後で and agent/source marked by から, explicit past passive",
      },
      {
        segments: [
          { text: "私[わたし]は テストの 後[あと]で、教師[きょうし]から " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject first with 後で, using テスト, agent/source marked by から, explicit past passive",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、私[わたし]は 教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first with 後で and agent marked by に, explicit past passive",
      },
      {
        segments: [
          { text: "テストの 後[あと]で、私[わたし]は 教師[きょうし]に " },
          { text: "褒[ほ]められる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first with 後で, using テスト, agent marked by に, explicit past passive",
      },
    ],
  },
  {
    english: "I will be invited to the meeting by the department manager tomorrow.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 明日[あした]、部長[ぶちょう]に 会議[かいぎ]に " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard passive sentence with 部長 marked by に",
      },
      {
        segments: [
          { text: "私[わたし]は 明日[あした]、部長[ぶちょう]から 会議[かいぎ]に " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using から for the inviter/source instead of に",
      },
      {
        segments: [
          { text: "明日[あした]、私[わたし]は 部長[ぶちょう]に 会議[かいぎ]に " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression placed at the beginning",
      },
      {
        segments: [
          { text: "明日[あした]、私[わたし]は 部長[ぶちょう]から 会議[かいぎ]に " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time-first word order with から marking the inviter/source",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]に 明日[あした]の 会議[かいぎ]に " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Interprets it as being invited to tomorrow's meeting",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]から 明日[あした]の 会議[かいぎ]に " },
          { text: "招待[しょうたい]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Tomorrow's meeting with から marking the inviter/source",
      },
    ],
  },
  {
    english: "Yesterday during class, my secret was made public by Mika.",
    hint: "Mika = ミカ",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、授業中[じゅぎょうちゅう]に ミカさんに 私[わたし]の 秘密[ひみつ]が " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic passive with に marking Mika as the agent; past tense because it happened yesterday.",
      },
      {
        segments: [
          { text: "昨日[きのう]、授業中[じゅぎょうちゅう]に ミカさんによって 私[わたし]の 秘密[ひみつ]が " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses によって to mark the agent more explicitly/formally.",
      },
      {
        segments: [
          { text: "私[わたし]の 秘密[ひみつ]は 昨日[きのう]、授業中[じゅぎょうちゅう]に ミカさんに " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses は to topicalize 'my secret'.",
      },
      {
        segments: [
          { text: "私[わたし]の 秘密[ひみつ]は 昨日[きのう]、授業中[じゅぎょうちゅう]に ミカさんによって " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topicalized subject with formal agent marker によって.",
      },
      {
        segments: [
          { text: "昨日[きのう]、授業中[じゅぎょうちゅう]に 私[わたし]の 秘密[ひみつ]が ミカさんに " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered: subject before agent.",
      },
      {
        segments: [
          { text: "昨日[きのう]、授業中[じゅぎょうちゅう]に ミカさんに 私[わたし]の 秘密[ひみつ]が " },
          { text: "公表[こうひょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 公表された, a natural synonym for 'was made public'.",
      },
      {
        segments: [
          { text: "私[わたし]の 秘密[ひみつ]は 昨日[きのう]、授業中[じゅぎょうちゅう]に ミカさんに " },
          { text: "公表[こうひょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 公表された with は topic marking.",
      },
      {
        segments: [
          { text: "昨日[きのう]、授業[じゅぎょう]の 中[なか]で ミカさんに 私[わたし]の 秘密[ひみつ]が " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 授業の中で for 'during class'.",
      },
      {
        segments: [
          { text: "昨日[きのう]、授業[じゅぎょう]の 中[なか]で 私[わたし]の 秘密[ひみつ]が ミカさんに " },
          { text: "発表[はっぴょう]される", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 授業の中で with subject placed before agent.",
      },
    ],
  },
];
