import React, { Component } from 'react'
import { Consumer } from '../context'

class Index extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return value.contacts.map(contact => contact.name)
        }}
      </Consumer>
    )
  }
}

export default Index
