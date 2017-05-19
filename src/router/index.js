import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Image from '@/components/Image.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/image',
      name: 'image',
      component: Image
    }
  ]
})
