import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import home from './modules/home'
import categoryList from './modules/categoryList'
import things from './modules/things'

Vue.use(Vuex)
export default new Vuex.Store({
  mutations, //总mutations
  actions, // 总actions
  getters,
  modules: {
    home,
    categoryList,
    things
  }
})