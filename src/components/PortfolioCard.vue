<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  icon: String,
  link: String,
});
</script>

<template>
  <div class="flex flex-col md:flex-row space-x-6 items-center md:items-start">
    <div class="w-24">
      <img :src="icon" alt="icon" />
    </div>
    <div class="md:space-y-2 space-y-3">
      <div>
        <h1
            class="text-3xl font-bold text-center md:text-left mt-4 md:mt-0"
            v-text="title"
        ></h1>

        <div class="flex justify-center md:justify-start">
          <a
              :href="link"
              target="_blank"
              class="text-lg text-center md:text-left md:mt-0 underline decoration-cyan-400 underline-offset-2"
              v-text="link"
          ></a>
        </div>
      </div>

      <div class="flex flex-wrap space-x-1 justify-center md:justify-start">
        <slot name="stacks"></slot>
      </div>
      <ul class="list-disc list-outside md:list-inside">
        <slot name="items"></slot>
      </ul>
    </div>
  </div>
</template>
