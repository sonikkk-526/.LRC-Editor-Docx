<template>
  <h1>Intro to Lyrics Trimming Feature Pack</h1>
  <p>
    There may be times that you found a translated lyrics or file (.SRT/.LRC) online which contains
    more than one languages. In that case, you may want to keep only one language to work with:
  </p>
  
  <div class="block-container">
    <div>
      <span>A translated lyrics you found online:</span>
      <blockquote>
        <p>
          時には誰かを [japanese]<br><br>
          有時候我們 [chinese]<br><br>
          to ki ni wa  da re ka wo [Romanji]<br><br>
          知らず知らずのうちに [japanese]<br>
          會在無意之間 [chinese]<br>
          shi ra su shi ra su no  u chi ni [Romanji]<br><br>
          傷つけてしまったり [japanese]<br>
          傷害他人 [chinese]<br>
          ki zu tsu ke te shi ma - ta ri [Romanji]
        </p>
      </blockquote>
    </div>
    <div>
      <span>Keep only Romanji (a kind of japanese):</span>
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
    The goal of this "Lyrics Trimming" feature is simply for the above example. A translated lyrics
    may contain 50+ lines, and it would be difficult to delete line by line manually.
  </p>

  <h1>Side Note (you may skip this one)</h1>
  <p>
    You will need to read the "<RouterLink :to="{name: 'trimShowcase'}">The nitty-gritty</RouterLink>" to understand how it works.
    It would be too long for a page to have both the description and the implementation of this feature.<br><br>
    
    <b>FYI.</b> Although using services like Google Translate would be much more practical, these service would also cause me money to maintain
    (they have limited free usage); as most translated lyrics has a consistent pattern (described in the next page), a simple line skipping feature
    seems to do the job.
  </p>
</template>