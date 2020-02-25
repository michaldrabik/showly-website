<template>
  <section class="header">
    <div class="header__container">
      <div class="header__item-image">
        <img src="@/assets/screen1.png">
      </div>
      <div class="header__item-description">
        <div class="header__item-description-name">
          Showly 2.0
        </div>
        <img
          class="header__item-description-icon"
          src="@/assets/icon.png">
        <div class="header__item-description-title">
          Follow the best TV Shows on the air!
        </div>
        <div class="header__item-description-subtitle">
          Showly 2.0 is modern, open source TV Shows tracker app designed with latest Android guidelines.<br>
          Completely free and without ads.
        </div>
        <div class="header__item-links">
          <a :href="playStoreLink" target="_blank">
            <img
              class="header__item-links-googleplay"
              src="@/assets/google_play.png">
          </a>
          <a :href="githubLink" target="_blank">
            <img
              class="header__item-links-github"
              src="@/assets/github.png">
          </a>    
        </div>    
      </div>
    </div>
  </section>
</template>

<script src="./header.js"></script>
<style src="./header.scss" lang="scss" scoped></style>
