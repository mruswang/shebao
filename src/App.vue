<template>
  <div id="app">
    <admin v-if="islogin===true"></admin>
    <login v-else></login>
  </div>
</template>

<script>
import login from '@/components/login/login'
import admin from '@/components/admin'
// import {getCookie} from './cookies.js'
export default {
  name: 'App',
  data () {
    return {
      islogin: true
    }
  },
  components: {
    login, admin
  },
  created () {
    // this.islogin = getCookie('name')
  }
}
</script>

<style>
html,body{
  /*width: 100%;*/
  /*height: 100%;*/
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*width: 100%;*/
  /*height: 100%;*/
}
@import "@/assets/less/font-awesome.less";

</style>
