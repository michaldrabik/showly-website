<template>
  <section class="header">
    <div class="header__item-image">
      <img src="@/assets/screen1.png">
    </div>
    <div class="header__item-description">
      <div div class="header__item-description-header">
        <img
          class="header__item-description-icon"
          src="@/assets/icon.png">
        <div class="header__item-description-name">Showly 2.0</div>
      </div>
      <div class="header__item-description-subtitle">
        Showly 2.0 is modern, open source<br>TV Shows and Movies tracking app.
      </div>
      <div class="header__item-description-overview">
        Discover the best shows and movies and track your progress.
        Use your Trakt account to quickly synchronize progress and watchlist.
        <br><br>
        Receive notifications about new episodes, seasons and premieres.
        Use widgets and shortcuts to quickly access your favorite sections.
        <br><br>
        Showly is available for free on Google PlayStore.
      </div>
      <div class="header__item-links">
        <a :href="playStoreLink" target="_blank">
          <img
            class="header__item-links-googleplay"
            src="@/assets/google_play.png">
        </a>
        <a :href="twitterLink" target="_blank">
          <img
            class="header__item-links-twitter"
            src="@/assets/twitter.svg">
        </a>
        <a :href="githubLink" target="_blank">
          <img
            class="header__item-links-github"
            src="@/assets/github.png">
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./header.js"></script>
<style src="./header.scss" lang="scss" scoped></style>
