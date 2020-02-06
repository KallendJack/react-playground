import React, { useState } from 'react'
import { Consumer } from '../context'
import uuid from 'uuid'
import axios from 'axios'

const Add = props => {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const onChange = e => {
    e.target.name === 'title'
      ? setTitle(e.target.value)
      : setBody(e.target.value)
  }

  const onSubmit = async (dispatch, e) => {
    e.preventDefault()

    const newPost = {
      id: uuid(),
      title,
      body
    }

    await axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost)
    dispatch({ type: 'ADD_POST', payload: newPost })
    props.history.push('/')
  }

  return (
    <Consumer>
      {({ dispatch }) => {
        return (
          <form
            onSubmit={onSubmit.bind(this, dispatch)}
            className="max-w-md m-auto mt-12 p-5 shadow-lg"
          >
            <div className="py-5">
              <label htmlFor="title" className="block font-bold text-lg mb-1">
                Title
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                type="text"
                name="title"
                value={title}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="body" className="block font-bold text-lg mb-1">
                Body
              </label>
              <textarea
                className="mb-2 bg-gray-200 appearance-none border-2
            border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight
            focus:outline-none focus:bg-white focus:border-teal-500"
                name="body"
                value={body}
                onChange={onChange}
              ></textarea>
            </div>
            <button className="bg-teal-300 hover:bg-teal-400 text-teal-800 font-bold py-2 px-4 rounded-l">
              Add
            </button>
          </form>
        )
      }}
    </Consumer>
  )
}

export default Add
