<template>
  <section id="hero" class="pb-10">
    <div class="container relative min-h-[60vh] md:min-h-screen flex justify-between items-center">
      <div class="grid md:grid-cols-3 w-full">
        <ul class="hidden md:flex max-w-min flex-col justify-center items-end gap-1 ml-4">
          <li class="hovercrimson" v-for="bar in bars" :key="bar.href">
            <RouterLink :to="bar.href">
              <span class="text-xl">{{ bar.label }}</span>
            </RouterLink>
          </li>
        </ul>
        <div class="px-10 pt-20 md:p-0 flex justify-center items-center">
          <img class="rotate-90" :src="mainLogo" alt="logo">
        </div>
        <ul class="hidden md:flex flex-col justify-center items-end gap-4">
          <li class="" v-for="social in socials" :key="social.href">
            <a :href="social.href" target="_blank" rel="noopener noreferrer">
              <component class="h-4 sm:h-5 lg:h-6" :is="social.icon"/>
            </a>
          </li>
        </ul>
      </div>
      <div @click="openMenu" id="bar" class="md:hidden absolute cursor-pointer top-3 right-3 z-10">
        <img :src="barsSvg" alt="bars">
      </div>
      <div
        id="mobile_menu"
        class="fixed inset-0 h-screen w-full bg-black transform transition-transform duration-200 ease-in-out"
        :class="isOpenMenu ? 'translate-y-0 opacity-100 z-20 pointer-events-auto' : 'translate-y-1 opacity-0 -z-20 pointer-events-none'"
      >
        <div class="flex justify-end pt-3 pr-3">
          <img @click="openMenu" :src="closeSvg" alt="close" class="cursor-pointer">
        </div>
        <div class="pt-10">
          <ul class="ml-6 space-y-2">
            <li class="hovercrimson" v-for="bar in bars" :key="bar.href">
              <RouterLink :to="bar.href">
                <span class="text-3xl font-medium">{{ bar.label }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-6 md:pr-32">
      <p class="w-2/5 text-[8px] md:text-xs md:w-60">OVO SOUND IS A RECORD LABEL FOUNDED BY AUBREY DRAKE GRAHAM AND LONG-TIME FRIENDS AND PARTNERS NOAH “40” SHEBIB AND OLIVER EL-KHATIB.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import mainLogo from '../../assets/icons/main-logo.png'
import barsSvg from '../../assets/icons/HeroiconsBars4.svg'
import closeSvg from '../../assets/icons/MdiWindowClose.svg'

const isOpenMenu = ref(false);

function openMenu() {
  isOpenMenu.value =!isOpenMenu.value;
}

import InstagramIcon from '../icon/instagram.vue';
import XIcon from '../icon/x.vue'
import FacebookIcon from '../icon/facebook.vue';
import YoutubeIcon from '../icon/youtube.vue';
import SpotifyIcon from '../icon/spotify.vue';
import TiktokIcon from '../icon/tiktok.vue';
import SnapchatIcon from '../icon/snapchat.vue';
import { ref } from 'vue';

const bars = reactive([
  { label: 'ARTISTS', href: '/#homeartist-section' },
  { label: 'MUSIC', href: '/music' },
  { label: 'VIDEOS', href: '/videos' },
  { label: 'SHOP', href: '/shop' },
])
const socials = reactive([
  { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/tobemusic/' },
  { label: 'X', icon: XIcon, href: 'https://www.instagram.com/tobemusic/' },
  { label: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/tobe.music/' },
  { label: 'YouTube', icon: YoutubeIcon, href: 'https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w' },
  { label: 'Spotify', icon: SpotifyIcon, href: 'https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w' },
  { label: 'Tiktok', icon: TiktokIcon, href: 'https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w' },
  { label: 'Snapchat', icon: SnapchatIcon, href: 'https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w' },
])
</script>
