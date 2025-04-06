<template>
<section v-if="images?.length" class="relative min-h-[150vh]">
  <div 
    v-for="(arImg, index) in images" 
    :key="arImg.image" 
    :ref="el => { imageRefs[index] = el as HTMLElement }"
    :class="['absolute']"
    :style="{ top: arImg.y, left: arImg.x, zIndex: arImg.zIndex, width: arImg.width }"
  >
    <div class="">
      <img class="w-full" :src="arImg.image" alt="image">
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"
import { gsap } from 'gsap/all';
import type { ArtistImage } from "../../types/artists"
interface Props {
  images?: ArtistImage[]
}
const props = withDefaults(defineProps<Props>(), {})
const imageRefs = ref<(HTMLElement | null)[]>([]);

onMounted(() => {
  imageRefs.value.forEach((el, index) => {
    if (el) {
      gsap.fromTo(el, 
        { x: 0, y: 0 },
        { 
          x: 0,
          y: props.images && -props.images[index].moveY, 
          duration: 1, 
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }
  });
});
</script>