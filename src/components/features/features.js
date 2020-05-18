import FeatureItem from './feature-item/feature-item.vue'

export default {
  components: {
    FeatureItem
  },
  data () {
    return {
      items: [
        {
          title: 'Discover Best Shows',
          description: 'Browse hundreds of shows, seasons and episodes. Follow the ones you enjoy and never miss an episode!',
          image: 'feature1.png'
        },
        {
          title: 'Track Progress',
          description: 'Choose your favorite shows and track your progress.\n\nWatchlist will show you next episode to watch and incoming episodes.',
          image: 'feature2.png'
        },
        {
          title: 'Search',
          description: "Quickly find shows you are looking for and check out latest trending and the most popular ones!\n\nShowly 2.0 is backed by huge <a href='https://trakt.tv'><b>Trakt.tv</b></a> catalogue.",
          image: 'feature3.png'
        },
        {
          title: 'Your Shows',
          description: 'Quickly access and browse shows you are currently watching and also plan to see in the future.',
          image: 'feature4.png'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    isReverse (index) {
      return index % 2 !== 0
    },
    itemClassModifier (index) {
      return {
        'features__container-item': true,
        'features__container-item--reverse': this.isReverse(index)
      }
    }
  }
}
