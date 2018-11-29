<template>
  <div>
    <navbar v-on:input="onChange"></navbar>
    <b-container>
      <page-title></page-title>
      <b-row>
        <b-col lg="3" md="6" sm="6" class="mb-4"
               v-for="item in queryMovies.slice(start, end)" :key="item.id">
          <card :item="item"></card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-pagination-nav base-url="#" :number-of-pages="Math.round(queryMovies.length / perPage)" v-if="queryMovies.length > 9" class="mt-3 mb-5" size="md" align="center"
                        :total-rows="queryMovies.length" v-model="currentPage" :per-page="perPage">
          </b-pagination-nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Navbar from '../components/Nav'
  import Card from '../components/Card'
  import PageTitle from '../components/Title'
  import findByKey from "../helpers/findByKey"
  import { mapState } from 'vuex'
  import router from '../router';

  export default {
    data () {
      return {
        currentPage: parseInt(this.$route.params.page),
        perPage: 8,
        query: ''
      }
    },
    components: {
      Navbar,
      Card,
      PageTitle
    },
    computed: {
      movies() {
        return this.$store.state.popularMovies
      },
      start() {
        return this.perPage * (this.currentPage - 1)
      },
      end() {
        return this.start + this.perPage;
      },
      sortASC() {
        return this.movies.sort((a, b) => b.vote_count - a.vote_count)
      },
      sortDESC() {
        return this.movies.sort((a, b) => a.vote_count - b.vote_count)
      },
      queryMovies() {
        if (!this.query) return this.movies
        return findByKey(this.movies, this.query, 'original_title')
      }
    },

    methods: {
      makeSort() {
        return this.sortASC
      },
      resetSort() {
        return this.sortDESC
      },
      onChange(data) {
        return (this.query = data);
      }
    },
    watch: {
      '$route' (to, from) {
        this.currentPage = parseInt(to.params.page)
      },
      currentPage: function(data) {
        router.push({name: 'page', params: { page: data }})
      }
    }
}
</script>


<style>
  h4.card-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
