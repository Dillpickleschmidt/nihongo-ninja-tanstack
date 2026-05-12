# Sentence Practice

## Files to know

- `core/questionProcessor.ts` — turns Convex/source questions into `ProcessedQuestion` objects.
- `core/segmentProcessor.ts` — applies segment conjugations and creates prepared segment variants.
- `core/answer-processing/variationGenerator.ts` — creates canonical Japanese answers, then accepted input aliases.
- `core/answer-processing/answerChecker.ts` — checks `answerText` against accepted answers.
- `session/easyModeAnswerProjection.ts` — projects easy-mode blanks into the same `answerText` used by hard mode.
- `ui/practice/selectors/userInputPosDisplayItems.ts` — maps user input to canonical answer tokens for POS box display.
- `scripts/upsert-sentence-practice.ts` — generates `canonicalAnswerTokens` and imports questions into Convex.

## Core flow

```txt
source question
→ prepareQuestion()
→ ProcessedQuestion.answers             // segment-based prepared variants
→ ProcessedQuestion.canonicalAnswers    // real Japanese answer forms
→ ProcessedQuestion.acceptedAnswers     // canonical answers + input aliases
→ canonicalAnswerTokens                 // token/POS data aligned by canonical answer index
```

Hard mode edits `answerText` directly. Easy mode edits blanks, then projects them into `answerText`. Both modes call:

```ts
checkAnswer(answerText, question.preparedAnswersForMatching)
```

`preparedAnswersForMatching` is built from `acceptedAnswers`, so users can type aliases like plain kana while the rest of the UI stays anchored to canonical answers.

## Canonical answers vs input aliases

The app primarily works with canonical Japanese answer forms: the actual Japanese strings, preserving kanji/furigana when known. Generated forms such as pronoun swaps, honorific swaps, kinship swaps, and `〜ている → 〜てる` contractions are canonical answers.

Kana-only strings are input aliases. They exist so users can type plain kana, but they are not the answer forms that POS display, easy-mode variation lists, or grammar tokenization reason about.

```txt
canonical answer: 楓[かえで]さんは 図書館[としょかん]で␟歌[うた]ってた
input alias:      かえでさんは としょかんで␟うたってた
```

## POS display flow

The POS display does not tokenize the user's input directly. It treats the user's input as progress through one canonical answer form.

```txt
answerText
→ choose the best canonical answer
→ remap that answer's stored tokens into the script the user typed
→ compare user input against those remapped token strings
→ render completed tokens with POS colors
→ render the first unmatched/incomplete suffix as one gray box
```

`canonicalAnswerTokens[i]` corresponds to `ProcessedQuestion.canonicalAnswers[i]`.

## Concrete mapping example

Source segments:

```ts
{ text: "楓[かえで]さんは 図書館[としょかん]で" }
{ text: "歌[うた]って", blank: true }
{ text: "いる", blank: true, conjugation: { pos: "Ichidan verb", tense: "past", polarity: "positive" } }
```

`prepareQuestion()` creates canonical answers such as:

```txt
楓[かえで]さんは 図書館[としょかん]で␟歌[うた]って␟いた
楓[かえで]さんは 図書館[としょかん]で␟歌[うた]ってた
```

The upsert script stores tokens for each canonical answer's plain text. For the contracted answer:

```txt
楓 / さん / は / 図書館 / で / 歌ってた
```

If the user types kana:

```txt
かえでさんはとしょかんでうたってた
```

the selector maps canonical tokens through furigana:

```txt
楓       → かえで
さん     → さん
は       → は
図書館   → としょかん
で       → で
歌ってた → うたってた
```

The POS stays attached to the token during this remap. Only the displayed/matched text changes.

## What happens with partial input or mistakes

If the user is midway through a token, completed tokens stay colored and the uncertain suffix is gray:

```txt
expected token: としょかん
user typed:    としょか

result: かえで | さん | は | としょか(gray)
```

If the user diverges inside the current token, the confirmed prefix still stays colored:

```txt
expected token: としょかん
user typed:    としょかの

result: かえで | さん | は | としょかの(gray)
```

The selector does not try to recover after the first mismatch yet. Everything from that point onward is treated as the current uncertain suffix.

## Matching normalization

Whitespace, `、`, and final `。?!？！` do not block matching.

Example:

```txt
expected: 兄は昨日、公園で...
user:     あにはきのうこうえんで...
```

The stored comma token is ignored for matching, so matching continues from `きのう` to `こうえん`.

## Data invariants

- `canonicalAnswerTokens[i]` must correspond to `prepareQuestion(question).canonicalAnswers[i]`.
- `canonicalAnswers` are real Japanese forms used by POS display and easy-mode variation lists.
- `acceptedAnswers` are canonical answers plus input aliases used by answer checking.
- `RichSegment.original` preserves authored furigana text.
- `RichSegment.plain` and `RichSegment.kana` remove whitespace.
- Token POS comes from the stored plain token, even when the displayed user text is kana.
- Gray boxes are neutral text such as punctuation or unmatched/incomplete input; they are not POS-tagged.

## Useful commands

```bash
bun run upsert-sentence-practice
bun run test -- src/features/sentence-practice
bunx tsc --noEmit
```
