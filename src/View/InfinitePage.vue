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
  <LoadingSpinner v-if="isLoading"></LoadingSpinner>
  <InstersectionObserver @observe="loadMore"></InstersectionObserver>
</template>

<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import InstersectionObserver from '../components/InstersectionObserver.vue'
import LoadingSpinner from '../components/ui/LoadingSpinner.vue'
import { ref } from 'vue'
import { fetchGifs, fetchJokes } from '../api/apiCalls'

const contents = ref([])
const isLoading = ref(null)
const page = ref(0)

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
  // According to card's list number this function gives its style
  return `card-${(index % 6) + 1}`
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 10px;
}
</style>
