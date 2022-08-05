<script setup>
let experiences = [
  {
    position: "Web Developer",
    company: "Freelance",
    duration: "February 2022 - Present",
    items: [
      "Developed web applications based on client request.",
      "Maintaining and consulting previous company as a freelance.",
      "Involve in TravelCRM by Muslimtravelbug for new features and bug fixes.",
    ],
  },

  {
    position: "Web Developer",
    company: "Kiddocare Sdn Bhd",
    duration: "December 2020 - January 2022",
    items: [
      "Malaysia’s first and preferred on-demand babysitting platform.",
      "Develop REST API using Laravel to create integration with front-end and mobile application.",
      "Build customer web booking system (front-end) using VueJS.",
      "Ensure admin dashboard has real-time booking information.",
      "Integrate real-time chat system using websocket.",
    ],
  },

  {
    position: "Web Developer",
    company: "Ardent Educational Sdn Bhd",
    duration: "Jun 2019 - November 2022",
    items: [
      "Leading education advisory and consultancy service from Malaysia.",
      "Develop new features, improvement to existing features and maintain Contesthub, a system used for organize event or competition created by company.",
      "Working on the back-end side, and a little front-end when needed.",
      "Responsible develop & design website for every competition & event.",
    ],
  },
];
</script>

<template>
  <ol class="relative border-l border-blue-200">
    <li class="mb-10 ml-4" v-for="experience in experiences">
      <div
        class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400"
        v-text="experience.duration"
      ></time>
      <h3
        class="text-lg font-bold text-gray-900"
        v-text="experience.position"
      ></h3>
      <h3
        class="text-lg font-bold text-gray-900"
        v-text="experience.company"
      ></h3>
      <ul
        class="mb-4 ml-4 text-gray-500 list-outside list-disc leading-relaxed"
      >
        <li v-for="item in experience.items" v-text="item"></li>
      </ul>
    </li>
  </ol>
</template>
