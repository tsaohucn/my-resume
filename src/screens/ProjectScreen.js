import React, { Component } from 'react'
// local components
import Layout from '../views/Layout'

export default class ProjectScreen extends Component {

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
      <Layout>
        <h1>ProjectScreen</h1>
      </Layout>
    )
  }
}


const styles = {

}