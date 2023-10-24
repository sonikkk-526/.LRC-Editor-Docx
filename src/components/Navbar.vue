<!-- This file is the header/navbar of the website. -->
<template>
  <header>
    <div class="inner">
      <div class="label">
        <RouterLink to="/">
          <!-- The below line can be an image or a h1, either will work -->
          <img src="../assets/img/editor_icon.png" alt="Lyrics Editor for .LRC Logo">
          <h2>Lyrics Editor for .LRC</h2>
        </RouterLink>
      </div>

      <nav>
        <span><RouterLink :to="{path: `/feature/start`}">Features</RouterLink></span>
        <span><RouterLink :to="{path: `/faq`}">FAQ</RouterLink></span>
        <a href="https://github.com/sonikkk-526/Lyrics-Editor-for-.LRC" target="_blank">
          <div class="button">
            <p>Join me on GitHub!</p>
            <img src ="../assets/img/github-mark-white.png">
          </div>
        </a>
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
* {
  margin-top: 5px;
  color: #101010;
  text-decoration: none;
}

header {
  height: 95px;
  border-bottom: 1px solid #ececec;
  > .inner {
    width: 75%; /* This is the inner width of the content inside of your header (80%, etc) */
    min-width: 680px;
    display: block;
    margin: 0 auto;
  }
}

.inner .label {
  display: inline-block;
  & img {
    float: left;
    height: 50px;
    margin-top: 15px; /* Optical alignment of the logo */
    margin-right: 5px;
  }
  & h2 {
    float: left;
    margin-top: 30px;
    color: #3b3e49;
  }
}

.inner nav {
  float: right;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-top: 22px;
  & span {
    margin-top: 20px;
    margin-right: 30px;
  }

  .button {
    float: left;
    background-color: #b07219;
    margin-top: 2px;
    padding: 10px 15px;
    border-radius: 8px;
    display: block;
    > p {
      float: left;
      margin: 0;
      color: #FFF;
      padding-top: 3px;
    }
    > img {
      float: right;
      width: 20px;
      margin-top: 0;
      padding-left: 5px;
    }
    &:hover {
      filter: brightness(1.05);
    }
  }
}
</style>
