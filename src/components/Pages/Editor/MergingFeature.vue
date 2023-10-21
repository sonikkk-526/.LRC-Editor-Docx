<template>    
  <h1 id="merging-tab">Understanding the Merging Feature</h1>
  <p>Sometimes when you found some .LRC files online, it may not appear to be in your language of desire.</p>
  <p>
    Instead of replacing EACH line of lyrics by hand (typical solution), and just to find out that either:
    <ul>
      <li>replacing lyrics may split/combine sentences; resulting in too less/much lyrics for you to replace.</li>
      <li>
        have to watch out for empty lines, which its idea was to split paragraphs (in .LRC files) in a song<br>
        <i>(ie. intro, verse, pre-chorus, chorus, bridge, inter, instrumental solo, outro).</i>
      </li>
    </ul>
    <i>The goal of this feature is to easily replace the all the lyrics inside your .LRC file, while maintaining the original timestamp.</i>
  </p>

  <!--Second divider-->
  <h1>Merging Examples</h1>
  <p>
    For example, you have a original lyrics file below and you would like to replace the lyrics by another set of lyrics you have on hand.
  </p>

  <div class="block-container">
    <div>
      <span>Original lyrics example below:</span>
      <blockquote>
        <p>
          [00:06.94]描いた地図は引き裂いた<br>
          [00:10.77]世界はあの日のまま<br>
          [00:14.66]僕はまた<br>
          [00:17.33]誰かのせいにした<br>
          [00:21.53]嫌になっちゃうな<br>
          etc...
        </p>
      </blockquote>
    </div>

    <div>
      <span>Replacement lyrics example:</span>
      <blockquote id="english-content">
        <p>
          The drawn atlas has been torn apart<br>
          Yet the world still remains on that day<br>
          However, I once again,<br>
          Blame my mistakes on others<br>
          I'm starting to hate myself...<br>
          etc...
        </p>
      </blockquote>
    </div>
  </div>

  <div>
    <p style="padding-left: 5px">Results:</p>
    <blockquote>
      <p>
        [00:06.94]The drawn atlas has been torn apart<br>
        [00:10.77]Yet the world still remains on that day<br>
        [00:14.66]However, I once again,<br>
        [00:17.33]Blame my mistakes on others<br>
        [00:21.53]I'm starting to hate myself...<br>
        etc...
      </p>
    </blockquote>
    <img id="showcase" :src=img_01 />
  </div>

  <p><q><i>Lyrics from "Longman Spiral" (Mushoku Tensei S2 Opening).</i></q></p>
</template>

<script>
export default {
  data: () => ({
    img_01: require(`@/assets/img/screenshots/editor/merge/editor_merge_result.png`)
  }),
  methods: {
    openLinkInNewTab(url) {
      window.open(url, '_blank');
    }
  }
}
</script>