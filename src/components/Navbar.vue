<!-- This file is the header/navbar of the website. -->
<template>
  <header>
    <div class="inner">
      <div class="logo">
        <RouterLink to="/">
          <!-- The below line can be an image or a h1, either will work -->
          <img src="../assets/img/editor_icon.png" alt="Lyrics Editor for .LRC Logo">
          <h2>Lyrics Editor for .LRC</h2>
        </RouterLink>
      </div>

      <nav>
        <!-- Markup shown as below
        <li> tag will be the container for the table.
        <span> will be the part that centers the content inside it
        <a> is the actual clickable part -->
        <li><span><RouterLink :to="{path: `/feature/start`}">Features</RouterLink></span></li>
        <li><span><RouterLink :to="{path: `/faq`}">FAQ</RouterLink></span></li>
        <li><span>
          <a
            href="https://github.com/sonikkk-526/Lyrics-Editor-for-.LRC"
            target="_blank"
            class="button"
          >
          Join me on GitHub!<img src ="../assets/img/github-mark-white.png" id="github">
          </a>
        </span></li>
        
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* Default styles for the browser */
* {
  margin-top: 5px;
  list-style: none;
  color: #101010;
  text-decoration: none;
}

header {
  height: 95px;
  border-bottom: 1px solid #ececec;
}

.inner {
  width: 75%; /* This is the inner width of the content inside of your header (80%, etc) */
  min-width: 680px;
  height: 100%;
  display: block;
  margin: 0 auto;
}

.logo {
  display: inline-block;
}

.logo img {
  float: left;
  height: 50px;
  margin-top: 15px; /* Optical alignment of the logo */
  margin-right: 5px;
}

.logo h2 {
  float: left;
  margin-top: 30px;
  color: #3b3e49;
}

nav {
  float: right;
  height: 100%;
}

li {
  display: table;
  height: 100%;
  float: left;
  margin-right: 30px;
}

li:last-of-type {
  margin-right: 0;
}

span {
  display: table-cell;
  vertical-align: middle;
}

.button {
  display: block;
  background-color: #b07219; /* HEX color of the button */
  color: #FFF;
  
  margin-bottom: 3px;
  padding: 8px 15px;
  border-radius: 6px;
}

.button:hover {
  filter: brightness(1.05);
}

#github {
  height: 18px;
  padding-left: 5px;
}
</style>
