import { createStore } from 'vuex';
// import { def } from '@vue/shared';

const store = createStore({
  state() {
    return {
      items: [
        {
          id: 1,
          email: "email1",
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg',
          desc: "Desctiption One"
        },
        {
          id: 2,  
          email: "email2",
          image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg',
       
          desc: "Desctiption Two"
        },
        {
          id: 3,
          email: "email3",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg',
          desc: "Desctiption Three"
        },
      ] 
    }
  },
  mutations: {
    addItem(state, itemData) {
      const newItem = {
        id: new Date().toISOString(),
        title: itemData.title,
        image: itemData.imageUrl,
        desc: itemData.desc
      };

      state.items.unshift(newItem);
    }
  },
  actions: {
    addItem(context, itemData) {
      context.commit('addItem', itemData);
    }
  },
  getters: {
    items(state) {
      return state.items;
    },
    item(state) {
      return (itemId) => {
        return state.items.find(item => item.id == itemId);
      }
    }
  }
});

export default store;