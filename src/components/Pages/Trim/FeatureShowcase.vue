<template>
  <h1>Understanding the Lyrics Trimming Feature</h1>
  <p>
    The following explains how the example in the <RouterLink :to="{name: 'Trim'}">Intro to Lyrics Trimming Feature Pack</RouterLink> works.
  </p>

  <div class="block-container">
    <div id="english-content">
      <span>Using the same lyrics example:</span>
      <blockquote>
        <p>
          時には誰かを [japanese]<br>
          有時候我們 [chinese]<br>
          to ki ni wa  da re ka wo [Romanji]<br>
          知らず知らずのうちに [japanese]<br>
          會在無意之間 [chinese]<br>
          shi ra su shi ra su no  u chi ni [Romanji]<br>
          傷つけてしまったり [japanese]<br>
          傷害他人 [chinese]<br>
          ki zu tsu ke te shi ma - ta ri [Romanji]
        </p>
      </blockquote>
    </div>
    <div id="english-content">
      <span>The pattern we found:</span>
      <blockquote>
        <p>
          [japanese]<br>
          [chinese]<br>
          [Romanji]<br>
          [japanese]<br>
          [chinese]<br>
          [Romanji]<br>
          [japanese]<br>
          [chinese]<br>
          [Romanji]
        </p>
      </blockquote>
    </div>
  </div>

  <p>
    It shows that the lyrics is formed by the pattern: <i>(1) japanese -> (2) chinese -> (3) romanji</i>.
    Say we want only <u>Romanji</u>, and by using this pattern:
  </p>
  <div>
    <blockquote>
      <p>
        <s>時には誰かを</s><br>
        <br>
        <s>有時候我們</s><br>
        <br>
        to ki ni wa  da re ka wo<br>
        <br>
        <s>知らず知らずのうちに</s><br>
        <s>會在無意之間</s><br>
        shi ra su shi ra su no  u chi ni<br>
        <br>
        <s>傷つけてしまったり</s><br>
        <s>傷害他人</s><br>
        ki zu tsu ke te shi ma - ta ri
      </p>
    </blockquote>
  </div>
  <b><q>Note that empty line feeds are automatically ignored/discarded.</q></b>

  <p>
    We also noticed that there are two lines ahead of each <u>Romanji</u> line lyrics,
    therefore we want to skip <code>2</code> lines per each occurrence, such that it would only contain Romanji only:
  </p>
  <img id="showcase" :src=img_01 />
</template>

<script>
export default {
  data: () => ({
    img_01: require(`@/assets/img/screenshots/trim/result_01.png`),
    img_02: require(`@/assets/img/screenshots/trim/result_02.png`)
  })
}
</script>