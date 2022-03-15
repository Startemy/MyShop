<template>
  <div>
    <a href="#">
      <img :src="prodincart.picture" :alt="prodincart.id">
    </a>
    <div>
      <h2><a href="#">{{ prodincart.title }}</a></h2>
      <p>Price:
        <span class="color-price">${{ prodincart.price * prodincart.quantity }}</span>
      </p>
      <p>Colore:
        <span>blue</span>
      </p>
      <p>Size:
        <span>XL</span>
      </p>
      <p>Quantity:
        <input type="number" v-model="quantity"  min="1">
      </p>
    </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ProductInCart',
  props:['prodincart'],
  computed: {
      quantity: {
      get() {
        return this.prodincart.quantity
      },
      set(value) {
        this.$store.dispatch('setQuantity', {id: this.prodincart.id, quantity: Number(value)})
      }
    }
  },
}
</script>

<style>

</style>