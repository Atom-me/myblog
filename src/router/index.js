import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ShowBlog from '@/components/ShowBlog'
import AddBlog from '@/components/AddBlog'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'root',
    redirect:'/show' //redirect 访问根目录直接跳转到/show路由
  },
  {
    path: '/show',
    name: 'name-show',
    component: ShowBlog
  },
  {
    path: '/add',
    name: 'name-add',
    component: AddBlog
  }
]

const router = new VueRouter({
  routes
})

export default router
