import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-modal'
// local components
import Layout from '../views/Layout'
import '../App.css'
import service from '../configs/service.json'

Modal.setAppElement('#root')

class ServiceScreen extends Component {

  constructor(props) {
    super(props)
    this.resume = this.props.resume
  }

  render() {
    return (
      <Layout {...this.props}>
        <h1>{service[this.resume.langauge][0]}</h1>
        <table border={2} style={styles.table}>
          <tr>
            <th align={'left'}>{service[this.resume.langauge][1]}</th>
            <th align={'left'}>{service[this.resume.langauge][2]}</th>
          </tr>
          <tr>
            <td>{service[this.resume.langauge][3]}</td>
            <td>{'tsaohucn@gmail.com'}</td>
          </tr>
          <tr>
            <td>{service[this.resume.langauge][4]}</td>
            <td>{'tsaohucn'}</td>
          </tr>
          <tr>
            <td>{service[this.resume.langauge][5]}</td>
            <td>{'0933168617'}</td>
          </tr>
        </table>
      </Layout>
    )
  }
}

const styles = {
  table: {
    width: 500
  }
}

export default inject('resume')(observer(ServiceScreen))