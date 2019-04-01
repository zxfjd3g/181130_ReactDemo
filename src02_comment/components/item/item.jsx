import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './item.css'
export default class Item extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  }

  deleteComment = () => {
    const {comment, deleteComment, index} = this.props
    if(window.confirm(`确定删除${comment.name}的评论吗?`)) {
      this.props.deleteComment(index)
    }
  }


  render () {

    const {comment} = this.props

    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.deleteComment}>删除</a>
        </div>
        <p className="user"><span >{comment.name}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}