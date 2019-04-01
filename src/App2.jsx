import React, {Component} from 'react'
import axios from 'axios'

/*
1. 使用哪个ajax请求的库?  axios
2. 在哪发请求?  componentDidMount

 */

export default class App extends Component {

  state = {
    repoName: '', // 仓库名
    repoUrl: '', // 仓库url
  }

  // 显示完初始界面后立即发送ajax请求
  async componentDidMount () {
    // 使用axios发送异步ajax请求
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'


    try {
      const response = await axios.get(url)
      const result = response.data
      const mostRepo = result.items[0]
      // 更新状态数据
      const repoName = mostRepo.name
      const repoUrl = mostRepo.html_url
      this.setState({
        repoName,
        repoUrl
      })
    } catch (error) {
      alert('请求出错')
    }
  }

  render () {
    const {repoName, repoUrl} = this.state
    if(!repoName) {
      return <h2>LOADING...</h2>
    } else {
      return <div>most star repo is <a href={repoUrl}>{repoName}</a></div>
    }

  }
}

/*
async与await
1. 作用?
    简化promise的使用, 干掉then(), 不使用异步回调函数
    使用同步编码方式实现异步流程
2. 哪里用await?
    在返回promsie对象的表达式左侧使用, 得到promise异步返回的结果
3. 哪里async?
    await语句所在的函数定义左侧使用
 */