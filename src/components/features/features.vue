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
      <ul>
        <li> trakt.tv import </li>
        <li> different color themes </li>
        <li> notifications</li>
        <li> widgets </li>
        <li> UI/UX customizations </li>
      </ul>
    </div>
  </section>
</template>

<script src="./features.js"></script>
<style src="./features.scss" lang="scss" scoped></style>
