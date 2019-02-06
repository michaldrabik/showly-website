<template>
  <section class="features">
    <div class="features__caption">
      Features
    </div>
    <div class="features__container">
      <FeatureItem
        v-for="(item, index) in items"
        :key="index"
        class="features__container-item"
        v-bind="item"
        :isReverse="isReverse(index)"
      />
    </div>
    <div class="features__caption-bottom">
      And More
      <div class="features__caption-more">
        - trakt.tv import<br>
        - different color themes<br>
        - notification<br>
        - widgets<br>
        - UI/UX customizations<br>
      </div>
    </div>
  </section>
</template>

<script src="./features.js"></script>
<style src="./features.scss" lang="scss" scoped></style>
