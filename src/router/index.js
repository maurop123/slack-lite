import Vue from 'vue'
import Router from 'vue-router'
import ChatPage from '@/components/ChatPage'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: ChatPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})
