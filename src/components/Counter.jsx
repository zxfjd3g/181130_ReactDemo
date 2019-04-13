import React, {Component} from 'react'
import PropTypes from 'prop-types'
/*
UI组件: 不使用redux任何相关代码, 专门显示界面的
 */
export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.increment(number)
  }
  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.decrement(number)
  }

  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.props.count
    if(count%2===1) {
      this.props.increment(number)
    }

  }
  incrementAsync = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.incrementAsync(number)
  }

  render() {
    const count = this.props.count // redux中管理的状态数据就是count值

    return (
      <div>
        <p>click {count}</p>

        <select ref='numberSelect'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}