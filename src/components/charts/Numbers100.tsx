import Romaji from "@/components/text/Romaji"

function NumberRow(props: { numeral: string; children: JSX.Element }) {
  return (
    <div class="flex items-center justify-start gap-4">
      <div class="text-muted-foreground w-12 text-right text-lg">
        {props.numeral}
      </div>
      <div class="text-foreground text-xl">{props.children}</div>
    </div>
  )
}

export default function Numbers100() {
  return (
    <div class="bg-card border-border rounded-xl border px-6 py-8 shadow sm:px-10 lg:px-16">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Col 1: 0–10 */}
        <div class="space-y-3">
          <h3 class="text-foreground mb-2 text-lg font-semibold">0–10</h3>
          <NumberRow numeral="０">
            <div class="flex gap-1">
              <Romaji romaji="zero">ゼロ</Romaji>
              <span class="text-muted-foreground">・</span>
              <Romaji romaji="rei">れい</Romaji>
            </div>
          </NumberRow>
          <NumberRow numeral="１">
            <Romaji romaji="ichi">いち</Romaji>
          </NumberRow>
          <NumberRow numeral="２">
            <Romaji romaji="ni">に</Romaji>
          </NumberRow>
          <NumberRow numeral="３">
            <Romaji romaji="san">さん</Romaji>
          </NumberRow>
          <NumberRow numeral="４">
            <div class="flex gap-1">
              <Romaji romaji="yon">よん</Romaji>
              <span class="text-muted-foreground">・</span>
              <Romaji romaji="shi">し</Romaji>
            </div>
          </NumberRow>
          <NumberRow numeral="５">
            <Romaji romaji="go">ご</Romaji>
          </NumberRow>
          <NumberRow numeral="６">
            <Romaji romaji="roku">ろく</Romaji>
          </NumberRow>
          <NumberRow numeral="７">
            <div class="flex gap-1">
              <Romaji romaji="nana">なな</Romaji>
              <span class="text-muted-foreground">・</span>
              <Romaji romaji="shichi">しち</Romaji>
            </div>
          </NumberRow>
          <NumberRow numeral="８">
            <Romaji romaji="hachi">はち</Romaji>
          </NumberRow>
          <NumberRow numeral="９">
            <div class="flex gap-1">
              <Romaji romaji="kyuu">きゅう</Romaji>
              <span class="text-muted-foreground">・</span>
              <Romaji romaji="ku">く</Romaji>
            </div>
          </NumberRow>
          <NumberRow numeral="１０">
            <Romaji romaji="juu">じゅう</Romaji>
          </NumberRow>
        </div>

        {/* Col 2: Teens (11–20) */}
        <div class="space-y-3">
          <h3 class="text-foreground mb-2 text-lg font-semibold">11–20</h3>
          <div class="text-muted-foreground text-sm">
            Formula: じゅう + [ones digit]
          </div>
          <NumberRow numeral="１１">
            <Romaji romaji="juuichi">
              じゅう<span class="text-primary">いち</span>
            </Romaji>
          </NumberRow>
          <NumberRow numeral="１２">
            <Romaji romaji="juuni">
              じゅう<span class="text-primary">に</span>
            </Romaji>
          </NumberRow>
          <NumberRow numeral="１３">
            <Romaji romaji="juusan">
              じゅう<span class="text-primary">さん</span>
            </Romaji>
          </NumberRow>
          <NumberRow numeral="１４">
            <Romaji romaji="juuyon">
              じゅう<span class="text-primary">よん</span>
            </Romaji>
          </NumberRow>
          <NumberRow numeral="１５">
            <Romaji romaji="juugo">
              じゅう<span class="text-primary">ご</span>
            </Romaji>
          </NumberRow>
          <NumberRow numeral="２０">
            <Romaji romaji="nijuu">
              <span class="text-primary">に</span>じゅう
            </Romaji>
          </NumberRow>
        </div>

        {/* Col 3: Tens */}
        <div class="space-y-3">
          <h3 class="text-foreground mb-2 text-lg font-semibold">Tens</h3>
          <div class="text-muted-foreground mb-2 text-sm">
            Formula: [digit] + じゅう
          </div>
          <NumberRow numeral="３０">
            <Romaji romaji="sanjuu">
              <span class="text-primary">さん</span>じゅう
            </Romaji>
          </NumberRow>
          <NumberRow numeral="４０">
            <Romaji romaji="yonjuu">
              <span class="text-primary">よん</span>じゅう
            </Romaji>
          </NumberRow>
          <NumberRow numeral="５０">
            <Romaji romaji="gojuu">
              <span class="text-primary">ご</span>じゅう
            </Romaji>
          </NumberRow>
          <NumberRow numeral="６０">
            <Romaji romaji="rokujuu">
              <span class="text-primary">ろく</span>じゅう
            </Romaji>
          </NumberRow>
          <NumberRow numeral="７０">
            <Romaji romaji="nanajuu">
              <span class="text-primary">なな</span>じゅう
            </Romaji>
          </NumberRow>
          <NumberRow numeral="８０">
            <Romaji romaji="hachijuu">
              <span class="text-primary">はち</span>じゅう
            </Romaji>
          </NumberRow>
          <NumberRow numeral="９０">
            <Romaji romaji="kyuujuu">
              <span class="text-primary">きゅう</span>じゅう
            </Romaji>
          </NumberRow>
          <NumberRow numeral="１００">
            <Romaji romaji="hyaku">
              <span class="text-primary">ひゃく</span>
            </Romaji>
          </NumberRow>
        </div>
      </div>
    </div>
  )
}
