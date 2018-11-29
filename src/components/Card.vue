<template>
  <b-card :title="item.original_title"
          :img-src="concatImage(item.backdrop_path)"
          img-alt="Image"
          img-top
          style="max-width: 20rem;"
          class="mb-2 text-left">
    <p style="min-height: 70px" class="card-text">{{item.overview | truncate(69, '...') }}</p>
    <b-row v-if="$route.name == 'page'" style="align-items: baseline">
      <b-col>
        <p>Vote: {{item.vote_count}}</p>
      </b-col>
      <b-col>
        <router-link class="btn btn-primary" :to="{ name: 'movie', params: { page: this.$route.params.page, id: item.id } }">View more</router-link>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
  import posterPhoto from "../helpers/poster"

  export default {
    props: ['item'],
    methods: {
      getPopularMovies() {
        this.$store.dispatch('getPopularMovies')
      },
      concatImage(path) {
        return posterPhoto(path)
      }
    },
    filters: {
      truncate: function (text, length, suffix) {
        return text.substring(0, length) + suffix
      },
    }
  };
</script>
