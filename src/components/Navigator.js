import React, { PureComponent } from 'react'
import { inject, observer } from 'mobx-react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Select from 'react-select'
// local components
import '../App.css'
import menu from '../configs/menu.json'

class Navigator extends PureComponent {
  constructor(props) {
    super(props)
    this.resume = this.props.resume
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

  goToService = () => {
    this.props.history.push('/service')
  }

  onChange = (obj) => {
    this.resume.setLangauge(obj.value)
  }

  render() {
    return(
      <AppBar
        onLeftIconButtonClick={this.openDrawer}
        style={styles.appBar}
      >
        <Drawer
          docked
          open={this.state.drawer}
          style={styles.drawer}
        >
          <AppBar 
            onLeftIconButtonClick={this.closeDrawer}
          />
            <MenuItem onClick={this.goToProfile}>
              <p style={styles.link}>
                {menu[this.resume.langauge][0]}
              </p>
            </MenuItem>
            <MenuItem onClick={this.goToProject}>
              <p style={styles.link}>
                {menu[this.resume.langauge][1]}
              </p>
            </MenuItem>
            <MenuItem onClick={this.goToService}>
              <p style={styles.link}>
                {menu[this.resume.langauge][2]}
              </p>
            </MenuItem>
        </Drawer>
        <Select
          className={'select'}
          onChange={this.onChange}
          options={options}
          isSearchable={false}
          placeholder={options.find(ele => ele.value === this.resume.langauge).label}
        />
      </AppBar>
    )
  }
}

export default inject('resume')(observer(Navigator))

const options = [
  { value: 'ch', label: '中文' },
  { value: 'en', label: 'English' }
]

const styles = {
  link: {
    display: 'inline-block',
    color: '#606060',
    textDecoration: 'none'
  },
  appBar: {
    zIndex: 1
  },
  drawer: {
    //zIndex: 1
  }
}