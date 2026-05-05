import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "The concert starts at seven, so Kenji should already be at the station.",
    hint: "Kenji = 健二",
    answers: [
      {
        segments: [
          { text: "コンサートは 七時[しちじ]に 始[はじ]まるから、健二[けんじ]さんは もう 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Basic version using から and いる for being at the station",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]に 始[はじ]まるので、健二[けんじ]さんは もう 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using ので instead of から for 'so'",
      },
      {
        segments: [
          { text: "七時[しちじ]に コンサートが 始[はじ]まるから、健二[けんじ]さんは もう 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered first clause with コンサートが as subject",
      },
      {
        segments: [
          { text: "七時[しちじ]に コンサートが 始[はじ]まるので、健二[けんじ]さんは もう 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered first clause with ので",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]に 始[はじ]まるから、もう 健二[けんじ]さんは 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Adverb もう placed before the subject in the main clause",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]に 始[はじ]まるので、もう 健二[けんじ]さんは 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using ので with もう before the subject",
      },
      {
        segments: [
          { text: "七時[しちじ]に コンサートが 始[はじ]まるから、もう 健二[けんじ]さんは 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Both first-clause reordering and adverb placement variation",
      },
      {
        segments: [
          { text: "七時[しちじ]に コンサートが 始[はじ]まるので、もう 健二[けんじ]さんは 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Both first-clause reordering and ので",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]から なので、健二[けんじ]さんは もう 駅[えき]に いる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using noun-like expression 七時から for 'is from seven'",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]に 始[はじ]まるから、健二[けんじ]さんは もう 駅[えき]に 着[つ]いている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using 着いている to mean Kenji should have arrived at the station already",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]に 始[はじ]まるので、健二[けんじ]さんは もう 駅[えき]に 着[つ]いている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using 着いている with ので",
      },
      {
        segments: [
          { text: "七時[しちじ]に コンサートが 始[はじ]まるから、健二[けんじ]さんは もう 駅[えき]に 着[つ]いている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered first clause with 着いている",
      },
      {
        segments: [
          { text: "七時[しちじ]に コンサートが 始[はじ]まるので、健二[けんじ]さんは もう 駅[えき]に 着[つ]いている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered first clause with 着いている and ので",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]に 始[はじ]まるから、もう 健二[けんじ]さんは 駅[えき]に 着[つ]いている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "もう placed before subject with 着いている",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]に 始[はじ]まるので、もう 健二[けんじ]さんは 駅[えき]に 着[つ]いている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "もう before subject with ので and 着いている",
      },
      {
        segments: [
          { text: "コンサートは 七時[しちじ]から なので、健二[けんじ]さんは もう 駅[えき]に 着[つ]いている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "七時から with 着いている",
      },
    ],
  },
  {
    english: "Since it's Monday morning, the library should be quiet.",
    answers: [
      {
        segments: [
          { text: "月曜日[げつようび]の 朝[あさ]なので、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using なので for 'since' and は for the library as topic",
      },
      {
        segments: [
          { text: "月曜日[げつようび]の 朝[あさ]だから、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using だから for 'since/because'",
      },
      {
        segments: [
          { text: "月曜日[げつようび]の 朝[あさ]ですから、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "More polite causal expression with ですから",
      },
      {
        segments: [
          { text: "月曜日[げつようび]の 朝[あさ]なので、図書館[としょかん]が" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark the library as the subject/focus",
      },
      {
        segments: [
          { text: "月曜日[げつようび]の 朝[あさ]だから、図書館[としょかん]が" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using だから and が",
      },
      {
        segments: [
          { text: "今日[きょう]は 月曜日[げつようび]の 朝[あさ]なので、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Adding 今日 to make 'it is Monday morning' explicit",
      },
      {
        segments: [
          { text: "今日[きょう]は 月曜日[げつようび]の 朝[あさ]だから、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Adding 今日 with だから",
      },
      {
        segments: [
          { text: "今[いま]は 月曜日[げつようび]の 朝[あさ]なので、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今は to express 'it is now Monday morning'",
      },
      {
        segments: [
          { text: "月曜日[げつようび]の 朝[あさ]の 図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Condensed phrasing: 'the library on Monday morning'",
      },
      {
        segments: [
          { text: "図書館[としょかん]は、月曜日[げつようび]の 朝[あさ]なので" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered sentence with the library first",
      },
      {
        segments: [
          { text: "図書館[としょかん]は、月曜日[げつようび]の 朝[あさ]だから" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered sentence with だから",
      },
      {
        segments: [
          { text: "今朝[けさ]は 月曜日[げつようび]なので、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今朝 to express 'this morning is Monday'",
      },
      {
        segments: [
          { text: "今朝[けさ]は 月曜日[げつようび]だから、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今朝 with だから",
      },
      {
        segments: [
          { text: "月曜日[げつようび]の 午前中[ごぜんちゅう]なので、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 午前中 for 'morning'",
      },
      {
        segments: [
          { text: "月曜日[げつようび]の 午前中[ごぜんちゅう]だから、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 午前中 with だから",
      },
      {
        segments: [
          { text: "今日[きょう]は 月曜日[げつようび]の 午前中[ごぜんちゅう]なので、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Adding 今日 and using 午前中",
      },
      {
        segments: [
          { text: "今[いま]は 月曜日[げつようび]の 午前中[ごぜんちゅう]なので、図書館[としょかん]は" },
          { text: "静[しず]かなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今は with 午前中",
      },
    ],
  },
  {
    english: "Since Maria made this curry, it should be spicy.",
    hint: "Maria = マリア",
    answers: [
      {
        segments: [
          { text: "マリアさんが この カレーを 作[つく]ったから、この カレーは" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic sentence with から; marks this curry as the topic in the main clause.",
      },
      {
        segments: [
          { text: "マリアさんが この カレーを 作[つく]ったから、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Natural pronoun/topic omission in the main clause.",
      },
      {
        segments: [
          { text: "この カレーは マリアさんが 作[つく]ったから、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Starts with this curry as the topic, then gives the reason.",
      },
      {
        segments: [
          { text: "マリアさんが この カレーを 作[つく]ったので、この カレーは" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ので instead of から for a softer reason.",
      },
      {
        segments: [
          { text: "マリアさんが この カレーを 作[つく]ったので、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ので with the main-clause topic omitted.",
      },
      {
        segments: [
          { text: "この カレーは マリアさんが 作[つく]ったので、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Topicalizes this curry and uses ので for the reason.",
      },
      {
        segments: [
          { text: "マリアさんは この カレーを 作[つく]ったから、この カレーは" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses は for Maria as the topic in the reason clause.",
      },
      {
        segments: [
          { text: "マリアさんは この カレーを 作[つく]ったので、この カレーは" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses は for Maria plus ので for the reason.",
      },
      {
        segments: [
          { text: "これは マリアさんが 作[つく]った カレーだから、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses これ as the subject: 'This is the curry Maria made, so...'",
      },
      {
        segments: [
          { text: "これは マリアさんが 作[つく]った カレーなので、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses これ and なので for a softer reason.",
      },
      {
        segments: [
          { text: "この カレーを 作[つく]ったのは マリアさんだから、この カレーは" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Cleft construction emphasizing that Maria is the one who made it.",
      },
      {
        segments: [
          { text: "この カレーを 作[つく]ったのは マリアさんだから、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Cleft construction with the main-clause topic omitted.",
      },
      {
        segments: [
          { text: "この カレーを 作[つく]ったのが マリアさんだから、この カレーは" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses が in the cleft to focus on Maria as the maker.",
      },
      {
        segments: [
          { text: "この カレーを 作[つく]ったのが マリアさんなので、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses が in the cleft plus なので.",
      },
      {
        segments: [
          { text: "マリアさんの カレーだから、この カレーは" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 'Maria's curry' to imply curry made by Maria.",
      },
      {
        segments: [
          { text: "マリアさんの カレーなので、" },
          { text: "辛[から]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Concise version using 'Maria's curry' with なので.",
      },
      {
        segments: [
          { text: "マリアさんが この カレーを 作[つく]ったから、この カレーは" },
          { text: "スパイシーなはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses the loanword スパイシー as a な-adjective.",
      },
      {
        segments: [
          { text: "この カレーは マリアさんが 作[つく]ったので、" },
          { text: "スパイシーなはず", blank: true },
          { text: "です" },
        ],
        notes: "Topicalized curry with スパイシー as a な-adjective.",
      },
    ],
  },
  {
    english: "The hotel room should be a non-smoking twin room.",
    hint: "twin room = ツイン",
    answers: [
      {
        segments: [
          { text: "ホテルの 部屋[へや]は 禁煙[きんえん]の ツイン" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic wording using ホテルの部屋 as the topic and ツイン as the noun before のはず",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は 禁煙[きんえん]ツイン" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses the common compound-like phrase 禁煙ツイン",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は ツインの 禁煙[きんえん]ルーム" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 禁煙ルーム and places ツイン before it",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は ツインの 禁煙[きんえん]の 部屋[へや]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Spells out 'a twin non-smoking room' as ツインの禁煙の部屋",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は 禁煙[きんえん]の ツインルーム" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ツインルーム explicitly for 'twin room'",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は 禁煙[きんえん]ツインルーム" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses the compact phrase 禁煙ツインルーム",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は ツインルームで、禁煙[きんえん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Splits the two attributes: it is a twin room and should be non-smoking",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は 禁煙[きんえん]で、ツインルーム" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Reverses the split attributes: non-smoking and should be a twin room",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は ツインで、禁煙[きんえん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ツイン rather than ツインルーム in a split construction",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は 禁煙[きんえん]で、ツイン" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Compact split construction with 禁煙 and ツイン",
      },
      {
        segments: [
          { text: "ホテルの 部屋[へや]は ツインのはずで、禁煙[きんえん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses はず twice to express certainty about both twin and non-smoking",
      },
    ],
  },
  {
    english: "I put my wallet in this bag, so it should be here.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんに 入[い]れたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using から and ここにある",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんに 財布[さいふ]を 入[い]れたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Object and location order reversed in the first clause",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんの 中[なか]に 入[い]れたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies inside the bag with の中に",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんの 中[なか]に 財布[さいふ]を 入[い]れたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses の中に with reversed word order",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんに 入[い]れたので、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ので instead of から for a softer reason",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんに 財布[さいふ]を 入[い]れたので、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ので with reversed first-clause order",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんに 入[い]れたから、この かばんの 中[なか]に" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Expresses 'here' explicitly as inside this bag",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんに 財布[さいふ]を 入[い]れたから、この かばんの 中[なか]に" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Explicit bag location with reversed first-clause order",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんの 中[なか]に 入[い]れたから、この かばんの 中[なか]に" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses の中に in both clauses for clarity",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんに 入[い]れておいたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ておく to imply I put it there and left it there",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんに 財布[さいふ]を 入[い]れておいたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "ておく version with reversed first-clause order",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんの 中[なか]に 入[い]れておいたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Combines の中に with ておく",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんの 中[なか]に 財布[さいふ]を 入[い]れておいたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "の中に and ておく with reversed first-clause order",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんに 入[い]れたので、この かばんの 中[なか]に" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ので and explicitly says inside this bag",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんに 財布[さいふ]を 入[い]れたので、この かばんの 中[なか]に" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "ので plus explicit bag location, with reversed first-clause order",
      },
      {
        segments: [
          { text: "私[わたし]は 財布[さいふ]を この かばんに 入[い]れておいたので、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ておく and ので",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんに 財布[さいふ]を 入[い]れておいたので、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "ておく and ので with reversed first-clause order",
      },
      {
        segments: [
          { text: "財布[さいふ]は 私[わたし]が この かばんに 入[い]れたから、ここに" },
          { text: "あるはず", blank: true },
          { text: "です" },
        ],
        notes: "Topicalizes the wallet while keeping 私が as the subject",
      },
    ],
  },
  {
    english: "The last train should be at eleven, so I can still get home.",
    answers: [
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "十一時[じゅういちじ]のはず", blank: true },
          { text: "です" },
          { text: "から、まだ 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using 家に帰れる for “can get home.”",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "十一時[じゅういちじ]のはず", blank: true },
          { text: "です" },
          { text: "から、まだ うちに " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses うち instead of 家 for “home.”",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "十一時[じゅういちじ]のはず", blank: true },
          { text: "です" },
          { text: "から、まだ 帰[かえ]る ことが " },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ことができる for “can” instead of potential verb.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "十一時[じゅういちじ]ごろのはず", blank: true },
          { text: "です" },
          { text: "から、まだ 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds ごろ to express “around eleven,” a natural interpretation of being at eleven.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "十一時[じゅういちじ]ごろのはず", blank: true },
          { text: "です" },
          { text: "から、まだ うちに " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses both ごろ and うち.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "十一時[じゅういちじ]のはず", blank: true },
          { text: "です" },
          { text: "から、まだ 電車[でんしゃ]で 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says “by train” with 電車で.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "十一時[じゅういちじ]のはず", blank: true },
          { text: "です" },
          { text: "から、まだ 電車[でんしゃ]で うちに " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says “by train” and uses うち for home.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "午後[ごご]十一時[じゅういちじ]のはず", blank: true },
          { text: "です" },
          { text: "から、まだ 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies 午後十一時 for clarity.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "午後[ごご]十一時[じゅういちじ]のはず", blank: true },
          { text: "です" },
          { text: "から、まだ うちに " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies 午後十一時 and uses うち.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "午後[ごご]十一時[じゅういちじ]ごろのはず", blank: true },
          { text: "です" },
          { text: "から、まだ 家[いえ]に " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines 午後 and ごろ for “around 11 p.m.”",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "午後[ごご]十一時[じゅういちじ]ごろのはず", blank: true },
          { text: "です" },
          { text: "から、まだ うちに " },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combines 午後, ごろ, and うち.",
      },
      {
        segments: [
          { text: "終電[しゅうでん]は " },
          { text: "十一時[じゅういちじ]のはず", blank: true },
          { text: "です" },
          { text: "から、まだ 家[いえ]に " },
          { text: "帰[かえ]る ことが できるはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses はず both for the last train and for being able to get home; second はず is also natural but more emphatic.",
      },
    ],
  },
  {
    english: "I called the restaurant yesterday, so the reservation should be for six people.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] レストランに 電話[でんわ]したので、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic version using ので and 六人",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] レストランに 電話[でんわ]したから、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "昨日[きのう] 私[わたし]は レストランに 電話[でんわ]したので、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase placed at the beginning",
      },
      {
        segments: [
          { text: "昨日[きのう] 私[わたし]は レストランに 電話[でんわ]したから、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Beginning with 昨日 and using から",
      },
      {
        segments: [
          { text: "私[わたし]は レストランに 昨日[きのう] 電話[でんわ]したので、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "昨日 placed after レストランに",
      },
      {
        segments: [
          { text: "私[わたし]は レストランに 昨日[きのう] 電話[でんわ]したから、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "昨日 after レストランに with から",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]したので、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Subject omitted in the first clause",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]したから、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Subject omitted with から",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]したので、六人[ろくにん]の 予約[よやく]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 六人の予約 as the subject",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]したから、六人[ろくにん]の 予約[よやく]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "六人の予約 with から",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]したので、予約[よやく]は 六名[ろくめい]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Using the more formal counter 六名",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]したから、予約[よやく]は 六名[ろくめい]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Formal counter 六名 with から",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]したので、六名[ろくめい]の 予約[よやく]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "六名の予約 as the subject",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]したから、六名[ろくめい]の 予約[よやく]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "六名の予約 as subject with から",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]をしたので、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 電話をする instead of 電話する",
      },
      {
        segments: [
          { text: "昨日[きのう] レストランに 電話[でんわ]をしたから、予約[よやく]は 六人[ろくにん]" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "電話をする with から",
      },
    ],
  },
  {
    english: "I turned off the light before I went out, so the room should be dark now.",
    answers: [
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]を 消[け]したので、部屋[へや]は 今[いま] " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation with ので and 部屋の電気",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 電気[でんき]を 消[け]したので、部屋[へや]は 今[いま] " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Slightly shorter: 電気 without 部屋の",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]を 消[け]したから、部屋[へや]は 今[いま] " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 電気[でんき]を 消[け]したから、部屋[へや]は 今[いま] " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Shorter version with から",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 電気[でんき]を 消[け]したので、今[いま] 部屋[へや]は " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Changed word order: 今 before 部屋は",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]を 消[け]したから、今[いま] 部屋[へや]は " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Changed word order with から",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]を 消[け]したので、今[いま]は 部屋[へや]が " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今は and 部屋が focus",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]を 消[け]したから、今[いま]は 部屋[へや]が " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今は and 部屋が with から",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]を 消[け]したので、部屋[へや]は 今[いま] " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Includes the subject 私は explicitly",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 電気[でんき]を 消[け]したから、今[いま] 部屋[へや]は " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Explicit subject with shorter 電気 and reordered result clause",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]を 消[け]しておいたので、部屋[へや]は 今[いま] " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ておく to convey turning it off in preparation before going out",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 電気[でんき]を 消[け]しておいたから、部屋[へや]は 今[いま] " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "ておく with から and shorter 電気",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 電気[でんき]を 消[け]しておいたので、今[いま]は 部屋[へや]が " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "ておく with 今は部屋が",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]は 消[け]したので、部屋[へや]は 今[いま] " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Topicalizes the light with 電気は",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に 部屋[へや]の 電気[でんき]は 消[け]したから、今[いま] 部屋[へや]は " },
          { text: "暗[くら]いはず", blank: true },
          { text: "です" },
        ],
        notes: "Topicalized 電気は with から and reordered result clause",
      },
    ],
  },
  {
    english: "I washed this plate this morning, so it should be clean now.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この お皿[さら]を 洗[あら]ったので、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic version using ので and 今は; な-adjective + なはずです",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この お皿[さら]を 洗[あら]ったから、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この お皿[さら]を 洗[あら]ったので、この お皿[さら]は 今[いま]" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Repeats このお皿 as the topic in the second clause",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この お皿[さら]を 洗[あら]ったから、この お皿[さら]は 今[いま]" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Repeats the plate as topic and uses から",
      },
      {
        segments: [
          { text: "私[わたし]は この お皿[さら]を 今朝[けさ] 洗[あら]ったので、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Moves 今朝 after the object",
      },
      {
        segments: [
          { text: "私[わたし]は この お皿[さら]を 今朝[けさ] 洗[あら]ったから、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Moves 今朝 after the object and uses から",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この お皿[さら]を 洗[あら]ったので、今[いま]はもう" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Adds もう to emphasize that it should be clean by now",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この お皿[さら]を 洗[あら]ったから、今[いま]はもう" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Adds もう and uses から",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この お皿[さら]を 洗[あら]ったので、今[いま]は" },
          { text: "きれいになっているはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses きれいになっている to express the resulting clean state",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この お皿[さら]を 洗[あら]ったから、今[いま]は" },
          { text: "きれいになっているはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses きれいになっている with から",
      },
      {
        segments: [
          { text: "今朝[けさ] 私[わたし]は この お皿[さら]を 洗[あら]ったので、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Starts with 今朝 for a different word order",
      },
      {
        segments: [
          { text: "今朝[けさ] 私[わたし]は この お皿[さら]を 洗[あら]ったから、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Starts with 今朝 and uses から",
      },
      {
        segments: [
          { text: "今朝[けさ] この お皿[さら]を 洗[あら]ったので、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Drops 私 when the sentence starts with 今朝",
      },
      {
        segments: [
          { text: "今朝[けさ] この お皿[さら]を 洗[あら]ったから、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Drops 私 and uses から",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この 皿[さら]を 洗[あら]ったので、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses plain 皿 instead of お皿",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] この 皿[さら]を 洗[あら]ったから、今[いま]は" },
          { text: "きれいなはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses plain 皿 and から",
      },
    ],
  },
  {
    english: "This sweater is size L, so it should be big.",
    hint: "size L = エルサイズ; sweater = セーター",
    answers: [
      {
        segments: [
          { text: "この セーターは エルサイズだから、" },
          { text: "大[おお]きいはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using だから for “so”.",
      },
      {
        segments: [
          { text: "この セーターは エルサイズなので、" },
          { text: "大[おお]きいはず", blank: true },
          { text: "です" },
        ],
        notes: "Using なので for a slightly softer/formal reason.",
      },
      {
        segments: [
          { text: "この セーターは エルサイズですから、" },
          { text: "大[おお]きいはず", blank: true },
          { text: "です" },
        ],
        notes: "Using polite-style ですから after the noun phrase.",
      },
      {
        segments: [
          { text: "エルサイズだから、この セーターは " },
          { text: "大[おお]きいはず", blank: true },
          { text: "です" },
        ],
        notes: "Reversed clause order, putting the reason first.",
      },
      {
        segments: [
          { text: "エルサイズなので、この セーターは " },
          { text: "大[おお]きいはず", blank: true },
          { text: "です" },
        ],
        notes: "Reason-first order with なので.",
      },
      {
        segments: [
          { text: "この エルサイズの セーターは " },
          { text: "大[おお]きいはず", blank: true },
          { text: "です" },
        ],
        notes: "Expresses “this size-L sweater” without an explicit conjunction.",
      },
    ],
  },
  {
    english: "According to the weather forecast, it should be sunny tomorrow.",
    answers: [
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、明日[あした]は 晴[は]れる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Standard wording with 天気予報によると and verb 晴れる before はず",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、明日[あした]は 晴[は]れ" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses the noun 晴れ with noun + の + はず",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]によると、明日[あした]の 天気[てんき]は 晴[は]れ" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Makes 明日の天気 the topic, using noun + の + はず",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、明日[あした]は 晴[は]れる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 天気予報では instead of 天気予報によると",
      },
      {
        segments: [
          { text: "明日[あした]は、天気予報[てんきよほう]によると、晴[は]れる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered phrase: starts with 明日は",
      },
      {
        segments: [
          { text: "明日[あした]の 天気[てんき]は、天気予報[てんきよほう]によると、晴[は]れ" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered version with 明日の天気 as the topic",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、明日[あした]は 晴[は]れ" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 天気予報では with noun 晴れ + のはず",
      },
      {
        segments: [
          { text: "天気予報[てんきよほう]では、明日[あした]の 天気[てんき]は 晴[は]れ" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 天気予報では and 明日の天気 as the topic",
      },
      {
        segments: [
          { text: "明日[あした]は、天気予報[てんきよほう]では 晴[は]れる" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered version with 天気予報では",
      },
      {
        segments: [
          { text: "明日[あした]は、天気予報[てんきよほう]では 晴[は]れ" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered version using noun 晴れ + のはず",
      },
      {
        segments: [
          { text: "明日[あした]の 天気[てんき]は、天気予報[てんきよほう]では 晴[は]れ" },
          { text: "のはず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered 明日の天気 topic with 天気予報では",
      },
    ],
  },
  {
    english: "Mika likes blue clothes, so this blue sweater should look good on Mika.",
    hint: "Mika = 美香",
    answers: [
      {
        segments: [
          { text: "美香[みか]さんは 青[あお]い 服[ふく]が 好[す]きだから、この 青[あお]い セーターは 美香[みか]さんに " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using から and marking the sweater with は.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 青[あお]い 服[ふく]が 好[す]きなので、この 青[あお]い セーターは 美香[みか]さんに " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Using ので for a softer cause/reason.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 青[あお]い 服[ふく]が 好[す]きだから、この 青[あお]い セーターは 美香[みか]さんには " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Using には to emphasize that it should look good on Mika in particular.",
      },
      {
        segments: [
          { text: "青[あお]い 服[ふく]が 好[す]きな 美香[みか]さんには、この 青[あお]い セーターは " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses a relative/modifying phrase: 'Mika, who likes blue clothes...'",
      },
      {
        segments: [
          { text: "青[あお]い 服[ふく]が 好[す]きな 美香[みか]さんに、この 青[あお]い セーターは " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Similar relative clause but with に instead of には.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 青[あお]い 服[ふく]が 好[す]きだから、美香[みか]さんには この 青[あお]い セーターが " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses が to mark the sweater as the thing that looks good, with 美香さんには first.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 青[あお]い 服[ふく]が 好[す]きなので、美香[みか]さんには この 青[あお]い セーターが " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses ので and が-marked sweater.",
      },
      {
        segments: [
          { text: "美香[みか]さんは 青[あお]い 服[ふく]が 好[す]きだから、美香[みか]さんに この 青[あお]い セーターが " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Uses に rather than には before Mika in the main clause.",
      },
      {
        segments: [
          { text: "青[あお]い 服[ふく]が 好[す]きな 美香[みか]さんには、この 青[あお]い セーターが " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Relative-clause reason with が marking the sweater.",
      },
      {
        segments: [
          { text: "青[あお]い 服[ふく]が 好[す]きな 美香[みか]さんに、この 青[あお]い セーターが " },
          { text: "似合[にあ]うはず", blank: true },
          { text: "です" },
        ],
        notes: "Relative-clause reason with に and が.",
      },
    ],
  },
  {
    english: "I put the cake in the refrigerator this morning, so it should be cold now.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] ケーキを 冷蔵庫[れいぞうこ]に 入[い]れたので、今[いま]は " },
          { text: "冷[つめ]たいはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using ので and 今は; all vocabulary is known.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] ケーキを 冷蔵庫[れいぞうこ]に 入[い]れたから、今[いま]は " },
          { text: "冷[つめ]たいはず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので for 'so/because'.",
      },
      {
        segments: [
          { text: "今朝[けさ] 私[わたし]は ケーキを 冷蔵庫[れいぞうこ]に 入[い]れたので、今[いま]は " },
          { text: "冷[つめ]たいはず", blank: true },
          { text: "です" },
        ],
        notes: "Time phrase placed at the beginning before the subject.",
      },
      {
        segments: [
          { text: "今朝[けさ] ケーキを 冷蔵庫[れいぞうこ]に 入[い]れたので、今[いま]は " },
          { text: "冷[つめ]たいはず", blank: true },
          { text: "です" },
        ],
        notes: "Natural subject omission after context; expresses the same action by the speaker.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] ケーキを 冷蔵庫[れいぞうこ]の 中[なか]に 入[い]れたので、もう " },
          { text: "冷[つめ]たいはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 冷蔵庫の中に and もう to mean it should be cold by now.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ] ケーキを 冷蔵庫[れいぞうこ]に 入[い]れたので、ケーキは 今[いま] " },
          { text: "冷[つめ]たいはず", blank: true },
          { text: "です" },
        ],
        notes: "Making ケーキ the topic in the second clause.",
      },
      {
        segments: [
          { text: "今朝[けさ] 冷蔵庫[れいぞうこ]に ケーキを 入[い]れたから、今[いま]は " },
          { text: "冷[つめ]たいはず", blank: true },
          { text: "です" },
        ],
        notes: "Object and location order reversed; subject omitted.",
      },
      {
        segments: [
          { text: "今朝[けさ] ケーキを 冷蔵庫[れいぞうこ]に 入[い]れておいたので、今[いま]は " },
          { text: "冷[つめ]たいはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 入れておいた to mean put it in and left it there.",
      },
    ],
  },
  {
    english: "I sent Yuki the map yesterday, so Yuki shouldn't get lost.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]ったので、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Standard translation using the negative of はずです to express 'shouldn't get lost'.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]ったから、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using から instead of ので for the reason.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]ったので、ゆきさんが 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using が for Yuki as the subject in the expected outcome.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]ったから、ゆきさんが 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using から and が.",
      },
      {
        segments: [
          { text: "昨日[きのう] 私[わたし]は ゆきさんに 地図[ちず]を 送[おく]ったので、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Time expression placed at the beginning.",
      },
      {
        segments: [
          { text: "昨日[きのう] 私[わたし]は ゆきさんに 地図[ちず]を 送[おく]ったから、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Time expression at the beginning with から.",
      },
      {
        segments: [
          { text: "昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]ったので、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Initial 私は omitted; natural in context.",
      },
      {
        segments: [
          { text: "昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]ったから、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Initial 私は omitted with から.",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]ったので、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using が to mark the speaker as the sender.",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]ったから、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using が for the sender and から for the reason.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] 地図[ちず]を ゆきさんに 送[おく]ったので、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Object 地図を placed before the recipient ゆきさんに.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] 地図[ちず]を ゆきさんに 送[おく]ったから、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Object before recipient with から.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]っておいたので、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 送っておいた to imply the map was sent in preparation.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]っておいたから、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 送っておいた with から.",
      },
      {
        segments: [
          { text: "昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]っておいたので、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Omitted subject with 送っておいた.",
      },
      {
        segments: [
          { text: "昨日[きのう] ゆきさんに 地図[ちず]を 送[おく]っておいたから、ゆきさんは 道[みち]に 迷[まよ]う" },
          { text: "はず", blank: true },
          { text: "では" },
          { text: "ある", conjugation: { pos: "Godan verb - -aru special class", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Omitted subject with 送っておいた and から.",
      },
    ],
  },
  {
    english: "I put the key in my pocket before I went out, so it should still be in my pocket.",
    hint: "pocket = ポケット; key = 鍵",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたので、まだ ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using ので and まだ",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に ポケットに 鍵[かぎ]を 入[い]れたので、鍵[かぎ]は まだ ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Object and location order reversed in the first clause; 鍵 is topicalized in the second clause",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたから、まだ ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたので、鍵[かぎ]は まだ ポケットの 中[なか]に ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using ポケットの中に for 'inside my pocket'",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたので、鍵[かぎ]は まだ ポケットの 中[なか]の" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using noun + のはず with ポケットの中",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたので、まだ ポケットに 入[はい]っている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using 入っている to express being in the pocket",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたから、鍵[かぎ]は まだ ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using から and topicalizing 鍵 in the second clause",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたから、鍵[かぎ]は まだ ポケットの 中[なか]に ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using から plus ポケットの中に",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたから、まだ ポケットに 入[はい]っている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using 入っている with から",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に ポケットに 鍵[かぎ]を 入[い]れたから、まだ ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Reversed order in the first clause with から",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に ポケットに 鍵[かぎ]を 入[い]れたので、まだ ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Reversed order in the first clause with ので",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れておいたので、まだ ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using ておく to emphasize putting it there in advance before going out",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れておいたから、まだ ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using ておく with から",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れておいたので、鍵[かぎ]は まだ ポケットに 入[はい]っている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using ておく in the first clause and 入っている in the conclusion",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたので、今[いま]も ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今も instead of まだ for 'still'",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に 鍵[かぎ]を ポケットに 入[い]れたから、今[いま]も ポケットに ある" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今も with から",
      },
    ],
  },
  {
    english: "I put new batteries in the camera this morning, so the camera should be usable now.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたので、今[いま]は カメラが " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using ので and が for the camera as the subject.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたから、今[いま]は カメラが " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので for the reason.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、新[あたら]しい 電池[でんち]を カメラに 入[い]れたので、今[いま]は カメラが " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered object and destination: batteries before camera.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、新[あたら]しい 電池[でんち]を カメラに 入[い]れたから、今[いま]は カメラが " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered object/destination with から.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたので、カメラは 今[いま] " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Using カメラは as the topic in the main clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたから、カメラは 今[いま] " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "カメラは as main topic, with から.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたので、今[いま]は " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Omitting the repeated subject カメラ in the main clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたから、今[いま]は " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Omitting the repeated subject カメラ, with から.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたので、カメラは もう " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Using もう to express “now/already usable.”",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたから、カメラは もう " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Using もう with から.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れておいたので、今[いま]は カメラが " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Using ておく to imply the batteries were put in in preparation.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れておいたから、今[いま]は カメラが " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Using ておく with から.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れておいたので、カメラは もう " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "ておく plus もう, focusing on prepared usability.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れておいたから、カメラは もう " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "ておく plus もう, with から.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラの 電池[でんち]を 新[あたら]しいのに したので、今[いま]は カメラが " },
          { text: "使[つか]えるはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 電池を新しいのにした to mean changed to new batteries.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたので、今[いま]は カメラを " },
          { text: "使[つか]うことができるはず", blank: true },
          { text: "です" },
        ],
        notes: "Using ことができる instead of the potential verb 使える.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたから、今[いま]は カメラを " },
          { text: "使[つか]うことができるはず", blank: true },
          { text: "です" },
        ],
        notes: "ことができる variant with から.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、カメラに 新[あたら]しい 電池[でんち]を 入[い]れたので、カメラは 今[いま] " },
          { text: "使[つか]うことができるはず", blank: true },
          { text: "です" },
        ],
        notes: "Less idiomatic than 使える but acceptable; camera as topic with ことができる.",
      },
    ],
  },
  {
    english: "I studied for three hours yesterday, so today's test should be easy.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したので、今日[きょう]の テストは " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using ので and な-adjective 簡単な + はず",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したから、今日[きょう]の テストは " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので for 'so/because'",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したので、今日[きょう]の 試験[しけん]は " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 試験 instead of テスト",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したから、今日[きょう]の 試験[しけん]は " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "試験 with から",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したので、今日[きょう]の テストは " },
          { text: "やさしいはず", blank: true },
          { text: "です" },
        ],
        notes: "Using い-adjective やさしい for 'easy'",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したから、今日[きょう]の テストは " },
          { text: "やさしいはず", blank: true },
          { text: "です" },
        ],
        notes: "やさしい with から",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したので、今日[きょう]の 試験[しけん]は " },
          { text: "やさしいはず", blank: true },
          { text: "です" },
        ],
        notes: "試験 and い-adjective やさしい",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したから、今日[きょう]の 試験[しけん]は " },
          { text: "やさしいはず", blank: true },
          { text: "です" },
        ],
        notes: "試験 and やさしい with から",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん]も 勉強[べんきょう]したので、今日[きょう]の テストは " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using も after 三時間 to emphasize 'as much as three hours'",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん]も 勉強[べんきょう]したから、今日[きょう]の テストは " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Emphatic 三時間も with から",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん]も 勉強[べんきょう]したので、今日[きょう]の 試験[しけん]は " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Emphatic 三時間も with 試験",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん]も 勉強[べんきょう]したから、今日[きょう]の 試験[しけん]は " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Emphatic 三時間も, 試験, and から",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん]も 勉強[べんきょう]したので、今日[きょう]の テストは " },
          { text: "やさしいはず", blank: true },
          { text: "です" },
        ],
        notes: "Emphatic 三時間も with やさしい",
      },
      {
        segments: [
          { text: "昨日[きのう] 三時間[さんじかん]も 勉強[べんきょう]したから、今日[きょう]の テストは " },
          { text: "やさしいはず", blank: true },
          { text: "です" },
        ],
        notes: "Emphatic 三時間も with やさしい and から",
      },
      {
        segments: [
          { text: "三時間[さんじかん] 昨日[きのう] 勉強[べんきょう]したので、今日[きょう]の テストは " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Reordered time duration before 昨日",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したので、今日[きょう]の テストは " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark the subject with slight emphasis on who studied",
      },
      {
        segments: [
          { text: "私[わたし]が 昨日[きのう] 三時間[さんじかん] 勉強[べんきょう]したから、今日[きょう]の テストは " },
          { text: "簡単[かんたん]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using が with から",
      },
    ],
  },
  {
    english: "Checkout is at ten, so the front desk should be busy now.",
    hint: "checkout = チェックアウト; front desk = フロント",
    answers: [
      {
        segments: [
          { text: "チェックアウトは 十時[じゅうじ]なので、フロントは 今[いま] " },
          { text: "忙[いそが]しいはず", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using ので and フロントは",
      },
      {
        segments: [
          { text: "チェックアウトは 十時[じゅうじ]だから、フロントは 今[いま] " },
          { text: "忙[いそが]しいはず", blank: true },
          { text: "です" },
        ],
        notes: "Using だから for the reason clause",
      },
      {
        segments: [
          { text: "チェックアウトは 十時[じゅうじ]なので、今[いま] フロントは " },
          { text: "忙[いそが]しいはず", blank: true },
          { text: "です" },
        ],
        notes: "Moving 今 before フロント",
      },
      {
        segments: [
          { text: "十時[じゅうじ]に チェックアウトなので、フロントは 今[いま] " },
          { text: "忙[いそが]しいはず", blank: true },
          { text: "です" },
        ],
        notes: "Expressing checkout time with 十時に",
      },
      {
        segments: [
          { text: "十時[じゅうじ]に チェックアウトだから、フロントは 今[いま] " },
          { text: "忙[いそが]しいはず", blank: true },
          { text: "です" },
        ],
        notes: "十時に plus だから",
      },
      {
        segments: [
          { text: "チェックアウトは 十時[じゅうじ]なので、今[いま]は フロントが " },
          { text: "忙[いそが]しいはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 今は and が to mark the front desk as the subject",
      },
      {
        segments: [
          { text: "チェックアウトの 時間[じかん]は 十時[じゅうじ]なので、フロントは 今[いま] " },
          { text: "忙[いそが]しいはず", blank: true },
          { text: "です" },
        ],
        notes: "Explicitly saying checkout time",
      },
      {
        segments: [
          { text: "チェックアウトの 時間[じかん]は 十時[じゅうじ]だから、フロントは 今[いま] " },
          { text: "忙[いそが]しいはず", blank: true },
          { text: "です" },
        ],
        notes: "Explicit checkout time with だから",
      },
    ],
  },
  {
    english: "I pressed the switch, so the heater should be on now.",
    hint: "switch = スイッチ; heater = ヒーター",
    answers: [
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したので、ヒーターは 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using ので and topical ヒーターは",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したから、ヒーターは 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 押[お]したので、ヒーターは 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies that it was the heater's switch",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 押[お]したから、ヒーターは 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies the heater's switch and uses から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したので、今[いま] ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Moves 今 before the topic",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したから、今[いま] ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Moves 今 before the topic with から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したので、ヒーターは もう ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses もう to express that it should be on by now",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したから、ヒーターは もう ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses もう with から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したので、ヒーターが 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses が to mark the heater as the subject",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したから、ヒーターが 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses が with から",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 押[お]したので、ヒーターが 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies the heater's switch and uses が",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 押[お]したから、ヒーターが 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies the heater's switch, with から and が",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したので、今[いま]は ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今は and が",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したから、今[いま]は ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今は and が with から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したので、ヒーターが もう ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses もう and が",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したから、ヒーターが もう ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses もう and が with から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したので、今[いま]ごろ ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今ごろ to mean 'by now'",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したから、今[いま]ごろ ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今ごろ with から",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 押[お]したので、今[いま]ごろ ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies heater switch and uses 今ごろ",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 押[お]したから、今[いま]ごろ ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies heater switch, uses 今ごろ and から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したので、今[いま]ごろは ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今ごろは and marks ヒーター with が",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 押[お]したから、今[いま]ごろは ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今ごろは with が and から",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 押[お]したので、今[いま]ごろは ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies the heater's switch; 今ごろは with が",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 押[お]したから、今[いま]ごろは ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies the heater's switch; 今ごろは with が and から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたので、ヒーターは 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses スイッチを入れる, the natural phrase for turning a switch on",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたから、ヒーターは 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses スイッチを入れる with から",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 入[い]れたので、ヒーターは 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies turning on the heater's switch",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 入[い]れたから、ヒーターは 今[いま] ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies turning on the heater's switch with から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたので、ヒーターは もう ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses スイッチを入れる and もう",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたから、ヒーターは もう ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses スイッチを入れる, もう, and から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたので、今[いま]は ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses スイッチを入れる with 今は and が",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたから、今[いま]は ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses スイッチを入れる with 今は, が, and から",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 入[い]れたので、今[いま]は ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies heater switch; 今は with が",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 入[い]れたから、今[いま]は ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies heater switch; 今は with が and から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたので、今[いま]ごろ ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses スイッチを入れる with 今ごろ",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたから、今[いま]ごろ ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses スイッチを入れる with 今ごろ and から",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 入[い]れたので、今[いま]ごろ ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies heater switch and uses 今ごろ",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 入[い]れたから、今[いま]ごろ ヒーターは ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies heater switch and uses 今ごろ with から",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたので、今[いま]ごろは ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今ごろは with が",
      },
      {
        segments: [
          { text: "私[わたし]は スイッチを 入[い]れたから、今[いま]ごろは ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Uses 今ごろは with が and から",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 入[い]れたので、今[いま]ごろは ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies heater switch; 今ごろは with が",
      },
      {
        segments: [
          { text: "私[わたし]は ヒーターの スイッチを 入[い]れたから、今[いま]ごろは ヒーターが ついている" },
          { text: "はず", blank: true },
          { text: "です" },
        ],
        notes: "Specifies heater switch; 今ごろは with が and から",
      },
    ],
  },
  {
    english: "I locked the house before I came to school, so the house should be okay.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 学校[がっこう]に 来[く]る 前[まえ]に、家[いえ]に 鍵[かぎ]を かけたので、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Basic translation using ので and 家に鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は 学校[がっこう]に 来[く]る 前[まえ]に、家[いえ]に 鍵[かぎ]を かけたから、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using から instead of ので",
      },
      {
        segments: [
          { text: "私[わたし]は 学校[がっこう]へ 来[く]る 前[まえ]に、家[いえ]に 鍵[かぎ]を かけたので、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using へ with 来る instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は 学校[がっこう]に 来[く]る 前[まえ]に、家[いえ]の 鍵[かぎ]を かけたので、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 家の鍵をかける for locking the house",
      },
      {
        segments: [
          { text: "私[わたし]は 家[いえ]に 鍵[かぎ]を かけてから 学校[がっこう]に 来[き]たので、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using てから to express the sequence: locked it, then came to school",
      },
      {
        segments: [
          { text: "私[わたし]は 学校[がっこう]に 来[く]る 前[まえ]に 家[いえ]に 鍵[かぎ]を かけておいたので、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using ておく to emphasize locking the house in advance",
      },
      {
        segments: [
          { text: "私[わたし]は 学校[がっこう]に 来[く]る 前[まえ]に 家[いえ]に 鍵[かぎ]を かけておいたから、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using both ておく and から",
      },
      {
        segments: [
          { text: "私[わたし]は 学校[がっこう]へ 来[く]る 前[まえ]に、家[いえ]の 鍵[かぎ]を かけたので、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Combining へ and 家の鍵",
      },
      {
        segments: [
          { text: "私[わたし]は 家[いえ]の 鍵[かぎ]を かけてから 学校[がっこう]に 来[き]たので、家[いえ]は " },
          { text: "大丈夫[だいじょうぶ]なはず", blank: true },
          { text: "です" },
        ],
        notes: "Using 家の鍵 and てから sequence",
      },
    ],
  },
];
