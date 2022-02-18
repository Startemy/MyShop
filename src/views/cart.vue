<template>
  <section class="main__grow">
    <section id="page-title" class="page-title">
      <div class="page-title__heading container">
        <p>SHOPPING CART</p>
      </div>
    </section>
    <section class="cart container">
      <section class="cart__list">

        <ProductInCart v-for="item of incart" v-bind:key="item.id" v-bind:prodincart="item">
          <button v-on:click="remove(item.id)">
            <img src="../assets/image/icons/X.svg" alt="close">
          </button>
        </ProductInCart>

        <form class="cart__list-btnbox">
          <button>CLEAR SHOPPING CART</button>
          <button>CONTINUE SHOPPING</button>
        </form>
      </section>
      <section id="shipping-form">
        <form class="form" action="#">
          <div>
            <h2>SHIPPING ADRESS</h2>
            <input type="text" placeholder="Bangladesh">
            <input type="text" placeholder="State">
            <input type="number" placeholder="Postcode/Zip">
            <button>GET A QUOTE</button>
          </div>
          <div>
            <div>
              <p>SUB TOTAL<span>$900</span></p>
              <p class="grand">GRAND TOTAL <span>$900</span></p>
              <div></div>
              <button>PROCEEDTO CHECKOUT</button>
            </div>
          </div>
        </form>
      </section>
    </section>
  </section>
</template>


<script>
import ProductInCart from '../components/ProductInCart.vue'

export default {
  components: {
    ProductInCart,
  },
  name: 'cart',
  props:[
    'incart',
    'product'
  ],
  methods: {
    remove(id){
      this.$emit('remove', id);
    }

  }
}
</script>

<style>

</style>