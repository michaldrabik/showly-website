export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    isReverse: { type: Boolean }
  },
  computed: {
    imageSrc () {
      return require('@/assets/features/' + this.image)
    }
  },
  methods: {
    classFeature () {
      return {
        'feature': true,
        'feature--reverse': this.isReverse
      }
    }
  }
}
