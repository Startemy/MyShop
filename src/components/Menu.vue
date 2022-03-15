<template>
  <div class="menu-shell hidden">
    <div class="menu-box">
      <h2>MENU</h2>
      <h3>MAN</h3>
      <ul>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Bags</a></li>
        <li><a href="#">Denim</a></li>
        <li><a href="#">T-Shirts</a></li>
      </ul>
      <h3>WOMEN</h3>
      <ul>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Jackets & Coats</a></li>
        <li><a href="#">Polos</a></li>
        <li><a href="#">T-Shirts</a></li>
        <li><a href="#">Shirts</a></li>
      </ul>
      <h3>KIDS</h3>
      <ul>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Jackets & Coats</a></li>
        <li><a href="#">Polos</a></li>
        <li><a href="#">T-Shirts</a></li>
        <li><a href="#">Shirts</a></li>
        <li><a href="#">Bags</a></li>
      </ul>
      <h3>NAVIGATION</h3>
      <ul>
        <li><router-link to="/catalog">Catalog</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
        <li><router-link to="/registration">Registation</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style>

</style>