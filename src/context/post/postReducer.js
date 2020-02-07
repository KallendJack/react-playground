import { GET_POSTS, ADD_POST, DELETE_POST } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
}
