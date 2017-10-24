import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  CHANGE_SEARCH_KEYWORD
} from './constants'

export function search(searchKeyword = '') {
  return {
    type: SEARCH,
    payload: {
      searchKeyword
    }
  }
}

export function changeSearchKeyword(searchKeyword = '') {
  return {
    type: CHANGE_SEARCH_KEYWORD,
    payload: {
      searchKeyword
    }
  }
}
