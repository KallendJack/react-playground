import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from './context'
import Header from './components/layout/Header'
import Index from './pages/Index'
import About from './pages/About'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Header />
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          {/* <Route
          path="/view-post/:id"
          render={props => (
            <React.Fragment>
              <ViewPost id={props.match.params.id} />
            </React.Fragment>
          )}
        /> */}
        </Router>
      </Provider>
    )
  }
}

export default App
