import { hot } from 'react-hot-loader/root'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import Main from './containers/Main/index.jsx'
import store from './store'

function AppComponent () {
  return (
    <AppContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </AppContainer>
  )
}

if (module.hot) hot(module, AppComponent)
render(<AppComponent />, document.getElementById('root'))
