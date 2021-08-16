<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import axios from 'axios';

export default ({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  methods: {
    updateGlobalState() {
      // console.log('aaaaa2222sss')
      // this.$store.dispatch('increase', { value: 10 });
      // this.$store.dispatch({
      //   type: 'increase',
      //   value: 10
      // });
      axios.get('https://v01.qualigiene.fr/api-get-test', {
        params: {
          // ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
    },
  },
  created() {
    this.updateGlobalState();
  }
});
</script>