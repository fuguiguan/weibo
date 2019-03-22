import React,{ Component } from 'react'
import { View, Text,Dimensions} from 'react-native'
import { WebView } from 'react-native-webview'
import Login from './Login';
import Icon from 'react-native-vector-icons/Ionicons'
import UserInfo from './UserInfo'
// const { width, height } = Dimensions.get('window');
const jsForInjection = `var el = document.getElementsByTagName('body')[0];
el.style.height = '${Dimensions.get('window').height}px';`;

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this);

    }
    static navigationOptions = {
        tabBarlabel: '我的',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon name={focused? 'md-home':'ios-home' } size={16} />
        )
    };

    render() {
        return (
            <WebView source={{uri:'https://api.weibo.com/oauth2/authorize?client_id=3207738322&redirect_uri=https://fuguiguan.cn'}}
            javaScriptEnabled={true}
            injectedJavaScript={jsForInjection}
            />
        );
    }

    onNavigationStateChange() {
        return ;
    }
}

