import React, { Component } from 'react'
import { Consumer } from '../context'
import uuid from 'uuid'
import axios from 'axios'

class Add extends Component {
  state = {
    title: '',
    body: ''
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (dispatch, e) => {
    e.preventDefault()

    const { title, body } = this.state
    const newPost = {
      id: uuid(),
      title,
      body
    }

    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, newPost)
      .then(res => {
        dispatch({ type: 'ADD_POST', payload: newPost })
        this.props.history.push('/')
      })
  }

  render() {
    const { title, body } = this.state

    return (
      <Consumer>
        {({ dispatch }) => {
          return (
            <form
              onSubmit={this.onSubmit.bind(this, dispatch)}
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
}

export default Add
