<template>
  <div id="app">
    <transition name="fade-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import router from "./router";

export default {
  name: "App",
  router
};
</script>

<style scoped>
.fade-in-enter-from {
  opacity: 0;
}

.fade-in-enter-active {
  transition: 1s;
}

.fade-in-enter-to {
  opacity: 1;
}
</style>
