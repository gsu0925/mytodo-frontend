import Vue from 'vue' // 1. Vue를 사용할 수 있도록 import
import Router from 'vue-router' // 2. Router를 사용할 수 있도록 import
import Hello from '@/components/Hello' // 3. 경로 설정을 원하는 컴포넌트를 import
import About from '@/components/About' // 3. 경로 설정을 원하는 컴포넌트를 import

// 4. Vue에게 Router를 사용하라고 알려준다.
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about', // ~~/about 경로에 맵핑
      name: 'about',
      component: About // About.vue를 맵핑
    }
  ]
})
