
import React,{ Component } from 'react';
import { View, AsyncStorage} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview'
import { getAuthURL,getCode,getAccess_token } from '../../api/index'
import loginAction from '../../actions/loginAction'
import { NavigationActions, StackActions } from 'react-navigation'

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'UserInfo'})
    ]
  })

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
            this.times++
            this.props.navigation.dispatch(resetAction)
        }
    }

    render() {
        return (
            <View style={{width:'100%',height:'100%'}}>
                <WebView 
                // ref = {(ref) =>{this.WebView = ref}}
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
        login: (code) => dispatch(loginAction(code))
    }
}
const LoginController = connect(mapStateToProps,mapDispatchToProps)(Login)
export default LoginController;