<template>
  <section class="sponsors">
    <div class="sponsors__text">Showly 2.0 is powered by:</div>
    <div class="sponsors__images">
      <a :href="traktUrl" target="_blank">
        <img src="@/assets/logo_trakt.png">
      </a>
      <a :href="tvdbUrl" target="_blank">
        <img src="@/assets/logo_tvdb.png">
      </a>
    </div>
    <div class="sponsors__copyright">
      <div class="sponsors__text">
        Showly 2.0 © 2020<br>
        Android, Google Play and the Google Play logo are trademarks of Google Inc.
      </div>
    </div>
  </section>
</template>

<script src="./sponsors-footer.js"></script>
<style src="./sponsors-footer.scss" lang="scss" scoped></style>
