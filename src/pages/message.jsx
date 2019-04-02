import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import MessageDetail from './message-detail'

export default class Message extends Component {

  state = {
    messages: []
  }

  componentDidMount () {
    // 模拟发ajax请求
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'Message001'},
        {id: 3, title: 'Message003'},
        {id: 5, title: 'Message005'},
        {id: 6, title: 'Message006'},
      ]
      // 更新状态数据
      this.setState({
        messages
      })
    }, 1000)


  }

  render() {
    const {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map((m) => (
              <li key={m.id}>
                <Link to={`/home/message/${m.id}`}>{m.title}</Link>
              </li>
            ))
          }
        </ul>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>
    )
  }
}