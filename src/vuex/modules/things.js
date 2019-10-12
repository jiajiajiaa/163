import {
  reqRecommendTabs,
  reqRecommendData,
  reqLazyData
} from '../../api/index'
import {
  RECEIVE_NAVDATA,
  RECEIVE_RECOMMENDDATA,
  RECEIVE_LAZYDATA
} from '../mutations-types'
const state = {
  navData: [],
  recommendData:[],
  lazyData:[]
}
const mutations = {
  [RECEIVE_NAVDATA](state, navData) {
    state.navData = navData
  },
  [RECEIVE_RECOMMENDDATA](state, recommendData) {
    state.recommendData = recommendData
  },
  [RECEIVE_LAZYDATA](state, lazyData) {
    state.lazyData = lazyData
  },
}

const actions = {
  //保存导航数据
  async getNavData({commit}) {
    const result = await reqRecommendTabs()
    if (result.code === '200') {
      const navData = result.data
      commit(RECEIVE_NAVDATA, navData)
    }
  },

  //保存推荐内容数据
  async getRecommendData({commit}) {
    const result = await reqRecommendData()
    if (result.code === '200') {
      const recommendData = result.data
      commit(RECEIVE_RECOMMENDDATA, recommendData)
    }
  },

  //保存懒加载获取的数据
  async getLazyData({commit},{page}) {
    const result = await reqLazyData(page,2)
    if (result.code === '200') {
      const lazyData = result.data.result
      commit(RECEIVE_LAZYDATA, lazyData)
    }
  },
}
const getters = {

}


export default {
  state,
  actions,
  mutations,
  getters
}