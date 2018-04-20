import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import Modal from 'react-modal'
import avator from './avator.jpg'
import introduce from './introduce.json'
import job from './job.json'

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
            icon={'澳勝'}
            createdAt="2013"
            title="React Native Senior Engineer"
            subtitle="React Native"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}            
            iconStyle={{fontSize: 9,fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#808080"          
            buttons={<button type="button" onClick={this.showJobOneDetail}>詳細內容</button>}
          >
            {job.seven}
          </TimelineEvent>
          <TimelineEvent
            icon={'凱明'}
            createdAt="2013"
            title="React Native Junior Engineer"
            subtitle="React Native"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}            
            iconStyle={{fontSize: 9,fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#228b22"
            buttons={<button type="button" onClick={this.onClickJobTwo}>詳細內容</button>}
          >
            {job.six}
          </TimelineEvent>
          <TimelineEvent
            icon={'ITRI'}
            createdAt="2016"
            title="DevOps Engineer"
            subtitle="Docker Ansible"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}            
            iconStyle={{fontSize: 9,fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#03a9f4"
          >
            {job.five}
          </TimelineEvent>
          <TimelineEvent
            icon={'ITRI'}
            createdAt="2015"
            title="Backend Engineer"
            subtitle="Ruby on Rails"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}            
            iconStyle={{fontSize: 9,fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#03a9f4"
            buttons={<button type="button" onClick={this.onClickJobTwo}>詳細內容</button>}
          >
            {job.four}
          </TimelineEvent>
          <TimelineEvent
            icon={'ITRI'}
            createdAt="2014"
            title="Data Science Engineer"
            subtitle="Java Python Ruby"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}            
            iconStyle={{fontSize: 9,fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#03a9f4"
            buttons={<button type="button" onClick={this.onClickJobTwo}>詳細內容</button>}
          >
            {job.three}
          </TimelineEvent>
          <TimelineEvent
            icon={'ITRI'}
            createdAt="2013"
            title="Unity Junior Developer"
            subtitle="JavaScript Unity3D"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}            
            iconStyle={{fontSize: 9,fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#03a9f4"
            buttons={<button type="button" onClick={this.onClickJobTwo}>詳細內容</button>}
          >
            {job.two}
          </TimelineEvent>
          <TimelineEvent
            icon={'NCTU'}
            createdAt="2010"
            title="Rocket Researcher"
            subtitle="C"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}
            iconStyle={{fontSize: 9,fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#ffa500"
            buttons={<button type="button" onClick={this.onClickJobTwo}>詳細內容</button>}
          >
            {job.one}
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
    padding: 10
  },
  timeLine: {
    //backgroundColor: 'red',
    margin: 0,
    marginTop: 20
  },
  jobOneDetail: {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }
}