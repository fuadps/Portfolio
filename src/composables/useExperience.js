import { computed } from 'vue'

const startYear = 2020

export function useExperience() {
  const yearOfExperience = computed(() => {
    return new Date().getFullYear() - startYear
  })

  return {
    yearOfExperience,
    startYear
  }
} 