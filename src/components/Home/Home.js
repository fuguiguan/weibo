
import React,{ Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet,Button,FlatList} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Item from './Item'
import Home_Logined from './Home_Logined'
import { AppState } from '../../reducers/loginReducer'
import { connect } from 'react-redux'
import selectHome from '../../actions/homeAction'

class Home extends Component {
    constructor(props) {
        super(props);
        // this.sourceData=this.props.weibos
        this.getWeibo = this.getWeibo.bind(this)
    }
    render() {
            return (
                <View>
                    <Button title='getWeibo' onPress={this.getWeibo}/>
                    <FlatList
                        data={this.props.weibos}
                        renderItem={({item}) =>{
                            return <Item 
                                avatar={item.original_pic}
                                name={item.user.screen_name}
                                info={item.source}
                                content={item.text}
                                reposts={item.reposts_count}
                                comments={item.comments_count}
                                likes={item.attitudes_count}
                            />
                        }} />                  
                </View>
            );
    }
    getWeibo() {
        this.props.selectHome(1,50)
        // console.log('fuguiguan')
    }
    componentDidMount(){
        this.props.selectHome(1,50)
    }
}

class HomeHeader extends Component{
    render() {
        return(
            <View style={headStyle.container}>
                {/* <Image source={require('../../assets/images/camaro.png')} style={headStyle.img}/> */}
                <Text style={headStyle.text}>动态</Text>
                {/* <Image source={require('../../assets/images/plus.png')} style={headStyle.img}/> */}
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
        justifyContent: 'center'
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

Home.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <HomeHeader />
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        times: 1,
        // logined: state.status == AppState.LOGINED
        weibos: state.homeReducer.weibo.statuses
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        selectHome: (page,count) => dispatch(selectHome(page,count))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);