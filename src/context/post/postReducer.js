import {
  GET_POSTS,
  GET_POST,
  // ADD_POST,
  // DELETE_POST,
  SET_LOADING
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
