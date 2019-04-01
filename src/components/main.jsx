import React, {Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'


import './main.css'

export default class Main extends Component {

  state = {
    firstView: true, // 是否显示第一个界面
    loading: false, // 是否正在请求中
    users: [], // 所有匹配需要的用户数组
    errorMsg: '', // 请求错误的提示信息
  }

  // 执行异步任务: 启动定时器/发ajax请求/订阅消息
  componentDidMount () {
    PubSub.subscribe('search', async (msgName, searchName) => {
      // 1. 更新状态数据(请求中)
      this.setState({
        firstView: false,
        loading: true
      })
      // 2. 发送ajax请求
      const url = `https://api.github.com/search/users?q=${searchName}`
      try {
        // 读取响应数据
        const response = await axios.get(url)
        const result = response.data
        const users = result.items.map(item => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          username: item.login
        }))
        // 3. 成功了, 更新状态数据(成功)
        this.setState({
          loading: false,
          users
        })
      } catch(error) {
        // 4. 失败了, 更新状态数据(失败)
        this.setState({
          loading: false,
          errorMsg: '请求出错: ' + error.message
        })
      }

    })
  }

  render() { // 不能在render中发ajax
    const {firstView, loading, users, errorMsg} = this.state
    if(firstView) {
      return <h2>请输入关键进行搜索 {this.props.searchName}</h2>
    } else if (loading) {
      return <h2>正在搜索中...</h2>
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>
    } else {
      return (
        <div className="row">
          {
            users.map(user => (
              <div className="card" key={user.username}>
                <a href={user.url} target="_blank">
                  <img src={user.avatar_url} style={{width: 100}}/>
                </a>
                <p className="card-text">{user.username}</p>
              </div>
            ))
          }
        </div>
      )
    }

  }
}