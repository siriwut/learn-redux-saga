import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  CHANGE_SEARCH_KEYWORD
} from './constants'

const initialState = {
  searchKeyword: '',
  loading: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH:
      return {
        ...state,
        loading: true,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false
      }
    case CHANGE_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload.searchKeyword
      }
    default:
      return state
  }
}
