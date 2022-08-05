<script setup>
import SkillCard from "@/components/SkillCard.vue";
import { skills } from "/portfolio.json";
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <SkillCard v-for="skill in skills" :title="skill.title" :src="skill.src" />
  </div>
</template>
