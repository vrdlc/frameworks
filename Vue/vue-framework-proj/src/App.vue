<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/account">Account</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
    <!-- <app-user></app-user> -->
    <router-view></router-view>
    <p>test</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
