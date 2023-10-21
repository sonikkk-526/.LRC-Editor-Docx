<template>
  <h1>Other options</h1>
  <p>To help you create your LRC file easier, there are two other options to help with it:</p>
  <p><u>1.</u> "Ignore Timestamps": Takes in a LRC file and remove all timestamps, outputting only the lyrics-</p>
  <div class="block-container">
    <div>
      <span>Input:</span>
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
      <span>Output:</span>
      <blockquote>
        <p>
          描いた地図は引き裂いた<br>
          世界はあの日のまま<br>
          僕はまた<br>
          誰かのせいにした<br>
          嫌になっちゃうな<br>
          etc...
        </p>
      </blockquote>
    </div>
  </div>
  <i>It is a handy option if you found a LRC file and only need the lyrics portion.</i><br><br>

  <p><u>2.</u> "Discard Lyrics": Removing all the lyrics such that it only contains the timestamp (most convenient option imo)-</p>
  <div class="block-container">
    <div>
      <span>Input:</span>
      <blockquote>
        <p>
          [00:06.94]描いた地図は引き裂いた<br>
          [00:10.77]世界はあの日のまま<br>
          [00:14.66]<br>
          [00:17.33]誰かのせいにした<br>
          [00:21.53]嫌になっちゃうな<br>
          etc...
        </p>
      </blockquote>
    </div>

    <div>
      <span>Output:</span>
      <blockquote>
        <p>
          [00:06.94]x<br>
          [00:10.77]x<br>
          [00:14.66]<br>
          [00:17.33]x<br>
          [00:21.53]x<br>
          etc...
        </p>
      </blockquote>
    </div>
  </div>
  <i>
    Occasionally you may have a .LRC file and would want to change the lyrics out for another language
    (ie. japanese -> english).<br><br>

    Rather than doing it by hand for 30+ lines, the <code>x</code> represents there was a line of lyrics
    there (because sometimes .LRC file may use empty lines to separate the structure:
    (ie. intro, verse, pre-chorus, chorus, bridge, inter, instrumental solo, outro)).<br><br>

    With this in mind, we could utilize this feature and combine it with
    "<RouterLink :to="{name: 'editor-merging'}">Lyrics Merging</RouterLink>".<br>
  </i>
</template>