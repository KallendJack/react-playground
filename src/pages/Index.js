import React, { Component } from 'react'
import { Consumer } from '../context'

class Index extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return value.contacts.map(contact => (
            <div
              key={contact.id}
              className="flex items-center justify-center w-full py-8"
            >
              <div className="overflow-hidden rounded max-w-xs w-full shadow-lg leading-normal">
                <div className="block group p-4">
                  <p className="font-bold text-lg mb-1">{contact.name}</p>
                  <p className="mb-2">{contact.email}</p>
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
