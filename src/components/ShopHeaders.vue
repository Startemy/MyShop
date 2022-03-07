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
            <label class="gamburger" for="burger" @click="displayMenu()">
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
          <div class='quant'>{{ CartCount }}</div>
          <div class='cart_preview' v-on:="hidden()">
            <ul>
              <li>Наименование</li>
              <li>Количество</li>
              <li>Цена за шт.</li>
              <li>Итого</li>
            </ul>
              <CartPreview  v-for="item of cart" :key="item.id" :prodincart="item" />
              <p>Итого в корзине на сумму: $<span class="ttl_price">{{ totalPrice() }}</span></p>
          </div>

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
  computed: {
    CartCount() {
      return this.$store.getters.getCartCount
    },
    cart() {
      return this.$store.getters.getCart
    },
  },

  methods: {
      /**Цена ИТОГО */
  totalPrice() {
    setTimeout(() => {
      let li = document.querySelectorAll('.cart_preview > ul > li')
      li.forEach(function(totpr) {
        if(totpr.classList.contains('total_price')) {
          let total = 0;
          let ttlPrc = document.querySelectorAll('.total_price')
            for(let i = 0; i < ttlPrc.length; i++) {
              total += Number(ttlPrc[i].textContent.match(/\d+/));
            }
          document.querySelector('.ttl_price').innerHTML = total;
        }else if(!totpr.classList.contains('total_price')) {
          document.querySelector('.ttl_price').innerHTML = 0;
        }
      });
    }, 5);
  },
    /**Появление превью корзины при  наведении */
    hidden() {
      let orderPrvw = document.querySelector('.cart_preview')
      orderPrvw.style.display = 'none';
      document.querySelector('.quant').addEventListener('mouseover', function(){
        orderPrvw.style.display = 'block';
      });
      setTimeout(function(){
        document.querySelector('.quant').addEventListener('mouseout', function(){
          orderPrvw.style.display = 'none';
        });
      }, 1000);
    },

    hiddenMenu() {
    let menu = document.querySelector('.menu-shell');
    menu.classList.add('hidden');
    },
    displayMenu() {
        let menu = document.querySelector('.menu-shell');
        if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      } else {
        setTimeout(function () {
          menu.classList.add('hidden');
        }, 450);
      }
    }
  },

  mounted() {
    this.hidden();
    this.hiddenMenu();
  }
}
</script>

<style>

</style>