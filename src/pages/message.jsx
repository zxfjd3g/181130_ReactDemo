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

  pushShow = (path) => {
    this.props.history.push(path)
  }
  replaceShow = (path) => {
    this.props.history.replace(path)
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
                --<button onClick={() => this.pushShow(`/home/message/${m.id}`)}>push查看</button>
                --<button onClick={() => this.replaceShow(`/home/message/${m.id}`)}>replace查看</button>
              </li>
            ))
          }
        </ul>
        <button onClick={() => this.props.history.goBack()}>back</button>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>
    )
  }
}