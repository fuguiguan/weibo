
import React,{ Component } from 'react';
import { View, AsyncStorage} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview'
import { getAuthURL,getCode,getAccess_token } from '../../api/index'
import loginAction from '../../actions/loginAction'
import { NavigationActions, StackActions } from 'react-navigation'
import NavigationService from '../../navigations/NavigationService'
import selectHome from '../../actions/homeAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.times = this.props.times;
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    }

    
    onNavigationStateChange = (navState) => {
        let code = getCode(navState);
        if(code && this.times==1){
            this.props.login(code)
            this.props.selectHome(1,40)
            this.times++
            NavigationService.navigate('MainTab')
           
        }
    }

    render() {
        return (
            <View style={{width:'100%',height:'100%'}}>
                <WebView 
                source ={{uri: getAuthURL()}}
                startInLoadingState = {true}
                onNavigationStateChange = {this.onNavigationStateChange}
                />
            </View>

        );
    }


}

const mapStateToProps = (state,ownProps) => {
    return {
        times: 1
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        login: (code) => dispatch(loginAction(code)),
        selectHome: (page,count) => dispatch(selectHome(page,count))
    }
}
const LoginController = connect(mapStateToProps,mapDispatchToProps)(Login)
export default LoginController;