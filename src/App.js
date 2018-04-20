import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Profile from './Profile'
import Test from './Test'

export default class App extends Component {

  render() {
    return (
      <Router>
      	<Switch>
	        <Route exact path="/" component={Profile}/>
	        <Route path="/test" component={Test}/>
        </Switch>
      </Router>
    )
  }
} 