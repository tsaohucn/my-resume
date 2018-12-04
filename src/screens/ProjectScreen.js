import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// local components
import Layout from '../views/Layout'

class ProjectScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobOneDetail: false
    }
  }

  componentDidMount() {
    //console.log('componentDidMount')
  }


  render() {
    return (
      <Layout {...this.props}>
        <h1>ProjectScreen</h1>
      </Layout>
    )
  }
}

export default inject('resume')(observer(ProjectScreen))

const styles = {

}