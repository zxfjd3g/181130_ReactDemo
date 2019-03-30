import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  add = () => {

    // 收集输入数据
    const name = this.refs.name.value.trim()
    const content = this.refs.content.value.trim()
    // 合法性检查
    if(!name || !content) {
      return alert('必须输入')
    }
    // 封装成comment对象
    const comment = {
      name,
      content
    }
    // 将comment添加到comments
    this.props.addComment(comment)
    // 清除输入数据
    this.refs.name.value = ''
    this.refs.content.value = ''
  }

  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref='name'/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}