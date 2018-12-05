import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-modal'
// local components
import Layout from '../views/Layout'
import rocket from '../images/rocket.png'
import house from '../images/house.jpg'
import pregnant from '../images/pregnant.png'

Modal.setAppElement('#root')

class ProjectScreen extends Component {

  constructor(props) {
    super(props)
    this.resume = this.props.resume
  }

  componentDidMount() {
    //console.log('componentDidMount')
  }

  showProject = () => {
    console.log('showProject')
  }


  render() {
    return (
      <Layout {...this.props}>
        <div style={styles.content}>
          <div style={styles.block} onClick={this.showProject}>
            <h2>火箭計畫</h2>
            <img alt={'rocket'} style={styles.image} src={rocket}/>
          </div>
          <div style={styles.block}>
            <h2>數位宅粧</h2>
            <img alt={'house'} style={styles.image} src={house}/>
          </div>
          <div style={styles.block}>
            <h2>好孕邦</h2>
            <img alt={'pregnant'} style={styles.image} src={pregnant}/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default inject('resume')(observer(ProjectScreen))

const styles = {
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  block: {
    //backgroundColor:'red',
    width: '30%',
    aspectRatio: 2
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    maxHeight: 250
  }
}