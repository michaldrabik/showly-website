<template>
  <div :class="classFeature()">
    <div :class="classDetails()">
      <div class="feature__details-title"> {{ title }} </div>
      <div class="feature__details-description" v-html="description"/>
    </div>
    <img class="feature__image" :src="imageSrc">
  </div>
</template>

<script src="./feature-item.js"></script>
<style src="./feature-item.scss" lang="scss" scoped></style>
