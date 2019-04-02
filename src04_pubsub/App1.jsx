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
  componentDidMount () {
    // 使用axios发送异步ajax请求
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'



    /*axios.get(url).then(response => { // 成功了
      // console.log('response', response)
      const result = response.data
      const mostRepo = result.items[0]
      // 更新状态数据
      const repoName = mostRepo.name
      const repoUrl = mostRepo.html_url
      this.setState({
        repoName,
        repoUrl
      })
    }).catch(error => {
      alert('请求出错')
    })*/

    // 使用fetch发送异步ajax请求
    fetch(url).then(response => response.json()).then(data => {
      const mostRepo = data.items[0]
      // 更新状态数据
      const repoName = mostRepo.name
      const repoUrl = mostRepo.html_url
      this.setState({
        repoName,
        repoUrl
      })
    }).catch(error => {
      alert('请求出错2')
    })
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