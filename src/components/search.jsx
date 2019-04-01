import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  search = () => {
    const searchName = this.refs.searchName.value.trim()
    if(searchName) {
      // 发布消息(search)
      PubSub.publish('search', searchName)

      this.refs.searchName.value = ''
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref='searchName'/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}