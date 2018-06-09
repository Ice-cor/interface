import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '../signIn'
import Home from '../home'
import ListInfo from '../listInfo'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/listinfo',
      component: ListInfo
    }
  ]
})
