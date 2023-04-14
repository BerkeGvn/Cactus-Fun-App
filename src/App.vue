<template>
  <ul>
    <li v-for="(gif, index) in gifs" :key="index">
      <img :src="gif" alt="" />
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchGifs } from './api/apiCalls.js'

const gifs = ref([])

onMounted(async () => {
  for (let u = 0; u < 5; u++) {
    const gif = await fetchGifs()
    gifs.value.push(gif)
  }
})
fetchGifs()
</script>

<style lang="scss" scoped></style>
