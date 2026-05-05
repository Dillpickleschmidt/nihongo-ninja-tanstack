import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I accidentally left my wallet on the train this morning.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、電車[でんしゃ]に 財布[さいふ]を" },
          { text: "忘[わす]れてしまった", blank: true },
        ],
        notes: "Basic wording with 電車に for where the wallet was left",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、電車[でんしゃ]に 財布[さいふ]を" },
          { text: "忘[わす]れちゃった", blank: true },
        ],
        notes: "Contracted ちゃう form, more conversational",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 電車[でんしゃ]に 財布[さいふ]を" },
          { text: "忘[わす]れてしまった", blank: true },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 電車[でんしゃ]に 財布[さいふ]を" },
          { text: "忘[わす]れちゃった", blank: true },
        ],
        notes: "Time-first order with contracted ちゃう",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を 今朝[けさ] 電車[でんしゃ]に" },
          { text: "忘[わす]れてしまった", blank: true },
        ],
        notes: "Object placed before time/location",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を 今朝[けさ] 電車[でんしゃ]に" },
          { text: "忘[わす]れちゃった", blank: true },
        ],
        notes: "Object-first order with contracted ちゃう",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、電車[でんしゃ]で 財布[さいふ]を" },
          { text: "忘[わす]れてしまった", blank: true },
        ],
        notes: "Using 電車で, focusing on the train as the setting where it happened",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、電車[でんしゃ]で 財布[さいふ]を" },
          { text: "忘[わす]れちゃった", blank: true },
        ],
        notes: "Using 電車で with contracted ちゃう",
      },
      {
        segments: [
          { text: "今朝[けさ]、電車[でんしゃ]に 財布[さいふ]を" },
          { text: "忘[わす]れてしまった", blank: true },
        ],
        notes: "Pronoun omitted in a natural sentence",
      },
      {
        segments: [
          { text: "今朝[けさ]、電車[でんしゃ]に 財布[さいふ]を" },
          { text: "忘[わす]れちゃった", blank: true },
        ],
        notes: "Pronoun omitted with contracted ちゃう",
      },
      {
        segments: [
          { text: "今朝[けさ]、電車[でんしゃ]で 財布[さいふ]を" },
          { text: "忘[わす]れてしまった", blank: true },
        ],
        notes: "Pronoun omitted, using 電車で as the setting",
      },
      {
        segments: [
          { text: "今朝[けさ]、電車[でんしゃ]で 財布[さいふ]を" },
          { text: "忘[わす]れちゃった", blank: true },
        ],
        notes: "Pronoun omitted, 電車で, contracted ちゃう",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、電車[でんしゃ]の 中[なか]に 財布[さいふ]を" },
          { text: "忘[わす]れてしまった", blank: true },
        ],
        notes: "Using 電車の中に to explicitly say inside/on the train",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、電車[でんしゃ]の 中[なか]に 財布[さいふ]を" },
          { text: "忘[わす]れちゃった", blank: true },
        ],
        notes: "電車の中に with contracted ちゃう",
      },
      {
        segments: [
          { text: "今朝[けさ]、電車[でんしゃ]の 中[なか]に 財布[さいふ]を" },
          { text: "忘[わす]れてしまった", blank: true },
        ],
        notes: "Pronoun omitted with 電車の中に",
      },
      {
        segments: [
          { text: "今朝[けさ]、電車[でんしゃ]の 中[なか]に 財布[さいふ]を" },
          { text: "忘[わす]れちゃった", blank: true },
        ],
        notes: "Pronoun omitted, 電車の中に, contracted ちゃう",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、電車[でんしゃ]に 財布[さいふ]を置[お]いてきて" },
          { text: "しまう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 置いてくる to express leaving something behind; only しまう is conjugated",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、電車[でんしゃ]に 財布[さいふ]を置[お]いてき" },
          { text: "ちゃう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "置いてくる with contracted ちゃう; only ちゃう is conjugated",
      },
      {
        segments: [
          { text: "今朝[けさ]、電車[でんしゃ]に 財布[さいふ]を置[お]いてきて" },
          { text: "しまう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted, using 置いてくる; only しまう is conjugated",
      },
      {
        segments: [
          { text: "今朝[けさ]、電車[でんしゃ]に 財布[さいふ]を置[お]いてき" },
          { text: "ちゃう", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted, 置いてくる with contracted ちゃう; only ちゃう is conjugated",
      },
    ],
  },
  {
    english: "I ate all of my younger sister's chocolate.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 妹[いもうと]のチョコレートを 全部[ぜんぶ] " },
          { text: "食[た]べてしまった", blank: true },
        ],
        notes: "Standard wording with てしまう to mean eating it all completely",
      },
      {
        segments: [
          { text: "私[わたし]は 妹[いもうと]のチョコレートを 全部[ぜんぶ] " },
          { text: "食[た]べちゃった", blank: true },
        ],
        notes: "Casual contracted ちゃう form",
      },
      {
        segments: [
          { text: "私[わたし]は 妹[いもうと]のチョコレート 全部[ぜんぶ]を " },
          { text: "食[た]べてしまった", blank: true },
        ],
        notes: "全部 modifies the chocolate directly: 'all of my sister's chocolate'",
      },
      {
        segments: [
          { text: "私[わたし]は 妹[いもうと]のチョコレート 全部[ぜんぶ]を " },
          { text: "食[た]べちゃった", blank: true },
        ],
        notes: "全部 modifies the chocolate directly, using contracted ちゃう",
      },
      {
        segments: [
          { text: "私[わたし]が 妹[いもうと]のチョコレートを 全部[ぜんぶ] " },
          { text: "食[た]べてしまった", blank: true },
        ],
        notes: "Using が to emphasize that I was the one who ate it",
      },
      {
        segments: [
          { text: "私[わたし]が 妹[いもうと]のチョコレートを 全部[ぜんぶ] " },
          { text: "食[た]べちゃった", blank: true },
        ],
        notes: "が-marked subject with contracted ちゃう",
      },
      {
        segments: [
          { text: "妹[いもうと]のチョコレートを 私[わたし]は 全部[ぜんぶ] " },
          { text: "食[た]べてしまった", blank: true },
        ],
        notes: "Topicalized object first; otherwise same meaning",
      },
      {
        segments: [
          { text: "妹[いもうと]のチョコレートを 私[わたし]は 全部[ぜんぶ] " },
          { text: "食[た]べちゃった", blank: true },
        ],
        notes: "Object-first word order with contracted ちゃう",
      },
      {
        segments: [
          { text: "妹[いもうと]のチョコレートは 私[わたし]が 全部[ぜんぶ] " },
          { text: "食[た]べてしまった", blank: true },
        ],
        notes: "Topicalizing the chocolate with は and marking the eater with が",
      },
      {
        segments: [
          { text: "妹[いもうと]のチョコレートは 私[わたし]が 全部[ぜんぶ] " },
          { text: "食[た]べちゃった", blank: true },
        ],
        notes: "Topicalized chocolate with contracted ちゃう",
      },
      {
        segments: [
          { text: "私[わたし]は 全部[ぜんぶ] 妹[いもうと]のチョコレートを " },
          { text: "食[た]べてしまった", blank: true },
        ],
        notes: "Adverb 全部 placed before the object; still means ate all of it",
      },
      {
        segments: [
          { text: "私[わたし]は 全部[ぜんぶ] 妹[いもうと]のチョコレートを " },
          { text: "食[た]べちゃった", blank: true },
        ],
        notes: "Adverb 全部 before the object with contracted ちゃう",
      },
    ],
  },
  {
    english: "I accidentally broke my smartphone during class.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 授業中[じゅぎょうちゅう]に スマホを " },
          { text: "壊[こわ]してしまった", blank: true },
        ],
        notes: "Standard てしまう form with 授業中に for “during class”",
      },
      {
        segments: [
          { text: "私[わたし]は 授業中[じゅぎょうちゅう]に スマホを " },
          { text: "壊[こわ]しちゃった", blank: true },
        ],
        notes: "Contracted spoken ちゃう form",
      },
      {
        segments: [
          { text: "私[わたし]は スマホを 授業中[じゅぎょうちゅう]に " },
          { text: "壊[こわ]してしまった", blank: true },
        ],
        notes: "Object placed before the time expression",
      },
      {
        segments: [
          { text: "私[わたし]は スマホを 授業中[じゅぎょうちゅう]に " },
          { text: "壊[こわ]しちゃった", blank: true },
        ],
        notes: "Contracted ちゃう with object before the time expression",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に 私[わたし]のスマホを " },
          { text: "壊[こわ]してしまった", blank: true },
        ],
        notes: "Uses 私の to explicitly say “my smartphone” and starts with the time expression",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に 私[わたし]のスマホを " },
          { text: "壊[こわ]しちゃった", blank: true },
        ],
        notes: "Contracted ちゃう with explicit “my smartphone”",
      },
      {
        segments: [
          { text: "私[わたし]は 授業[じゅぎょう]で スマホを " },
          { text: "壊[こわ]してしまった", blank: true },
        ],
        notes: "Uses 授業で to mean “in class”",
      },
      {
        segments: [
          { text: "私[わたし]は 授業[じゅぎょう]で スマホを " },
          { text: "壊[こわ]しちゃった", blank: true },
        ],
        notes: "Contracted ちゃう with 授業で",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]で 私[わたし]のスマホを " },
          { text: "壊[こわ]してしまった", blank: true },
        ],
        notes: "Starts with 授業で and explicitly marks “my smartphone”",
      },
      {
        segments: [
          { text: "授業[じゅぎょう]で 私[わたし]のスマホを " },
          { text: "壊[こわ]しちゃった", blank: true },
        ],
        notes: "Contracted ちゃう, starting with 授業で",
      },
      {
        segments: [
          { text: "私[わたし]は 授業[じゅぎょう]の 時[とき]に スマホを " },
          { text: "壊[こわ]してしまった", blank: true },
        ],
        notes: "Uses 授業の時に for “during/at class time”",
      },
      {
        segments: [
          { text: "私[わたし]は 授業[じゅぎょう]の 時[とき]に スマホを " },
          { text: "壊[こわ]しちゃった", blank: true },
        ],
        notes: "Contracted ちゃう with 授業の時に",
      },
    ],
  },
  {
    english: "I accidentally fell asleep in the library yesterday.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、図書館[としょかん]で " },
          { text: "寝[ね]てしまった", blank: true },
        ],
        notes: "Standard wording with てしまう; subject first.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、図書館[としょかん]で " },
          { text: "寝[ね]ちゃった", blank: true },
        ],
        notes: "Contracted ちゃう form.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 図書館[としょかん]で " },
          { text: "寝[ね]てしまった", blank: true },
        ],
        notes: "Time expression placed first.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 図書館[としょかん]で " },
          { text: "寝[ね]ちゃった", blank: true },
        ],
        notes: "Time expression first with contracted ちゃう.",
      },
    ],
  },
  {
    english: "I accidentally threw away the concert ticket.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は コンサートのチケットを " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Basic version using てしまう with the object marked by を",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートチケットを " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Using コンサートチケット as a compound noun",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートのチケットを " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "Contracted ちゃう form",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートチケットを " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "Contracted ちゃう form with compound noun",
      },
      {
        segments: [
          { text: "私[わたし]が コンサートのチケットを " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Using が instead of は for the subject",
      },
      {
        segments: [
          { text: "私[わたし]が コンサートのチケットを " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "Using が with the contracted ちゃう form",
      },
      {
        segments: [
          { text: "私[わたし]は うっかり コンサートのチケットを " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Adding うっかり to explicitly mean accidentally",
      },
      {
        segments: [
          { text: "私[わたし]は うっかり コンサートのチケットを " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "Adding うっかり with the contracted ちゃう form",
      },
      {
        segments: [
          { text: "私[わたし]は うっかり コンサートチケットを " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Explicit accidentally adverb with compound noun",
      },
      {
        segments: [
          { text: "私[わたし]は うっかり コンサートチケットを " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "Explicit accidentally adverb, compound noun, contracted form",
      },
      {
        segments: [
          { text: "コンサートのチケットは 私[わたし]が " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Topicalizing the ticket with は and marking the doer with が",
      },
      {
        segments: [
          { text: "コンサートのチケットは 私[わたし]が " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "Topicalized ticket with contracted ちゃう form",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートのチケットを うっかり " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Placing うっかり immediately before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートのチケットを うっかり " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "うっかり before the verb with the contracted ちゃう form",
      },
      {
        segments: [
          { text: "私[わたし]は 間違[まちが]えて コンサートのチケットを " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Using 間違えて to express 'by mistake' explicitly",
      },
      {
        segments: [
          { text: "私[わたし]は 間違[まちが]えて コンサートのチケットを " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "Using 間違えて with the contracted ちゃう form",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートのチケットを 間違[まちが]えて " },
          { text: "捨[す]ててしまった", blank: true },
        ],
        notes: "Placing 間違えて before the verb phrase",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートのチケットを 間違[まちが]えて " },
          { text: "捨[す]てちゃった", blank: true },
        ],
        notes: "間違えて before the verb phrase with ちゃう",
      },
    ],
  },
  {
    english: "I'm going to get all of my homework done before the game starts.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まる 前[まえ]に、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Natural phrasing using やる for getting homework done.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まる 前[まえ]に、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Colloquial contraction ちゃう instead of てしまう.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まる 前[まえ]に、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム for “game” instead of 試合.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まる 前[まえ]に、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム and the colloquial ちゃう form.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まる 前[まえ]に、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "してしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses する instead of やる for “do” homework.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まる 前[まえ]に、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "しちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses する with the casual contraction ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まるまでに、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses までに to mean “by the time/before” the game starts.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まるまでに、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses までに and contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まるまでに、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム and までに.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まるまでに、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム, までに, and contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まる 前[まえ]に、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "してしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム and する for homework.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まる 前[まえ]に、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "しちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム, する, and contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まるまでに、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "してしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses する and までに.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まるまでに、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "しちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses する with までに and contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まるまでに、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "してしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム, する, and までに.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まるまでに、宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "しちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム, する, までに, and contracted ちゃう.",
      },
      {
        segments: [
          { text: "試合[しあい]が 始[はじ]まる 前[まえ]に、私[わたし]は 宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Reordered sentence with the time clause first.",
      },
      {
        segments: [
          { text: "試合[しあい]が 始[はじ]まる 前[まえ]に、私[わたし]は 宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Time clause first with contracted ちゃう.",
      },
      {
        segments: [
          { text: "ゲームが 始[はじ]まる 前[まえ]に、私[わたし]は 宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Time clause first, using ゲーム.",
      },
      {
        segments: [
          { text: "ゲームが 始[はじ]まる 前[まえ]に、私[わたし]は 宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Time clause first with ゲーム and contracted ちゃう.",
      },
      {
        segments: [
          { text: "試合[しあい]が 始[はじ]まるまでに、私[わたし]は 宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Time clause first using までに.",
      },
      {
        segments: [
          { text: "試合[しあい]が 始[はじ]まるまでに、私[わたし]は 宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Time clause first with までに and contracted ちゃう.",
      },
      {
        segments: [
          { text: "ゲームが 始[はじ]まるまでに、私[わたし]は 宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Time clause first, using ゲーム and までに.",
      },
      {
        segments: [
          { text: "ゲームが 始[はじ]まるまでに、私[わたし]は 宿題[しゅくだい]を 全部[ぜんぶ] " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Time clause first with ゲーム, までに, and contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まる 前[まえ]に、全部[ぜんぶ]の 宿題[しゅくだい]を " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses 全部の宿題 instead of 宿題を全部.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まる 前[まえ]に、全部[ぜんぶ]の 宿題[しゅくだい]を " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses 全部の宿題 with contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まる 前[まえ]に、全部[ぜんぶ]の 宿題[しゅくだい]を " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム and 全部の宿題.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まる 前[まえ]に、全部[ぜんぶ]の 宿題[しゅくだい]を " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム, 全部の宿題, and contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まるまでに、全部[ぜんぶ]の 宿題[しゅくだい]を " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses までに with 全部の宿題.",
      },
      {
        segments: [
          { text: "私[わたし]は 試合[しあい]が 始[はじ]まるまでに、全部[ぜんぶ]の 宿題[しゅくだい]を " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses までに, 全部の宿題, and contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まるまでに、全部[ぜんぶ]の 宿題[しゅくだい]を " },
          { text: "やってしまう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム, までに, and 全部の宿題.",
      },
      {
        segments: [
          { text: "私[わたし]は ゲームが 始[はじ]まるまでに、全部[ぜんぶ]の 宿題[しゅくだい]を " },
          { text: "やっちゃう", blank: true },
          { text: "つもり" },
          { text: "です" },
        ],
        notes: "Uses ゲーム, までに, 全部の宿題, and contracted ちゃう.",
      },
    ],
  },
  {
    english: "I accidentally put sugar in the soup.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は スープに 砂糖[さとう]を " },
          { text: "入[い]れてしまった", blank: true },
        ],
        notes: "Standard てしまう form with the usual order: soup first, then sugar.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を スープに " },
          { text: "入[い]れてしまった", blank: true },
        ],
        notes: "Reversed object and destination order: sugar first, then soup.",
      },
      {
        segments: [
          { text: "私[わたし]は スープに 砂糖[さとう]を " },
          { text: "入[い]れちゃった", blank: true },
        ],
        notes: "Contracted casual-sounding ちゃう form.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を スープに " },
          { text: "入[い]れちゃった", blank: true },
        ],
        notes: "ちゃう form with object placed before destination.",
      },
      {
        segments: [
          { text: "私[わたし]は スープの 中[なか]に 砂糖[さとう]を " },
          { text: "入[い]れてしまった", blank: true },
        ],
        notes: "Uses スープの中に to explicitly say “into the soup.”",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を スープの 中[なか]に " },
          { text: "入[い]れてしまった", blank: true },
        ],
        notes: "Explicit スープの中に with reversed object/destination order.",
      },
      {
        segments: [
          { text: "私[わたし]は スープの 中[なか]に 砂糖[さとう]を " },
          { text: "入[い]れちゃった", blank: true },
        ],
        notes: "Contracted ちゃう with explicit スープの中に.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を スープの 中[なか]に " },
          { text: "入[い]れちゃった", blank: true },
        ],
        notes: "Contracted ちゃう with explicit スープの中に and reversed order.",
      },
      {
        segments: [
          { text: "私[わたし]は うっかり スープに 砂糖[さとう]を " },
          { text: "入[い]れてしまった", blank: true },
        ],
        notes: "Adds うっかり to explicitly emphasize the accidental nature.",
      },
      {
        segments: [
          { text: "私[わたし]は うっかり 砂糖[さとう]を スープに " },
          { text: "入[い]れてしまった", blank: true },
        ],
        notes: "Adds うっかり with object before destination.",
      },
      {
        segments: [
          { text: "私[わたし]は うっかり スープに 砂糖[さとう]を " },
          { text: "入[い]れちゃった", blank: true },
        ],
        notes: "Explicit accidental adverb うっかり with contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は うっかり 砂糖[さとう]を スープに " },
          { text: "入[い]れちゃった", blank: true },
        ],
        notes: "Explicit accidental adverb うっかり with contracted ちゃう and reversed order.",
      },
      {
        segments: [
          { text: "私[わたし]は スープに 間違[まちが]えて 砂糖[さとう]を " },
          { text: "入[い]れてしまった", blank: true },
        ],
        notes: "Uses 間違えて to say it was put in by mistake.",
      },
      {
        segments: [
          { text: "私[わたし]は 間違[まちが]えて スープに 砂糖[さとう]を " },
          { text: "入[い]れてしまった", blank: true },
        ],
        notes: "Places 間違えて earlier in the sentence.",
      },
      {
        segments: [
          { text: "私[わたし]は スープに 間違[まちが]えて 砂糖[さとう]を " },
          { text: "入[い]れちゃった", blank: true },
        ],
        notes: "By-mistake wording with contracted ちゃう.",
      },
      {
        segments: [
          { text: "私[わたし]は 間違[まちが]えて スープに 砂糖[さとう]を " },
          { text: "入[い]れちゃった", blank: true },
        ],
        notes: "Contracted ちゃう with 間違えて placed early.",
      },
    ],
  },
  {
    english: "I accidentally read my older sister's diary.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 姉[あね]の 日記[にっき]を " },
          { text: "読[よ]んでしまった", blank: true },
        ],
        notes: "Uses 姉 for my older sister and てしまう for doing it accidentally.",
      },
      {
        segments: [
          { text: "私[わたし]は 姉[あね]の 日記[にっき]を " },
          { text: "読[よ]んじゃった", blank: true },
        ],
        notes: "Conversational contracted じゃう version.",
      },
      {
        segments: [
          { text: "うっかり 姉[あね]の 日記[にっき]を " },
          { text: "読[よ]んでしまった", blank: true },
        ],
        notes: "Adds うっかり to make the accidental meaning explicit.",
      },
      {
        segments: [
          { text: "間違[まちが]えて 姉[あね]の 日記[にっき]を " },
          { text: "読[よ]んじゃった", blank: true },
        ],
        notes: "Uses 間違えて with the contracted じゃう form.",
      },
    ],
  },
];
