/*
包含n个用于创建action的工厂函数(action creator)
 */
import {
  INCREMENT,
  DECREMENT
} from './action-types'

/*
返回代表增加的action的action creator
增加的同步action
 */
export const increment = (number) => ({type: INCREMENT, number})

/*
返回代表减少的action的action creator
减少的同步action
 */
export const decrement = (number) => ({type: DECREMENT, number})

/*
异步action
返回值是一个带dispatch参数的函数
    1). 执行异步代码
    2). 执行完成后, 分发同步action
 */
export function incrementAsync (number) {
  return dispatch => { // 回调函数
    // 执行异步代码
    setTimeout(() => {
      // 分发一个同步action
      dispatch(increment(number))
    }, 1000)
  }
}