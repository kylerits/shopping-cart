import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    newProduct: {}
  },
  mutations: {
    GET_PRODUCT(state, product) {
      state.newProduct = product
    },
    ADD_PRODUCT(state) {
      let inStore = false;
      let product

      state.products.forEach((p) => {
        if (p.itemid == state.newProduct.itemid) {
          inStore = true
          product = p
        }
      })

      if (inStore) {
        if (product.available > product.quantity) {
          // Remove current
          let products = state.products
          products.splice(products.indexOf(product), 1)
          state.products = products

          product.quantity += 1
          
          state.products.push(product)
        }
      } else {
        product = state.newProduct
        product.quantity = 1
        state.products.push(product)
      }
    },
    REMOVE_PRODUCT(state, product) {
      let products = state.products
      products.splice(products.indexOf(product), 1)
      state.products = products
      state.newProduct = product
    }
  },
  actions: {
    getProduct({commit}, product) {
      commit('GET_PRODUCT', product)
    },
    addProduct({commit}) {
      commit('ADD_PRODUCT')
    },
    removeProduct({commit}, product) {
      commit('REMOVE_PRODUCT', product)
    },
  },
  getters: {
    products: state => state.products
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
