<template>
  <h1>Options for Merging Lyrics</h1>
  <p>You basically have two ways to merge your lyrics using this software.</p>
  <li>1. One way is putting your lyrics replacement into merging page.</li>
  <img id="showcase" :src=img_01 />
  <p>
    You simply click the dropdown menu from the upper-right corner.
    Select <code>Merge</code> page, and it would change the page to a large textbox,
    where you can place your merging lyrics inside.<br>
  </p>
  <p>
    <b>Note:</b> While using the merging page, <b>DO NOT</b> check the <code>Use Trimmed Lyrics</code> checkbox.<br>
    Using that checkbox will result in an error prompting:
    <code style="color:red; font-weight: bold;">
      Missing Trimmed Merging Lyrics. Please check your trimmed lyrics input.
    </code>
  </p>
  <br>
  <li>
    2. Using the trimmed lyrics (result) from <RouterLink :to="{name: 'Trim'}">Lyrics Trimming feature</RouterLink> is another approach, 
    such that you would not need to copy and paste it to (1).
  </li>

  <p><b>Details of Lyrics Trimming feature and error messages would be explained in their corresponding page~! Go ahead and explore them!</b></p>
</template>

<script>
export default {
  data: () => ({
    img_01: require(`@/assets/img/screenshots/editor/merge/editor_merge.png`)
  })
}
</script>