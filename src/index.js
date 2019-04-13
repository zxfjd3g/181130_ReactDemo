import React from 'react' // 即使没有显示使用, 也必须引入
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './containers/App.jsx'
import store from './redux/store'

ReactDOM.render((
  /*
  将store传入Provider
  Provider可以将内部的store提供给需要的组件
   */
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))
