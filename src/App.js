import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import Modal from 'react-modal'
import avator from './avator.jpg'
import introduce from './introduce.json'

Modal.setAppElement('#root')

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobOneDetail: false
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  showJobOneDetail = () => {
    this.setState({
      jobOneDetail: true
    })
  }

  closeJobOneDetail = () => {
     this.setState({
      jobOneDetail: false
    })   
  }

  onClickJobTwo = () => {
    console.log('onClickJobTwo')
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.profile}>
          <div style={styles.avatorDiv}>
            <img alt={'avator'} src={avator} style={styles.avator}/>
          </div>
          <div style={styles.introduceDiv}>
            <p style={styles.introduce}>{introduce.content}</p>
          </div>
        </div>
        <div style={styles.socialBar}>
          <SocialIcon style={styles.SocialIcon} url="https://www.facebook.com/tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://www.cakeresume.com/tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://github.com/tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://medium.com/@tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://www.youtube.com/c/Tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://stackoverflow.com/users/5078051/tsao" />
          <SocialIcon style={styles.SocialIcon} url="https://www.kaggle.com/tsaohucn" />
        </div>
        <Timeline style={styles.timeLine}>
          <TimelineEvent 
            title="Reacr Native Senior Engineer"
            createdAt="2016-09-12 10:06 PM"
            icon={<i className="material-icons md-18"></i>}
            buttons={<button type="button" onClick={this.showJobOneDetail}>詳細內容</button>}
          >
            工作內容
          </TimelineEvent>
          <TimelineEvent
            title="You sent an email to John Doe"
            createdAt="2016-09-11 09:06 AM"
            icon={<i className="material-icons md-18"></i>}
            buttons={<button type="button" onClick={this.onClickJobTwo}>詳細內容</button>}
          >
            工作內容
          </TimelineEvent>
        </Timeline>

        <Modal
          isOpen={this.state.jobOneDetail}
          //onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeJobOneDetail}
          style={styles.jobOneDetail}
          contentLabel="Example Modal"
        >
          <h2>JobOneDetail</h2>
          <p>12345</p>
        </Modal>
      </div>
    )
  }
}

export default App


const styles = {
  root: {
    //backgroundColor: 'red',
    display: 'flex',
    padding: 40,
    flexDirection: 'column'
  },
  profile: {
    display: 'flex'
  },
  socialBar: {
    paddingTop: 40,
    //backgroundColor: 'yellow',
  },
  SocialIcon: {
    marginRight: 10
  },
  avatorDiv: {
    display: 'flex',
    flex: 1,
    //backgroundColor: 'blue',
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  avator: {
    width: 200,
    height: 200,
    borderRadius: 100,
    objectFit: 'cover'

  },
  introduceDiv: {
    display: 'flex',
    flex: 3,
    //backgroundColor: 'green',
    alignItems: 'center'
  },
  introduce: {
    //padding: 50
  },
  timeLine: {
    //backgroundColor: 'red',
    margin: 0,
    marginTop: 20
  },
  jobOneDetail: {

  }
}