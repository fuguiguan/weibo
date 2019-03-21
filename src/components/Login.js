import { React, Component } from 'react'
import { WebView,View,Dimensions } from "react-native"
import { connect } from 'react-redux'
import { getAuthURL,getCode } from '../api/index'
import { loginAction } from '../actions/loginAction'
import { AppState } from '../reducers/loginReducer'
import Toast from 'react-native-root-toast'
// const {width,height} = Dimensions.get('window');
class Login extends Component {
    constructor(props) {
        super(props);
        this.times = this.props.times
    }
    onNavigationStateChange = (navState) => {
        let code = getCode(navState);
        if (code !=0 && this.times ==1) {
            Toast.show('应用正在授权···',{
                position: Toast.positions.CENTER
            })
            this.props.loginAction(code)
            this.times++
        }
    }

    componentDidUpdate() {
        if (this,props.LoginFailed) {
            Toast.show('授权失败',{
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER
            })
        }
        if (this.props.isLogin) {
            Toast.show('授权成功',{
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER
            })            
        }
    }

    render() {
        return(
            <WebView 
            ref = {(ref) =>{this.WebView = ref}}
            source ={{uri: getAuthURL()}}
            startInLoadingState = {true}
            onNavigationStateChange = {this.onNavigationStateChange.bind(this)}
            />
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        times: 1,
        LoginFailed: state.Login.status == AppState.LOGIN_FAIL,
        isLogin: state.Login.status == AppState.LOGIN
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        loginAction: (code) => dispatch(loginAction(code))
    }
}
const LoginController = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginController;