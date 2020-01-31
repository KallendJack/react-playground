import React, { Component } from 'react'
import { Consumer } from '../context'

class Index extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_POST', payload: id })
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          const { posts } = value

          return posts.map(({ id, title, body }) => (
            <div
              key={id}
              className="flex items-center justify-center w-full py-8"
            >
              <div className="overflow-hidden rounded max-w-xl w-full shadow-lg leading-normal">
                <div className="block group p-4">
                  <p className="font-bold text-lg mb-1">{title}</p>
                  <p className="mb-2">{body}</p>
                  <div className="inline-flex">
                    <button className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l">
                      View
                    </button>
                    <button
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                      className="ml-3 bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }}
      </Consumer>
    )
  }
}

export default Index
