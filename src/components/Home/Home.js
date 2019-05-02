
import React,{ Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet,Button,FlatList} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Item from './Item'
import Home_Logined from './Home_Logined'
import { AppState } from '../../reducers/loginReducer'
import { connect } from 'react-redux'
import selectHome from '../../actions/homeAction'
import selectComment from '../../actions/commentAction'


class Home extends Component {
    constructor(props) {
        super(props);
        this.times = this.props.times
        // this.sourceData=this.props.weibos
        this.getWeibo = this.getWeibo.bind(this)
        this.refreshing = this.props.refreshing
    }
    render() {
            return (
                <View>
                    <Button title='getWeibo' onPress={this.getWeibo}/>
                    <FlatList
                        data={this.props.weibos}
                        refreshing={this.refreshing}
                        onRefresh={this.getWeibo}
                        renderItem={({item}) =>{
                            return <Item 
                                avatar={item.original_pic}
                                name={item.user.screen_name}
                                info={item.created_at}
                                content={item.text}
                                reposts={item.reposts_count}
                                comments={item.comments_count}
                                likes={item.attitudes_count}
                                goComment={this.goComment.bind(this,item.id)}
                            />
                        }} />                  
                </View>
            );
    }
    getWeibo() {
        this.props.selectHome(1,50)
        this.refreshing = false
    }
    goComment(id) {
        this.props.navigation.navigate('comment',{
            id
        })
        this.props.selectComment(1,30,id)
    }
    componentWillMount(){
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
        refreshing: true,
        // logined: state.status == AppState.LOGINED
        weibos: state.homeReducer.weibo.statuses
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        selectHome: (page,count) => dispatch(selectHome(page,count)),
        selectComment: (page,count,id) => dispatch(selectComment(page,count,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);