import React, { useReducer } from 'react'
import axios from 'axios'
import PostContext from './postContext'
import PostReducer from './postReducer'
import {
  GET_POSTS,
  GET_POST,
  // ADD_POST,
  // DELETE_POST,
  SET_LOADING
} from '../types'

const PostState = props => {
  const initialState = {
    posts: [],
    post: {},
    loading: false
  }

  const [state, dispatch] = useReducer(PostReducer, initialState)

  // Get Posts
  const getPosts = async () => {
    setLoading()

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=5`
    )

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  }

  // Get Post
  const getPost = async id => {
    setLoading()

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )

    dispatch({
      type: GET_POST,
      payload: res.data
    })
  }

  //Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING
    })

  return (
    <PostContext.Provider
      value={{ posts: state.posts, post: state.post, getPosts, getPost }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState
