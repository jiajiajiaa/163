import ajax from './ajax'

const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';

export const reqHome = () => ajax('/home')
export const reqCategorylist = () => ajax('/categorylist')

export const reqRecommendTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`)

export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`)
