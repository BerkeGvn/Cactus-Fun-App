<template>
  <main class="main">
    <BaseHeader></BaseHeader>
    <section>
      <InfinitePage></InfinitePage>
    </section>
  </main>
</template>

<script setup>
import InfinitePage from './View/InfinitePage.vue'
import BaseHeader from './components/ui/BaseHeader.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
* {
  padding: 0;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f2eaab;
}
</style>
