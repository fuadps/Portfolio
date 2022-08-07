<script setup>
import { projects } from "/portfolio.json";
</script>

<template>
  <main class="container mx-auto py-16 px-4 md:max-w-5xl">
    <h1 class="font-bold text-5xl">Project List</h1>
    <p class="leading-relaxed mt-4">
      This is project list that I had involve throughout my career as a Software
      Developer.
    </p>

    <ul class="list-inside list-disc space-y-3 mt-2">
      <li v-for="project in projects">
        <a
          :href="project.url"
          target="_blank"
          :class="{ underline: project.url }"
          class="decoration-blue-600 decoration-2"
          >{{ project.title }}</a
        >
      </li>
    </ul>

    <p class="leading-relaxed mt-4">
      Sometimes, I'm doing side project for fun learning new tech or stuff. If
      you interested, you can look at my
      <a
        href="https://github.com/fuadps"
        target="_blank"
        class="underline decoration-blue-600 decoration-2"
        >GitHub</a
      >
      profile page.
    </p>
  </main>
</template>
