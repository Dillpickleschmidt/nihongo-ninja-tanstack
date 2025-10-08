# Sentence Practice Feature

A comprehensive sentence practice system with automatic conjugation, variation generation, and intelligent answer checking.

## Architecture

### Core Processing Pipeline

```
JSON Questions → PracticeService → Processed Questions with Variations
                     ↓
            [Conjugation Phase]
            Polite/Casual forms
                     ↓
            [Variation Phase]
            Pronouns → Honorifics → Kana
                     ↓
            [Answer Checking]
            LCS-based matching with error highlighting
```

### Key Components

#### Core Logic (`core/`)

- **PracticeService**: Main orchestrator that processes questions through the pipeline
- **ConjugationEngine**: Handles verb/adjective conjugation with kanji preservation
- **VariationGenerator**: Generates all valid variations (pronouns, honorifics, kana)
- **AnswerChecker**: Validates user input using LCS algorithm with fuzzy matching
- **TextProcessor**: Normalizes text and handles furigana

#### UI Components (`components/`)

- **SentencePracticeContainer**: Main practice interface
- **PromptDisplay**: Shows English prompt and hints
- **FuriganaText**: Renders Japanese text with furigana and error highlighting
- **DebugPanel**: Developer tool showing all variations with metadata tooltips

## Usage

### Basic Setup

```tsx
import SentencePracticeContainer from "@/features/sentence-practice"

<SentencePracticeContainer
  questionPath="chapter-1/test"
  showDebug={false}
/>
```

### Question Format

Questions are stored as JSON files in `data/`:

```json
[
  {
    "english": "I read a book at the library, yesterday.",
    "hint": "Use past tense (ました)",
    "answers": [
      {
        "segments": [
          "昨日[きのう]",
          "、",
          "私[わたし]",
          "は",
          "図書館[としょかん]",
          "で",
          "本[ほん]",
          "を",
          "読みました[よみました]"
        ],
        "notes": "Time expression at start"
      }
    ]
  }
]
```

### With Conjugation

```json
{
  "english": "The movie is boring.",
  "answers": [
    {
      "segments": [
        "映画[えいが]",
        "は",
        {
          "word": "つまらない",
          "pos": "I-adjective",
          "polarity": "positive",
          "tense": "non-past",
          "politeOnly": true
        }
      ]
    }
  ]
}
```

## Metadata Tracking

Every variation includes metadata showing its transformation history:

```typescript
{
  source: "polite" | "casual",
  transformations: [
    { type: "conjugation", detail: "normal polite" },
    { type: "pronoun", detail: "Changed to 僕" },
    { type: "kana", detail: "Converted kanji to kana" }
  ],
  segmentMetadata: Map<number, {
    originalText: string,
    conjugatedFrom?: string,
    pos?: string,
    transformations: TransformationStep[]
  }>
}
```

## Debug Mode

Enable `showDebug={true}` to see:
- All generated variations
- Transformation pipeline for each variation
- Per-segment metadata on hover
- Source (polite/casual) tracking

## Optimizations Made

1. **Period normalization**: Removed period variations (halved variation count)
2. **Pipeline refactor**: Cleaner variation generation flow
3. **Metadata tracking**: Single-pass metadata building during transformation
4. **No caching**: Removed unused cache (questions are unique)

## Future Enhancements

- [ ] Fill-in-the-blank mode (easy mode)
- [ ] Session tracking integration
- [ ] Alternative answer display
- [ ] Progress tracking
- [ ] Difficulty selector
- [ ] Audio playback
