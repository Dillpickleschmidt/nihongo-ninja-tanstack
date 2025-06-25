// src/features/fsrs-import/batchProcessing.ts

/**
 * Splits an array into chunks of specified size.
 * Preserves element order within chunks.
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  if (chunkSize <= 0) {
    throw new Error("Chunk size must be greater than 0")
  }

  if (array.length === 0) {
    return []
  }

  const chunks: T[][] = []

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }

  return chunks
}

/**
 * Processes batches in parallel using Promise.all.
 * Maintains result order and fails fast on any error.
 */
export async function processBatches<T, R>(
  items: T[],
  chunkSize: number,
  processor: (batch: T[]) => Promise<R>,
): Promise<R[]> {
  if (items.length === 0) {
    return []
  }

  // Split items into chunks
  const chunks = chunkArray(items, chunkSize)

  // Process all chunks in parallel
  const results = await Promise.all(chunks.map((chunk) => processor(chunk)))

  return results
}
