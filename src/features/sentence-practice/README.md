# Sentence Practice Feature

A comprehensive sentence practice system with automatic conjugation, variation generation, and intelligent answer checking.

## Architecture

### Core Processing Pipeline

```
Convex Questions → PracticeService → Processed Questions with Variations
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
- **TextProcessor** (singleton): Normalizes text and handles furigana

#### Grammar Handlers (`core/grammar/`)

- **honorificHandler** (singleton): Generates honorific variations (さん, くん, ちゃん, etc.)
- **pronounHandler** (singleton): Generates pronoun variations (私, 僕, 俺, etc.)

#### Kagome Integration (`kagome/`)

- **KagomeWorkerManager**: Manages Web Worker for Japanese tokenization
- Provides real-time POS (part-of-speech) analysis for visual hints
- Requires WASM files in `public/kagome/` and `public/grammar/`

#### UI Components (`ui/`)

- **PracticeContainer**: Main practice interface with difficulty modes
- **PromptDisplay**: Shows English prompt and hints
- **FuriganaText**: Renders Japanese text with furigana and error highlighting
- **PosHintDisplay**: Shows colored POS boxes for model answer structure
- **UserInputPosDisplay**: Shows colored POS boxes for user's input
- **DebugPanel**: Developer tool showing all answer variations

## Usage

### Route-Based Access

Questions are loaded via route parameters:

```
/sentence-practice/:setId
```

Example: `/sentence-practice/x-wa-y-desu`

### Data Storage

Questions are stored in the Convex `sentencePracticeQuestions` table and upserted via:

```bash
bun run scripts/upsert-sentence-practice.ts
```

### Question Format (in data files)

```json
{
  "english": "Let's go to the shopping mall after we get our salary",
  "answers": [
    {
      "segments": [
        { "text": "給料[きゅうりょう]を" },
        { "text": "もらったら", "blank": true },
        { "text": "、ショッピングモールに" },
        {
          "text": "行[い]く",
          "conjugation": {
            "pos": "Godan verb - Iku/Yuku special class",
            "form": "volitional",
            "polarity": "positive",
            "tense": "non-past"
          }
        }
      ],
      "notes": "Basic pattern with を for salary"
    }
  ]
}
```

- **`text`**: Japanese text with furigana in brackets (e.g., `給料[きゅうりょう]`)
- **`blank: true`**: Makes this segment a fill-in-the-blank input in easy mode
- **`conjugation`**: Auto-conjugates the word based on `pos`, `form`, `polarity`, `tense`

## Practice Modes

- **Hard Mode**: Full sentence input with POS color hints
- **Easy Mode**: Fill-in-the-blank for questions with `blank: true` segments

## Variation Metadata

Each generated variation tracks its origin:

```typescript
{
  segments: string[]
  isVariation?: boolean        // true if generated (not original)
  isKanaVariation?: boolean    // true if kanji converted to kana
  originalPoliteForm?: boolean // true = polite, false = casual
  sourceAnswerIndex?: number   // which original answer it came from
  pronounType?: string         // e.g., "私[わたし]", "僕[ぼく]", "dropped"
  honorificType?: string       // e.g., "さん", "くん+先生"
}
```

## WASM Dependencies

The feature requires these files in `public/`:

```
public/
├── kagome/
│   ├── kagome.wasm        # Japanese tokenizer (16MB)
│   ├── kagome-worker.js   # Web Worker script
│   └── wasm_exec.js       # Go WASM runtime
└── grammar/
    ├── grammar_wasm_bg.wasm  # Grammar analyzer (4.5MB)
    ├── grammar_wasm.js
    └── grammar_wasm.d.ts
```

## Future Enhancements

- [ ] Session tracking integration
- [ ] Progress tracking
- [ ] Audio playback
