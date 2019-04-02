import React, {Component} from 'react'
import {Button, message} from 'antd'

export default class App extends Component {

  info = () => {
    message.info('点击提示')
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.info}>Primary</Button>
        <Button type="danger">danger</Button>
      </div>
    )
  }
}