const Home = () => import('../pages/Home/Home.vue')

const Category = () => import('../pages/Category/Category.vue')
const Categorylist = () => import('../pages/Category/Categorylist/Categorylist.vue')

const Things = () => import('../pages/Things/Things.vue')
const Find = () => import('../pages/Things/Find/Find.vue')
const Firstview = () => import('../pages/Things/Find/Firstview/Firstview.vue')
const Expert = () => import('../pages/Personal/Login/Login.vue')

const Shopcar = () => import('../pages/Shopcar/Shopcar.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Search = () => import('../pages/Search/Search.vue')
const Login = () => import('../pages/Personal/Login/Login.vue')

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