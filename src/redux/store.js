/*
redux最核心管理对象模块: store
内部管理:
    state: 状态数据
    reducer: 用来根据原有state来计算返回新的state的函数
 */
import {createStore} from 'redux'
import {count} from './reducer' // count就是一个reducer

export default createStore(count) // 创建store对象, store内部第一次调用reducer得到初始状态值并保存