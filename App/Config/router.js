import React from 'react';
import { Image } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import HomeScreen from '../Screens/Home'
import AboutScreen from '../Screens/About'
import BaseStyle from '../Style/Base'

const Root = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Dzikr App',
      drawer: {
        icon: () => (
          <Image 
            source={require('../Assets/imgs/home.png')}
            style={[BaseStyle.tabIcon, {tintColor: 'black'}]}
          />
        )
      }
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
      drawer: {
        icon: () => (
          <Image 
            source={require('../Assets/imgs/home.png')}
            style={[BaseStyle.tabIcon, {tintColor: 'black'}]}
          />
        )
      }
    },
  },
})

export {
  Root
}