#!/usr/bin/env bun

import { existsSync } from "fs"
import { basename, extname, join, resolve } from "path"
import { pathToFileURL } from "url"
import { prepareQuestion } from "../src/features/sentence-practice/core/questionProcessor"
import type { RichAnswer } from "../src/features/sentence-practice/core/types"
import { groupDebugAnswers } from "../src/features/sentence-practice/ui/practice/selectors/debugAnswers"
import type { Question } from "./data/sentence-practice/types"

const DATA_ROOT = resolve(import.meta.dirname, "data/sentence-practice")

async function main() {
  const args = process.argv.slice(2)
  const targetArg = args[0]
  const jsonMode = args.includes("--json")

  if (!targetArg || args.includes("--help") || args.includes("-h")) {
    printUsage()
    process.exit(targetArg ? 0 : 1)
  }

  const filePath = resolveSentencePracticePath(targetArg)
  if (!existsSync(filePath)) {
    console.error(`File not found: ${filePath}`)
    process.exit(1)
  }

  const mod = await import(pathToFileURL(filePath).href)
  const questions = mod.questions as Question[] | undefined

  if (!questions || !Array.isArray(questions)) {
    console.error(`No exported questions array found in: ${filePath}`)
    process.exit(1)
  }

  const report = questions.map(buildQuestionReport)

  if (jsonMode) {
    console.log(
      JSON.stringify(
        {
          file: filePath,
          questionCount: report.length,
          questions: report,
        },
        null,
        2,
      ),
    )
    return
  }

  printReport(filePath, report)
}

function buildQuestionReport(question: Question, index: number) {
  const processed = prepareQuestion(question)
  const nonKanaAnswers = processed.validAnswers.filter(
    (a) => !a.isKanaVariation,
  )

  const acceptedPlain = unique(
    nonKanaAnswers.map((a) => cleanAnswerText(a.plain)),
  )
  const strippedParticles = getStrippableParticles(processed.validAnswers)
  const groupedAnswers = groupDebugAnswers(nonKanaAnswers)

  return {
    index: index + 1,
    english: question.english,
    hint: question.hint,
    sourceAnswerCount: question.answers.length,
    generatedAnswerCount: acceptedPlain.length,
    acceptedPlain,
    groupedAnswers,
    strippedParticles,
  }
}

function printReport(
  filePath: string,
  report: ReturnType<typeof buildQuestionReport>[],
) {
  console.log(`Sentence practice check: ${filePath}`)
  console.log(`Questions: ${report.length}`)
  console.log(
    `Note: the answer checker already auto-accepts user-entered よ・ね・よね endings, so those should not be embedded in the source data.\n`,
  )

  for (const question of report) {
    console.log(`${question.index}. ${question.english}`)

    if (question.hint) {
      console.log(`   hint: ${question.hint}`)
    }

    console.log(
      `   source answers: ${question.sourceAnswerCount} | generated accepted answers: ${question.generatedAnswerCount}`,
    )

    console.log(`   accepted plain strings (${question.acceptedPlain.length}):`)
    printGroupedAnswers(question.groupedAnswers)

    console.log("\n")
  }
}

function printGroupedAnswers(
  groupedAnswers: ReturnType<typeof groupDebugAnswers>,
) {
  for (const sourceGroup of groupedAnswers) {
    const firstKanji = (form: typeof sourceGroup.polite) =>
      form.pronounGroups.values().next().value?.honorificGroups.values().next()
        .value?.kanji[0]

    const firstAnswer =
      firstKanji(sourceGroup.polite) ?? firstKanji(sourceGroup.casual)

    if (firstAnswer) {
      console.log(
        `     Original Answer ${sourceGroup.sourceAnswerIndex + 1}: ${cleanAnswerText(firstAnswer.plain)}`,
      )
    } else {
      console.log(`     Original Answer ${sourceGroup.sourceAnswerIndex + 1}:`)
    }

    printFormGroup("Polite", sourceGroup.polite.pronounGroups)
    printFormGroup("Casual", sourceGroup.casual.pronounGroups)
  }
}

function printFormGroup(
  label: string,
  pronounGroups: Map<
    string,
    {
      honorificGroups: Map<
        string,
        {
          kanji: RichAnswer[]
          kana: RichAnswer[]
        }
      >
    }
  >,
) {
  if (pronounGroups.size === 0) return

  console.log(`       ${label} Form:`)

  for (const [pronounType, pronounGroup] of pronounGroups.entries()) {
    const hasPronounHeader = pronounType !== "none"
    const base = hasPronounHeader ? "           " : "         "

    if (hasPronounHeader) {
      console.log(`         ${cleanAnswerText(pronounType)}:`)
    }

    for (const [
      honorificType,
      honorificGroup,
    ] of pronounGroup.honorificGroups.entries()) {
      if (honorificType !== "none") {
        console.log(`${base}${cleanAnswerText(honorificType)}:`)
      }

      const answerIndent =
        base + (honorificType !== "none" ? "  " : "") + "-"

      for (const answer of honorificGroup.kanji) {
        console.log(`${answerIndent} ${cleanAnswerText(answer.plain)}`)
      }
    }
  }
}

function cleanAnswerText(text: string): string {
  return text.replace(/\x1F/g, "").replace(/\s+/g, "")
}

function unique<T>(values: T[]): T[] {
  return [...new Set(values)]
}

function getStrippableParticles(validAnswers: RichAnswer[]): string[] {
  const cleaned = validAnswers.map((a) => cleanAnswerText(a.plain))
  if (cleaned.some((t) => t.endsWith("か") || t.endsWith("？"))) return []
  return ["よね", "ね", "よ"].filter(
    (p) => !cleaned.some((t) => t.endsWith(p)),
  )
}

function resolveSentencePracticePath(input: string): string {
  if (existsSync(input)) {
    return resolve(input)
  }

  const withTs = extname(input) ? input : `${input}.ts`
  const underDataRoot = join(DATA_ROOT, withTs)
  if (existsSync(underDataRoot)) {
    return underDataRoot
  }

  return underDataRoot
}

function printUsage() {
  const scriptName = basename(new URL(import.meta.url).pathname)
  console.log(`Usage:`)
  console.log(`  bun run scripts/${scriptName} <chapter-#/file.ts> [--json]`)
  console.log(``)
  console.log(`Examples:`)
  console.log(`  bun run scripts/${scriptName} chapter-5/adjectives_v3.ts`)
  console.log(`  bun run scripts/${scriptName} chapter-5/adjectives_v3`)
  console.log(
    `  bun run scripts/${scriptName} scripts/data/sentence-practice/chapter-5/adjectives_v3.ts`,
  )
}

await main()
