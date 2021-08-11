<template>
  <base-layout page-title="Second Page " page-default-back-link="/first-page">

      <h2> {{ idFromRoute }} </h2>
      <h3> {{ loadedItem.desc }} </h3>
      

  </base-layout>
</template>

<script>

export default {
  data() {
    return {
      idFromRoute: this.$route.params.id
    }
  },
  computed: {
    loadedItem() {
      return this.$store.getters.item(this.idFromRoute)
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  }
  // watch: {
  //   '$route'(currentRoute) {
  //     this.idFromRoute = currentRoute.params.id;
  //   }
  // }
}
</script>
