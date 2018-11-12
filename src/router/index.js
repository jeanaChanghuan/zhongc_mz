import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import HomeBody from '@/pages/home/HomeBody'
import Product from '@/pages/product/Product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:"/index",
      children:[
      	{
      		path:'index',
      		component:HomeBody
      	},
      	{
      		path:'product',
      		component:Product
      	},

      ]
    }
  ]
})
