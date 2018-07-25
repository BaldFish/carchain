// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';

Vue.use(Vuex);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    articleData:{},
    blockData: {},
    assetData:{},
    tradeData:{},
    accountBalanceData:{},
    searchInput:"",
    searchType:"",
  },
  mutations: {
    changeArticleData(state, params){
      state.articleData = params;
      window.sessionStorage.setItem("articleData", JSON.stringify(state.articleData))
    },
  }
});
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
