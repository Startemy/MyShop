<template>
  <div id="app">
    <ShopHeaders />
    <main class="main">
      <router-view />
    </main>
    <ShopFooter />
  </div>
</template>

<script>
import ShopHeaders from './components/ShopHeaders.vue'
import ShopFooter from './components/ShopFooter.vue'
import CartPreview from './components/CartPreview.vue'

export default {
  components: {
    ShopHeaders,
    ShopFooter
  },

  mounted() {
      this.$store.dispatch('loadCatalog')
      this.$store.dispatch('loadCart')
  },

  methods: {
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
@import './scss/modules/media1024';
@import './scss/modules/media650';
</style>
