<template>
  <section class="main__grow">
    <PageTitle PageTitle="CART" />
    <section class="cart container">
      <section class="cart__list">

        <ProductInCart v-for="item of cart" :key="item.id" :prodincart="item">
          <button @click="remove(item.id)">
            <img src="../assets/image/icons/X.svg">
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
              <p>SUB TOTAL<span>${{ totalPrice }}</span></p>
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
import PageTitle from '../components/PageTitle.vue'

export default {
  components: {ProductInCart,PageTitle},
  name: 'cart',
  props:['PageTitle'],
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
  },
  methods: {
    remove(id) {
      this.$store.dispatch('removeFromCart', id)
    },
  }
}
</script>

<style>

</style>