<template>
  <h1>Generate empty headers</h1>
  <p>
    If you do not want to put anything into the input text box, 
    maybe you just want the headers because you are organizing your files; 
    just want the headers, this is a feature for that.
  </p>
  <p>
    You simply check that box, under basically every situation, 
    it should remove everything from the output text box, 
    and give you just the headers for your file.
  </p>
  <img id="showcase" :src=img_01 />
  <p><i>"notice how I am working on other things, once that checkbox is checked, the output box should only give you the headers."</i></p>
</template>

<script>
export default {
  data: () => ({
    img_01: require(`@/assets/img/screenshots/editor/editor_autogen_result.png`)
  })
}
</script>