import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './Home'

export default class RootScreens extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' navigationBarStyle={{ backgroundColor: '#02C39A' }} headerTintColor='#FFF' titleStyle={{ color: '#FFF' }}>
          <Scene initial key='home' component={Home} />        
        </Scene>
      </Router>
    )
  }
}