<template>
  <div id="app">
    <h1 class="headline">Sweet Shopping Cart</h1>
    <cart />
    <products-list />
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
import ProductsList from './components/ProductsList.vue'

export default {
  name: 'App',
  components: {
    Cart,
    ProductsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin: 60px auto;
  max-width:556px;
}

.headline {
  text-align: center;
}
</style>
