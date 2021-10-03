import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MapScreen from './src/screens/MapScreen'
import MapListScreen from './src/screens/MapListScreen'
import { setNavigator } from './src/navigationRef'

const SwitchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    MapView: MapScreen,
    MapList: MapListScreen
  })
})

const App = createAppContainer(SwitchNavigator)

export default () => {
  return (
    <App 
    ref={navigator => {
      setNavigator(navigator)
    }}
    />
  );
}