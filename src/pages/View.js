import React, { Component } from 'react'
import { Consumer } from '../context'

class View extends Component {
  render() {
    console.log(this.props)
    return (
      <Consumer>
        {({ posts }) => {
          const post = posts.filter(
            post => post.id === this.props.match.params.id
          )

          return <h1>{post.id}</h1>
        }}
      </Consumer>
    )
  }
}

export default View
