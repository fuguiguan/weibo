import React,{ Component } from 'react';
import { View, 
    Text, 
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import UserInfo from './UserInfo'
import { connect } from 'react-redux'
import { AppState } from '../../reducers/loginReducer'
import { Button } from 'react-native-elements'
const { width, height} = Dimensions.get('window')
class Mine_Nologin extends Component {
    constructor(props){
        super(props);
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleClickRegister = this.handleClickRegister.bind(this);
    }
    render() {  
        if(this.props.logined){
            return <UserInfo />
        } else {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/images/mine_notLogin.png')} style={styles.imgContainer}>
                        <Image source={require('../../assets/images/person.png')} style={styles.img}/>
                    </ImageBackground>
                    <Text style={styles.text}>登录后，你的微博信息和个人资料会显示在这里,展示给别人看</Text>
                    <View style={styles.logContainer}>
                    {/* <TouchableOpacity onPress={this.handleClickRegister}>
                        <Image source={require('../../assets/images/register.png')} style={styles.register}/>   
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleClickLogin}>
                        <Image source={require('../../assets/images/login.png')} style={styles.login}/>
                    </TouchableOpacity> */}
                    <Button title='注 册' onPress={this.handleClickRegister} style={styles.register}/>
                    <Button title='登 录' onPress={this.handleClickLogin} style={styles.login}/>
                    </View>
                </View>
            );
        }
    }
    handleClickRegister() {
        // alert('微博api暂未开放注册接口，请转到登录界面进行注册')
        this.props.navigation.navigate('MainTab');
    }

    handleClickLogin() {
        console.log(this.props)
        this.props.navigation.navigate('Login');

    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#eee'
    },
    imgContainer: {
        width:'100%',
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width:100,
        height:100,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    text: {
        padding: 20,
        marginTop: 20,
        marginBottom: 40,
        width: '100%',
        color: '#aaa',
        fontSize: 16
    },
    logContainer: {
        height: 300,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    register: {
    },
    login: {
    },
})
const mapStateToProps = (state,ownProps) => {
    return {
        logined: state.status == AppState.LOGINED
    }
}
export default connect(mapStateToProps,null)(Mine_Nologin);