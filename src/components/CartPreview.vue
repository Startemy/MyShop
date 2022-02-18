<template>
  <div class='cart_preview'>
    <ul>
      <li>Наименование товара</li>
      <li>Количество</li>
      <li>Цена за шт.</li>
      <li>Итого</li>
    </ul>
      <ul>
      <li>{{prodincart.title}}</li>
      <li>1</li>
      <li>{{prodincart.price}}</li>
      <li>{{prodincart.price}}</li>
    </ul>
    <p>Итого в корзине на сумму: {{prodincart.price}}$<span class="ttl_price"></span></p>
  </div>
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