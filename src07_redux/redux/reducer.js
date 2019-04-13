/*
包含n个reducer函数的模块
 */
import {
  INCREMENT,
  DECREMENT
} from './action-types'

/*
管理count状态数据的reducer函数
 */
const initCount = 1
export function count(state = initCount, action) {
  console.log('count', state, action)
  switch (action.type) {
    case INCREMENT: // 增加
      return state + action.number
    case DECREMENT: // 减少
      return state - action.number
    default:
      return state
  }

}