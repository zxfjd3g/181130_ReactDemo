import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../redux/actions'
import Counter from '../components/Counter'
/*
容器组件
包装UI组件生成容器组件
 */
export default connect(
  state => ({count: state}),
  {increment, decrement}
)(Counter)

// connect()(Counter): 返回的就是包装生成的容器组件
