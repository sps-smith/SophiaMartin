<template>
  <div id="app">
    <PageHeader ></PageHeader>
    <div id="content">
      <router-view></router-view>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from './Footer.vue';
import PageHeader from './Header.vue'

export default {
  name: 'app',
  components:{
    'PageFooter': PageFooter,
    'PageHeader': PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  width: 100%;
  display: flex;
}
</style>
