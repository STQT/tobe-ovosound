<template>
    <header class="absolute inset-0" :style="{ zIndex: zIndex }">
        <div
            class="container relative min-h-[60vh] md:min-h-screen flex justify-between items-center"
        >
            <ul
                v-if="hasMenu"
                class="hidden md:flex max-w-min flex-col justify-center items-end gap-1 ml-4"
            >
                <li class="hovercrimson" v-for="bar in bars" :key="bar.href">
                    <RouterLink :to="bar.href">
                        <span class="text-xl">{{ bar.label }}</span>
                    </RouterLink>
                </li>
            </ul>
            <ul
                v-if="hasSocials"
                class="hidden md:flex flex-col justify-center items-end gap-4"
            >
                <li class="" v-for="social in socials" :key="social.href">
                    <a
                        :href="social.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <component
                            class="h-4 sm:h-5 lg:h-6"
                            :is="social.icon"
                        />
                    </a>
                </li>
            </ul>
            <div v-if="hasLogo" class="absolute top-10 left-2 z-0">
                <RouterLink to="/">
                    <img :src="logo" class="w-20 rotate-90" alt="logo" />
                </RouterLink>
            </div>
            <div
                v-if="hasMenu || hasntMenuButNeedMobileMenu"
                @click="openMenu"
                id="bar"
                class="md:hidden absolute cursor-pointer top-3 right-3 z-10"
            >
                <img :src="barsSvg" alt="bars" />
            </div>

            <Teleport to="#app-menu">
                <div
                    id="mobile_menu"
                    class="fixed inset-0 flex flex-col top-0 left-0 bottom-0 right-0 h-svh z-[100] w-full bg-black transform transition-transform duration-200 ease-in-out"
                    :class="
                        isOpenMenu
                            ? 'translate-y-0 opacity-100 z-20 pointer-events-auto'
                            : 'translate-y-1 opacity-0 -z-20 pointer-events-none'
                    "
                >
                    <div class="flex justify-end pt-3 pr-3">
                        <img
                            @click="openMenu"
                            :src="closeSvg"
                            alt="close"
                            class="cursor-pointer"
                        />
                    </div>

                    <div class="flex flex-col grow gap-30">
                        <div class="pt-10">
                            <ul class="ml-6 space-y-2">
                                <li
                                    class="hovercrimson"
                                    v-for="bar in bars"
                                    :key="bar.href"
                                >
                                    <RouterLink
                                        :to="bar.href"
                                        @click="openMenu"
                                    >
                                        <span class="text-3xl font-medium">{{
                                            bar.label
                                        }}</span>
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>

                        <div class="pl-6">
                            <ul class="flex flex-col gap-4">
                                <li
                                    v-for="social in socials"
                                    :key="social.href"
                                    class="flex"
                                >
                                    <a
                                        :href="social.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex items-center gap-3 font-medium text-xl leading-6"
                                    >
                                        <component
                                            class="h-8"
                                            :is="social.icon"
                                        />

                                        <template v-if="social.title">
                                            {{ social.title }}
                                        </template>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Teleport>
        </div>
    </header>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import bars from "../constants/menu";
import logo from "../assets/icons/main-logo.png";
import barsSvg from "../assets/icons/HeroiconsBars4.svg";
import closeSvg from "../assets/icons/MdiWindowClose.svg";

interface Props {
    zIndex?: number;
    hasSocials?: boolean;
    hasMenu?: boolean;
    hasLogo?: boolean;

    // sorryy
    hasntMenuButNeedMobileMenu?: boolean;
}

withDefaults(defineProps<Props>(), {
    zIndex: 10,
    hasSocials: true,
    hasMenu: true,
    hasLogo: true,
});

const isOpenMenu = ref(false);

import { ref } from "vue";

function openMenu() {
    isOpenMenu.value = !isOpenMenu.value;
}

import PhoneIcon from "./icon/phone.vue";
import InstagramIcon from "./icon/instagram.vue";
// import XIcon from "./icon/x.vue";
// import FacebookIcon from "./icon/facebook.vue";
import YoutubeIcon from "./icon/youtube.vue";
// import SpotifyIcon from "./icon/spotify.vue";
import TiktokIcon from "./icon/tiktok.vue";
// import SnapchatIcon from "./icon/snapchat.vue";

const socials = reactive([
    {
        label: "Instagram",
        icon: InstagramIcon,
        href: "https://www.instagram.com/tobemde/",

        title: "@tobemde",
    },
    // { label: "X", icon: XIcon, href: "https://www.instagram.com/tobemusic/" },
    // {
    //     label: "Facebook",
    //     icon: FacebookIcon,
    //     href: "https://www.facebook.com/tobe.music/",
    // },
    {
        label: "YouTube",
        icon: YoutubeIcon,
        href: "https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w",

        title: "@tobemde",
    },
    // {
    //     label: "Spotify",
    //     icon: SpotifyIcon,
    //     href: "https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w",
    // },
    {
        label: "Tiktok",
        icon: TiktokIcon,
        href: "https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w",

        title: "@tobemde",
    },
    // {
    //     label: "Snapchat",
    //     icon: SnapchatIcon,
    //     href: "https://www.youtube.com/channel/UCd192L6z8o7K9a93-35qO6w",
    // },
    {
        label: "Phone",
        icon: PhoneIcon,
        href: "tel:+77085989537",
        title: "+7 708 598 95 37",
    },
]);
</script>
