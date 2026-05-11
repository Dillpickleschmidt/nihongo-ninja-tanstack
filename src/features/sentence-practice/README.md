# Sentence Practice

## Files to know

- `core/questionProcessor.ts` — turns Convex/source questions into `ProcessedQuestion` objects.
- `core/segmentProcessor.ts` — applies segment conjugations and creates prepared answer variants.
- `core/answer-processing/answerChecker.ts` — checks `answerText` against generated valid answers.
- `session/easyModeAnswerProjection.ts` — projects easy-mode blanks into the same `answerText` used by hard mode.
- `ui/practice/selectors/userInputPosDisplayItems.ts` — maps user input to precomputed answer tokens for POS box display.
- `scripts/upsert-sentence-practice.ts` — generates `preparedAnswerTokens` and imports questions into Convex.

## Core flow

```txt
source question
→ prepareQuestion()
→ ProcessedQuestion.answers              // prepared answer variants
→ ProcessedQuestion.validAnswers         // accepted answer strings for checking
→ preparedAnswerTokens                   // token/POS data aligned by prepared answer index
```

Hard mode edits `answerText` directly. Easy mode edits blanks, then projects them into `answerText`. Both modes call:

```ts
checkAnswer(answerText, question.preparedAnswersForMatching)
```

## POS display flow

The POS display does not tokenize the user's input directly. It treats the user's input as progress through one of the prepared answer variants.

```txt
answerText
→ choose the best prepared answer variant
→ remap that variant's stored tokens into the script the user typed
→ compare user input against those remapped token strings
→ render completed tokens with POS colors
→ render the first unmatched/incomplete suffix as one gray box
```

`preparedAnswerTokens[i]` corresponds to `ProcessedQuestion.answers[i]`.

## Concrete mapping example

Source segments:

```ts
{ text: "楓[かえで]さんは 図書館[としょかん]で" }
{ text: "歌[うた]って", blank: true }
{ text: "いる", blank: true, conjugation: { pos: "Ichidan verb", tense: "past", polarity: "positive" } }
```

`prepareQuestion()` turns that into a prepared answer variant with both scripts available:

```txt
plain answer: 楓さんは図書館で歌っていた
kana answer:  かえでさんはとしょかんでうたっていた
```

The upsert script stores tokens for the plain answer:

```txt
楓 / さん / は / 図書館 / で / 歌っていた
```

with POS attached to each token.

If the user types kana:

```txt
かえでさんはとしょか
```

then the display selector follows this flow:

### 1. Choose an answer variant

The selector compares the input against each prepared answer's kana form and picks the closest variant.

### 2. Remap stored tokens to the user's script

Stored tokens are plain-text tokens:

```txt
楓 / さん / は / 図書館 / で / 歌っていた
```

But the user typed kana, so each token is remapped through the prepared answer's furigana data:

```txt
楓       → かえで
さん     → さん
は       → は
図書館   → としょかん
で       → で
歌っていた → うたっていた
```

The POS stays attached to the token during this remap. Only the displayed/matched text changes.

### 3. Walk the user input left-to-right

The selector compares the current user input slice to each remapped token:

```txt
かえで   matches かえで      → colored token box
さん     matches さん        → colored token box
は       matches は          → colored token box
としょか partially matches としょかん → gray incomplete box
```

Displayed result:

```txt
かえで | さん | は | としょか(gray)
```

When the user completes the token:

```txt
かえでさんはとしょかん
```

`としょかん` fully matches the remapped `図書館` token, so it becomes a normal colored token box using `図書館`'s stored POS.

## What happens with mistakes

If the user diverges inside the current token, the confirmed prefix stays colored and the uncertain suffix becomes gray:

```txt
expected token: としょかん
user typed:    としょかの

result: かえで | さん | は | としょかの(gray)
```

The selector does not try to recover after the first mismatch yet. Everything from the mismatch point onward is treated as the current uncertain suffix.

## Matching normalization

Whitespace, `、`, and final `。?!？！` do not block matching.

Example:

```txt
expected: 兄は昨日、公園で...
user:     あにはきのうこうえんで...
```

The stored comma token is ignored for matching, so matching continues from `きのう` to `こうえん`.

## Data invariants

- `preparedAnswerTokens[i]` must correspond to `prepareQuestion(question).answers[i]`.
- `RichSegment.original` preserves authored furigana text.
- `RichSegment.plain` and `RichSegment.kana` remove whitespace.
- Token POS comes from the stored plain token, even when the displayed user text is kana.
- Gray boxes mean “current unmatched/incomplete suffix”; they are not POS-tagged.

## Useful commands

```bash
bun run upsert-sentence-practice
bun run test -- src/features/sentence-practice
bunx tsc --noEmit
```
