// features/supabase/getProjectRef.ts
export function getProjectRef(supabaseUrl: string) {
  const match = supabaseUrl.match(/^https:\/\/([^.]+)\.supabase\.co/)
  return match ? match[1] : ""
}
