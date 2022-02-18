<template>
  <div id="app">
    <ShopHeaders v-bind:incart="cart"/>
    <main class="main">
      <router-view v-bind:product="catalog" v-bind:incart="cart" v-on:added="addtocart" v-on:remove="removeFromCart"/>
    </main>
    <ShopFooter />
  </div>
</template>

<script>
import ShopHeaders from './components/ShopHeaders.vue'
import ShopFooter from './components/ShopFooter.vue'

export default {
  components: {
    ShopHeaders,
    ShopFooter
  },

  data() {
    return{
    catalog: [],
    cart: []
    }
  },

  mounted() {
    this.catalog = [
      {id:1, picture: require('./assets/image/orders/for_man/blue_jaket.png'), title:"ELLERY X M'O CAPSULE", desc:'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price:10000.00},
      {id:2, picture: require('./assets/image/orders/for_women/black_suit.png'), title:"ELLERY X M'O CAPSULE", desc:'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price:9000.00},
      {id:3, picture: require('./assets/image/orders/for_man/man_panama.png'), title:"ELLERY X M'O CAPSULE", desc:'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',price: 8000.00},
      {id:4, picture: require('./assets/image/orders/for_man/man_shirt.png'), title:"ELLERY X M'O CAPSULE", desc:'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price:7000.00},
      {id:5, picture: require('./assets/image/orders/for_women/blue_jaket.png'), title:"ELLERY X M'O CAPSULE", desc:'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price:6000.00},
      {id:6, picture: require('./assets/image/orders/for_women/grey_shirt.png'), title:"ELLERY X M'O CAPSULE", desc:'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price:5000.00}
      ]

    this.cart = JSON.parse(window.localStorage.getItem('cartlist')) || [];
  },

  methods: {
    addtocart(id) {
      const product = this.catalog.find((item) => item.id == id)
      this.cart.push(product)
      window.localStorage.setItem('cartlist', JSON.stringify(this.cart))
    },
    removeFromCart(id){
      const findId = this.cart.findIndex((item) => item.id == id)
      this.cart.splice(findId, 1)
      window.localStorage.setItem('cartlist', JSON.stringify(this.cart))
    }
  },
}
</script>


<style lang="scss">
@import './scss/modules/mixin';
@import './scss/modules/animation';

$brand-color: #F16D7F;

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Lato', sans-serif;
    font-style: normal;
}
.container{
    max-width: 1160px;
    min-width: 374px;
    margin: 0 auto;
    padding: 0 10px;
}

.main{
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
}

@import './scss/section/header';
@import './scss/pages/index';
@import './scss/pages/catalog';
@import './scss/pages/product';
@import './scss/section/product-card';
@import './scss/section/form';
@import './scss/pages/cart';
@import './scss/pages/registration';
@import './scss/section/footer';
</style>
