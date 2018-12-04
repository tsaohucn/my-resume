import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

export default class Navigator extends Component {
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
                {'簡介'}
              </Link>
            </MenuItem>
            <MenuItem onClick={this.closeDrawer}>
              <Link style={styles.link} to={"/project"}>
                {'作品集'}
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