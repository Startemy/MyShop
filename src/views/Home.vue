<template>
<main class="main">
  <section class="billboard">
    <div class="billboard__flex container">
      <div class="billboard__title">
          <h1>THE BRAND
            <span>OF&nbsp;LUXERIOUS
              <span class="billboard__title__fashion">FASHION</span>
            </span>
          </h1>
      </div>
    </div>
  </section>

  <section>
    <nav class="stocks container">
      <a href="#" class="stocks__fw">
        <p class="stocks--width">30% off <span> for&nbsp;women</span></p>
      </a>
      <a href="#" class="stocks__fm">
        <p class="stocks--width">hot deal <span>for&nbsp;men</span></p>
      </a>
      <a href="#" class="stocks__fk">
        <p class="stocks--width">new arrivals <span>for&nbsp;kids</span></p>
      </a>
      <a href="#" class="stocks__ac">
        <p class="stocks--width-ac">luxirous & trendy <span>accesories</span></p>
      </a>
    </nav>
  </section>

  <section class="product-card container">
    <h2>Fetured Items</h2>
    <p>Shop for items based on what we featured in this week</p>

    <!--Вывод товаров-->
    <section class='products'>
    <productCard />
    </section>

    <nav class="proposal__btn-catalog">
      <a href="#">Browse All Product</a>
    </nav>
  </section>

</main>

</template>

<script>
import productCard from '../components/productCard.vue'

export default {
  components: {
    productCard
  }
}

</script>
