<template>
  <li class="card" :class="props.card">
    <div class="gif">
      <slot name="gif"></slot>
    </div>
    <div class="joke">
      <slot></slot>
    </div>
  </li>
</template>

<script setup>
const props = defineProps(['layout', 'card'])
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;
  font-size: 2.1rem;
  padding: 4rem 4rem;
  color: #373636;
  text-align: center;

  & .joke :slotted(p:last-child) {
    font-size: 1.6rem;
  }

  &-1 {
    background-color: #9ac1f0;
  }
  &-2 {
    background-color: #f18788;
  }
  &-3 {
    background-color: #eb985c;
  }
  &-4 {
    background-color: #5fe781;
  }
  &-5 {
    background-color: #f6c445;
  }
  &-6 {
    background-color: #b18fe7;
  }
  &-1,
  &-3,
  &-5 {
    clip-path: polygon(0 0, 100% 16%, 100% 100%, 0 86%);
  }
  &-2,
  &-4,
  &-6 {
    clip-path: polygon(0 16%, 100% 0, 100% 86%, 0 100%);
    flex-direction: row-reverse;
  }
}
</style>
