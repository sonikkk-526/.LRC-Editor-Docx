<template>
  <section class="home-content">
    <div class="headline-icon">
      <img src="../assets/img/editor_icon.png" alt="Lyrics Editor for .LRC Logo">
    </div>
    <h1>Lyrics Editor for .LRC Docs</h1>
    
    <div class="badges">
      <a href="https://github.com/sonikkk-526">
        <img alt="Author" src="https://img.shields.io/badge/Author-FlashSonic526-brightgreen?style=for-the-badge">
      </a>
      <a href="https://github.com/sonikkk-526/Lyrics-Editor-for-.LRC/releases/latest">
        <img alt="Download Counts" src="https://img.shields.io/github/downloads/sonikkk-526/Lyrics-Editor-for-.LRC/total?style=for-the-badge">
      </a>
      <a href="https://github.com/sonikkk-526/Lyrics-Editor-for-.LRC/releases/latest" target="_blank">
        <img alt="Release" src="https://img.shields.io/github/v/release/FlashSonic526/Lyrics-Editor-for-.LRC?style=for-the-badge">
      </a>
      <a href="https://github.com/sonikkk-526/Lyrics-Editor-for-.LRC/blob/main/LICENSE" target="_blank">
        <img alt="License" src="https://img.shields.io/github/license/FlashSonic526/Lyrics-Editor-for-.LRC?style=for-the-badge">
      </a>
    </div>
    <h1 class="text-color">The Only Tool You Ever Need<br>For Your .LRC Files.</h1>

    <h1 class="description">
      Create. Editing. Adjust. Manage. All-in-one.
    </h1>
  </section>

  <section class="author">
    <p>
      Released under the <a href="https://github.com/sonikkk-526/Lyrics-Editor-for-.LRC/blob/main/LICENSE.md" target="_blank">BSD-4 Clause</a>.<br>
      Copyright © 2022-2023 sonikkk-526.
    </p>
  </section>
</template>

<style scoped>
* {
  font-family: "Inter var experimental", "Inter var", Inter, -apple-system, "Helvetica Neue", sans-serif;
}
.home-content {
  padding: 50px 20%;
  min-width: 450px;
  text-align: center;
  & h1 {
    margin: 0;
    font-size: 30px;
    padding-bottom: 30px;
  }
  .badges{
    padding-bottom: 25px;
    & img {
      padding-right: 5px;
    }
  }
  .text-color {
    font-size: 70px;
    background: -webkit-linear-gradient(315deg, #ff00bf 35%, #0000ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 20px;
  }
  .description {
    line-height: 1.8;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.70);
    font-weight: bold;
  }
}
.author {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  * {
    color: #868686;
  }
  & p {
    font-size: 12px;
    text-align: center;
  }
}
</style>