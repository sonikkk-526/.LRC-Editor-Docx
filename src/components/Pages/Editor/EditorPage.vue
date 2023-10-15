<template>
	<h1 id="content-start">Intro to Lyrics Editor Feature Pack</h1>
	<p>The goal of this editor is to allow users to mass edit and maintain their lyrics file (.LRC)~!!</p>
	<img id="showcase" :src=img_01 />
	<p>Current Lyrics Editor feature are listed below (s/b continue to update :D)</p>

	<ol>
		<li>Merging Function: Replace the lyrics inside your .LRC file, while maintaining the original timestamp. Can be achieved by:</li>
    <ul>
			<li>Putting your lyrics replacement into merging page</li>
			<li>Using the trimmed lyrics for lyrics replacement (for trimmed lyrics feature, refer to Lyrics Trimming page for details)</li>
		</ul>
		
    <li>Timestamp Edit: Mass edit each line of timestamp by ± a fixed centiseconds (1 second = 100 centiseconds).</li>
		<li>Generation of header tags: Generate a header tag for easy `.LRC` file management (see below):</li>
    <ul>
			<li>Tags are described as here: <code>title tag [ti]</code>, <code>artist [ar]</code>, <code>album [al]</code>, <code>song duration [length]</code></li>
		</ul>
	</ol>

  <h1>Note</h1>
  <p>
    This feature includes multiple different user-input validations (which means that the program checks your input to see if it matches its expectations).
    Therefore, it may pop up different error messages in the output panel, no need to worry as they are pretty self-explanatory.<br>
  </p>

  <p>However, you can still reach to the Side Note page for details explainations if you are still confused :)</p>
	<p>Corresponding (sub)page will show the details of each feature. Go ahead and explore!</p>
</template>

<script>
export default {
  data: () => ({
    img_01: require(`@/assets/img/screenshots/editor/editor_main.png`)
  })
}
</script>