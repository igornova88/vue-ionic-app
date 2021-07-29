<template>
  <base-layout page-title="First Page 1" >

      <ion-list>
        <ion-item>1</ion-item>
        <ion-item>2</ion-item>
        <ion-item router-link="/second-page/3">3</ion-item>
      </ion-list>



  </base-layout>
</template>

<script>
import { IonList, IonItem } from '@ionic/vue';

export default {
  components: {
    IonList, 
    IonItem
  },
  data() {
    return {
      pages: [] 
    }
  }  
}
</script>
