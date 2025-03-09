<template>
  <div id="hero" class="relative w-full min-h-screen">
    <div class="h-screen w-full flex flex-col justify-center items-center">
      <div class="min-w-md">
        <h1 class="font-medium text-center text-3xl md:text-7xl pb-4">{{ artist.name.toUpperCase() }}</h1>
        <ul class="flex gap-5 items-center justify-center md:justify-end md:pr-10">
          <li v-for="social in artist.socials" :key="social.name" class="flex items-center gap-2">
            <component :is="social.icon" class="w-5"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="absolute top-1/2 -translate-y-1/2">
      <ul class="hidden md:flex max-w-min flex-col justify-center items-end gap-1 ml-4">
        <li class="hovercrimson" v-for="bar in bars" :key="bar.href">
          <RouterLink :to="bar.href">
            <span class="text-xl">{{ bar.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="absolute inset-0 -z-10">
      <img
        :src="artist.profile_image"
        class="object-cover w-full h-full object-center"
        alt="Artist image"
      />
    </div>
    <div class="absolute top-10 left-2 z-0 w-">
      <img :src="logo" class="w-20 rotate-90" alt="logo">
    </div>
  </div>
</template>

<script setup lang="ts">
import "swiper/css";
import logo from "../../assets/icons/main-logo.png"

import bars from "../../constants/menu";
import { computed } from "vue";

const props = defineProps(['artist'])
const artist = computed(()=>props.artist)
</script>
