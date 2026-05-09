import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Yesterday at karaoke, I was made to sing an old song by my friends.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] カラオケで、私[わたし]は 友達[ともだち]に 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order; uses the contracted causative-passive form 歌わされる.",
      },
      {
        segments: [
          { text: "昨日[きのう] カラオケで、私[わたし]は 私[わたし]の 友達[ともだち]に 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicitly says “my friends” with 私の友達.",
      },
      {
        segments: [
          { text: "昨日[きのう] カラオケで、私[わたし]は 友達[ともだち]に 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses the uncontracted causative-passive form 歌わせられる.",
      },
      {
        segments: [
          { text: "昨日[きのう] カラオケで、私[わたし]は 私[わたし]の 友達[ともだち]に 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit “my friends” plus uncontracted causative-passive form.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は カラオケで 友達[ともだち]に 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Moves 私は before the location phrase.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は カラオケで 友達[ともだち]に 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Moves 私は before the location phrase; uncontracted form.",
      },
      {
        segments: [
          { text: "昨日[きのう]、カラオケで 友達[ともだち]に 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits the explicit subject; natural when context identifies the speaker.",
      },
      {
        segments: [
          { text: "昨日[きのう]、カラオケで 友達[ともだち]に 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits subject; uncontracted causative-passive form.",
      },
      {
        segments: [
          { text: "昨日[きのう]、友達[ともだち]に カラオケで 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places the causer before the location; subject omitted.",
      },
      {
        segments: [
          { text: "昨日[きのう]、友達[ともだち]に カラオケで 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Causer before location; subject omitted; uncontracted form.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 友達[ともだち]に カラオケで 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Causer before location with explicit subject.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 友達[ともだち]に カラオケで 古[ふる]い 歌[うた]を " },
          { text: "歌[うた]わせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Causer before location with explicit subject; uncontracted form.",
      },
      {
        segments: [
          { text: "昨日[きのう] カラオケで、私[わたし]は 友達[ともだち]に 昔[むかし]の 歌[うた]を " },
          { text: "歌[うた]わされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 昔の歌 instead of 古い歌.",
      },
      {
        segments: [
          { text: "昨日[きのう] カラオケで、私[わたし]は 友達[ともだち]に 昔[むかし]の 歌[うた]を " },
          { text: "歌[うた]わせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 昔の歌 and the uncontracted causative-passive form.",
      },
      {
        segments: [
          { text: "昨日[きのう]、カラオケで 友達[ともだち]に 昔[むかし]の 歌[うた]を " },
          { text: "歌[うた]わされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; uses 昔の歌.",
      },
      {
        segments: [
          { text: "昨日[きのう]、カラオケで 友達[ともだち]に 昔[むかし]の 歌[うた]を " },
          { text: "歌[うた]わせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; uses 昔の歌 and uncontracted form.",
      },
    ],
  },
  {
    english: "During the meeting, I was made to explain the mistake by the department manager.",
    answers: [
      {
        segments: [
          { text: "会議[かいぎ]中[ちゅう]に、私[わたし]は 部長[ぶちょう]に 間違[まちが]いを " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard wording with 会議中に and 間違いを",
      },
      {
        segments: [
          { text: "会議[かいぎ]中[ちゅう]、私[わたし]は 部長[ぶちょう]に 間違[まちが]いを " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting に after 会議中",
      },
      {
        segments: [
          { text: "私[わたし]は 会議[かいぎ]中[ちゅう]に 部長[ぶちょう]に 間違[まちが]いを " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Starting with 私は, then time phrase",
      },
      {
        segments: [
          { text: "部長[ぶちょう]に、私[わたし]は 会議[かいぎ]中[ちゅう]に 間違[まちが]いを " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronting the causer 部長に",
      },
      {
        segments: [
          { text: "会議[かいぎ]の 間[あいだ]に、私[わたし]は 部長[ぶちょう]に 間違[まちが]いを " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 会議の間に for during the meeting",
      },
      {
        segments: [
          { text: "会議[かいぎ]で、私[わたし]は 部長[ぶちょう]に 間違[まちが]いを " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 会議で to mean in/during the meeting",
      },
      {
        segments: [
          { text: "会議[かいぎ]中[ちゅう]に、私[わたし]は 部長[ぶちょう]に 間違[まちが]いについて " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using について to mean explain about the mistake",
      },
      {
        segments: [
          { text: "会議[かいぎ]で、私[わたし]は 部長[ぶちょう]に 間違[まちが]いについて " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Combining 会議で with について",
      },
      {
        segments: [
          { text: "会議[かいぎ]中[ちゅう]に、部長[ぶちょう]に 間違[まちが]いを " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting the subject 私 when clear from context",
      },
      {
        segments: [
          { text: "会議[かいぎ]の 最中[さいちゅう]に、私[わたし]は 部長[ぶちょう]に 間違[まちが]いを " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 会議の最中に for during/in the middle of the meeting",
      },
      {
        segments: [
          { text: "会議[かいぎ]中[ちゅう]に、私[わたし]は 部長[ぶちょう]に 間違[まちが]いについての 説明[せつめい]を " },
          { text: "させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using the noun 説明 with させられる",
      },
      {
        segments: [
          { text: "会議[かいぎ]で、私[わたし]は 部長[ぶちょう]に 間違[まちが]いについての 説明[せつめい]を " },
          { text: "させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Noun 説明をする pattern with 会議で",
      },
      {
        segments: [
          { text: "会議[かいぎ]の 間[あいだ]に、部長[ぶちょう]に 間違[まちが]いについて " },
          { text: "説明[せつめい]させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting 私 and using 会議の間に with について",
      },
      {
        segments: [
          { text: "会議[かいぎ]中[ちゅう]に、部長[ぶちょう]に 間違[まちが]いについての 説明[せつめい]を " },
          { text: "させられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting 私 with noun 説明をさせられる pattern",
      },
    ],
  },
  {
    english: "This morning, I was made to carry heavy baggage by the station attendant.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 駅員[えきいん]に 重[おも]い 荷物[にもつ]を " },
          { text: "運[はこ]ばせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order; uses the full causative-passive form 運ばせられる",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、駅員[えきいん]に 重[おも]い 荷物[にもつ]を " },
          { text: "運[はこ]ばせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase after 私は",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 重[おも]い 荷物[にもつ]を 駅員[えきいん]に " },
          { text: "運[はこ]ばせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places the object before the causer for emphasis",
      },
      {
        segments: [
          { text: "私[わたし]は 駅員[えきいん]に 今朝[けさ] 重[おも]い 荷物[にもつ]を " },
          { text: "運[はこ]ばせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places the causer before the time phrase",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 駅員[えきいん]に 重[おも]い 荷物[にもつ]を " },
          { text: "持[も]たせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 持つ for carrying/holding baggage instead of 運ぶ",
      },
      {
        segments: [
          { text: "今朝[けさ]、駅員[えきいん]に 重[おも]い 荷物[にもつ]を " },
          { text: "運[はこ]ばせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私は; the subject is understood from context",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]が 駅員[えきいん]に 重[おも]い 荷物[にもつ]を " },
          { text: "運[はこ]ばせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses が to focus on 私 as the person who was made to carry the baggage",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 駅員[えきいん]に 重[おも]い 荷物[にもつ]を " },
          { text: "運[はこ]ばせられた", blank: true },
        ],
        notes: "Standard word order with the past causative-passive form written directly",
      },
    ],
  },
  {
    english: "Yesterday at home, I was made to clean my younger brother's dirty room by my mother.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] 家[いえ]で、私[わたし]は 母[はは]に 弟[おとうと]の 汚[きたな]い 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Standard wording with 母 and 掃除させられた",
      },
      {
        segments: [
          { text: "昨日[きのう] 家[いえ]で、私[わたし]は 母[はは]に 弟[おとうと]の 汚[きたな]い 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Using 家[いえ]で instead of 家で",
      },
      {
        segments: [
          { text: "昨日[きのう] 家[いえ]で、私[わたし]は 母[はは]に 弟[おとうと]の 汚[きたな]い 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Conversational お母さん instead of 母",
      },
      {
        segments: [
          { text: "昨日[きのう] 家[いえ]で、私[わたし]は 母[はは]に 弟[おとうと]の 汚[よご]れた 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Using 汚れた部屋 instead of 汚い部屋",
      },
      {
        segments: [
          { text: "昨日[きのう] 家[いえ]で、私[わたし]は 母[はは]に 弟[おとうと]の 汚[きたな]い 部屋[へや]の 掃除[そうじ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Using 部屋の掃除をする construction",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 家[いえ]で 母[はは]に 弟[おとうと]の 汚[きたな]い 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Reordered: 私は before location",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] 家[いえ]で 母[はは]に 弟[おとうと]の 汚[きたな]い 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Starting with 私は; pronoun drop will be auto-generated",
      },
      {
        segments: [
          { text: "昨日[きのう] 家[いえ]で、母[はは]に 私[わたし]は 弟[おとうと]の 汚[きたな]い 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Topicalized causer phrase before subject",
      },
      {
        segments: [
          { text: "昨日[きのう]、母[はは]に 家[いえ]で 弟[おとうと]の 汚[きたな]い 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Subject omitted naturally",
      },
      {
        segments: [
          { text: "昨日[きのう] 家[いえ]で、私[わたし]は 母[はは]に 弟[おとうと]の 汚[きたな]い 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Conversational: うち and お母さん",
      },
      {
        segments: [
          { text: "昨日[きのう] 家[いえ]で、私[わたし]は 母[はは]に 汚[よご]れた 弟[おとうと]の 部屋[へや]を " },
          { text: "掃除[そうじ]させられた", blank: true },
        ],
        notes: "Using 汚れた before 弟の部屋 as a whole",
      },
    ],
  },
  {
    english: "This morning, I was made to wait at the bus stop for one hour by my friend.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 友達[ともだち]に バス停[てい]で 一時間[いちじかん] " },
          { text: "待[ま]たせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard causative-passive form 待たせられる, with agent marked by に",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 友達[ともだち]に バス停[てい]で 一時間[いちじかん] " },
          { text: "待[ま]たされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shortened causative-passive form 待たされる, commonly used with Godan verbs",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 友達[ともだち]に 一時間[いちじかん] バス停[てい]で " },
          { text: "待[ま]たせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time duration placed before the location",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 友達[ともだち]に 一時間[いちじかん] バス停[てい]で " },
          { text: "待[ま]たされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shortened causative-passive with time duration before the location",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は バス停[てい]で 友達[ともだち]に 一時間[いちじかん] " },
          { text: "待[ま]たせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location placed before the agent",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は バス停[てい]で 友達[ともだち]に 一時間[いちじかん] " },
          { text: "待[ま]たされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shortened causative-passive with location before the agent",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、友達[ともだち]に バス停[てい]で 一時間[いちじかん] " },
          { text: "待[ま]たせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic 私は placed before the time expression",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、友達[ともだち]に バス停[てい]で 一時間[いちじかん] " },
          { text: "待[ま]たされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shortened causative-passive with topic before the time expression",
      },
      {
        segments: [
          { text: "今朝[けさ]、バス停[てい]で 私[わたし]は 友達[ともだち]に 一時間[いちじかん] " },
          { text: "待[ま]たせられる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location fronted near the beginning",
      },
      {
        segments: [
          { text: "今朝[けさ]、バス停[てい]で 私[わたし]は 友達[ともだち]に 一時間[いちじかん] " },
          { text: "待[ま]たされる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shortened causative-passive with location fronted near the beginning",
      },
    ],
  },
  {
    english: "Yesterday at the restaurant, I was made to eat spicy curry by my senior.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] レストランで、私[わたし]は 先輩[せんぱい]に 辛[から]い カレーを " },
          { text: "食[た]べさせられた", blank: true },
        ],
        notes: "Standard word order with past causative-passive form",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は レストランで 先輩[せんぱい]に 辛[から]い カレーを " },
          { text: "食[た]べさせられた", blank: true },
        ],
        notes: "Time first, then 私は before the location",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] レストランで 先輩[せんぱい]に 辛[から]い カレーを " },
          { text: "食[た]べさせられた", blank: true },
        ],
        notes: "Starting with 私は; pronoun-dropping can be auto-generated",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランで、先輩[せんぱい]に 辛[から]い カレーを " },
          { text: "食[た]べさせられた", blank: true },
        ],
        notes: "Natural pronoun omission",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランで、私[わたし]は 辛[から]い カレーを 先輩[せんぱい]に " },
          { text: "食[た]べさせられた", blank: true },
        ],
        notes: "Object placed before the agent",
      },
      {
        segments: [
          { text: "昨日[きのう]、レストランで 先輩[せんぱい]に 私[わたし]は 辛[から]い カレーを " },
          { text: "食[た]べさせられた", blank: true },
        ],
        notes: "Agent placed before the topic for emphasis",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランで、私[わたし]が 先輩[せんぱい]に 辛[から]い カレーを " },
          { text: "食[た]べさせられた", blank: true },
        ],
        notes: "Using が to mark the forced person; natural when emphasizing who was made to eat",
      },
      {
        segments: [
          { text: "昨日[きのう]、レストランで 私[わたし]が 先輩[せんぱい]に 辛[から]い カレーを " },
          { text: "食[た]べさせられた", blank: true },
        ],
        notes: "Using が with a slightly different time/location punctuation",
      },
    ],
  },
  {
    english: "Yesterday at the graduation ceremony, I was made to wear a pink kimono by my aunt.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、卒業式[そつぎょうしき]で、私[わたし]は 叔母[おば]に ピンクの 着物[きもの]を " },
          { text: "着[き]させられた", blank: true },
        ],
        notes: "Basic word order with 卒業式で and 叔母[おば]に marking the person who forced the action",
      },
      {
        segments: [
          { text: "昨日[きのう]の 卒業式[そつぎょうしき]で、私[わたし]は 叔母[おば]に ピンクの 着物[きもの]を " },
          { text: "着[き]させられた", blank: true },
        ],
        notes: "Using 昨日の卒業式で to mean 'at yesterday's graduation ceremony'",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 卒業式[そつぎょうしき]で 叔母[おば]に ピンクの 着物[きもの]を " },
          { text: "着[き]させられた", blank: true },
        ],
        notes: "Subject placed before the location phrase",
      },
      {
        segments: [
          { text: "昨日[きのう]、叔母[おば]に 卒業式[そつぎょうしき]で ピンクの 着物[きもの]を " },
          { text: "着[き]させられた", blank: true },
        ],
        notes: "Initial 私は omitted naturally; causer phrase placed early",
      },
      {
        segments: [
          { text: "昨日[きのう]、卒業式[そつぎょうしき]で、叔母[おば]に ピンクの 着物[きもの]を " },
          { text: "着[き]させられた", blank: true },
        ],
        notes: "Initial 私は omitted with standard time/location order",
      },
    ],
  },
  {
    english: "Yesterday at the company, I was made to make photocopies of documents by my colleague for two hours.",
    hint: "photocopy = コピー",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] 会社[かいしゃ]で、私[わたし]は 同僚[どうりょう]に 二時間[にじかん] 書類[しょるい]を コピー" },
          { text: "させられた", blank: true },
        ],
        notes: "Uses コピーする in the causative-passive form.",
      },
      {
        segments: [
          { text: "昨日[きのう] 会社[かいしゃ]で、私[わたし]は 同僚[どうりょう]に 書類[しょるい]を 二時間[にじかん] コピー" },
          { text: "させられた", blank: true },
        ],
        notes: "Moves the duration after the object.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 会社[かいしゃ]で 同僚[どうりょう]に 二時間[にじかん] 書類[しょるい]を コピー" },
          { text: "させられた", blank: true },
        ],
        notes: "Places 私は before the location phrase.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] 会社[かいしゃ]で 同僚[どうりょう]に 二時間[にじかん] 書類[しょるい]を コピー" },
          { text: "させられた", blank: true },
        ],
        notes: "Starts with the subject pronoun.",
      },
      {
        segments: [
          { text: "昨日[きのう] 会社[かいしゃ]で、私[わたし]は 二時間[にじかん] 同僚[どうりょう]に 書類[しょるい]を コピー" },
          { text: "させられた", blank: true },
        ],
        notes: "Places the duration before the causer phrase.",
      },
      {
        segments: [
          { text: "昨日[きのう]、会社[かいしゃ]で 同僚[どうりょう]に 私[わたし]は 二時間[にじかん] 書類[しょるい]を コピー" },
          { text: "させられた", blank: true },
        ],
        notes: "Topicalizes 私は after the causer phrase; still natural in context.",
      },
      {
        segments: [
          { text: "昨日[きのう] 会社[かいしゃ]で、私[わたし]は 会社[かいしゃ]の 同僚[どうりょう]に 二時間[にじかん] 書類[しょるい]を コピー" },
          { text: "させられた", blank: true },
        ],
        notes: "Specifies 'my colleague at the company' as 会社の同僚.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 会社[かいしゃ]の 同僚[どうりょう]に 会社[かいしゃ]で 二時間[にじかん] 書類[しょるい]を コピー" },
          { text: "させられた", blank: true },
        ],
        notes: "Uses 会社の同僚 and places the location after the causer.",
      },
      {
        segments: [
          { text: "昨日[きのう]、会社[かいしゃ]で 私[わたし]は 同僚[どうりょう]に 書類[しょるい]を コピー" },
          { text: "させられた", blank: true },
          { text: "。二時間[にじかん]です" },
        ],
        notes: "Splits off the duration into a second sentence; less concise but natural as an answer to how long.",
      },
    ],
  },
  {
    english: "At yesterday's company party, I was made to dance by the department manager.",
    hint: "company party = 会社 (かいしゃ)のパーティー",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] 会社[かいしゃ]の パーティーで、私[わたし]は 部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Full causative-passive form 踊らせられた",
      },
      {
        segments: [
          { text: "昨日[きのう]の 会社[かいしゃ]の パーティーで、私[わたし]は 部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Using の to specify 'yesterday's company party'",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] 会社[かいしゃ]の パーティーで、部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Subject placed at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]の 会社[かいしゃ]の パーティーで、部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Subject first with 昨日の会社のパーティー",
      },
      {
        segments: [
          { text: "昨日[きのう]、会社[かいしゃ]の パーティーで、私[わたし]は 部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Comma after 昨日 for clearer separation",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の パーティーで、私[わたし]は 昨日[きのう] 部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Location first, with yesterday placed before the causer",
      },
      {
        segments: [
          { text: "昨日[きのう]の 会社[かいしゃ]の パーティーでは、私[わたし]は 部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Using では to mark the company party as the setting/topic",
      },
      {
        segments: [
          { text: "昨日[きのう] 会社[かいしゃ]の パーティーでは、私[わたし]は 部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Using では with separate time expression 昨日",
      },
      {
        segments: [
          { text: "昨日[きのう] 会社[かいしゃ]の パーティーで、私[わたし]が 部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Using が to emphasize that I was the one made to dance",
      },
      {
        segments: [
          { text: "昨日[きのう]の 会社[かいしゃ]の パーティーで、私[わたし]が 部長[ぶちょう]に " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Using が with 昨日の会社のパーティー",
      },
      {
        segments: [
          { text: "昨日[きのう] 会社[かいしゃ]の パーティーで、部長[ぶちょう]に 私[わたし]が " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Causer placed before the subject with が",
      },
      {
        segments: [
          { text: "昨日[きのう]の 会社[かいしゃ]の パーティーで、部長[ぶちょう]に 私[わたし]が " },
          { text: "踊[おど]らせられた", blank: true },
        ],
        notes: "Causer before subject with 昨日の会社のパーティー",
      },
    ],
  },
  {
    english: "Yesterday, I was made to take care of my younger sister's baby by my parents all day long.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 私[わたし]の 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Basic translation with 世話をする in causative-passive past.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Omits 私の before 両親; 両親 naturally means my parents.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 私[わたし]の 親[おや]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Uses 親 instead of 両親 for parents.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 親[おや]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Uses 親 and omits 私の, which is natural in context.",
      },
      {
        segments: [
          { text: "昨日[きのう] 一日中[いちにちじゅう]、私[わたし]は 両親[りょうしん]に 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Moves 一日中 next to 昨日 for emphasis on the duration yesterday.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 両親[りょうしん]に 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を 一日中[いちにちじゅう] " },
          { text: "させられた", blank: true },
        ],
        notes: "Places 一日中 right before the causative-passive verb.",
      },
      {
        segments: [
          { text: "昨日[きのう]、一日中[いちにちじゅう] 私[わたし]は 両親[りょうしん]に 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Fronts 一日中 after 昨日.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]が 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Uses が instead of は to emphasize that I was the one made to do it.",
      },
      {
        segments: [
          { text: "昨日[きのう]は、私[わたし]は 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Uses 昨日は to topicalize yesterday.",
      },
      {
        segments: [
          { text: "昨日[きのう]は、私[わたし]が 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Combines 昨日は with 私が for focus on the person forced.",
      },
      {
        segments: [
          { text: "昨日[きのう]、両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Drops the subject 私は, which is natural from context after the time expression.",
      },
      {
        segments: [
          { text: "昨日[きのう]、親[おや]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Drops the subject and uses 親 instead of 両親.",
      },
      {
        segments: [
          { text: "昨日[きのう] 一日中[いちにちじゅう]、両親[りょうしん]に 妹[いもうと]の 赤[あか]ちゃんの 世話[せわ]を " },
          { text: "させられた", blank: true },
        ],
        notes: "Drops the subject and places 一日中 immediately after 昨日.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Uses the natural expression 面倒を見る for taking care of someone.",
      },
      {
        segments: [
          { text: "昨日[きのう]、両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Uses 面倒を見る and drops the subject.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 親[おや]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Uses 面倒を見る with 親 instead of 両親.",
      },
      {
        segments: [
          { text: "昨日[きのう] 一日中[いちにちじゅう]、私[わたし]は 両親[りょうしん]に 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Moves 一日中 near 昨日 with 面倒を見る.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 両親[りょうしん]に 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を 一日中[いちにちじゅう] " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Places 一日中 just before the causative-passive verb with 面倒を見る.",
      },
      {
        segments: [
          { text: "昨日[きのう]は、私[わたし]は 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Topicalizes 昨日は with 面倒を見る.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]が 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Uses が instead of は with 面倒を見る.",
      },
      {
        segments: [
          { text: "昨日[きのう]は、私[わたし]が 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Combines 昨日は and 私が with 面倒を見る.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 私[わたし]の 両親[りょうしん]に 一日中[いちにちじゅう] 妹[いもうと]の 赤[あか]ちゃんの 面倒[めんどう]を " },
          { text: "見[み]させられた", blank: true },
        ],
        notes: "Explicitly says 私の両親 with 面倒を見る.",
      },
    ],
  },
  {
    english: "At the convenience store last night, I was made to pay for my friend's ice cream.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、コンビニで、私[わたし]は 友達[ともだち]に 友達[ともだち]の アイスクリーム代[だい]を " },
          { text: "払[はら]わされた", blank: true },
        ],
        notes: "Basic version; the friend made me pay for their ice cream.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、コンビニで、私[わたし]は 友達[ともだち]に 友達[ともだち]の アイスクリーム代[だい]を " },
          { text: "払[はら]わされた", blank: true },
        ],
        notes: "Uses 昨夜 for 'last night'.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、コンビニで、私[わたし]は 友達[ともだち]に アイスクリーム代[だい]を " },
          { text: "払[はら]わされた", blank: true },
        ],
        notes: "Omits the repeated 'friend's' before ice cream cost; context makes it clear.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、コンビニで、私[わたし]は 友達[ともだち]に アイスクリーム代[だい]を " },
          { text: "払[はら]わされた", blank: true },
        ],
        notes: "Uses 昨夜 and omits possessive because the payer/causer makes it clear.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、私[わたし]は コンビニで 友達[ともだち]に 友達[ともだち]の アイスクリーム代[だい]を " },
          { text: "払[はら]わされた", blank: true },
        ],
        notes: "Moves 私は before the location phrase.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、私[わたし]は コンビニで 友達[ともだち]に 友達[ともだち]の アイスクリーム代[だい]を " },
          { text: "払[はら]わされた", blank: true },
        ],
        notes: "Uses 昨夜 with 私は before the location phrase.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、コンビニで、私[わたし]は 友達[ともだち]に 友達[ともだち]の アイスクリームの お金[かね]を " },
          { text: "払[はら]わされた", blank: true },
        ],
        notes: "Uses お金 instead of 代 for the amount paid.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、コンビニで、私[わたし]は 友達[ともだち]に 友達[ともだち]の アイスクリームの お金[かね]を " },
          { text: "払[はら]わされた", blank: true },
        ],
        notes: "Uses 昨夜 and お金 instead of 代.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、コンビニで、私[わたし]は 友達[ともだち]に 友達[ともだち]の アイスクリーム代[だい]を " },
          { text: "払[はら]わせられた", blank: true },
        ],
        notes: "Uses the longer causative-passive form 払わせられた instead of contracted 払わされた.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、コンビニで、私[わたし]は 友達[ともだち]に 友達[ともだち]の アイスクリーム代[だい]を " },
          { text: "払[はら]わせられた", blank: true },
        ],
        notes: "Uses 昨夜 and the longer form 払わせられた.",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、コンビニで、私[わたし]は 友達[ともだち]に アイスクリーム代[だい]を " },
          { text: "払[はら]わせられた", blank: true },
        ],
        notes: "Longer causative-passive form with possessive omitted.",
      },
      {
        segments: [
          { text: "昨夜[ゆうべ]、コンビニで、私[わたし]は 友達[ともだち]に アイスクリーム代[だい]を " },
          { text: "払[はら]わせられた", blank: true },
        ],
        notes: "Uses 昨夜, possessive omitted, and the longer form 払わせられた.",
      },
    ],
  },
  {
    english: "Last week, I was made to run five kilometers by my strict karate teacher.",
    answers: [
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 空手[からて]の 厳[きび]しい 教師[きょうし]に 五[ご]キロ " },
          { text: "走[はし]らされた", blank: true },
        ],
        notes: "Most natural short causative-passive form; 空手の厳しい先生",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 空手[からて]の 厳[きび]しい 教師[きょうし]に 五[ご]キロ " },
          { text: "走[はし]らせられた", blank: true },
        ],
        notes: "Long causative-passive form instead of shortened 走らされた",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 厳[きび]しい 空手[からて]の 教師[きょうし]に 五[ご]キロ " },
          { text: "走[はし]らされた", blank: true },
        ],
        notes: "Uses 厳しい空手の先生 word order",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 厳[きび]しい 空手[からて]の 教師[きょうし]に 五[ご]キロ " },
          { text: "走[はし]らせられた", blank: true },
        ],
        notes: "Uses 厳しい空手の先生 with long causative-passive form",
      },
      {
        segments: [
          { text: "私[わたし]は 先週[せんしゅう]、空手[からて]の 厳[きび]しい 教師[きょうし]に 五[ご]キロ " },
          { text: "走[はし]らされた", blank: true },
        ],
        notes: "Starts with 私は before the time phrase; short form",
      },
      {
        segments: [
          { text: "私[わたし]は 先週[せんしゅう]、空手[からて]の 厳[きび]しい 教師[きょうし]に 五[ご]キロ " },
          { text: "走[はし]らせられた", blank: true },
        ],
        notes: "Starts with 私は; long form",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、空手[からて]の 厳[きび]しい 教師[きょうし]に、私[わたし]は 五[ご]キロ " },
          { text: "走[はし]らされた", blank: true },
        ],
        notes: "Places the causer phrase before 私は; short form",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、空手[からて]の 厳[きび]しい 教師[きょうし]に、私[わたし]は 五[ご]キロ " },
          { text: "走[はし]らせられた", blank: true },
        ],
        notes: "Places the causer phrase before 私は; long form",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 空手[からて]の 厳[きび]しい 教師[きょうし]に 五[ご]キロメートル " },
          { text: "走[はし]らされた", blank: true },
        ],
        notes: "Uses キロメートル instead of キロ; short form",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 空手[からて]の 厳[きび]しい 教師[きょうし]に 五[ご]キロメートル " },
          { text: "走[はし]らせられた", blank: true },
        ],
        notes: "Uses キロメートル instead of キロ; long form",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 厳[きび]しい 空手[からて]の 教師[きょうし]に 五[ご]キロメートル " },
          { text: "走[はし]らされた", blank: true },
        ],
        notes: "Uses キロメートル and 厳しい空手の先生; short form",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 厳[きび]しい 空手[からて]の 教師[きょうし]に 五[ご]キロメートル " },
          { text: "走[はし]らせられた", blank: true },
        ],
        notes: "Uses キロメートル and 厳しい空手の先生; long form",
      },
    ],
  },
  {
    english: "At the hospital reception desk this morning, I was made to write my name and phone number.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で、私[わたし]は 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Basic translation using the contracted causative-passive form 書かされた.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で、私[わたし]は 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かせられた", blank: true },
        ],
        notes: "Uses the longer causative-passive form 書かせられた.",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 病院[びょういん]の 受付[うけつけ]で 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Moves 私は before the location phrase.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で、私[わたし]は 受付[うけつけ]の 人[ひと]に 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Specifies the implied agent as the person at reception.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で、私[わたし]は 受付[うけつけ]の 人[ひと]に 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かせられた", blank: true },
        ],
        notes: "Specifies the agent and uses the longer causative-passive form.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で、私[わたし]は 名前[なまえ]と 電話[でんわ]の 番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Uses 電話の番号 instead of 電話番号.",
      },
      {
        segments: [
          { text: "病院[びょういん]の 受付[うけつけ]で 今朝[けさ]、私[わたし]は 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Fronts the location phrase before 今朝.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Omits the subject 私は; natural when the speaker is clear.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かせられた", blank: true },
        ],
        notes: "Omits the subject and uses the longer causative-passive form.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]で、私[わたし]は 受付[うけつけ]の 人[ひと]に 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Uses 病院で with the receptionist as the agent.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]で、私[わたし]は 受付[うけつけ]の 人[ひと]に 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かせられた", blank: true },
        ],
        notes: "Uses 病院で with specified agent and longer causative-passive form.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で、私[わたし]は 名前[なまえ]と 電話[でんわ]番号[ばんごう]を 受付[うけつけ]の 人[ひと]に " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Places the agent phrase after the object.",
      },
      {
        segments: [
          { text: "今朝[けさ]、受付[うけつけ]で、私[わたし]は 名前[なまえ]と 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Shorter version using 受付で when the hospital context is understood.",
      },
      {
        segments: [
          { text: "今朝[けさ]、病院[びょういん]の 受付[うけつけ]で、私[わたし]は 名前[なまえ]、それから 電話[でんわ]番号[ばんごう]を " },
          { text: "書[か]かされた", blank: true },
        ],
        notes: "Uses それから instead of と to connect the two items.",
      },
    ],
  },
  {
    english: "At the beauty parlor yesterday, I was made to choose a strange hairstyle by my mother.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、美容院[びよういん]で、私[わたし]は 母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばせられた", blank: true },
        ],
        notes: "Basic word order using the full causative-passive form 選ばせられた.",
      },
      {
        segments: [
          { text: "昨日[きのう]、美容院[びよういん]で、私[わたし]は 母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばされた", blank: true },
        ],
        notes: "Basic word order using the contracted causative-passive form 選ばされた.",
      },
      {
        segments: [
          { text: "昨日[きのう]、美容院[びよういん]で、母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばせられた", blank: true },
        ],
        notes: "Subject 私 is omitted; natural because the passive perspective implies the speaker.",
      },
      {
        segments: [
          { text: "昨日[きのう]、美容院[びよういん]で、母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばされた", blank: true },
        ],
        notes: "Subject omitted with the contracted causative-passive form.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 美容院[びよういん]で 母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばせられた", blank: true },
        ],
        notes: "Subject placed before the location phrase.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 美容院[びよういん]で 母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばされた", blank: true },
        ],
        notes: "Subject before location phrase with contracted causative-passive.",
      },
      {
        segments: [
          { text: "昨日[きのう]、母[はは]に 美容院[びよういん]で 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばせられた", blank: true },
        ],
        notes: "Agent phrase placed before the location phrase; subject omitted.",
      },
      {
        segments: [
          { text: "昨日[きのう]、母[はは]に 美容院[びよういん]で 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばされた", blank: true },
        ],
        notes: "Agent before location phrase with contracted causative-passive; subject omitted.",
      },
      {
        segments: [
          { text: "美容院[びよういん]で、昨日[きのう]、私[わたし]は 母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばせられた", blank: true },
        ],
        notes: "Location placed first for emphasis.",
      },
      {
        segments: [
          { text: "美容院[びよういん]で、昨日[きのう]、私[わたし]は 母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばされた", blank: true },
        ],
        notes: "Location placed first with contracted causative-passive.",
      },
      {
        segments: [
          { text: "昨日[きのう]、美容院[びよういん]で、私[わたし]は 母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばせられた", blank: true },
        ],
        notes: "Uses お母さん instead of 母; natural if referring to one's mother in a more familiar way.",
      },
      {
        segments: [
          { text: "昨日[きのう]、美容院[びよういん]で、私[わたし]は 母[はは]に 変[へん]な 髪形[かみがた]を " },
          { text: "選[えら]ばされた", blank: true },
        ],
        notes: "Uses お母さん with contracted causative-passive.",
      },
    ],
  },
  {
    english: "Yesterday at the festival, I was made to sell ten old toys by my uncle.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] お祭[まつ]りで、私[わたし]は 私[わたし]の 叔父[おじ]に 古[ふる]い おもちゃを 十個[じゅっこ] " },
          { text: "売[う]らせられた", blank: true },
        ],
        notes: "Basic translation using the full causative-passive form 売らせられた",
      },
      {
        segments: [
          { text: "昨日[きのう] お祭[まつ]りで、私[わたし]は 叔父[おじ]に 古[ふる]い おもちゃを 十個[じゅっこ] " },
          { text: "売[う]らせられた", blank: true },
        ],
        notes: "Omitting 私の before uncle when context makes it clear",
      },
      {
        segments: [
          { text: "昨日[きのう]の お祭[まつ]りで、私[わたし]は 私[わたし]の 叔父[おじ]に 古[ふる]い おもちゃを 十個[じゅっこ] " },
          { text: "売[う]らせられた", blank: true },
        ],
        notes: "Using 昨日の お祭りで as a noun phrase",
      },
      {
        segments: [
          { text: "昨日[きのう] お祭[まつ]りで、私[わたし]は 私[わたし]の 叔父[おじ]に 十個[じゅっこ]の 古[ふる]い おもちゃを " },
          { text: "売[う]らせられた", blank: true },
        ],
        notes: "Counter before the noun with の",
      },
      {
        segments: [
          { text: "昨日[きのう] お祭[まつ]りで、私[わたし]は 私[わたし]の 叔父[おじ]に 古[ふる]い おもちゃ 十個[じゅっこ]を " },
          { text: "売[う]らせられた", blank: true },
        ],
        notes: "Counter placed between noun and object particle",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は お祭[まつ]りで 私[わたし]の 叔父[おじ]に 古[ふる]い おもちゃを 十個[じゅっこ] " },
          { text: "売[う]らせられた", blank: true },
        ],
        notes: "Subject before location phrase",
      },
      {
        segments: [
          { text: "お祭[まつ]りで 昨日[きのう]、私[わたし]は 私[わたし]の 叔父[おじ]に 古[ふる]い おもちゃを 十個[じゅっこ] " },
          { text: "売[う]らせられた", blank: true },
        ],
        notes: "Location placed before time for emphasis",
      },
    ],
  },
  {
    english: "Last week at the hot spring, I was made to take a bath before dinner by my grandmother.",
    answers: [
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は 祖母[そぼ]に 晩[ばん]ご飯[はん]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Basic translation with the full causative-passive past form 入らせられた.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は 私[わたし]の 祖母[そぼ]に 晩[ばん]ご飯[はん]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Explicitly says “my grandmother” with 私の祖母[そぼ].",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は 祖母[そぼ]に 夕食[ゆうしょく]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Uses 夕食 instead of 晩ご飯 for dinner.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 温泉[おんせん]で 祖母[そぼ]に 晩[ばん]ご飯[はん]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Moves 私は before the location phrase.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、私[わたし]は 祖母[そぼ]に 温泉[おんせん]で 晩[ばん]ご飯[はん]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Places the agent before the location phrase.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は おばあちゃんに 晩[ばん]ご飯[はん]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Uses the more familiar おばあちゃん for grandmother.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は 祖母[そぼ]に 晩[ばん]ご飯[はん]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Uses 祖母, a natural way to refer to one’s own grandmother.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は おばあちゃんに 夕食[ゆうしょく]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Uses おばあちゃん and 夕食 for dinner.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は 祖母[そぼ]に 夕食[ゆうしょく]の 前[まえ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Uses 祖母 and 夕食 for a slightly more formal/natural wording.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は 祖母[そぼ]に 晩[ばん]ご飯[はん]の 前[まえ]に" },
          { text: "入浴[にゅうよく]させられた", blank: true },
        ],
        notes: "Uses 入浴する as a compact synonym for taking a bath.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、私[わたし]は 祖母[そぼ]に 夕食[ゆうしょく]の 前[まえ]に" },
          { text: "入浴[にゅうよく]させられた", blank: true },
        ],
        notes: "Formal wording with 祖母, 夕食, and 入浴する.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、晩[ばん]ご飯[はん]の 前[まえ]に、私[わたし]は 祖母[そぼ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Moves “before dinner” earlier in the sentence.",
      },
      {
        segments: [
          { text: "先週[せんしゅう]、温泉[おんせん]で、夕食[ゆうしょく]の 前[まえ]に、私[わたし]は 祖母[そぼ]に お風呂[ふろ]に" },
          { text: "入[はい]らせられた", blank: true },
        ],
        notes: "Moves 夕食の前に earlier and uses 祖母.",
      },
    ],
  },
  {
    english: "During class today, I was made to read a long poem by my Japanese teacher.",
    answers: [
      {
        segments: [
          { text: "今日[きょう] 授業[じゅぎょう]中[ちゅう]に、私[わたし]は 日本語[にほんご]の 教師[きょうし]に 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "Using the full causative-passive form 読ませられた.",
      },
      {
        segments: [
          { text: "今日[きょう]の 授業[じゅぎょう]中[ちゅう]に、私[わたし]は 日本語[にほんご]の 教師[きょうし]に 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "今日の授業中に with the full causative-passive form.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 授業[じゅぎょう]中[ちゅう]に、日本語[にほんご]の 教師[きょうし]に 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "Starting with 私は; the app can also generate pronoun-dropped forms from this.",
      },
      {
        segments: [
          { text: "今日[きょう]、授業[じゅぎょう]中[ちゅう]に、私[わたし]は 日本語[にほんご]の 教師[きょうし]に 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "Adding a pause after 今日 for a natural spoken rhythm.",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は 授業[じゅぎょう]中[ちゅう]に 日本語[にほんご]の 教師[きょうし]に 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "Placing 私は immediately after 今日.",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]中[ちゅう]に、私[わたし]は 今日[きょう] 日本語[にほんご]の 教師[きょうし]に 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "Putting 授業中に first and 今日 after the subject.",
      },
      {
        segments: [
          { text: "今日[きょう]の 日本語[にほんご]の 授業[じゅぎょう]中[ちゅう]に、私[わたし]は 教師[きょうし]に 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "Treating 'Japanese teacher' as the teacher in Japanese class; more concise 先生に.",
      },
      {
        segments: [
          { text: "今日[きょう]、日本語[にほんご]の 授業[じゅぎょう]中[ちゅう]に、私[わたし]は 教師[きょうし]に 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "Using 日本語の授業中に to specify class context.",
      },
      {
        segments: [
          { text: "今日[きょう] 授業[じゅぎょう]中[ちゅう]に、日本語[にほんご]の 教師[きょうし]に 私[わたし]は 長[なが]い 詩[し]を " },
          { text: "読[よ]ませられた", blank: true },
        ],
        notes: "Putting the agent phrase before 私は for emphasis.",
      },
    ],
  },
  {
    english: "At the department store yesterday, I was made to apologize to the angry customer by the department manager.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] デパートで、私[わたし]は 部長[ぶちょう]に 怒[おこ]っている 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Basic translation with the full causative-passive past form.",
      },
      {
        segments: [
          { text: "昨日[きのう]、デパートで、私[わたし]は 部長[ぶちょう]に 怒[おこ]った 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Using 怒った お客さん for 'the angry customer'.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] デパートで、部長[ぶちょう]に 怒[おこ]っている 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Starting with 私は; same meaning with different word order.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、デパートで、部長[ぶちょう]に 怒[おこ]った 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Starting with 私は and using 怒った お客さん.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は デパートで 部長[ぶちょう]に 怒[おこ]っている 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Placing 私は after the time expression.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は デパートで 部長[ぶちょう]に 怒[おこ]った 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Placing 私は after the time expression; using 怒った.",
      },
      {
        segments: [
          { text: "昨日[きのう] デパートで、私[わたし]は 部長[ぶちょう]に 怒[おこ]っていた 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Using 怒っていた to describe the customer as having been angry at that time.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] デパートで、部長[ぶちょう]に 怒[おこ]っていた 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Starting with 私は and using 怒っていた.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は デパートで 部長[ぶちょう]に 怒[おこ]っていた 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Putting 私は after 昨日 and using 怒っていた.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 部長[ぶちょう]に デパートで 怒[おこ]っている 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Moving the place phrase after the causer.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 部長[ぶちょう]に デパートで 怒[おこ]った 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Moving the place phrase after the causer; using 怒った.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 部長[ぶちょう]に デパートで 怒[おこ]っていた 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Moving the place phrase after the causer; using 怒っていた.",
      },
      {
        segments: [
          { text: "昨日[きのう] デパートで、私[わたし]は 部長[ぶちょう]に 怒[おこ]っている 客[きゃく]に " },
          { text: "謝罪[しゃざい]させられた", blank: true },
        ],
        notes: "More formal verb 謝罪する instead of 謝る.",
      },
      {
        segments: [
          { text: "昨日[きのう]、デパートで、私[わたし]は 部長[ぶちょう]に 怒[おこ]った 客[きゃく]に " },
          { text: "謝罪[しゃざい]させられた", blank: true },
        ],
        notes: "Formal 謝罪する with 怒った お客さん.",
      },
      {
        segments: [
          { text: "昨日[きのう] デパートで、私[わたし]は 部長[ぶちょう]に 怒[おこ]っていた 客[きゃく]に " },
          { text: "謝罪[しゃざい]させられた", blank: true },
        ],
        notes: "Formal 謝罪する with 怒っていた お客さん.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] デパートで、部長[ぶちょう]に 怒[おこ]っている 客[きゃく]に " },
          { text: "謝罪[しゃざい]させられた", blank: true },
        ],
        notes: "Formal 謝罪する; starting with 私は.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は デパートで 部長[ぶちょう]に 怒[おこ]っている 客[きゃく]に " },
          { text: "謝罪[しゃざい]させられた", blank: true },
        ],
        notes: "Formal 謝罪する; placing 私は after 昨日.",
      },
      {
        segments: [
          { text: "昨日[きのう]、デパートで、私[わたし]は デパートの 部長[ぶちょう]に 怒[おこ]っている 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Specifying デパートの部長 as the department store manager.",
      },
      {
        segments: [
          { text: "昨日[きのう]、デパートで、私[わたし]は デパートの 部長[ぶちょう]に 怒[おこ]った 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Specifying デパートの部長 and using 怒った お客さん.",
      },
      {
        segments: [
          { text: "昨日[きのう]、デパートで、私[わたし]は デパートの 部長[ぶちょう]に 怒[おこ]っていた 客[きゃく]に " },
          { text: "謝[あやま]らせられた", blank: true },
        ],
        notes: "Specifying デパートの部長 and using 怒っていた お客さん.",
      },
      {
        segments: [
          { text: "昨日[きのう]、デパートで、私[わたし]は デパートの 部長[ぶちょう]に 怒[おこ]っている 客[きゃく]に " },
          { text: "謝罪[しゃざい]させられた", blank: true },
        ],
        notes: "Specifying デパートの部長 with the formal verb 謝罪する.",
      },
    ],
  },
  {
    english: "This morning before the exam, I was made to turn off my smartphone by the teacher.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、試験[しけん]の 前[まえ]に、私[わたし]は 教師[きょうし]に スマホの 電源[でんげん]を" },
          { text: "切[き]らされた", blank: true },
        ],
        notes: "Most natural expression: スマホの電源を切る, using the contracted causative-passive",
      },
      {
        segments: [
          { text: "今朝[けさ]、試験[しけん]の 前[まえ]に、私[わたし]は 教師[きょうし]に スマホの 電源[でんげん]を" },
          { text: "切[き]らせられた", blank: true },
        ],
        notes: "Full causative-passive form for 切る instead of the contracted 切らされた",
      },
      {
        segments: [
          { text: "今朝[けさ]、試験[しけん]の 前[まえ]に、教師[きょうし]に 私[わたし]は スマホの 電源[でんげん]を" },
          { text: "切[き]らされた", blank: true },
        ],
        notes: "Reordered sentence placing 先生に before 私は",
      },
      {
        segments: [
          { text: "試験[しけん]の 前[まえ]に、今朝[けさ]、私[わたし]は 教師[きょうし]に スマホの 電源[でんげん]を" },
          { text: "切[き]らされた", blank: true },
        ],
        notes: "Time phrase order reversed: exam-before phrase first",
      },
      {
        segments: [
          { text: "今朝[けさ]、試験[しけん]の 前[まえ]に、私[わたし]は 日本語[にほんご]の 教師[きょうし]に スマホの 電源[でんげん]を" },
          { text: "切[き]らされた", blank: true },
        ],
        notes: "Specifies the teacher as the Japanese teacher, still matching the prompt",
      },
      {
        segments: [
          { text: "今朝[けさ]、試験[しけん]の 前[まえ]に、私[わたし]は 教師[きょうし]に スマホの 電源[でんげん]を" },
          { text: "切[き]らされた", blank: true },
        ],
        notes: "Shorter natural wording omitting 電源",
      },
      {
        segments: [
          { text: "今朝[けさ]、テストの 前[まえ]に、私[わたし]は 教師[きょうし]に スマホの 電源[でんげん]を" },
          { text: "切[き]らされた", blank: true },
        ],
        notes: "Uses テスト instead of 試験",
      },
      {
        segments: [
          { text: "今朝[けさ]、試験[しけん]の 前[まえ]に、私[わたし]は 教師[きょうし]に 携帯[けいたい]の 電源[でんげん]を" },
          { text: "切[き]らされた", blank: true },
        ],
        notes: "Uses 携帯 as a natural synonym for phone",
      },
      {
        segments: [
          { text: "今朝[けさ]、試験[しけん]の 前[まえ]に、私[わたし]は 教師[きょうし]に 携帯[けいたい]の 電源[でんげん]を" },
          { text: "切[き]らされた", blank: true },
        ],
        notes: "Uses 携帯の電源 instead of スマホの電源",
      },
    ],
  },
  {
    english: "Yesterday evening at home, I was made to iron five shirts by my mother.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、私[わたし]は 母[はは]に 五枚[ごまい]の シャツに アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Basic order with 五枚のシャツ and explicit 私は",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、私[わたし]は 母[はは]に シャツ 五枚[ごまい]に アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Uses counter after the noun: シャツ五枚",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、母[はは]に 五枚[ごまい]の シャツに アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Drops 私は while keeping the same meaning",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、母[はは]に シャツ 五枚[ごまい]に アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Drops 私は and uses シャツ五枚",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、私[わたし]は 母[はは]に 五枚[ごまい]の シャツに アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Uses 家[いえ]で for ‘at home’",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、私[わたし]は 母[はは]に シャツ 五枚[ごまい]に アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Uses 家[いえ]で and counter after the noun",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、私[わたし]は 母[はは]に 五枚[ごまい]の シャツに アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Uses お母さん instead of 母",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、私[わたし]は 母[はは]に シャツ 五枚[ごまい]に アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Uses お母さん and counter after the noun",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、私[わたし]は 母[はは]に 五枚[ごまい]の シャツに アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Uses both 家[いえ]で and お母さん",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕方[ゆうがた]、家[いえ]で、私[わたし]は 母[はは]に シャツ 五枚[ごまい]に アイロンを " },
          { text: "かけさせられた", blank: true },
        ],
        notes: "Uses 家[いえ]で, お母さん, and counter after the noun",
      },
    ],
  },
];
