<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import PageFooter from './Footer.vue';

export default {
  name: 'app',
  components:{
    'Navigation': Navigation,
    'PageFooter': PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
