<template>
  <main id="videos">
    <TheHeader :z-index="0"/>
    <section id="videos">
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-[2vw] w-[calc(100%-40px)] md:w-2/3 pt-40 pb-8 md:pb-20 m-auto">
        <li v-for="video in videos" :key="video.title" class="group">
          <a target="_blank" :href="video.url" class="relative block w-full aspect-square cursor-pointer">
            <img :src="video.image" class="w-full h-full object-cover object-center"  alt="Video Thumbnail">
            <div class="absolute inset-0 duration-200 group-hover:bg-black/50 flex justify-center items-center">
              <h3 class="text-xs font-medium text-transparent duration-200 group-hover:text-white text-center">
                {{ video.title }}
              </h3>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <TheFooter/>
  </main>
  </template>
  
  <script setup lang="ts">
  import TheHeader from '../components/TheHeader.vue';
  import TheFooter from '../components/TheFooter.vue';
  
  const videos = [
    {
      title: 'PARTYNEXTDOOR – FOR CERTAIN',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/forcertainthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/tonkatruckthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/firstpersonshooterthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/anotherlatenightthumb-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/hatemethumb-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – FOR CERTAIN',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/forcertainthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/tonkatruckthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/firstpersonshooterthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/anotherlatenightthumb-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/hatemethumb-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – FOR CERTAIN',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/forcertainthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/tonkatruckthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/firstpersonshooterthumbnail-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/anotherlatenightthumb-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
    {
      title: 'PARTYNEXTDOOR – THE UNDERGROUND',
      image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/hatemethumb-768x432.jpg",
      url: 'https://www.youtube.com/watch?v=4oAUuzX_owA'
    },
  ]
  </script>