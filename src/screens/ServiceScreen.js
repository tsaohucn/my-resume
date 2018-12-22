import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-modal'
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
        <table border={2} style={styles.table}>
          <tr>
            <th>聯絡資訊</th>
            <th>內容</th>
          </tr>
          <tr>
            <td>Email</td>
            <td>tsaohucn@gmail.com</td>
          </tr>
          <tr>
            <td>Line</td>
            <td>tsaohucn</td>
          </tr>
          <tr>
            <td>手機</td>
            <td>0933168617</td>
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