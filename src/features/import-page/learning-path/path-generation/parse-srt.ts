/**
 * SRT Subtitle Parser
 * Parses SRT files using state machine approach (based on Rust implementation)
 */

export interface Timestamp {
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

export interface Subtitle {
  number: number
  start_time: Timestamp
  end_time: Timestamp
  text: string
}

enum ParseState {
  ExpectingNumber,
  ExpectingTimestamp,
  ReadingText,
}

class SRTParseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "SRTParseError"
  }
}

function parseTimestamp(timestampStr: string): Timestamp {
  const trimmed = timestampStr.trim()
  // Split by both : and , to get [hours, minutes, seconds, milliseconds]
  const parts = trimmed.split(/[:,]/)

  if (parts.length !== 4) {
    throw new SRTParseError(
      `Invalid timestamp format: "${timestampStr}". Expected HH:MM:SS,mmm`,
    )
  }

  const hours = parseInt(parts[0], 10)
  const minutes = parseInt(parts[1], 10)
  const seconds = parseInt(parts[2], 10)
  const milliseconds = parseInt(parts[3], 10)

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    isNaN(seconds) ||
    isNaN(milliseconds)
  ) {
    throw new SRTParseError(`Invalid timestamp values: "${timestampStr}"`)
  }

  return { hours, minutes, seconds, milliseconds }
}

/**
 * Parse SRT file content into structured subtitle array
 * @param content - Raw SRT file content as string
 * @returns Array of parsed subtitles
 */
export function parseSRT(content: string): Subtitle[] {
  // Remove BOM if present
  let input = content.replace(/^\uFEFF/, "")

  // Normalize line endings (Windows \r\n to Unix \n)
  input = input.replace(/\r/g, "")

  const lines = input.split("\n")
  const subtitles: Subtitle[] = []

  let state = ParseState.ExpectingNumber
  let currentNumber = 0
  let currentStartTime: Timestamp | null = null
  let currentEndTime: Timestamp | null = null
  let currentTextLines: string[] = []

  for (const line of lines) {
    const trimmedLine = line.trim()

    switch (state) {
      case ParseState.ExpectingNumber: {
        // Skip empty lines
        if (trimmedLine === "") continue

        // Parse sequence number
        const num = parseInt(trimmedLine, 10)
        if (isNaN(num)) {
          throw new SRTParseError(
            `Expected subtitle number, got: "${trimmedLine}"`,
          )
        }

        currentNumber = num
        state = ParseState.ExpectingTimestamp
        break
      }

      case ParseState.ExpectingTimestamp: {
        // Look for timestamp line with " --> " separator
        if (!trimmedLine.includes(" --> ")) {
          throw new SRTParseError(
            `Expected timestamp line with " --> ", got: "${trimmedLine}"`,
          )
        }

        const [startStr, endStr] = trimmedLine.split(" --> ")
        currentStartTime = parseTimestamp(startStr)
        currentEndTime = parseTimestamp(endStr)
        state = ParseState.ReadingText
        break
      }

      case ParseState.ReadingText: {
        // Empty line signals end of subtitle text
        if (trimmedLine === "") {
          if (currentTextLines.length > 0) {
            subtitles.push({
              number: currentNumber,
              start_time: currentStartTime!,
              end_time: currentEndTime!,
              text: currentTextLines.join("\n"),
            })
          }

          // Reset for next subtitle
          currentTextLines = []
          state = ParseState.ExpectingNumber
        } else {
          // Accumulate text lines
          currentTextLines.push(trimmedLine)
        }
        break
      }
    }
  }

  // Handle case where file ends without final blank line
  if (state === ParseState.ReadingText && currentTextLines.length > 0) {
    subtitles.push({
      number: currentNumber,
      start_time: currentStartTime!,
      end_time: currentEndTime!,
      text: currentTextLines.join("\n"),
    })
  }

  if (subtitles.length === 0) {
    throw new SRTParseError("No subtitles found in file")
  }

  return subtitles
}

/**
 * Format timestamp as string for display
 */
export function formatTimestamp(ts: Timestamp): string {
  const pad = (n: number, width: number) => n.toString().padStart(width, "0")
  return `${pad(ts.hours, 2)}:${pad(ts.minutes, 2)}:${pad(ts.seconds, 2)},${pad(ts.milliseconds, 3)}`
}
