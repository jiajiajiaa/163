import {
  reqHotSearch,
  reqSearchResult
} from '../../api/index'

import {
  RECEIVE_HOTSEARCH,
  RECEIVE_SEARCHKEYLIST
} from '../mutations-types'

const state = {
  hotsearch: {},
  searchKeyList:[]
}

const mutations = {
  [RECEIVE_HOTSEARCH](state, hotsearch) {
    state.hotsearch = hotsearch
  },
  [RECEIVE_SEARCHKEYLIST](state, searchKeyList) {
    state.searchKeyList = searchKeyList
  },
}

const actions = {
  //保存热搜数据
  async getHotSearch({commit}){
    const result = await reqHotSearch()
    if (result.code==='200') {
      const hotsearch = result.data
      commit(RECEIVE_HOTSEARCH, hotsearch)
    }
  },

  //保存实时搜索结果
  async getSearchResult({commit},data){
    const result = await reqSearchResult(data)
    if (result.code==='200') {
      const searchKeyList = result.data
      commit(RECEIVE_SEARCHKEYLIST, searchKeyList)
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