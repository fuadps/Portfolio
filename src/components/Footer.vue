<template>
  <footer class="bg-gradient-to-r from-cyan-600 to-blue-600">
    <div class="container mx-auto py-16 px-4 md:max-w-5xl">
      <div class="grid place-items-center">
        <div class="text-white text-center">
          &copy; {{ new Date().getFullYear() }} Fuad Pilus <br />
          Developed using
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            class="underline decoration-blue-400 underline-offset-0 decoration-4"
            >TailwindCSS</a
          >
          &
          <a
            target="_blank"
            href="https://vuejs.org/"
            class="underline decoration-green-700 underline-offset-0 decoration-4"
            >VueJS</a
          >.
        </div>
      </div>
    </div>
  </footer>
</template>
