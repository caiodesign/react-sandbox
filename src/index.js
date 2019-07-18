import { hot } from 'react-hot-loader/root';
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Main from './containers/Main/index.jsx'


function AppComponent () {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  )
}

if (module.hot) hot(module, AppComponent)
render(<AppComponent />, document.getElementById('root'))
