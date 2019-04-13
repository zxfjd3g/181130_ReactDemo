import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement, incrementAsync} from '../redux/actions'
import Counter from '../components/Counter'
/*
容器组件
包装UI组件生成容器组件
 */

/*
用来给UI组件指定一般属性的
返回对象中的所有属性(属性值是非函数)都会分别传递给UI组件
<Counter {...mapStateToProps(store.getState())}/>
 */
function mapStateToProps(state) {
  return {
    count: state
  }
}

/*
用来给UI组件指定函数属性的
返回对象中的所有属性(属性值是函数)都会分别传递给UI组件
<Counter {...mapDispatchToProps(store.dispatch)}/>
 */
function mapDispatchToProps (dispatch) {
  return {
    // 一旦被调用就会触发reducer调用产生新的状态, 且会自动更新相应组件
    increment: (number) =>  dispatch(increment(number)),
    decrement: (number) =>  dispatch(decrement(number)),
    incrementAsync: (number) =>  dispatch(incrementAsync(number)),
  }
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
  state => ({count: state}),
  {increment, decrement, incrementAsync} // UI组件接收的函数属性的属性名必须action的名称一致
)(Counter)


/*
export default connect(
  state => ({count: state}),
  {increment, decrement}
)(Counter)
*/


/*
Counter: UI组件
connect(
  函数,   // 指定一般属性
  对象/函数   // 指定函数属性
)(Counter): 返回容器组件 connect(Counter)
 */

/*
UI组件: 用来显示界面的组件, 接收容器组件传入的属性
容器组件: 通过connect生成的组件, 向UI组件传递属性数据(一般/函数)
 */
