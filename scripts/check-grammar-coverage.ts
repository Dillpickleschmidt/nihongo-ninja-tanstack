import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { GRAMMAR_TO_MODULES } from "@/data/grammar_to_modules"
import type { StaticModule, DynamicModule } from "@/data/types"

/**
 * Static modules to skip from coverage check
 */
const STATIC_MODULE_BLACKLIST = [
  "getting_started",
  "getting_started_n5_hiragana-quiz",
  "getting_started_n5_lessons",
  "getting_started_n5_conjugation-practice",
  "getting_started_n5_sentence-practice",
  "getting_started_n5_vocabulary-practice",
  "getting_started_n4_sentence-practice",
  "getting_started_n4_conjugation-practice",
  "getting_started_n4_vocabulary-practice",
  "getting_started_n4_srs",
  "getting_started_n4_custom-decks",
  "getting_started_n4_browser-extension",
  "getting_started_n3_learning-paths",
  "getting_started_n3_browser-extension",
  "getting_started_n3_srs",
  "getting_started_n3_sentence-building",
  "getting_started_n2_learning-paths",
  "getting_started_n2_browser-extension",
  "getting_started_n2_srs-flexibility",
  "getting_started_n2_sentence-building",
  "getting_started_n1_learning-paths",
  "getting_started_n1_browser-extension",
  "getting_started_n1_all-srs-platforms",
]

// Get all modules directly in GRAMMAR_TO_MODULES
const covered = new Set<string>()
for (const moduleIds of Object.values(GRAMMAR_TO_MODULES)) {
  if (moduleIds) {
    for (const moduleId of moduleIds) {
      covered.add(moduleId)
    }
  }
}

// Find uncovered static modules (excluding blacklisted)
const uncoveredStatic = Object.keys(static_modules).filter(
  (id) => !STATIC_MODULE_BLACKLIST.includes(id) && !covered.has(id),
)

// Find uncovered dynamic modules (only sentence-practice session_type)
const uncoveredDynamic = Object.keys(dynamic_modules).filter(
  (id) =>
    dynamic_modules[id].session_type === "sentence-practice" &&
    !covered.has(id),
)

console.log("=== Grammar Coverage Report ===\n")

if (uncoveredStatic.length > 0) {
  console.log(
    `Static modules not covered (showing first 10 of ${uncoveredStatic.length}):`,
  )
  uncoveredStatic.slice(0, 10).forEach((id) => {
    console.log(`  - ${id}`)
  })
  console.log()
} else {
  console.log("✓ All static modules are covered!\n")
}

if (uncoveredDynamic.length > 0) {
  console.log(
    `Dynamic modules not covered (showing first 10 of ${uncoveredDynamic.length}):`,
  )
  uncoveredDynamic.slice(0, 10).forEach((id) => {
    console.log(`  - ${id}`)
  })
  console.log()
} else {
  console.log("✓ All dynamic modules are covered!\n")
}

const totalSentencePractice = Object.values(dynamic_modules).filter(
  (m) => m.session_type === "sentence-practice",
).length
const totalStatic =
  Object.keys(static_modules).length - STATIC_MODULE_BLACKLIST.length

console.log(
  `Total coverage: ${covered.size}/${totalStatic} static, ${covered.size}/${totalSentencePractice} sentence-practice dynamic`,
)
