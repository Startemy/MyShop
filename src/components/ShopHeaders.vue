<template>
  <header class="header">
    <section class="container">
      <nav>
        <ul class="header__leftpart">
          <li>
            <router-link to="/">
              <img src="../assets/image/head/logo.png" alt="logo">
            </router-link>
          </li>
          <li>
            <a href="#">
              <img src="../assets/image/head/find.svg" alt="find">
            </a>
          </li>
        </ul>
        <ul class="header__rightpart header__quantity-pos">
          <li>
            <input class="burger-input" id="burger" type="checkbox">
            <label class="gamburger" for="burger">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <Menu />
          </li>
          <li>
            <router-link to="/registration">
              <img src="../assets/image/head/login_logo.svg" alt="login_logo">
            </router-link>
          </li>
          <li>
            <router-link to="/cart">
              <img src="../assets/image/head/cart_logo.svg" alt="cart_logo">
            </router-link>
          </li>
          <div class='quant'>0</div>
          <!--<CartPreview v-for="item of incart" v-bind:key="item.id" v-bind:prodincart="item"/>-->
        </ul>
      </nav>
    </section>
  </header>
</template>


<script>
import CartPreview from './CartPreview.vue'
import Menu from './Menu.vue'

export default {
  components: { CartPreview, Menu },
  name: 'ShopHeaders',
  props:[
    'incart'
  ]
}
</script>

<style>

</style>