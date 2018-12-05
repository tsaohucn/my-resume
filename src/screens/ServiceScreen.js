import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-modal'
import ReactContactForm from 'react-mail-form'
// local components
import Layout from '../views/Layout'
import '../App.css'

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
        <ReactContactForm
          contentsRows={5}
          className={'email'}
          titlePlaceholder={'標題'}
          contentsPlaceholder={'內容'}
          buttonText={'送出'}
          to="tsaohucn@gmail.com" 
        />
      </Layout>
    )
  }
}

export default inject('resume')(observer(ServiceScreen))