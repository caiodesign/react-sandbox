import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import { composeEnhancers } from './utils'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware
    )
  ),
)

sagaMiddleware.run(sagas)

export default store
