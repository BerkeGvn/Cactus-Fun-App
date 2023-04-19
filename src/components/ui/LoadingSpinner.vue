<template>
  <div id="container">
    <span class="loading-circle sp1">
      <span class="loading-circle sp2">
        <span class="loading-circle sp3"></span>
      </span>
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#container {
  width: 10rem;
  height: 12.5rem;
  margin: auto auto;
}

.loading-circle {
  display: block;
  border-left: 5px solid;
  border-top-left-radius: 100%;
  border-top: 5px solid;
  margin: 5px;
  animation-name: Loader_611;
  animation-duration: 1500ms;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
}

.sp1 {
  border-left-color: #bb3d17;
  border-top-color: #bb3d17;
  width: 40px;
  height: 40px;
}

.sp2 {
  border-left-color: #f6c445;
  border-top-color: #f6c445;
  width: 30px;
  height: 30px;
}

.sp3 {
  width: 20px;
  height: 20px;
  border-left-color: #22750f;
  border-top-color: #22750f;
}

@keyframes Loader_611 {
  0% {
    transform: rotate(0deg);
    transform-origin: right bottom;
  }

  25% {
    transform: rotate(90deg);
    transform-origin: right bottom;
  }

  50% {
    transform: rotate(180deg);
    transform-origin: right bottom;
  }

  75% {
    transform: rotate(270deg);
    transform-origin: right bottom;
  }

  100% {
    transform: rotate(360deg);
    transform-origin: right bottom;
  }
}
</style>
