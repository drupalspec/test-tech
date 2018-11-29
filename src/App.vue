<template>
  <div id="app">
    <router-view></router-view>
    <footer-part></footer-part>
    <spinner v-show="spinnerStatus"></spinner>
  </div>
</template>


<script>
  import Spinner from './components/Spinner'
  import FooterPart from './components/FooterPart'

  export default {
    components: {
      Spinner,
      FooterPart
    },
    computed: {
      spinnerStatus() {
        return this.$store.state.spinner
      }
    },
    created() {
      // Init app on first load. Get all data from server.
      Promise.all([
        this.$store.dispatch('getPopularMovies')
        // Something else
      ]).then(
        () => console.log('Data load!'),
      )
    }
  }

</script>
