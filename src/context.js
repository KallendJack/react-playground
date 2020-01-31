import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    case 'ADD_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    posts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then(res => {
        const posts = res.data
        this.setState({ posts })
      })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
