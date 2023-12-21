<template>
  <div class="content">
    <Menu @small-menu-state="handleSmallMenuState" />
    <div class="content-container" :class="{ 'small-menu': smallMenu }">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Menu from '@/components/Menu';
</script>

<script scoped>
export default {
  components: { Menu },
  data: () => ({
    smallMenu: false
  }),
  methods: {
    handleSmallMenuState: function(state) {
      this.smallMenu = state;
    }
  }
}
</script>

<style scoped>
@import "@/assets/styles/FeatureStyle.css";
</style>