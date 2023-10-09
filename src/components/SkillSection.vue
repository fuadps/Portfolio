<script setup>
import SkillCard from "@/components/SkillCard.vue";
import {onMounted, ref} from "vue";

const skills = ref();

const fetchSkills = () => {
  return fetch('/portfolio.json').then((response) => response.json()).then((json) => json['skills'])
};

onMounted(async () => {
  skills.value = await fetchSkills()
})
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <SkillCard v-for="skill in skills" :title="skill.title" :src="skill.src" />
  </div>
</template>
