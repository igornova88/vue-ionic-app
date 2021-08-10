<template>
  <base-layout page-title="First Page A" >

      <ion-list>
        <ion-item>1</ion-item>
        <ion-item>2</ion-item>
        <ion-item router-link="/second-page/text">text</ion-item>
        <ion-item 
          v-for="item in items" 
          :router-link="`/second-page/${item.id}`"
          :key="item.id"  
        > 
          <ion-thumbnail slot="start">
            <ion-img :src="item.image" :alt="item.desc"></ion-img>
          </ion-thumbnail>
          <ion-label>
            {{ item.desc }}
          </ion-label>
        </ion-item>
      </ion-list>



  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';

export default {
  components: {
    IonList, 
    IonItem, 
    IonImg,
    IonThumbnail,
    IonLabel
  },
  computed: {
    items() {
      return this.$store.getters.items
    }
  } 
}
</script>
