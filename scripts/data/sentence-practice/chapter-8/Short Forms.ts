import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Saturday is my day off, so I don't get up at seven.",
    hint: "Use casual form, not polite.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 土曜日[どようび]は 休[やす]み" },
          { text: "だ", blank: true },
          { text: "から、七時[しちじ]に" },
          { text: "起[お]きない", blank: true },
        ],
        notes:
          "Blanks both the casual noun/adjective predicate and the negative verb form.",
      },
      {
        segments: [
          { text: "土曜日[どようび]は 私[わたし]の 休[やす]み" },
          { text: "だ", blank: true },
          { text: "から、七時[しちじ]に" },
          { text: "起[お]きない", blank: true },
        ],
        notes:
          "Literal 'Saturday is my day off' with both target short forms blanked.",
      },
      {
        segments: [
          { text: "土曜日[どようび]は 休[やす]み" },
          { text: "だ", blank: true },
          { text: "から、七時[しちじ]に" },
          { text: "起[お]きない", blank: true },
        ],
        notes: "Omits the pronoun entirely, which is natural from context.",
      },
      {
        segments: [
          { text: "土曜日[どようび]は 休[やす]みの 日[ひ]" },
          { text: "だ", blank: true },
          { text: "から、七時[しちじ]に" },
          { text: "起[お]きない", blank: true },
        ],
        notes: "Uses 休みの日 for 'day off.'",
      },
      {
        segments: [
          { text: "土曜日[どようび]は 私[わたし]の 休[やす]みの 日[ひ]" },
          { text: "だ", blank: true },
          { text: "から、七時[しちじ]に" },
          { text: "起[お]きない", blank: true },
        ],
        notes: "More explicit 'my day off' using 私の休みの日.",
      },
      {
        segments: [
          { text: "土曜日[どようび]は 休[やす]み" },
          { text: "だ", blank: true },
          { text: "から、朝[あさ] 七時[しちじ]に" },
          { text: "起[お]きない", blank: true },
        ],
        notes:
          "Specifies 朝七時, since getting up at seven implies seven in the morning.",
      },
      {
        segments: [
          { text: "土曜日[どようび]は 休[やす]み" },
          { text: "だ", blank: true },
          { text: "から、七時[しちじ]には" },
          { text: "起[お]きない", blank: true },
        ],
        notes: "Uses には to emphasize 'not at seven'.",
      },
    ],
  },
  {
    english: "The sea at night is scary, so I don't swim.",
    answers: [
      {
        segments: [
          { text: "夜[よる]の 海[うみ]は 怖[こわ]いから、" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes:
          "Standard translation using 夜の海 as the topic and から for 'so/because'.",
      },
      {
        segments: [
          { text: "夜[よる]の 海[うみ]が 怖[こわ]いから、" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes: "Using が instead of は to mark the sea as what is scary.",
      },
      {
        segments: [
          { text: "夜[よる]は 海[うみ]が 怖[こわ]いから、" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes:
          "Rephrased as 'at night, the sea is scary' with 夜は at the start.",
      },
      {
        segments: [
          { text: "夜[よる]の 海[うみ]は 怖[こわ]いから、海[うみ]で" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes: "Explicitly says not to swim in the sea.",
      },
      {
        segments: [
          { text: "私[わたし]は 夜[よる]の 海[うみ]が 怖[こわ]いから、" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes:
          "Includes 私は and uses が to express that I find the sea at night scary.",
      },
      {
        segments: [
          { text: "夜[よる]の 海[うみ]は 怖[こわ]い。だから、" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes: "Splits the sentence into two clauses using だから.",
      },
      {
        segments: [
          { text: "夜[よる]は 海[うみ]が 怖[こわ]い。だから、" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes: "Uses 夜は at the start and separates the reason with だから.",
      },
      {
        segments: [
          { text: "夜[よる]の 海[うみ]は 怖[こわ]いから、私[わたし]は" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes:
          "Places 私は before the negative verb to make the subject explicit.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 夜[よる]の 海[うみ]が 怖[こわ]いから、海[うみ]で",
          },
          { text: "泳[およ]がない", blank: true },
        ],
        notes: "Explicit subject plus explicit location of swimming.",
      },
      {
        segments: [
          { text: "海[うみ]は 夜[よる]は 怖[こわ]いから、" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes: "Puts 海 first and uses 夜は to mean 'at night'.",
      },
      {
        segments: [
          { text: "海[うみ]は 夜[よる]、怖[こわ]いから、" },
          { text: "泳[およ]がない", blank: true },
        ],
        notes: "Uses a pause after 夜 to mean the sea is scary at night.",
      },
    ],
  },
  {
    english: "This room is quiet, but my cat doesn't sleep here.",
    hint: "Use casual form, not polite.",
    answers: [
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "が、私[わたし]の 猫[ねこ]は ここで " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes:
          "Standard wording with は for both room and cat; uses が for “but.”",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "が、私[わたし]の 猫[ねこ]は この 部屋[へや]で " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes:
          "Uses この部屋で instead of ここで to refer back to “here/in this room.”",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "が、私[わたし]の 猫[ねこ]は ここでは " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Uses ここでは to emphasize “not here.”",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "が、私[わたし]の 猫[ねこ]は この 部屋[へや]では " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes:
          "Uses この部屋では to emphasize the cat doesn’t sleep in this room specifically.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "。でも、私[わたし]の 猫[ねこ]は ここで " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Splits into two sentences and uses でも for “but.”",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "。でも、私[わたし]の 猫[ねこ]は この 部屋[へや]で " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Two-sentence version with この部屋で.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "。でも、私[わたし]の 猫[ねこ]は ここでは " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Two-sentence version with emphatic ここでは.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "。でも、私[わたし]の 猫[ねこ]は この 部屋[へや]では " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Two-sentence version with emphatic この部屋では.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "が、ここで 私[わたし]の 猫[ねこ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Moves ここで before the subject in the second clause.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "が、この 部屋[へや]で 私[わたし]の 猫[ねこ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Moves この部屋で before the cat subject.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "。でも、ここで 私[わたし]の 猫[ねこ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes:
          "Two-sentence version with ここで placed first in the second sentence.",
      },
      {
        segments: [
          { text: "この 部屋[へや]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "。でも、この 部屋[へや]で 私[わたし]の 猫[ねこ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes:
          "Two-sentence version with この部屋で placed first in the second sentence.",
      },
    ],
  },
  {
    english:
      "Isn't that Kobayashi's bicycle over there? Kobayashi doesn't take the bus on Mondays.",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          { text: "あれは 小林[こばやし]の 自転車[じてんしゃ]" },
          { text: "じゃない", blank: true },
          { text: "？ 小林[こばやし]は 月曜日[げつようび]は バスに " },
          { text: "乗[の]らない", blank: true },
        ],
        notes:
          "Uses あれ to indicate the bicycle over there; topic marker は for Mondays as a habitual statement.",
      },
      {
        segments: [
          {
            text: "あの 自転車[じてんしゃ]は 小林[こばやし]の 自転車[じてんしゃ]",
          },
          { text: "じゃない", blank: true },
          { text: "？ 小林[こばやし]は 月曜日[げつようび]は バスに " },
          { text: "乗[の]らない", blank: true },
        ],
        notes: "Uses あの自転車 for “that bicycle over there.”",
      },
      {
        segments: [
          {
            text: "あそこの 自転車[じてんしゃ]は 小林[こばやし]の 自転車[じてんしゃ]",
          },
          { text: "じゃない", blank: true },
          { text: "？ 小林[こばやし]は 月曜日[げつようび]は バスに " },
          { text: "乗[の]らない", blank: true },
        ],
        notes: "More literal “the bicycle over there” with あそこ の.",
      },
      {
        segments: [
          { text: "あれは 小林[こばやし]の " },
          { text: "じゃない", blank: true },
          { text: "？ 小林[こばやし]は 月曜日[げつようび]は バスに " },
          { text: "乗[の]らない", blank: true },
        ],
        notes:
          "Uses の to mean “Kobayashi’s one/bicycle,” avoiding repeating 自転車.",
      },
      {
        segments: [
          { text: "あれは 小林[こばやし]の 自転車[じてんしゃ]" },
          { text: "じゃない", blank: true },
          { text: "？ 月曜日[げつようび]は 小林[こばやし]は バスに " },
          { text: "乗[の]らない", blank: true },
        ],
        notes: "Moves the time expression to the start of the second sentence.",
      },
      {
        segments: [
          { text: "あれ、小林[こばやし]の 自転車[じてんしゃ]" },
          { text: "じゃない", blank: true },
          { text: "？ 小林[こばやし]は 月曜日[げつようび]、バスに " },
          { text: "乗[の]らない", blank: true },
        ],
        notes:
          "Conversational style with dropped topic particles where natural.",
      },
    ],
  },
  {
    english:
      "That story isn't famous, but it's my favorite story, so I read it every night.",
    hint: "Use casual form, not polite.",
    answers: [
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 好[す]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes:
          "Basic casual translation using その for “that,” でも for “but,” and 好きな話 for “favorite story.”",
      },
      {
        segments: [
          { text: "あの 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 好[す]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes:
          "Using あの for “that” when the story is distant or mutually known.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 大好[だいす]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Using 大好きな話 to emphasize “favorite/very much liked.”",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 好[す]きな 話[はなし]だから、毎晩[まいばん] その 話[はなし]を ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Explicitly repeats その話を for “read it.”",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 好[す]きな 話[はなし]だから、私は その 話[はなし]を 毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes:
          "Explicit subject and object in the second clause, with object before the time phrase.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "が、私[わたし]の 好[す]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Using が for “but” instead of でも.",
      },
      {
        segments: [
          { text: "あの 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "が、私[わたし]の 好[す]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Using both あの for “that” and が for “but.”",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]は 毎晩[まいばん] 読[よ]む。私[わたし]の 好[す]きな 話[はなし]",
          },
          { text: "だから", blank: true },
        ],
        notes:
          "Reverses the order of the result and reason, ending with だから.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          { text: "。でも、毎晩[まいばん] " },
          { text: "読[よ]む", blank: true },
          { text: "。私[わたし]の 好[す]きな 話[はなし]" },
          { text: "だから", blank: true },
        ],
        notes:
          "Natural afterthought order: “I read it every night. Because it’s my favorite story.”",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 大好[だいす]きな 話[はなし]だから、毎晩[まいばん] その 話[はなし]を ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Combines 大好き with an explicit object.",
      },
      {
        segments: [
          { text: "あの 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 大好[だいす]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Using あの and 大好きな話.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 好[す]きな 話[はなし]だから、私[わたし]は 毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes:
          "Explicit 私は in the final clause without repeating the object.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、毎晩[まいばん]、私[わたし]の 好[す]きな 話[はなし]だから ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Moves 毎晩 to the beginning of the second sentence.",
      },
      {
        segments: [
          { text: "あの 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]の 好[す]きな 話[はなし]だから、毎晩[まいばん] あの 話[はなし]を ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Using あの and explicitly repeating あの話を as the object.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]は その 話[はなし]が 好[す]きだから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Expresses “my favorite” as “I like that story,” using が好き.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]は その 話[はなし]が 大好[だいす]きだから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Uses 大好き to convey “favorite” more strongly.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]が 好[す]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Uses 私が好きな話 instead of 私の好きな話.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]が 大好[だいす]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Uses 私が大好きな話 for a stronger “my favorite story.”",
      },
      {
        segments: [
          { text: "あの 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]は あの 話[はなし]が 好[す]きだから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Uses あの話が好きだから with あの.",
      },
      {
        segments: [
          { text: "あの 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]が 好[す]きな 話[はなし]だから、毎晩[まいばん] ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Uses 私が好きな話 with あの.",
      },
      {
        segments: [
          { text: "その 話[はなし]は " },
          { text: "有名[ゆうめい]じゃない", blank: true },
          {
            text: "。でも、私[わたし]は その 話[はなし]が 好[す]きだから、毎晩[まいばん] その 話[はなし]を ",
          },
          { text: "読[よ]む", blank: true },
        ],
        notes: "Uses が好きだから and explicitly repeats the object.",
      },
    ],
  },
  {
    english: "Today, the library is quiet, so I won't talk.",
    hint: "Use casual form, not polite.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、私[わたし]は 話[はな]さない", blank: true },
        ],
        notes:
          "Standard word order; marks the library as the topic and includes 私は for “I.”",
      },
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、話[はな]さない", blank: true },
        ],
        notes:
          "Drops the pronoun in the second clause, which is very natural from context.",
      },
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]が 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、私[わたし]は 話[はな]さない", blank: true },
        ],
        notes: "Uses が to present the library being quiet as the reason.",
      },
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]が 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、話[はな]さない", blank: true },
        ],
        notes: "Uses が and drops the pronoun in the second clause.",
      },
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          {
            text: "から、私[わたし]は 図書館[としょかん]で 話[はな]さない",
            blank: true,
          },
        ],
        notes: "Explicitly says “I won’t talk in the library.”",
      },
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、図書館[としょかん]で 話[はな]さない", blank: true },
        ],
        notes: "Explicit location with the subject omitted.",
      },
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          {
            text: "から、私[わたし]は 図書館[としょかん]では 話[はな]さない",
            blank: true,
          },
        ],
        notes: "Uses では to emphasize not talking in the library.",
      },
      {
        segments: [
          { text: "今日[きょう]、図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、図書館[としょかん]では 話[はな]さない", blank: true },
        ],
        notes: "Emphatic では with the subject omitted.",
      },
      {
        segments: [
          { text: "今日[きょう]の 図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、私[わたし]は 話[はな]さない", blank: true },
        ],
        notes:
          "Uses 今日の図書館 to mean “today’s library / the library today.”",
      },
      {
        segments: [
          { text: "今日[きょう]の 図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、話[はな]さない", blank: true },
        ],
        notes: "Uses 今日の図書館 and omits the subject in the second clause.",
      },
      {
        segments: [
          { text: "今日[きょう]の 図書館[としょかん]は 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、図書館[としょかん]で 話[はな]さない", blank: true },
        ],
        notes:
          "Uses 今日の図書館 and explicitly states the place of not talking.",
      },
      {
        segments: [
          { text: "今日[きょう]は 図書館[としょかん]が 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、私[わたし]は 話[はな]さない", blank: true },
        ],
        notes: "Makes 今日 the topic and uses が for the library.",
      },
      {
        segments: [
          { text: "今日[きょう]は 図書館[としょかん]が 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、話[はな]さない", blank: true },
        ],
        notes: "今日 as topic with the subject omitted in the main clause.",
      },
      {
        segments: [
          { text: "今日[きょう]は 図書館[としょかん]が 静[しず]か" },
          { text: "だ", blank: true },
          { text: "から、図書館[としょかん]で 話[はな]さない", blank: true },
        ],
        notes: "今日 as topic and explicitly states “in the library.”",
      },
    ],
  },
  {
    english: "When it rains, I don't ride my bicycle; I take the bus.",
    answers: [
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]る 時[とき]、私[わたし]は 自転車[じてんしゃ]に",
          },
          { text: "乗[の]らない", blank: true },
          { text: "。バスに" },
          { text: "乗[の]る", blank: true },
        ],
        notes:
          "Standard translation using 時 for “when” and 自転車に乗る/バスに乗る.",
      },
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]る 時[とき]は、私[わたし]は 自転車[じてんしゃ]に",
          },
          { text: "乗[の]らない", blank: true },
          { text: "。バスに" },
          { text: "乗[の]る", blank: true },
        ],
        notes:
          "Adds は after the time clause to mark the rainy situation as the topic.",
      },
      {
        segments: [
          { text: "雨[あめ]が 降[ふ]る 時[とき]は、自転車[じてんしゃ]に" },
          { text: "乗[の]らない", blank: true },
          { text: "。バスに" },
          { text: "乗[の]る", blank: true },
        ],
        notes:
          "Omits the pronoun, which is natural when the speaker is understood.",
      },
      {
        segments: [
          { text: "雨[あめ]の 日[ひ]は、私[わたし]は 自転車[じてんしゃ]に" },
          { text: "乗[の]らない", blank: true },
          { text: "。バスに" },
          { text: "乗[の]る", blank: true },
        ],
        notes:
          "Uses 雨の日は (“on rainy days”) as a natural way to express “when it rains.”",
      },
      {
        segments: [
          { text: "雨[あめ]の 日[ひ]は、自転車[じてんしゃ]に" },
          { text: "乗[の]らない", blank: true },
          { text: "。バスに" },
          { text: "乗[の]る", blank: true },
        ],
        notes: "Rainy-day phrasing with the pronoun omitted.",
      },
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]る 時[とき]は、私[わたし]は 自転車[じてんしゃ]には",
          },
          { text: "乗[の]らない", blank: true },
          { text: "。バスに" },
          { text: "乗[の]る", blank: true },
        ],
        notes: "Uses には for contrast: not the bicycle, but the bus.",
      },
      {
        segments: [
          { text: "雨[あめ]の 日[ひ]は、私[わたし]は 自転車[じてんしゃ]では" },
          { text: "行[い]かない", blank: true },
          { text: "。バスで" },
          { text: "行[い]く", blank: true },
        ],
        notes:
          "Uses で行く to mean “go by bicycle/bus,” a natural equivalent of taking transportation.",
      },
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]る 時[とき]は、私[わたし]は 自転車[じてんしゃ]では",
          },
          { text: "行[い]かない", blank: true },
          { text: "。バスで" },
          { text: "行[い]く", blank: true },
        ],
        notes: "Uses “when it rains” plus で行く for transportation method.",
      },
      {
        segments: [
          { text: "雨[あめ]の 日[ひ]は、自転車[じてんしゃ]では" },
          { text: "行[い]かない", blank: true },
          { text: "。バスで" },
          { text: "行[い]く", blank: true },
        ],
        notes: "Transportation-method phrasing with the pronoun omitted.",
      },
      {
        segments: [
          {
            text: "雨[あめ]が 降[ふ]る 日[ひ]は、私[わたし]は 自転車[じてんしゃ]に",
          },
          { text: "乗[の]らない", blank: true },
          { text: "。バスに" },
          { text: "乗[の]る", blank: true },
        ],
        notes: "Uses 雨が降る日は (“on days when it rains”).",
      },
    ],
  },
  {
    english:
      "This town isn't quiet; at night, children play in the park, and dogs don't sleep.",
    hint: "Use casual form, not polite.",
    answers: [
      {
        segments: [
          { text: "この 町[まち]は 静[しず]か" },
          { text: "じゃない", blank: true },
          { text: "。夜[よる]、子供[こども]は 公園[こうえん]で " },
          { text: "遊[あそ]ぶ", blank: true },
          { text: "。犬[いぬ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Basic version with は marking children and dogs as topics.",
      },
      {
        segments: [
          { text: "この 町[まち]は 静[しず]か" },
          { text: "じゃない", blank: true },
          { text: "。夜[よる]は、子供[こども]が 公園[こうえん]で " },
          { text: "遊[あそ]ぶ", blank: true },
          { text: "。犬[いぬ]が " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes:
          "Using 夜は and が to describe what happens in the town at night.",
      },
      {
        segments: [
          { text: "この 町[まち]は 静[しず]か" },
          { text: "じゃない", blank: true },
          { text: "。夜[よる]、公園[こうえん]で 子供[こども]が " },
          { text: "遊[あそ]ぶ", blank: true },
          { text: "。犬[いぬ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Reordered location before subject in the second clause.",
      },
      {
        segments: [
          { text: "この 町[まち]は 静[しず]か" },
          { text: "じゃない", blank: true },
          { text: "。夜[よる]は、公園[こうえん]で 子供[こども]が " },
          { text: "遊[あそ]ぶ", blank: true },
          { text: "。犬[いぬ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Reordered location with 夜は as the time topic.",
      },
      {
        segments: [
          { text: "この 町[まち]は 静[しず]か" },
          { text: "じゃない", blank: true },
          { text: "。夜[よる]、子供[こども]は 公園[こうえん]で " },
          { text: "遊[あそ]ぶ", blank: true },
          { text: "。そして、犬[いぬ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Adds そして to explicitly connect the final clause.",
      },
      {
        segments: [
          { text: "この 町[まち]は 静[しず]か" },
          { text: "じゃない", blank: true },
          { text: "。夜[よる]に、子供[こども]が 公園[こうえん]で " },
          { text: "遊[あそ]ぶ", blank: true },
          { text: "。犬[いぬ]が " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Uses 夜に for “at night” and が for both subjects.",
      },
      {
        segments: [
          { text: "この 町[まち]は 静[しず]か" },
          { text: "じゃない", blank: true },
          { text: "。夜[よる]に、公園[こうえん]で 子供[こども]が " },
          { text: "遊[あそ]ぶ", blank: true },
          { text: "。犬[いぬ]は " },
          { text: "寝[ね]ない", blank: true },
        ],
        notes: "Uses 夜に with location placed before the subject.",
      },
    ],
  },
]
