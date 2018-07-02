import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { name: 'asdf', typeId: 'income' }
    ],
    categoryTypes: [
      { id: 'income', name: 'Income' },
      { id: 'expense', name: 'Expense'}
    ]
  },

  getters: {
    findCategoryTypeById: (state) => (id) => {
      return state.categoryTypes.find(type => type.id === id);
    }
  },

  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
      localStorage.setItem('categories', JSON.stringify(payload));
    },

    addCategory(state, payload) {
      state.categories.push({
        name: payload.name,
        typeId: payload.typeId
      });

      localStorage.setItem('categories', JSON.stringify(state.categories));
    }
  },

  actions: {

  }
});
