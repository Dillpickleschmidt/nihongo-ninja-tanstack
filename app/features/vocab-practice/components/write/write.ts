// vocab-practice/components/write/write.ts

import type { Card, Particle } from "@/data/types"

/**
 * Check if the user's written answer is correct based on enabled categories.
 * @param userAnswer The user's answer to check.
 * @param correctOption The correct entry with answers.
 * @param enabledAnswerCategories The categories to check answers against.
 * @returns True if the answer is correct, false otherwise.
 */
export function handleWrittenAnswer(
  userAnswer: string,
  correctOption: Card,
  enabledAnswerCategories: string[],
): boolean {
  // Flatten the answers from enabled categories
  const enabledAnswers = correctOption.answerCategories
    .filter((category) => enabledAnswerCategories.includes(category.category))
    .flatMap((category) => category.answers)

  // Check if the user's answer matches any of the enabled answers
  const normalizedUserAnswer = userAnswer.trim().toLowerCase().replace(".", "")
  return enabledAnswers
    .map((answer) => answer.trim().toLowerCase().replace(".", ""))
    .includes(normalizedUserAnswer)
}

/**
 * Validate particle answers against correct particles.
 * @param particleAnswers Array of user's particle answers.
 * @param correctParticles Array of correct particles.
 * @returns Array of boolean values indicating correctness for each particle.
 */
export function checkParticleAnswers(
  particleAnswers: string[],
  correctParticles: Particle[],
): boolean[] {
  // Group correct particles by label, using "default" for undefined labels
  const particlesByLabel = correctParticles.reduce<Record<string, string[]>>(
    (acc, particle) => {
      const label = particle.label || "default"
      if (!acc[label]) {
        acc[label] = []
      }
      acc[label].push(particle.particle.toLowerCase())
      return acc
    },
    {},
  )

  // Create a copy of available particles for each label
  const availableParticles = { ...particlesByLabel }

  // Check each answer
  const correctness = particleAnswers.map((answer, index) => {
    const currentParticle = correctParticles[index]
    const label = currentParticle.label || "default"
    const normalizedAnswer = answer.trim().toLowerCase()

    // If this label has no more available particles, return false
    if (!availableParticles[label] || availableParticles[label].length === 0) {
      return false
    }

    // Check if the answer matches any available particle for this label
    const particleIndex = availableParticles[label].indexOf(normalizedAnswer)
    if (particleIndex !== -1) {
      // Remove the used particle from available particles
      availableParticles[label].splice(particleIndex, 1)
      return true
    }
    return false
  })

  return correctness
}
