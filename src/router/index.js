import Vue from 'vue'
import Router from 'vue-router'
import myHome from '@/components/home'
import myRecommend from '@/components/recommend'
import myConsult from '@/components/consult'
import myDownload from '@/components/download'
import myWe from '@/components/we'
import myBrowser from '@/components/browser'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/browser"
    },
    {
      path: '/home',
      name: 'home',
      component: myHome
    },
    {
      path: "/recommend",
      name: "recommend",
      component: myRecommend
    },
    {
      path: "/consult",
      name: "consult",
      component: myConsult
    },
    {
      path: "/download",
      name: "download",
      component: myDownload
    },
    {
      path: "/we",
      name: "we",
      component: myWe
    },
    {
      path: "/browser",
      name: "browser",
      component: myBrowser
    },
  ]
})
