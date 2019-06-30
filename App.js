/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { AppNavigator } from './components/TabNavigation'
import { StackNavigator } from 'react-navigation'

import Welcome from './components/Welcome'
import Item from './components/Item'
import Detail from './components/Detail'

const App = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: ({navigation}) => ({
          header: null
      })
    },
    Main: {
      screen: AppNavigator,
      navigationOptions: ({navigation}) => ({
          header: null
      })
    },
    Detail: {
      screen: Detail,
      navigationOptions: ({navigation}) => ({
          header: null
      })
    }
  },
  {
      initialRouteName: 'Welcome',
      headerMode: 'screen'
  }
)

export default App
