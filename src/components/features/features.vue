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
      And more:
      <div class="features__caption-more">
        - Trakt.tv import/export<br>
        - Notifications<br>
        - UI/UX Customizations<br>
      </div>
    </div>
  </section>
</template>

<script src="./features.js"></script>
<style src="./features.scss" lang="scss" scoped></style>
