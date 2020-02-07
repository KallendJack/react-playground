import React, { useReducer } from 'react'
import axios from 'axios'
import PostContext from './postContext'
import PostReducer from './postReducer'
import { GET_POSTS, ADD_POST, DELETE_POST } from '../types'

const PostState = props => {
  const initialState = {
    posts: []
  }

  const [state, dispatch] = useReducer(PostReducer, initialState)

  // Get Posts
  const getPosts = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=5`
    )

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  }

  return (
    <PostContext.Provider value={{ state, getPosts }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState
