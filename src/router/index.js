import Vue from 'vue'
import Router from 'vue-router'
import myHome from '@/components/home/home'
import myProject from '@/components/project/project'
import myInformation from '@/components/information/information'
import myScene from '@/components/scene/scene'
import myProduct from '@/components/product/product'
import myDeveloper from '@/components/developer/developer'
import myBook from '@/components/book/book'
import myBrowser from '@/components/browser/browser'
import myTechnology from '@/components/technology/technology'
import myBigdata from '@/components/bigdata/bigdata'
import myInfo1 from '@/components/information/info1'
import myInfo2 from '@/components/information/info2'
import myInfo from '@/components/information/info'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: myHome
    },
    {
      path: "/project",
      name: "project",
      component: myProject
    },
    {
      path: "/information",
      name: "information",
      component: myInformation
    },
    {
      path: "/scene",
      name: "scene",
      component: myScene
    },
    {
      path: "/product",
      name: "product",
      component: myProduct
    },
    {
      path: "/developer",
      name: "developer",
      component: myDeveloper
    },
    {
      path: "/book",
      name: "book",
      component: myBook
    },
    {
      path: "/browser",
      name: "browser",
      component: myBrowser
    },
    {
      path: "/technology",
      name: "technology",
      component: myTechnology
    },
    {
      path: "/bigdata",
      name: "bigdata",
      component: myBigdata
    },
    {
      path: "/info1",
      name: "info1",
      component: myInfo1
    },
    {
      path: "/info2",
      name: "info2",
      component: myInfo2
    },
    {
      path: "/info",
      name: "info",
      component: myInfo
    },
  ]
})
