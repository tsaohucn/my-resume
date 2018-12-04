import React, { PureComponent } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Select from 'react-select'
import '../App.css'

export default class Navigator extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: 'ch',
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

  onChange = (value) => {
    this.setState({
      selectedOption: value
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
        <Select
          className={'select'}
          value={this.state.selectedOption}
          onChange={this.onChange}
          options={options}
          isSearchable={false}
          isMulti={false}
          autoFocus={false}
          placeholder={'中文'}
        />
      </AppBar>
    )
  }
}

const options = [
  { value: 'ch', label: '中文' },
  { value: 'en', label: '英文' }
]

const styles = {
  link: {
    display: 'inline-block',
    color: '#606060',
    textDecoration: 'none'
  }
}