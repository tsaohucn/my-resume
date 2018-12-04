import React, { Component } from 'react'
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

  goToProfile = () => {
    this.props.history.push('/')
  }

  goToProject = () => {
    this.props.history.push('/project')
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
            <MenuItem onClick={this.goToProfile}>
              <p style={styles.link}>
                {'簡介'}
              </p>
            </MenuItem>
            <MenuItem onClick={this.goToProject}>
              <p style={styles.link}>
                {'作品集'}
              </p>
            </MenuItem>
        </Drawer>
      </AppBar>
    )
  }
}

const styles = {
  link: {
    display: 'inline-block',
    color: '#606060',
    textDecoration: 'none'
  }
}