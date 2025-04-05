<template>
    <section id="playlist" v-if="playlistItems.length">
        <div class="relative pt-12 pb-24">
            <ul
                class="w-[90vw] md:w-[70vw] mx-auto grid md:grid-cols-2 gap-x-[20vw]"
            >
                <li v-for="playlist in playlistItems" :key="playlist.name">
                    <div
                        @click="setActivePlaylist(playlist)"
                        class="flex gap-8 hovercrimson cursor-pointer text-xl md:text-sm"
                    >
                        <span>{{ playlist.year }}</span>
                        <p class="whitespace-pre-wrap">{{ playlist.name }}</p>
                    </div>
                </li>
            </ul>
            <!-- <div class="absolute">{{ activePlaylist.name }}</div> -->
            <template v-if="activePlaylist && activePlaylist.images?.length">
                <div class="pt-10 w-[50vw] mx-auto">
                    <a :href="activePlaylist.link">
                        <img
                            :src="activePlaylist.image"
                            class="w-full h-full object-contain"
                            alt="playslist image"
                        />
                    </a>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
const props = defineProps(["playlists"]);

const playlistItems = computed(() => props.playlists as any[]);
const activePlaylist = ref(playlistItems.value?.[0]);

const setActivePlaylist = (playlist: any) => {
    activePlaylist.value = playlist;
};
</script>
