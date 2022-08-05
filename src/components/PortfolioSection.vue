<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
import PortfolioStackLabel from "@/components/PortfolioStackLabel.vue";

let portfolios = [
  {
    title: "Kiddocare",
    icon: "/assets/icons/kiddocare.png",
    stacks: [
      {
        title: "Laravel",
        icon: "/assets/icons/laravel.png",
      },
      {
        title: "VueJS",
        icon: "/assets/icons/vue.png",
      },
      {
        title: "Bootstrap",
        icon: "/assets/icons/bootstrap.png",
      },
    ],
    items: [
      "Babysitter service between carer & client.",
      "API integration with mobile and web.",
    ],
  },

  {
    title: "Contesthub",
    icon: "/assets/icons/contesthub.png",
    stacks: [
      {
        title: "Laravel",
        icon: "/assets/icons/laravel.png",
      },
      {
        title: "VueJS",
        icon: "/assets/icons/vue.png",
      },
      {
        title: "Bootstrap",
        icon: "/assets/icons/bootstrap.png",
      },
    ],
    items: [
      "Contest & competition management system.",
      "More than 50,000 students register for competition. (as per 2021)",
    ],
  },

  {
    title: "TravelCRM",
    icon: "/assets/icons/travelcrm.png",
    stacks: [
      {
        title: "Laravel",
        icon: "/assets/icons/laravel.png",
      },
      {
        title: "jQuery",
        icon: "/assets/icons/jquery.png",
      },
      {
        title: "Bootstrap",
        icon: "/assets/icons/bootstrap.png",
      },
    ],
    items: [
      "Contest & competition management system.",
      "More than 50,000 students register for competition. (as per 2021)",
    ],
  },
];
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
