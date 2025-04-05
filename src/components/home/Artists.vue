<template>
<section id="artists" class="md:py-20 min-h-screen relative">
  <ul class="relative z-10 max-w-[86%] md:max-w-3/4 lg:max-w-[62.5vw] m-auto pt-[30vw] pb-[30vw] md:py-0">
    <li v-for="artist in artists" :key="artist.to" class="hovercrimson cursor-pointer">
      <RouterLink :to="artist.to">
        <p class="text-[7.5vw] md:text-[4.78vw] lg:text-[3.78vw] leading-none font-medium">{{ artist.name }}</p>
      </RouterLink>
    </li>
  </ul>
  <div class="">
    <div 
      v-for="(arImg, index) in artistsImages" 
      :key="arImg.image" 
      :ref="el => { imageRefs[index] = el as HTMLElement }"
      :class="['absolute']"
      :style="{ top: `${arImg.y}%`, left: `${arImg.x}%`, zIndex: arImg.zIndex }"
    >
      <div class="">
        <img class="w-24 md:w-36 lg:w-48 2xl:w-72" :src="arImg.image" alt="image">
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import { gsap } from 'gsap/all';
import DAU from '../../assets/images/IMG_2.webp'
import ARShAT_PHOTO from '../../assets/images/IMG_0739.webp'
import TAHAUI_PHOTO from '../../assets/images/IMG_1065.webp'
// import img4 from '../../assets/images/IMG_3303.webp'
// import img5 from '../../assets/images/IMG_4112.webp'
// import img6 from '../../assets/images/IMG_4113.webp'
import RAI_PHOTO from '../../assets/images/IMG_5859.webp'

const imageRefs = ref<(HTMLElement | null)[]>([]);

const artistsImages = reactive([
  {image: DAU, ref: 'artistImage1', x: 1, y: 60, distance: 250, zIndex: -10, width: 180},
  {image: ARShAT_PHOTO, ref: 'artistImage2', x: 50, y: 45, distance: 280, zIndex: -10, width: 200},
  {
    image: TAHAUI_PHOTO, ref: 'artistImage3', x: 68, y: 65, distance: 400, zIndex: -11, width: 200},
  // {image: img4, ref: 'artistImage4', x: 80, y: 30, distance: 200, zIndex: -10, width: 200},
  // {image: img5, ref: 'artistImage5', x: 77, y: 77, distance: 450, zIndex: -12, width: 200},
  // {image: img6, ref: 'artistImage6', x: 5, y: 75, distance: 300, zIndex: -10, width: 200},
  {image: RAI_PHOTO, ref: 'artistImage7', x: 48, y: 78, distance: 400, zIndex: -13, width: 200},
]);

const artists = reactive([
  // { name: 'PARTYNEXTDOOR', to: '/artists#partynextdoor' },
  // { name: 'DVSN', to: '/artists#dvsn'},
  // { name: 'MAJID JORDAN', to: '/artists#majid-jordan'},
  // { name: 'ROY WOODS', to: '/artists#roy-walls'},
  // { name: 'POPCAAN', to: '/artists#popcaan'},
  // { name: 'BAKA NOT NICE', to: '/artists#baa-not-ice'},
  // { name: 'SMILEY', to: '/artists#smiley'},
  // { name: 'NAOMI SHARON', to: '/artists#naomi-sharon'},
  { name: 'ARShAT', to: '/artists#arshat' },
  { name: 'TAHAUI', to: '/artists#tahaui' },
  { name: 'GANI', to: '/artists#gani' },
  { name: 'DAU', to: '/artists#dau' },
  { name: 'RAI', to: '/artists#rai' },
]);

onMounted(() => {
  imageRefs.value.forEach((el, index) => {
    if (el) {
      gsap.fromTo(el, 
        { x: 0, y: 0 },
        { 
          x: 0,
          y: -artistsImages[index].distance, 
          duration: 1, 
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "top 0%",
            scrub: true
          }
        }
      );
    }
  });
});
</script>