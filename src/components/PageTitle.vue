<template>
  <section id="page-title" class="page-title">
    <div class="page-title__heading container">
      <p>{{ PageTitle }} </p>
      <div class="page-title__crumbs">
        <router-link to="/">HOME / </router-link>
        <router-link to="/catalog">CATALOG</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',
  props: [
    'PageTitle'
  ],

}
</script>

<style>

</style>