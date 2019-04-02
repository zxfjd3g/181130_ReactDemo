import React, {Component} from 'react'

const messageDetails = [
  {id: 1, title: 'Message001', content: 'content001'},
  {id: 3, title: 'Message003', content: 'content003'},
  {id: 5, title: 'Message005', content: 'content005'},
  {id: 6, title: 'Message006', content: 'content006'},
]

export default class MessageDetail extends Component {
  render() {

    // 请求的param参数id值
    const id = this.props.match.params.id * 1
    // 找到对应的detail对象
    const detail = messageDetails.find(detail => detail.id===id)

    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {detail.title}</li>
        <li>Content: {detail.content}</li>
      </ul>
    )
  }
}