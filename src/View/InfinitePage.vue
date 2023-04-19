<template>
  <ul>
    <BaseCard v-for="(content, index) in contents" :key="index" :card="giveCardStyle(index)">
      <template #gif>
        <img :src="content.gif" alt="" />
      </template>
      <template #default>
        <p>{{ content.joke.setup }}</p>
        <p>{{ content.joke.delivery }}</p>
      </template>
    </BaseCard>
  </ul>

  <h1 v-if="isLoading">LOADING...</h1>
  <InstersectionObserver @observe="loadMore"></InstersectionObserver>
</template>

<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import { ref, watch } from 'vue'
import { fetchGifs, fetchJokes } from '../api/apiCalls'
import InstersectionObserver from '../components/InstersectionObserver.vue'

const contents = ref([])
const isLoading = ref(null)
const page = ref(0)

// I am thinking about adding contact info in the list, might delete it
/* watch(page, (number) => {
  if (number % 3 === 0) {
    contents.value.push({
      gif: 'https://avatars.githubusercontent.com/u/62262384?v=4',
      joke: { setup: 'Berke Guven', delivery: 'Github' }
    })
  }
}) */

async function fetchData() {
  isLoading.value = true
  const gifData = await fetchGifs()
  const jokeData = await fetchJokes()
  for (let i = 0; i < 10; i++) {
    contents.value.push({
      gif: [gifData[i]],
      joke: { setup: jokeData[i].setup, delivery: jokeData[i].delivery }
    })
  }
  isLoading.value = false
  page.value += 1
  console.log(page.value)
}

function loadMore() {
  fetchData()
}

function giveCardStyle(index) {
  return `card-${(index % 6) + 1}`
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 10px;
}
</style>
