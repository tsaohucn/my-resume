import React, { Component } from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import Modal from 'react-modal'
import Iframe from 'react-iframe'
// local components
import Layout from '../views/Layout'
import job from '../configs/job.json'

Modal.setAppElement('#root')

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobOneDetail: false
    }
  }

  componentDidMount() {
    //console.log('componentDidMount')
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
    //console.log('onClickJobTwo')
  }

  render() {
    return (
      <Layout>
        <Timeline style={styles.timeLine}>
          <TimelineEvent 
            icon={'澳勝'}
            createdAt="2018"
            title="React Native Senior Engineer"
            subtitle="React Native"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}            
            iconStyle={{fontSize: '0.4vw',fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#808080"          
            buttons={<button type="button" onClick={this.onClickJobTwo}>詳細內容</button>}
          >
            {job.seven}
          </TimelineEvent>
          <TimelineEvent
            icon={'凱明'}
            createdAt="2017"
            title="React Native Junior Engineer"
            subtitle="React Native"
            titleStyle={{fontWeight: "bold"}}
            subtitleStyle={{color: "green"}}            
            iconStyle={{fontSize: '0.4vw',fontWeight: 'bold'}}
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
            iconStyle={{fontSize: '0.4vw',fontWeight: 'bold'}}
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
            iconStyle={{fontSize: '0.4vw',fontWeight: 'bold'}}
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
            iconStyle={{fontSize: '0.4vw',fontWeight: 'bold'}}
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
            iconStyle={{fontSize: '0.4vw',fontWeight: 'bold'}}
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
            iconStyle={{fontSize: '0.4vw',fontWeight: 'bold'}}
            bubbleStyle={{backgroundColor: "#ffffff"}}
            iconColor="#ffa500"
            buttons={<button type="button" onClick={this.showJobOneDetail}>詳細內容</button>}
          >
            {job.one}
          </TimelineEvent>
        </Timeline>
        <Modal
          isOpen={this.state.jobOneDetail}
          onRequestClose={this.closeJobOneDetail}
          style={styles.jobOneDetail}
        >
          <Iframe 
            width="1280" 
            height="720" 
            url="https://www.youtube.com/embed/eDzyv6XVSgY" 
            display="initial"
            position="relative"
          />
        </Modal>
      </Layout>
    )
  }
}


const styles = {
  timeLine: {
    margin: 0,
  },
  jobOneDetail: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  }
}