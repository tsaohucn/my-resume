import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ProfileScreen from './screens/ProfileScreen'
import ProjectScreen from './screens/ProjectScreen'

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          	<Switch>
    	        <Route exact path="/" component={ProfileScreen}/>
              <Route exact path="/project" component={ProjectScreen}/>
            </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}