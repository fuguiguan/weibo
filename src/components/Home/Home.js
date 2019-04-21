
import React,{ Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Item from './Item'
import Home_Logined from './Home_Logined'
import { connect } from 'react-redux';
import { AppState } from '../../reducers/loginReducer';
class Home extends Component {
    static navigationOptions = {
        tabBarlabel: '首页',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon name={focused? 'md-home':'ios-home' } size={16} />
        )
    };
    render() {
        if(this.props.logined){
            return <Home_Logined />
        }else {
            return (
                <ScrollView>
                    <Item />
                    <Item />    
                </ScrollView>
    
            );
        }

    }
}

class HomeHeader extends Component{
    render() {
        return(
            <View style={headStyle.container}>
                <Image source={require('../../assets/images/camaro.png')} style={headStyle.img}/>
                <Text style={headStyle.text}>动态</Text>
                <Image source={require('../../assets/images/plus.png')} style={headStyle.img}/>
            </View>
        )
    }
}
const headStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        width: 24,
        height: 24
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1296db'
    }
})

const HomeStack = createStackNavigator({
    Home: Home
});
Home.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <HomeHeader />
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        times: 1,
        logined: state.status == AppState.LOGINED
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        // login: (code) => dispatch(loginAction(code))
    }
}
export default connect(mapStateToProps, null)(HomeStack);