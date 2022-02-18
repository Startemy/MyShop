<template>
  <section class="main__grow">
    <section id="page-title" class="page-title">
      <div class="page-title__heading container">
        <p>NEW ARRIVALS </p>
        <div class="page-title__crumbs">
          <router-link to="/">HOME / </router-link>
          <router-link to="/catalog">CATALOG</router-link>
        </div>
        <!--Разобрать как вывести ссылки иерархии от корня-->
      </div>
    </section>
    <section id="catalog" class="container">
        <!--Найти как закрывать фильтр вне фокуса-->
    <section id="FILTER">
      <div class="filter">
        <details class="filter__space">
          <summary class="filter__title">
            <h2>FILTER</h2>
            <svg viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" />
            </svg>
          </summary>
          <div class="filter__content">
            <details>
              <summary class="filter__content--space">CATEGORY</summary>
              <ul>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Denim</a></li>
                <li><a href="#">Hoodies & Sweatshirts</a></li>
                <li><a href="#">Jackets & Coats</a></li>
                <li><a href="#">Polos</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Sweaters & Knits</a></li>
                <li><a href="#">T-Shirts</a></li>
                <li><a href="#">Tanks</a></li>
              </ul>
            </details>
            <details>
              <summary class="filter__content--space">BRAND</summary>
              <ul>
                <li><a href="#">Story</a></li>
              </ul>
            </details>
            <details>
              <summary class="filter__content--space">DESIGNER</summary>
              <ul>
                <li><a href="#">StArtemy</a></li>
              </ul>
            </details>
          </div>
        </details>
        <div class="filter__exception">
          <div class="filter__exception-flex">
            <h2>TRENDING NOW</h2>
            <ul class="filter__exception-flex--space">
              <li><label for="Bags"><input id="Bags" type="checkbox">Bags</label></li>
              <li><label for="Hats"><input id="Hats" type="checkbox">Hats</label></li>
              <li><label for="Pans"><input id="Pans" type="checkbox">Pans</label></li>
              <li><label for="Shirts"><input id="Shirts" type="checkbox">Shirts</label></li>
            </ul>
          </div>
          <div class="filter__exception-flex">
            <h2>SIZE</h2>
            <ul class="filter__exception-flex--space">
              <li><label for="xs"><input id="xs" type="checkbox">XS</label></li>
              <li><label for="s"><input id="s" type="checkbox">S</label></li>
              <li><label for="m"><input id="m" type="checkbox">M</label></li>
              <li><label for="l"><input id="l" type="checkbox">L</label></li>
            </ul>
          </div>
          <div class="filter__exception-flex">
            <h2>PRICE</h2>
            <ul class="filter__exception-flex--space">
              <li><label for="prisce-1"><input id="prisce-1" type="checkbox">>1000</label></li>
              <li><label for="price-3"><input id="price-3" type="checkbox">>3000</label></li>
              <li><label for="price6"><input id="price6" type="checkbox">>6000</label></li>
              <li><label for="price8"><input id="price8" type="checkbox">>8000</label></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

        <section class="product-card">
          <section>
            <ProductCard v-for="item of product" v-bind:key="item.id" v-bind:products="item">
              <button v-on:click="buy(item.id)">
                <img src="../assets/image/head/cart_logo.svg" alt="cart_logo__btn">
                Add to Cart
              </button>
            </ProductCard>
          </section>
          <section class="pagination">
            <ul>
              <li><a href="#"></a><img src="../assets/image/icons/pagination_arrow_left.svg" alt="pagarr"></li>
              <li><a href="#"></a>1</li>
              <li><a href="#"></a>2</li>
              <li><a href="#"></a>3</li>
              <li><a href="#"></a>4</li>
              <li><a href="#"></a>5</li>
              <li><a href="#"></a>6</li>
              <li><a href="#"></a><img src="../assets/image/icons/pagination_arrow_right.svg" alt="pagarr"></li>
            </ul>
          </section>
        </section>
    </section>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components:{
    ProductCard,
  },
  name: 'catalog',
  props:[
  'product',
  'incart'
  ],
  methods: {
    buy(id) {
      this.$emit('added', id);
    }
  }

}
</script>

<style>

</style>