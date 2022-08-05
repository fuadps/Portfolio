<script setup>
defineProps({
  src: String,
  title: String,
});
</script>

<template>
  <div class="flex flex-col items-center md:items-start">
    <img :src="src" alt="icon" class="w-20 h-20 mb-2" />
    <label v-text="title"></label>
  </div>
</template>
