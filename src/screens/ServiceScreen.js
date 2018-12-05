import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-modal'
// local components
import Layout from '../views/Layout'

Modal.setAppElement('#root')

class ServiceScreen extends Component {

  constructor(props) {
    super(props)
    this.resume = this.props.resume
  }

  componentDidMount() {
    //console.log('componentDidMount')
  }


  render() {
    return (
      <Layout {...this.props}>
        <h1>客製化軟件</h1>
      </Layout>
    )
  }
}

export default inject('resume')(observer(ServiceScreen))