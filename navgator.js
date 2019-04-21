/*
 * @Author: fuguiguan
 * @Date: 2019-03-03 15:22:24
 * @Last Modified by: fuguiguan
 * @Last Modified time: 2019-04-21 11:43:26
 */
import React from 'react';
import { createAppContainer, createBottomTabNavigator, } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import MsgIcon from 'react-native-vector-icons/FontAwesome'
import Home from './src/components/Home/Home';
import Mine from './src/components/Mine/Mine';
import Rank from './src/components/Search/Rank';
import Message from './src/components/Message/Message'

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
    message: {
      screen: Message,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon: ({tintColor, focused}) => (
          <MsgIcon name='envelope-o' size={25} color={focused? 'blue':'#333' }/>
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
    },
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
    }
  }

const appTabNavigator = createBottomTabNavigator(
 routeConfig ,BottomTabNavigatorConfig
);
const AppContainer = createAppContainer(appTabNavigator);

export default AppContainer;