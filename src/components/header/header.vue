<template>
  <section class="header">
    <div class="header__container">
      <div class="header__item-image">
        <img alt="Showly screenshot" src="@/assets/screen1.png">
      </div>
      <div class="header__item-description">
        <img
          class="header__item-description-icon"
          alt="Showly icon"
          src="@/assets/icon.png">
        <div class="header__item-description-title">
          Follow the best TV shows on the air!
        </div>
        <div class="header__item-description-subtitle">
          Showly is easy to use app designed with the latest Android guidelines in mind.<br>
          Free and without ads.
        </div>
        <a :href="playStoreLink" target="_blank">
          <img
            class="header__item-description-googleplay"
            alt="Showly icon"
            src="@/assets/google_play.png">
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./header.js"></script>
<style src="./header.scss" lang="scss" scoped></style>
