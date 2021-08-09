<template>
  <base-layout page-title="Second Page " page-default-back-link="/first-page">

      <h2>second</h2>

      

  </base-layout>
</template>

<script>

export default {
  data() {
    return {
      idFromRoute: null
    }
  },
  computed: {

  },
  watch: {
    '$route'(currentRoute) {
      this.idFromRoute = currentRoute.params.id;
    }
  }
}
</script>
