import type {
  RequestPayload,
  WordResponse,
  KanjiResponse,
  NameResponse,
  SentenceResponse,
  RadicalsPayload,
  RadicalsResponse,
  RadicalSearchPayload,
  RadicalSearchResponse,
  CompletionPayload,
  CompletionResponse,
  ShortNewsPayload,
  ShortNewsResponse,
  DetailedNewsPayload,
  DetailedNewsResponse,
  JotobaError,
} from "./types"

const JOTOBA_BASE_URL = "https://jotoba.de/api"

async function makeRequest<T>(endpoint: string, payload: any): Promise<T> {
  const response = await fetch(`${JOTOBA_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json()

  if (!response.ok) {
    const error = data as JotobaError
    throw new Error(`${error.error}: ${error.message}`)
  }

  return data
}

export async function searchWords(
  payload: RequestPayload,
): Promise<WordResponse> {
  return makeRequest<WordResponse>("/search/words", payload)
}

export async function searchNames(
  payload: RequestPayload,
): Promise<NameResponse> {
  return makeRequest<NameResponse>("/search/names", payload)
}

export async function searchKanji(
  payload: RequestPayload,
): Promise<KanjiResponse> {
  return makeRequest<KanjiResponse>("/search/kanji", payload)
}

export async function searchSentences(
  payload: RequestPayload,
): Promise<SentenceResponse> {
  return makeRequest<SentenceResponse>("/search/sentences", payload)
}

export async function searchKanjiByRadicals(
  payload: RadicalsPayload,
): Promise<RadicalsResponse> {
  return makeRequest<RadicalsResponse>("/kanji/by_radical", payload)
}

export async function searchRadicals(
  payload: RadicalSearchPayload,
): Promise<RadicalSearchResponse> {
  return makeRequest<RadicalSearchResponse>("/radical/search", payload)
}

export async function getCompletions(
  payload: CompletionPayload,
): Promise<CompletionResponse> {
  return makeRequest<CompletionResponse>("/suggestion", payload)
}

export async function getShortNews(
  payload: ShortNewsPayload,
): Promise<ShortNewsResponse> {
  return makeRequest<ShortNewsResponse>("/news/short", payload)
}

export async function getDetailedNews(
  payload: DetailedNewsPayload,
): Promise<DetailedNewsResponse> {
  return makeRequest<DetailedNewsResponse>("/news/detailed", payload)
}
