<template>
  <ul>
    <li v-for="(content, index) in contents" :key="index">
      <img :src="content.gif" alt="" />
      <p>{{ content.joke }}</p>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchGifs, fetchJokes } from '../api/apiCalls'

const contents = ref([])

onMounted(async () => {
  const gifData = await fetchGifs()
  const jokeData = await fetchJokes()
  for (let i = 0; i < 10; i++) {
    contents.value.push({
      gif: gifData[i],
      joke: jokeData[i].setup + ' ' + jokeData[i].delivery
    })
  }
})
</script>

<style lang="scss" scoped></style>
