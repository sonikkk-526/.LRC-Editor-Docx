<template>
  <h1>Options for Merging Lyrics</h1>
  <p>You can do the "<RouterLink :to="{name: 'editor-mergeOptions'}">Lyrics Merging</RouterLink>" in two ways:</p>

  <p><b><u>1.</u> Using the output from "<RouterLink :to="{name: 'Trim'}">Lyrics Trimming</RouterLink>" -</b></p>
  <p>Simply check the "Use Trimmed Lyrics" checkbox, <u>and have results in your Lyrics Trimming output pane</u>.</p><br>

  <p><b><u>2.</u> Paste your replacement lyrics into the <code>Merging Page</code> -</b></p>
  <ol type="a">
    <li>Click the dropdown menu from the upper-right corner;</li>
    <li>Select the <code>Merge</code> page (it would change the page to a large textbox);</li>
    <li>Paste your replacement lyrics into the textbox;<br></li>
  </ol>
  <img id="showcase" :src=img_01 /><br>
  <i>
    If you checked the "Use Trimmed Lyrics" checkbox, and your trimmed lyrics output pane is empty;
    the software should prompt
    <code style="color:red; font-weight: bold;">Missing Trimmed Merging Lyrics. Please check your trimmed lyrics input</code>
    .
  </i><br><br>
</template>

<script>
export default {
  data: () => ({
    img_01: require(`@/assets/img/screenshots/editor/merge/editor_merge.png`)
  })
}
</script>