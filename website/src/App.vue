<template>
  <div id="app">
    <!-- <Navigation></Navigation> -->
    <PageHeader ></PageHeader>
    <router-view></router-view>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
// import Navigation from './Navigation.vue';
import PageFooter from './Footer.vue';
import PageHeader from './Header.vue'

//import State from './Navigation.vue';

export default {
  name: 'app',
  data(){
    return {
      visibility: ""
    }
  },
  components:{
    // 'Navigation': Navigation,
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
  text-align: center;
  color: #2c3e50;
  position: relative;
  margin-top:60px;
}
</style>
