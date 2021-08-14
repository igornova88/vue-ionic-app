<template>
  <base-layout page-title="form-page" >
    <form class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-thumbnail>
            <img src="" />
          </ion-thumbnail>
          <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
            Take image
          </ion-button>
        </ion-item>
      </ion-list>
      <ion-button type="submit" expand="block">Save</ion-button>
    </form>
  </base-layout>
</template>

<script>
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonThumbnail, IonIcon} from '@ionic/vue';
import { camera } from 'ionicons/icons';
// import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { Camera, CameraResultType } from '@capacitor/camera';



export default {
  components: { 
    IonList, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonTextarea,
    IonButton, IonThumbnail, IonIcon
  },
  data() {
    return {
      camera,
      takenImageUrl: null,
    };
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 60
      });
      this.takenImageUrl = photo.webPath;
    },
  }
}
</script>
