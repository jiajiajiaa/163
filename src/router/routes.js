import Home from '../pages/Home/Home.vue'

import Category from '../pages/Category/Category.vue'
import Categorylist from '../pages/Category/Categorylist/Categorylist.vue'

import Things from '../pages/Things/Things.vue'
import Find from '../pages/Things/Find/Find.vue'
import Firstview from '../pages/Things/Find/Firstview/Firstview.vue'
import Expert from '../pages/Things/Expert/Expert.vue'

import Shopcar from '../pages/Shopcar/Shopcar.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Personal/Login/Login.vue'

export default [
  {
    path:'/home',
    component: Home
  },
  {
    path: '/category',
    component: Category,
    children:[
      {
        path:'/category/categorylist',
        component: Categorylist
      },
      {
        path: '',
        redirect: '/category/categorylist'
      }
    ]
  },
  {
    path: '/things',
    component: Things,
    children:[
      {
        path:'/things/find',
        component:Find,
        children:[
          {
            path: '/things/find/firstview',
            component: Firstview
          },
          {
            path: '',
            redirect: '/things/find/firstview'
          },
        ]
      },
      {
        path:'/things/expert',
        component:Expert
      }
    ]
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/personal',
    component: Personal,
    children:[
      {
        path:'/personal/login',
        component: Login,
        meta:{ isshow:true }
      },
      {
        path:'',
        redirect: '/personal/login'
      }
    ]
  },
  {
    path: '/search',
    component: Search
  },
  {
    path:'',
    redirect:'/home'
  }
]