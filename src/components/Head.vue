<script setup>
import IconLink from "@/components/IconLink.vue";
import {onMounted, ref} from "vue";

const icons = ref();
const ctaLink = ref();

const fetchInfos = () => {
  return fetch('/portfolio.json').then((response) => response.json()).then((json) => json)
};

onMounted(async () => {
  let infos = await fetchInfos()

  icons.value = infos.icons
  ctaLink.value = infos.ctaLink
})

let showMenu = ref(false);
</script>

<template>
  <header class="border-t-14 border-blue-600 shadow-sm md:shadow-none">
    <div class="container mx-auto md:max-w-5xl">
      <section class="flex justify-between py-4 items-center ml-2.5 md:ml-0">
        <h1 class="text-4xl text-gray-800 font-bold">
          <RouterLink to="/"
            >Fuad<span class="text-blue-600">Pilus</span></RouterLink
          >
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
            :href="ctaLink"
            target="_blank"
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
