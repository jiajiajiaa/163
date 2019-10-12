import ajax from './ajax'

const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';

export const reqHome = () => ajax('/home')

export const reqCategorylist = () => ajax('/categorylist')

export const reqRecommendTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`)

//获取识物数据
export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`)

//获取搜索时的热搜数据
export const reqHotSearch = () => ajax(`${prefix}/xhr/search/init.json`,'POST')

// 获取搜索结果
export const reqSearchResult = (keywordPrefix) => ajax(`${prefix}/xhr/search/searchAutoComplete.json`, {keywordPrefix});
//{keywordPrefix} = {keywordPrefix:xx}

//数据懒加载
export const reqLazyData = (page,size) => ajax(`${prefix}/topic/v1/find/recAuto.json`,{page,size})
