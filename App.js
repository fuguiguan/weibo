/*
 * @Author: fuguiguan
 * @Date: 2019-03-03 15:22:24
 * @Last Modified by: fuguiguan
 * @Last Modified time: 2019-03-09 19:54:21
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/components/Home';
import Mine from './src/components/Mine';
import Rank from './src/components/Rank';

/**
 * 导航栏路由配置
 */
const routeConfig = {
    home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon name='md-home' size={25} color={focused? 'blue':'#333' }/>
        ),
      }
    },
    rank: {
      screen: Rank,
      navigationOptions: {
        tabBarLabel: '搜索',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon name='md-search' size={25} color={focused? 'blue':'#333' }/>
        ),
      }
    },
    mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon name='md-person' size={25} color={focused? 'blue':'#333' }/>
        ),
      }
    } 
  };
/**
 * 导航栏样式等相关配置
 */
  const BottomTabNavigatorConfig = {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      inactiveTintColor: '#333',
      activeTintColor: 'blue',
      tabBarPosition: 'top',
      indicatorStyle: {
        height: 0 //去掉底下存在的那条线
      }
      // labelStyle: {
      //   width: 10
      // }
    }
  }

const appTabNavigator = createBottomTabNavigator(
 routeConfig ,BottomTabNavigatorConfig
);

const appContainer = createAppContainer(appTabNavigator);
export default appContainer;

const styles = StyleSheet.create({
  tabBarIconStyle: {
    width: 25,
    height: 25,
    
  }
});
