<!-- The root of the application. This page defines the template of the page. -->

<template>
  <div id="app">
    <NavBar />

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue';
</script>

<style>
/* @import 'https://fonts.googleapis.com/css?family=Montserrat:400,800%22'; */

html, body {
  margin: 0;
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>