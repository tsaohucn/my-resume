import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

import Profile from './Profile'

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Navigator/>
          	<Switch>
    	        <Route exact path="/" component={Profile}/>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
} 

class Navigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawer: false
    }
  }

  openDrawer = () => {
    this.setState({
      drawer: true
    })
  }

  closeDrawer = () => {
    this.setState({
      drawer: false
    })    
  }

  render() {
    return(
      <AppBar
        onLeftIconButtonClick={this.openDrawer}
      >
        <Drawer
          docked
          open={this.state.drawer}
        >
          <AppBar 
            onLeftIconButtonClick={this.closeDrawer}
          />
            <MenuItem onClick={this.closeDrawer}>
              <Link style={styles.link} to={"/"}>
                簡介
              </Link>
            </MenuItem>
            <MenuItem onClick={this.closeDrawer}>
              <Link style={styles.link} to={"/test"}>
                商店
              </Link>
            </MenuItem>
        </Drawer>
      </AppBar>
    )
  }
}

const styles = {
  link: {
    color: '#606060',
    textDecoration: 'none'
  }
}