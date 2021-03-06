/*
 * @Author: fuguiguan
 * @Date: 2019-03-03 15:22:24
 * @Last Modified by: fuguiguan
 * @Last Modified time: 2019-05-31 14:34:22
 */
import React from 'react';
import { connect } from 'react-redux'
import { AppState } from './src/reducers/loginReducer'
import { createAppContainer, createBottomTabNavigator, createStackNavigator,createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import MsgIcon from 'react-native-vector-icons/FontAwesome'
import Home from './src/components/Home/Home';
import Comment from './src/components/Home/Comment'
import Search from './src/components/Search/Search';
import Message from './src/components/Message/Message'
import CommentAtMe from './src/components/Message/CommentAtMe'
import CommentMsg from './src/components/Message/CommentMsg'
import UserInfo from './src/components/Mine/UserInfo'
import NotLogin from './src/components/Mine/Mine_Nologin'
import Login from './src/components/Mine/Login'
import storage from './src/global'
import MyWeiBo from './src/components/Mine/MyWeibo'
import imgView from './src/components/Home/ImgView.js'
import Item from './src/components/Home/Item';

let token = storage.load({
  key: 'access_token'
})
/**
 * 导航栏路由配置
 */
const HomeStack = createStackNavigator({
  home: {
    screen: Home
  },
  Item: {
    screen: Item
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

const MessageStack = createStackNavigator({
  Message: {
    screen: Message
  }
})

const MineStack = createStackNavigator({
  UserInfo: {
    screen: UserInfo,
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
      screen: MessageStack,
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

const MainStack = createStackNavigator({ // 第二个开始放置二级页面，自动隐藏底部的Tab
  MainTab: {
    screen: appTabNavigator,
    navigationOptions: ({navigation}) => ({header: null})
  },
  imgView: {
    screen: imgView
  },
  comment: {
    screen: Comment
  },
  MyWeiBo: {
    screen: MyWeiBo
  },
  CommentMsg: {
    screen: CommentMsg
  },
  CommentAtMe: {
    screen: CommentAtMe
  }
},{
  initialRouteName: 'MainTab',
})

const rootNavigator = createSwitchNavigator({
  MainStack: {
    screen: MainStack
  },
  NotLoginStack: {
    screen: NotLoginStack
  }
},{
  initialRouteName: token? 'MainStack' : 'NotLoginStack',
  navigationOptions: {
    header: ({navigation}) =>{
      let {state:{routes}} = navigation;
      NavigationService.setRouters(routes, navigation);
      return null;
    }
  }
})
const AppContainer = createAppContainer(rootNavigator);

const mapStateToProps = (state) => {
  return {
    isLogined: state.loginReducer.status == AppState.LOGINED 
  }
}
// export default connect(mapStateToProps)(AppContainer);
export default AppContainer;