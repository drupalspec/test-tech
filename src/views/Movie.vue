<template>
  <div>
    <navbar></navbar>
    <b-container>
      <b-row>
        <b-col cols="12" class="mt-4">
          <b-button @click="goBack" variant="link">&lsaquo; Go Back</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <h2 class="text-left mt-4 mb-4">{{movie[0].title}}</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <img class="img-fluid" :src="concatImage(movie[0].poster_path)" alt="">
        </b-col>
        <b-col md="6">
          <h3 class="my-3">Description</h3>
          <p>{{movie[0].overview}}</p>
          <h3 class="my-3">Details</h3>
          <ul class="list-unstyled">
            <li><b>Release date:</b> {{movie[0].release_date}}</li>
            <li><b>Vote:</b> {{movie[0].vote_count}}</li>
            <li><b>Popularity</b> {{movie[0].popularity}}</li>
          </ul>
        </b-col>
      </b-row>
      <h3 class="my-4">Related movies</h3>
      <b-row>
        <b-col lg="3" v-for="item in related" class="mb-4">
          <card :item="item"></card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
  import Navbar from '../components/Nav'
  import posterPhoto from "../helpers/poster"
  import Card from '../components/Card'

  export default {
    data () {
      return {
        movie: undefined,
        related: undefined,
        movie_id: this.$route.params.id
      }
    },
    components: {
      Navbar,
      Card
    },
    created() {
      this.movie = this.$store.state.popularMovies.filter(x => x.id == this.movie_id)
      this.loadRelated()
    },
    methods: {
      concatImage(path) {
        return posterPhoto(path)
      },
      loadRelated() {
        this.$store.dispatch('getRelatedMovies', this.movie_id)
          .then(r => {
            r = r.filter(x => x.backdrop_path !== null)
            this.related = r.slice(0, 4)
          })
      },
      goBack() {
        this.$router.back()
      }
    }
  }
</script>
