<template>
  <h1>Intro to Lyrics Trimming Feature Pack</h1>
  <p>
    I understand that sometimes maybe you found a translated lyrics or .SRT/.LRC file online, 
    which has more than one language in it. 
    You would like to filter the other language out, so that you could keep the language you would like to work with.
  </p>

  <p>
    This feature has the same concepts as other features, 
    to massively filter out the other lines without going through the file line by line (only works with constant lines):
  </p>
  
  <div class="block-container">
    <div>
      <p style="padding-left: 15px; font-weight: bold;">A translated lyrics you may found online:</p>
      <blockquote>
        <p>
          時には誰かを<br>
          <br>
          有时候我们<br>
          <br>
          to ki ni wa  da re ka wo<br>
          <br>
          知らず知らずのうちに<br>
          会在无意之间<br>
          shi ra su shi ra su no  u chi ni<br>
          <br>
          傷つけてしまったり<br>
          伤害他人<br>
          ki zu tsu ke te shi ma - ta ri
        </p>
      </blockquote>
    </div>

    <div>
      <p style="padding-left: 15px; font-weight: bold;">Leave out just Romanji (a kind of japanese):</p>
      <blockquote>
        <p id="english-content">
          to ki ni wa  da re ka wo<br>
          shi ra su shi ra su no  u chi ni<br>
          ki zu tsu ke te shi ma - ta ri
        </p>
      </blockquote>
    </div>
  </div>
  <p><q><i>Lyrics from Hakujitsu by King Gnu.</i></q></p>

  <p>
    Again, in reality there are usually 60-80 lines.
    Now imagine doing the above example by hand for another 60-80 times.
    Then, for each multiple language translated lyrics, you would have to do this cycle again.
  </p>

  <p><b>FYI.</b> Since using services such as Google Translate API to detect langauge would cause me money to maintain.
    Therefore, I decided to use a simple skipping certain number of lines concept, as I found that the majority of translated lyrics is 
    quite consistent.
  </p>
</template>