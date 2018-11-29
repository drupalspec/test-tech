<template>
  <b-row class="mt-4 mb-4">
    <b-col cols="8">
      <h2 class="text-left">{{ $route.meta.title }}</h2>
    </b-col>
    <b-col cols="4" class="text-right">
      <b-button-group size="sm" class="mt-2">
        <b-button v-show="showBtn" @click="makeSort" variant="primary">Sort by vote</b-button>
        <b-button v-show="!showBtn" @click="resetSort" variant="danger">Reset sort</b-button>
      </b-button-group>
    </b-col>
  </b-row>
</template>


<script>
  export default {
    methods: {
      makeSort() {
        this.$store.dispatch('setSortOff')
        return this.$parent.makeSort()
      },
      resetSort() {
        this.$store.dispatch('setSortOn')
        return this.$parent.resetSort()
      }
    },
    computed: {
      showBtn() {
        return this.$store.state.sortStatus
      }
    }
  }
</script>
