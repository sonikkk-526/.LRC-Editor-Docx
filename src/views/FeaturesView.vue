<template>
  <Menu @small-menu-state="(state) => this.smallMenu = state"/>
  
  <div class="content" :class="{ 'small-menu': smallMenu }">
    <div class="content-container">
      <RouterView />
    </div>
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

.content {
  top: 90px;
  left: 330px;
  display: block;
  position: absolute;
  max-width: 100%;
  z-index: 1;
  transition: all .3s ease;
  &.small-menu {
    left: 80px;
    .content-container {
      width: 90%;
    }
  }
}
</style>