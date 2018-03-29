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
import myDownload from '@/components/download/download'
import myWe from '@/components/we/we'

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
      path: "/download",
      name: "download",
      component: myDownload
    },
    {
      path: "/we",
      name: "we",
      component: myWe
    },
  ]
})
