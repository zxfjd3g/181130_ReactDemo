import React from 'react' // 即使没有显示使用, 也必须引入
import ReactDOM from 'react-dom'
import App from './App.jsx'
import store from './redux/store'

ReactDOM.render(<App store={store}/>, document.getElementById('root'))


// 订阅store中状态改变的监听
store.subscribe(function () { // store中的状态数据发生了改变进回调
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
})