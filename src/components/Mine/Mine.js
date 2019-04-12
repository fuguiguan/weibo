import React,{ Component } from 'react'
import { View, Button,AsyncStorage, Text, Image,StyleSheet} from 'react-native'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Mine_Nologin from './Mine_Nologin';
import { AppState } from '../../reducers/loginReducer'
import { connect } from 'react-redux'
import Login from './Login'
import UserInfo  from './UserInfo'
class Mine extends Component {
    constructor(props) {
        super(props);
        this.logined = this.props.logined
    }
    render() {
        if(this.props.logined){
            return <UserInfo />
        }else {
            return <Mine_Nologin />
        }
    }
}
class MineHeader extends Component {
    render() {
        return (
            <View style={MineStyle.container}>
                <Image source={require('../../assets/images/add.png')} style={MineStyle.img}/>
                <Text style={MineStyle.text}>我</Text>
                <Image source={require('../../assets/images/exit.png')} style={MineStyle.img}/>
            </View>
        )
        
    }
}
const MineStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    img: {
        width: 24,
        height:24
    }
})
const MineStack = createStackNavigator({
    Mine_Nologin: {
        screen: Mine_Nologin,
    },
    Mine: Mine,
    Login:{
        screen: Login,
        navigationOptions:() => ({
            title: '授权'
        })
    },
    UserInfo: UserInfo
},{
    initialRouteName: this.logined? 'UserInfo' : 'Mine_Nologin'
})
Mine.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <MineHeader />
    }
}
Mine_Nologin.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <MineHeader />
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        logined: state.status == AppState.LOGINED
    }
} 
export default connect(mapStateToProps,null)(MineStack);