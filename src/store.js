import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import { composeEnhancers } from './utils'
import demoSagas from './sagas/demo'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware
    )
  ),
)

sagaMiddleware.run(demoSagas)

export default store
