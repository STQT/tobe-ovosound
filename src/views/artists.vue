<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    @swiper="(swiper) => (ArtistSwiper = swiper)"
  >
    <SwiperSlide v-for="artist in artistsData" :key="artist.id">
      <main class="artist">
        <div id="hero" class="relative w-full min-h-screen">
          <div class="h-screen w-full flex flex-col justify-center items-center">
            <div class="min-w-md">
              <h1 class="font-medium text-center text-7xl pb-4">{{ artist.name.toUpperCase() }}</h1>
              <ul class="flex gap-5 items-center justify-end pr-10">
                <li v-for="social in artist.socials" :key="social.name" class="flex items-center gap-2">
                  <component :is="social.icon" class="w-5"/>
                </li>
              </ul>
            </div>
          </div>
          <div class="absolute inset-0 -z-10">
            <img
              :src="artist.profile_image"
              class="object-cover w-full h-full object-center"
              alt="Artist image"
            />
          </div>
          <div class="absolute inset-0 -z-10">
            test
          </div>
        </div>
      </main>
    </SwiperSlide>
  </Swiper>
  skdjvbkjbkjbk
  <button>swiper</button>
</template>

<script setup lang="ts">
import {ref, watch, reactive, type Ref} from "vue"
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { useRoute } from "vue-router";
import "swiper/css";
import "swiper/css/navigation";
// import imageArt from "../assets/images/pnd-web-1.jpg"

import InstagramIcon from '../components/icon/instagram.vue';
import XIcon from '../components/icon/x.vue'

const route = useRoute();
const modules = [Navigation];

const artistsData = reactive([
  {
    id: 0,
    name: "PARTYNEXTDOOR",
    tag: "partynextdoor",
    socials: [
      {
        name: "instagram",
        icon: InstagramIcon,
        link: "https://www.instagram.com/PartyNextdoor",
      },
      {
        name: "x",
        icon: XIcon,
        link: "https://www.twitter.com/PartyNextdoor",
      },
    ],
    profile_image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/pnd-web-1.jpg",
    playlists: [
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
    ],
    other_image: 'https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/DVSN-FLYER4-sm.jpg',
    youtube: {
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    },
    artist_images: []
  },
  {
    id: 1,
    name: "DVSN",
    tag: "dvsn",
    socials:[
      {
        name: "instagram",
        icon: InstagramIcon,
        link: "https://www.instagram.com/PartyNextdoor",
      },
      {
        name: "x",
        icon: XIcon,
        link: "https://www.twitter.com/PartyNextdoor",
      },
    ],
    profile_image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/dvsn_webheader.jpg",
    playlists: [
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
    ],
    other_image: 'https://cdn-p.smehost.net/sites/96c064c84a7a469c91…4a0/wp-content/uploads/2024/04/DVSN-FLYER4-sm.jpg',
    youtube: {
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    },
    artist_images: [
      {
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…4a0/wp-content/uploads/2024/04/DVSN-FLYER4-sm.jpg", ref: 'artistImage1', 
        x: 1, 
        y: 50, 
        distance: 250, 
        zIndex: -10, 
        width: 180
      },
      {
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…4a0/wp-content/uploads/2024/04/DVSN-FLYER4-sm.jpg", ref: 'artistImage2', 
        x: 50,
        y: 40, 
        distance: 280, 
        zIndex: -10, 
        width: 200
      },
    ]
  },
  {
    id: 2,
    name: "MAJID JORDAN",
    tag: "majid-jordan",
    socials: [
      {
        name: "instagram",
        icon: InstagramIcon,
        link: "https://www.instagram.com/PartyNextdoor",
      },
      {
        name: "x",
        icon: XIcon,
        link: "https://www.twitter.com/PartyNextdoor",
      },
    ],
    profile_image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/10/majidjordan_oct2024_webheader.jpg",
    playlists: [
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA (CHOPPED NOT SLOPPED)",
        year: 2015,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "WORKING ON MY KARMA",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
      {
        name: "IF I GET CAUGHT",
        year: 2016,
        image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…52a5404a0/wp-content/uploads/2025/02/sss4u_sm.jpg",
        link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
      },
    ],
    other_image: '	https://cdn-p.smehost.net/sites/96c064c84a7a469c91…nt/uploads/2024/04/majidjordangoodpeopletour2.jpg',
    youtube: {
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    },
    artist_images: []
  },
])

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
  ()=>ArtistSwiper.value,
  ()=>{
    if (ArtistSwiper.value) {
      const tag = route.hash
      setActiveSlide(tag)
    }
  }
)
</script>
