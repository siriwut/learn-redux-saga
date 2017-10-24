import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SEARCH } from './constants'

export function* search(action) {
  const { searchKeyword } = action.payload

   try {
     console.log('search:', searchKeyword)
     yield
   } catch (e) {
     console.error(e)
   }
}

export function* pickSearch(action) {
  const { searchKeyword } = action.payload

   try {
     console.log('pickSearch:', searchKeyword)
     yield
   } catch (e) {
     console.error(e)
   }
}


export function* onSearch() {
  yield takeEvery(SEARCH, search)
}

export function* onPickSearch() {
  yield takeEvery(SEARCH, pickSearch)
}
