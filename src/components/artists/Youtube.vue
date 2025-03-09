<template>
  <section>
    <div class="relative py-16">
      <div v-if="!showVideo" class="thumbnail" @click="showVideo = true">
        <img :src="youtube.image" class="w-full aspect-video object-cover" alt="YouTube Thumbnail" />
        <div class="absolute top-1/2 left-1/2 -translate-1/2">
          <div class="w-16 h-16 md:w-24 md:h-24 rounded-full border cursor-pointer p-1 flex justify-center items-center hover:text-white/60 duration-100">
            <p class="text-[6px] md:text-[10px] text-center">PLAY<br>DON'T TAKE YOUR LOVE (OFFICIAL VIDEO)</p>
          </div>
        </div>
      </div>
      <iframe
        v-if="showVideo"
        :src="youtube.link"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        class="w-full aspect-video"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
// const thumbnail = "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg";
const props = defineProps(['youtube'])
const youtube = computed(()=>props.youtube)

const showVideo = ref(false);
</script>
