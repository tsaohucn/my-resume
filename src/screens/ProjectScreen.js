import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-modal'
// local components
import Layout from '../views/Layout'
import rocket from '../images/rocket.png'
import house from '../images/house.jpg'
import pregnant from '../images/pregnant.png'
import tomato from '../images/tomato.png'
import bacon from '../images/bacon.jpg'
import comicbook from '../images/comicbook.jpg'
import holdem from '../images/holdem.png'

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
      [project]: true
    })
  }

  closeProject = (project) => {
    this.setState({
      [project]: false
    })
  }

  render() {
    return (
      <Layout {...this.props}>
        <Modal
          isOpen={this.state.rocket}
          onRequestClose={() => this.closeProject('rocket')}
          contentLabel="rocket"
        >
          <h1>{'rocket'}</h1>
        </Modal>
        <Modal
          isOpen={this.state.house}
          onRequestClose={() => this.closeProject('house')}
          contentLabel="house"
        >
          <h1>{'house'}</h1>
        </Modal>
        <Modal
          isOpen={this.state.pregnant}
          onRequestClose={() => this.closeProject('pregnant')}
          contentLabel="pregnant"
        >
          <h1>{'pregnant'}</h1>
        </Modal>
        <Modal
          isOpen={this.state.tomato}
          onRequestClose={() => this.closeProject('tomato')}
          contentLabel="tomato"
        >
          <h1>{'Tomato'}</h1>
        </Modal>
        <Modal
          isOpen={this.state.bacon}
          onRequestClose={() => this.closeProject('bacon')}
          contentLabel="bacon"
        >
          <h1>{'Bacon'}</h1>
        </Modal>
        <Modal
          isOpen={this.state.comicbook}
          onRequestClose={() => this.closeProject('comicbook')}
          contentLabel="comicbook"
        >
          <h1>{'Comicbook'}</h1>
        </Modal>
        <Modal
          isOpen={this.state.holdem}
          onRequestClose={() => this.closeProject('holdem')}
          contentLabel="holdem"
        >
          <h1>{'Holdem'}</h1>
        </Modal>
        <div style={styles.content}>
          <div style={styles.block} onClick={() => this.showProject('rocket')}>
            <h2>火箭計畫</h2>
            <img alt={'rocket'} style={styles.image} src={rocket}/>
          </div>
          <div style={styles.block} onClick={() => this.showProject('house')}>
            <h2>數位宅粧</h2>
            <img alt={'house'} style={styles.image} src={house}/>
          </div>
          <div style={styles.block} onClick={() => this.showProject('pregnant')}>
            <h2>好孕邦</h2>
            <img alt={'pregnant'} style={styles.image} src={pregnant}/>
          </div>
          <div style={styles.block} onClick={() => this.showProject('tomato')}>
            <h2>TOMATO匠</h2>
            <img alt={'tomato'} style={styles.image} src={tomato}/>
          </div>
          <div style={styles.block} onClick={() => this.showProject('bacon')}>
            <h2>Bacon交友App</h2>
            <img alt={'bacon'} style={styles.image} src={bacon}/>
          </div>
          <div style={styles.block} onClick={() => this.showProject('comicbook')}>
            <h2>漫畫App</h2>
            <img alt={'comicbook'} style={styles.image} src={comicbook}/>
          </div>
          <div style={styles.block} onClick={() => this.showProject('holdem')}>
            <h2>德州撲克</h2>
            <img alt={'holdem'} style={styles.image} src={holdem}/>
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
    flexWrap: 'wrap',
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
    objectFit: 'contain',
    width: '100%',
    maxHeight: 250
  }
}