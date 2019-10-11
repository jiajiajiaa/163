import {
  reqCategorylist
} from '../../api/index'
import {
  RECEIVE_currentCategory,
  RECEIVE_categoryGroupList,
  RECEIVE_categoryL1List,
  RECEIVE_categoryL2List
} from '../mutations-types'
const state = {
  currentCategory:[],
  categoryGroupList:[],
  categoryL1List:[],
  categoryL2List:[]
}
const mutations = {
  [RECEIVE_currentCategory](state, currentCategory) {
    state.currentCategory = currentCategory
  },
  [RECEIVE_categoryGroupList](state, categoryGroupList) {
    state.categoryGroupList = categoryGroupList
  },
  [RECEIVE_categoryL1List](state, categoryL1List) {
    state.categoryL1List = categoryL1List
  },
  [RECEIVE_categoryL2List](state, categoryL2List) {
    state.categoryL2List = categoryL2List
  },
}
const actions = {
  //保存主页数据
  async getCategorylist({commit}){
    const result = await reqCategorylist()
    if (result.code===0) {
      const currentCategory = result.data.currentCategory
      const categoryGroupList = result.data.categoryGroupList
      const categoryL1List = result.data.categoryL1List
      const categoryL2List = result.data.categoryL2List
      commit(RECEIVE_currentCategory, currentCategory)
      commit(RECEIVE_categoryGroupList, categoryGroupList)
      commit(RECEIVE_categoryL1List, categoryL1List)
      commit(RECEIVE_categoryL2List, categoryL2List)
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