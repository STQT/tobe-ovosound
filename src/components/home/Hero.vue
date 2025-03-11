<template>
  <section id="hero" class="pb-10">
    <TheHeader :has-logo="false"/>
    <div class="container relative min-h-[60vh] md:min-h-screen flex justify-center items-center">
      <div class="md:w-1/3 px-10 pt-20 md:p-0 flex justify-center items-center">
        <img class="rotate-90" :src="mainLogo" alt="logo">
      </div>
    </div>
    
    <div class="flex justify-end pr-6 md:pr-32">
      <p class="w-2/5 text-[8px] md:text-xs md:w-60">OVO SOUND IS A RECORD LABEL FOUNDED BY AUBREY DRAKE GRAHAM AND LONG-TIME FRIENDS AND PARTNERS NOAH “40” SHEBIB AND OLIVER EL-KHATIB.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { reactive } from 'vue';
import TheHeader from '../TheHeader.vue';
import mainLogo from '../../assets/icons/main-logo.png'


// const bars = reactive([
//   { label: 'ARTISTS', href: '/#artists' },
//   { label: 'MUSIC', href: '/music' },
//   { label: 'VIDEOS', href: '/videos' },
//   { label: 'SHOP', href: '/shop' },
// ])
// const socials = reactive([
//   { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/tobemusic/' },
//   { label: 'X', icon: XIcon, href: 'https://www.instagram.com/tobemusic/' },
//   { label: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/tobe.music/' },
//   { label: 'YouTube', icon: YoutubeIcon, href: 'https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w' },
//   { label: 'Spotify', icon: SpotifyIcon, href: 'https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w' },
//   { label: 'Tiktok', icon: TiktokIcon, href: 'https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w' },
//   { label: 'Snapchat', icon: SnapchatIcon, href: 'https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w' },
// ])
</script>
