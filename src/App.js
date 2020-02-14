import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostState from './context/post/postState'
import Header from './components/layout/Header'
import Posts from './pages/Posts'
import AddPost from './pages/AddPost'
import Post from './pages/Post'

const App = () => {
  return (
    <PostState>
      <Router>
        <Header />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/post/add" component={AddPost} />
        <Route exact path="/posts/:id" component={Post} />
      </Router>
    </PostState>
  )
}

export default App
