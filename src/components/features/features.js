import FeatureItem from './feature-item/feature-item.vue'

export default {
  components: {
    FeatureItem
  },
  data () {
    return {
      items: [
        {
          title: 'See Best Shows',
          description: 'Browse hundreds of shows, seasons and episodes. Follow the ones you enjoy and never miss an episode!',
          image: 'feature1.png'
        },
        {
          title: 'Track Progress',
          description: 'Simply create a watchlist by choosing your favorite shows and track your progress.\n\nWatchlist will show you next episode to watch, its description and more.',
          image: 'feature2.png'
        },
        {
          title: 'Search & Discover',
          description: "Quickly find shows you are looking for and check out latest trending and the most popular ones!\n\nShowly is backed by huge <a href='https://trakt.tv'><b>Trakt.tv</b></a> catalogue.",
          image: 'feature3.png'
        },
        {
          title: 'Custom Lists',
          description: 'Create and manage your own custom list of shows and episodes.',
          image: 'feature4.png'
        }
      ]
    }
  },
  methods: {
    isReverse: function (index) {
      return index % 2 !== 0
    }
  }
}
