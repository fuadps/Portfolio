<script setup>
import SkillCard from "@/components/SkillCard.vue";

let skills = [
  {
    title: "Laravel",
    src: "/assets/icons/laravel.png",
  },
  {
    title: "VueJS",
    src: "/assets/icons/vue.png",
  },
  {
    title: "TailwindCSS",
    src: "/assets/icons/tailwind.png",
  },
  {
    title: "PHP",
    src: "/assets/icons/php.png",
  },
  {
    title: "JavaScript",
    src: "/assets/icons/javascript.png",
  },
  {
    title: "MySQL",
    src: "/assets/icons/mysql.png",
  },
  {
    title: "jQuery",
    src: "/assets/icons/jquery.png",
  },
  {
    title: "Bootstrap",
    src: "/assets/icons/bootstrap.png",
  },
  {
    title: "Wordpress",
    src: "/assets/icons/wordpress.png",
  },
  {
    title: "Git",
    src: "/assets/icons/git.png",
  },
];
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <SkillCard v-for="skill in skills" :title="skill.title" :src="skill.src" />
  </div>
</template>
