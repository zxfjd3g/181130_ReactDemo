/*
包含n个reducer函数的模块
 */

/*
管理count状态数据的reducer函数
 */
export function count(state = 1, action) {
  console.log('count', state, action)
  switch (action.type) {
    case 'INCREMENT': // 增加
      return state + action.number
    case 'DECREMENT': // 减少
      return state - action.number
    default:
      return state
  }

}