import React from 'react' // 即使没有显示使用, 也必须引入
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter} from 'react-router-dom'

import App from './App.jsx'

ReactDOM.render((
  <HashRouter>
    <App/>
  </HashRouter>
), document.getElementById('root'))