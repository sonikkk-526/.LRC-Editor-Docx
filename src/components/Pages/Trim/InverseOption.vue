<template>
  <h1>Understanding the Inverse Option</h1>
  <p>Consider the below examples (skipping occurrence is still <code>2</code>):</p>
  <div class="block-container">
    <div>
      <span>Top-Bottom:</span>
      <blockquote>
        <p>
          <s>a</s> //skipped<br>
          <s>b</s> //skipped<br>
          c<br>
          <s>d</s> //skipped<br>
          <s>e</s> //skipped<br>
          f
        </p>
      </blockquote> 
    </div>
    <div>
      <span>Bottom-Top:</span>
      <blockquote>
        <p>
          a<br>
          <s>b</s> //skipped<br>
          <s>c</s> //skipped<br>
          d<br>
          <s>e</s> //skipped<br>
          <s>f</s> //skipped
        </p>
      </blockquote>
    </div>
  </div>

  <p>
    Notice how skipping lines from top-bottom and bottom-top yield different outputs: {c, f} & {a, d} (respectively);
    that's the concept of the "inverse selection" option!
  </p>

  <!-- Page Divider -->
  <h1>Using Inverse Option to match the pattern</h1>
  <p>
    By reading "<RouterLink :to="{name: 'trimShowcase'}">The nitty-gritty</RouterLink>" from the last page,
    we learned that "Lyrics Trimming" works by utilizing a pattern in your translated lyrics.
  </p>
  <p>In order for us to get the other languages, we create lines <u>(the x's indicates new lines; if applicable)</u>
    to help us to preserve the constant occurrence:</p>
  <img id="showcase" :src=img_01 />
  <img id="showcase" :src=img_02 />
</template>

<script>
export default {
  data: () => ({
    img_01: require(`@/assets/img/screenshots/trim/result_02.png`),
    img_02: require(`@/assets/img/screenshots/trim/result_03.png`)
  })
}
</script>