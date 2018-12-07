import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-modal'
// local components
import Layout from '../views/Layout'
import rocket from '../images/rocket.png'
import house from '../images/house.jpg'
import pregnant from '../images/pregnant.png'
import tomato from '../images/tomato.png'
import tomato1 from '../images/tomato1.png'
import bacon from '../images/bacon.jpg'
import comicbook from '../images/comicbook.jpg'
import holdem from '../images/holdem.png'
import project from '../configs/project.json'
import '../App.css'

Modal.setAppElement('#root')

class ProjectScreen extends Component {

  constructor(props) {
    super(props)
    this.resume = this.props.resume
    this.state = {
      rocket: false,
      house: false,
      pregnant: false,
      tomato: false,
      bacon: false,
      comicbook: false,
      holdem: false
    }
  }

  showProject = (project) => {
    this.setState({
      rocket: false,
      house: false,
      pregnant: false,
      tomato: false,
      bacon: false,
      comicbook: false,
      holdem: false,
      [project]: true
    })
  }

  closeProject = (project) => {
    this.setState({
      rocket: false,
      house: false,
      pregnant: false,
      tomato: false,
      bacon: false,
      comicbook: false,
      holdem: false,
      [project]: false
    })
  }

  render() {
    return (
      <div>
        <Modal
          style={styles.modal}
          isOpen={this.state.holdem}
          onRequestClose={() => this.closeProject('holdem')}
          contentLabel="holdem"
        >
          <h3>德州撲克</h3>
          <p>{project[this.resume.langauge][0]}</p>
          <iframe title={'holdem'} width="560" height="315" src="https://www.youtube.com/embed/dB2gIhYty2M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.comicbook}
          onRequestClose={() => this.closeProject('comicbook')}
          contentLabel="comicbook"
        >
          <h1>{'Comicbook'}</h1>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.bacon}
          onRequestClose={() => this.closeProject('bacon')}
          contentLabel="bacon"
        >
          <h1>{'Bacon'}</h1>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.tomato}
          onRequestClose={() => this.closeProject('tomato')}
          contentLabel="tomato"
        >
          <h3 style={styles.h3}>TOMATO匠App</h3>
          <a style={styles.link} href={'https://play.google.com/store/apps/details?id=org.itri.tomato'}>{'(App連結)'}</a>
          <p>{project[this.resume.langauge][4]}</p>
          <img alt={'tomato1'} style={styles.image1} src={tomato1}/>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.pregnant}
          onRequestClose={() => this.closeProject('pregnant')}
          contentLabel="pregnant"
        >
          <h3 style={styles.h3}>好孕邦App</h3>
          <a style={styles.link} href={'https://play.google.com/store/apps/details?id=com.lesenphants.le'}>{'(App連結)'}</a>
          <p>{project[this.resume.langauge][5]}</p>
          <iframe title={'pregnant'} width="560" height="315" src="https://www.youtube.com/embed/IMzdEVM87A8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.house}
          onRequestClose={() => this.closeProject('house')}
          contentLabel="house"
        >
          <h3 style={styles.h3}>數位宅粧</h3>
          <p>{project[this.resume.langauge][6]}</p>
          <iframe title={'house'} width="560" height="315" src="https://www.youtube.com/embed/hW8GHtPwdm4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.rocket}
          onRequestClose={() => this.closeProject('rocket')}
          contentLabel="rocket"
        >
          <h3>打造火箭通訊系統</h3>
          <p>{project[this.resume.langauge][7]}</p>
          <iframe title={'rocket'} style={styles.iframe} width="560" height="315" src="https://www.youtube.com/embed/GYtf4dKOiHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Layout {...this.props}>
          <div style={styles.content}>
            <div style={styles.block} onClick={() => this.showProject('holdem')}>
              <h2>德州撲克</h2>
              <img alt={'holdem'} style={styles.image} src={holdem}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('comicbook')}>
              <h2>漫畫專案</h2>
              <img alt={'comicbook'} style={styles.image} src={comicbook}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('bacon')}>
              <h2>Bacon交友</h2>
              <img alt={'bacon'} style={styles.image} src={bacon}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('tomato')}>
              <h2>TOMATO匠</h2>
              <img alt={'tomato'} style={styles.image} src={tomato}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('pregnant')}>
              <h2>好孕邦</h2>
              <img alt={'pregnant'} style={styles.image} src={pregnant}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('house')}>
              <h2>數位宅粧</h2>
              <img alt={'house'} style={styles.image} src={house}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('rocket')}>
              <h2>火箭前瞻計畫</h2>
              <img alt={'rocket'} style={styles.image} src={rocket}/>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default inject('resume')(observer(ProjectScreen))

const styles = {
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  block: {
    width: '30%',
    aspectRatio: 2
  },
  image: {
    objectFit: 'contain',
    width: '100%',
    maxHeight: 250
  },
  image1: {
    objectFit: 'contain',
    width: '100%'
  },
  modal: { 
    overlay: {
      zIndex: 2
    }
  },
  link: {
    textDecoration: 'none'
  },
  h3: {
    display: 'inline',
    marginRight: 10
  }
}