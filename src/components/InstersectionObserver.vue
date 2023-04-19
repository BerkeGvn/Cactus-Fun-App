<template>
  <div class="sentinel" ref="sentinel"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sentinel = ref(null)
const emit = defineEmits(['observe'])

onMounted(() => {
  const options = {
    threshold: 0.7
  }
  const pageObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      emit('observe')
      console.log('observing')
    }
  }, options)
  pageObserver.observe(sentinel.value)
})
</script>

<style lang="scss" scoped>
div {
  height: 10px;
  opacity: 0;
}
</style>
