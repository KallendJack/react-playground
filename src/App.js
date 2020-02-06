import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from './context'
import Header from './components/layout/Header'
import Index from './pages/Index'
import Add from './pages/Add'
import View from './pages/View'

const App = () => {
  return (
    <Provider>
      <Router>
        <Header />
        <Route exact path="/" component={Index} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/view/:id" component={View} />
      </Router>
    </Provider>
  )
}

export default App
