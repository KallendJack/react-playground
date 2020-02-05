import React, { Component } from 'react'
import { Consumer } from '../context'
import { Link } from 'react-router-dom'

class Index extends Component {
  render() {
    return (
      <Consumer>
        {({ posts }) => {
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
                    <Link
                      to={`/view/${id}`}
                      id={id}
                      title={title}
                      body={body}
                      className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-l"
                    >
                      View
                    </Link>
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
