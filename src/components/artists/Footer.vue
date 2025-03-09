<template>
<footer class="container">
  <div class="flex justify-between items-center py-6 gap-5">
    <h2 class="text-base md:text-3xl uppercase">Tobemde</h2>
    <div class="w-1/2 text-[1.15vw] text-center">
      <a class="hover:text-gray-400" href="https://www.sonymusic.com/feedback/">SEND US FEEDBACK</a> | 
      <a class="hover:text-gray-400" href="https://www.sonymusic.com/feedback/">PRIVACY POLICY</a> | 
      <a class="hover:text-gray-400" href="https://www.sonymusic.com/feedback/">HOW WE USE YOUR DATA</a> 
      <br> 
      <a class="hover:text-gray-400" href="https://www.sonymusic.com/feedback/">DO NOT SELL MY PERSONAL INFORMATION</a> | 
      <a class="hover:text-gray-400" href="https://www.sonymusic.com/feedback/">YOUR CALIFORNIA PRIVACY RIGHTS</a> 
      <br> 
      <a class="hover:text-gray-400" href="https://www.sonymusic.com/feedback/">TERMS AND CONDITIONS</a>
    </div>
    <h3 class="text-sm md:text-xl min-w-max">© {{ year }}</h3>
  </div>
</footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
const year = ref(new Date().getFullYear());
</script>
