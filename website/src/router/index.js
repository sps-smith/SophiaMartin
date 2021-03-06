import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Books from '@/components/Books'
import Sermons from '@/components/Sermon'
import BookLaunch from '@/components/BookLaunch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: "Home"
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Contact',
      component: Contact
    },
    {
      path: '/Books',
      component: Books
    },
    {
      path: '/Sermons',
      component: Sermons
    },
    {
      path: '/BookLaunch',
      component: BookLaunch
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
