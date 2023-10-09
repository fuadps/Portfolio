<script setup>
import {onMounted, ref} from "vue";

const experiences = ref();

const fetchExperiences = () => {
  return fetch('/portfolio.json').then((response) => response.json()).then((json) => json['experiences'])
};

onMounted(async () => {
  experiences.value = await fetchExperiences()
})

</script>

<template>
  <ol class="relative border-l border-blue-200">
    <li class="mb-10 ml-4" v-for="experience in experiences">
      <div
        class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400"
        v-text="experience.duration"
      ></time>
      <h3
        class="text-lg font-bold text-gray-900"
        v-text="experience.position"
      ></h3>
      <h3
        class="text-lg font-bold text-gray-900"
        v-text="experience.company"
      ></h3>
      <ul
        class="mb-4 ml-4 text-gray-500 list-outside list-disc leading-relaxed"
      >
        <li v-for="item in experience.items" v-text="item"></li>
      </ul>
    </li>
  </ol>
</template>
