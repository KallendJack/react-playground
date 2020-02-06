import React from 'react'
import { Consumer } from '../context'
import axios from 'axios'

const View = props => {
  const onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        dispatch({ type: 'DELETE_POST', payload: id })
        props.history.push('/')
      })
  }

  return (
    <Consumer>
      {({ posts, dispatch }) => {
        // eslint-disable-next-line
        const post = posts.filter(post => post.id == props.match.params.id)

        return (
          <div>
            {post.length && (
              <div className="flex items-center justify-center w-full py-8">
                <div className="overflow-hidden rounded max-w-xl w-full shadow-lg leading-normal">
                  <div className="block group p-4">
                    <p className="font-bold text-lg mb-1">{post[0].title}</p>
                    <p className="mb-2">{post[0].body}</p>
                    <div className="inline-flex">
                      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Edit
                      </button>
                      <button
                        onClick={onDeleteClick.bind(this, post[0].id, dispatch)}
                        className="ml-3 bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      }}
    </Consumer>
  )
}

export default View
