/**
 * Token Combining Utilities
 * Merges tokens based on conjugation patterns detected by grammar analysis
 *
 * Example: 飲み + ます → 飲みます (single verb token)
 */

import type { KagomeToken, GrammarMatch } from "../types/kagome"

/**
 * Filters out patterns completely contained within higher-confidence patterns
 */
function selectBestPatterns(matches: GrammarMatch[]): GrammarMatch[] {
  if (!matches || matches.length === 0) {
    return []
  }

  // Sort by confidence descending (highest confidence first)
  const sorted = [...matches].sort((a, b) => b.confidence - a.confidence)
  const selected: GrammarMatch[] = []

  for (const match of sorted) {
    // Skip if completely contained in a higher-confidence match
    const isRedundant = selected.some(
      (s) =>
        s.start_char <= match.start_char &&
        s.end_char >= match.end_char &&
        s.confidence > match.confidence,
    )

    if (!isRedundant) {
      selected.push(match)
    }
  }

  return selected
}

/**
 * Combines tokens covered by conjugation patterns into single tokens
 *
 * @param text - Original text that was tokenized
 * @param tokens - Tokens from Kagome morphological analysis
 * @param grammarMatches - Grammar patterns detected by Rust WASM analyzer
 * @returns Tokens with conjugations combined (e.g., 飲み + ます → 飲みます)
 *
 * @example
 * Input tokens: [{surface: '飲み', pos: ['動詞']}, {surface: 'ます', pos: ['助動詞']}]
 * Grammar match: {category: 'Conjugation', start_char: 0, end_char: 4}
 * Output: [{surface: '飲みます', pos: ['動詞'], start: 0, end: 4}]
 */
export function combineConjugationTokens(
  text: string,
  tokens: KagomeToken[],
  grammarMatches: GrammarMatch[],
): KagomeToken[] {
  // Filter to Conjugation patterns only
  const conjugationMatches = grammarMatches.filter(
    (m) => m.category === "Conjugation",
  )

  // Select best (non-redundant) conjugation patterns
  const bestConjugations = selectBestPatterns(conjugationMatches)

  // Sort by start_char for single-pass algorithm
  const conjugationPatterns = bestConjugations.sort(
    (a, b) => a.start_char - b.start_char,
  )

  if (conjugationPatterns.length === 0) {
    return tokens
  }

  const result: KagomeToken[] = []
  let patternIndex = 0
  let tokenIndex = 0

  while (tokenIndex < tokens.length) {
    const token = tokens[tokenIndex]

    // Skip patterns that end before this token
    while (
      patternIndex < conjugationPatterns.length &&
      conjugationPatterns[patternIndex].end_char <= token.start
    ) {
      patternIndex++
    }

    // Check if current token overlaps with current pattern
    const pattern = conjugationPatterns[patternIndex]

    if (!pattern || token.end <= pattern.start_char) {
      // No overlap - add token as-is
      result.push(token)
      tokenIndex++
      continue
    }

    // Token overlaps with pattern - handle overlap
    if (token.start < pattern.start_char && token.end > pattern.start_char) {
      // Token starts before pattern - split it
      const beforeText = text.substring(token.start, pattern.start_char)
      result.push({
        ...token,
        end: pattern.start_char,
        surface: beforeText,
        // Reading/pronunciation proportionally split (approximate)
        reading: token.reading.substring(
          0,
          Math.floor(
            (token.reading.length * beforeText.length) / token.surface.length,
          ),
        ),
        pronunciation: token.pronunciation.substring(
          0,
          Math.floor(
            (token.pronunciation.length * beforeText.length) /
              token.surface.length,
          ),
        ),
      })
    }

    // Find all tokens fully or partially contained in this pattern
    const containedTokens: KagomeToken[] = []
    let patternEndTokenIndex = tokenIndex

    while (
      patternEndTokenIndex < tokens.length &&
      tokens[patternEndTokenIndex].start < pattern.end_char
    ) {
      const t = tokens[patternEndTokenIndex]

      if (t.start >= pattern.start_char && t.end <= pattern.end_char) {
        // Fully contained
        containedTokens.push(t)
      } else if (t.start < pattern.end_char && t.end > pattern.end_char) {
        // Partially extends past pattern end - add contained part
        const containedPart = text.substring(
          Math.max(t.start, pattern.start_char),
          pattern.end_char,
        )
        containedTokens.push({
          ...t,
          start: Math.max(t.start, pattern.start_char),
          end: pattern.end_char,
          surface: containedPart,
          reading: t.reading.substring(
            0,
            Math.floor(
              (t.reading.length * containedPart.length) / t.surface.length,
            ),
          ),
          pronunciation: t.pronunciation.substring(
            0,
            Math.floor(
              (t.pronunciation.length * containedPart.length) / t.surface.length,
            ),
          ),
        })
      } else if (t.start >= pattern.start_char) {
        // Fully contained
        containedTokens.push(t)
      }

      patternEndTokenIndex++
    }

    // Create combined token from pattern range
    if (containedTokens.length > 0) {
      const combinedSurface = text.substring(pattern.start_char, pattern.end_char)
      const firstToken = containedTokens[0]

      // Prefer verb POS if any token in the group is a verb (e.g., 勉強します)
      // This ensures suru-verbs show as verbs, not nouns
      const verbToken = containedTokens.find((t) => t.pos[0] === "動詞")
      const referenceToken = verbToken || firstToken

      result.push({
        id: firstToken.id,
        start: pattern.start_char,
        end: pattern.end_char,
        surface: combinedSurface,
        class: firstToken.class,
        pos: referenceToken.pos,
        base_form: referenceToken.base_form,
        reading: firstToken.reading,
        pronunciation: firstToken.pronunciation,
        features: firstToken.features,
      })
    }

    // Handle token that extends past pattern end
    const lastOverlappingToken = tokens[patternEndTokenIndex - 1]
    if (lastOverlappingToken && lastOverlappingToken.end > pattern.end_char) {
      const afterText = text.substring(
        pattern.end_char,
        lastOverlappingToken.end,
      )
      const afterStartRatio =
        (pattern.end_char - lastOverlappingToken.start) /
        lastOverlappingToken.surface.length
      result.push({
        ...lastOverlappingToken,
        start: pattern.end_char,
        surface: afterText,
        reading: lastOverlappingToken.reading.substring(
          Math.ceil(lastOverlappingToken.reading.length * afterStartRatio),
        ),
        pronunciation: lastOverlappingToken.pronunciation.substring(
          Math.ceil(lastOverlappingToken.pronunciation.length * afterStartRatio),
        ),
      })
    }

    tokenIndex = patternEndTokenIndex
  }

  return result
}
