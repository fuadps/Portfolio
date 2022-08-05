<script setup>
import Hero from "@/components/Hero.vue";
import GeneralSection from "@/components/GeneralSection.vue";
import SkillSection from "@/components/SkillSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
</script>

<template>
  <main class="container mx-auto py-16 px-4 md:max-w-5xl">
    <Hero />
    <GeneralSection class="mt-12" title="Me">
      <p class="leading-relaxed text-center md:text-start">
        A passionated software developer with 3+ years working experience with
        PHP. Love using
        <span class="underline underline-in decoration-4 decoration-red-600"
          >Laravel</span
        >,
        <span class="underline decoration-4 decoration-green-700">Vue</span> &
        <span class="underline decoration-4 decoration-blue-400"
          >TailwindCSS</span
        >
        as my main tools for web development. I love to read and explore various
        new web technologies and am always on the lookout for good concept,
        design patterns and best practices to learn and apply on my
        work/projects. I also an adept learner so I can pickup any tools or
        languages in a very short time.
      </p>
    </GeneralSection>

    <GeneralSection class="mt-12" title="Skills">
      <SkillSection />
    </GeneralSection>

    <GeneralSection class="mt-12" title="Portfolio (Commercial Products)">
      <PortfolioSection />
    </GeneralSection>
  </main>
</template>
