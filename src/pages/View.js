import React, { Component } from 'react'

class View extends Component {
  render() {
    console.log(this.props)
    return <h1>{this.props.match.params.title}</h1>
  }
}

export default View
