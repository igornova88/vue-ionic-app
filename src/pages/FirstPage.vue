<template>
  <base-layout page-title="First Page A" >

      <ion-list>
        <ion-item router-link="/camera-page">camera</ion-item>
        <ion-item router-link="/form-page">
            add form
          <ion-button>
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
          </ion-button> 
        </ion-item>
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
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel, IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';

export default {
  components: {
    IonList, 
    IonItem, 
    IonImg,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonIcon
  },
  data() {
    return {add}
  },
  computed: {
    items() {
      return this.$store.getters.items
    }
  } 
}
</script>
