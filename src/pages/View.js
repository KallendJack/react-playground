import React, { Component } from 'react'
import { Consumer } from '../context'

class View extends Component {
  render() {
    return (
      <Consumer>
        {({ posts }) => {
          const post = posts.filter(
            post => post.id === parseInt(this.props.match.params.id)
          )

          return (
            <div>
              {post.length && (
                <div className="flex items-center justify-center w-full py-8">
                  <div className="overflow-hidden rounded max-w-xl w-full shadow-lg leading-normal">
                    <div className="block group p-4">
                      <p className="font-bold text-lg mb-1">{post[0].title}</p>
                      <p className="mb-2">{post[0].body}</p>
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
}

export default View
