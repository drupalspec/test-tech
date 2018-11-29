<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-col class="pl-0">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img style="max-width: 110px;" src="../assets/logo.png" alt="">
        </router-link>
      </b-col>
      <search></search>
    </b-container>
  </b-navbar>
</template>

<script>
  import Search from '../components/Search'

  export default {
    components: {
      Search
    }
  }
</script>
