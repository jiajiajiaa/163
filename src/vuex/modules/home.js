import { reqHome } from '../../api/index'
import {
  RECEIVE_HomeData
} from '../mutations-types'
const state = {
  homeData: {}
}
const mutations = {
  [RECEIVE_HomeData](state,homedata){
    state.homeData = homedata
  }
}
const actions = {
  //保存主页数据
  async getShopNav({commit}){
    const result = await reqHome()
    if (result.code===0) {
      const homedata = result.data
      commit(RECEIVE_HomeData, homedata)
    }
  }
}
const getters = {
  
}


export default {
  state,
  actions,
  mutations,
  getters
}