<script setup lang="ts">
// import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// const boxRef = ref(null)

// onMounted(() => {
//   gsap.to(boxRef.value, {
//     y: 100, // Obyektni 300px o'ngga harakatlantirish
//     duration: 1,
//     scrollTrigger: {
//       trigger: boxRef.value,
//       start: "bottom 100%", // Sahifada 80% joyda turganda boshlanadi
//       end: "bottom 20%", // 20% ga kelganda tugaydi
//       scrub: true // Skrollga qarab moslashuvchan harakat
//     }
//   })
// })
</script>

<template>
  <div class="">
    <!-- salom
    <p>{{ $t('welcome') }}</p> -->
    <RouterView/>
    <!-- <div class="h-[300vh] flex items-center justify-center">
      <div ref="boxRef" class="w-20 h-20 bg-blue-500"></div>
    </div> -->
  </div>
</template>