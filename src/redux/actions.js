/*
包含n个用于创建action的工厂函数(action creator)
 */

/*
返回代表增加的action的action creator
增加的action
 */
export const increment = (number) => ({type: 'INCREMENT', number})

/*
返回代表减少的action的action creator
减少的action
 */
export const decrement = (number) => ({type: 'DECREMENT', number})