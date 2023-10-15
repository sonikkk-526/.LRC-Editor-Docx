<template>
  <h1 id="timestamp-tab">Understanding the Timestamp Editing Feature</h1>
  <p>Consider this situation:</p>
    <li>
      You just <RouterLink :to="{name: 'createLRC'}">created your .LRC file</RouterLink>.
      You found out that the overall timestamp is 3.53s faster than the song you have 
      (maybe you downloaded it from YouTube, and the MV video has an intro which caused the difference).
    </li>

  <h1>Timestamp Editing Example</h1>
  <p>Using the said situation, your current .LRC file looks like below (example):</p>
  <blockquote>
    <p>
      [00:06.94]The drawn atlas has been torn apart<br>
      [00:10.77]Yet the world still remains on that day<br>
      etc...
    </p>
  </blockquote>
  <p>
    While playing the file with your song, the synced lyrics is 3.53secs (example) ahead of the current line.
    The only solution would be deduct the current line of timestamp by 3.53secs (line by line):
  </p>

  <div class="block-container">
    <div>
      <p style="padding-left: 20px">Unmodified .LRC file:</p>
      <blockquote>
        <p>
          [00:06.94]The drawn atlas has been torn apart<br>
          (↑ 00:06.94 - 00:03.53)<br>
          [00:10.77]Yet the world still remains on that day<br>
          (↑ 00:10.77 - 00:03.53)<br>
          <br>
          etc...
        </p>
      </blockquote>
    </div>

    <div>
      <p style="padding-left: 20px">Modified .LRC file:</p>
      <blockquote id="english-content">
        <p>
          [00:03.41]The drawn atlas has been torn apart<br>
          [00:07.24]Yet the world still remains on that day<br>
          <br>
          etc...
        </p>
      </blockquote>
    </div>
  </div>

  <p>
    Typically a .LRC file would have 30-60 lines of lyrics. Now imagine doing the above example another 28-58 times.
    Then, for each time you downloaded a shifted lyrics, you would have to do this cycle again.
  </p>

  <p>It would be pretty painful to do so, and therefore, this is the main idea of this feature.</p>
  <img id="showcase" :src=img_01 />

  <p><q>This feature allows you to mass edit all timestamps by ± a fixed centiseconds (1 second = 100 centiseconds).</q></p>
</template>

<script>
export default {
  data: () => ({
    img_01: require(`@/assets/img/screenshots/editor/editor_timestamp_result.png`),
  })
}
</script>