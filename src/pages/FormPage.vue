<template>
  <base-layout page-title="form-page" >
    <form class="ion-padding" @submit.prevent="submitForm">
      <ion-list>    <!-- good practice is to put form elements as list items -->
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input type="text" required v-model="enteredTitle"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" required v-model="enteredEmail"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea rows="6" v-model="enteredDescription"></ion-textarea>
        </ion-item>
      </ion-list>
      <ion-button type="submit" expand="block">Save</ion-button>
    </form>
  </base-layout>
</template>

<script>
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue';

export default {
  components: { 
    IonList, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonTextarea,
    IonButton
  },
  data() {
    return {
      enteredTitle: "",
      enteredEmail: "",
      enteredDescription: null,
      // camera
    };
  },
  methods: {
    submitForm() {
      // console.log('aaaa')
      const itemData = {
        title: this.enteredTitle,
        email: this.enteredEmail,
        desc: this.enteredDescription,
      };
      this.$store.dispatch('addItem', itemData);
      this.$router.replace('/first-page');
    },
  }
}
</script>
