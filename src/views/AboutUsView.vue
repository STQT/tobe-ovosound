<script setup lang="ts">
import TheFooter from "../components/TheFooter.vue";

import bars from "../constants/menu";
import logo from "../assets/icons/main-logo.png";
import barsSvg from "../assets/icons/HeroiconsBars4.svg";
import closeSvg from "../assets/icons/MdiWindowClose.svg";

import { ref } from "vue";

const isOpenMenu = ref(false);

function openMenu() {
    isOpenMenu.value = !isOpenMenu.value;
}
import PhoneIcon from "../components/icon/phone.vue";
import InstagramIcon from "../components/icon/instagram.vue";
// import XIcon from "./icon/x.vue";
// import FacebookIcon from "./icon/facebook.vue";
import YoutubeIcon from "../components/icon/youtube.vue";
// import SpotifyIcon from "./icon/spotify.vue";
import TiktokIcon from "../components/icon/tiktok.vue";
import { reactive } from "vue";
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

type PageData = {
    main: {
        photo: {
            link: string;
            subtitle: string | null;
        };

        text: string[];
    } | null;

    artists:
        | {
              photo: {
                  link: string;
                  subtitle: string | null;
              };

              text: string[];
          }[]
        | null;
};

const MOCK_LINK =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_zVthTnf6pja1haHYVbGE6yrEJSnG1KIgQ&s";

const MOCK_TEXT =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dolor turpis. Sed orci enim, ullamcorper in congue sed, convallis ac neque. Fusce molestie maximus ultrices. Aenean imperdiet id dui vel lobortis. Nam lacus elit, auctor sed purus nec, ultrices luctus ex. Ut vitae imperdiet ante. Donec facilisis, risus nec ultrices auctor, sem odio consectetur dui, eget fringilla leo ante ac purus. Vestibulum a sapien quis dui semper imperdiet. Sed mollis nunc nec euismod efficitur. Nunc semper venenatis elit, et tincidunt ante venenatis in. Curabitur consequat interdum orci,";

const pageData = reactive<PageData>({
    main: {
        photo: { link: MOCK_LINK, subtitle: "" },
        text: [MOCK_TEXT, MOCK_TEXT, MOCK_TEXT, MOCK_TEXT],
    },

    artists: [
        {
            photo: { link: MOCK_LINK, subtitle: "ARShAT" },
            text: [MOCK_TEXT, MOCK_TEXT, MOCK_TEXT],
        },
        {
            photo: { link: MOCK_LINK, subtitle: "TAHAUI" },
            text: [MOCK_TEXT, MOCK_TEXT, MOCK_TEXT],
        },
        {
            photo: { link: MOCK_LINK, subtitle: "GANI" },
            text: [MOCK_TEXT, MOCK_TEXT, MOCK_TEXT],
        },
        {
            photo: { link: MOCK_LINK, subtitle: "DAU" },
            text: [MOCK_TEXT, MOCK_TEXT, MOCK_TEXT],
        },
        {
            photo: { link: MOCK_LINK, subtitle: "RAI" },
            text: [MOCK_TEXT, MOCK_TEXT, MOCK_TEXT],
        },
    ],
});
</script>

<template>
    <div class="min-h-svh flex flex-col">
        <div class="flex justify-end">
            <div
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

        <div
            class="grow  max-w-[80rem] w-fit mx-auto px-6 text-white flex flex-col gap-6 lg:gap-16 py-16"
        >
            <div class="flex flex-col gap-24 lg:gap-48">
                <h2 class="font-light text-center text-3xl lg:pt-32 lg:text-8xl uppercase">
                    {{ "OZIMYZ ZHAILY" }}
                </h2>

                <div
                    class="flex flex-col items-center justify-center lg:flex-row gap-24 lg:gap-64  pb-12 lg:pb-32"
                >
                    <RouterLink to="/">
                        <img
                            class="max-w-[15rem] lg:max-w-[20rem] rotate-90"
                            :src="logo"
                            alt="Logotype"
                        />
                    </RouterLink>

                    <p
                        class="font-light text-3xl lg:text-4xl text-center whitespace-pre-wrap"
                    >
                        {{ "TOBE \nMUSICALYQ BIRLESTIGI" }}
                    </p>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-6 lg:gap-12">
                <template v-if="pageData.main?.photo">
                    <div class="flex flex-col lg:max-w-[20rem] shrink-0 gap-3">
                        <div class="w-full">
                            <img
                                class="w-full rounded-2xl object-cover"
                                :src="pageData.main.photo.link"
                                alt="img main"
                            />
                        </div>

                        <template v-if="pageData.main.photo.subtitle">
                            <p class="font-semibold text-lg lg:text-2xl text-center">
                                {{ pageData.main.photo.subtitle }}
                            </p>
                        </template>
                    </div>
                </template>

                <template v-if="pageData.main?.text">
                    <div>
                        <template
                            v-for="(text) in pageData.main.text"
                            :key="text"
                            >
                            <p
                                class="not-first:pt-6 first-letter:pl-12 text-justify text-lg lg:text-xl"
                            >
                                {{ text }}
                            </p>
                        </template>
                    </div>
                </template>
            </div>

            <p class="text-3xl lg:text-6xl font-bold text-center">
                {{ "ARTISTS" }}
            </p>

            <template v-if="pageData.artists && pageData.artists.length">
                <template
                    v-for="(artist, indx) in pageData.artists"
                    :key="indx"
                >
                    <div :class="['flex flex-col gap-6', indx ? 'pt-6' : '']">
                        <template v-if="indx">
                            <div class="w-full border rotate-[2deg]" />
                        </template>

                        <div :class="['flex flex-col lg:flex-row gap-6 lg:gap-12', indx ? 'pt-6' : '',]">
                            <template v-if="artist?.photo">
                                <div
                                    class="flex flex-col lg:max-w-[20rem] shrink-0 gap-3"
                                >
                                    <div class="w-full">
                                        <img
                                            class="w-full rounded-2xl object-cover"
                                            :src="artist.photo.link"
                                            alt="img main"
                                        />
                                    </div>

                                    <template v-if="artist.photo.subtitle">
                                        <p
                                            class="font-semibold text-lg lg:text-2xl text-center"
                                        >
                                            {{ artist.photo.subtitle }}
                                        </p>
                                    </template>
                                </div>
                            </template>

                            <template v-if="artist?.text">
                                <div>
                                    <template
                                        v-for="(text ) in artist.text"
                                        :key="text"
                                    >
                                        <p
                                            class="not-first:pt-6 first-letter:pl-12 text-justify text-lg lg:text-xl"
                                        >
                                            {{ text }}
                                        </p>
                                    </template>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </template>
        </div>

        <TheFooter />
    </div>
</template>
