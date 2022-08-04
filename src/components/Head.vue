<script setup>
import twitterIconUrl from "@/assets/icons/twitter.png";
import linkedinIconUrl from "@/assets/icons/linkedin.png";
import githubIconUrl from "@/assets/icons/github.png";
import IconLink from "@/components/IconLink.vue";
import { ref } from "vue";

let icons = [
  {
    title: "Twitter",
    src: twitterIconUrl,
    href: "",
    alt: "twitter icon",
  },
  {
    title: "LinkedIn",
    src: linkedinIconUrl,
    href: "",
    alt: "linkedin icon",
  },
  {
    title: "GitHub",
    src: githubIconUrl,
    href: "",
    alt: "github icon",
  },
];

let showMenu = ref(false);
</script>

<template>
  <header class="border-t-14 border-blue-600 shadow-sm md:shadow-none">
    <div class="container mx-auto">
      <section class="flex justify-between py-4 items-center">
        <h1 class="text-4xl text-gray-800 font-bold">
          Fuad<span class="text-blue-600">Pilus</span>
        </h1>

        <div class="hidden md:flex flex-row items-center align-middle gap-4">
          <nav>
            <ul class="flex flex-row gap-6 items-center align-middle">
              <li v-for="icon in icons">
                <IconLink :src="icon.src" :href="icon.href" :alt="icon.href" />
              </li>
            </ul>
          </nav>

          <a
            href="#"
            class="text-lg px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded text-white drop-shadow-xl"
          >
            Work with me
          </a>
        </div>

        <!-- Mobile Navigation -->
        <button @click="showMenu = !showMenu" class="md:hidden p-4">
          <svg
            v-if="!showMenu"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </section>

      <Transition
        enter-from-class="opacity-0 -translate-y-6"
        enter-to-class="opacity-100 translate-y-0"
        enter-active-class="duration-500"
        leave-active-class="duration-300 opacity-0"
      >
        <div
          class="absolute shadow-2xl min-w-full rounded p-4 bg-white transition"
          v-show="showMenu"
        >
          <ul class="flex flex-col gap-y-4">
            <li v-for="icon in icons">
              <IconLink
                class="flex flex-row"
                :src="icon.src"
                :href="icon.href"
                :alt="icon.href"
              >
                <p class="ml-2" v-text="icon.title"></p>
              </IconLink>
            </li>
            <li>
              <a
                href="#"
                class="text-lg px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded text-white drop-shadow-xl"
              >
                Work with me
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
</template>
