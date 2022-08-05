<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
import PortfolioStackLabel from "@/components/PortfolioStackLabel.vue";
import { portfolios } from "/portfolio.json";
</script>

<template>
  <div class="space-y-10">
    <PortfolioCard
      v-for="portfolio in portfolios"
      :title="portfolio.title"
      :icon="portfolio.icon"
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
  </div>
</template>
