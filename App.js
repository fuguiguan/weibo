/*
 * @Author: fuguiguan
 * @Date: 2019-03-03 15:22:24
 * @Last Modified by: fuguiguan
 * @Last Modified time: 2019-04-27 17:54:05
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './navgator';
import NavigationService from './src/navigations/NavigationService'
import store from './src/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          // ref={navigatorRef => {
          //   NGService.setTopLevelNavigator(navigatorRef)
          // }}
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    )
  }
}

