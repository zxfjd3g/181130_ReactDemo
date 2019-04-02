import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
/*
自定义的NavLink
 */
/*export default class MyNavLink extends Component {
  render() {
    return <NavLink activeClassName='activeClass' {...this.props}></NavLink>
  }
}*/

export default function MyNavLink(props) {
  return <NavLink activeClassName='activeClass' {...props}></NavLink>
}

// 将MyNavLink接收的所有属性传给NavLink