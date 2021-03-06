import React, { Component } from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import { inject, observer } from 'mobx-react'
// local components
import Layout from '../views/Layout'
import job from '../configs/job.json'

class ProfileScreen extends Component {

  constructor(props) {
    super(props)
    this.resume = this.props.resume
    this.state = {
      jobOneDetail: false
    }
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

  render() {
    return (
      <Layout {...this.props}>
        <Timeline style={styles.timeLine}>
          <TimelineEvent 
            icon={'澳勝'}
            createdAt="2018"
            title="React Native Senior Engineer"
            subtitle="React Native"
            titleStyle={styles.titleStyle}
            subtitleStyle={styles.subtitleStyle}
            contentStyle={styles.contentStyle}
            iconStyle={styles.iconStyle}
            bubbleStyle={styles.bubbleStyle}
            iconColor="#808080"          
          >
            {job[this.resume.langauge][0]}
          </TimelineEvent>
          <TimelineEvent
            icon={'凱明'}
            createdAt="2017"
            title="React Native Junior Engineer"
            subtitle="React Native、Firebase"
            titleStyle={styles.titleStyle}
            subtitleStyle={styles.subtitleStyle}
            contentStyle={styles.contentStyle}
            iconStyle={styles.iconStyle}
            bubbleStyle={styles.bubbleStyle}
            iconColor="#228b22"
          >
            {job[this.resume.langauge][1]}
          </TimelineEvent>
          <TimelineEvent
            icon={'ITRI'}
            createdAt="2016"
            title="DevOps Engineer"
            subtitle="Docker、Ansible"
            titleStyle={styles.titleStyle}
            subtitleStyle={styles.subtitleStyle}
            contentStyle={styles.contentStyle}
            iconStyle={styles.iconStyle}
            bubbleStyle={styles.bubbleStyle}
            iconColor="#03a9f4"
          >
            {job[this.resume.langauge][2]}
          </TimelineEvent>
          <TimelineEvent
            icon={'ITRI'}
            createdAt="2015"
            title="Backend Engineer"
            subtitle="Ruby on Rails"
            titleStyle={styles.titleStyle}
            subtitleStyle={styles.subtitleStyle}
            contentStyle={styles.contentStyle}
            iconStyle={styles.iconStyle}
            bubbleStyle={styles.bubbleStyle}
            iconColor="#03a9f4"
          >
            {job[this.resume.langauge][3]}
          </TimelineEvent>
          <TimelineEvent
            icon={'ITRI'}
            createdAt="2014"
            title="Data Science Engineer"
            subtitle="Java、Python、Ruby"
            titleStyle={styles.titleStyle}
            subtitleStyle={styles.subtitleStyle}
            contentStyle={styles.contentStyle}
            iconStyle={styles.iconStyle}
            bubbleStyle={styles.bubbleStyle}
            iconColor="#03a9f4"
          >
            {job[this.resume.langauge][4]}
          </TimelineEvent>
          <TimelineEvent
            icon={'ITRI'}
            createdAt="2013"
            title="Business Designer"
            subtitle="Design Thinking"
            titleStyle={styles.titleStyle}
            subtitleStyle={styles.subtitleStyle}
            contentStyle={styles.contentStyle}
            iconStyle={styles.iconStyle}
            bubbleStyle={styles.bubbleStyle}
            iconColor="#03a9f4"
          >
            {job[this.resume.langauge][5]}
          </TimelineEvent>
          <TimelineEvent
            icon={'NCTU'}
            createdAt="2010"
            title="Rocket Researcher"
            subtitle="C"
            titleStyle={styles.titleStyle}
            subtitleStyle={styles.subtitleStyle}
            contentStyle={styles.contentStyle}
            iconStyle={styles.iconStyle}
            bubbleStyle={styles.bubbleStyle}
            iconColor="#ffa500"
            //buttons={<button type="button" onClick={this.showJobOneDetail}>詳細內容</button>}
          >
            {job[this.resume.langauge][6]}
          </TimelineEvent>
        </Timeline>
      </Layout>
    )
  }
}

export default inject('resume')(observer(ProfileScreen))

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
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: '1.5vw'
  },
  subtitleStyle: {
    fontSize: '1.2vw',
    color: "#008000"
  },
  contentStyle: {
    fontSize: '1.2vw'
  },
  bubbleStyle: {
    backgroundColor: "#ffffff"
  },
  iconStyle: {
    fontSize: '0.8vw',
    fontWeight: 'bold'
  }
}