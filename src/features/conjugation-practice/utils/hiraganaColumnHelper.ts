import hiraganaRows from "../data/hiraganaRows"

/**
 * Changes a hiragana character to another with a different vowel sound.
 *
 * This function is used in Japanese verb conjugation to modify the ending of a verb.
 * It automatically determines the initial vowel of the input character.
 *
 * @param {string} input - The hiragana character to change (e.g., 'す').
 * @param {string} desiredVowel - The vowel sound to change to ('a', 'i', 'u', 'e', or 'o').
 * @returns {string} The hiragana character with the new vowel sound, or the input if no change is possible.
 *
 * @example
 * changeHiraganaVowel('す', 'e') // returns 'せ'
 * changeHiraganaVowel('き', 'a') // returns 'か'
 *
 * @throws {Error} If the input is not a single hiragana character or if the desired vowel is invalid.
 */
export function changeHiraganaVowel(
  input: string,
  desiredVowel: string,
): string {
  if (input.length !== 1) {
    throw new Error("Input must be a single hiragana character")
  }

  if (!["a", "i", "u", "e", "o"].includes(desiredVowel)) {
    throw new Error("Invalid desired vowel. Must be one of: a, i, u, e, o")
  }

  let initialVowel = ""
  let column = -1

  for (const [vowel, row] of Object.entries(hiraganaRows)) {
    column = row.indexOf(input)
    if (column !== -1) {
      initialVowel = vowel
      break
    }
  }

  if (initialVowel === "") {
    throw new Error("Input is not a valid hiragana character")
  }

  return hiraganaRows[desiredVowel][column]
}
