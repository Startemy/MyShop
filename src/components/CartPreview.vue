<template>
      <ul>
      <li>{{ prodincart.title }}</li>
      <li>{{ prodincart.quantity }}</li>
      <li>{{ prodincart.price }}</li>
      <li class="total_price">{{ prodincart.quantity * prodincart.price }}</li>
    </ul>
</template>

<script>
export default {
  name: 'CartPreview',
  props: [
    'prodincart'
  ],
}
</script>

<style>

</style>