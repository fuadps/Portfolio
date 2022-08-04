<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <section>
    <div class="flex flex-col items-center md:items-start">
      <h1 class="text-3xl font-bold" v-text="title"></h1>
      <div
        class="bg-gradient-to-r from-cyan-600 to-blue-600 h-2 w-1/6 md:w-1/12 mb-6 mt-2"
      ></div>
    </div>
    <slot></slot>
  </section>
</template>
