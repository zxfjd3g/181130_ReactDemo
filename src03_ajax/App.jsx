import React, {Component} from 'react'
import Search from './components/search'
import Main from './components/main'

export default class App extends Component {

  state = {
    searchName: ''
  }

  setSearchName = (searchName) => {
    this.setState({
      searchName
    })
  }

  render() {
    return (
      <div className="container">
        <Search setSearchName={this.setSearchName}/>
        <Main searchName={this.state.searchName}/>
      </div>
    )
  }
}