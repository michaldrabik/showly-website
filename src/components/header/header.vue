<template>
  <div class="header">
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
          Showly is easy to use app designed with the latest Android guidelines in mind.
        </div>
        <a :href="playStoreLink">
          <img
            class="header__item-description-googleplay"
            alt="Showly icon"
            src="@/assets/google_play.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.michaldrabik.seriestoday&hl=en'
    }
  }
}
</script>

<style src="./header.scss" lang="scss" scoped></style>
