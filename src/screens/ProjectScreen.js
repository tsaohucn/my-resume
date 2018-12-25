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
import projectTitle from '../configs/projectTitle.json'
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
          <h3 style={styles.title}>{projectTitle[this.resume.langauge][0] + '   '}</h3>
          <h5 style={styles.tech}>{'React Native、Firebase'}</h5>
          <p>{project[this.resume.langauge][0]}</p>
          <iframe title={'holdem'} width="560" height="315" src="https://www.youtube.com/embed/dB2gIhYty2M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.comicbook}
          onRequestClose={() => this.closeProject('comicbook')}
          contentLabel="comicbook"
        >
          <h3 style={styles.title}>{projectTitle[this.resume.langauge][1] + '   '}</h3>
          <h5 style={styles.tech}>{'React Native、MongoDb'}</h5>
          <p>{project[this.resume.langauge][1]}</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jObYE-fXkJU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iqn0iq-qwtk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.bacon}
          onRequestClose={() => this.closeProject('bacon')}
          contentLabel="bacon"
        >
          <h3 style={styles.title}>{projectTitle[this.resume.langauge][2] + '   '}</h3>
          <h5 style={styles.tech}>{'React Native、Firebase'}</h5>
          <p>{project[this.resume.langauge][2]}</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LIDvHqWoRVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.tomato}
          onRequestClose={() => this.closeProject('tomato')}
          contentLabel="tomato"
        >
          <h3 style={styles.title}>{projectTitle[this.resume.langauge][3] + '   '}</h3>
          <h5 style={styles.tech}>{'Ruby on Rails'}</h5>
          <p>{project[this.resume.langauge][3]}</p>
          <a style={styles.link} href={'https://play.google.com/store/apps/details?id=org.itri.tomato'}>{'(App連結)'}</a>
          <img alt={'tomato1'} style={styles.image1} src={tomato1}/>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.pregnant}
          onRequestClose={() => this.closeProject('pregnant')}
          contentLabel="pregnant"
        >
          <h3 style={styles.title}>{projectTitle[this.resume.langauge][4] + '   '}</h3>
          <h5 style={styles.tech}>{'Java、Python、Ruby、MongoDb'}</h5>
          <p>{project[this.resume.langauge][4]}</p>
          <a style={styles.link} href={'https://play.google.com/store/apps/details?id=com.lesenphants.le'}>{'(App連結)'}</a>
          <iframe title={'pregnant'} width="560" height="315" src="https://www.youtube.com/embed/IMzdEVM87A8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.house}
          onRequestClose={() => this.closeProject('house')}
          contentLabel="house"
        >
          <h3 style={styles.title}>{projectTitle[this.resume.langauge][5] + '   '}</h3>
          <h5 style={styles.tech}>{'服務設計'}</h5>
          <p>{project[this.resume.langauge][5]}</p>
          <iframe title={'house'} width="560" height="315" src="https://www.youtube.com/embed/hW8GHtPwdm4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Modal
          style={styles.modal}
          isOpen={this.state.rocket}
          onRequestClose={() => this.closeProject('rocket')}
          contentLabel="rocket"
        >
          <h3 style={styles.title}>{projectTitle[this.resume.langauge][6] + '   '}</h3>
          <h5 style={styles.tech}>{'C'}</h5>
          <p>{project[this.resume.langauge][6]}</p>
          <iframe title={'rocket'} style={styles.iframe} width="560" height="315" src="https://www.youtube.com/embed/GYtf4dKOiHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
        <Layout {...this.props}>
          <div style={styles.content}>
            <div style={styles.blockTop} onClick={() => this.showProject('holdem')}>
              <h3 style={styles.contentTitle}>{projectTitle[this.resume.langauge][0]}</h3>
              <img alt={'holdem'} style={styles.image} src={holdem}/>
            </div>
            <div style={styles.blockTop} onClick={() => this.showProject('comicbook')}>
              <h3 style={styles.contentTitle}>{projectTitle[this.resume.langauge][1]}</h3>
              <img alt={'comicbook'} style={styles.image} src={comicbook}/>
            </div>
            <div style={styles.blockTop} onClick={() => this.showProject('bacon')}>
              <h3 style={styles.contentTitle}>{projectTitle[this.resume.langauge][2]}</h3>
              <img alt={'bacon'} style={styles.image} src={bacon}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('tomato')}>
              <h3 style={styles.contentTitle}>{projectTitle[this.resume.langauge][3]}</h3>
              <img alt={'tomato'} style={styles.image} src={tomato}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('pregnant')}>
              <h3 style={styles.contentTitle}>{projectTitle[this.resume.langauge][4]}</h3>
              <img alt={'pregnant'} style={styles.image} src={pregnant}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('house')}>
              <h3 style={styles.contentTitle}>{projectTitle[this.resume.langauge][5]}</h3>
              <img alt={'house'} style={styles.image} src={house}/>
            </div>
            <div style={styles.block} onClick={() => this.showProject('rocket')}>
              <h3 style={styles.contentTitle}>{projectTitle[this.resume.langauge][6]}</h3>
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
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    aspectRatio: 2,
    alignItems: 'flex-start',
    marginTop: 50
  },
  blockTop: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    aspectRatio: 2,
    alignItems: 'flex-start',
    marginTop: 0
  },
  image: {
    objectFit: 'contain',
    width: 200,
    height: 200,
    borderRadius: 5000,
    borderWidth: 200,
    backgroundColor: '#000000'
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
    textDecoration: 'none',
    display: 'block'
  },
  contentTitle: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    alignItems: 'center',
    textAlign: 'center'
  },
  h3: {
    display: 'inline',
    marginRight: 10
  },
  title: {
    color: '#a0522d'
  },
  tech: {
    color: '#008000'
  }
}