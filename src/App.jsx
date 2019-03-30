import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <img src={logo} alt="logo" className='logo'/>
        <p className='title'>App组件</p>
      </div>
    )
  }
}