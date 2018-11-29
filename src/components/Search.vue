<template>
  <b-col class="pr-0" v-if="$route.name == 'page'">
    <b-form inline style="justify-content: flex-end;">
      <b-input class="mb-2 mb-sm-0 mr-0" id="" placeholder="Search" v-model="query" />
    </b-form>
  </b-col>
</template>

<script>
  export default {
    data() {
      return {
        query: ''
      };
    },
    watch: {
      query() {
        this.$parent.$emit('input', this.query);
      }
    }
  };
</script>
