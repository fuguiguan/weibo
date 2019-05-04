/*
 * @Author: fuguiguan
 * @Date: 2019-03-03 15:22:24
 * @Last Modified by: fuguiguan
 * @Last Modified time: 2019-05-04 17:21:39
 */
import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator,createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import MsgIcon from 'react-native-vector-icons/FontAwesome'
import Home from './src/components/Home/Home';
import Comment from './src/components/Home/Comment'
import Mine from './src/components/Mine/Mine';
import Search from './src/components/Search/Search';
import Message from './src/components/Message/Message'
import UserInfo from './src/components/Mine/UserInfo'
import NotLogin from './src/components/Mine/Mine_Nologin'
import Login from './src/components/Mine/Login'
/**
 * 导航栏路由配置
 */
const HomeStack = createStackNavigator({
  home: {
    screen: Home
  },
  comment: {
    screen: Comment
  }
},{
  navigationOptions: {
    header: null
  }
})

const SearchStack = createStackNavigator({
  Search: {
    screen: Search
  }
},{
  navigationOptions: {
    header: null
  }
})
const MineStack = createStackNavigator({
  UserInfo: {
    screen: UserInfo
  }
},{
  navigationOptions: {
  }
})
const NotLoginStack = createStackNavigator({
  NotLogin: {
    screen: NotLogin
  },
  Login: {
    screen: Login
  }
},{
  navigationOptions: {
    header: null
  }
})
const routeConfig = {
    home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon name='md-home' size={25} color={focused? 'blue':'#333' }/>
        ),
      }
    },
    search: {
      screen: SearchStack,
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
      screen: MineStack,
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

const rootNavigator = createSwitchNavigator({
  MainTab: {
    screen: appTabNavigator
  },
  NotLoginStack: {
    screen: NotLoginStack
  }
},{
  navigationOptions: {
    header: ({navigation}) =>{
      let {state:{routes}} = navigation;
      NavigationService.setRouters(routes, navigation);
      return null;
    }
  }
})
const AppContainer = createAppContainer(rootNavigator);

export default AppContainer;