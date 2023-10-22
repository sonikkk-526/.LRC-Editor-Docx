<template>
  <h1>Creating your .LRC Files</h1>
  <p>
    There are different ways to create a .LRC files, one of the most easiest way to think of is to use your ears.
    However, I am here to share two different ways other than using your ears:
  </p>

  <p><b><u>1</u>. "Download YouTube video caption": </b>YouTube captions use .SRT files, you can actually download it and convert it to .LRC -</p>
  <p>
    Here are the tools that I used:<br>
    <ul>
      <li>Download YouTube video captions > https://downsub.com/ <br></li>
      <li>Convert .SRT to .LRC > https://toolslick.com/conversion/subtitle/srt-to-lrc</li>
    </ul>
  </p>
  <div style="padding-left: 1.4em;">
    <iframe frameborder="0" allowfullscreen src="https://youtube.com/embed/3sg3WkMJefw"/>
  </div>
  <br>
  <p><q><i>Credits: Song from Dry Flower by Yuuri; Caption from Dry Flower by The First Take & Yuuri.</i></q></p>
  <i>
    Per last time I checked, it seems not to violate any copyright or user agreement <u>iff</u> you only download the video's caption.
    As long as I will not violate the YouTube user agreement, then I am planning to add a "YouTube caption to LRC feature" in future updates.
  </i>
  <br><br>

  <p><b><u>2</u>. "Download from online":</b> Google is your best friend when searching for resources -</p>
  <p>
    There are different "forum" (ie. lyricsify, megalobiz, or
    <a href="https://github.com/sonikkk-526/lrc-lyrics-library" target="_blank">my lrc-lyrics-library</a>)
    where you can download your .LRC files from.
  </p>
  <br>
  <hr>
  <p><b><u>Mention</u>. Using your ear:</b> Just to talk about how to create a synced lyrics file (.LRC) manually -</p>
  <p>
    Basically all synced lyrics files work by having two components:<br>
    <ol>
      <li>a timestamp: when the lyric is sang, usually expressed with [minute:seconds:centiseconds] (ie. [00:12.99]);</li>
      <li>a lyrics followed by the timestamp>: the line of lyric to show at that time of the song;</li>
    </ol>
  </p>
  <div>
    <p>An example of what it would look like:</p>
    <blockquote id="english-content" style="width: 500px">
      <p>
        [00:06.94]The drawn atlas has been torn apart<br>
        [00:10.77]Yet the world still remains on that day<br>
        [00:14.66]However, I once again,<br>
        [00:17.33]Blame my mistakes on others<br>
        [00:21.53]I'm starting to hate myself...<br>
        etc...
      </p>
    </blockquote>
  </div>
  <i>For more information, read this wiki: <a href="https://en.wikipedia.org/wiki/LRC_(file_format)" target="_blank">LRC (file format)</a></i>
</template>