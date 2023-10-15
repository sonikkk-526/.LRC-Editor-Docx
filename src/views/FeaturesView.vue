<template>
  <Menu @small-menu-state="(state) => this.smallMenu = state"/>

  <div class="content-container" :class="{ 'small-menu': smallMenu }">
    <RouterView />
  </div>
</template>

<script setup>
import Menu from '@/components/Menu';
</script>

<script>
export default {
  data: () => ({
    smallMenu: false
  }),
  components: { Menu }
}
</script>

<style scoped>
@import "@/assets/styles/FeatureStyle.css";

.content-container {
  top: 90px;
  left: 310px;
  display: block;
  position: absolute;

  /* 11" range perfect */
  width: 72%;
  min-width: 450px;
  max-width: 80%;

  overflow: auto;
  z-index: 1;
  /* overflow-x: hidden; */
  transition: all .3s ease;
  &.small-menu {
    left: 100px;
  }
}
</style>