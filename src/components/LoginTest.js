import React,{ Component } from 'react';
import { View, Text, Button} from 'react-native';
import { Webview } from 'react-native-webview'
export default class LoginTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
        this.loginClick = this.loginClick.bind(this);
    }
    render() {
        if (this.state.isLogin) {
            return (
                <View>
                    
                </View>
            )
        }
        return(
            <View>
                <Text></Text>
                <Button title='登录/注册'
                        onPress={this.loginClick}/>
            </View>
        )
    }
    loginClick() {
      return (
        <Webview source={{uri: 'https://api.weibo.com/oauth2/authorize?client_id=3207738322&redirect_uri=https://fuguiguan.cn'}}/>
      ); 
    }
}
