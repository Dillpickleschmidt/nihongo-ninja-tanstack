# Sentence Practice

`sentence-practice` is organized around one canonical user answer string: `answerText`.

## Architecture

- `core/`: shared domain logic for preparing questions, generating valid answers, normalizing text, matching answers, and tokenization helpers
- `session/practiceSession.ts`: question progression, effective difficulty, and completion logic
- `session/easyModeAnswerProjection.ts`: easy mode only; turns blank edits into canonical `answerText`
- `store/practiceStore.ts`: thin adapter around canonical session state and actions
- `services/tokenizationSession.ts`: async orchestration around Kagome tokenization
- `ui/practice/`: rendering only; easy mode and hard mode are just different editing surfaces over the same answer

## Mental Model

- Hard mode edits `answerText` directly.
- Easy mode edits local blank drafts, then projects them into `answerText`.
- Both modes use the same downstream pipeline:
  - `prepareQuestion()`
  - canonical `answerText`
  - `checkAnswer(answerText, validAnswers)`

## Tests

- `core/*.test.ts`: foundation/domain behavior
- `session/*.test.ts`: session rules and easy-mode projection
- `services/*.test.ts`: async orchestration
- `ui/practice/selectors/*.test.ts`: UI data shaping
- `integration/*.test.ts`: end-to-end feature behavior across multiple modules
