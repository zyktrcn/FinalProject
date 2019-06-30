import React from 'react'
import Home from './Home'
import List from './List'
import Me from './Me'
import { TabNavigator } from 'react-navigation'

export const AppNavigator = TabNavigator(
  {
    Home: { screen: Home },
    List: { screen: List },
    Me: { screen: Me }
  },
  {
    tabBarOptions: {
      activeTintColor: '#4BC1D2',
      inactiveTintColor: '#000',
      showIcon: true,
      style: {
          backgroundColor: '#fff',
          paddingBottom: 1,
          borderTopWidth: 0.2,
          paddingTop:1,
          borderTopColor: '#ccc',
      },
      labelStyle: {
          fontSize: 11,
          margin: 1
      },
      indicatorStyle: {height: 0}
    },
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition:'bottom',
  }
)
