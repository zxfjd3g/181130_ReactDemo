import React, {Component} from 'react'

import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component {

  state = {
    comments: [
      {name: 'Tom', content: 'React也就那样'},
      {name: '班长', content: 'React is so so...'},
      {name: '班长2', content: 'React is very very...'}
    ]
  }

  addComment = (comment) => {
    const comments = [...this.state.comments]
    // 添加到第一位
    comments.unshift(comment)
    this.setState({comments})
  }

  deleteComment = (index) => {
    const comments = [...this.state.comments]
    // 删除指定的comment
    comments.splice(index, 1)
    this.setState({comments})
  }

  render () {
    const {comments} = this.state

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}