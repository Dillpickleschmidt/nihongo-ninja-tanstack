// features/service-config/jpdb/validation.ts

/**
 * Validates a JPDB API key by making a test request
 */
export async function validateJpdbApiKey(apiKey: string): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("https://jpdb.io/api/v1/list-user-decks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: ["id", "name"],
      }),
    })

    if (!response.ok) {
      return {
        success: false,
        error: `JPDB API error: ${response.status} ${response.statusText}`,
      }
    }

    // If we get here, the API key is valid
    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}