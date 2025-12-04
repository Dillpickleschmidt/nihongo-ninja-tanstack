/**
 * Dictionary queries from Supabase
 * Mirrors Yomitan's IndexedDB structure for term lookups
 */

import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"

interface FindTermsResult {
  terms: DictionaryTerm[]
  termMeta: DictionaryTermMeta[] // includes freq, pitch, ipa - all modes
}

/**
 * Find terms with all metadata in a single network request
 * Returns everything Yomitan would display for an expression
 */
export async function findTerms(expression: string): Promise<FindTermsResult> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase.rpc("find_terms", {
    search_expression: expression,
  })

  if (error) {
    console.error("Error fetching terms:", error)
    return { terms: [], termMeta: [] }
  }

  return data as FindTermsResult
}
