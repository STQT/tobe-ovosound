<template>
  <div class="relative">
    <Swiper
      :modules="modules"
      :autoHeight="true"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      @swiper="(swiper) => (ArtistSwiper = swiper)"
    >
      <SwiperSlide v-for="artist in artistsData" :key="artist.id" class="h-full">
        <main class="artist">
          <Hero :artist="artist"/>
          <Playlists :playlists="artist.playlists"/>
          <section class="max-w-[600px] w-[95wv] mx-auto">
            <img :src="artist.other_image" alt="image">
          </section>
          <Youtube :youtube="artist.youtube" />
          <SFooter />
        </main>
      </SwiperSlide>
    </Swiper>

    <button class="swiper-button-prev absolute left-4 top-[calc(100vh-52px)] cursor-pointer z-10 px-4 py-2 border hover:border-white hover:bg-white hover:text-gray-600 duration-200">
      Prev
    </button>
    <button class="swiper-button-next absolute right-4 top-[calc(100vh-52px)] cursor-pointer z-10 px-4 py-2 border hover:border-white hover:bg-white hover:text-gray-600 duration-200">
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, type Ref} from "vue"
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { useRoute } from "vue-router";
import "swiper/css";
import Playlists from "../components/artists/Playlists.vue";
import Youtube from "../components/artists/Youtube.vue";
import SFooter from "../components/TheFooter.vue";

import artistsData from "../constants/artists"
import Hero from "../components/artists/Hero.vue";

const route = useRoute();
const modules = [Navigation];

const ArtistSwiper: Ref<SwiperClass | null> = ref(null);
const setActiveSlide = (tag: string) => {
  if (ArtistSwiper.value) {
    const index = artistsData.findIndex((item) => item.tag === tag.slice(1));
    if (index > -1) {
      ArtistSwiper.value.slideTo(index);
    }
  }
};

watch(
  () => route.hash, 
  (newTag) => {
    if (ArtistSwiper.value) {
      setActiveSlide(newTag);
    }
  },
  { immediate: true }
);
// watch(
//   ()=>ArtistSwiper.value,
//   ()=>{
//     if (ArtistSwiper.value) {
//       const tag = route.hash
//       setActiveSlide(tag)
//     }
//   }
// )
</script>
