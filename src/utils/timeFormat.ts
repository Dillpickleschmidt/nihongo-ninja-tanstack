// src/utils/timeFormat.ts
function padZeros(num: number, length: number) {
  return num.toString().padStart(length, "0")
}
export function formatDuration(duration: number) {
  const seconds = Math.floor(duration % 60)
  const minutes = Math.floor(duration / 60) % 60
  const hours = Math.floor(duration / 3600)
  if (hours === 0) {
    return `${minutes}:${padZeros(seconds, 2)}`
  } else {
    return `${hours}:${padZeros(minutes, 2)}:${padZeros(seconds, 2)}`
  }
}
