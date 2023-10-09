<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
import PortfolioStackLabel from "@/components/PortfolioStackLabel.vue";
import {onMounted, ref} from "vue";

const portfolios = ref();

const fetchPortfolios = () => {
  return fetch('/portfolio.json').then((response) => response.json()).then((json) => json['portfolios'])
};

onMounted(async () => {
  portfolios.value = await fetchPortfolios()
})

</script>

<template>
  <div class="space-y-10">
    <PortfolioCard
      v-for="portfolio in portfolios"
      :title="portfolio.title"
      :icon="portfolio.icon"
      :link="portfolio.link"
    >
      <template #stacks>
        <PortfolioStackLabel v-for="stack in portfolio.stacks">
          <template #icon>
            <img :src="stack.icon" alt="icon" class="w-4 h-4 mr-1" />
          </template>
          {{ stack.title }}
        </PortfolioStackLabel>
      </template>

      <template #items>
        <li v-for="item in portfolio.items">
          {{ item }}
        </li>
      </template>
    </PortfolioCard>

    <p>
      For more project I have involved, you can view
      <RouterLink
        to="/projects"
        class="underline decoration-blue-600 decoration-2"
        >here</RouterLink
      >.
    </p>
  </div>
</template>
