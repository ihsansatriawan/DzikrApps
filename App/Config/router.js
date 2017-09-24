import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../Screens/Home'
import AboutScreen from '../Screens/About'

const Root = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Dzikr App',
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
    },
  },
})

export {
  Root
}