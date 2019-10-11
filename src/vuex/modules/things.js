import {
  reqRecommendTabs,
  reqRecommendData
} from '../../api/index'
import {
  RECEIVE_NAVDATA,
  RECEIVE_RECOMMENDDATA
} from '../mutations-types'
const state = {
  navData: [],
  recommendData:[]
}
const mutations = {
  [RECEIVE_NAVDATA](state, navData) {
    state.navData = navData
  },
  [RECEIVE_RECOMMENDDATA](state, recommendData) {
    state.recommendData = recommendData
  }
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
      const recommendData = result.data[0].topics
      commit(RECEIVE_RECOMMENDDATA, recommendData)
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