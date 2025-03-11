<template>
  <section id="hero" class="relative w-full min-h-screen">
    <TheHeader :has-socials="false"/>
    <div class="h-screen w-full flex flex-col justify-center items-center">
      <div class="min-w-md">
        <h1 class="font-medium text-center text-3xl md:text-7xl pb-4">{{ artist.name.toUpperCase() }}</h1>
        <ul class="flex gap-5 items-center justify-center md:justify-end md:pr-10">
          <li v-for="social in artist.socials" :key="social.name" class="flex items-center gap-2">
            <a :href="social.link">
              <component :is="social.icon" class="w-5"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="absolute inset-0 -z-10">
      <img
        :src="artist.profile_image"
        class="object-cover w-full h-full object-center"
        alt="Artist image"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import "swiper/css";
// import logo from "../../assets/icons/main-logo.png"

import { computed } from "vue";
import TheHeader from "../TheHeader.vue";

const props = defineProps(['artist'])
const artist = computed(()=>props.artist)
</script>
