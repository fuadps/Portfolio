<script setup>
import Hero from "@/components/Hero.vue";
import GeneralSection from "@/components/GeneralSection.vue";
import SkillSection from "@/components/SkillSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import { useExperience } from "@/composables/useExperience";

const { yearOfExperience } = useExperience();
</script>

<template>
  <main class="container mx-auto py-16 px-4 md:max-w-5xl">
    <Hero />
    <GeneralSection class="mt-12" title="Me">
      <p class="leading-relaxed text-center md:text-start">
        Software Engineer with {{ yearOfExperience }}+ years of experience
        building web apps that not only work great but look amazing too! I work
        mostly with
        <span class="underline underline-in decoration-4 decoration-red-600"
          >Laravel</span
        >,
        <span class="underline decoration-4 decoration-green-700">Vue.js</span>
        &
        <span class="underline decoration-4 decoration-blue-400"
          >TailwindCSS</span
        >, crafting smooth backends and intuitive frontends. I enjoy turning
        complex problems into simple, elegant solutions and making user
        experiences delightful. Big fan of clean code, design patterns, and best
        practices but also love experimenting with new tech. Always curious,
        always learning, and always excited to build something awesome!
      </p>
    </GeneralSection>

    <GeneralSection class="mt-12" title="Skills">
      <SkillSection />
    </GeneralSection>

    <GeneralSection class="mt-12" title="Portfolios">
      <PortfolioSection />
    </GeneralSection>

    <GeneralSection class="mt-12" title="Experience">
      <ExperienceSection />
    </GeneralSection>
  </main>
</template>
