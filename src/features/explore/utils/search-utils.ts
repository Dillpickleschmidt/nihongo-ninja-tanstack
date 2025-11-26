/**
 * Search page utilities
 */

/**
 * Debounce a function to delay execution until after the last call
 */
export function debounce<T extends (...args: any[]) => unknown>(
  callback: T,
  waitFor: number,
) {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, waitFor)
  }
}

/**
 * Sleep for a specified number of milliseconds
 */
export const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms))
