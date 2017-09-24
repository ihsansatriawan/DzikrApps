import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../Screens/Home'

const Root = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Welcome From Router',
    },
  }
})

export {
  Root
}