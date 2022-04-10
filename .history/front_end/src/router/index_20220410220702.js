import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld1 from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld1
    }
  ]
})
