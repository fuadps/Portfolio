<script setup>
defineProps({
  src: String,
  href: String,
  alt: String,
});
</script>

<template>
  <a :href="href" target="_blank">
    <img class="h-6 w-6" :src="src" :alt="alt" />
    <slot></slot>
  </a>
</template>
