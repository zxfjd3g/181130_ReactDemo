import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {increment, decrement} from './redux/actions'

export default class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    // 告诉store去更新count
    this.props.store.dispatch(increment(number))
  }
  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.store.dispatch(decrement(number))
  }

  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.props.store.getState()
    if(count%2===1) {
      this.props.store.dispatch(increment(number))
    }

  }
  incrementAsync = () => {
    setTimeout(() => {
      const number = this.refs.numberSelect.value * 1
      this.props.store.dispatch(increment(number))
    }, 1000)
  }

  render() {
    const count = this.props.store.getState() // redux中管理的状态数据就是count值

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