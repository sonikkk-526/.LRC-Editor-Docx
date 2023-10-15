<template>
  <h1>Understanding the Lyrics Trimming Feature</h1>
  <p>
    Now, using the same example shown in <RouterLink :to="{name: 'trimShowcase'}">Intro to Lyrics Trimming Feature Pack</RouterLink>, 
    below demonstrate the nitty-gritty while using the feature, the concept of the feature is simple:
  </p>

  <div>
    <p style="font-weight: bold;">A translated lyrics you may found online (say we want to keep Romaji):</p>
    <blockquote>
      <p>
        <s>時には誰かを</s><br>
        <br>
        <s>有时候我们</s><br>
        <br>
        to ki ni wa  da re ka wo<br>
        <br>
        <s>知らず知らずのうちに</s><br>
        <s>会在无意之间</s><br>
        shi ra su shi ra su no  u chi ni<br>
        <br>
        <s>傷つけてしまったり</s><br>
        <s>伤害他人</s><br>
        ki zu tsu ke te shi ma - ta ri
      </p>
    </blockquote>
  </div>
  <p><q>Note that empty line feeds are automatically ignored/discarded.</q></p>
  <p><b>
    Notice how there are two lines of lyrics to skip, before it reaches to the Romaji line.
    Therefore, we would put '2' into the <code>Number of Occurrence</code>, as shown below:<br>
  </b></p>
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