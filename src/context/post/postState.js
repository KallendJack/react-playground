import React, { useReducer } from 'react'
import axios from 'axios'
import PostContext from './postContext'
import PostReducer from './postReducer'
import { ADD_POST, DELETE_POST } from '../types'

const PostState = props => {
  const initialState = {
    posts: [],
    loading: false
  }

  const [state, dispatch] = useReducer(PostReducer, initialState)

  return (
    <PostContext.Provider value={state}>{props.children}</PostContext.Provider>
  )
}

export default PostState
