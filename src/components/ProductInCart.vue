<template>
  <div>
    <a href="#">
      <img :src="prodincart.picture" :alt="prodincart.id">
    </a>
    <div>
      <h2><a href="#">{{prodincart.title}}</a></h2>
      <p>Price:
        <span class="color-price">${{prodincart.price}}</span>
      </p>
      <p>Colore:
        <span>blue</span>
      </p>
      <p>Size:
        <span>XL</span>
      </p>
      <p>Quantity:
        <input type="number" min="1" max="10" name="quantity__cart" value="1">
      </p>
    </div>
    <!--Кнопку удалить товар лучше позишном или мерджином-->
    <form action="#">
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductInCart',
  props:[
    'prodincart'
  ]
}
</script>

<style>

</style>