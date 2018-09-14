/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import { createBottomTabNavigator  } from 'react-navigation';
import About from './src/components/About';
import Search from './src/components/Search';

const Tabs = createBottomTabNavigator (
  {
    // Search: { screen: Search },
    About: { screen: About },
    Search: { screen: Search },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        height: 2,
        backgroundColor: '#FFF'
      },
      style: {
        backgroundColor: "#a2273c",
        borderWidth: 1,
        borderColor: '#3f101c'
      }
    }
  })
  
export default class App extends Component {
  render() {
    return (
      <Tabs />
    );
  }
}
