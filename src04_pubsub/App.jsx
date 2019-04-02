import React, {Component} from 'react'
import Search from './components/search'
import Main from './components/main'

export default class App extends Component {


  render() {
    return (
      <div className="container">
        <Search/>
        <Main/>
      </div>
    )
  }
}