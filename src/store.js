import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'


export default function getStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
