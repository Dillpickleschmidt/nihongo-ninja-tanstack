import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Since you have a fever, why don't you rest at home today?",
    answers: [
      {
        segments: [
          { text: "熱[ねつ]があるので、 今日[きょう]は 家[いえ]で" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses ゆっくりする to mean rest/take it easy; avoids 休む wording",
      },
      {
        segments: [
          { text: "熱[ねつ]があるから、 今日[きょう]は 家[いえ]で" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses から instead of ので for the reason",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので、 家[いえ]で 今日[きょう]は" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 家で before 今日は",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので、 今日[きょう]、 家[いえ]で" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 今日 as a simple time adverb instead of topic 今日は",
      },
      {
        segments: [
          { text: "今日[きょう]は 熱[ねつ]があるので、 家[いえ]で" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Moves 今日は into the reason clause",
      },
      {
        segments: [
          { text: "熱[ねつ]があるから、 家[いえ]で 今日[きょう]は" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses から and changes word order",
      },
      {
        segments: [
          { text: "熱[ねつ]があるから、 今日[きょう]、 家[いえ]で" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses から with 今日 as time adverb",
      },
      {
        segments: [
          { text: "今日[きょう]は 熱[ねつ]があるから、 家[いえ]で" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Moves 今日は into the reason clause with から",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので、 今日[きょう]は 家[いえ]にいて、" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Expresses staying at home and taking it easy",
      },
      {
        segments: [
          { text: "熱[ねつ]があるから、 今日[きょう]は 家[いえ]にいて、" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Staying at home wording with から",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので、 今日[きょう]は 家[いえ]で" },
          { text: "寝[ね]たらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 寝る as a concrete way to rest",
      },
      {
        segments: [
          { text: "熱[ねつ]があるから、 今日[きょう]は 家[いえ]で" },
          { text: "寝[ね]たらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 寝る with から",
      },
      {
        segments: [
          { text: "今日[きょう]は 熱[ねつ]があるので、 家[いえ]で" },
          { text: "寝[ね]たらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Moves 今日は into the reason clause with 寝る",
      },
      {
        segments: [
          { text: "今日[きょう]は 熱[ねつ]があるから、 家[いえ]で" },
          { text: "寝[ね]たらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Moves 今日は into the reason clause with から and 寝る",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので、 今日[きょう]は 家[いえ]で" },
          { text: "ゆっくりしたらどう", blank: true },
          { text: "か" },
        ],
        notes: "Uses どうか instead of どうですか",
      },
      {
        register: "casual",
        segments: [
          { text: "熱[ねつ]があるから、 今日[きょう]は 家[いえ]で" },
          { text: "ゆっくりしたらどう", blank: true },
        ],
        notes: "Uses plain どう without ですか",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので、 今日[きょう]は 家[いえ]で" },
          { text: "寝[ね]たらどう", blank: true },
          { text: "か" },
        ],
        notes: "Uses 寝る with どうか",
      },
      {
        register: "casual",
        segments: [
          { text: "熱[ねつ]があるから、 今日[きょう]は 家[いえ]で" },
          { text: "寝[ね]たらどう", blank: true },
        ],
        notes: "Uses 寝る with plain どう",
      },
    ],
  },
  {
    english: "Why don't you call the hospital right away?",
    answers: [
      {
        segments: [
          { text: "すぐ 病院[びょういん]に" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Basic wording with すぐ and に for the call destination.",
      },
      {
        segments: [
          { text: "病院[びょういん]に すぐ" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places the destination before すぐ.",
      },
      {
        segments: [
          { text: "今[いま]すぐ 病院[びょういん]に" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 今すぐ for “right away.”",
      },
      {
        segments: [
          { text: "病院[びょういん]に 今[いま]すぐ" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 今すぐ with a different word order.",
      },
      {
        segments: [
          { text: "すぐ 病院[びょういん]に" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 電話をする instead of 電話する.",
      },
      {
        segments: [
          { text: "今[いま]すぐ 病院[びょういん]に" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 電話をする with 今すぐ.",
      },
      {
        segments: [
          { text: "すぐに 病院[びょういん]に" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses すぐに instead of すぐ.",
      },
      {
        segments: [
          { text: "病院[びょういん]に すぐに" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places すぐに after the destination.",
      },
      {
        segments: [
          { text: "すぐに 病院[びょういん]に" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses both すぐに and 電話をする.",
      },
      {
        segments: [
          { text: "病院[びょういん]に すぐに" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses すぐに after the destination with 電話をする.",
      },
      {
        segments: [
          { text: "病院[びょういん]へ すぐ" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ instead of に for the call destination.",
      },
      {
        segments: [
          { text: "すぐ 病院[びょういん]へ" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ with すぐ before the destination.",
      },
      {
        segments: [
          { text: "病院[びょういん]へ 今[いま]すぐ" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ and 今すぐ after the destination.",
      },
      {
        segments: [
          { text: "今[いま]すぐ 病院[びょういん]へ" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ and 今すぐ before the destination.",
      },
      {
        segments: [
          { text: "病院[びょういん]へ すぐに" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ with すぐに after the destination.",
      },
      {
        segments: [
          { text: "すぐに 病院[びょういん]へ" },
          { text: "電話[でんわ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ with すぐに before the destination.",
      },
      {
        segments: [
          { text: "病院[びょういん]へ すぐ" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ and 電話をする.",
      },
      {
        segments: [
          { text: "すぐ 病院[びょういん]へ" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ and 電話をする with すぐ first.",
      },
      {
        segments: [
          { text: "病院[びょういん]へ 今[いま]すぐ" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ, 今すぐ, and 電話をする.",
      },
      {
        segments: [
          { text: "今[いま]すぐ 病院[びょういん]へ" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ, 今すぐ, and 電話をする with 今すぐ first.",
      },
      {
        segments: [
          { text: "病院[びょういん]へ すぐに" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ, すぐに, and 電話をする.",
      },
      {
        segments: [
          { text: "すぐに 病院[びょういん]へ" },
          { text: "電話[でんわ]をしたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ, すぐに, and 電話をする with すぐに first.",
      },
      {
        segments: [
          { text: "すぐ 病院[びょういん]に" },
          { text: "電話[でんわ]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Adds てみる nuance: “try calling.”",
      },
      {
        segments: [
          { text: "今[いま]すぐ 病院[びょういん]に" },
          { text: "電話[でんわ]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 今すぐ with てみる nuance.",
      },
      {
        segments: [
          { text: "病院[びょういん]に 今[いま]すぐ" },
          { text: "電話[でんわ]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 今すぐ after 病院に with てみる nuance.",
      },
      {
        segments: [
          { text: "すぐに 病院[びょういん]に" },
          { text: "電話[でんわ]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses すぐに with てみる nuance.",
      },
      {
        segments: [
          { text: "すぐ 病院[びょういん]へ" },
          { text: "電話[でんわ]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ with てみる nuance.",
      },
      {
        segments: [
          { text: "今[いま]すぐ 病院[びょういん]へ" },
          { text: "電話[でんわ]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ, 今すぐ, and てみる nuance.",
      },
      {
        segments: [
          { text: "病院[びょういん]へ 今[いま]すぐ" },
          { text: "電話[でんわ]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 今すぐ after 病院へ with てみる nuance.",
      },
      {
        segments: [
          { text: "すぐに 病院[びょういん]へ" },
          { text: "電話[でんわ]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses すぐに and へ with てみる nuance.",
      },
    ],
  },
  {
    english: "That umbrella is old, so why don't you buy a new umbrella at the convenience store?",
    answers: [
      {
        segments: [
          { text: "その 傘[かさ]は 古[ふる]いので、コンビニで 新[あたら]しい 傘[かさ]を" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Basic version with その傘 and コンビニで before the object",
      },
      {
        segments: [
          { text: "その 傘[かさ]は 古[ふる]いので、新[あたら]しい 傘[かさ]をコンビニで" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Object placed before the location",
      },
      {
        segments: [
          { text: "あの 傘[かさ]は 古[ふる]いので、コンビニで 新[あたら]しい 傘[かさ]を" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの for 'that' umbrella over there",
      },
      {
        segments: [
          { text: "あの 傘[かさ]は 古[ふる]いので、新[あたら]しい 傘[かさ]をコンビニで" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの, with object before location",
      },
      {
        segments: [
          { text: "その 傘[かさ]は 古[ふる]いから、コンビニで 新[あたら]しい 傘[かさ]を" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using から instead of ので for the reason",
      },
      {
        segments: [
          { text: "その 傘[かさ]は 古[ふる]いから、新[あたら]しい 傘[かさ]をコンビニで" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using から, with object before location",
      },
      {
        segments: [
          { text: "あの 傘[かさ]は 古[ふる]いから、コンビニで 新[あたら]しい 傘[かさ]を" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの and から",
      },
      {
        segments: [
          { text: "あの 傘[かさ]は 古[ふる]いから、新[あたら]しい 傘[かさ]をコンビニで" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの and から, with object before location",
      },
      {
        segments: [
          { text: "その 傘[かさ]が 古[ふる]いので、コンビニで 新[あたら]しい 傘[かさ]を" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using が instead of は to mark the old umbrella as the subject",
      },
      {
        segments: [
          { text: "あの 傘[かさ]が 古[ふる]いので、コンビニで 新[あたら]しい 傘[かさ]を" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using が with あの",
      },
      {
        segments: [
          { text: "その 傘[かさ]が 古[ふる]いから、コンビニで 新[あたら]しい 傘[かさ]を" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using が and から",
      },
      {
        segments: [
          { text: "あの 傘[かさ]が 古[ふる]いから、コンビニで 新[あたら]しい 傘[かさ]を" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using が and から with あの",
      },
      {
        segments: [
          { text: "その 傘[かさ]は 古[ふる]いので、コンビニで 新[あたら]しいのを" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using 新しいの to avoid repeating 傘",
      },
      {
        segments: [
          { text: "あの 傘[かさ]は 古[ふる]いので、コンビニで 新[あたら]しいのを" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの and 新しいの",
      },
      {
        segments: [
          { text: "その 傘[かさ]は 古[ふる]いから、コンビニで 新[あたら]しいのを" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using から and 新しいの",
      },
      {
        segments: [
          { text: "あの 傘[かさ]は 古[ふる]いから、コンビニで 新[あたら]しいのを" },
          { text: "買[か]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの, から, and 新しいの",
      },
    ],
  },
  {
    english: "If the homework is difficult, why don't you ask the teacher?",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]が 難[むずか]しいなら、先生[せんせい]に" },
          { text: "聞[き]いたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Standard translation using が for the homework and 聞く for asking the teacher",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が 難[むずか]しいなら、先生[せんせい]に" },
          { text: "聞[き]いてみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Adds てみる nuance: why don't you try asking the teacher",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が 難[むずか]しいなら、先生[せんせい]に" },
          { text: "質問[しつもん]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 質問する instead of 聞く for 'ask a question'",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が 難[むずか]しいなら、先生[せんせい]に" },
          { text: "質問[しつもん]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 質問してみる: try asking a question",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が 難[むずか]しいなら、先生[せんせい]に" },
          { text: "相談[そうだん]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 相談する for asking/consulting the teacher about it",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が 難[むずか]しいなら、先生[せんせい]に" },
          { text: "相談[そうだん]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 相談してみる: try consulting the teacher",
      },
    ],
  },
  {
    english: "Why don't you take some medicine?",
    answers: [
      {
        segments: [
          { text: "薬[くすり]を" },
          { text: "飲[の]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Natural suggestion using てみる: try taking medicine",
      },
      {
        segments: [
          { text: "少[すこ]し 薬[くすり]を" },
          { text: "飲[の]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Adds 少し to reflect “some medicine”",
      },
      {
        segments: [
          { text: "薬[くすり]" },
          { text: "飲[の]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Casual particle drop of を before 飲む",
      },
      {
        segments: [
          { text: "薬[くすり]を 少[すこ]し" },
          { text: "飲[の]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 少し before the verb",
      },
      {
        segments: [
          { text: "ちょっと 薬[くすり]を" },
          { text: "飲[の]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses ちょっと for “some/a little”",
      },
      {
        segments: [
          { text: "薬[くすり]を ちょっと" },
          { text: "飲[の]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places ちょっと before the verb",
      },
      {
        segments: [
          { text: "痛[いた]み 止[ど]めを" },
          { text: "飲[の]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses a specific medicine: painkiller",
      },
    ],
  },
  {
    english: "That movie is boring, so why don't you read this book?",
    answers: [
      {
        segments: [
          { text: "その 映画[えいが]はつまらないので、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using てみる to suggest trying to read the book.",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はつまらないので、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの plus てみる.",
      },
      {
        segments: [
          { text: "その 映画[えいが]はつまらないから、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using から plus てみる.",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はつまらないから、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの, から, and てみる.",
      },
      {
        segments: [
          { text: "その 映画[えいが]がつまらないので、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using が instead of は to mark the movie as the reason/context.",
      },
      {
        segments: [
          { text: "あの 映画[えいが]がつまらないので、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの and が.",
      },
      {
        segments: [
          { text: "その 映画[えいが]がつまらないから、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using が with から.",
      },
      {
        segments: [
          { text: "あの 映画[えいが]がつまらないから、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの, が, and から.",
      },
      {
        segments: [
          { text: "その 映画[えいが]はつまらないし、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using し to present the boring movie as a reason.",
      },
      {
        segments: [
          { text: "あの 映画[えいが]はつまらないし、この 本[ほん]を" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using あの with し.",
      },
      {
        segments: [
          { text: "その 映画[えいが]はつまらないので、この 本[ほん]" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Dropping を after この本, natural in spoken Japanese.",
      },
      {
        segments: [
          { text: "その 映画[えいが]はつまらないから、この 本[ほん]" },
          { text: "読[よ]んでみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Dropping を with から.",
      },
    ],
  },
  {
    english: "Yuki has a piano test tomorrow, so why doesn't Yuki practice one more time tonight?",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノのテストがあるので、今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Basic translation using ので and もう一度 before the suggestion.",
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノのテストがあるので、今夜[こんや] もう 一度[いちど] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 今夜 instead of 今晩.",
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノのテストがあるので、今晩[こんばん] もう 一回[いっかい] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses もう一回 instead of もう一度.",
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノの試験[しけん]があるので、今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 試験 instead of テスト.",
      },
      {
        segments: [
          { text: "明日[あした] ゆきさんは ピアノのテストがあるので、今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Moves 明日 to the beginning of the sentence.",
      },
      {
        segments: [
          { text: "ゆきさんは ピアノのテストが 明日[あした] あるので、今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 明日 after the subject of the test.",
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノのテストがあるので、もう 一度[いちど] 今晩[こんばん] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places もう一度 before 今晩.",
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノのテストがあるから、今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses から instead of ので for 'so/since'.",
      },
      {
        segments: [
          { text: "明日[あした] ピアノのテストがあるから、ゆきさんは 今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses から and places the reason first without repeating ゆき as possessor.",
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノの試験[しけん]があるから、今夜[こんや] もう 一回[いっかい] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Combines から, 試験, 今夜, and もう一回.",
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノのテストがあるので、今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses てみる to mean 'try practicing'.",
      },
      {
        segments: [
          { text: "ゆきさんは 明日[あした] ピアノのテストがあるから、今夜[こんや] もう 一回[いっかい] " },
          { text: "練習[れんしゅう]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses てみる with から, 今夜, and もう一回.",
      },
      {
        segments: [
          { text: "明日[あした] ピアノの試験[しけん]があるので、ゆきさんは 今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses てみる with 試験 and moves ゆきさん into the suggestion clause.",
      },
      {
        segments: [
          { text: "ゆきさんのピアノのテストが 明日[あした] あるので、今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses ゆきさんのピアノのテスト as the subject instead of ゆきさんは.",
      },
      {
        segments: [
          { text: "ゆきさんのピアノのテストが 明日[あした] あるから、今夜[こんや] もう 一回[いっかい] " },
          { text: "練習[れんしゅう]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Possessive test phrasing with から, 今夜, and もう一回.",
      },
      {
        segments: [
          { text: "ゆきさんのピアノの試験[しけん]が 明日[あした] あるので、今晩[こんばん] もう 一度[いちど] " },
          { text: "練習[れんしゅう]してみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Possessive test phrasing with 試験 and てみる.",
      },
    ],
  },
  {
    english: "Kenji, why don't you send the landlord a reply today?",
    hint: "Kenji = 健二",
    answers: [
      {
        segments: [
          { text: "健二[けんじ]さん、 今日[きょう] 大家[おおや]さんに お返事[へんじ]を" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Basic translation with お返事 and に marking the recipient.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 今日[きょう] 大家[おおや]さんに 返事[へんじ]を" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses plain 返事 instead of お返事.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 今日[きょう] 大家[おおや]さんへ お返事[へんじ]を" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ instead of に for the direction/recipient.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 今日[きょう] 大家[おおや]さんへ 返事[へんじ]を" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ with plain 返事.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 大家[おおや]さんに 今日[きょう] お返事[へんじ]を" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Moves 今日 after the recipient.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 大家[おおや]さんに 今日[きょう] 返事[へんじ]を" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Moves 今日 after the recipient and uses plain 返事.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 大家[おおや]さんへ 今日[きょう] お返事[へんじ]を" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ and places 今日 after the recipient.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 大家[おおや]さんへ 今日[きょう] 返事[へんじ]を" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses へ, plain 返事, and altered word order.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 今日[きょう] お返事[へんじ]を 大家[おおや]さんに" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places the object before the recipient.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 今日[きょう] 返事[へんじ]を 大家[おおや]さんに" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Object-before-recipient order with plain 返事.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 今日[きょう] お返事[へんじ]を 大家[おおや]さんへ" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Object-before-recipient order using へ.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 今日[きょう] 返事[へんじ]を 大家[おおや]さんへ" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Object-before-recipient order using へ and plain 返事.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 大家[おおや]さんに お返事[へんじ]を 今日[きょう]" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 今日 immediately before the verb.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 大家[おおや]さんに 返事[へんじ]を 今日[きょう]" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 今日 before the verb with plain 返事.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 大家[おおや]さんへ お返事[へんじ]を 今日[きょう]" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 今日 before the verb and uses へ.",
      },
      {
        segments: [
          { text: "健二[けんじ]さん、 大家[おおや]さんへ 返事[へんじ]を 今日[きょう]" },
          { text: "送[おく]ったらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places 今日 before the verb, uses へ, and plain 返事.",
      },
    ],
  },
  {
    english: "Mika, why don't you return that sweater to the store?",
    hint: "Mika = みか; sweater = セーター",
    answers: [
      {
        segments: [
          { text: "みかさん、その セーターを 店[みせ]に " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Basic wording with 店に and polite たらどうですか",
      },
      {
        register: "casual",
        segments: [
          { text: "みかさん、その セーターを 店[みせ]に " },
          { text: "返[かえ]したらどう", blank: true },
        ],
        notes: "Casual/shorter たらどう without ですか",
      },
      {
        segments: [
          { text: "みかさん、店[みせ]に その セーターを " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Reversed object/location order",
      },
      {
        segments: [
          { text: "みかさん、その セーター、店[みせ]に " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Natural topic-like pause with を omitted",
      },
      {
        segments: [
          { text: "みかさん、その セーターを お 店[みせ]に " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using お 店 for 'the store'",
      },
      {
        segments: [
          { text: "みかさん、その セーターを 店[みせ]へ " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using direction particle へ instead of に",
      },
      {
        segments: [
          { text: "みかさん、その セーターを その 店[みせ]に " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Specifying 'that store' with その 店",
      },
      {
        segments: [
          { text: "みかさん、その セーターを " },
          { text: "返品[へんぴん]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using 返品する as a natural synonym for return an item",
      },
      {
        segments: [
          { text: "みかさん、その セーターを お 店[みせ]へ " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "お 店 with へ",
      },
      {
        segments: [
          { text: "みかさん、お 店[みせ]に その セーターを " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "お 店 and reversed order",
      },
      {
        segments: [
          { text: "みかさん、その セーター、お 店[みせ]に " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "お 店 with を omitted",
      },
      {
        segments: [
          { text: "みかさん、その セーターを 店[みせ]に " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "か" },
        ],
        notes: "Using たらどうか",
      },
      {
        register: "casual",
        segments: [
          { text: "みかさん、店[みせ]に その セーターを " },
          { text: "返[かえ]したらどう", blank: true },
        ],
        notes: "Reversed order with casual たらどう",
      },
      {
        register: "casual",
        segments: [
          { text: "みかさん、その セーター、店[みせ]に " },
          { text: "返[かえ]したらどう", blank: true },
        ],
        notes: "Object particle omitted with casual たらどう",
      },
      {
        segments: [
          { text: "みかさん、その セーターを その 店[みせ]へ " },
          { text: "返[かえ]したらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "その 店 with direction particle へ",
      },
    ],
  },
  {
    english: "Why don't you ask someone at the station?",
    answers: [
      {
        segments: [
          { text: "駅[えき]で 誰[だれ]かに" },
          { text: "聞[き]いたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Standard wording with 駅で and 誰かに; polite どうですか form.",
      },
      {
        segments: [
          { text: "駅[えき]で 誰[だれ]かに" },
          { text: "聞[き]いてみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses てみる to mean “try asking someone.”",
      },
      {
        segments: [
          { text: "駅[えき]にいる 誰[だれ]かに" },
          { text: "聞[き]いたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 駅にいる誰か to specify “someone who is at the station.”",
      },
      {
        segments: [
          { text: "駅[えき]にいる 誰[だれ]かに" },
          { text: "聞[き]いてみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 駅にいる誰か plus てみる for “try asking.”",
      },
      {
        segments: [
          { text: "駅[えき]の 人[ひと]に" },
          { text: "聞[き]いたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 駅の人, a natural way to refer to someone/staff at the station.",
      },
      {
        segments: [
          { text: "駅[えき]の 人[ひと]に" },
          { text: "聞[き]いてみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 駅の人 with てみる.",
      },
      {
        segments: [
          { text: "駅員[えきいん]に" },
          { text: "聞[き]いたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 駅員 (station staff), a natural specific interpretation of someone at the station.",
      },
      {
        segments: [
          { text: "駅員[えきいん]に" },
          { text: "聞[き]いてみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 駅員 with てみる.",
      },
      {
        segments: [
          { text: "駅[えき]で 駅員[えきいん]に" },
          { text: "聞[き]いたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Explicitly includes the location 駅で and station staff.",
      },
      {
        segments: [
          { text: "駅[えき]で 駅員[えきいん]に" },
          { text: "聞[き]いてみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Explicit 駅で plus 駅員, with てみる.",
      },
      {
        segments: [
          { text: "駅[えき]で 聞[き]ける 人[ひと]に" },
          { text: "聞[き]いたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 聞ける人, “a person you can ask,” while keeping the station location.",
      },
      {
        segments: [
          { text: "駅[えき]で 聞[き]ける 人[ひと]に" },
          { text: "聞[き]いてみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 聞ける人 plus てみる.",
      },
      {
        segments: [
          { text: "誰[だれ]かに 駅[えき]で" },
          { text: "聞[き]いたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Reversed word order, placing 誰かに before 駅で.",
      },
      {
        segments: [
          { text: "誰[だれ]かに 駅[えき]で" },
          { text: "聞[き]いてみたらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Reversed word order with てみる.",
      },
    ],
  },
  {
    english: "If Mika is nervous before the exam, why doesn't Mika drink a little tea?",
    hint: "Mika = みか",
    answers: [
      {
        segments: [
          { text: "みかさんは 試験[しけん]の 前[まえ]に 緊張[きんちょう]しているなら、少[すこ]し お 茶[ちゃ]を " },
          { text: "飲[の]んだらどう", blank: true },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Polite suggestion with お茶を飲んだらどうですか.",
      },
      {
        register: "casual",
        segments: [
          { text: "試験[しけん]の 前[まえ]に 緊張[きんちょう]しているなら、みかさん、少[すこ]し お 茶[ちゃ]を " },
          { text: "飲[の]んだらどう", blank: true },
        ],
        notes: "Casual suggestion with Mika addressed by name.",
      },
    ],
  },
];
