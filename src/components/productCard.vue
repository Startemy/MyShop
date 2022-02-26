<template>
  <div>
    <div class="product-card__img">
      <!--Добавить ссылку на затемняющую картинку-->
      <router-link :to="`${ products.id }`">
        <img :src="products.picture" :alt="products.id">
      </router-link>
    <slot></slot>
    </div>
    <article>
      <!--Добавить ссылку по id-->
      <h2><router-link :to="`${ products.id }`">{{ products.title }}</router-link></h2>
      <p>{{ products.desc }}</p>
      <strong>{{ products.price }} $</strong>
    </article>
  </div>
</template>

<script>
export default {
  name:'ProductCard',
  props:[
    'products'
  ],
}
</script>
