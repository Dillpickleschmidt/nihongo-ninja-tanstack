const KAGOME_URL = import.meta.env.VITE_KAGOME_TOKENIZE_URL

export async function tokenizeSentences(
  sentences: string[],
): Promise<string[][]> {
  const res = await fetch(KAGOME_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sentences }),
  })
  if (!res.ok) throw new Error(`Tokenize error: ${res.status}`)
  const data: { results: string[][] } = await res.json()
  return data.results
}
