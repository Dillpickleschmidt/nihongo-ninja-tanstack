// src/features/conjugation-practice/utils/conjugationUtils.test.ts
import { describe, it, expect } from "vitest"
import * as conjugationUtils from "./conjugationUtils"

describe("Conjugation Utils", () => {
  describe("Basic Conjugations", () => {
    describe("Godan verbs", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm("はなす", "Godan verb with 'su' ending", {
            polite: true,
          }),
        ).toEqual(["はなします"])
        expect(
          conjugationUtils.normalForm("はなす", "Godan verb with 'su' ending", {
            polite: true,
            negative: true,
          }),
        ).toEqual(["はなしません"])
        expect(
          conjugationUtils.normalForm("はなす", "Godan verb with 'su' ending", {
            polite: true,
            past: true,
          }),
        ).toEqual(["はなしました"])
        expect(
          conjugationUtils.normalForm("はなす", "Godan verb with 'su' ending", {
            polite: true,
            negative: true,
            past: true,
          }),
        ).toEqual(["はなしませんでした"])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm(
            "はなす",
            "Godan verb with 'su' ending",
            {},
          ),
        ).toEqual(["はなす"])
        expect(
          conjugationUtils.normalForm("はなす", "Godan verb with 'su' ending", {
            negative: true,
          }),
        ).toEqual(["はなさない"])
        expect(
          conjugationUtils.normalForm("はなす", "Godan verb with 'su' ending", {
            past: true,
          }),
        ).toEqual(["はなした"])
        expect(
          conjugationUtils.normalForm("はなす", "Godan verb with 'su' ending", {
            negative: true,
            past: true,
          }),
        ).toEqual(["はなさなかった"])
      })
    })

    describe("Godan Verbs Te-Form", () => {
      it("should conjugate う ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "かう",
            "Godan verb with 'u' ending",
            "te-form",
          ),
        ).toEqual(["かって"])
        expect(
          conjugationUtils.conjugate(
            "かう",
            "Godan verb with 'u' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["かわなくて", "かわないで"])
        expect(
          conjugationUtils.conjugate(
            "かう",
            "Godan verb with 'u' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["かいませんで"])
      })

      it("should conjugate つ ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "まつ",
            "Godan verb with 'tsu' ending",
            "te-form",
          ),
        ).toEqual(["まって"])
        expect(
          conjugationUtils.conjugate(
            "まつ",
            "Godan verb with 'tsu' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["またなくて", "またないで"])
        expect(
          conjugationUtils.conjugate(
            "まつ",
            "Godan verb with 'tsu' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["まちませんで"])
      })

      it("should conjugate る ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "とる",
            "Godan verb with 'ru' ending",
            "te-form",
          ),
        ).toEqual(["とって"])
        expect(
          conjugationUtils.conjugate(
            "とる",
            "Godan verb with 'ru' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["とらなくて", "とらないで"])
        expect(
          conjugationUtils.conjugate(
            "とる",
            "Godan verb with 'ru' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["とりませんで"])
      })

      it("should conjugate く ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "きく",
            "Godan verb with 'ku' ending",
            "te-form",
          ),
        ).toEqual(["きいて"])
        expect(
          conjugationUtils.conjugate(
            "きく",
            "Godan verb with 'ku' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["きかなくて", "きかないで"])
        expect(
          conjugationUtils.conjugate(
            "きく",
            "Godan verb with 'ku' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["ききませんで"])
      })

      it("should conjugate ぐ ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "およぐ",
            "Godan verb with 'gu' ending",
            "te-form",
          ),
        ).toEqual(["およいで"])
        expect(
          conjugationUtils.conjugate(
            "およぐ",
            "Godan verb with 'gu' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["およがなくて", "およがないで"])
        expect(
          conjugationUtils.conjugate(
            "およぐ",
            "Godan verb with 'gu' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["およぎませんで"])
      })

      it("should conjugate む ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "よむ",
            "Godan verb with 'mu' ending",
            "te-form",
          ),
        ).toEqual(["よんで"])
        expect(
          conjugationUtils.conjugate(
            "よむ",
            "Godan verb with 'mu' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["よまなくて", "よまないで"])
        expect(
          conjugationUtils.conjugate(
            "よむ",
            "Godan verb with 'mu' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["よみませんで"])
      })

      it("should conjugate ぶ ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "あそぶ",
            "Godan verb with 'bu' ending",
            "te-form",
          ),
        ).toEqual(["あそんで"])
        expect(
          conjugationUtils.conjugate(
            "あそぶ",
            "Godan verb with 'bu' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["あそばなくて", "あそばないで"])
        expect(
          conjugationUtils.conjugate(
            "あそぶ",
            "Godan verb with 'bu' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["あそびませんで"])
      })

      it("should conjugate ぬ ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "しぬ",
            "Godan verb with 'nu' ending",
            "te-form",
          ),
        ).toEqual(["しんで"])
        expect(
          conjugationUtils.conjugate(
            "しぬ",
            "Godan verb with 'nu' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["しななくて", "しなないで"])
        expect(
          conjugationUtils.conjugate(
            "しぬ",
            "Godan verb with 'nu' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["しにませんで"])
      })

      it("should conjugate す ending correctly", () => {
        expect(
          conjugationUtils.conjugate(
            "はなす",
            "Godan verb with 'su' ending",
            "te-form",
          ),
        ).toEqual(["はなして"])
        expect(
          conjugationUtils.conjugate(
            "はなす",
            "Godan verb with 'su' ending",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["はなさなくて", "はなさないで"])
        expect(
          conjugationUtils.conjugate(
            "はなす",
            "Godan verb with 'su' ending",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["はなしませんで"])
      })
    })

    describe("Ichidan verbs", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm("たべる", "Ichidan verb", {
            polite: true,
          }),
        ).toEqual(["たべます"])
        expect(
          conjugationUtils.normalForm("たべる", "Ichidan verb", {
            polite: true,
            negative: true,
          }),
        ).toEqual(["たべません"])
        expect(
          conjugationUtils.normalForm("たべる", "Ichidan verb", {
            polite: true,
            past: true,
          }),
        ).toEqual(["たべました"])
        expect(
          conjugationUtils.normalForm("たべる", "Ichidan verb", {
            polite: true,
            negative: true,
            past: true,
          }),
        ).toEqual(["たべませんでした"])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm("たべる", "Ichidan verb", {}),
        ).toEqual(["たべる"])
        expect(
          conjugationUtils.normalForm("たべる", "Ichidan verb", {
            negative: true,
          }),
        ).toEqual(["たべない"])
        expect(
          conjugationUtils.normalForm("たべる", "Ichidan verb", { past: true }),
        ).toEqual(["たべた"])
        expect(
          conjugationUtils.normalForm("たべる", "Ichidan verb", {
            negative: true,
            past: true,
          }),
        ).toEqual(["たべなかった"])
      })

      it("should conjugate correctly in te-form", () => {
        expect(
          conjugationUtils.conjugate("たべる", "Ichidan verb", "te-form"),
        ).toEqual(["たべて"])
        expect(
          conjugationUtils.conjugate("たべる", "Ichidan verb", "te-form", {
            negative: true,
          }),
        ).toEqual(["たべなくて", "たべないで"])
        expect(
          conjugationUtils.conjugate("たべる", "Ichidan verb", "te-form", {
            polite: true,
            negative: true,
          }),
        ).toEqual(["たべませんで"])
      })
    })

    describe("I-adjectives", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm("たかい", "I-adjective", {
            polite: true,
          }),
        ).toEqual(["たかいです"])
        expect(
          conjugationUtils.normalForm("たかい", "I-adjective", {
            polite: true,
            negative: true,
          }),
        ).toEqual(["たかくないです", "たかくありません"])
        expect(
          conjugationUtils.normalForm("たかい", "I-adjective", {
            polite: true,
            past: true,
          }),
        ).toEqual(["たかかったです"])
        expect(
          conjugationUtils.normalForm("たかい", "I-adjective", {
            polite: true,
            negative: true,
            past: true,
          }),
        ).toEqual(["たかくなかったです", "たかくありませんでした"])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm("たかい", "I-adjective", {}),
        ).toEqual(["たかい"])
        expect(
          conjugationUtils.normalForm("たかい", "I-adjective", {
            negative: true,
          }),
        ).toEqual(["たかくない"])
        expect(
          conjugationUtils.normalForm("たかい", "I-adjective", { past: true }),
        ).toEqual(["たかかった"])
        expect(
          conjugationUtils.normalForm("たかい", "I-adjective", {
            negative: true,
            past: true,
          }),
        ).toEqual(["たかくなかった"])
      })

      it("should conjugate correctly in te-form", () => {
        expect(
          conjugationUtils.conjugate("たかい", "I-adjective", "te-form"),
        ).toEqual(["たかくて"])
        expect(
          conjugationUtils.conjugate("たかい", "I-adjective", "te-form", {
            negative: true,
          }),
        ).toEqual(["たかくなくて"])
      })
    })

    describe("Na-adjectives", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm("しずか", "Na-adjective", {
            polite: true,
          }),
        ).toEqual(["しずかです"])
        expect(
          conjugationUtils.normalForm("しずか", "Na-adjective", {
            polite: true,
            negative: true,
          }),
        ).toEqual([
          "しずかではありません",
          "しずかではないです",
          "しずかじゃありません",
          "しずかじゃないです",
        ])
        expect(
          conjugationUtils.normalForm("しずか", "Na-adjective", {
            polite: true,
            past: true,
          }),
        ).toEqual(["しずかでした"])
        expect(
          conjugationUtils.normalForm("しずか", "Na-adjective", {
            polite: true,
            negative: true,
            past: true,
          }),
        ).toEqual([
          "しずかではありませんでした",
          "しずかではなかったです",
          "しずかじゃありませんでした",
          "しずかじゃなかったです",
        ])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm("しずか", "Na-adjective", {}),
        ).toEqual(["しずかだ"])
        expect(
          conjugationUtils.normalForm("しずか", "Na-adjective", {
            negative: true,
          }),
        ).toEqual(["しずかではない", "しずかじゃない"])
        expect(
          conjugationUtils.normalForm("しずか", "Na-adjective", { past: true }),
        ).toEqual(["しずかだった"])
        expect(
          conjugationUtils.normalForm("しずか", "Na-adjective", {
            negative: true,
            past: true,
          }),
        ).toEqual(["しずかではなかった", "しずかじゃなかった"])
      })

      it("should conjugate correctly in te-form", () => {
        expect(
          conjugationUtils.conjugate("しずか", "Na-adjective", "te-form"),
        ).toEqual(["しずかで"])
        expect(
          conjugationUtils.conjugate("しずか", "Na-adjective", "te-form", {
            negative: true,
          }),
        ).toEqual(["しずかではなくて", "しずかじゃなくて"])
      })
    })
  })

  describe("Irregular Verbs", () => {
    describe("する (suru) verb", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm("する", "Suru verb - included", {
            polite: true,
          }),
        ).toEqual(["します"])
        expect(
          conjugationUtils.normalForm("する", "Suru verb - included", {
            polite: true,
            negative: true,
          }),
        ).toEqual(["しません"])
        expect(
          conjugationUtils.normalForm("する", "Suru verb - included", {
            polite: true,
            past: true,
          }),
        ).toEqual(["しました"])
        expect(
          conjugationUtils.normalForm("する", "Suru verb - included", {
            polite: true,
            negative: true,
            past: true,
          }),
        ).toEqual(["しませんでした"])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm("する", "Suru verb - included", {}),
        ).toEqual(["する"])
        expect(
          conjugationUtils.normalForm("する", "Suru verb - included", {
            negative: true,
          }),
        ).toEqual(["しない"])
        expect(
          conjugationUtils.normalForm("する", "Suru verb - included", {
            past: true,
          }),
        ).toEqual(["した"])
        expect(
          conjugationUtils.normalForm("する", "Suru verb - included", {
            negative: true,
            past: true,
          }),
        ).toEqual(["しなかった"])
      })

      it("should conjugate correctly in te-form", () => {
        expect(
          conjugationUtils.conjugate("する", "Suru verb - included", "te-form"),
        ).toEqual(["して"])
        expect(
          conjugationUtils.conjugate(
            "する",
            "Suru verb - included",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["しなくて", "しないで"])
        expect(
          conjugationUtils.conjugate(
            "する",
            "Suru verb - included",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["しませんで"])
      })
    })

    describe("する (suru) compound verbs", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm("勉強する", "Suru verb - compound word", {
            polite: true,
          }),
        ).toEqual(["勉強します"])
        expect(
          conjugationUtils.normalForm("勉強する", "Suru verb - compound word", {
            polite: true,
            negative: true,
          }),
        ).toEqual(["勉強しません"])
        expect(
          conjugationUtils.normalForm("勉強する", "Suru verb - compound word", {
            polite: true,
            past: true,
          }),
        ).toEqual(["勉強しました"])
        expect(
          conjugationUtils.normalForm("勉強する", "Suru verb - compound word", {
            polite: true,
            negative: true,
            past: true,
          }),
        ).toEqual(["勉強しませんでした"])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm(
            "勉強する",
            "Suru verb - compound word",
            {},
          ),
        ).toEqual(["勉強する"])
        expect(
          conjugationUtils.normalForm("勉強する", "Suru verb - compound word", {
            negative: true,
          }),
        ).toEqual(["勉強しない"])
        expect(
          conjugationUtils.normalForm("勉強する", "Suru verb - compound word", {
            past: true,
          }),
        ).toEqual(["勉強した"])
        expect(
          conjugationUtils.normalForm("勉強する", "Suru verb - compound word", {
            negative: true,
            past: true,
          }),
        ).toEqual(["勉強しなかった"])
      })

      it("should conjugate correctly in te-form", () => {
        expect(
          conjugationUtils.conjugate(
            "勉強する",
            "Suru verb - compound word",
            "te-form",
          ),
        ).toEqual(["勉強して"])
        expect(
          conjugationUtils.conjugate(
            "勉強する",
            "Suru verb - compound word",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["勉強しなくて", "勉強しないで"])
        expect(
          conjugationUtils.conjugate(
            "勉強する",
            "Suru verb - compound word",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["勉強しませんで"])
      })
    })

    describe("くる (kuru) verb", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm("くる", "Kuru verb - special class", {
            polite: true,
          }),
        ).toEqual(["きます"])
        expect(
          conjugationUtils.normalForm("くる", "Kuru verb - special class", {
            polite: true,
            negative: true,
          }),
        ).toEqual(["きません"])
        expect(
          conjugationUtils.normalForm("くる", "Kuru verb - special class", {
            polite: true,
            past: true,
          }),
        ).toEqual(["きました"])
        expect(
          conjugationUtils.normalForm("くる", "Kuru verb - special class", {
            polite: true,
            negative: true,
            past: true,
          }),
        ).toEqual(["きませんでした"])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm("くる", "Kuru verb - special class", {}),
        ).toEqual(["くる"])
        expect(
          conjugationUtils.normalForm("くる", "Kuru verb - special class", {
            negative: true,
          }),
        ).toEqual(["こない"])
        expect(
          conjugationUtils.normalForm("くる", "Kuru verb - special class", {
            past: true,
          }),
        ).toEqual(["きた"])
        expect(
          conjugationUtils.normalForm("くる", "Kuru verb - special class", {
            negative: true,
            past: true,
          }),
        ).toEqual(["こなかった"])
      })

      it("should conjugate correctly in te-form", () => {
        expect(
          conjugationUtils.conjugate(
            "くる",
            "Kuru verb - special class",
            "te-form",
          ),
        ).toEqual(["きて"])
        expect(
          conjugationUtils.conjugate(
            "くる",
            "Kuru verb - special class",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["こなくて", "こないで"])
        expect(
          conjugationUtils.conjugate(
            "くる",
            "Kuru verb - special class",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["きませんで"])
      })

      it("should conjugate correctly in potential form", () => {
        expect(
          conjugationUtils.conjugate(
            "くる",
            "Kuru verb - special class",
            "potential",
          ),
        ).toEqual(["こられる"])
        expect(
          conjugationUtils.conjugate(
            "くる",
            "Kuru verb - special class",
            "potential",
            { negative: true },
          ),
        ).toEqual(["こられない"])
      })
    })
  })

  describe("Special Conjugations", () => {
    describe("ある (aru) verb", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            { polite: true },
          ),
        ).toEqual(["あります"])
        expect(
          conjugationUtils.normalForm(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            { polite: true, negative: true },
          ),
        ).toEqual(["ありません"])
        expect(
          conjugationUtils.normalForm(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            { polite: true, past: true },
          ),
        ).toEqual(["ありました"])
        expect(
          conjugationUtils.normalForm(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            { polite: true, negative: true, past: true },
          ),
        ).toEqual(["ありませんでした"])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            {},
          ),
        ).toEqual(["ある"])
        expect(
          conjugationUtils.normalForm(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            { negative: true },
          ),
        ).toEqual(["ない"])
        expect(
          conjugationUtils.normalForm(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            { past: true },
          ),
        ).toEqual(["あった"])
        expect(
          conjugationUtils.normalForm(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            { negative: true, past: true },
          ),
        ).toEqual(["なかった"])
      })

      it("should conjugate correctly in te-form", () => {
        expect(
          conjugationUtils.conjugate(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            "te-form",
          ),
        ).toEqual(["あって"])
        expect(
          conjugationUtils.conjugate(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["なくて"])
        expect(
          conjugationUtils.conjugate(
            "ある",
            "Godan verb with 'ru' ending (irregular verb)",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["ありませんで"])
      })
    })

    describe("いく/ゆく (iku/yuku) verb", () => {
      it("should conjugate correctly in polite form", () => {
        expect(
          conjugationUtils.normalForm(
            "いく",
            "Godan verb - Iku/Yuku special class",
            { polite: true },
          ),
        ).toEqual(["いきます"])
        expect(
          conjugationUtils.normalForm(
            "いく",
            "Godan verb - Iku/Yuku special class",
            { polite: true, negative: true },
          ),
        ).toEqual(["いきません"])
        expect(
          conjugationUtils.normalForm(
            "いく",
            "Godan verb - Iku/Yuku special class",
            { polite: true, past: true },
          ),
        ).toEqual(["いきました"])
        expect(
          conjugationUtils.normalForm(
            "いく",
            "Godan verb - Iku/Yuku special class",
            { polite: true, negative: true, past: true },
          ),
        ).toEqual(["いきませんでした"])
      })

      it("should conjugate correctly in plain form", () => {
        expect(
          conjugationUtils.normalForm(
            "いく",
            "Godan verb - Iku/Yuku special class",
            {},
          ),
        ).toEqual(["いく"])
        expect(
          conjugationUtils.normalForm(
            "いく",
            "Godan verb - Iku/Yuku special class",
            { negative: true },
          ),
        ).toEqual(["いかない"])
        expect(
          conjugationUtils.normalForm(
            "いく",
            "Godan verb - Iku/Yuku special class",
            { past: true },
          ),
        ).toEqual(["いった"])
        expect(
          conjugationUtils.normalForm(
            "いく",
            "Godan verb - Iku/Yuku special class",
            { negative: true, past: true },
          ),
        ).toEqual(["いかなかった"])
      })

      it("should conjugate correctly in te-form", () => {
        expect(
          conjugationUtils.conjugate(
            "いく",
            "Godan verb - Iku/Yuku special class",
            "te-form",
          ),
        ).toEqual(["いって"])
        expect(
          conjugationUtils.conjugate(
            "いく",
            "Godan verb - Iku/Yuku special class",
            "te-form",
            { negative: true },
          ),
        ).toEqual(["いかなくて", "いかないで"])
        expect(
          conjugationUtils.conjugate(
            "いく",
            "Godan verb - Iku/Yuku special class",
            "te-form",
            { polite: true, negative: true },
          ),
        ).toEqual(["いきませんで"])
      })
    })
  })
})
