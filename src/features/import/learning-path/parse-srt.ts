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
  const parts = timestampStr.trim().split(/[:,]/)
  if (parts.length !== 4) {
    throw new SRTParseError(
      `Invalid timestamp format: "${timestampStr}". Expected HH:MM:SS,mmm`,
    )
  }

  const hours = parseInt(parts[0], 10)
  const minutes = parseInt(parts[1], 10)
  const seconds = parseInt(parts[2], 10)
  const milliseconds = parseInt(parts[3], 10)

  if ([hours, minutes, seconds, milliseconds].some((x) => Number.isNaN(x))) {
    throw new SRTParseError(`Invalid timestamp values: "${timestampStr}"`)
  }

  return { hours, minutes, seconds, milliseconds }
}

export function parseSRT(content: string): Subtitle[] {
  let input = content.replace(/^\uFEFF/, "")
  input = input.replace(/\r/g, "")

  const lines = input.split("\n")
  const subtitles: Subtitle[] = []

  let state = ParseState.ExpectingNumber
  let currentNumber = 0
  let currentStartTime: Timestamp | null = null
  let currentEndTime: Timestamp | null = null
  let currentTextLines: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()

    switch (state) {
      case ParseState.ExpectingNumber: {
        if (trimmed === "") continue

        const num = parseInt(trimmed, 10)
        if (Number.isNaN(num)) {
          throw new SRTParseError(`Expected subtitle number, got: "${trimmed}"`)
        }

        currentNumber = num
        state = ParseState.ExpectingTimestamp
        break
      }

      case ParseState.ExpectingTimestamp: {
        if (!trimmed.includes(" --> ")) {
          throw new SRTParseError(
            `Expected timestamp line with " --> ", got: "${trimmed}"`,
          )
        }

        const [startStr, endStr] = trimmed.split(" --> ")
        currentStartTime = parseTimestamp(startStr)
        currentEndTime = parseTimestamp(endStr)
        state = ParseState.ReadingText
        break
      }

      case ParseState.ReadingText: {
        if (trimmed === "") {
          if (currentTextLines.length > 0 && currentStartTime && currentEndTime) {
            subtitles.push({
              number: currentNumber,
              start_time: currentStartTime,
              end_time: currentEndTime,
              text: currentTextLines.join("\n"),
            })
          }

          currentTextLines = []
          state = ParseState.ExpectingNumber
        } else {
          currentTextLines.push(trimmed)
        }

        break
      }
    }
  }

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

export function formatTimestamp(ts: Timestamp): string {
  const pad = (n: number, width: number) => n.toString().padStart(width, "0")
  return `${pad(ts.hours, 2)}:${pad(ts.minutes, 2)}:${pad(ts.seconds, 2)},${pad(ts.milliseconds, 3)}`
}
