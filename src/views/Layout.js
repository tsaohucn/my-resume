// node_module
import React from 'react'
import { SocialIcon } from 'react-social-icons'
// local components
import Navigator from '../components/Navigator'
import introduce from '../configs/introduce.json'
import avator from '../images/avator.jpg'

const Layout = (props) => {
  const { 
    children,
    resume
  } = props

  return(
    <div style={styles.root}>
      <Navigator {...props}/>
      <div style={styles.content}>
        <div style={styles.profile}>
          <div style={styles.avatorDiv}>
            <img alt={'avator'} src={avator} style={styles.avator}/>
          </div>
          <div style={styles.introduceDiv}>
            <p style={styles.introduce}>{introduce[resume.langauge]}</p>
          </div>
        </div>
        <div style={styles.socialBar}>
          {/*<SocialIcon style={styles.SocialIcon} url="https://www.facebook.com/tsaohucn" />*/}
          { /*<SocialIcon style={styles.SocialIcon} url="https://www.youtube.com/c/Tsaohucn" />*/}
          <SocialIcon style={styles.SocialIcon} url="https://www.cakeresume.com/tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://github.com/tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://medium.com/@tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://stackoverflow.com/users/5078051/tsao" />
          <SocialIcon style={styles.SocialIcon} url="https://www.kaggle.com/tsaohucn" />
          <SocialIcon style={styles.SocialIcon} url="https://www.linkedin.com/in/hsiu-chuan-tsao-623598a6/" />
        </div>
        { children }
      </div>
    </div>
  )  
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 40
  },
  profile: {
    display: 'flex'
  },
  socialBar: {
    justifyContent: 'center',
    paddingBottom: 20
  },
  SocialIcon: {
    marginRight: 10,
    marginTop: 20
  },
  avatorDiv: {
    display: 'flex',
    flex: 1
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
    alignItems: 'center'
  },
  introduce: {
    padding: 10
  }
}

export default Layout