// app/utils/jwt-utils.ts

/**
 * Parse JWT payload without verification (client-side safe)
 */
export function parseJWTPayload(token: string): Record<string, any> | null {
  try {
    const payload = token.split(".")[1]
    const decoded = JSON.parse(atob(payload))
    return decoded
  } catch {
    return null
  }
}

/**
 * Check if JWT is expired based on exp claim
 */
export function isJWTExpired(token: string): boolean {
  const payload = parseJWTPayload(token)
  if (!payload?.exp) return false

  const now = Math.floor(Date.now() / 1000)
  return payload.exp < now
}

/**
 * Get specific claims from JWT payload
 */
export function getJWTClaims(
  token: string,
  claims: string[],
): Record<string, any> {
  const payload = parseJWTPayload(token)
  if (!payload) return {}

  const result: Record<string, any> = {}
  claims.forEach((claim) => {
    if (payload[claim] !== undefined) {
      result[claim] = payload[claim]
    }
  })
  return result
}
