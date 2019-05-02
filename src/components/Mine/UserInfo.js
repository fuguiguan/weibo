import React,{ Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { getUserInfo } from '../../api/index'
import NavigationService from '../../navigations/NavigationService'

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {

    }

    render() {
        return(
            <View style={{flexDirection:'column'}}>
                <View style={styles.containerTop}>
                    <Image source={{uri: this.props.userInfo.profile_image_url}} style={styles.image}/>
                    <View style={styles.userInfo}>
                        <Text style={styles.userTitle}>{this.props.userInfo.screen_name}</Text>
                        <Text style={styles.userDesc}>简介：{this.props.userInfo.description}</Text>
                    </View>
                </View>
                <View style={styles.containerData}>
                    <View style={styles.item}>
                        <Text style={styles.number}>{this.props.userInfo.statuses_count}</Text>
                        <Text style={styles.item1}>微博</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.number}>{this.props.userInfo.friends_count}</Text>
                        <Text style={styles.item1}>关注</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.number}>{this.props.userInfo.followers_count}</Text>
                        <Text style={styles.item1}>粉丝</Text>
                    </View>
                </View>
                <View><Button title='退出当前帐号' color='red' onPress={this.logout}/></View>
            </View>
        )
    }
    logout() {
        // alert(this.props)
        console.log(this.props)
        NavigationService.navigate('NotLogin')
        // this.props.navigation.navigate('Mine_Nologin')
    }
}
const mapStatetoProps = state => {
    return {
        userInfo: state.loginReducer.userInfo
    }
}
export default connect(mapStatetoProps)(UserInfo);
const styles = StyleSheet.create({
    // 用户头像相关信息
    containerTop: {
        flexDirection: 'row',
        padding: 10,
        // justifyContent: 'space-around',
        // alignItems: 'baseline'
        borderBottomWidth: 1,
        borderBottomColor: '#eee',


    },
    image: {
        width: 80,
        height: 80,
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        // borderBottomLeftRadius: 40,
        // borderBottomRightRadius: 40,
        // marginRight:10
        borderRadius: 40
    },
    userInfo: {
        // flex: 2,
        marginTop: 10,
        height:40
    },
    userTitle: {
        fontWeight: 'bold',
        fontSize:14
    },
    userDesc: {
        fontSize:14,
        color: '#666'
    },

    //用户其他的相关信息 微博数、粉丝、关注
    containerData: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 10,
        borderBottomColor: '#eee'
    },
    item: {
        justifyContent:'center',
        alignItems:'center'
    },
    item1: {
        color:'#666'
    }
    
})