import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// based on https://www.raymondcamden.com/2019/10/16/using-indexeddb-with-vuejs
import idb from '@/lib/idb';

export default new Vuex.Store({
  state: {
    cats:[]
  },
  mutations: {

  },
  actions: {
    async deleteCat(context, cat) {
      await idb.deleteCat(cat); 
    },
    async getCats(context) {
      context.state.cats = [];
      let cats = await idb.getCats();
      cats.forEach(c => {
        context.state.cats.push(c);
      });
    },
    async saveCat(context, cat) {
      console.log('dispatched saveCat with ctx:', context);
      console.log('cat', cat);
      await idb.saveCat(cat);
    }
  },
  modules: {}
})