<template>

  <ion-page>  <!-- best practice is to user ion-page as root component -->

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title> {{ pageTitle }} 22222 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <slot />    <!-- here we put actuall page content -->
    </ion-content>

  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';

export default {
  props: ['pageTitle', 'pageDefaultBackLink'],
  components: {
    IonPage, 
    IonToolbar, 
    IonHeader, 
    IonTitle, 
    IonContent, 
    IonBackButton,
    IonButtons
  }  
}
</script>
