import { call, all } from 'redux-saga/effects'
import { onSearch, onPickSearch } from './search-saga'

export default function* rootSaga() {
  yield all([
    call(onSearch),
    call(onPickSearch)
  ])
}
